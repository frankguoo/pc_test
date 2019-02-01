$(function()
{   
    $(window)
        .load(function()
        {
            var strTimeStamp = parseInt((new Date().getTime())/60000) ; // change per minute
            $.ajax(
            {
                 url:'//ecapi.pchome.com.tw/cdn/ecshop/adapi/v5/ad&q=onsale&site=mall&sign=mall%252F3c&d=now&_callback=jsonpcb_onsale_3c&'+ strTimeStamp
                ,dataType : 'jsonp'
                ,jsonp : false
                ,jsonpCallback : 'jsonpcb_onsale_3c'
                ,cache : true
            })
            .done(function(data)
            {
                $.each(data, function(idx, _data)
                {

                    $.each(_data.Nodes, function(idx, _node)
                    {
						$("#BOX_A")
                            .append('<li id="box'+idx+'" class="box">'+
                                        '<a href="'+_node.Link.Url+'" target="_blank"><div class="imgs"><img src="'+_node.Img2.Src+'" alt=""></div></a>'+
                                     '</li>');	 
                    });
						 
                });
                $('#BOX_A img').each(function(){
                    $(this).attr('src',$(this).attr('src').replace('ec1img.pchome.com.tw','b.ecimg.tw')); 
                });
            });
			
			
			 $.ajax(
            {
                 url:'//ecapi.pchome.com.tw/cdn/ecshop/adapi/v5/ad&q=onsale&site=mall&sign=mall%252Flife&d=now&_callback=jsonpcb_onsale_life&'+ strTimeStamp
                ,dataType : 'jsonp'
                ,jsonp : false
                ,jsonpCallback : 'jsonpcb_onsale_life'
                ,cache : true
            })
            .done(function(data)
            {
                $.each(data, function(idx, _data)
                {

                    $.each(_data.Nodes, function(idx, _node)
                    {
						
						$("#BOX_B")
                            .append('<li class="box">'+
                                        '<a href="'+_node.Link.Url+'" target="_blank"><div class="imgs"><img src="'+_node.Img2.Src+'" alt=""></div></a>'+ 
                                	 '</li>') ;
							
					});
					
                });
                $('#BOX_B img').each(function(){
                    $(this).attr('src',$(this).attr('src').replace('ec1img.pchome.com.tw','c.ecimg.tw')); 
                });

            });
			
			
			 $.ajax(
            {
                 url:'//ecapi.pchome.com.tw/cdn/ecshop/adapi/v5/ad&q=onsale&site=mall&sign=mall%252Fbeauty&d=now&_callback=jsonpcb_onsale_beauty&'+ strTimeStamp
                ,dataType : 'jsonp'
                ,jsonp : false
                ,jsonpCallback : 'jsonpcb_onsale_beauty'
                ,cache : true
            })
            .done(function(data)
            {
                $.each(data, function(idx, _data)
                {

                    $.each(_data.Nodes, function(idx, _node)
                    {
						
						 $("#BOX_C")
                            .append('<li class="box">'+
                                        '<a href="'+_node.Link.Url+'" target="_blank"><div class="imgs"><img src="'+_node.Img2.Src+'" alt=""></div></a>'+
                                	 '</li>');
									
							
					});
					
                });
                $('#BOX_C img').each(function(){
                    $(this).attr('src',$(this).attr('src').replace('ec1img.pchome.com.tw','d.ecimg.tw')); 
                });
            });
			
			$.ajax(
            {
                 url:'http://ecapi.pchome.com.tw/cdn/ecshop/adapi/v5.1/ad&q=welcome&site=mall&d=20190131&t=now&_callback=json_welcome&'+ strTimeStamp
                ,dataType : 'jsonp'
                ,jsonp : false
                ,jsonpCallback : 'json_welcome'
                ,cache : true
            })
            .done(function(data)
            {
                $.each(data, function(idx, _data)
                {
                    if (!_data.Nodes[0])
                    {
                        return ;
                    }

                    $.each(_data.Nodes, function(idx, _node)
                    {

                        $("#BOX_D #titlebodya")
                            .append('<li class="boxa">'+
									'<a id="txtBox" href="'+_node.Link.Url+'" target="_blank">'+'<div class="imga"><img src="'+_node.Img.Src+'" alt=""></div><div class="txt0">'+_node.Link.Text+'</div><a href="'+_node.Link.Url+'" target="_blank"><div class="txt1">'+_node.Link.Text1+'</div></a><a href="'+_node.Link.Url+'" target="_blank"><div class="txt2"><span class="txt3">$</span><span class="txt4">'+_node.Link.Text2+'</span><span class="txt5">搶></span></div></a>'+'</a>'	
                                	+'</li>') ;

                    }) ;
                });
                $('#BOX_D img').each(function(){
                    $(this).attr('src',$(this).attr('src').replace('ec1img.pchome.com.tw','e.ecimg.tw')); 
                });
            });
			
        }) ;
});
