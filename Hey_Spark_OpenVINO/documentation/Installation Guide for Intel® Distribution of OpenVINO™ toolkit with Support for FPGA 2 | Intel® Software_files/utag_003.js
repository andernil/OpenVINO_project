//~~tv:5001.20141231
//~~tc: Update to fix mapping logic

var _elqQ = _elqQ || [];

//tealium universal tag - utag.sender.5001 ut4.0.201708102047, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{
(function(id,loader,u){
  try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
  u.ev={'view':1};
  u.qsp_delim='&';
  u.kvp_delim='=';
  u.elqSetSiteId="334284386";
  u.base_url="//img.en25.com/i/elqCfg.min.js";
  if(utag_data.load_eloqua.indexOf('true') > -1)
  utag_data.tag_id_onload=wap_tms.add_tags(id);
  u.map={};
  u.extend=[];

  u.send=function(a,b,c,d,e,f){
    if(u.ev[a]||typeof u.ev.all!="undefined"){
      _elqQ.push(["elqSetSiteId", u.elqSetSiteId]);
      
      c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){
        if(e[f]=="base_url" || e[f]=="form_tracking" || e[f]=="elqFormName" || e[f]=="elqFormGUIDElement"){
          u[e[f]]=b[d];
        }else{
          _elqQ.push([e[f],b[d]]);
        }
      }}}

      _elqQ.push(['elqTrackPageView']);

      if(u.form_tracking==true || u.form_tracking=="true" || u.form_tracking=="on" || u.form_tracking=="yes"){
        u.timerId = null;
        u.timeout = 5;
        function WaitUntilCustomerGUIDIsRetrieved() {
          if (!!(u.timerId)) {
            if (u.timeout == 0) {
              return;
            }
            if (typeof this.GetElqCustomerGUID === 'function') {
              document.forms[u.elqFormName].elements[u.elqFormGUIDElement].value = GetElqCustomerGUID();
              return;
            }
            u.timeout -= 1;
          }
          u.timerId = setTimeout(WaitUntilCustomerGUIDIsRetrieved, 500);
          return;
        }
        WaitUntilCustomerGUIDIsRetrieved();
        _elqQ.push(['elqGetCustomerGUID']);
      }
		/*
      u.s=document.getElementsByTagName("script")[0];u.scr=document.createElement("script");u.scr.type="text/javascript";u.scr.src=u.base_url;
      u.s.parentNode.insertBefore(u.scr,u.s);
		*/
		//Template updated on 08/04/2017 from URL http://img.en25.com/i/elqCfg.min.js
		(function(){var b="",N=new Date(20020101),O=new Date,g=O.getMilliseconds(),r=N.getTimezoneOffset(),l=window,q=document,z=0,m=1,f=2,c="",n="",B="/visitor/v200/svrGP",k="eloqua.com",d="",e="";function a(a){return typeof a==="undefined"||null===a||a===""}function J(a){try{return typeof a==="string"&&decodeURI(a)!==a}catch(b){return false}}function p(b){if(a(b))if(document.referrer)b=encodeURI(document.referrer);else b="elqNone";return b}function K(j,i){if(!a(d)&&!a(b)){var h=d+"?pps=50&siteid="+b+"&DLKey="+encodeURIComponent(j)+"&DLLookup="+encodeURIComponent(i)+"&ms="+g+e;if(!a(c))h+="&elqGUID="+c;var f=document.createElement("script");f.type="text/javascript";f.src=h;document.getElementsByTagName("head")[0].appendChild(f)}}function H(){if(!a(d)&&!a(b)){var h=d+"?pps=70&siteid="+b+"&ref="+encodeURI(document.referrer)+"&ms="+g+e;if(!a(c))h+="&elqGUID="+c;var f=document.createElement("script");f.type="text/javascript";f.src=h;document.getElementsByTagName("head")[0].appendChild(f)}}function j(s,k,l){var i="";if(!a(d)&&!a(b)){if(e!=""){var q=h("OPTIN");if(q!=null)if(q=="0")return;else if(q=="1")i+="&isOptedIn=1"}k=p(k);if(!a(l))if(l===f)i+="&optin=country";else if(l===m)i+="&optin=all";else if(l===z)i+="&optin=disabled";var t=new Image(1,1);if(!a(s)){var j=d+"?pps=3&siteid="+b+"&ref="+encodeURI(s)+"&ref2="+k+"&tzo="+r+"&ms="+g+i+e;if(!a(c))j+="&elqGUID="+c;j+=o(n);t.src=j}else{var j=d+"?pps=3&siteid="+b+"&ref2="+k+"&tzo="+r+"&ms="+g+i+e;if(!a(c))j+="&elqGUID="+c;j+=o(n);t.src=j}}}function I(b,a){j(b,a,z)}function u(b,a){j(b,a,f)}function v(b,a){j(b,a,m)}function i(f){if(!a(d)&&!a(b)&&!a(f)){if(f==40&&e!=""){var i=h("OPTIN");if(i!=null)if(i=="0")return y("function elqGetOptOutStatus(){ return 0; }");else if(i=="1")return y("function elqGetOptOutStatus(){ return 1; }")}if(f!=43&&f!=44||e==""){elqOptActionSrc=d+"?pps="+encodeURIComponent(f)+"&siteid="+b+"&ref="+encodeURI(location.href)+"&ms="+g+e;if(!a(c))elqOptActionSrc+="&elqGUID="+c;var j=document.createElement("script");j.type="text/javascript";j.src=elqOptActionSrc;document.getElementsByTagName("head")[0].appendChild(j)}}}function y(b){var a=document.createElement("script");a.type="text/javascript";a.appendChild(document.createTextNode(b));document.getElementsByTagName("head")[0].appendChild(a)}function t(g,e,c){if(!a(d)&&!a(b))if(x()){A("ELQSITEVISITED","YES");w(g,e,c)}else if(g==f)u(e,c);else v(e,c)}function s(c,g,e){if(!a(d)&&!a(b)){var i=h("OPTIN");if(i!=null)if(i=="0")return;else i=="1"&&j(g,e,c);else if(x()){A("ELQSITEVISITED","YES");if(c==f)w(c,g,e);else elqCreateOptInBanner()}else c==f&&j(g,e,c)}}function w(l,k,i){i=p(i);var h=d+"?pps=45&siteid="+b+e;if(!a(k))h+="&ref="+encodeURI(k);h+="&ref2="+i+"&tzo="+r+"&ms="+g;if(l==f)h+="&optin=country";else h+="&optin=all";if(!a(c))h+="&elqGUID="+c;var j=document.createElement("script");j.type="text/javascript";j.src=h;document.getElementsByTagName("head")[0].appendChild(j)}function E(b,a){if(e!="")s(f,b,a);else t(f,b,a)}function F(b,a){if(e!="")s(m,b,a);else t(m,b,a)}function A(b,a){document.cookie=b+"="+a;document.cookie+=";path=/; secure; HttpOnly; "}function C(a,c){if(a=="")return null;var b=a.indexOf("=");if(b>0){var d=a.substr(0,b);if(d.trim()==c)return a.substr(b+1)}return null}function h(c){for(var b=document.cookie.split(";"),a=0;a<b.length;a++){elqCookieValue=C(b[a],c);if(elqCookieValue!=null)return unescape(elqCookieValue)}return null}function G(e,d){var a=h(e);if(a!=null)for(var c=a.split("&"),b=0;b<c.length;b++){a=C(c[b],d);if(a!=null)return a}return null}function x(){var a=h("ELQSITEVISITED");return a==null||a!="YES"}function o(b){var c="";if(!a(b))c+="&bkuuidSwapTime="+encodeURIComponent(b);return c}function P(a){return!isNaN(a)&&parseInt(Number(a))==a&&!isNaN(parseInt(a,10))}var M=function(){this.push=function(){for(var a=0;a<arguments.length;a++)try{if(typeof arguments[a]==="function")arguments[a]();else switch(arguments[a][0]){case"elqSetRootDomain":k=encodeURIComponent(arguments[a][1]);var g;if(arguments[a][2]!=undefined&&P(arguments[a][2])){g=arguments[a][2];k=k+":"+g}d=("https:"==document.location.protocol?"https://":"http://")+"s"+b+".t."+k+B;break;case"elqSetSiteId":b=encodeURIComponent(arguments[a][1]);d=("https:"==document.location.protocol?"https://":"http://")+"s"+b+".t."+k+B;break;case"elqTrackPageView":I.apply(this,arguments[a].slice(1));break;case"elqVisitorGuid":c=encodeURIComponent(arguments[a][1]);break;case"elqTrackPageViewOptinByCountry":u.apply(this,arguments[a].slice(1));break;case"elqTrackPageViewOptinAll":v.apply(this,arguments[a].slice(1));break;case"elqTrackPageViewDisplayOptInBannerByCountry":E.apply(this,arguments[a].slice(1));break;case"elqTrackPageViewDisplayOptInBannerForAll":F.apply(this,arguments[a].slice(1));break;case"elqDataLookup":K.apply(this,arguments[a].slice(1));break;case"elqGetCustomerGUID":H.apply(this);break;case"elqOptStatus":i(40);break;case"elqOptIn":i(41);break;case"elqOptOut":i(42);break;case"elqGlobalOptIn":i(43);break;case"elqGlobalOptOut":i(44);break;case"elqUseFirstPartyCookie":e="&firstPartyCookieDomain="+encodeURIComponent(arguments[a][1]);var f=G("ELOQUA","GUID");if(f!=null)c=encodeURIComponent(f);n=h("BKUT")}}catch(j){}}},L=l._elqQ;l._elqQ=new M;l._elqQ.push.apply(l._elqQ,L);function D(i,j,h){if(!a(d)&&!a(b)&&!a(i)){h=p(h);var f=d+"?pps=17&siteid="+b+"&elq="+encodeURIComponent(j||"")+"&ref="+encodeURI(i)+"&ref2="+h+"&ms="+g;if(!a(c))f+="&elqGUID="+c;f+=o(n);if(f.length<=2036){var k=new Image(1,1);k.src=f}else{try{var e=q.createElement("iframe")}catch(l){e="<iframe src='"+f+"' width='0' height='0' style='display:none;visibility:hidden;'></iframe>";q.body.innerHTML+=e;return}e.height="0";e.width="0";e.style.display="none";e.style.visibility="hidden";q.body.appendChild(e);e.src=f}}}l._elq={trackEvent:function(a,b,c){D(a,b,c)},trackOutboundLink:function(b,f,g){D(b.href,f,g);var d=J(b.href)?b.href:encodeURI(b.href),c,e=b.getAttribute("target");if(a(e))c='document.location = "'+d+'"';else c='window.open("'+d+'", "'+encodeURIComponent(e)+'")';setTimeout(c,1e3)}}})()
    }
  }
  try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
})('130','intel.profile-ssg.intel');
}catch(e){}
//end tealium universal tag