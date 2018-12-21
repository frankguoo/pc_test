<!-- UBA Page -->
function guid(r){for(var o="",t=0;t<r;t++)o+=Math.floor(16*Math.random()).toString(16).toUpperCase();return o}
(function($,w,d,c){var fqdn=$('#uba-script').data('env');var k=d.createElement("script");k.type="application/javascript";k.src=fqdn+'/resources/rwd001/js/jquery.cookie.js';d.getElementsByTagName('head')[0].appendChild(k)
;k.onload=function(){if(!$.cookie('TST-UBA-ID'))$.cookie('TST-UBA-ID',guid(24),{expires:365*10,path: '/',domain:'.tstartel.com'})
;$.ajax({type:'GET',url:fqdn+'/rest/uba/page/approach?c='+c+'&u='+encodeURIComponent(w.location.href),cache:false,xhrFields:{withCredentials:true}})
;w.onbeforeunload=function(){$.ajax({type:'GET',url:fqdn+'/rest/uba/page/leave?c='+c+'&u='+encodeURIComponent(w.location.href),cache:false,xhrFields:{withCredentials:true}})}
;};})(jQuery,window,document,1);

<!-- UBA Action -->
function sendCode(o){var n=[o];try{$.post("rest/uba/action",JSON.stringify({channel:"1",url:encodeURIComponent(window.location.href),items:n}))}catch(o){window.console&&console.log(o)}}
