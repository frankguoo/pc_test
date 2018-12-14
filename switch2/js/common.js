'use strict';
// =======================================================================
// 関数定義
// =======================================================================

// postid指定の場合
function _BS_getById(originData, id){
	var destData = [];
	for (var i = 0; i<originData.length; i++) {
		if(originData[i].id===id){
			destData.push(originData[i]);
			break;
		}
	}
	return destData;
}

// カテゴリ指定の場合
function _BS_getByCategory(originData, category){
	var destData = [];
	for (var j = 0; j<originData.length; j++) {
		for(var jj = 0; jj<originData[j]._embedded['wp:term'][0].length; jj++){
			if(decodeURI(originData[j]._embedded['wp:term'][0][jj].slug)===category){
				destData.push(originData[j]);
			}
		}
	}
	return destData;
}

// タグ指定の場合
function _BS_getByTag (originData, tag){
	var destData = [];
	for (var j = 0; j<originData.length; j++) {
		for(var jj = 0; jj<originData[j]._embedded['wp:term'][1].length; jj++){
			if(decodeURI(originData[j]._embedded['wp:term'][1][jj].slug)===tag){
				destData.push(originData[j]);
			}
		}
	}
	return destData;
}

// 日付指定の場合
function _BS_getByDate (originData, start, end){
	var destData = [];
	var sTime = start.getTime();

	for (var i = 0; i<originData.length; i++) {
		var postTime = new Date(originData[i].date_gmt);
		postTime = postTime.getTime();

		if(postTime >= sTime){
			destData.push(originData[i]);
		}
	}

	// 期間の終わりが指定されていたら更に処理
	if(end){
		var eTime = end.getTime();
		var destData2 = [];

		for (var j = 0; j<destData.length; j++) {
			var postTime2 = new Date(destData[j].date_gmt);
			postTime2 = postTime2.getTime();

			// year が新しければ抜き出す
			if(postTime2 <= eTime){
				destData2.push(destData[j]);
			}
		}
		destData = destData2;
	}
	return destData;
}

// 数の指定
function _BS_getByNumber (originData, number, offset){
	if(number===undefined){
		number = originData.length;
	}
	var destData = [];
	for (var k = offset; k<(number+offset); k++) {
		if(originData[k]){
			destData.push(originData[k]);
		}
	}
	return destData;
}



var _BS = {};
_BS.status = false; // ステータス。全データjsonを取得したら true に変わる。

// =======================================================================
// 記事データの取得
// =======================================================================
_BS.getJSON = function(options){

	// ----------------------------------------------------------
	// 全データjsonがなければ取得する（リクエストされた最初の1回の想定）
	// ----------------------------------------------------------
	if(!_BS.allJSON){
		var jsonpath = '/data/bs/' + options.name + '/json/' + options.name + '.json';

		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
			if(req.readyState === 4 && req.status === 200){
				_BS.allJSON = JSON.parse(req.responseText);
				_BS.status = true;
			}
		};
		req.open("GET", jsonpath, false);
		req.send(null);
	}

	// 全データjsonを整形用（最後に返す）変数に入れる。
	// これ以降のjson整形はこの変数に対して行い。
	// リクエストごとに最初からやり直す。
	var returnJSON = _BS.allJSON;


	// ----------------------------------------------------------
	// ここからパラメータを元にjson整形
	// ----------------------------------------------------------

	// id指定があれば優先
	if(options.postid){
		returnJSON = _BS_getById(returnJSON, options.postid);

	// カテゴリとタグが両方していされていたらエラーを返す
	}else if(options.category && options.tag){
		returnJSON = 'error';

	// idが指定無しで、カテゴリとタグが両方指定されていなければ
	// その他のパラメータを元に整形
	}else{

		// カテゴリもしくはタグの指定があれば抜き出す。
		if(options.category){
			returnJSON = _BS_getByCategory(returnJSON, options.category);
		}
		if(options.tag){
			returnJSON = _BS_getByTag(returnJSON, options.tag);
		}

		// 日付の指定があれば抜き出す。
		if(options.date){
			returnJSON = _BS_getByDate(returnJSON, options.date[0], options.date[1]);
		}

		// ここから件数の調整
		// ----------------------------------------------------

		// offsetあり・numberあり：
		// 「**件目から**件目までのデータ」
		if(options.offset && options.number){
			returnJSON = _BS_getByNumber(returnJSON, options.number, options.offset);

		// offsetだけ：
		// 「**件目以降のデータ全部」
		}else if(options.offset && !options.number){
			returnJSON = _BS_getByNumber(returnJSON, undefined, options.offset);

		// numberのみ：
		// 「最初から**件分のデータ」
		}else if(!options.offset && options.number){
			returnJSON = _BS_getByNumber(returnJSON, options.number, 0);
		}
	}

	// 整形した json を返す
	return returnJSON;
};



// =======================================================================
// カテゴリの取得
// =======================================================================
_BS.getCategoryList = function(options){
	if(!_BS.categoryJSON){
		var jsonpath = '/data/bs/' + options.name + '/json/' + options.name + '_cate.json';
		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
			if(req.readyState === 4 && req.status === 200){
				_BS.categoryJSON = JSON.parse(req.responseText);
			}
		};
		req.open("GET", jsonpath, false);
		req.send(null);
	}
	return _BS.categoryJSON;
};

// =======================================================================
// タグの取得
// =======================================================================
_BS.getTagList = function(options){
	if(!_BS.tagJSON){
		var jsonpath = '/data/bs/' + options.name + '/json/' + options.name + '_tag.json';
		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
			if(req.readyState === 4 && req.status === 200){
				_BS.tagJSON = JSON.parse(req.responseText);
			}
		};
		req.open("GET", jsonpath, false);
		req.send(null);
	}
	return _BS.tagJSON;
};

// =======================================================================
// 記事数の取得
// =======================================================================
_BS.getCount = function(options){

	// ----------------------------------------------------------
	// 全データjsonがなければ取得する（リクエストされた最初の1回の想定）
	// ----------------------------------------------------------
	if(!_BS.allJSON){
		var jsonpath = '/data/bs/' + options.name + '/json/' + options.name + '.json';
		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
			if(req.readyState === 4 && req.status === 200){
				_BS.allJSON = JSON.parse(req.responseText);
				_BS.status = true;
			}
		};
		req.open("GET", jsonpath, false);
		req.send(null);
	}

	// 全データjsonを整形用（最後に返す）変数に入れる。
	// これ以降のjson整形はこの変数に対して行い。
	// リクエストごとに最初からやり直す。
	var countJSON = _BS.allJSON;

	if(options.category && options.tag){
		countJSON = 'error';
	}else{
		if(options.category){
			countJSON = _BS_getByCategory(countJSON, options.category);
		}
		if(options.tag){
			countJSON = _BS_getByTag(countJSON, options.tag);
		}

		// 日付の指定があれば抜き出す。
		if(options.date){
			countJSON = _BS_getByDate(countJSON, options.date[0], options.date[1]);
		}
	}
	return countJSON.length;
};


