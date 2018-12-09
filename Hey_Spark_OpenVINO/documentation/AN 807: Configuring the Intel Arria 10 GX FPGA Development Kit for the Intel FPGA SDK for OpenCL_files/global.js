!function(d,c){"function"==typeof define&&define.amd?define([],function(){return d.svg4everybody=c()
}):"object"==typeof exports?module.exports=c():d.svg4everybody=c()
}(this,function(){
/*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
;
function e(h,g){if(g){var k=!h.getAttribute("viewBox")&&g.getAttribute("viewBox"),j=document.createDocumentFragment(),i=g.cloneNode(!0);
for(k&&h.setAttribute("viewBox",k);
i.childNodes.length;
){j.appendChild(i.firstChild)
}h.appendChild(j)
}}function d(a){a.onreadystatechange=function(){if(4===a.readyState){var b=document.createElement("x");
b.innerHTML=a.responseText,a.s.splice(0).map(function(c){e(c[0],b.querySelector("#"+c[1].replace(/(\W)/g,"\\$1")))
})
}},a.onreadystatechange()
}function f(n){function m(){for(var s;
s=l[0];
){var p=s.parentNode;
if(p&&/svg/i.test(p.nodeName)){var i=s.getAttribute("xlink:href");
if(k&&(!j||j(i,p,s))){var h=i.split("#"),g=h[0],r=h[1];
if(p.removeChild(s),g.length){var q=a[g]=a[g]||new XMLHttpRequest;
q.s||(q.s=[],q.open("GET",g),q.send()),q.s.push([p,r]),d(q)
}else{e(p,document.getElementById(r))
}}}}b(m,17)
}n=n||{};
var l=document.getElementsByTagName("use"),k="shim" in n?n.shim:/\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537,j=n.validate,b=window.requestAnimationFrame||setTimeout,a={};
k&&m()
}return f
});
/*!
 DataTables 1.10.12
 ©2008-2015 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
b||(b="undefined"!==typeof window?require("jquery"):require("jquery")(c));
return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(bo,bU,bN,bn){function by(k){var h,p,m={};
bo.each(k,function(r){if((h=r.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(h[1]+" ")){p=r.replace(h[0],h[2].toLowerCase()),m[p]=r,"o"===h[1]&&by(k[r])
}});
k._hungarianMap=m
}function bL(k,h,p){k._hungarianMap||by(k);
var m;
bo.each(h,function(r){m=k._hungarianMap[r];
if(m!==bn&&(p||h[m]===bn)){"o"===m.charAt(0)?(h[m]||(h[m]={}),bo.extend(!0,h[m],h[r]),bL(k[m],h[m],p)):h[m]=h[r]
}})
}function ai(k){var h=bm.defaults.oLanguage,m=k.sZeroRecords;
!k.sEmptyTable&&(m&&"No data available in table"===h.sEmptyTable)&&bT(k,k,"sZeroRecords","sEmptyTable");
!k.sLoadingRecords&&(m&&"Loading..."===h.sLoadingRecords)&&bT(k,k,"sZeroRecords","sLoadingRecords");
k.sInfoThousands&&(k.sThousands=k.sInfoThousands);
(k=k.sDecimal)&&a2(k)
}function aT(k){bX(k,"ordering","bSort");
bX(k,"orderMulti","bSortMulti");
bX(k,"orderClasses","bSortClasses");
bX(k,"orderCellsTop","bSortCellsTop");
bX(k,"order","aaSorting");
bX(k,"orderFixed","aaSortingFixed");
bX(k,"paging","bPaginate");
bX(k,"pagingType","sPaginationType");
bX(k,"pageLength","iDisplayLength");
bX(k,"searching","bFilter");
"boolean"===typeof k.sScrollX&&(k.sScrollX=k.sScrollX?"100%":"");
"boolean"===typeof k.scrollX&&(k.scrollX=k.scrollX?"100%":"");
if(k=k.aoSearchCols){for(var h=0,m=k.length;
h<m;
h++){k[h]&&bL(bm.models.oSearch,k[h])
}}}function aK(k){bX(k,"orderable","bSortable");
bX(k,"orderData","aDataSort");
bX(k,"orderSequence","asSorting");
bX(k,"orderDataType","sortDataType");
var h=k.aDataSort;
h&&!bo.isArray(h)&&(k.aDataSort=[h])
}function aA(k){if(!bm.__browser){var h={};
bm.__browser=h;
var r=bo("<div/>").css({position:"fixed",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(bo("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(bo("<div/>").css({width:"100%",height:10}))).appendTo("body"),p=r.children(),m=p.children();
h.barWidth=p[0].offsetWidth-p[0].clientWidth;
h.bScrollOversize=100===m[0].offsetWidth&&100!==p[0].clientWidth;
h.bScrollbarLeft=1!==Math.round(m.offset().left);
h.bBounding=r[0].getBoundingClientRect().width?!0:!1;
r.remove()
}bo.extend(k.oBrowser,bm.__browser);
k.oScroll.iBarWidth=bm.__browser.barWidth
}function ar(k,h,v,u,s,r){var p,m=!1;
v!==bn&&(p=v,m=!0);
for(;
u!==s;
){k.hasOwnProperty(u)&&(p=m?h(p,k[u],u,k):k[u],m=!0,u+=r)
}return p
}function F(k,h){var p=bm.defaults.column,m=k.aoColumns.length,p=bo.extend({},bm.models.oColumn,p,{nTh:h?h:bN.createElement("th"),sTitle:p.sTitle?p.sTitle:h?h.innerHTML:"",aDataSort:p.aDataSort?p.aDataSort:[m],mData:p.mData?p.mData:m,idx:m});
k.aoColumns.push(p);
p=k.aoPreSearchCols;
p[m]=bo.extend({},bm.models.oSearch,p[m]);
S(k,m,bo(h).data())
}function S(w,v,u){var v=w.aoColumns[v],s=w.oClasses,r=bo(v.nTh);
if(!v.sWidthOrig){v.sWidthOrig=r.attr("width")||null;
var p=(r.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);
p&&(v.sWidthOrig=p[1])
}u!==bn&&null!==u&&(aK(u),bL(bm.defaults.column,u),u.mDataProp!==bn&&!u.mData&&(u.mData=u.mDataProp),u.sType&&(v._sManualType=u.sType),u.className&&!u.sClass&&(u.sClass=u.className),bo.extend(v,u),bT(v,u,"sWidth","sWidthOrig"),u.iDataSort!==bn&&(v.aDataSort=[u.iDataSort]),bT(v,u,"aDataSort"));
var m=v.mData,h=bG(m),k=v.mRender?bG(v.mRender):null,u=function(x){return"string"===typeof x&&-1!==x.indexOf("@")
};
v._bAttrSrc=bo.isPlainObject(m)&&(u(m.sort)||u(m.type)||u(m.filter));
v._setter=null;
v.fnGetData=function(y,x,A){var z=h(y,x,bn,A);
return k&&x?k(z,x,y,A):z
};
v.fnSetData=function(y,x,z){return bE(m)(y,x,z)
};
"number"!==typeof m&&(w._rowReadObject=!0);
w.oFeatures.bSort||(v.bSortable=!1,r.addClass(s.sSortableNone));
w=-1!==bo.inArray("asc",v.asSorting);
u=-1!==bo.inArray("desc",v.asSorting);
!v.bSortable||!w&&!u?(v.sSortingClass=s.sSortableNone,v.sSortingClassJUI=""):w&&!u?(v.sSortingClass=s.sSortableAsc,v.sSortingClassJUI=s.sSortJUIAscAllowed):!w&&u?(v.sSortingClass=s.sSortableDesc,v.sSortingClassJUI=s.sSortJUIDescAllowed):(v.sSortingClass=s.sSortable,v.sSortingClassJUI=s.sSortJUI)
}function bx(k){if(!1!==k.oFeatures.bAutoWidth){var h=k.aoColumns;
i(k);
for(var p=0,m=h.length;
p<m;
p++){h[p].nTh.style.width=h[p].sWidth
}}h=k.oScroll;
(""!==h.sY||""!==h.sX)&&l(k);
bg(k,null,"column-sizing",[k])
}function bw(k,h){var m=b(k,"bVisible");
return"number"===typeof m[h]?m[h]:null
}function cd(k,h){var m=b(k,"bVisible"),m=bo.inArray(h,m);
return -1!==m?m:null
}function b9(k){var h=0;
bo.each(k.aoColumns,function(m,p){p.bVisible&&"none"!==bo(p.nTh).css("display")&&h++
});
return h
}function b(k,h){var m=[];
bo.map(k.aoColumns,function(p,r){p[h]&&m.push(r)
});
return m
}function cn(A){var z=A.aoColumns,y=A.aoData,x=bm.ext.type.detect,w,v,u,p,r,s,m,k,B;
w=0;
for(v=z.length;
w<v;
w++){if(m=z[w],B=[],!m.sType&&m._sManualType){m.sType=m._sManualType
}else{if(!m.sType){u=0;
for(p=x.length;
u<p;
u++){r=0;
for(s=y.length;
r<s;
r++){B[r]===bn&&(B[r]=bW(A,r,w,"type"));
k=x[u](B[r],A);
if(!k&&u!==x.length-1){break
}if("html"===k){break
}}if(k){m.sType=k;
break
}}m.sType||(m.sType="string")
}}}}function aj(z,y,x,w){var v,u,s,p,r,k,m=z.aoColumns;
if(y){for(v=y.length-1;
0<=v;
v--){k=y[v];
var h=k.targets!==bn?k.targets:k.aTargets;
bo.isArray(h)||(h=[h]);
u=0;
for(s=h.length;
u<s;
u++){if("number"===typeof h[u]&&0<=h[u]){for(;
m.length<=h[u];
){F(z)
}w(h[u],k)
}else{if("number"===typeof h[u]&&0>h[u]){w(m.length+h[u],k)
}else{if("string"===typeof h[u]){p=0;
for(r=m.length;
p<r;
p++){("_all"==h[u]||bo(m[p].nTh).hasClass(h[u]))&&w(p,k)
}}}}}}}if(x){v=0;
for(z=x.length;
v<z;
v++){w(v,x[v])
}}}function bI(w,v,u,s){var r=w.aoData.length,p=bo.extend(!0,{},bm.models.oRow,{src:u?"dom":"data",idx:r});
p._aData=v;
w.aoData.push(p);
for(var m=w.aoColumns,h=0,k=m.length;
h<k;
h++){m[h].sType=null
}w.aiDisplayMaster.push(r);
v=w.rowIdFn(v);
v!==bn&&(w.aIds[v]=p);
(u||!w.oFeatures.bDeferRender)&&cf(w,r,u,s);
return r
}function ch(k,h){var m;
h instanceof bo||(h=bo(h));
return h.map(function(p,r){m=b1(k,r);
return bI(k,m.data,r,m.cells)
})
}function bW(w,v,u,s){var r=w.iDraw,p=w.aoColumns[u],m=w.aoData[v]._aData,h=p.sDefaultContent,k=p.fnGetData(m,s,{settings:w,row:v,col:u});
if(k===bn){return w.iDrawError!=r&&null===h&&(bK(w,0,"Requested unknown parameter "+("function"==typeof p.mData?"{function}":"'"+p.mData+"'")+" for row "+v+", column "+u,4),w.iDrawError=r),h
}if((k===m||null===k)&&null!==h&&s!==bn){k=h
}else{if("function"===typeof k){return k.call(m)
}}return null===k&&"display"==s?"":k
}function P(k,h,p,m){k.aoColumns[p].fnSetData(k.aoData[h]._aData,m,{settings:k,row:h,col:p})
}function bt(h){return bo.map(h.match(/(\\.|[^\.])+/g)||[""],function(k){return k.replace(/\\./g,".")
})
}function bG(k){if(bo.isPlainObject(k)){var h={};
bo.each(k,function(p,r){r&&(h[p]=bG(r))
});
return function(p,v,u,s){var r=h[v]||h._;
return r!==bn?r(p,v,u,s):p
}
}if(null===k){return function(p){return p
}
}if("function"===typeof k){return function(p,u,s,r){return k(p,u,s,r)
}
}if("string"===typeof k&&(-1!==k.indexOf(".")||-1!==k.indexOf("[")||-1!==k.indexOf("("))){var m=function(r,p,w){var v,s;
if(""!==w){s=bt(w);
for(var u=0,x=s.length;
u<x;
u++){w=s[u].match(bS);
v=s[u].match(bB);
if(w){s[u]=s[u].replace(bS,"");
""!==s[u]&&(r=r[s[u]]);
v=[];
s.splice(0,u+1);
s=s.join(".");
if(bo.isArray(r)){u=0;
for(x=r.length;
u<x;
u++){v.push(m(r[u],p,s))
}}r=w[0].substring(1,w[0].length-1);
r=""===r?v:v.join(r);
break
}else{if(v){s[u]=s[u].replace(bB,"");
r=r[s[u]]();
continue
}}if(null===r||r[s[u]]===bn){return bn
}r=r[s[u]]
}}return r
};
return function(p,r){return m(p,r,k)
}
}return function(p){return p[k]
}
}function bE(k){if(bo.isPlainObject(k)){return bE(k._)
}if(null===k){return function(){}
}if("function"===typeof k){return function(m,r,p){k(m,"set",r,p)
}
}if("string"===typeof k&&(-1!==k.indexOf(".")||-1!==k.indexOf("[")||-1!==k.indexOf("("))){var h=function(m,w,v){var v=bt(v),u;
u=v[v.length-1];
for(var s,p,r=0,x=v.length-1;
r<x;
r++){s=v[r].match(bS);
p=v[r].match(bB);
if(s){v[r]=v[r].replace(bS,"");
m[v[r]]=[];
u=v.slice();
u.splice(0,r+1);
s=u.join(".");
if(bo.isArray(w)){p=0;
for(x=w.length;
p<x;
p++){u={},h(u,w[p],s),m[v[r]].push(u)
}}else{m[v[r]]=w
}return
}p&&(v[r]=v[r].replace(bB,""),m=m[v[r]](w));
if(null===m[v[r]]||m[v[r]]===bn){m[v[r]]={}
}m=m[v[r]]
}if(u.match(bB)){m[u.replace(bB,"")](w)
}else{m[u.replace(bS,"")]=w
}};
return function(p,m){return h(p,m,k)
}
}return function(m,p){m[k]=p
}
}function a5(h){return bR(h.aoData,"_aData")
}function b3(h){h.aoData.length=0;
h.aiDisplayMaster.length=0;
h.aiDisplay.length=0;
h.aIds={}
}function bv(k,h,s){for(var r=-1,p=0,m=k.length;
p<m;
p++){k[p]==h?r=p:k[p]>h&&k[p]--
}-1!=r&&s===bn&&k.splice(r,1)
}function br(k,h,v,u){var s=k.aoData[h],r,p=function(x,w){for(;
x.childNodes.length;
){x.removeChild(x.firstChild)
}x.innerHTML=bW(k,h,w,"display")
};
if("dom"===v||(!v||"auto"===v)&&"dom"===s.src){s._aData=b1(k,s,u,u===bn?bn:s._aData).data
}else{var m=s.anCells;
if(m){if(u!==bn){p(m[u],u)
}else{v=0;
for(r=m.length;
v<r;
v++){p(m[v],v)
}}}}s._aSortData=null;
s._aFilterData=null;
p=k.aoColumns;
if(u!==bn){p[u].sType=null
}else{v=0;
for(r=p.length;
v<r;
v++){p[v].sType=null
}aW(k,s)
}}function b1(A,z,y,x){var w=[],v=z.firstChild,u,r,s=0,k,m=A.aoColumns,h=A._rowReadObject,x=x!==bn?x:h?{}:[],B=function(D,C){if("string"===typeof D){var E=D.indexOf("@");
-1!==E&&(E=D.substring(E+1),bE(D)(x,C.getAttribute(E)))
}},p=function(C){if(y===bn||y===s){r=m[s],k=bo.trim(C.innerHTML),r&&r._bAttrSrc?(bE(r.mData._)(x,k),B(r.mData.sort,C),B(r.mData.type,C),B(r.mData.filter,C)):h?(r._setter||(r._setter=bE(r.mData)),r._setter(x,k)):x[s]=k
}s++
};
if(v){for(;
v;
){u=v.nodeName.toUpperCase();
if("TD"==u||"TH"==u){p(v),w.push(v)
}v=v.nextSibling
}}else{w=z.anCells;
v=0;
for(u=w.length;
v<u;
v++){p(w[v])
}}if(z=z.firstChild?z:z.nTr){(z=z.getAttribute("id"))&&bE(A.rowId)(x,z)
}return{data:x,cells:w}
}function cf(z,y,x,w){var v=z.aoData[y],u=v._aData,s=[],p,r,k,m,h;
if(null===v.nTr){p=x||bN.createElement("tr");
v.nTr=p;
v.anCells=s;
p._DT_RowIndex=y;
aW(z,v);
m=0;
for(h=z.aoColumns.length;
m<h;
m++){k=z.aoColumns[m];
r=x?w[m]:bN.createElement(k.sCellType);
r._DT_CellIndex={row:y,column:m};
s.push(r);
if((!x||k.mRender||k.mData!==m)&&(!bo.isPlainObject(k.mData)||k.mData._!==m+".display")){r.innerHTML=bW(z,y,m,"display")
}k.sClass&&(r.className+=" "+k.sClass);
k.bVisible&&!x?p.appendChild(r):!k.bVisible&&x&&r.parentNode.removeChild(r);
k.fnCreatedCell&&k.fnCreatedCell.call(z.oInstance,r,bW(z,y,m),u,y,m)
}bg(z,"aoRowCreatedCallback",null,[p,u,y])
}v.nTr.setAttribute("role","row")
}function aW(k,h){var r=h.nTr,p=h._aData;
if(r){var m=k.rowIdFn(p);
m&&(r.id=m);
p.DT_RowClass&&(m=p.DT_RowClass.split(" "),h.__rowc=h.__rowc?a8(h.__rowc.concat(m)):m,bo(r).removeClass(h.__rowc.join(" ")).addClass(p.DT_RowClass));
p.DT_RowAttr&&bo(r).attr(p.DT_RowAttr);
p.DT_RowData&&bo(r).data(p.DT_RowData)
}}function j(y){var x,w,v,u,s,r=y.nTHead,m=y.nTFoot,p=0===bo("th, td",r).length,h=y.oClasses,k=y.aoColumns;
p&&(u=bo("<tr/>").appendTo(r));
x=0;
for(w=k.length;
x<w;
x++){s=k[x],v=bo(s.nTh).addClass(s.sClass),p&&v.appendTo(u),y.oFeatures.bSort&&(v.addClass(s.sSortingClass),!1!==s.bSortable&&(v.attr("tabindex",y.iTabIndex).attr("aria-controls",y.sTableId),aN(y,s.nTh,x))),s.sTitle!=v[0].innerHTML&&v.html(s.sTitle),aD(y,"header")(y,v,s,h)
}p&&a3(y.aoHeader,r);
bo(r).find(">tr").attr("role","row");
bo(r).find(">tr>th, >tr>td").addClass(h.sHeaderTH);
bo(m).find(">tr>th, >tr>td").addClass(h.sFooterTH);
if(null!==m){y=y.aoFooter[0];
x=0;
for(w=y.length;
x<w;
x++){s=k[x],s.nTf=y[x].cell,s.sClass&&bo(s.nTf).addClass(s.sClass)
}}}function aU(x,w,v){var u,s,r,p=[],k=[],m=x.aoColumns.length,h;
if(w){v===bn&&(v=!1);
u=0;
for(s=w.length;
u<s;
u++){p[u]=w[u].slice();
p[u].nTr=w[u].nTr;
for(r=m-1;
0<=r;
r--){!x.aoColumns[r].bVisible&&!v&&p[u].splice(r,1)
}k.push([])
}u=0;
for(s=p.length;
u<s;
u++){if(x=p[u].nTr){for(;
r=x.firstChild;
){x.removeChild(r)
}}r=0;
for(w=p[u].length;
r<w;
r++){if(h=m=1,k[u][r]===bn){x.appendChild(p[u][r].cell);
for(k[u][r]=1;
p[u+m]!==bn&&p[u][r].cell==p[u+m][r].cell;
){k[u+m][r]=1,m++
}for(;
p[u][r+h]!==bn&&p[u][r].cell==p[u][r+h].cell;
){for(v=0;
v<m;
v++){k[u+v][r+h]=1
}h++
}bo(p[u][r].cell).attr("rowspan",m).attr("colspan",h)
}}}}}function bH(z){var y=bg(z,"aoPreDrawCallback","preDraw",[z]);
if(-1!==bo.inArray(!1,y)){bV(z,!1)
}else{var y=[],x=0,w=z.asStripeClasses,v=w.length,u=z.oLanguage,s=z.iInitDisplayStart,p="ssp"==a9(z),r=z.aiDisplay;
z.bDrawing=!0;
s!==bn&&-1!==s&&(z._iDisplayStart=p?s:s>=z.fnRecordsDisplay()?0:s,z.iInitDisplayStart=-1);
var s=z._iDisplayStart,k=z.fnDisplayEnd();
if(z.bDeferLoading){z.bDeferLoading=!1,z.iDraw++,bV(z,!1)
}else{if(p){if(!z.bDestroying&&!a(z)){return
}}else{z.iDraw++
}}if(0!==r.length){u=p?z.aoData.length:k;
for(p=p?0:s;
p<u;
p++){var m=r[p],h=z.aoData[m];
null===h.nTr&&cf(z,m);
m=h.nTr;
if(0!==v){var A=w[x%v];
h._sRowStripe!=A&&(bo(m).removeClass(h._sRowStripe).addClass(A),h._sRowStripe=A)
}bg(z,"aoRowCallback",null,[m,h._aData,x,p]);
y.push(m);
x++
}}else{x=u.sZeroRecords,1==z.iDraw&&"ajax"==a9(z)?x=u.sLoadingRecords:u.sEmptyTable&&0===z.fnRecordsTotal()&&(x=u.sEmptyTable),y[0]=bo("<tr/>",{"class":v?w[0]:""}).append(bo("<td />",{valign:"top",colSpan:b9(z),"class":z.oClasses.sRowEmpty}).html(x))[0]
}bg(z,"aoHeaderCallback","header",[bo(z.nTHead).children("tr")[0],a5(z),s,k,r]);
bg(z,"aoFooterCallback","footer",[bo(z.nTFoot).children("tr")[0],a5(z),s,k,r]);
w=bo(z.nTBody);
w.children().detach();
w.append(bo(y));
bg(z,"aoDrawCallback","draw",[z]);
z.bSorted=!1;
z.bFiltered=!1;
z.bDrawing=!1
}}function bC(k,h){var p=k.oFeatures,m=p.bFilter;
p.bSort&&cg(k);
m?aL(k,k.oPreviousSearch):k.aiDisplay=k.aiDisplayMaster.slice();
!0!==h&&(k._iDisplayStart=0);
k._drawHold=h;
bH(k);
k._drawHold=!1
}function b2(z){var y=z.oClasses,x=bo(z.nTable),x=bo("<div/>").insertBefore(x),w=z.oFeatures,v=bo("<div/>",{id:z.sTableId+"_wrapper","class":y.sWrapper+(z.nTFoot?"":" "+y.sNoFooter)});
z.nHolding=x[0];
z.nTableWrapper=v[0];
z.nTableReinsertBefore=z.nTable.nextSibling;
for(var u=z.sDom.split(""),s,p,r,k,m,h,A=0;
A<u.length;
A++){s=null;
p=u[A];
if("<"==p){r=bo("<div/>")[0];
k=u[A+1];
if("'"==k||'"'==k){m="";
for(h=2;
u[A+h]!=k;
){m+=u[A+h],h++
}"H"==m?m=y.sJUIHeader:"F"==m&&(m=y.sJUIFooter);
-1!=m.indexOf(".")?(k=m.split("."),r.id=k[0].substr(1,k[0].length-1),r.className=k[1]):"#"==m.charAt(0)?r.id=m.substr(1,m.length-1):r.className=m;
A+=h
}v.append(r);
v=bo(r)
}else{if(">"==p){v=v.parent()
}else{if("l"==p&&w.bPaginate&&w.bLengthChange){s=bu(z)
}else{if("f"==p&&w.bFilter){s=a6(z)
}else{if("r"==p&&w.bProcessing){s=aX(z)
}else{if("t"==p){s=aO(z)
}else{if("i"==p&&w.bInfo){s=aE(z)
}else{if("p"==p&&w.bPaginate){s=aw(z)
}else{if(0!==bm.ext.feature.length){r=bm.ext.feature;
h=0;
for(k=r.length;
h<k;
h++){if(p==r[h].cFeature){s=r[h].fnInit(z);
break
}}}}}}}}}}}s&&(r=z.aanFeatures,r[p]||(r[p]=[]),r[p].push(s),v.append(s))
}x.replaceWith(v);
z.nHolding=null
}function a3(z,y){var x=bo(y).children("tr"),w,v,u,s,p,r,k,m,h,A;
z.splice(0,z.length);
u=0;
for(r=x.length;
u<r;
u++){z.push([])
}u=0;
for(r=x.length;
u<r;
u++){w=x[u];
for(v=w.firstChild;
v;
){if("TD"==v.nodeName.toUpperCase()||"TH"==v.nodeName.toUpperCase()){m=1*v.getAttribute("colspan");
h=1*v.getAttribute("rowspan");
m=!m||0===m||1===m?1:m;
h=!h||0===h||1===h?1:h;
s=0;
for(p=z[u];
p[s];
){s++
}k=s;
A=1===m?!0:!1;
for(p=0;
p<m;
p++){for(s=0;
s<h;
s++){z[u+s][k+p]={cell:v,unique:A},z[u+s].nTr=w
}}}v=v.nextSibling
}}}function aY(k,h,u){var s=[];
u||(u=k.aoHeader,h&&(u=[],a3(u,h)));
for(var h=0,r=u.length;
h<r;
h++){for(var p=0,m=u[h].length;
p<m;
p++){if(u[h][p].unique&&(!s[p]||!k.bSortCellsTop)){s[p]=u[h][p].cell
}}}return s
}function aP(x,w,v){bg(x,"aoServerParams","serverParams",[w]);
if(w&&bo.isArray(w)){var u={},s=/(.*?)\[\]$/;
bo.each(w,function(z,y){var A=y.name.match(s);
A?(A=A[0],u[A]||(u[A]=[]),u[A].push(y.value)):u[y.name]=y.value
});
w=u
}var r,p=x.ajax,k=x.oInstance,m=function(y){bg(x,null,"xhr",[x,y,x.jqXHR]);
v(y)
};
if(bo.isPlainObject(p)&&p.data){r=p.data;
var h=bo.isFunction(r)?r(w,x):r,w=bo.isFunction(r)&&h?h:bo.extend(!0,w,h);
delete p.data
}h={data:w,success:function(y){var z=y.error||y.sError;
z&&bK(x,0,z);
x.json=y;
m(y)
},dataType:"json",cache:!1,type:x.sServerMethod,error:function(y,A){var z=bg(x,null,"xhr",[x,null,x.jqXHR]);
-1===bo.inArray(!0,z)&&("parsererror"==A?bK(x,0,"Invalid JSON response",1):4===y.readyState&&bK(x,0,"Ajax error",7));
bV(x,!1)
}};
x.oAjaxData=w;
bg(x,null,"preXhr",[x,w]);
x.fnServerData?x.fnServerData.call(k,x.sAjaxSource,bo.map(w,function(z,y){return{name:y,value:z}
}),m,x):x.sAjaxSource||"string"===typeof p?x.jqXHR=bo.ajax(bo.extend(h,{url:p||x.sAjaxSource})):bo.isFunction(p)?x.jqXHR=p.call(k,w,m,x):(x.jqXHR=bo.ajax(bo.extend(h,p)),p.data=r)
}function a(h){return h.bAjaxDataGet?(h.iDraw++,bV(h,!0),aP(h,an(h),function(k){af(h,k)
}),!1):!0
}function an(C){var B=C.aoColumns,A=B.length,z=C.oFeatures,y=C.oPreviousSearch,x=C.aoPreSearchCols,w,u=[],v,m,p,h=bA(C);
w=C._iDisplayStart;
v=!1!==z.bPaginate?C._iDisplayLength:-1;
var r=function(D,k){u.push({name:D,value:k})
};
r("sEcho",C.iDraw);
r("iColumns",A);
r("sColumns",bR(B,"sName").join(","));
r("iDisplayStart",w);
r("iDisplayLength",v);
var s={draw:C.iDraw,columns:[],order:[],start:w,length:v,search:{value:y.sSearch,regex:y.bRegex}};
for(w=0;
w<A;
w++){m=B[w],p=x[w],v="function"==typeof m.mData?"function":m.mData,s.columns.push({data:v,name:m.sName,searchable:m.bSearchable,orderable:m.bSortable,search:{value:p.sSearch,regex:p.bRegex}}),r("mDataProp_"+w,v),z.bFilter&&(r("sSearch_"+w,p.sSearch),r("bRegex_"+w,p.bRegex),r("bSearchable_"+w,m.bSearchable)),z.bSort&&r("bSortable_"+w,m.bSortable)
}z.bFilter&&(r("sSearch",y.sSearch),r("bRegex",y.bRegex));
z.bSort&&(bo.each(h,function(D,k){s.order.push({column:k.col,dir:k.dir});
r("iSortCol_"+D,k.col);
r("sSortDir_"+D,k.dir)
}),r("iSortingCols",h.length));
B=bm.ext.legacy.ajax;
return null===B?C.sAjaxSource?u:s:B?u:s
}function af(k,h){var s=aF(k,h),r=h.sEcho!==bn?h.sEcho:h.draw,p=h.iTotalRecords!==bn?h.iTotalRecords:h.recordsTotal,m=h.iTotalDisplayRecords!==bn?h.iTotalDisplayRecords:h.recordsFiltered;
if(r){if(1*r<k.iDraw){return
}k.iDraw=1*r
}b3(k);
k._iRecordsTotal=parseInt(p,10);
k._iRecordsDisplay=parseInt(m,10);
r=0;
for(p=s.length;
r<p;
r++){bI(k,s[r])
}k.aiDisplay=k.aiDisplayMaster.slice();
k.bAjaxDataGet=!1;
bH(k);
k._bInitComplete||ax(k,h);
k.bAjaxDataGet=!0;
bV(k,!1)
}function aF(k,h){var m=bo.isPlainObject(k.ajax)&&k.ajax.dataSrc!==bn?k.ajax.dataSrc:k.sAjaxDataProp;
return"data"===m?h.aaData||h[m]:""!==m?bG(m)(h):h
}function a6(w){var v=w.oClasses,u=w.sTableId,s=w.oLanguage,r=w.oPreviousSearch,p=w.aanFeatures,m='<input type="search" class="'+v.sFilterInput+'"/>',h=s.sSearch,h=h.match(/_INPUT_/)?h.replace("_INPUT_",m):h+m,v=bo("<div/>",{id:!p.f?u+"_filter":null,"class":v.sFilter}).append(bo("<label/>").append(h)),p=function(){var x=!this.value?"":this.value;
x!=r.sSearch&&(aL(w,{sSearch:x,bRegex:r.bRegex,bSmart:r.bSmart,bCaseInsensitive:r.bCaseInsensitive}),w._iDisplayStart=0,bH(w))
},m=null!==w.searchDelay?w.searchDelay:"ssp"===a9(w)?400:0,k=bo("input",v).val(r.sSearch).attr("placeholder",s.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",m?av(p,m):p).bind("keypress.DT",function(x){if(13==x.keyCode){return !1
}}).attr("aria-controls",u);
bo(w.nTable).on("search.dt.DT",function(x,z){if(w===z){try{k[0]!==bN.activeElement&&k.val(r.sSearch)
}catch(y){}}});
return v[0]
}function aL(k,h,s){var r=k.oPreviousSearch,p=k.aoPreSearchCols,m=function(u){r.sSearch=u.sSearch;
r.bRegex=u.bRegex;
r.bSmart=u.bSmart;
r.bCaseInsensitive=u.bCaseInsensitive
};
cn(k);
if("ssp"!=a9(k)){q(k,h.sSearch,s,h.bEscapeRegex!==bn?!h.bEscapeRegex:h.bRegex,h.bSmart,h.bCaseInsensitive);
m(h);
for(h=0;
h<p.length;
h++){e(k,p[h].sSearch,h,p[h].bEscapeRegex!==bn?!p[h].bEscapeRegex:p[h].bRegex,p[h].bSmart,p[h].bCaseInsensitive)
}ck(k)
}else{m(h)
}k.bFiltered=!0;
bg(k,null,"search",[k])
}function ck(x){for(var w=bm.ext.search,v=x.aiDisplay,u,s,r=0,p=w.length;
r<p;
r++){for(var k=[],m=0,h=v.length;
m<h;
m++){s=v[m],u=x.aoData[s],w[r](x,u._aFilterData,s,u._aData,m)&&k.push(s)
}v.length=0;
bo.merge(v,k)
}}function e(k,h,u,s,r,p){if(""!==h){for(var m=k.aiDisplay,s=am(h,s,r,p),r=m.length-1;
0<=r;
r--){h=k.aoData[m[r]]._aFilterData[u],s.test(h)||m.splice(r,1)
}}}function q(k,h,u,s,r,p){var s=am(h,s,r,p),r=k.oPreviousSearch.sSearch,p=k.aiDisplayMaster,m;
0!==bm.ext.search.length&&(u=!0);
m=b5(k);
if(0>=h.length){k.aiDisplay=p.slice()
}else{if(m||u||r.length>h.length||0!==h.indexOf(r)||k.bSorted){k.aiDisplay=p.slice()
}h=k.aiDisplay;
for(u=h.length-1;
0<=u;
u--){s.test(k.aoData[h[u]]._sFilterRow)||h.splice(u,1)
}}}function am(k,h,p,m){k=h?k:ae(k);
p&&(k="^(?=.*?"+bo.map(k.match(/"[^"]+"|[^ ]+/g)||[""],function(s){if('"'===s.charAt(0)){var r=s.match(/^"(.*)"$/),s=r?r[1]:s
}return s.replace('"',"")
}).join(")(?=.*?")+").*$");
return RegExp(k,m?"i":"")
}function b5(z){var y=z.aoColumns,x,w,v,u,s,m,p,r,k=bm.ext.type.search;
x=!1;
w=0;
for(u=z.aoData.length;
w<u;
w++){if(r=z.aoData[w],!r._aFilterData){m=[];
v=0;
for(s=y.length;
v<s;
v++){x=y[v],x.bSearchable?(p=bW(z,w,v,"filter"),k[x.sType]&&(p=k[x.sType](p)),null===p&&(p=""),"string"!==typeof p&&p.toString&&(p=p.toString())):p="",p.indexOf&&-1!==p.indexOf("&")&&(ao.innerHTML=p,p=aG?ao.textContent:ao.innerText),p.replace&&(p=p.replace(/[\r\n]/g,"")),m.push(p)
}r._aFilterData=m;
r._sFilterRow=m.join("  ");
x=!0
}}return x
}function aI(h){return{search:h.sSearch,smart:h.bSmart,regex:h.bRegex,caseInsensitive:h.bCaseInsensitive}
}function ay(h){return{sSearch:h.search,bSmart:h.smart,bRegex:h.regex,bCaseInsensitive:h.caseInsensitive}
}function aE(k){var h=k.sTableId,p=k.aanFeatures.i,m=bo("<div/>",{"class":k.oClasses.sInfo,id:!p?h+"_info":null});
p||(k.aoDrawCallback.push({fn:ap,sName:"information"}),m.attr("role","status").attr("aria-live","polite"),bo(k.nTable).attr("aria-describedby",h+"_info"));
return m[0]
}function ap(k){var h=k.aanFeatures.i;
if(0!==h.length){var v=k.oLanguage,u=k._iDisplayStart+1,s=k.fnDisplayEnd(),r=k.fnRecordsTotal(),p=k.fnRecordsDisplay(),m=p?v.sInfo:v.sInfoEmpty;
p!==r&&(m+=" "+v.sInfoFiltered);
m+=v.sInfoPostFix;
m=ah(k,m);
v=v.fnInfoCallback;
null!==v&&(m=v.call(k.oInstance,k,u,s,r,p,m));
bo(h).html(m)
}}function ah(k,h){var u=k.fnFormatNumber,s=k._iDisplayStart+1,r=k._iDisplayLength,p=k.fnRecordsDisplay(),m=-1===r;
return h.replace(/_START_/g,u.call(k,s)).replace(/_END_/g,u.call(k,k.fnDisplayEnd())).replace(/_MAX_/g,u.call(k,k.fnRecordsTotal())).replace(/_TOTAL_/g,u.call(k,p)).replace(/_PAGE_/g,u.call(k,m?1:Math.ceil(s/r))).replace(/_PAGES_/g,u.call(k,m?1:Math.ceil(p/r)))
}function aB(k){var h,u,s=k.iInitDisplayStart,r=k.aoColumns,p;
u=k.oFeatures;
var m=k.bDeferLoading;
if(k.bInitialised){b2(k);
j(k);
aU(k,k.aoHeader);
aU(k,k.aoFooter);
bV(k,!0);
u.bAutoWidth&&i(k);
h=0;
for(u=r.length;
h<u;
h++){p=r[h],p.sWidth&&(p.nTh.style.width=bd(p.sWidth))
}bg(k,null,"preInit",[k]);
bC(k);
r=a9(k);
if("ssp"!=r||m){"ajax"==r?aP(k,[],function(w){var v=aF(k,w);
for(h=0;
h<v.length;
h++){bI(k,v[h])
}k.iInitDisplayStart=s;
bC(k);
bV(k,!1);
ax(k,w)
},k):(bV(k,!1),ax(k))
}}else{setTimeout(function(){aB(k)
},200)
}}function ax(k,h){k._bInitComplete=!0;
(h||k.oInit.aaData)&&bx(k);
bg(k,null,"plugin-init",[k,h]);
bg(k,"aoInitComplete","init",[k,h])
}function o(k,h){var m=parseInt(h,10);
k._iDisplayLength=m;
d(k);
bg(k,null,"length",[k,m])
}function bu(w){for(var v=w.oClasses,u=w.sTableId,s=w.aLengthMenu,r=bo.isArray(s[0]),p=r?s[0]:s,s=r?s[1]:s,r=bo("<select/>",{name:u+"_length","aria-controls":u,"class":v.sLengthSelect}),m=0,h=p.length;
m<h;
m++){r[0][m]=new Option(s[m],p[m])
}var k=bo("<div><label/></div>").addClass(v.sLength);
w.aanFeatures.l||(k[0].id=u+"_length");
k.children().append(w.oLanguage.sLengthMenu.replace("_MENU_",r[0].outerHTML));
bo("select",k).val(w._iDisplayLength).bind("change.DT",function(){o(w,bo(this).val());
bH(w)
});
bo(w.nTable).bind("length.dt.DT",function(x,z,y){w===z&&bo("select",k).val(y)
});
return k[0]
}function aw(k){var h=k.sPaginationType,s=bm.ext.pager[h],r="function"===typeof s,p=function(u){bH(u)
},h=bo("<div/>").addClass(k.oClasses.sPaging+h)[0],m=k.aanFeatures;
r||s.fnInit(k,h,p);
m.p||(h.id=k.sTableId+"_paginate",k.aoDrawCallback.push({fn:function(w){if(r){var u=w._iDisplayStart,y=w._iDisplayLength,z=w.fnRecordsDisplay(),v=-1===y,u=v?0:Math.ceil(u/y),y=v?1:Math.ceil(z/y),z=s(u,y),x,v=0;
for(x=m.p.length;
v<x;
v++){aD(w,"pageButton")(w,m.p[v],v,z,u,y)
}}else{s.fnUpdate(w,p)
}},sName:"pagination"}));
return h
}function cj(k,h,s){var r=k._iDisplayStart,p=k._iDisplayLength,m=k.fnRecordsDisplay();
0===m||-1===p?r=0:"number"===typeof h?(r=h*p,r>m&&(r=0)):"first"==h?r=0:"previous"==h?(r=0<=p?r-p:0,0>r&&(r=0)):"next"==h?r+p<m&&(r+=p):"last"==h?r=Math.floor((m-1)/p)*p:bK(k,0,"Unknown paging action: "+h,5);
h=k._iDisplayStart!==r;
k._iDisplayStart=r;
h&&(bg(k,null,"page",[k]),s&&bH(k));
return h
}function aX(h){return bo("<div/>",{id:!h.aanFeatures.r?h.sTableId+"_processing":null,"class":h.oClasses.sProcessing}).html(h.oLanguage.sProcessing).insertBefore(h.nTable)[0]
}function bV(k,h){k.oFeatures.bProcessing&&bo(k.aanFeatures.r).css("display",h?"block":"none");
bg(k,null,"processing",[k,h])
}function aO(A){var z=bo(A.nTable);
z.attr("role","grid");
var y=A.oScroll;
if(""===y.sX&&""===y.sY){return A.nTable
}var x=y.sX,w=y.sY,v=A.oClasses,u=z.children("caption"),r=u.length?u[0]._captionSide:null,s=bo(z[0].cloneNode(!1)),h=bo(z[0].cloneNode(!1)),m=z.children("tfoot");
m.length||(m=null);
s=bo("<div/>",{"class":v.sScrollWrapper}).append(bo("<div/>",{"class":v.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:x?!x?null:bd(x):"100%"}).append(bo("<div/>",{"class":v.sScrollHeadInner}).css({"box-sizing":"content-box",width:y.sXInner||"100%"}).append(s.removeAttr("id").css("margin-left",0).append("top"===r?u:null).append(z.children("thead"))))).append(bo("<div/>",{"class":v.sScrollBody}).css({position:"relative",overflow:"auto",width:!x?null:bd(x)}).append(z));
m&&s.append(bo("<div/>",{"class":v.sScrollFoot}).css({overflow:"hidden",border:0,width:x?!x?null:bd(x):"100%"}).append(bo("<div/>",{"class":v.sScrollFootInner}).append(h.removeAttr("id").css("margin-left",0).append("bottom"===r?u:null).append(z.children("tfoot")))));
var z=s.children(),p=z[0],v=z[1],B=m?z[2]:null;
if(x){bo(v).on("scroll.DT",function(){var k=this.scrollLeft;
p.scrollLeft=k;
m&&(B.scrollLeft=k)
})
}bo(v).css(w&&y.bCollapse?"max-height":"height",w);
A.nScrollHead=p;
A.nScrollBody=v;
A.nScrollFoot=B;
A.aoDrawCallback.push({fn:l,sName:"scrolling"});
return s[0]
}function l(cp){var co=cp.oScroll,cc=co.sX,cb=co.sXInner,bc=co.sY,co=co.iBarWidth,bb=bo(cp.nScrollHead),ba=bb[0].style,ab=bb.children("div"),ac=ab[0].style,Y=ab.children("table"),ab=cp.nScrollBody,aa=bo(ab),U=ab.style,M=bo(cp.nScrollFoot).children("div"),Z=M.children("table"),X=bo(cp.nTHead),K=bo(cp.nTable),W=K[0],R=W.style,J=cp.nTFoot?bo(cp.nTFoot):null,x=cp.oBrowser,ca=x.bScrollOversize,O=bR(cp.aoColumns,"nTh"),h,I,H,G,k=[],V=[],T=[],Q=[],N,L=function(m){m=m.style;
m.paddingTop="0";
m.paddingBottom="0";
m.borderTopWidth="0";
m.borderBottomWidth="0";
m.height=0
};
I=ab.scrollHeight>ab.clientHeight;
if(cp.scrollBarVis!==I&&cp.scrollBarVis!==bn){cp.scrollBarVis=I,bx(cp)
}else{cp.scrollBarVis=I;
K.children("thead, tfoot").remove();
J&&(H=J.clone().prependTo(K),h=J.find("tr"),H=H.find("tr"));
G=X.clone().prependTo(K);
X=X.find("tr");
I=G.find("tr");
G.find("th, td").removeAttr("tabindex");
cc||(U.width="100%",bb[0].style.width="100%");
bo.each(aY(cp,G),function(m,p){N=bw(cp,m);
p.style.width=cp.aoColumns[N].sWidth
});
J&&bM(function(m){m.style.width=""
},H);
bb=K.outerWidth();
if(""===cc){R.width="100%";
if(ca&&(K.find("tbody").height()>ab.offsetHeight||"scroll"==aa.css("overflow-y"))){R.width=bd(K.outerWidth()-co)
}bb=K.outerWidth()
}else{""!==cb&&(R.width=bd(cb),bb=K.outerWidth())
}bM(L,I);
bM(function(m){T.push(m.innerHTML);
k.push(bd(bo(m).css("width")))
},I);
bM(function(p,m){if(bo.inArray(p,O)!==-1){p.style.width=k[m]
}},X);
bo(I).height(0);
J&&(bM(L,H),bM(function(m){Q.push(m.innerHTML);
V.push(bd(bo(m).css("width")))
},H),bM(function(p,m){p.style.width=V[m]
},h),bo(H).height(0));
bM(function(p,m){p.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+T[m]+"</div>";
p.style.width=k[m]
},I);
J&&bM(function(p,m){p.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+Q[m]+"</div>";
p.style.width=V[m]
},H);
if(K.outerWidth()<bb){h=ab.scrollHeight>ab.offsetHeight||"scroll"==aa.css("overflow-y")?bb+co:bb;
if(ca&&(ab.scrollHeight>ab.offsetHeight||"scroll"==aa.css("overflow-y"))){R.width=bd(h-co)
}(""===cc||""!==cb)&&bK(cp,1,"Possible column misalignment",6)
}else{h="100%"
}U.width=bd(h);
ba.width=bd(h);
J&&(cp.nScrollFoot.style.width=bd(h));
!bc&&ca&&(U.height=bd(W.offsetHeight+co));
cc=K.outerWidth();
Y[0].style.width=bd(cc);
ac.width=bd(cc);
cb=K.height()>ab.clientHeight||"scroll"==aa.css("overflow-y");
bc="padding"+(x.bScrollbarLeft?"Left":"Right");
ac[bc]=cb?co+"px":"0px";
J&&(Z[0].style.width=bd(cc),M[0].style.width=bd(cc),M[0].style[bc]=cb?co+"px":"0px");
K.children("colgroup").insertBefore(K.children("thead"));
aa.scroll();
if((cp.bSorted||cp.bFiltered)&&!cp._drawHold){ab.scrollTop=0
}}}function bM(k,h,v){for(var u=0,s=0,r=h.length,p,m;
s<r;
){p=h[s].firstChild;
for(m=v?v[s].firstChild:null;
p;
){1===p.nodeType&&(v?k(p,m,u):k(p,u),u++),p=p.nextSibling,m=v?m.nextSibling:null
}s++
}}function i(I){var H=I.nTable,G=I.aoColumns,E=I.oScroll,D=E.sY,C=E.sX,B=E.sXInner,z=G.length,A=b(I,"bVisible"),v=bo("th",I.nTHead),x=H.getAttribute("width"),y=H.parentNode,J=!1,w,u,s=I.oBrowser,E=s.bScrollOversize;
(w=H.style.width)&&-1!==w.indexOf("%")&&(x=w);
for(w=0;
w<A.length;
w++){u=G[A[w]],null!==u.sWidth&&(u.sWidth=g(u.sWidthOrig,y),J=!0)
}if(E||!J&&!C&&!D&&z==b9(I)&&z==v.length){for(w=0;
w<z;
w++){A=bw(I,w),null!==A&&(G[A].sWidth=bd(v.eq(w).width()))
}}else{z=bo(H).clone().css("visibility","hidden").removeAttr("id");
z.find("tbody tr").remove();
var h=bo("<tr/>").appendTo(z.find("tbody"));
z.find("thead, tfoot").remove();
z.append(bo(I.nTHead).clone()).append(bo(I.nTFoot).clone());
z.find("tfoot th, tfoot td").css("width","");
v=aY(I,z.find("thead")[0]);
for(w=0;
w<A.length;
w++){u=G[A[w]],v[w].style.width=null!==u.sWidthOrig&&""!==u.sWidthOrig?bd(u.sWidthOrig):"",u.sWidthOrig&&C&&bo(v[w]).append(bo("<div/>").css({width:u.sWidthOrig,margin:0,padding:0,border:0,height:1}))
}if(I.aoData.length){for(w=0;
w<A.length;
w++){J=A[w],u=G[J],bo(cm(I,J)).clone(!1).append(u.sContentPadding).appendTo(h)
}}bo("[name]",z).removeAttr("name");
u=bo("<div/>").css(C||D?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(z).appendTo(y);
C&&B?z.width(B):C?(z.css("width","auto"),z.removeAttr("width"),z.width()<y.clientWidth&&x&&z.width(y.clientWidth)):D?z.width(y.clientWidth):x&&z.width(x);
for(w=D=0;
w<A.length;
w++){y=bo(v[w]),B=y.outerWidth()-y.width(),y=s.bBounding?Math.ceil(v[w].getBoundingClientRect().width):y.outerWidth(),D+=y,G[A[w]].sWidth=bd(y-B)
}H.style.width=bd(D);
u.remove()
}x&&(H.style.width=bd(x));
if((x||C)&&!I._reszEvt){H=function(){bo(bU).bind("resize.DT-"+I.sInstance,av(function(){bx(I)
}))
},E?setTimeout(H,1000):H(),I._reszEvt=!0
}}function g(k,h){if(!k){return 0
}var p=bo("<div/>").css("width",bd(k)).appendTo(h||bN.body),m=p[0].offsetWidth;
p.remove();
return m
}function cm(k,h){var p=ce(k,h);
if(0>p){return null
}var m=k.aoData[p];
return !m.nTr?bo("<td/>").html(bW(k,p,h,"display"))[0]:m.anCells[h]
}function ce(k,h){for(var u,s=-1,r=-1,p=0,m=k.aoData.length;
p<m;
p++){u=bW(k,p,h,"display")+"",u=u.replace(bY,""),u=u.replace(/&nbsp;/g," "),u.length>s&&(s=u.length,r=p)
}return r
}function bd(h){return null===h?"0px":"number"==typeof h?0>h?"0px":h+"px":h.match(/\d$/)?h+"px":h
}function bA(x){var w,v,u=[],s=x.aoColumns,r,p,k,m;
w=x.aaSortingFixed;
v=bo.isPlainObject(w);
var h=[];
r=function(y){y.length&&!bo.isArray(y[0])?h.push(y):bo.merge(h,y)
};
bo.isArray(w)&&r(w);
v&&w.pre&&r(w.pre);
r(x.aaSorting);
v&&w.post&&r(w.post);
for(x=0;
x<h.length;
x++){m=h[x][0];
r=s[m].aDataSort;
w=0;
for(v=r.length;
w<v;
w++){p=r[w],k=s[p].sType||"string",h[x]._idx===bn&&(h[x]._idx=bo.inArray(h[x][1],s[p].asSorting)),u.push({src:m,col:p,dir:h[x][1],index:h[x]._idx,type:k,formatter:bm.ext.type.order[k+"-pre"]})
}}return u
}function cg(y){var x,w,v=[],u=bm.ext.type.order,s=y.aoData,r=0,k,m=y.aiDisplayMaster,p;
cn(y);
p=bA(y);
x=0;
for(w=p.length;
x<w;
x++){k=p[x],k.formatter&&r++,b0(y,k.col)
}if("ssp"!=a9(y)&&0!==p.length){x=0;
for(w=m.length;
x<w;
x++){v[m[x]]=x
}r===p.length?m.sort(function(H,G){var E,D,C,A,B=p.length,z=s[H]._aSortData,h=s[G]._aSortData;
for(C=0;
C<B;
C++){if(A=p[C],E=z[A.col],D=h[A.col],E=E<D?-1:E>D?1:0,0!==E){return"asc"===A.dir?E:-E
}}E=v[H];
D=v[G];
return E<D?-1:E>D?1:0
}):m.sort(function(H,G){var E,D,B,C,A=p.length,z=s[H]._aSortData,h=s[G]._aSortData;
for(B=0;
B<A;
B++){if(C=p[B],E=z[C.col],D=h[C.col],C=u[C.type+"-"+C.dir]||u["string-"+C.dir],E=C(E,D),0!==E){return E
}}E=v[H];
D=v[G];
return E<D?-1:E>D?1:0
})
}y.bSorted=!0
}function bs(w){for(var v,u,s=w.aoColumns,r=bA(w),w=w.oLanguage.oAria,p=0,m=s.length;
p<m;
p++){u=s[p];
var h=u.asSorting;
v=u.sTitle.replace(/<.*?>/g,"");
var k=u.nTh;
k.removeAttribute("aria-sort");
u.bSortable&&(0<r.length&&r[0].col==p?(k.setAttribute("aria-sort","asc"==r[0].dir?"ascending":"descending"),u=h[r[0].index+1]||h[0]):u=h[0],v+="asc"===u?w.sSortAscending:w.sSortDescending);
k.setAttribute("aria-label",v)
}}function bF(k,h,u,s){var r=k.aaSorting,p=k.aoColumns[h].asSorting,m=function(w,v){var x=w._idx;
x===bn&&(x=bo.inArray(w[1],p));
return x+1<p.length?x+1:v?null:0
};
"number"===typeof r[0]&&(r=k.aaSorting=[r]);
u&&k.oFeatures.bSortMulti?(u=bo.inArray(h,bR(r,"0")),-1!==u?(h=m(r[u],!0),null===h&&1===r.length&&(h=0),null===h?r.splice(u,1):(r[u][1]=p[h],r[u]._idx=h)):(r.push([h,p[0],0]),r[r.length-1]._idx=0)):r.length&&r[0][0]==h?(h=m(r[0]),r.length=1,r[0][1]=p[h],r[0]._idx=h):(r.length=0,r.push([h,p[0]]),r[0]._idx=0);
bC(k);
"function"==typeof s&&s(k)
}function aN(k,h,r,p){var m=k.aoColumns[r];
bk(h,{},function(s){!1!==m.bSortable&&(k.oFeatures.bProcessing?(bV(k,!0),setTimeout(function(){bF(k,r,s.shiftKey,p);
"ssp"!==a9(k)&&bV(k,!1)
},0)):bF(k,r,s.shiftKey,p))
})
}function ag(k){var h=k.aLastSort,u=k.oClasses.sSortColumn,s=bA(k),r=k.oFeatures,p,m;
if(r.bSort&&r.bSortClasses){r=0;
for(p=h.length;
r<p;
r++){m=h[r].src,bo(bR(k.aoData,"anCells",m)).removeClass(u+(2>r?r+1:3))
}r=0;
for(p=s.length;
r<p;
r++){m=s[r].src,bo(bR(k.aoData,"anCells",m)).addClass(u+(2>r?r+1:3))
}}k.aLastSort=s
}function b0(w,v){var u=w.aoColumns[v],s=bm.ext.order[u.sSortDataType],r;
s&&(r=s.call(w.oInstance,w,v,cd(w,v)));
for(var p,m=bm.ext.type.order[u.sType+"-pre"],h=0,k=w.aoData.length;
h<k;
h++){if(u=w.aoData[h],u._aSortData||(u._aSortData=[]),!u._aSortData[v]||s){p=s?r[h]:bW(w,h,v,"sort"),u._aSortData[v]=m?m(p):p
}}}function t(k){if(k.oFeatures.bStateSave&&!k.bDestroying){var h={time:+new Date,start:k._iDisplayStart,length:k._iDisplayLength,order:bo.extend(!0,[],k.aaSorting),search:aI(k.oPreviousSearch),columns:bo.map(k.aoColumns,function(m,p){return{visible:m.bVisible,search:aI(k.aoPreSearchCols[p])}
})};
bg(k,"aoStateSaveParams","stateSaveParams",[k,h]);
k.oSavedState=h;
k.fnStateSaveCallback.call(k.oInstance,k,h)
}}function a4(k){var h,s,r=k.aoColumns;
if(k.oFeatures.bStateSave){var p=k.fnStateLoadCallback.call(k.oInstance,k);
if(p&&p.time&&(h=bg(k,"aoStateLoadParams","stateLoadParams",[k,p]),-1===bo.inArray(!1,h)&&(h=k.iStateDuration,!(0<h&&p.time<+new Date-1000*h)&&r.length===p.columns.length))){k.oLoadedState=bo.extend(!0,{},p);
p.start!==bn&&(k._iDisplayStart=p.start,k.iInitDisplayStart=p.start);
p.length!==bn&&(k._iDisplayLength=p.length);
p.order!==bn&&(k.aaSorting=[],bo.each(p.order,function(u,v){k.aaSorting.push(v[0]>=r.length?[0,v[1]]:v)
}));
p.search!==bn&&bo.extend(k.oPreviousSearch,ay(p.search));
h=0;
for(s=p.columns.length;
h<s;
h++){var m=p.columns[h];
m.visible!==bn&&(r[h].bVisible=m.visible);
m.search!==bn&&bo.extend(k.aoPreSearchCols[h],ay(m.search))
}bg(k,"aoStateLoaded","stateLoaded",[k,p])
}}}function f(k){var h=bm.settings,k=bo.inArray(k,bR(h,"nTable"));
return -1!==k?h[k]:null
}function bK(k,h,p,m){p="DataTables warning: "+(k?"table id="+k.sTableId+" - ":"")+p;
m&&(p+=". For more information about this error, please see http://datatables.net/tn/"+m);
if(h){bU.console&&console.log&&console.log(p)
}else{if(h=bm.ext,h=h.sErrMode||h.errMode,k&&bg(k,null,"error",[k,m,p]),"alert"==h){alert(p)
}else{if("throw"==h){throw Error(p)
}"function"==typeof h&&h(k,m,p)
}}}function bT(k,h,p,m){bo.isArray(p)?bo.each(p,function(s,r){bo.isArray(r)?bT(k,h,r[0],r[1]):bT(k,h,r)
}):(m===bn&&(m=p),h[p]!==bn&&(k[m]=h[p]))
}function aV(k,h,r){var p,m;
for(m in h){h.hasOwnProperty(m)&&(p=h[m],bo.isPlainObject(p)?(bo.isPlainObject(k[m])||(k[m]={}),bo.extend(!0,k[m],p)):k[m]=r&&"data"!==m&&"aaData"!==m&&bo.isArray(p)?p.slice():p)
}return k
}function bk(k,h,m){bo(k).bind("click.DT",h,function(p){k.blur();
m(p)
}).bind("keypress.DT",h,function(p){13===p.which&&(p.preventDefault(),m(p))
}).bind("selectstart.DT",function(){return !1
})
}function a7(k,h,p,m){p&&k[h].push({fn:p,sName:m})
}function bg(k,h,r,p){var m=[];
h&&(m=bo.map(k[h].slice().reverse(),function(s){return s.fn.apply(k.oInstance,p)
}));
null!==r&&(h=bo.Event(r+".dt"),bo(k.nTable).trigger(h,p),m.push(h.result));
return m
}function d(k){var h=k._iDisplayStart,p=k.fnDisplayEnd(),m=k._iDisplayLength;
h>=p&&(h=p-m);
h-=h%m;
if(-1===m||0>h){h=0
}k._iDisplayStart=h
}function aD(k,h){var p=k.renderer,m=bm.ext.renderer[h];
return bo.isPlainObject(p)&&p[h]?m[p[h]]||m._:"string"===typeof p?m[p]||m._:m._
}function a9(h){return h.oFeatures.bServerSide?"ssp":h.ajax||h.sAjaxSource?"ajax":"dom"
}function cl(k,h){var p=[],p=aM.numbers_length,m=Math.floor(p/2);
h<=p?p=bz(0,h):k<=m?(p=bz(0,p-2),p.push("ellipsis"),p.push(h-1)):(k>=h-1-m?p=bz(h-(p-2),h):(p=bz(k-m+2,k+m-1),p.push("ellipsis"),p.push(h-1)),p.splice(0,0,"ellipsis"),p.splice(0,0,0));
p.DT_el="span";
return p
}function a2(h){bo.each({num:function(k){return b6(k,h)
},"num-fmt":function(k){return b6(k,h,a0)
},"html-num":function(k){return b6(k,h,aJ)
},"html-num-fmt":function(k){return b6(k,h,aJ,a0)
}},function(k,m){bf.type.order[k+h+"-pre"]=m;
k.match(/^html\-/)&&(bf.type.search[k+h]=bf.type.search.html)
})
}function aC(h){return function(){var k=[f(this[bm.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
return bm.ext.internal[h].apply(this,k)
}
}var bm=function(k){this.$=function(u,s){return this.api(!0).$(u,s)
};
this._=function(u,s){return this.api(!0).rows(u,s).data()
};
this.api=function(s){return s?new bi(f(this[bf.iApiIndex])):new bi(this)
};
this.fnAddData=function(u,s){var w=this.api(!0),v=bo.isArray(u)&&(bo.isArray(u[0])||bo.isPlainObject(u[0]))?w.rows.add(u):w.row.add(u);
(s===bn||s)&&w.draw();
return v.flatten().toArray()
};
this.fnAdjustColumnSizing=function(u){var s=this.api(!0).columns.adjust(),w=s.settings()[0],v=w.oScroll;
u===bn||u?s.draw(!1):(""!==v.sX||""!==v.sY)&&l(w)
};
this.fnClearTable=function(u){var s=this.api(!0).clear();
(u===bn||u)&&s.draw()
};
this.fnClose=function(s){this.api(!0).row(s).child.hide()
};
this.fnDeleteRow=function(u,s,y){var x=this.api(!0),u=x.rows(u),w=u.settings()[0],v=w.aoData[u[0][0]];
u.remove();
s&&s.call(this,w,v);
(y===bn||y)&&x.draw();
return v
};
this.fnDestroy=function(s){this.api(!0).destroy(s)
};
this.fnDraw=function(s){this.api(!0).draw(s)
};
this.fnFilter=function(u,s,y,x,w,v){w=this.api(!0);
null===s||s===bn?w.search(u,y,x,v):w.column(s).search(u,y,x,v);
w.draw()
};
this.fnGetData=function(u,s){var w=this.api(!0);
if(u!==bn){var v=u.nodeName?u.nodeName.toLowerCase():"";
return s!==bn||"td"==v||"th"==v?w.cell(u,s).data():w.row(u).data()||null
}return w.data().toArray()
};
this.fnGetNodes=function(u){var s=this.api(!0);
return u!==bn?s.row(u).node():s.rows().nodes().flatten().toArray()
};
this.fnGetPosition=function(u){var s=this.api(!0),v=u.nodeName.toUpperCase();
return"TR"==v?s.row(u).index():"TD"==v||"TH"==v?(u=s.cell(u).index(),[u.row,u.columnVisible,u.column]):null
};
this.fnIsOpen=function(s){return this.api(!0).row(s).child.isShown()
};
this.fnOpen=function(u,s,v){return this.api(!0).row(u).child(s,v).show().child()[0]
};
this.fnPageChange=function(u,s){var v=this.api(!0).page(u);
(s===bn||s)&&v.draw(!1)
};
this.fnSetColumnVis=function(u,s,v){u=this.api(!0).column(u).visible(s);
(v===bn||v)&&u.columns.adjust().draw()
};
this.fnSettings=function(){return f(this[bf.iApiIndex])
};
this.fnSort=function(s){this.api(!0).order(s).draw()
};
this.fnSortListener=function(u,s,v){this.api(!0).order.listener(u,s,v)
};
this.fnUpdate=function(u,s,y,x,w){var v=this.api(!0);
y===bn||null===y?v.row(s).data(u):v.cell(s,y).data(u);
(w===bn||w)&&v.columns.adjust();
(x===bn||x)&&v.draw();
return 0
};
this.fnVersionCheck=bf.fnVersionCheck;
var h=this,r=k===bn,p=this.length;
r&&(k={});
this.oApi=this.internal=bf.internal;
for(var m in bm.ext.internal){m&&(this[m]=aC(m))
}this.each(function(){var G={},G=1<p?aV(G,k,!0):k,E=0,C,D=this.getAttribute("id"),A=!1,B=bm.defaults,x=bo(this);
if("table"!=this.nodeName.toLowerCase()){bK(null,0,"Non-table node initialisation ("+this.nodeName+")",2)
}else{aT(B);
aK(B.column);
bL(B,B,!0);
bL(B.column,B.column,!0);
bL(B,bo.extend(G,x.data()));
var J=bm.settings,E=0;
for(C=J.length;
E<C;
E++){var y=J[E];
if(y.nTable==this||y.nTHead.parentNode==this||y.nTFoot&&y.nTFoot.parentNode==this){E=G.bRetrieve!==bn?G.bRetrieve:B.bRetrieve;
if(r||E){return y.oInstance
}if(G.bDestroy!==bn?G.bDestroy:B.bDestroy){y.oInstance.fnDestroy();
break
}else{bK(y,0,"Cannot reinitialise DataTable",3);
return
}}if(y.sTableId==this.id){J.splice(E,1);
break
}}if(null===D||""===D){this.id=D="DataTables_Table_"+bm.ext._unique++
}var z=bo.extend(!0,{},bm.models.oSettings,{sDestroyWidth:x[0].style.width,sInstance:D,sTableId:D});
z.nTable=this;
z.oApi=h.internal;
z.oInit=G;
J.push(z);
z.oInstance=1===h.length?h:x.dataTable();
aT(G);
G.oLanguage&&ai(G.oLanguage);
G.aLengthMenu&&!G.iDisplayLength&&(G.iDisplayLength=bo.isArray(G.aLengthMenu[0])?G.aLengthMenu[0][0]:G.aLengthMenu[0]);
G=aV(bo.extend(!0,{},B),G);
bT(z.oFeatures,G,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
bT(z,G,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);
bT(z.oScroll,G,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);
bT(z.oLanguage,G,"fnInfoCallback");
a7(z,"aoDrawCallback",G.fnDrawCallback,"user");
a7(z,"aoServerParams",G.fnServerParams,"user");
a7(z,"aoStateSaveParams",G.fnStateSaveParams,"user");
a7(z,"aoStateLoadParams",G.fnStateLoadParams,"user");
a7(z,"aoStateLoaded",G.fnStateLoaded,"user");
a7(z,"aoRowCallback",G.fnRowCallback,"user");
a7(z,"aoRowCreatedCallback",G.fnCreatedRow,"user");
a7(z,"aoHeaderCallback",G.fnHeaderCallback,"user");
a7(z,"aoFooterCallback",G.fnFooterCallback,"user");
a7(z,"aoInitComplete",G.fnInitComplete,"user");
a7(z,"aoPreDrawCallback",G.fnPreDrawCallback,"user");
z.rowIdFn=bG(G.rowId);
aA(z);
D=z.oClasses;
G.bJQueryUI?(bo.extend(D,bm.ext.oJUIClasses,G.oClasses),G.sDom===B.sDom&&"lfrtip"===B.sDom&&(z.sDom='<"H"lfr>t<"F"ip>'),z.renderer)?bo.isPlainObject(z.renderer)&&!z.renderer.header&&(z.renderer.header="jqueryui"):z.renderer="jqueryui":bo.extend(D,bm.ext.classes,G.oClasses);
x.addClass(D.sTable);
z.iInitDisplayStart===bn&&(z.iInitDisplayStart=G.iDisplayStart,z._iDisplayStart=G.iDisplayStart);
null!==G.iDeferLoading&&(z.bDeferLoading=!0,E=bo.isArray(G.iDeferLoading),z._iRecordsDisplay=E?G.iDeferLoading[0]:G.iDeferLoading,z._iRecordsTotal=E?G.iDeferLoading[1]:G.iDeferLoading);
var u=z.oLanguage;
bo.extend(!0,u,G.oLanguage);
""!==u.sUrl&&(bo.ajax({dataType:"json",url:u.sUrl,success:function(s){ai(s);
bL(B.oLanguage,s);
bo.extend(true,u,s);
aB(z)
},error:function(){aB(z)
}}),A=!0);
null===G.asStripeClasses&&(z.asStripeClasses=[D.sStripeOdd,D.sStripeEven]);
var E=z.asStripeClasses,I=x.children("tbody").find("tr").eq(0);
-1!==bo.inArray(!0,bo.map(E,function(s){return I.hasClass(s)
}))&&(bo("tbody tr",this).removeClass(E.join(" ")),z.asDestroyStripes=E.slice());
J=[];
E=this.getElementsByTagName("thead");
0!==E.length&&(a3(z.aoHeader,E[0]),J=aY(z));
if(null===G.aoColumns){y=[];
E=0;
for(C=J.length;
E<C;
E++){y.push(null)
}}else{y=G.aoColumns
}E=0;
for(C=y.length;
E<C;
E++){F(z,J?J[E]:null)
}aj(z,G.aoColumnDefs,y,function(v,s){S(z,v,s)
});
if(I.length){var K=function(v,s){return v.getAttribute("data-"+s)!==null?s:null
};
bo(I[0]).children("th, td").each(function(v,s){var M=z.aoColumns[v];
if(M.mData===v){var L=K(s,"sort")||K(s,"order"),w=K(s,"filter")||K(s,"search");
if(L!==null||w!==null){M.mData={_:v+".display",sort:L!==null?v+".@data-"+L:bn,type:L!==null?v+".@data-"+L:bn,filter:w!==null?v+".@data-"+w:bn};
S(z,v)
}}})
}var H=z.oFeatures;
G.bStateSave&&(H.bStateSave=!0,a4(z,G),a7(z,"aoDrawCallback",t,"state_save"));
if(G.aaSorting===bn){J=z.aaSorting;
E=0;
for(C=J.length;
E<C;
E++){J[E][1]=z.aoColumns[E].asSorting[0]
}}ag(z);
H.bSort&&a7(z,"aoDrawCallback",function(){if(z.bSorted){var v=bA(z),s={};
bo.each(v,function(w,L){s[L.src]=L.dir
});
bg(z,null,"order",[z,v,s]);
bs(z)
}});
a7(z,"aoDrawCallback",function(){(z.bSorted||a9(z)==="ssp"||H.bDeferRender)&&ag(z)
},"sc");
E=x.children("caption").each(function(){this._captionSide=x.css("caption-side")
});
C=x.children("thead");
0===C.length&&(C=bo("<thead/>").appendTo(this));
z.nTHead=C[0];
C=x.children("tbody");
0===C.length&&(C=bo("<tbody/>").appendTo(this));
z.nTBody=C[0];
C=x.children("tfoot");
if(0===C.length&&0<E.length&&(""!==z.oScroll.sX||""!==z.oScroll.sY)){C=bo("<tfoot/>").appendTo(this)
}0===C.length||0===C.children().length?x.addClass(D.sNoFooter):0<C.length&&(z.nTFoot=C[0],a3(z.aoFooter,z.nTFoot));
if(G.aaData){for(E=0;
E<G.aaData.length;
E++){bI(z,G.aaData[E])
}}else{(z.bDeferLoading||"dom"==a9(z))&&ch(z,bo(z.nTBody).children("tr"))
}z.aiDisplay=z.aiDisplayMaster.slice();
z.bInitialised=!0;
!1===A&&aB(z)
}});
h=null;
return this
},bf,bi,bl,bh,aR={},au=/[\r\n]/g,aJ=/<.*?>/g,b7=/^[\w\+\-]/,bO=/[\w\+\-]$/,bp=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),a0=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,bJ=function(h){return !h||!0===h||"-"===h?!0:!1
},al=function(k){var h=parseInt(k,10);
return !isNaN(h)&&isFinite(k)?h:null
},ad=function(k,h){aR[h]||(aR[h]=RegExp(ae(h),"g"));
return"string"===typeof k&&"."!==h?k.replace(/\./g,"").replace(aR[h],"."):k
},aH=function(k,h,p){var m="string"===typeof k;
if(bJ(k)){return !0
}h&&m&&(k=ad(k,h));
p&&m&&(k=k.replace(a0,""));
return !isNaN(parseFloat(k))&&isFinite(k)
},n=function(k,h,m){return bJ(k)?!0:!(bJ(k)||"string"===typeof k)?null:aH(k.replace(aJ,""),h,m)?!0:null
},bR=function(k,h,s){var r=[],p=0,m=k.length;
if(s!==bn){for(;
p<m;
p++){k[p]&&k[p][h]&&r.push(k[p][h][s])
}}else{for(;
p<m;
p++){k[p]&&r.push(k[p][h])
}}return r
},at=function(k,h,u,s){var r=[],p=0,m=h.length;
if(s!==bn){for(;
p<m;
p++){k[h[p]][u]&&r.push(k[h[p]][u][s])
}}else{for(;
p<m;
p++){r.push(k[h[p]][u])
}}return r
},bz=function(k,h){var r=[],p;
h===bn?(h=0,p=k):(p=h,h=k);
for(var m=h;
m<p;
m++){r.push(m)
}return r
},c=function(k){for(var h=[],p=0,m=k.length;
p<m;
p++){k[p]&&h.push(k[p])
}return h
},a8=function(k){var h=[],u,s,r=k.length,p,m=0;
s=0;
k:for(;
s<r;
s++){u=k[s];
for(p=0;
p<m;
p++){if(h[p]===u){continue k
}}h.push(u);
m++
}return h
};
bm.util={throttle:function(k,h){var r=h!==bn?h:200,p,m;
return function(){var s=this,v=+new Date,u=arguments;
p&&v<p+r?(clearTimeout(m),m=setTimeout(function(){p=bn;
k.apply(s,u)
},r)):(p=v,k.apply(s,u))
}
},escapeRegex:function(h){return h.replace(bp,"\\$1")
}};
var bX=function(k,h,m){k[h]!==bn&&(k[m]=k[h])
},bS=/\[.*?\]$/,bB=/\(\)$/,ae=bm.util.escapeRegex,ao=bo("<div>")[0],aG=ao.textContent!==bn,bY=/<.*?>/g,av=bm.util.throttle,ci=[],be=Array.prototype,a1=function(k){var h,r,p=bm.settings,m=bo.map(p,function(s){return s.nTable
});
if(k){if(k.nTable&&k.oApi){return[k]
}if(k.nodeName&&"table"===k.nodeName.toLowerCase()){return h=bo.inArray(k,m),-1!==h?[p[h]]:null
}if(k&&"function"===typeof k.settings){return k.settings().toArray()
}"string"===typeof k?r=bo(k):k instanceof bo&&(r=k)
}else{return[]
}if(r){return r.map(function(){h=bo.inArray(this,m);
return -1!==h?p[h]:null
}).toArray()
}};
bi=function(k,h){if(!(this instanceof bi)){return new bi(k,h)
}var s=[],r=function(u){(u=a1(u))&&(s=s.concat(u))
};
if(bo.isArray(k)){for(var p=0,m=k.length;
p<m;
p++){r(k[p])
}}else{r(k)
}this.context=a8(s);
h&&bo.merge(this,h);
this.selector={rows:null,cols:null,opts:null};
bi.extend(this,this,ci)
};
bm.Api=bi;
bo.extend(bi.prototype,{any:function(){return 0!==this.count()
},concat:be.concat,context:[],count:function(){return this.flatten().length
},each:function(k){for(var h=0,m=this.length;
h<m;
h++){k.call(this,this[h],h,this)
}return this
},eq:function(k){var h=this.context;
return h.length>k?new bi(h[k],this[k]):null
},filter:function(k){var h=[];
if(be.filter){h=be.filter.call(this,k,this)
}else{for(var p=0,m=this.length;
p<m;
p++){k.call(this,this[p],p,this)&&h.push(this[p])
}}return new bi(this.context,h)
},flatten:function(){var h=[];
return new bi(this.context,h.concat.apply(h,this.toArray()))
},join:be.join,indexOf:be.indexOf||function(k,h){for(var p=h||0,m=this.length;
p<m;
p++){if(this[p]===k){return p
}}return -1
},iterator:function(E,D,C,B){var A=[],z,y,x,w,s,v=this.context,u,G,k=this.selector;
"string"===typeof E&&(B=C,C=D,D=E,E=!1);
y=0;
for(x=v.length;
y<x;
y++){var r=new bi(v[y]);
if("table"===D){z=C.call(r,v[y],y),z!==bn&&A.push(z)
}else{if("columns"===D||"rows"===D){z=C.call(r,v[y],this[y],y),z!==bn&&A.push(z)
}else{if("column"===D||"column-rows"===D||"row"===D||"cell"===D){G=this[y];
"column-rows"===D&&(u=az(v[y],k.opts));
w=0;
for(s=G.length;
w<s;
w++){z=G[w],z="cell"===D?C.call(r,v[y],z.row,z.column,y,w):C.call(r,v[y],z,y,w,u),z!==bn&&A.push(z)
}}}}}return A.length||B?(E=new bi(v,E?A.concat.apply([],A):A),D=E.selector,D.rows=k.rows,D.cols=k.cols,D.opts=k.opts,E):this
},lastIndexOf:be.lastIndexOf||function(k,h){return this.indexOf.apply(this.toArray.reverse(),arguments)
},length:0,map:function(k){var h=[];
if(be.map){h=be.map.call(this,k,this)
}else{for(var p=0,m=this.length;
p<m;
p++){h.push(k.call(this,this[p],p))
}}return new bi(this.context,h)
},pluck:function(h){return this.map(function(k){return k[h]
})
},pop:be.pop,push:be.push,reduce:be.reduce||function(k,h){return ar(this,k,h,0,this.length,1)
},reduceRight:be.reduceRight||function(k,h){return ar(this,k,h,this.length-1,-1,-1)
},reverse:be.reverse,selector:null,shift:be.shift,sort:be.sort,splice:be.splice,toArray:function(){return be.slice.call(this)
},to$:function(){return bo(this)
},toJQuery:function(){return bo(this)
},unique:function(){return new bi(this.context,a8(this))
},unshift:be.unshift});
bi.extend=function(k,h,u){if(u.length&&h&&(h instanceof bi||h.__dt_wrapper)){var s,r,p,m=function(w,v,x){return function(){var y=v.apply(w,arguments);
bi.extend(y,y,x.methodExt);
return y
}
};
s=0;
for(r=u.length;
s<r;
s++){p=u[s],h[p.name]="function"===typeof p.val?m(k,p.val,p):bo.isPlainObject(p.val)?{}:p.val,h[p.name].__dt_wrapper=!0,bi.extend(k,h[p.name],p.propExt)
}}};
bi.register=bl=function(x,w){if(bo.isArray(x)){for(var v=0,u=x.length;
v<u;
v++){bi.register(x[v],w)
}}else{for(var s=x.split("."),r=ci,p,k,v=0,u=s.length;
v<u;
v++){p=(k=-1!==s[v].indexOf("()"))?s[v].replace("()",""):s[v];
var m;
x:{m=0;
for(var h=r.length;
m<h;
m++){if(r[m].name===p){m=r[m];
break x
}}m=null
}m||(m={name:p,val:{},methodExt:[],propExt:[]},r.push(m));
v===u-1?m.val=w:r=k?m.methodExt:m.propExt
}}};
bi.registerPlural=bh=function(k,h,m){bi.register(k,m);
bi.register(h,function(){var p=m.apply(this,arguments);
return p===this?this:p instanceof bi?p.length?bo.isArray(p[0])?new bi(p.context,p[0]):p[0]:bn:p
})
};
bl("tables()",function(k){var h;
if(k){h=bi;
var p=this.context;
if("number"===typeof k){k=[p[k]]
}else{var m=bo.map(p,function(r){return r.nTable
}),k=bo(m).filter(k).map(function(){var r=bo.inArray(this,m);
return p[r]
}).toArray()
}h=new h(k)
}else{h=this
}return h
});
bl("table()",function(k){var k=this.tables(k),h=k.context;
return h.length?new bi(h[0]):k
});
bh("tables().nodes()","table().node()",function(){return this.iterator("table",function(h){return h.nTable
},1)
});
bh("tables().body()","table().body()",function(){return this.iterator("table",function(h){return h.nTBody
},1)
});
bh("tables().header()","table().header()",function(){return this.iterator("table",function(h){return h.nTHead
},1)
});
bh("tables().footer()","table().footer()",function(){return this.iterator("table",function(h){return h.nTFoot
},1)
});
bh("tables().containers()","table().container()",function(){return this.iterator("table",function(h){return h.nTableWrapper
},1)
});
bl("draw()",function(h){return this.iterator("table",function(k){"page"===h?bH(k):("string"===typeof h&&(h="full-hold"===h?!1:!0),bC(k,!1===h))
})
});
bl("page()",function(h){return h===bn?this.page.info().page:this.iterator("table",function(k){cj(k,h)
})
});
bl("page.info()",function(){if(0===this.context.length){return bn
}var k=this.context[0],h=k._iDisplayStart,r=k.oFeatures.bPaginate?k._iDisplayLength:-1,p=k.fnRecordsDisplay(),m=-1===r;
return{page:m?0:Math.floor(h/r),pages:m?1:Math.ceil(p/r),start:h,end:k.fnDisplayEnd(),length:r,recordsTotal:k.fnRecordsTotal(),recordsDisplay:p,serverSide:"ssp"===a9(k)}
});
bl("page.len()",function(h){return h===bn?0!==this.context.length?this.context[0]._iDisplayLength:bn:this.iterator("table",function(k){o(k,h)
})
});
var b4=function(k,h,r){if(r){var p=new bi(k);
p.one("draw",function(){r(p.ajax.json())
})
}if("ssp"==a9(k)){bC(k,h)
}else{bV(k,!0);
var m=k.jqXHR;
m&&4!==m.readyState&&m.abort();
aP(k,[],function(v){b3(k);
for(var v=aF(k,v),u=0,s=v.length;
u<s;
u++){bI(k,v[u])
}bC(k,h);
bV(k,!1)
})
}};
bl("ajax.json()",function(){var h=this.context;
if(0<h.length){return h[0].json
}});
bl("ajax.params()",function(){var h=this.context;
if(0<h.length){return h[0].oAjaxData
}});
bl("ajax.reload()",function(k,h){return this.iterator("table",function(m){b4(m,!1===h,k)
})
});
bl("ajax.url()",function(k){var h=this.context;
if(k===bn){if(0===h.length){return bn
}h=h[0];
return h.ajax?bo.isPlainObject(h.ajax)?h.ajax.url:h.ajax:h.sAjaxSource
}return this.iterator("table",function(m){bo.isPlainObject(m.ajax)?m.ajax.url=k:m.ajax=k
})
});
bl("ajax.url().load()",function(k,h){return this.iterator("table",function(m){b4(m,!1===h,k)
})
});
var bZ=function(A,z,y,x,w){var v=[],u,r,s,h,p,k;
s=typeof z;
if(!z||"string"===s||"function"===s||z.length===bn){z=[z]
}s=0;
for(h=z.length;
s<h;
s++){r=z[s]&&z[s].split?z[s].split(","):[z[s]];
p=0;
for(k=r.length;
p<k;
p++){(u=y("string"===typeof r[p]?bo.trim(r[p]):r[p]))&&u.length&&(v=v.concat(u))
}}A=bf.selector[A];
if(A.length){s=0;
for(h=A.length;
s<h;
s++){v=A[s](x,w,v)
}}return a8(v)
},b8=function(h){h||(h={});
h.filter&&h.search===bn&&(h.search=h.filter);
return bo.extend({search:"none",order:"current",page:"all"},h)
},bQ=function(k){for(var h=0,m=k.length;
h<m;
h++){if(0<k[h].length){return k[0]=k[h],k[0].length=1,k.length=1,k.context=[k.context[h]],k
}}k.length=0;
return k
},az=function(k,h){var v,u,s,r=[],p=k.aiDisplay;
v=k.aiDisplayMaster;
var m=h.search;
u=h.order;
s=h.page;
if("ssp"==a9(k)){return"removed"===m?[]:bz(0,v.length)
}if("current"==s){v=k._iDisplayStart;
for(u=k.fnDisplayEnd();
v<u;
v++){r.push(p[v])
}}else{if("current"==u||"applied"==u){r="none"==m?v.slice():"applied"==m?p.slice():bo.map(v,function(w){return -1===bo.inArray(w,p)?w:null
})
}else{if("index"==u||"original"==u){v=0;
for(u=k.aoData.length;
v<u;
v++){"none"==m?r.push(v):(s=bo.inArray(v,p),(-1===s&&"removed"==m||0<=s&&"applied"==m)&&r.push(v))
}}}}return r
};
bl("rows()",function(k,h){k===bn?k="":bo.isPlainObject(k)&&(h=k,k="");
var h=b8(h),m=this.iterator("table",function(r){var p=h;
return bZ("row",k,function(u){var s=al(u);
if(s!==null&&!p){return[s]
}var v=az(r,p);
if(s!==null&&bo.inArray(s,v)!==-1){return[s]
}if(!u){return v
}if(typeof u==="function"){return bo.map(v,function(w){var x=r.aoData[w];
return u(w,x._aData,x.nTr)?w:null
})
}s=c(at(r.aoData,v,"nTr"));
if(u.nodeName){if(u._DT_RowIndex!==bn){return[u._DT_RowIndex]
}if(u._DT_CellIndex){return[u._DT_CellIndex.row]
}s=bo(u).closest("*[data-dt-row]");
return s.length?[s.data("dt-row")]:[]
}if(typeof u==="string"&&u.charAt(0)==="#"){v=r.aIds[u.replace(/^#/,"")];
if(v!==bn){return[v.idx]
}}return bo(s).filter(u).map(function(){return this._DT_RowIndex
}).toArray()
},r,p)
},1);
m.selector.rows=k;
m.selector.opts=h;
return m
});
bl("rows().nodes()",function(){return this.iterator("row",function(k,h){return k.aoData[h].nTr||bn
},1)
});
bl("rows().data()",function(){return this.iterator(!0,"rows",function(k,h){return at(k.aoData,h,"_aData")
},1)
});
bh("rows().cache()","row().cache()",function(h){return this.iterator("row",function(k,p){var m=k.aoData[p];
return"search"===h?m._aFilterData:m._aSortData
},1)
});
bh("rows().invalidate()","row().invalidate()",function(h){return this.iterator("row",function(k,m){br(k,m,h)
})
});
bh("rows().indexes()","row().index()",function(){return this.iterator("row",function(k,h){return h
},1)
});
bh("rows().ids()","row().id()",function(m){for(var k=[],w=this.context,v=0,u=w.length;
v<u;
v++){for(var s=0,r=this[v].length;
s<r;
s++){var p=w[v].rowIdFn(w[v].aoData[this[v][s]]._aData);
k.push((!0===m?"#":"")+p)
}}return new bi(w,k)
});
bh("rows().remove()","row().remove()",function(){var h=this;
this.iterator("row",function(y,x,w){var v=y.aoData,u=v[x],s,r,p,k,m;
v.splice(x,1);
s=0;
for(r=v.length;
s<r;
s++){if(p=v[s],m=p.anCells,null!==p.nTr&&(p.nTr._DT_RowIndex=s),null!==m){p=0;
for(k=m.length;
p<k;
p++){m[p]._DT_CellIndex.row=s
}}}bv(y.aiDisplayMaster,x);
bv(y.aiDisplay,x);
bv(h[w],x,!1);
d(y);
x=y.rowIdFn(u._aData);
x!==bn&&delete y.aIds[x]
});
this.iterator("table",function(k){for(var p=0,m=k.aoData.length;
p<m;
p++){k.aoData[p].idx=p
}});
return this
});
bl("rows.add()",function(k){var h=this.iterator("table",function(p){var v,u,s,r=[];
u=0;
for(s=k.length;
u<s;
u++){v=k[u],v.nodeName&&"TR"===v.nodeName.toUpperCase()?r.push(ch(p,v)[0]):r.push(bI(p,v))
}return r
},1),m=this.rows(-1);
m.pop();
bo.merge(m,h);
return m
});
bl("row()",function(k,h){return bQ(this.rows(k,h))
});
bl("row().data()",function(k){var h=this.context;
if(k===bn){return h.length&&this.length?h[0].aoData[this[0]]._aData:bn
}h[0].aoData[this[0]]._aData=k;
br(h[0],this[0],"data");
return this
});
bl("row().node()",function(){var h=this.context;
return h.length&&this.length?h[0].aoData[this[0]].nTr||null:null
});
bl("row.add()",function(k){k instanceof bo&&k.length&&(k=k[0]);
var h=this.iterator("table",function(m){return k.nodeName&&"TR"===k.nodeName.toUpperCase()?ch(m,k)[0]:bI(m,k)
});
return this.row(h[0])
});
var bq=function(k,h){var m=k.context;
if(m.length&&(m=m[0].aoData[h!==bn?h:k[0]])&&m._details){m._details.remove(),m._detailsShow=bn,m._details=bn
}},bD=function(k,h){var u=k.context;
if(u.length&&k.length){var s=u[0].aoData[k[0]];
if(s._details){(s._detailsShow=h)?s._details.insertAfter(s.nTr):s._details.detach();
var r=u[0],p=new bi(r),m=r.aoData;
p.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
0<bR(m,"_details").length&&(p.on("draw.dt.DT_details",function(w,v){r===v&&p.rows({page:"current"}).eq(0).each(function(x){x=m[x];
x._detailsShow&&x._details.insertAfter(x.nTr)
})
}),p.on("column-visibility.dt.DT_details",function(w,v){if(r===v){for(var A,z=b9(v),y=0,x=m.length;
y<x;
y++){A=m[y],A._details&&A._details.children("td[colspan]").attr("colspan",z)
}}}),p.on("destroy.dt.DT_details",function(w,v){if(r===v){for(var y=0,x=m.length;
y<x;
y++){m[y]._details&&bq(p,y)
}}}))
}}};
bl("row().child()",function(k,h){var s=this.context;
if(k===bn){return s.length&&this.length?s[0].aoData[this[0]]._details:bn
}if(!0===k){this.child.show()
}else{if(!1===k){bq(this)
}else{if(s.length&&this.length){var r=s[0],s=s[0].aoData[this[0]],p=[],m=function(v,u){if(bo.isArray(v)||v instanceof bo){for(var x=0,w=v.length;
x<w;
x++){m(v[x],u)
}}else{v.nodeName&&"tr"===v.nodeName.toLowerCase()?p.push(v):(x=bo("<tr><td/></tr>").addClass(u),bo("td",x).addClass(u).html(v)[0].colSpan=b9(r),p.push(x[0]))
}};
m(k,h);
s._details&&s._details.remove();
s._details=bo(p);
s._detailsShow&&s._details.insertAfter(s.nTr)
}}}return this
});
bl(["row().child.show()","row().child().show()"],function(){bD(this,!0);
return this
});
bl(["row().child.hide()","row().child().hide()"],function(){bD(this,!1);
return this
});
bl(["row().child.remove()","row().child().remove()"],function(){bq(this);
return this
});
bl("row().child.isShown()",function(){var h=this.context;
return h.length&&this.length?h[0].aoData[this[0]]._detailsShow||!1:!1
});
var aS=/^(.+):(name|visIdx|visible)$/,bj=function(k,h,s,r,p){for(var s=[],r=0,m=p.length;
r<m;
r++){s.push(bW(k,p[r],h))
}return s
};
bl("columns()",function(k,h){k===bn?k="":bo.isPlainObject(k)&&(h=k,k="");
var h=b8(h),m=this.iterator("table",function(w){var v=k,u=h,s=w.aoColumns,p=bR(s,"sName"),r=bR(s,"nTh");
return bZ("column",v,function(z){var y=al(z);
if(z===""){return bz(s.length)
}if(y!==null){return[y>=0?y:s.length+y]
}if(typeof z==="function"){var B=az(w,u);
return bo.map(s,function(C,D){return z(D,bj(w,D,0,0,B),r[D])?D:null
})
}var A=typeof z==="string"?z.match(aS):"";
if(A){switch(A[2]){case"visIdx":case"visible":y=parseInt(A[1],10);
if(y<0){var x=bo.map(s,function(D,C){return D.bVisible?C:null
});
return[x[x.length+y]]
}return[bw(w,y)];
case"name":return bo.map(p,function(D,C){return D===A[1]?C:null
});
default:return[]
}}if(z.nodeName&&z._DT_CellIndex){return[z._DT_CellIndex.column]
}y=bo(r).filter(z).map(function(){return bo.inArray(this,r)
}).toArray();
if(y.length||!z.nodeName){return y
}y=bo(z).closest("*[data-dt-column]");
return y.length?[y.data("dt-column")]:[]
},w,u)
},1);
m.selector.cols=k;
m.selector.opts=h;
return m
});
bh("columns().header()","column().header()",function(){return this.iterator("column",function(k,h){return k.aoColumns[h].nTh
},1)
});
bh("columns().footer()","column().footer()",function(){return this.iterator("column",function(k,h){return k.aoColumns[h].nTf
},1)
});
bh("columns().data()","column().data()",function(){return this.iterator("column-rows",bj,1)
});
bh("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(k,h){return k.aoColumns[h].mData
},1)
});
bh("columns().cache()","column().cache()",function(h){return this.iterator("column-rows",function(k,s,r,p,m){return at(k.aoData,m,"search"===h?"_aFilterData":"_aSortData",s)
},1)
});
bh("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(k,h,r,p,m){return at(k.aoData,m,"anCells",h)
},1)
});
bh("columns().visible()","column().visible()",function(k,h){var m=this.iterator("column",function(z,y){if(k===bn){return z.aoColumns[y].bVisible
}var x=z.aoColumns,w=x[y],u=z.aoData,v,p,s;
if(k!==bn&&w.bVisible!==k){if(k){var r=bo.inArray(!0,bR(x,"bVisible"),y+1);
v=0;
for(p=u.length;
v<p;
v++){s=u[v].nTr,x=u[v].anCells,s&&s.insertBefore(x[y],x[r]||null)
}}else{bo(bR(z.aoData,"anCells",y)).detach()
}w.bVisible=k;
aU(z,z.aoHeader);
aU(z,z.aoFooter);
t(z)
}});
k!==bn&&(this.iterator("column",function(r,p){bg(r,null,"column-visibility",[r,p,k,h])
}),(h===bn||h)&&this.columns.adjust());
return m
});
bh("columns().indexes()","column().index()",function(h){return this.iterator("column",function(k,m){return"visible"===h?cd(k,m):m
},1)
});
bl("columns.adjust()",function(){return this.iterator("table",function(h){bx(h)
},1)
});
bl("column.index()",function(k,h){if(0!==this.context.length){var m=this.context[0];
if("fromVisible"===k||"toData"===k){return bw(m,h)
}if("fromData"===k||"toVisible"===k){return cd(m,h)
}}});
bl("column()",function(k,h){return bQ(this.columns(k,h))
});
bl("cells()",function(y,x,w){bo.isPlainObject(y)&&(y.row===bn?(w=y,y=null):(w=x,x=null));
bo.isPlainObject(x)&&(w=x,x=null);
if(null===x||x===bn){return this.iterator("table",function(L){var K=y,J=b8(w),I=L.aoData,H=az(L,J),E=c(at(I,H,"anCells")),G=bo([].concat.apply([],E)),D,B=L.aoColumns.length,C,A,z,N,M,O;
return bZ("cell",K,function(Q){var R=typeof Q==="function";
if(Q===null||Q===bn||R){C=[];
A=0;
for(z=H.length;
A<z;
A++){D=H[A];
for(N=0;
N<B;
N++){M={row:D,column:N};
if(R){O=I[D];
Q(M,bW(L,D,N),O.anCells?O.anCells[N]:null)&&C.push(M)
}else{C.push(M)
}}}return C
}if(bo.isPlainObject(Q)){return[Q]
}R=G.filter(Q).map(function(U,T){return{row:T._DT_CellIndex.row,column:T._DT_CellIndex.column}
}).toArray();
if(R.length||!Q.nodeName){return R
}O=bo(Q).closest("*[data-dt-row]");
return O.length?[{row:O.data("dt-row"),column:O.data("dt-column")}]:[]
},L,J)
})
}var v=this.columns(x,w),u=this.rows(y,w),s,r,m,p,h,k=this.iterator("table",function(A,z){s=[];
r=0;
for(m=u[z].length;
r<m;
r++){p=0;
for(h=v[z].length;
p<h;
p++){s.push({row:u[z][r],column:v[z][p]})
}}return s
},1);
bo.extend(k.selector,{cols:x,rows:y,opts:w});
return k
});
bh("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(k,h,m){return(k=k.aoData[h])&&k.anCells?k.anCells[m]:bn
},1)
});
bl("cells().data()",function(){return this.iterator("cell",function(k,h,m){return bW(k,h,m)
},1)
});
bh("cells().cache()","cell().cache()",function(h){h="search"===h?"_aFilterData":"_aSortData";
return this.iterator("cell",function(k,p,m){return k.aoData[p][h][m]
},1)
});
bh("cells().render()","cell().render()",function(h){return this.iterator("cell",function(k,p,m){return bW(k,p,m,h)
},1)
});
bh("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(k,h,m){return{row:h,column:m,columnVisible:cd(k,m)}
},1)
});
bh("cells().invalidate()","cell().invalidate()",function(h){return this.iterator("cell",function(k,p,m){br(k,p,h,m)
})
});
bl("cell()",function(k,h,m){return bQ(this.cells(k,h,m))
});
bl("cell().data()",function(k){var h=this.context,m=this[0];
if(k===bn){return h.length&&m.length?bW(h[0],m[0].row,m[0].column):bn
}P(h[0],m[0].row,m[0].column,k);
br(h[0],m[0].row,"data",m[0].column);
return this
});
bl("order()",function(k,h){var m=this.context;
if(k===bn){return 0!==m.length?m[0].aaSorting:bn
}"number"===typeof k?k=[[k,h]]:k.length&&!bo.isArray(k[0])&&(k=Array.prototype.slice.call(arguments));
return this.iterator("table",function(p){p.aaSorting=k.slice()
})
});
bl("order.listener()",function(k,h,m){return this.iterator("table",function(p){aN(p,k,h,m)
})
});
bl("order.fixed()",function(k){if(!k){var h=this.context,h=h.length?h[0].aaSortingFixed:bn;
return bo.isArray(h)?{pre:h}:h
}return this.iterator("table",function(m){m.aaSortingFixed=bo.extend(!0,{},k)
})
});
bl(["columns().order()","column().order()"],function(k){var h=this;
return this.iterator("table",function(r,p){var m=[];
bo.each(h[p],function(s,u){m.push([u,k])
});
r.aaSorting=m
})
});
bl("search()",function(k,h,r,p){var m=this.context;
return k===bn?0!==m.length?m[0].oPreviousSearch.sSearch:bn:this.iterator("table",function(s){s.oFeatures.bFilter&&aL(s,bo.extend({},s.oPreviousSearch,{sSearch:k+"",bRegex:null===h?!1:h,bSmart:null===r?!0:r,bCaseInsensitive:null===p?!0:p}),1)
})
});
bh("columns().search()","column().search()",function(k,h,p,m){return this.iterator("column",function(u,s){var r=u.aoPreSearchCols;
if(k===bn){return r[s].sSearch
}u.oFeatures.bFilter&&(bo.extend(r[s],{sSearch:k+"",bRegex:null===h?!1:h,bSmart:null===p?!0:p,bCaseInsensitive:null===m?!0:m}),aL(u,u.oPreviousSearch,1))
})
});
bl("state()",function(){return this.context.length?this.context[0].oSavedState:null
});
bl("state.clear()",function(){return this.iterator("table",function(h){h.fnStateSaveCallback.call(h.oInstance,h,{})
})
});
bl("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null
});
bl("state.save()",function(){return this.iterator("table",function(h){t(h)
})
});
bm.versionCheck=bm.fnVersionCheck=function(k){for(var h=bm.version.split("."),k=k.split("."),s,r,p=0,m=k.length;
p<m;
p++){if(s=parseInt(h[p],10)||0,r=parseInt(k[p],10)||0,s!==r){return s>r
}}return !0
};
bm.isDataTable=bm.fnIsDataTable=function(k){var h=bo(k).get(0),m=!1;
bo.each(bm.settings,function(p,u){var s=u.nScrollHead?bo("table",u.nScrollHead)[0]:null,r=u.nScrollFoot?bo("table",u.nScrollFoot)[0]:null;
if(u.nTable===h||s===h||r===h){m=!0
}});
return m
};
bm.tables=bm.fnTables=function(k){var h=!1;
bo.isPlainObject(k)&&(h=k.api,k=k.visible);
var m=bo.map(bm.settings,function(p){if(!k||k&&bo(p.nTable).is(":visible")){return p.nTable
}});
return h?new bi(m):m
};
bm.camelToHungarian=bL;
bl("$()",function(k,h){var m=this.rows(h).nodes(),m=bo(m);
return bo([].concat(m.filter(k).toArray(),m.find(k).toArray()))
});
bo.each(["on","one","off"],function(k,h){bl(h+"()",function(){var m=Array.prototype.slice.call(arguments);
m[0].match(/\.dt\b/)||(m[0]+=".dt");
var p=bo(this.tables().nodes());
p[h].apply(p,m);
return this
})
});
bl("clear()",function(){return this.iterator("table",function(h){b3(h)
})
});
bl("settings()",function(){return new bi(this.context,this.context)
});
bl("init()",function(){var h=this.context;
return h.length?h[0].oInit:null
});
bl("data()",function(){return this.iterator("table",function(h){return bR(h.aoData,"_aData")
}).flatten()
});
bl("destroy()",function(h){h=h||!1;
return this.iterator("table",function(B){var A=B.nTableWrapper.parentNode,z=B.oClasses,y=B.nTable,x=B.nTBody,w=B.nTHead,u=B.nTFoot,v=bo(y),x=bo(x),s=bo(B.nTableWrapper),r=bo.map(B.aoData,function(k){return k.nTr
}),m;
B.bDestroying=!0;
bg(B,"aoDestroyCallback","destroy",[B]);
h||(new bi(B)).columns().visible(!0);
s.unbind(".DT").find(":not(tbody *)").unbind(".DT");
bo(bU).unbind(".DT-"+B.sInstance);
y!=w.parentNode&&(v.children("thead").detach(),v.append(w));
u&&y!=u.parentNode&&(v.children("tfoot").detach(),v.append(u));
B.aaSorting=[];
B.aaSortingFixed=[];
ag(B);
bo(r).removeClass(B.asStripeClasses.join(" "));
bo("th, td",w).removeClass(z.sSortable+" "+z.sSortableAsc+" "+z.sSortableDesc+" "+z.sSortableNone);
B.bJUI&&(bo("th span."+z.sSortIcon+", td span."+z.sSortIcon,w).detach(),bo("th, td",w).each(function(){var k=bo("div."+z.sSortJUIWrapper,this);
bo(this).append(k.contents());
k.detach()
}));
x.children().detach();
x.append(r);
w=h?"remove":"detach";
v[w]();
s[w]();
!h&&A&&(A.insertBefore(y,B.nTableReinsertBefore),v.css("width",B.sDestroyWidth).removeClass(z.sTable),(m=B.asDestroyStripes.length)&&x.children().each(function(k){bo(this).addClass(B.asDestroyStripes[k%m])
}));
A=bo.inArray(B,bm.settings);
-1!==A&&bm.settings.splice(A,1)
})
});
bo.each(["column","row","cell"],function(k,h){bl(h+"s().every()",function(m){var r=this.selector.opts,p=this;
return this.iterator(h,function(w,v,u,s,x){m.call(p[h](v,"cell"===h?u:r,"cell"===h?r:bn),v,u,s,x)
})
})
});
bl("i18n()",function(k,h,p){var m=this.context[0],k=bG(k)(m.oLanguage);
k===bn&&(k=h);
p!==bn&&bo.isPlainObject(k)&&(k=k[p]!==bn?k[p]:k._);
return k.replace("%d",p)
});
bm.version="1.10.12";
bm.settings=[];
bm.models={};
bm.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};
bm.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};
bm.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};
bm.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(h){return h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)
},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(k){try{return JSON.parse((-1===k.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+k.sInstance+"_"+location.pathname))
}catch(h){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(k,h){try{(-1===k.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+k.sInstance+"_"+location.pathname,JSON.stringify(h))
}catch(m){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:bo.extend({},bm.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};
by(bm.defaults);
bm.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};
by(bm.defaults.column);
bm.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:bn,oAjaxData:bn,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==a9(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length
},fnRecordsDisplay:function(){return"ssp"==a9(this)?1*this._iRecordsDisplay:this.aiDisplay.length
},fnDisplayEnd:function(){var k=this._iDisplayLength,h=this._iDisplayStart,s=h+k,r=this.aiDisplay.length,p=this.oFeatures,m=p.bPaginate;
return p.bServerSide?!1===m||-1===k?h+r:Math.min(h+k,this._iRecordsDisplay):!m||s>r||-1===k?r:s
},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};
bm.ext=bf={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:bm.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:bm.version};
bo.extend(bf,{afnFiltering:bf.search,aTypes:bf.type.detect,ofnSearch:bf.type.search,oSort:bf.type.order,afnSortData:bf.order,aoFeatures:bf.feature,oApi:bf.internal,oStdClasses:bf.classes,oPagination:bf.pager});
bo.extend(bm.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});
var aq="",aq="",bP=aq+"ui-state-default",ak=aq+"css_right ui-icon ui-icon-",aZ=aq+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
bo.extend(bm.ext.oJUIClasses,bm.ext.classes,{sPageButton:"fg-button ui-button "+bP,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:bP+" sorting_asc",sSortDesc:bP+" sorting_desc",sSortable:bP+" sorting",sSortableAsc:bP+" sorting_asc_disabled",sSortableDesc:bP+" sorting_desc_disabled",sSortableNone:bP+" sorting_disabled",sSortJUIAsc:ak+"triangle-1-n",sSortJUIDesc:ak+"triangle-1-s",sSortJUI:ak+"carat-2-n-s",sSortJUIAscAllowed:ak+"carat-1-n",sSortJUIDescAllowed:ak+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+bP,sScrollFoot:"dataTables_scrollFoot "+bP,sHeaderTH:bP,sFooterTH:bP,sJUIHeader:aZ+" ui-corner-tl ui-corner-tr",sJUIFooter:aZ+" ui-corner-bl ui-corner-br"});
var aM=bm.ext.pager;
bo.extend(aM,{simple:function(){return["previous","next"]
},full:function(){return["first","previous","next","last"]
},numbers:function(k,h){return[cl(k,h)]
},simple_numbers:function(k,h){return["previous",cl(k,h),"next"]
},full_numbers:function(k,h){return["first","previous",cl(k,h),"next","last"]
},_numbers:cl,numbers_length:7});
bo.extend(!0,bm.ext.renderer,{pageButton:{_:function(H,G,E,D,C,B){var A=H.oClasses,y=H.oLanguage.oPaginate,z=H.oLanguage.oAria.paginate||{},x,w,v=0,s=function(k,L){var K,J,p,I,m=function(r){cj(H,r.data.action,true)
};
K=0;
for(J=L.length;
K<J;
K++){I=L[K];
if(bo.isArray(I)){p=bo("<"+(I.DT_el||"div")+"/>").appendTo(k);
s(p,I)
}else{x=null;
w="";
switch(I){case"ellipsis":k.append('<span class="ellipsis">&#x2026;</span>');
break;
case"first":x=y.sFirst;
w=I+(C>0?"":" "+A.sPageButtonDisabled);
break;
case"previous":x=y.sPrevious;
w=I+(C>0?"":" "+A.sPageButtonDisabled);
break;
case"next":x=y.sNext;
w=I+(C<B-1?"":" "+A.sPageButtonDisabled);
break;
case"last":x=y.sLast;
w=I+(C<B-1?"":" "+A.sPageButtonDisabled);
break;
default:x=I+1;
w=C===I?A.sPageButtonActive:""
}if(x!==null){p=bo("<a>",{"class":A.sPageButton+" "+w,"aria-controls":H.sTableId,"aria-label":z[I],"data-dt-idx":v,tabindex:H.iTabIndex,id:E===0&&typeof I==="string"?H.sTableId+"_"+I:null}).html(x).appendTo(k);
bk(p,{action:I},m);
v++
}}}},h;
try{h=bo(G).find(bN.activeElement).data("dt-idx")
}catch(u){}s(bo(G).empty(),D);
h&&bo(G).find("[data-dt-idx="+h+"]").focus()
}}});
bo.extend(bm.ext.type.detect,[function(k,h){var m=h.oLanguage.sDecimal;
return aH(k,m)?"num"+m:null
},function(k){if(k&&!(k instanceof Date)&&(!b7.test(k)||!bO.test(k))){return null
}var h=Date.parse(k);
return null!==h&&!isNaN(h)||bJ(k)?"date":null
},function(k,h){var m=h.oLanguage.sDecimal;
return aH(k,m,!0)?"num-fmt"+m:null
},function(k,h){var m=h.oLanguage.sDecimal;
return n(k,m)?"html-num"+m:null
},function(k,h){var m=h.oLanguage.sDecimal;
return n(k,m,!0)?"html-num-fmt"+m:null
},function(h){return bJ(h)||"string"===typeof h&&-1!==h.indexOf("<")?"html":null
}]);
bo.extend(bm.ext.type.search,{html:function(h){return bJ(h)?h:"string"===typeof h?h.replace(au," ").replace(aJ,""):""
},string:function(h){return bJ(h)?h:"string"===typeof h?h.replace(au," "):h
}});
var b6=function(k,h,p,m){if(0!==k&&(!k||"-"===k)){return -Infinity
}h&&(k=ad(k,h));
k.replace&&(p&&(k=k.replace(p,"")),m&&(k=k.replace(m,"")));
return 1*k
};
bo.extend(bf.type.order,{"date-pre":function(h){return Date.parse(h)||0
},"html-pre":function(h){return bJ(h)?"":h.replace?h.replace(/<.*?>/g,"").toLowerCase():h+""
},"string-pre":function(h){return bJ(h)?"":"string"===typeof h?h.toLowerCase():!h.toString?"":h.toString()
},"string-asc":function(k,h){return k<h?-1:k>h?1:0
},"string-desc":function(k,h){return k<h?1:k>h?-1:0
}});
a2("");
bo.extend(!0,bm.ext.renderer,{header:{_:function(k,h,p,m){bo(k.nTable).on("order.dt.DT",function(v,u,s,r){if(k===u){v=p.idx;
h.removeClass(p.sSortingClass+" "+m.sSortAsc+" "+m.sSortDesc).addClass(r[v]=="asc"?m.sSortAsc:r[v]=="desc"?m.sSortDesc:p.sSortingClass)
}})
},jqueryui:function(k,h,p,m){bo("<div/>").addClass(m.sSortJUIWrapper).append(h.contents()).append(bo("<span/>").addClass(m.sSortIcon+" "+p.sSortingClassJUI)).appendTo(h);
bo(k.nTable).on("order.dt.DT",function(v,u,s,r){if(k===u){v=p.idx;
h.removeClass(m.sSortAsc+" "+m.sSortDesc).addClass(r[v]=="asc"?m.sSortAsc:r[v]=="desc"?m.sSortDesc:p.sSortingClass);
h.find("span."+m.sSortIcon).removeClass(m.sSortJUIAsc+" "+m.sSortJUIDesc+" "+m.sSortJUI+" "+m.sSortJUIAscAllowed+" "+m.sSortJUIDescAllowed).addClass(r[v]=="asc"?m.sSortJUIAsc:r[v]=="desc"?m.sSortJUIDesc:p.sSortingClassJUI)
}})
}}});
var aQ=function(h){return"string"===typeof h?h.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):h
};
bm.render={number:function(k,h,r,p,m){return{display:function(v){if("number"!==typeof v&&"string"!==typeof v){return v
}var u=0>v?"-":"",s=parseFloat(v);
if(isNaN(s)){return aQ(v)
}v=Math.abs(s);
s=parseInt(v,10);
v=r?h+(v-s).toFixed(r).substring(2):"";
return u+(p||"")+s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,k)+v+(m||"")
}}
},text:function(){return{display:aQ}
}};
bo.extend(bm.ext.internal,{_fnExternApiFunc:aC,_fnBuildAjax:aP,_fnAjaxUpdate:a,_fnAjaxParameters:an,_fnAjaxUpdateDraw:af,_fnAjaxDataSrc:aF,_fnAddColumn:F,_fnColumnOptions:S,_fnAdjustColumnSizing:bx,_fnVisibleToColumnIndex:bw,_fnColumnIndexToVisible:cd,_fnVisbleColumns:b9,_fnGetColumns:b,_fnColumnTypes:cn,_fnApplyColumnDefs:aj,_fnHungarianMap:by,_fnCamelToHungarian:bL,_fnLanguageCompat:ai,_fnBrowserDetect:aA,_fnAddData:bI,_fnAddTr:ch,_fnNodeToDataIndex:function(k,h){return h._DT_RowIndex!==bn?h._DT_RowIndex:null
},_fnNodeToColumnIndex:function(k,h,m){return bo.inArray(m,k.aoData[h].anCells)
},_fnGetCellData:bW,_fnSetCellData:P,_fnSplitObjNotation:bt,_fnGetObjectDataFn:bG,_fnSetObjectDataFn:bE,_fnGetDataMaster:a5,_fnClearTable:b3,_fnDeleteIndex:bv,_fnInvalidate:br,_fnGetRowElements:b1,_fnCreateTr:cf,_fnBuildHead:j,_fnDrawHead:aU,_fnDraw:bH,_fnReDraw:bC,_fnAddOptionsHtml:b2,_fnDetectHeader:a3,_fnGetUniqueThs:aY,_fnFeatureHtmlFilter:a6,_fnFilterComplete:aL,_fnFilterCustom:ck,_fnFilterColumn:e,_fnFilter:q,_fnFilterCreateSearch:am,_fnEscapeRegex:ae,_fnFilterData:b5,_fnFeatureHtmlInfo:aE,_fnUpdateInfo:ap,_fnInfoMacros:ah,_fnInitialise:aB,_fnInitComplete:ax,_fnLengthChange:o,_fnFeatureHtmlLength:bu,_fnFeatureHtmlPaginate:aw,_fnPageChange:cj,_fnFeatureHtmlProcessing:aX,_fnProcessingDisplay:bV,_fnFeatureHtmlTable:aO,_fnScrollDraw:l,_fnApplyToChildren:bM,_fnCalculateColumnWidths:i,_fnThrottle:av,_fnConvertToWidth:g,_fnGetWidestNode:cm,_fnGetMaxLenString:ce,_fnStringToCss:bd,_fnSortFlatten:bA,_fnSort:cg,_fnSortAria:bs,_fnSortListener:bF,_fnSortAttachListener:aN,_fnSortingClasses:ag,_fnSortData:b0,_fnSaveState:t,_fnLoadState:a4,_fnSettingsFromNode:f,_fnLog:bK,_fnMap:bT,_fnBindAction:bk,_fnCallbackReg:a7,_fnCallbackFire:bg,_fnLengthOverflow:d,_fnRenderer:aD,_fnDataSource:a9,_fnRowAttributes:aW,_fnCalculateEnd:function(){}});
bo.fn.dataTable=bm;
bm.$=bo;
bo.fn.dataTableSettings=bm.settings;
bo.fn.dataTableExt=bm.ext;
bo.fn.DataTable=function(h){return bo(this).dataTable(h).api()
};
bo.each(bm,function(k,h){bo.fn.DataTable[k]=h
});
return bo.fn.dataTable
});
/*!
 Buttons for DataTables 1.3.1
 ÂŠ2016 SpryMedia Ltd - datatables.net/license
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(k,c,b,f){var h=k.fn.dataTable,r=0,p=0,g=h.ext.buttons,e=function(i,d){"undefined"===typeof d&&(d={});
!0===d&&(d={});
k.isArray(d)&&(d={buttons:d});
this.c=k.extend(!0,{},e.defaults,d);
d.buttons&&(this.c.buttons=d.buttons);
this.s={dt:new h.Api(i),buttons:[],listenKeys:"",namespace:"dtb"+r++};
this.dom={container:k("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)};
this._constructor()
};
k.extend(e.prototype,{action:function(i,d){var j=this._nodeToButton(i);
if(d===f){return j.conf.action
}j.conf.action=d;
return this
},active:function(i,d){var l=this._nodeToButton(i),j=this.c.dom.button.active,l=k(l.node);
if(d===f){return l.hasClass(j)
}l.toggleClass(j,d===f?!0:d);
return this
},add:function(j,i){var o=this.s.buttons;
if("string"===typeof i){for(var m=i.split("-"),o=this.s,n=0,l=m.length-1;
n<l;
n++){o=o.buttons[1*m[n]]
}o=o.buttons;
i=1*m[m.length-1]
}this._expandButton(o,j,!1,i);
this._draw();
return this
},container:function(){return this.dom.container
},disable:function(d){d=this._nodeToButton(d);
k(d.node).addClass(this.c.dom.button.disabled);
return this
},destroy:function(){k("body").off("keyup."+this.s.namespace);
var i=this.s.buttons.slice(),d,j;
d=0;
for(j=i.length;
d<j;
d++){this.remove(i[d].node)
}this.dom.container.remove();
i=this.s.dt.settings()[0];
d=0;
for(j=i.length;
d<j;
d++){if(i.inst===this){i.splice(d,1);
break
}}return this
},enable:function(i,d){if(!1===d){return this.disable(i)
}var j=this._nodeToButton(i);
k(j.node).removeClass(this.c.dom.button.disabled);
return this
},name:function(){return this.c.name
},node:function(d){d=this._nodeToButton(d);
return k(d.node)
},processing:function(i,d){var j=this._nodeToButton(i);
if(d===f){return k(j.node).hasClass("processing")
}k(j.node).toggleClass("processing",d);
return this
},remove:function(i){var d=this._nodeToButton(i),m=this._nodeToHost(i),l=this.s.dt;
if(d.buttons.length){for(var j=d.buttons.length-1;
0<=j;
j--){this.remove(d.buttons[j].node)
}}d.conf.destroy&&d.conf.destroy.call(l.button(i),l,k(i),d.conf);
this._removeKey(d.conf);
k(d.node).remove();
i=k.inArray(d,m);
m.splice(i,1);
return this
},text:function(i,d){var o=this._nodeToButton(i),n=this.c.dom.collection.buttonLiner,n=o.inCollection&&n&&n.tag?n.tag:this.c.dom.buttonLiner.tag,l=this.s.dt,j=k(o.node),m=function(q){return"function"===typeof q?q(l,j,o.conf):q
};
if(d===f){return m(o.conf.text)
}o.conf.text=d;
n?j.children(n).html(m(d)):j.html(m(d));
return this
},_constructor:function(){var i=this,d=this.s.dt,m=d.settings()[0],l=this.c.buttons;
m._buttons||(m._buttons=[]);
m._buttons.push({inst:this,name:this.c.name});
for(var m=0,j=l.length;
m<j;
m++){this.add(l[m])
}d.on("destroy",function(){i.destroy()
});
k("body").on("keyup."+this.s.namespace,function(n){if(!b.activeElement||b.activeElement===b.body){var o=String.fromCharCode(n.keyCode).toLowerCase();
i.s.listenKeys.toLowerCase().indexOf(o)!==-1&&i._keypress(o,n)
}})
},_addKey:function(d){d.key&&(this.s.listenKeys+=k.isPlainObject(d.key)?d.key.key:d.key)
},_draw:function(i,d){i||(i=this.dom.container,d=this.s.buttons);
i.children().detach();
for(var l=0,j=d.length;
l<j;
l++){i.append(d[l].inserter),d[l].buttons&&d[l].buttons.length&&this._draw(d[l].collection,d[l].buttons)
}},_expandButton:function(u,t,q,o){for(var m=this.s.dt,l=0,t=!k.isArray(t)?[t]:t,n=0,d=t.length;
n<d;
n++){var j=this._resolveExtends(t[n]);
if(j){if(k.isArray(j)){this._expandButton(u,j,q,o)
}else{var i=this._buildButton(j,q);
if(i){o!==f?(u.splice(o,0,i),o++):u.push(i);
if(i.conf.buttons){var v=this.c.dom.collection;
i.collection=k("<"+v.tag+"/>").addClass(v.className).attr("role","menu");
i.conf._collection=i.collection;
this._expandButton(i.buttons,i.conf.buttons,!0,o)
}j.init&&j.init.call(m.button(i.node),m,k(i.node),j);
l++
}}}}},_buildButton:function(t,q){var o=this.c.dom.button,n=this.c.dom.buttonLiner,l=this.c.dom.collection,j=this.s.dt,m=function(u){return"function"===typeof u?u(j,i,t):u
};
q&&l.button&&(o=l.button);
q&&l.buttonLiner&&(n=l.buttonLiner);
if(t.available&&!t.available(j,t)){return !1
}var d=function(v,u,x,w){w.action.call(u.button(x),v,u,x,w);
k(u.table().node()).triggerHandler("buttons-action.dt",[u.button(x),u,x,w])
},i=k("<"+o.tag+"/>").addClass(o.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(u){u.preventDefault();
!i.hasClass(o.disabled)&&t.action&&d(u,j,i,t);
i.blur()
}).on("keyup.dtb",function(u){u.keyCode===13&&!i.hasClass(o.disabled)&&t.action&&d(u,j,i,t)
});
"a"===o.tag.toLowerCase()&&i.attr("href","#");
n.tag?(l=k("<"+n.tag+"/>").html(m(t.text)).addClass(n.className),"a"===n.tag.toLowerCase()&&l.attr("href","#"),i.append(l)):i.html(m(t.text));
!1===t.enabled&&i.addClass(o.disabled);
t.className&&i.addClass(t.className);
t.titleAttr&&i.attr("title",m(t.titleAttr));
t.namespace||(t.namespace=".dt-button-"+p++);
n=(n=this.c.dom.buttonContainer)&&n.tag?k("<"+n.tag+"/>").addClass(n.className).append(i):i;
this._addKey(t);
return{conf:t,node:i.get(0),inserter:n,buttons:[],inCollection:q,collection:null}
},_nodeToButton:function(j,i){i||(i=this.s.buttons);
for(var n=0,l=i.length;
n<l;
n++){if(i[n].node===j){return i[n]
}if(i[n].buttons.length){var m=this._nodeToButton(j,i[n].buttons);
if(m){return m
}}}},_nodeToHost:function(j,i){i||(i=this.s.buttons);
for(var n=0,l=i.length;
n<l;
n++){if(i[n].node===j){return i
}if(i[n].buttons.length){var m=this._nodeToHost(j,i[n].buttons);
if(m){return m
}}}},_keypress:function(i,d){var j=function(q){for(var n=0,l=q.length;
n<l;
n++){var o=q[n].conf,m=q[n].node;
if(o.key){if(o.key===i){k(m).click()
}else{if(k.isPlainObject(o.key)&&o.key.key===i&&(!o.key.shiftKey||d.shiftKey)){if(!o.key.altKey||d.altKey){if(!o.key.ctrlKey||d.ctrlKey){(!o.key.metaKey||d.metaKey)&&k(m).click()
}}}}}q[n].buttons.length&&j(q[n].buttons)
}};
j(this.s.buttons)
},_removeKey:function(i){if(i.key){var d=k.isPlainObject(i.key)?i.key.key:i.key,i=this.s.listenKeys.split(""),d=k.inArray(d,i);
i.splice(d,1);
this.s.listenKeys=i.join("")
}},_resolveExtends:function(i){for(var d=this.s.dt,o,n,l=function(t){for(var q=0;
!k.isPlainObject(t)&&!k.isArray(t);
){if(t===f){return
}if("function"===typeof t){if(t=t(d,i),!t){return !1
}}else{if("string"===typeof t){if(!g[t]){throw"Unknown button type: "+t
}t=g[t]
}}q++;
if(30<q){throw"Buttons: Too many iterations"
}}return k.isArray(t)?t:k.extend({},t)
},i=l(i);
i&&i.extend;
){if(!g[i.extend]){throw"Cannot extend unknown button type: "+i.extend
}var j=l(g[i.extend]);
if(k.isArray(j)){return j
}if(!j){return !1
}o=j.className;
i=k.extend({},j,i);
o&&i.className!==o&&(i.className=o+" "+i.className);
var m=i.postfixButtons;
if(m){i.buttons||(i.buttons=[]);
o=0;
for(n=m.length;
o<n;
o++){i.buttons.push(m[o])
}i.postfixButtons=null
}if(m=i.prefixButtons){i.buttons||(i.buttons=[]);
o=0;
for(n=m.length;
o<n;
o++){i.buttons.splice(o,0,m[o])
}i.prefixButtons=null
}i.extend=j.extend
}return i
}});
e.background=function(i,d,j){j===f&&(j=400);
i?k("<div/>").addClass(d).css("display","none").appendTo("body").fadeIn(j):k("body > div."+d).fadeOut(j,function(){k(this).removeClass(d).remove()
})
};
e.instanceSelector=function(i,d){if(!i){return k.map(d,function(n){return n.inst
})
}var m=[],l=k.map(d,function(n){return n.name
}),j=function(n){if(k.isArray(n)){for(var q=0,o=n.length;
q<o;
q++){j(n[q])
}}else{"string"===typeof n?-1!==n.indexOf(",")?j(n.split(",")):(n=k.inArray(k.trim(n),l),-1!==n&&m.push(d[n].inst)):"number"===typeof n&&m.push(d[n].inst)
}};
j(i);
return m
};
e.buttonSelector=function(i,d){for(var o=[],n=function(t,q,y){for(var x,v,w=0,u=q.length;
w<u;
w++){if(x=q[w]){v=y!==f?y+w:w+"",t.push({node:x.node,name:x.conf.name,idx:v}),x.buttons&&n(t,x.buttons,v+"-")
}}},l=function(t,q){var x,w,v=[];
n(v,q.s.buttons);
x=k.map(v,function(y){return y.node
});
if(k.isArray(t)||t instanceof k){x=0;
for(w=t.length;
x<w;
x++){l(t[x],q)
}}else{if(null===t||t===f||"*"===t){x=0;
for(w=v.length;
x<w;
x++){o.push({inst:q,node:v[x].node})
}}else{if("number"===typeof t){o.push({inst:q,node:q.s.buttons[t].node})
}else{if("string"===typeof t){if(-1!==t.indexOf(",")){v=t.split(",");
x=0;
for(w=v.length;
x<w;
x++){l(k.trim(v[x]),q)
}}else{if(t.match(/^\d+(\-\d+)*$/)){x=k.map(v,function(y){return y.idx
}),o.push({inst:q,node:v[k.inArray(t,x)].node})
}else{if(-1!==t.indexOf(":name")){var u=t.replace(":name","");
x=0;
for(w=v.length;
x<w;
x++){v[x].name===u&&o.push({inst:q,node:v[x].node})
}}else{k(x).filter(t).each(function(){o.push({inst:q,node:this})
})
}}}}else{"object"===typeof t&&t.nodeName&&(v=k.inArray(t,x),-1!==v&&o.push({inst:q,node:x[v]}))
}}}}},j=0,m=i.length;
j<m;
j++){l(d,i[j])
}return o
};
e.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:"dt-button-collection"},button:{tag:"a",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"span",className:""}}};
e.version="1.3.1";
k.extend(g,{collection:{text:function(d){return d.i18n("buttons.collection","Collection")
},className:"buttons-collection",action:function(i,d,o,n){var i=o.offset(),l=k(d.table().container()),j=!1;
k("div.dt-button-background").length&&(j=k(".dt-button-collection").offset(),k("body").trigger("click.dtb-collection"));
n._collection.addClass(n.collectionLayout).css("display","none").appendTo("body").fadeIn(n.fade);
var m=n._collection.css("position");
j&&"absolute"===m?n._collection.css({top:j.top,left:j.left}):"absolute"===m?(n._collection.css({top:i.top+o.outerHeight(),left:i.left}),o=i.left+n._collection.outerWidth(),l=l.offset().left+l.width(),o>l&&n._collection.css("left",i.left-(o-l))):(i=n._collection.height()/2,i>k(c).height()/2&&(i=k(c).height()/2),n._collection.css("marginTop",-1*i));
n.background&&e.background(!0,n.backgroundClassName,n.fade);
setTimeout(function(){k("div.dt-button-background").on("click.dtb-collection",function(){});
k("body").on("click.dtb-collection",function(q){var t=k.fn.addBack?"addBack":"andSelf";
if(!k(q.target).parents()[t]().filter(n._collection).length){n._collection.fadeOut(n.fade,function(){n._collection.detach()
});
k("div.dt-button-background").off("click.dtb-collection");
e.background(false,n.backgroundClassName,n.fade);
k("body").off("click.dtb-collection");
d.off("buttons-action.b-internal")
}})
},10);
if(n.autoClose){d.on("buttons-action.b-internal",function(){k("div.dt-button-background").click()
})
}},background:!0,collectionLayout:"",backgroundClassName:"dt-button-background",autoClose:!1,fade:400},copy:function(i,d){if(g.copyHtml5){return"copyHtml5"
}if(g.copyFlash&&g.copyFlash.available(i,d)){return"copyFlash"
}},csv:function(i,d){if(g.csvHtml5&&g.csvHtml5.available(i,d)){return"csvHtml5"
}if(g.csvFlash&&g.csvFlash.available(i,d)){return"csvFlash"
}},excel:function(i,d){if(g.excelHtml5&&g.excelHtml5.available(i,d)){return"excelHtml5"
}if(g.excelFlash&&g.excelFlash.available(i,d)){return"excelFlash"
}},pdf:function(i,d){if(g.pdfHtml5&&g.pdfHtml5.available(i,d)){return"pdfHtml5"
}if(g.pdfFlash&&g.pdfFlash.available(i,d)){return"pdfFlash"
}},pageLength:function(i){var i=i.settings()[0].aLengthMenu,d=k.isArray(i[0])?i[0]:i,l=k.isArray(i[0])?i[1]:i,j=function(m){return m.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},m.page.len())
};
return{extend:"collection",text:j,className:"buttons-page-length",autoClose:!0,buttons:k.map(d,function(n,m){return{text:l[m],className:"button-page-length",action:function(o,q){q.page.len(n).draw()
},init:function(o,u,t){var q=this,u=function(){q.active(o.page.len()===n)
};
o.on("length.dt"+t.namespace,u);
u()
},destroy:function(q,o,t){q.off("length.dt"+t.namespace)
}}
}),init:function(n,m,q){var o=this;
n.on("length.dt"+q.namespace,function(){o.text(j(n))
})
},destroy:function(n,m,o){n.off("length.dt"+o.namespace)
}}
}});
h.Api.register("buttons()",function(i,d){d===f&&(d=i,i=f);
this.selector.buttonGroup=i;
var j=this.iterator(!0,"table",function(l){if(l._buttons){return e.buttonSelector(e.instanceSelector(i,l._buttons),d)
}},!0);
j._groupSelector=i;
return j
});
h.Api.register("button()",function(i,d){var j=this.buttons(i,d);
1<j.length&&j.splice(1,j.length);
return j
});
h.Api.registerPlural("buttons().active()","button().active()",function(d){return d===f?this.map(function(i){return i.inst.active(i.node)
}):this.each(function(i){i.inst.active(i.node,d)
})
});
h.Api.registerPlural("buttons().action()","button().action()",function(d){return d===f?this.map(function(i){return i.inst.action(i.node)
}):this.each(function(i){i.inst.action(i.node,d)
})
});
h.Api.register(["buttons().enable()","button().enable()"],function(d){return this.each(function(i){i.inst.enable(i.node,d)
})
});
h.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(d){d.inst.disable(d.node)
})
});
h.Api.registerPlural("buttons().nodes()","button().node()",function(){var d=k();
k(this.each(function(i){d=d.add(i.inst.node(i.node))
}));
return d
});
h.Api.registerPlural("buttons().processing()","button().processing()",function(d){return d===f?this.map(function(i){return i.inst.processing(i.node)
}):this.each(function(i){i.inst.processing(i.node,d)
})
});
h.Api.registerPlural("buttons().text()","button().text()",function(d){return d===f?this.map(function(i){return i.inst.text(i.node)
}):this.each(function(i){i.inst.text(i.node,d)
})
});
h.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(d){d.inst.node(d.node).trigger("click")
})
});
h.Api.registerPlural("buttons().containers()","buttons().container()",function(){var i=k(),d=this._groupSelector;
this.iterator(!0,"table",function(m){if(m._buttons){for(var m=e.instanceSelector(d,m._buttons),l=0,j=m.length;
l<j;
l++){i=i.add(m[l].container())
}}});
return i
});
h.Api.register("button().add()",function(i,d){var j=this.context;
j.length&&(j=e.instanceSelector(this._groupSelector,j[0]._buttons),j.length&&j[0].add(d,i));
return this.button(this._groupSelector,i)
});
h.Api.register("buttons().destroy()",function(){this.pluck("inst").unique().each(function(d){d.destroy()
});
return this
});
h.Api.registerPlural("buttons().remove()","buttons().remove()",function(){this.each(function(d){d.inst.remove(d.node)
});
return this
});
var a;
h.Api.register("buttons.info()",function(i,d,l){var j=this;
if(!1===i){return k("#datatables_buttons_info").fadeOut(function(){k(this).remove()
}),clearTimeout(a),a=null,this
}a&&clearTimeout(a);
k("#datatables_buttons_info").length&&k("#datatables_buttons_info").remove();
k('<div id="datatables_buttons_info" class="dt-button-info"/>').html(i?"<h2>"+i+"</h2>":"").append(k("<div/>")["string"===typeof d?"html":"append"](d)).css("display","none").appendTo("body").fadeIn();
l!==f&&0!==l&&(a=setTimeout(function(){j.buttons.info(!1)
},l));
return this
});
h.Api.register("buttons.exportData()",function(E){if(this.context.length){for(var D=new h.Api(this.context[0]),C=k.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(j){return B(j)
},footer:function(j){return B(j)
},body:function(j){return B(j)
}}},E),B=function(j){if("string"!==typeof j){return j
}j=j.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");
C.stripHtml&&(j=j.replace(/<[^>]*>/g,""));
C.trim&&(j=j.replace(/^\s+|\s+$/g,""));
C.stripNewlines&&(j=j.replace(/\n/g," "));
C.decodeEntities&&(s.innerHTML=j,j=s.value);
return j
},E=D.columns(C.columns).indexes().map(function(j){var l=D.column(j).header();
return C.format.header(l.innerHTML,j,l)
}).toArray(),z=D.table().footer()?D.columns(C.columns).indexes().map(function(j){var l=D.column(j).footer();
return C.format.footer(l?l.innerHTML:"",j,l)
}).toArray():null,y=D.rows(C.rows,C.modifier).indexes().toArray(),A=D.cells(y,C.columns),y=A.render(C.orthogonal).toArray(),A=A.nodes().toArray(),x=E.length,w=0<x?y.length/x:0,u=Array(w),v=0,t=0;
t<w;
t++){for(var i=Array(x),d=0;
d<x;
d++){i[d]=C.format.body(y[v],t,d,A[v]),v++
}u[t]=i
}return{header:E,footer:z,body:u}
}});
var s=k("<textarea/>")[0];
k.fn.dataTable.Buttons=e;
k.fn.DataTable.Buttons=e;
k(b).on("init.dt plugin-init.dt",function(i,d){if("dt"===i.namespace){var j=d.oInit.buttons||h.defaults.buttons;
j&&!d._buttons&&(new e(d,j)).container()
}});
h.ext.feature.push({fnInit:function(i){var i=new h.Api(i),d=i.init().buttons||h.defaults.buttons;
return(new e(i,d)).container()
},cFeature:"B"});
return e
});
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(e,b,d,c){e||(e=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(e,b).$
}b.fn.dataTable.Buttons||require("datatables.net-buttons")(e,b);
return a(b,e,e.document,d,c)
}:a(jQuery,window,document)
})(function(ai,aj,af,Y,W,ad){function f(g,i){T===ad&&(T=-1===m.serializeToString(ai.parseXML(ab["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"));
ai.each(i,function(q,k){if(ai.isPlainObject(k)){var p=g.folder(q);
f(p,k)
}else{if(T){var p=k.childNodes[0],n,o,l=[];
for(n=p.attributes.length-1;
0<=n;
n--){o=p.attributes[n].nodeName;
var j=p.attributes[n].nodeValue;
-1!==o.indexOf(":")&&(l.push({name:o,value:j}),p.removeAttribute(o))
}n=0;
for(o=l.length;
n<o;
n++){j=k.createAttribute(l[n].name.replace(":","_dt_b_namespace_token_")),j.value=l[n].value,p.setAttributeNode(j)
}}p=m.serializeToString(k);
T&&(-1===p.indexOf("<?xml")&&(p='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+p),p=p.replace(/_dt_b_namespace_token_/g,":"));
p=p.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>");
g.file(q,p)
}})
}function ac(i,k,j){var g=i.createElement(k);
j&&(j.attr&&ai(g).attr(j.attr),j.children&&ai.each(j.children,function(l,n){g.appendChild(n)
}),j.text&&g.appendChild(i.createTextNode(j.text)));
return g
}function u(i,n){var l=i.header[n].length,g;
i.footer&&i.footer[n].length>l&&(l=i.footer[n].length);
for(var k=0,j=i.body.length;
k<j;
k++){if(g=i.body[k][n],g=null!==g&&g!==ad?g.toString():"",-1!==g.indexOf("\n")?(g=g.split("\n"),g.sort(function(p,o){return o.length-p.length
}),g=g[0].length):g=g.length,g>l&&(l=g),40<l){return 52
}}l*=1.3;
return 6<l?l:6
}var ae=ai.fn.dataTable,aa;
var ah="undefined"!==typeof self&&self||"undefined"!==typeof aj&&aj||this.content;
if("undefined"===typeof ah||"undefined"!==typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent)){aa=void 0
}else{var R=ah.document.createElementNS("http://www.w3.org/1999/xhtml","a"),h="download" in R,e=/constructor/i.test(ah.HTMLElement)||ah.safari,Z=/CriOS\/[\d]+/.test(navigator.userAgent),d=function(g){(ah.setImmediate||ah.setTimeout)(function(){throw g
},0)
},X=function(g){setTimeout(function(){"string"===typeof g?(ah.URL||ah.webkitURL||ah).revokeObjectURL(g):g.remove()
},40000)
},V=function(g){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(g.type)?new Blob([String.fromCharCode(65279),g],{type:g.type}):g
},U=function(i,o,n){n||(i=V(i));
var g=this,n="application/octet-stream"===i.type,l,j=function(){for(var p=["writestart","progress","write","writeend"],p=[].concat(p),s=p.length;
s--;
){var r=g["on"+p[s]];
if("function"===typeof r){try{r.call(g,g)
}catch(q){d(q)
}}}};
g.readyState=g.INIT;
if(h){l=(ah.URL||ah.webkitURL||ah).createObjectURL(i),setTimeout(function(){R.href=l;
R.download=o;
var p=new MouseEvent("click");
R.dispatchEvent(p);
j();
X(l);
g.readyState=g.DONE
})
}else{if((Z||n&&e)&&ah.FileReader){var k=new FileReader;
k.onloadend=function(){var p=Z?k.result:k.result.replace(/^data:[^;]*;/,"data:attachment/file;");
ah.open(p,"_blank")||(ah.location.href=p);
g.readyState=g.DONE;
j()
};
k.readAsDataURL(i);
g.readyState=g.INIT
}else{l||(l=(ah.URL||ah.webkitURL||ah).createObjectURL(i)),n?ah.location.href=l:ah.open(l,"_blank")||(ah.location.href=l),g.readyState=g.DONE,j(),X(l)
}}},ag=U.prototype;
"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob?aa=function(g,j,i){j=j||g.name||"download";
i||(g=V(g));
return navigator.msSaveOrOpenBlob(g,j)
}:(ag.abort=function(){},ag.readyState=ag.INIT=0,ag.WRITING=1,ag.DONE=2,ag.error=ag.onwritestart=ag.onprogress=ag.onwrite=ag.onabort=ag.onerror=ag.onwriteend=null,aa=function(g,j,i){return new U(g,j||g.name||"download",i)
})
}ae.fileSave=aa;
var O=function(g,j){var i="*"===g.filename&&"*"!==g.title&&g.title!==ad?g.title:g.filename;
"function"===typeof i&&(i=i());
-1!==i.indexOf("*")&&(i=ai.trim(i.replace("*",ai("title").text())));
i=i.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,"");
return j===ad||!0===j?i+g.extension:i
},c=function(g){var i="Sheet1";
g.sheetName&&(i=g.sheetName.replace(/[\[\]\*\/\\\?\:]/g,""));
return i
},b=function(g){g=g.title;
"function"===typeof g&&(g=g());
return -1!==g.indexOf("*")?g.replace("*",ai("title").text()||"Exported data"):g
},S=function(B,x){for(var w=x.newline?x.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n",A=B.buttons.exportData(x.exportOptions),v=x.fieldBoundary,q=x.fieldSeparator,t=RegExp(v,"g"),p=x.escapeChar!==ad?x.escapeChar:"\\",k=function(i){for(var g="",l=0,j=i.length;
l<j;
l++){0<l&&(g+=q),g+=v?v+(""+i[l]).replace(t,p+v)+v:i[l]
}return g
},o=x.header?k(A.header)+w:"",r=x.footer&&A.footer?w+k(A.footer):"",n=[],z=0,s=A.body.length;
z<s;
z++){n.push(k(A.body[z]))
}return{str:o+n.join(w)+r,rows:n.length}
},Q=function(){if(!(-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Opera"))){return !1
}var g=navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
return g&&1<g.length&&603.1>1*g[1]?!0:!1
};
try{var m=new XMLSerializer,T
}catch(a){}var ab={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill/><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},y=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(g){return g/100
}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(g){return g/100
}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(g){return -1*g.replace(/[\(\)]/g,"")
}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(g){return -1*g.replace(/[\(\)]/g,"")
}},{match:/^\-?[\d,]+$/,style:63},{match:/^\-?[\d,]+\.\d{2}$/,style:64}];
ae.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(g){return g.i18n("buttons.copy","Copy")
},action:function(t,r,q,s){this.processing(!0);
var p=this,t=S(r,s),l=t.str,q=ai("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0});
s.customize&&(l=s.customize(l,s));
s=ai("<textarea readonly/>").val(l).appendTo(q);
if(af.queryCommandSupported("copy")){q.appendTo(r.table().container());
s[0].focus();
s[0].select();
try{var o=af.execCommand("copy");
q.remove();
if(o){r.buttons.info(r.i18n("buttons.copyTitle","Copy to clipboard"),r.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},t.rows),2000);
this.processing(!1);
return
}}catch(k){}}o=ai("<span>"+r.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+"</span>").append(q);
r.buttons.info(r.i18n("buttons.copyTitle","Copy to clipboard"),o,0);
s[0].focus();
s[0].select();
var i=ai(o).closest(".dt-button-info"),n=function(){i.off("click.buttons-copy");
ai(af).off(".buttons-copy");
r.buttons.info(!1)
};
i.on("click.buttons-copy",n);
ai(af).on("keydown.buttons-copy",function(g){27===g.keyCode&&(n(),p.processing(!1))
}).on("copy.buttons-copy cut.buttons-copy",function(){n();
p.processing(!1)
})
},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1};
ae.ext.buttons.csvHtml5={bom:!1,className:"buttons-csv buttons-html5",available:function(){return aj.FileReader!==ad&&aj.Blob
},text:function(g){return g.i18n("buttons.csv","CSV")
},action:function(i,k,j,g){this.processing(!0);
i=S(k,g).str;
k=g.charset;
g.customize&&(i=g.customize(i,g));
!1!==k?(k||(k=af.characterSet||af.charset),k&&(k=";charset="+k)):k="";
g.bom&&(i=""+i);
aa(new Blob([i],{type:"text/csv"+k}),O(g),!0);
this.processing(!1)
},filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1};
ae.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return aj.FileReader!==ad&&(Y||aj.JSZip)!==ad&&!Q()&&m
},text:function(g){return g.i18n("buttons.excel","Excel")
},action:function(z,w,v,x){this.processing(!0);
var t=this,r=0,z=function(j){return ai.parseXML(ab[j])
},s=z("xl/worksheets/sheet1.xml"),q=s.getElementsByTagName("sheetData")[0],z={_rels:{".rels":z("_rels/.rels")},xl:{_rels:{"workbook.xml.rels":z("xl/_rels/workbook.xml.rels")},"workbook.xml":z("xl/workbook.xml"),"styles.xml":z("xl/styles.xml"),worksheets:{"sheet1.xml":s}},"[Content_Types].xml":z("[Content_Types].xml")},w=w.buttons.exportData(x.exportOptions),i,o,v=function(l){i=r+1;
o=ac(s,"row",{attr:{r:i}});
for(var j=0,F=l.length;
j<F;
j++){for(var D=j,C="";
0<=D;
){C=String.fromCharCode(D%26+65)+C,D=Math.floor(D/26)-1
}var D=C+""+i,B=null;
if(!(null===l[j]||l[j]===ad||""===l[j])){l[j]=ai.trim(l[j]);
for(var A=0,E=y.length;
A<E;
A++){if(C=y[A],l[j].match&&!l[j].match(/^0\d+/)&&l[j].match(C.match)){B=l[j].replace(/[^\d\.\-]/g,"");
C.fmt&&(B=C.fmt(B));
B=ac(s,"c",{attr:{r:D,s:C.style},children:[ac(s,"v",{text:B})]});
break
}}B||("number"===typeof l[j]||l[j].match&&l[j].match(/^-?\d+(\.\d+)?$/)&&!l[j].match(/^0\d+/)?B=ac(s,"c",{attr:{t:"n",r:D},children:[ac(s,"v",{text:l[j]})]}):(C=!l[j].replace?l[j]:l[j].replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""),B=ac(s,"c",{attr:{t:"inlineStr",r:D},children:{row:ac(s,"is",{children:{row:ac(s,"t",{text:C})}})}})));
o.appendChild(B)
}}q.appendChild(o);
r++
};
ai("sheets sheet",z.xl["workbook.xml"]).attr("name",c(x));
x.customizeData&&x.customizeData(w);
x.header&&(v(w.header,r),ai("row c",s).attr("s","2"));
for(var p=0,g=w.body.length;
p<g;
p++){v(w.body[p],r)
}x.footer&&w.footer&&(v(w.footer,r),ai("row:last c",s).attr("s","2"));
v=ac(s,"cols");
ai("worksheet",s).prepend(v);
p=0;
for(g=w.header.length;
p<g;
p++){v.appendChild(ac(s,"col",{attr:{min:p+1,max:p+1,width:u(w,p),customWidth:1}}))
}x.customize&&x.customize(z);
w=new (Y||aj.JSZip);
v={type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};
f(w,z);
w.generateAsync?w.generateAsync(v).then(function(j){aa(j,O(x));
t.processing(false)
}):(aa(w.generate(v),O(x)),this.processing(!1))
},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1};
ae.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return aj.FileReader!==ad&&(W||aj.pdfMake)
},text:function(g){return g.i18n("buttons.pdf","PDF")
},action:function(i,q,p,g){this.processing(!0);
var o=this,i=q.buttons.exportData(g.exportOptions),l=[];
g.header&&l.push(ai.map(i.header,function(j){return{text:"string"===typeof j?j:j+"",style:"tableHeader"}
}));
for(var n=0,k=i.body.length;
n<k;
n++){l.push(ai.map(i.body[n],function(j){return{text:"string"===typeof j?j:j+"",style:n%2?"tableBodyEven":"tableBodyOdd"}
}))
}g.footer&&i.footer&&l.push(ai.map(i.footer,function(j){return{text:"string"===typeof j?j:j+"",style:"tableFooter"}
}));
i={pageSize:g.pageSize,pageOrientation:g.orientation,content:[{table:{headerRows:1,body:l},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}};
g.message&&i.content.unshift({text:"function"==typeof g.message?g.message(q,p,g):g.message,style:"message",margin:[0,0,0,12]});
g.title&&i.content.unshift({text:b(g,!1),style:"title",margin:[0,0,0,12]});
g.customize&&g.customize(i,g);
q=(W||aj.pdfMake).createPdf(i);
"open"===g.download&&!Q()?(q.open(),this.processing(!1)):q.getBuffer(function(j){j=new Blob([j],{type:"application/pdf"});
aa(j,O(g));
o.processing(!1)
})
},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,message:null,customize:null,download:"download"};
return ae.Buttons
});
/*!
 Select for DataTables 1.2.2
 2015-2016 SpryMedia Ltd - datatables.net/license/mit
*/
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)
}):"object"===typeof exports?module.exports=function(c,b){c||(c=window);
if(!b||!b.fn.dataTable){b=require("datatables.net")(c,b).$
}return a(b,c,c.document)
}:a(jQuery,window,document)
})(function(J,F,E,H){function d(e,j,g){var i;
i=function(m,p){if(m>p){var o=p,p=m,m=o
}var n=!1;
return e.columns(":visible").indexes().filter(function(q){q===m&&(n=!0);
return q===p?(n=!1,!0):n
})
};
var h=function(m,q){var p=e.rows({search:"applied"}).indexes();
if(p.indexOf(m)>p.indexOf(q)){var n=q,q=m,m=n
}var o=!1;
return p.filter(function(r){r===m&&(o=!0);
return r===q?(o=!1,!0):o
})
};
!e.cells({selected:!0}).any()&&!g?(i=i(0,j.column),g=h(0,j.row)):(i=i(g.column,j.column),g=h(g.row,j.row));
g=e.cells(g,i).flatten();
e.cells(j,{selected:!0}).any()?e.cells(g).deselect():e.cells(g).select()
}function w(e){var g=e.settings()[0]._select.selector;
J(e.table().container()).off("mousedown.dtSelect",g).off("mouseup.dtSelect",g).off("click.dtSelect",g);
J("body").off("click.dtSelect"+e.table().node().id)
}function c(e){var i=J(e.table().container()),g=e.settings()[0],h=g._select.selector;
i.on("mousedown.dtSelect",h,function(j){if(j.shiftKey||j.metaKey||j.ctrlKey){i.css("-moz-user-select","none").one("selectstart.dtSelect",h,function(){return !1
})
}}).on("mouseup.dtSelect",h,function(){i.css("-moz-user-select","")
}).on("click.dtSelect",h,function(j){var p=e.select.items();
if(!F.getSelection||!J.trim(F.getSelection().toString())){var o=e.settings()[0];
if(J(j.target).closest("div.dataTables_wrapper")[0]==e.table().container()){var m=e.cell(J(j.target).closest("td, th"));
if(m.any()){var n=J.Event("user-select.dt");
G(e,n,[p,m,j]);
n.isDefaultPrevented()||(n=m.index(),"row"===p?(p=n.row,l(j,e,o,"row",p)):"column"===p?(p=m.index().column,l(j,e,o,"column",p)):"cell"===p&&(p=m.index(),l(j,e,o,"cell",p)),o._select_lastCell=n)
}}}});
J("body").on("click.dtSelect"+e.table().node().id,function(j){g._select.blurable&&!J(j.target).parents().filter(e.table().container()).length&&(j.target.getRootNode()===E&&!J(j.target).parents("div.DTE").length)&&B(g,!0)
})
}function G(e,i,g,h){if(!h||e.flatten().length){"string"===typeof i&&(i+=".dt"),g.unshift(e),J(e.table().node()).trigger(i,g)
}}function b(e){var m=e.settings()[0];
if(m._select.info&&m.aanFeatures.i){var h=e.rows({selected:!0}).flatten().length,j=e.columns({selected:!0}).flatten().length,i=e.cells({selected:!0}).flatten().length,g=function(n,p,o){n.append(J('<span class="select-item"/>').append(e.i18n("select."+p+"s",{_:"%d "+p+"s selected","0":"",1:"1 "+p+" selected"},o)))
};
J.each(m.aanFeatures.i,function(q,n){var n=J(n),p=J('<span class="select-info"/>');
g(p,"row",h);
g(p,"column",j);
g(p,"cell",i);
var o=n.children("span.select-info");
o.length&&o.remove();
""!==p.text()&&n.append(p)
})
}}function a(e,o,i,n){var m=e[o+"s"]({search:"applied"}).indexes(),n=J.inArray(n,m),h=J.inArray(i,m);
if(!e[o+"s"]({selected:!0}).any()&&-1===n){m.splice(J.inArray(i,m)+1,m.length)
}else{if(n>h){var j=h,h=n,n=j
}m.splice(h+1,m.length);
m.splice(0,n)
}e[o](i,{selected:!0}).any()?(m.splice(J.inArray(i,m),1),e[o+"s"](m).deselect()):e[o+"s"](m).select()
}function B(e,h){if(h||"single"===e._select.style){var g=new I.Api(e);
g.rows({selected:!0}).deselect();
g.columns({selected:!0}).deselect();
g.cells({selected:!0}).deselect()
}}function l(h,p,i,o,m){var n=p.select.style(),j=p[o](m,{selected:!0}).any();
"os"===n?h.ctrlKey||h.metaKey?p[o](m).select(!j):h.shiftKey?"cell"===o?d(p,m,i._select_lastCell||null):a(p,o,m,i._select_lastCell?i._select_lastCell[o]:null):(h=p[o+"s"]({selected:!0}),j&&1===h.flatten().length?p[o](m).deselect():(h.deselect(),p[o](m).select())):"multi+shift"==n?h.shiftKey?"cell"===o?d(p,m,i._select_lastCell||null):a(p,o,m,i._select_lastCell?i._select_lastCell[o]:null):p[o](m).select(!j):p[o](m).select(!j)
}function A(e,g){return function(h){return h.i18n("buttons."+e,g)
}
}function k(e){e=e._eventNamespace;
return"draw.dt.DT"+e+" select.dt.DT"+e+" deselect.dt.DT"+e
}var I=J.fn.dataTable;
I.select={};
I.select.version="1.2.2";
I.select.init=function(q){var p=q.settings()[0],r=p.oInit.select,o=I.defaults.select,r=r===H?o:r,o="row",n="api",e=!1,s=!0,g="td, th",h="selected",m=!1;
p._select={};
if(!0===r){n="os",m=!0
}else{if("string"===typeof r){n=r,m=!0
}else{if(J.isPlainObject(r)&&(r.blurable!==H&&(e=r.blurable),r.info!==H&&(s=r.info),r.items!==H&&(o=r.items),r.style!==H&&(n=r.style,m=!0),r.selector!==H&&(g=r.selector),r.className!==H)){h=r.className
}}}q.select.selector(g);
q.select.items(o);
q.select.style(n);
q.select.blurable(e);
q.select.info(s);
p._select.className=h;
J.fn.dataTable.ext.order["select-checkbox"]=function(i,j){return this.api().column(j,{order:"index"}).nodes().map(function(t){return"row"===i._select.items?J(t).parent().hasClass(i._select.className):"cell"===i._select.items?J(t).hasClass(i._select.className):!1
})
};
!m&&J(q.table().node()).hasClass("selectable")&&q.select.style("os")
};
J.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(e,g){I.ext.selector[g.type].push(function(j,h,p){var h=h.selected,q,o=[];
if(h===H){return p
}for(var m=0,n=p.length;
m<n;
m++){q=j[g.prop][p[m]],(!0===h&&!0===q._select_selected||!1===h&&!q._select_selected)&&o.push(p[m])
}return o
})
});
I.ext.selector.cell.push(function(h,p,i){var p=p.selected,o,m=[];
if(p===H){return i
}for(var n=0,j=i.length;
n<j;
n++){o=h.aoData[i[n].row],(!0===p&&o._selected_cells&&!0===o._selected_cells[i[n].column]||!1===p&&(!o._selected_cells||!o._selected_cells[i[n].column]))&&m.push(i[n])
}return m
});
var D=I.Api.register,C=I.Api.registerPlural;
D("select()",function(){return this.iterator("table",function(e){I.select.init(new I.Api(e))
})
});
D("select.blurable()",function(e){return e===H?this.context[0]._select.blurable:this.iterator("table",function(g){g._select.blurable=e
})
});
D("select.info()",function(e){return b===H?this.context[0]._select.info:this.iterator("table",function(g){g._select.info=e
})
});
D("select.items()",function(e){return e===H?this.context[0]._select.items:this.iterator("table",function(g){g._select.items=e;
G(new I.Api(g),"selectItems",[e])
})
});
D("select.style()",function(e){return e===H?this.context[0]._select.style:this.iterator("table",function(i){i._select.style=e;
if(!i._select_init){var g=new I.Api(i);
i.aoRowCreatedCallback.push({fn:function(m,j,n){j=i.aoData[n];
j._select_selected&&J(m).addClass(i._select.className);
m=0;
for(n=i.aoColumns.length;
m<n;
m++){(i.aoColumns[m]._select_selected||j._selected_cells&&j._selected_cells[m])&&J(j.anCells[m]).addClass(i._select.className)
}},sName:"select-deferRender"});
g.on("preXhr.dt.dtSelect",function(){var m=g.rows({selected:!0}).ids(!0).filter(function(n){return n!==H
}),j=g.cells({selected:!0}).eq(0).map(function(o){var n=g.row(o.row).id(!0);
return n?{row:n,column:o.column}:H
}).filter(function(n){return n!==H
});
g.one("draw.dt.dtSelect",function(){g.rows(m).select();
j.any()&&j.each(function(n){g.cells(n.row,n.column).select()
})
})
});
g.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",function(){b(g)
});
g.on("destroy.dtSelect",function(){w(g);
g.off(".dtSelect")
})
}var h=new I.Api(i);
w(h);
"api"!==e&&c(h);
G(new I.Api(i),"selectStyle",[e])
})
});
D("select.selector()",function(e){return e===H?this.context[0]._select.selector:this.iterator("table",function(g){w(new I.Api(g));
g._select.selector=e;
"api"!==g._select.style&&c(new I.Api(g))
})
});
C("rows().select()","row().select()",function(e){var g=this;
if(!1===e){return this.deselect()
}this.iterator("row",function(h,i){B(h);
h.aoData[i]._select_selected=!0;
J(h.aoData[i].nTr).addClass(h._select.className)
});
this.iterator("table",function(i,h){G(g,"select",["row",g[h]],!0)
});
return this
});
C("columns().select()","column().select()",function(e){var g=this;
if(!1===e){return this.deselect()
}this.iterator("column",function(i,j){B(i);
i.aoColumns[j]._select_selected=!0;
var h=(new I.Api(i)).column(j);
J(h.header()).addClass(i._select.className);
J(h.footer()).addClass(i._select.className);
h.nodes().to$().addClass(i._select.className)
});
this.iterator("table",function(i,h){G(g,"select",["column",g[h]],!0)
});
return this
});
C("cells().select()","cell().select()",function(e){var g=this;
if(!1===e){return this.deselect()
}this.iterator("cell",function(i,j,h){B(i);
j=i.aoData[j];
j._selected_cells===H&&(j._selected_cells=[]);
j._selected_cells[h]=!0;
j.anCells&&J(j.anCells[h]).addClass(i._select.className)
});
this.iterator("table",function(i,h){G(g,"select",["cell",g[h]],!0)
});
return this
});
C("rows().deselect()","row().deselect()",function(){var e=this;
this.iterator("row",function(h,g){h.aoData[g]._select_selected=!1;
J(h.aoData[g].nTr).removeClass(h._select.className)
});
this.iterator("table",function(h,g){G(e,"deselect",["row",e[g]],!0)
});
return this
});
C("columns().deselect()","column().deselect()",function(){var e=this;
this.iterator("column",function(j,h){j.aoColumns[h]._select_selected=!1;
var g=new I.Api(j),i=g.column(h);
J(i.header()).removeClass(j._select.className);
J(i.footer()).removeClass(j._select.className);
g.cells(null,h).indexes().each(function(n){var m=j.aoData[n.row],o=m._selected_cells;
m.anCells&&(!o||!o[n.column])&&J(m.anCells[n.column]).removeClass(j._select.className)
})
});
this.iterator("table",function(h,g){G(e,"deselect",["column",e[g]],!0)
});
return this
});
C("cells().deselect()","cell().deselect()",function(){var e=this;
this.iterator("cell",function(i,h,g){h=i.aoData[h];
h._selected_cells[g]=!1;
h.anCells&&!i.aoColumns[g]._select_selected&&J(h.anCells[g]).removeClass(i._select.className)
});
this.iterator("table",function(h,g){G(e,"deselect",["cell",e[g]],!0)
});
return this
});
var f=0;
J.extend(I.ext.buttons,{selected:{text:A("selected","Selected"),className:"buttons-selected",init:function(e,i,g){var h=this;
g._eventNamespace=".select"+f++;
e.on(k(g),function(){var j=h.rows({selected:!0}).any()||h.columns({selected:!0}).any()||h.cells({selected:!0}).any();
h.enable(j)
});
this.disable()
},destroy:function(e,h,g){e.off(g._eventNamespace)
}},selectedSingle:{text:A("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(e,i,g){var h=this;
g._eventNamespace=".select"+f++;
e.on(k(g),function(){var j=e.rows({selected:!0}).flatten().length+e.columns({selected:!0}).flatten().length+e.cells({selected:!0}).flatten().length;
h.enable(1===j)
});
this.disable()
},destroy:function(e,h,g){e.off(g._eventNamespace)
}},selectAll:{text:A("selectAll","Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+"s"]().select()
}},selectNone:{text:A("selectNone","Deselect all"),className:"buttons-select-none",action:function(){B(this.settings()[0],!0)
},init:function(e,i,g){var h=this;
g._eventNamespace=".select"+f++;
e.on(k(g),function(){var j=e.rows({selected:!0}).flatten().length+e.columns({selected:!0}).flatten().length+e.cells({selected:!0}).flatten().length;
h.enable(0<j)
});
this.disable()
},destroy:function(e,h,g){e.off(g._eventNamespace)
}}});
J.each(["Row","Column","Cell"],function(e,h){var g=h.toLowerCase();
I.ext.buttons["select"+h+"s"]={text:A("select"+h+"s","Select "+g+"s"),className:"buttons-select-"+g+"s",action:function(){this.select.items(g)
},init:function(i){var j=this;
i.on("selectItems.dt.DT",function(m,o,n){j.active(n===g)
})
}}
});
J(E).on("preInit.dt.dtSelect",function(e,g){"dt"===e.namespace&&I.select.init(new I.Api(g))
});
return I.select
});
(function(b,c){var a=0;
b.widget("ech.multiselect",{options:{header:true,height:175,minWidth:225,classes:"",checkAllText:"Check all",uncheckAllText:"Uncheck all",noneSelectedText:"Select options",selectedText:"# selected",selectedList:0,show:null,hide:null,autoOpen:false,multiple:true,position:{}},_create:function(){var g=this.element.hide(),i=this.options;
this.speed=b.fx.speeds._default;
this._isOpen=false;
var f=(this.button=b('<button type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></button>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(i.classes).attr({title:g.attr("title"),"aria-haspopup":true,tabIndex:g.attr("tabIndex")}).insertAfter(g),d=(this.buttonlabel=b("<span />")).html(i.noneSelectedText).appendTo(f),h=(this.menu=b("<div />")).addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(i.classes).appendTo(document.body),k=(this.header=b("<div />")).addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(h),e=(this.headerLinkContainer=b("<ul />")).addClass("ui-helper-reset").html(function(){if(i.header===true){return'<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>'+i.checkAllText+'</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>'+i.uncheckAllText+"</span></a></li>"
}else{if(typeof i.header==="string"){return"<li>"+i.header+"</li>"
}else{return""
}}}).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>').appendTo(k),j=(this.checkboxContainer=b("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(h);
this._bindEvents();
this.refresh(true);
if(!i.multiple){h.addClass("ui-multiselect-single")
}},_init:function(){if(this.options.header===false){this.header.hide()
}if(!this.options.multiple){this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide()
}if(this.options.autoOpen){this.open()
}if(this.element.is(":disabled")){this.disable()
}},refresh:function(i){var f=this.element,h=this.options,g=this.menu,k=this.checkboxContainer,d=[],e="",j=f.attr("id")||a++;
f.find("option").each(function(n){var o=b(this),t=this.parentNode,r=this.innerHTML,v=this.title,s=this.value,m="ui-multiselect-"+(this.id||j+"-option-"+n),w=this.disabled,l=this.selected,q=["ui-corner-all"],p=(w?"ui-multiselect-disabled ":" ")+this.className,u;
if(t.tagName==="OPTGROUP"){u=t.getAttribute("label");
if(b.inArray(u,d)===-1){e+='<li class="ui-multiselect-optgroup-label '+t.className+'"><a href="#">'+u+"</a></li>";
d.push(u)
}}if(w){q.push("ui-state-disabled")
}if(l&&!h.multiple){q.push("ui-state-active")
}e+='<li class="'+p+'">';
e+='<label for="'+m+'" title="'+v+'" class="'+q.join(" ")+'">';
e+='<input id="'+m+'" name="multiselect_'+j+'" type="'+(h.multiple?"checkbox":"radio")+'" value="'+s+'" title="'+r+'"';
if(l){e+=' checked="checked"';
e+=' aria-selected="true"'
}if(w){e+=' disabled="disabled"';
e+=' aria-disabled="true"'
}e+=" /><span>"+r+"</span></label></li>"
});
k.html(e);
this.labels=g.find("label");
this.inputs=this.labels.children("input");
this._setButtonWidth();
this._setMenuWidth();
this.button[0].defaultValue=this.update();
if(!i){this._trigger("refresh")
}},update:function(){var h=this.options,e=this.inputs,d=e.filter(":checked"),f=d.length,g;
if(f===0){g=h.noneSelectedText
}else{if(b.isFunction(h.selectedText)){g=h.selectedText.call(this,f,e.length,d.get())
}else{if(/\d/.test(h.selectedList)&&h.selectedList>0&&f<=h.selectedList){g=d.map(function(){return b(this).next().html()
}).get().join(", ")
}else{g=h.selectedText.replace("#",f).replace("#",e.length)
}}}this.buttonlabel.html(g);
return g
},_bindEvents:function(){var d=this,e=this.button;
function f(){d[d._isOpen?"close":"open"]();
return false
}e.find("span").bind("click.multiselect",f);
e.bind({click:f,keypress:function(g){switch(g.which){case 27:case 38:case 37:d.close();
break;
case 39:case 40:d.open();
break
}},mouseenter:function(){if(!e.hasClass("ui-state-disabled")){b(this).addClass("ui-state-hover")
}},mouseleave:function(){b(this).removeClass("ui-state-hover")
},focus:function(){if(!e.hasClass("ui-state-disabled")){b(this).addClass("ui-state-focus")
}},blur:function(){b(this).removeClass("ui-state-focus")
}});
this.header.delegate("a","click.multiselect",function(g){if(b(this).hasClass("ui-multiselect-close")){d.close()
}else{d[b(this).hasClass("ui-multiselect-all")?"checkAll":"uncheckAll"]()
}g.preventDefault()
});
this.menu.delegate("li.ui-multiselect-optgroup-label a","click.multiselect",function(k){k.preventDefault();
var j=b(this),i=j.parent().nextUntil("li.ui-multiselect-optgroup-label").find("input:visible:not(:disabled)"),g=i.get(),h=j.parent().text();
if(d._trigger("beforeoptgrouptoggle",k,{inputs:g,label:h})===false){return
}d._toggleChecked(i.filter(":checked").length!==i.length,i);
d._trigger("optgrouptoggle",k,{inputs:g,label:h,checked:g[0].checked})
}).delegate("label","mouseenter.multiselect",function(){if(!b(this).hasClass("ui-state-disabled")){d.labels.removeClass("ui-state-hover");
b(this).addClass("ui-state-hover").find("input").focus()
}}).delegate("label","keydown.multiselect",function(g){g.preventDefault();
switch(g.which){case 9:case 27:d.close();
break;
case 38:case 40:case 37:case 39:d._traverse(g.which,this);
break;
case 13:b(this).find("input")[0].click();
break
}}).delegate('input[type="checkbox"], input[type="radio"]',"click.multiselect",function(j){var i=b(this),k=this.value,h=this.checked,g=d.element.find("option");
if(this.disabled||d._trigger("click",j,{value:k,text:this.title,checked:h})===false){j.preventDefault();
return
}i.focus();
i.attr("aria-selected",h);
g.each(function(){if(this.value===k){this.selected=h
}else{if(!d.options.multiple){this.selected=false
}}});
if(!d.options.multiple){d.labels.removeClass("ui-state-active");
i.closest("label").toggleClass("ui-state-active",h);
d.close()
}d.element.trigger("change");
setTimeout(b.proxy(d.update,d),10)
});
b(document).bind("mousedown.multiselect",function(g){if(d._isOpen&&!b.contains(d.menu[0],g.target)&&!b.contains(d.button[0],g.target)&&g.target!==d.button[0]){d.close()
}});
b(this.element[0].form).bind("reset.multiselect",function(){setTimeout(b.proxy(d.refresh,d),10)
})
},_setButtonWidth:function(){var d=this.element.outerWidth(),e=this.options;
if(/\d/.test(e.minWidth)&&d<e.minWidth){d=e.minWidth
}this.button.width(d)
},_setMenuWidth:function(){var d=this.menu,e=this.button.outerWidth()-parseInt(d.css("padding-left"),10)-parseInt(d.css("padding-right"),10)-parseInt(d.css("border-right-width"),10)-parseInt(d.css("border-left-width"),10);
d.width(e||this.button.outerWidth())
},_traverse:function(h,i){var f=b(i),e=h===38||h===37,d=f.parent()[e?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[e?"last":"first"]();
if(!d.length){var g=this.menu.find("ul").last();
this.menu.find("label")[e?"last":"first"]().trigger("mouseover");
g.scrollTop(e?g.height():0)
}else{d.find("label").trigger("mouseover")
}},_toggleState:function(e,d){return function(){if(!this.disabled){this[e]=d
}if(d){this.setAttribute("aria-selected",true)
}else{this.removeAttribute("aria-selected")
}}
},_toggleChecked:function(d,h){var g=(h&&h.length)?h:this.inputs,f=this;
g.each(this._toggleState("checked",d));
g.eq(0).focus();
this.update();
var e=g.map(function(){return this.value
}).get();
this.element.find("option").each(function(){if(!this.disabled&&b.inArray(this.value,e)>-1){f._toggleState("selected",d).call(this)
}});
if(g.length){this.element.trigger("change")
}},_toggleDisabled:function(e){this.button.attr({disabled:e,"aria-disabled":e})[e?"addClass":"removeClass"]("ui-state-disabled");
var d=this.menu.find("input");
var f="ech-multiselect-disabled";
if(e){d=d.filter(":enabled").data(f,true)
}else{d=d.filter(function(){return b.data(this,f)===true
}).removeData(f)
}d.attr({disabled:e,"arial-disabled":e}).parent()[e?"addClass":"removeClass"]("ui-state-disabled");
this.element.attr({disabled:e,"aria-disabled":e})
},open:function(i){var m=this,h=this.button,d=this.menu,g=this.speed,f=this.options,j=[];
if(this._trigger("beforeopen")===false||h.hasClass("ui-state-disabled")||this._isOpen){return
}var l=d.find("ul").last(),n=f.show,k=h.offset();
if(b.isArray(f.show)){n=f.show[0];
g=f.show[1]||m.speed
}if(n){j=[n,g]
}l.scrollTop(0).height(f.height);
if(b.ui.position&&!b.isEmptyObject(f.position)){f.position.of=f.position.of||h;
d.show().position(f.position).hide()
}else{d.css({top:k.top+h.outerHeight(),left:k.left-167})
}b.fn.show.apply(d,j);
this.labels.eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus");
h.addClass("ui-state-active");
this._isOpen=true;
this._trigger("open")
},close:function(){if(this._trigger("beforeclose")===false){return
}var g=this.options,e=g.hide,f=this.speed,d=[];
if(b.isArray(g.hide)){e=g.hide[0];
f=g.hide[1]||this.speed
}if(e){d=[e,f]
}b.fn.hide.apply(this.menu,d);
this.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave");
this._isOpen=false;
this._trigger("close")
},enable:function(){this._toggleDisabled(false)
},disable:function(){this._toggleDisabled(true)
},checkAll:function(d){this._toggleChecked(true);
this._trigger("checkAll")
},uncheckAll:function(){this._toggleChecked(false);
this._trigger("uncheckAll")
},getChecked:function(){return this.menu.find("input").filter(":checked")
},destroy:function(){b.Widget.prototype.destroy.call(this);
this.button.remove();
this.menu.remove();
this.element.show();
return this
},isOpen:function(){return this._isOpen
},widget:function(){return this.menu
},getButton:function(){return this.button
},_setOption:function(d,e){var f=this.menu;
switch(d){case"header":f.find("div.ui-multiselect-header")[e?"show":"hide"]();
break;
case"checkAllText":f.find("a.ui-multiselect-all span").eq(-1).text(e);
break;
case"uncheckAllText":f.find("a.ui-multiselect-none span").eq(-1).text(e);
break;
case"height":f.find("ul").last().height(parseInt(e,10));
break;
case"minWidth":this.options[d]=parseInt(e,10);
this._setButtonWidth();
this._setMenuWidth();
break;
case"selectedText":case"selectedList":case"noneSelectedText":this.options[d]=e;
this.update();
break;
case"classes":f.add(this.button).removeClass(this.options.classes).addClass(e);
break;
case"multiple":f.toggleClass("ui-multiselect-single",!e);
this.options.multiple=e;
this.element[0].multiple=e;
this.refresh()
}b.Widget.prototype._setOption.apply(this,arguments)
}})
})($);
var ss_form_element="suggestion_form";
var ss_form_element2="suggestion_form2";
var ss_form_elementH="suggestion_formH";
var ss_popup_element="search_suggest";
var ss_popup_element2="search_suggest2";
var ss_popup_elementH="search_suggestH";
var ss_seq=["g"];
var ss_g_one_name_to_display="Suggestion";
if(document.domain.indexOf("jp")>=0||window.location.href.indexOf("ja_jp")>0){ss_g_one_name_to_display="関連キーワード"
}else{if(document.domain.indexOf("cn")>=0||window.location.href.indexOf("zh_cn")>0){ss_g_one_name_to_display="建议"
}}var ss_g_more_names_to_display="Suggestions";
if(document.domain.indexOf("jp")>=0||window.location.href.indexOf("ja_jp")>0){ss_g_more_names_to_display="関連キーワード"
}else{if(document.domain.indexOf("cn")>=0||window.location.href.indexOf("zh_cn")>0){ss_g_more_names_to_display="建议"
}}var ss_g_max_to_display=10;
var ss_max_to_display=12;
var ss_wait_millisec=300;
var ss_delay_millisec=30;
var ss_gsa_host=null;
var SS_OUTPUT_FORMAT_LEGACY="legacy";
var SS_OUTPUT_FORMAT_OPEN_SEARCH="os";
var SS_OUTPUT_FORMAT_RICH="rich";
var ss_protocol=SS_OUTPUT_FORMAT_RICH;
var ss_allow_non_query=true;
var ss_non_query_empty_title="No Title";
var ss_allow_debug=false;
var ss_mode="";
var ss_cached=[];
var ss_qbackup=null;
var ss_qshown=null;
var ss_loc=-1;
var ss_waiting=0;
var ss_painting=false;
var ss_key_handling_queue=null;
var ss_painting_queue=null;
var ss_dismissed=false;
var ss_panic=false;
var SS_ROW_CLASS="ss-gac-a";
var SS_ROW_SELECTED_CLASS="ss-gac-b";
if(!Array.indexOf){Array.prototype.indexOf=function(b){for(var a=0;
a<this.length;
a++){if(this[a]==b){return a
}}return -1
}
}var ss_debug=new ss_Debugger();
function ss_composeSuggestUri(d,e){var b=e.site?e.site.value:null;
var a=e.client?e.client.value:null;
if(!d||!b||!a){return null
}var f=(e.access&&e.access.value)?e.access.value:"p";
var c="/content/www/us/en/programmable/bin/gsasuggest";
if(SS_OUTPUT_FORMAT_LEGACY==ss_protocol){c=c+"?token="+encodeURIComponent(d)+"&max_matches="+ss_g_max_to_display
}else{c=c+"?q="+encodeURIComponent(d)+"&max="+ss_g_max_to_display
}c=c+"&mode="+ss_mode+"&site="+encodeURIComponent(b)+"&client="+encodeURIComponent(a)+"&access="+encodeURIComponent(f)+"&format="+encodeURIComponent(ss_protocol);
return c
}function ss_suggest(qVal){var startTimeMs=new Date().getTime();
if(!ss_cached[qVal]){ss_cached[qVal]={}
}var suggestForm=document.getElementById(ss_form_element);
var uri=ss_composeSuggestUri(qVal,suggestForm);
if(!uri){return
}var url=ss_gsa_host?"http://"+ss_gsa_host+uri:uri;
if(ss_panic){alert("ss_suggest() AJAX: "+url)
}var xmlhttp=XH_XmlHttpCreate();
var handler=function(){if(xmlhttp.readyState==XML_READY_STATE_COMPLETED){if(ss_panic){alert("ss_suggest() AJAX: "+xmlhttp.responseText)
}var suggested;
try{suggested=eval("("+xmlhttp.responseText+")")
}catch(e){ss_cached[qVal].g=null;
ss_show(qVal);
return
}if(ss_use.g){try{switch(ss_protocol){case SS_OUTPUT_FORMAT_LEGACY:default:var suggestions=suggested;
if(suggestions&&suggestions.length>0){var found=false;
ss_cached[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){ss_cached[qVal].g[si]={q:suggestions[si]};
found=true
}if(!found){ss_cached[qVal].g=null
}}else{ss_cached[qVal].g=null
}break;
case SS_OUTPUT_FORMAT_OPEN_SEARCH:if(suggested.length>1){var suggestions=suggested[1];
if(suggestions&&suggestions.length>0){var found=false;
ss_cached[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){if(suggestions[si]&&suggestions[si]!=suggested[0]){ss_cached[qVal].g[si]={q:suggestions[si]};
found=true
}else{if((suggested.length>3)&&ss_allow_non_query){var title=(suggested[2].length>si)?null:suggested[2][si];
var url=(suggested[3].length>si)?null:suggested[3][si];
if(url){title=!title?ss_non_query_empty_title:title;
ss_cached[qVal].g[si]={t:title,u:url};
found=true
}}}}if(!found){ss_cached[qVal].g=null
}}else{ss_cached[qVal].g=null
}}else{ss_cached[qVal].g=null
}break;
case SS_OUTPUT_FORMAT_RICH:var suggestions=suggested.results;
if(suggestions&&suggestions.length>0){var found=false;
ss_cached[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){if(suggestions[si].name&&suggestions[si].name!=suggested.query){ss_cached[qVal].g[si]={q:suggestions[si].name};
found=true
}else{if(ss_allow_non_query){var title=suggestions[si].content;
var url=suggestions[si].moreDetailsUrl;
if(url){title=!title?ss_non_query_empty_title:title;
ss_cached[qVal].g[si]={t:title,u:url};
found=true
}}}}if(!found){ss_cached[qVal].g=null
}}else{ss_cached[qVal].g=null
}break
}}catch(e){ss_cached[qVal].g=null
}}if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){var stopTimeMs=new Date().getTime();
ss_debug.addRequestDebugLine(qVal,"suggest",stopTimeMs-startTimeMs,ss_cached[qVal])
}ss_show(qVal)
}};
XH_XmlHttpPOST(xmlhttp,url,"",handler)
}function ss_processed(a){if(!ss_cached[a]&&ss_use.g){return false
}return true
}function ss_handleAllKey(c){var a=(window.event)?window.event.keyCode:c.keyCode;
switch(a){case 40:case 38:break;
case 9:ss_qbackup=null;
ss_dismissed=true;
ss_clear(true);
case 16:ss_qbackup=null;
ss_dismissed=true;
var b=document.getElementById(ss_form_element).q.value;
if(!ss_processed(b)){if(ss_panic){alert("run ajax when key off")
}ss_suggest(b)
}break;
case 113:if(!ss_allow_debug){break
}if(ss_debug&&ss_debug.getDebugMode()){ss_debug.deactivateConsole()
}else{ss_debug.activateConsole()
}break;
default:break
}}function ss_handleKey(g){var c=(window.event)?window.event.keyCode:g.keyCode;
var i=document.getElementById(ss_form_element);
var h=(!ss_qbackup)?ss_escape(i.q.value):ss_qbackup;
var f=0;
var d=document.getElementById(ss_popup_element);
switch(c){case 40:ss_dismissed=false;
if(ss_processed(h)){f=ss_countSuggestions(h);
if(f>0){if(d.style.visibility=="hidden"){ss_show(h);
break
}if(ss_qbackup){ss_loc++
}else{ss_qbackup=h;
ss_loc=1
}while(ss_loc>=f+1){ss_loc-=f
}var k=d.getElementsByTagName("tr");
for(var j=1;
j<=k.length-1;
j++){if(j==ss_loc){k[j].className=SS_ROW_SELECTED_CLASS
}else{k[j].className=SS_ROW_CLASS
}}var b=ss_locateSuggestion(h,ss_loc);
if(b.q){i.q.value=b.q
}else{i.q.value=ss_qbackup
}}}else{if(ss_panic){alert("run ajax when key down")
}ss_suggest(h)
}break;
case 38:ss_dismissed=false;
if(ss_processed(h)){f=ss_countSuggestions(h);
if(f>0){if(d.style.visibility=="hidden"){ss_show(h);
break
}if(ss_qbackup){ss_loc--
}else{ss_qbackup=h;
ss_loc=-1
}while(ss_loc<0){ss_loc+=f
}var k=d.getElementsByTagName("tr");
for(var j=0;
j<=k.length-1;
j++){if(j==ss_loc){k[j].className=SS_ROW_SELECTED_CLASS
}else{k[j].className=SS_ROW_CLASS
}}if(ss_loc>0){var b=ss_locateSuggestion(h,ss_loc);
if(b.q){i.q.value=b.q
}else{i.q.value=ss_qbackup
}}}}else{if(ss_panic){alert("run ajax when key up")
}ss_suggest(h)
}break;
case 13:var a=null;
if(ss_processed(h)&&ss_qbackup&&ss_loc>-1){var b=ss_locateSuggestion(ss_qbackup,ss_loc);
if(b.u){a=b.u
}}ss_qbackup=null;
ss_dismissed=true;
ss_clear();
if(a){window.location.href=a
}break;
case 27:if(ss_qbackup){i.q.value=ss_qbackup;
ss_qbackup=null
}ss_dismissed=true;
ss_clear();
break;
case 37:case 39:case 9:case 16:break;
default:ss_dismissed=false;
if(i.q.value==ss_qshown){}else{if(ss_key_handling_queue){clearTimeout(ss_key_handling_queue)
}ss_qbackup=null;
ss_loc=-1;
ss_waiting++;
if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){ss_debug.addWaitDebugLine(ss_escape(i.q.value),"queue",ss_wait_millisec)
}ss_key_handling_queue=setTimeout('ss_handleQuery("'+ss_escape(i.q.value)+'", '+ss_waiting+")",ss_wait_millisec)
}break
}}function ss_handleQuery(b,a){if(a!=ss_waiting){return
}ss_waiting=0;
if(b==""){ss_clear()
}else{if(!ss_processed(b)){if(ss_panic){alert("run ajax when key change")
}ss_suggest(b)
}else{ss_show(b)
}}}function ss_sf(){document.getElementById(ss_form_element).q.focus();
ss_dismissed=false
}function ss_clear(b){ss_qshown=null;
var a=document.getElementById(ss_form_element);
var c=(!ss_qbackup)?ss_escape(a.q.value):ss_qbackup;
ss_hide(c);
if(!b){ss_sf()
}}function ss_hide(a){var b=document.getElementById(ss_popup_element);
if(b.style.visibility=="visible"){if(ss_panic){alert("close suggestion box")
}if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){ss_debug.addHideDebugLine(a,"hide")
}b.style.visibility="hidden"
}}function ss_show(l){var i=document.getElementById(ss_form_element).q.value;
if(i!=l){if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){ss_debug.addHideDebugLine(l,"skip")
}return
}var f=new Date().getTime();
if(ss_dismissed){ss_qshown=null;
ss_hide(l);
return
}if(!ss_processed(l)){return
}if(l==""){ss_hide(l);
return
}var h=ss_cached[l]?ss_cached[l].g:null;
var o=false;
if(ss_use.g&&h){o=true
}if(!o){ss_qshown=null;
ss_hide(l);
return
}if(ss_painting){if(ss_painting_queue){clearTimeout(ss_painting_queue)
}if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){ss_debug.addWaitDebugLine(l,"delay",ss_delay_millisec)
}ss_painting_queue=setTimeout('ss_show("'+ss_escape(l)+'")',ss_delay_millisec);
return
}else{ss_painting=true
}var e=document.getElementById(ss_popup_element);
for(var n=e.rows.length-1;
n>-1;
n--){e.deleteRow(n)
}var b=0;
if(h&&h.length>0){var q=e.insertRow(-1);
q.className="ss-gac-e";
var j="";
if(h.length==1){j=ss_g_one_name_to_display
}else{j=ss_g_more_names_to_display
}var d=document.createElement("td");
d.appendChild(document.createTextNode(j));
d.className="ss-gac-c";
q.appendChild(d);
var p=document.createElement("td");
p.className="ss-gac-d";
p.onclick=function(){ss_qbackup=null;
ss_clear();
var g=document.getElementById(ss_form_element).q.value;
if(!ss_processed(g)){ss_dismissed=true;
if(ss_panic){alert("run ajax when mouse close")
}ss_suggest(g)
}};
var c=document.createElement("div");
c.className="icon-closeSearch";
var a=document.createElement("span");
c.appendChild(a);
p.appendChild(c);
q.appendChild(p)
}for(var m=0;
m<ss_seq.length;
m++){switch(ss_seq[m]){case"g":b+=ss_showSuggestion(h,b,e,l);
break
}if(ss_max_to_display>0&&b>=ss_max_to_display){break
}}if(b>0){var q=e.insertRow(-1);
q.className="ss-gac-e";
var p=document.createElement("td");
p.colSpan=2;
q.appendChild(p);
e.style.visibility="visible";
ss_qshown=l;
if(ss_panic){alert("open suggestion box for "+l)
}if(ss_allow_debug&&ss_debug&&ss_debug.getDebugMode()){var k=new Date().getTime();
ss_debug.addShowDebugLine(l,k-f,ss_cached[l],b)
}}else{ss_hide(l)
}ss_painting=false
}function ss_showSuggestion(h,a,d,j){if(ss_max_to_display>0&&a>=ss_max_to_display){return 0
}if(h&&h.length>0){lqry=j.toLowerCase().replace(/\"/g,"");
for(var e=0;
e<h.length;
e++){var k=d.insertRow(-1);
k.onclick=ss_handleMouseC;
k.onmousemove=ss_handleMouseM;
k.className=SS_ROW_CLASS;
var f=document.createElement("td");
if(h[e].q){var c="<b>"+h[e].q.substr(0,lqry.length)+"</b>";
if(h[e].q.length>lqry.length){c+=h[e].q.substring(lqry.length)
}f.innerHTML=c
}else{f.innerHTML="<i>"+h[e].t+"</i>"
}f.className="ss-gac-c";
k.appendChild(f);
var b=document.createElement("td");
b.className="ss-gac-d";
k.appendChild(b);
if(ss_max_to_display>0&&a+e+1>=ss_max_to_display){return e+1
}}return h.length
}return 0
}function ss_handleMouseM(){var c=document.getElementById(ss_form_element);
var e=document.getElementById(ss_popup_element);
var d=e.getElementsByTagName("tr");
for(var a=1;
a<=d.length-1;
a++){if(d[a]==this&&d[a].className!=SS_ROW_SELECTED_CLASS){d[a].className=SS_ROW_SELECTED_CLASS;
if(!ss_qbackup){ss_qbackup=c.q.value
}ss_loc=a;
var b=ss_locateSuggestion(ss_qbackup,ss_loc);
if(b.q){c.q.value=b.q
}else{c.q.value=ss_qbackup
}}else{if(d[a]!=this){d[a].className=SS_ROW_CLASS
}}}ss_sf();
return true
}function ss_handleMouseC(){var c=document.getElementById(ss_form_element);
var e=document.getElementById(ss_popup_element);
var d=e.getElementsByTagName("tr");
for(var a=1;
a<=d.length-1;
a++){if(d[a]==this){if(!ss_qbackup){ss_qbackup=c.q.value
}ss_loc=a;
var b=ss_locateSuggestion(ss_qbackup,ss_loc);
if(b.q){c.q.value=b.q;
c.submit()
}else{c.q.value=ss_qbackup;
if(b.u){window.location.href=b.u
}}break
}}}function ss_countSuggestions(c){var b=0;
for(var a=0;
a<ss_seq.length;
a++){switch(ss_seq[a]){case"g":b+=ss_cached[c].g?ss_cached[c].g.length:0;
break
}if(ss_max_to_display>0&&b>=ss_max_to_display){return ss_max_to_display
}}return b
}function ss_locateSuggestion(e,g){var c=1;
var b=0;
var a=null;
for(var f=0;
f<=ss_seq.length;
f++){switch(ss_seq[f]){case"g":b+=ss_cached[e].g?ss_cached[e].g.length:0;
break
}if(g>=c&&g<=b){switch(ss_seq[f]){case"g":var d=ss_cached[e].g[g-c].q;
if(d){return{q:d}
}else{return{u:ss_cached[e].g[g-c].u}
}}break
}c=b
}return null
}function ss_escape(a){return a.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')
}function ss_escapeDbg(d){var b="";
var c=d.split("");
for(var a=0;
a<c.length;
a++){switch(c[a]){case"&":b+="&amp;";
break;
case"<":b+="&lt;";
break;
case">":b+="&gt;";
break;
default:b+=c[a];
break
}}return b
}function ss_Debugger(){this.debugMode=false
}ss_Debugger.DEBUG_CONSOLE_ID="ss_debug_console";
ss_Debugger.DEBUG_CONTENT_ID="ss_debug_content";
ss_Debugger.DEBUG_TOGGLE_ID="ss_debug_toggle";
ss_Debugger.prototype.getDebugMode=function(){return this.debugMode
};
ss_Debugger.prototype.activateConsole=function(){var c=document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
if(c){c.style.display="block"
}else{var b=document.createElement("div");
b.id=ss_Debugger.DEBUG_CONSOLE_ID;
b.zIndex=100;
b.className="expanded";
var g=document.createElement("h1");
g.appendChild(document.createTextNode("GSA Suggest Debug Console"));
g.style.display="inline";
b.appendChild(g);
var f=document.createElement("div");
var d=document.createElement("button");
d.onclick=function(j){var k=document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if(k){for(var i=k.rows.length-1;
i>0;
i--){k.deleteRow(i)
}}};
d.appendChild(document.createTextNode("Clear console"));
f.appendChild(d);
d=document.createElement("button");
d.onclick=function(i){ss_cached=[]
};
d.appendChild(document.createTextNode("Clear cache"));
f.appendChild(d);
d=document.createElement("button");
d.id=ss_Debugger.DEBUG_TOGGLE_ID;
d.onclick=function(k){var j=document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
if(j){var i=document.getElementById(ss_Debugger.DEBUG_TOGGLE_ID);
if(j.className.indexOf("expanded")!=-1){j.className=j.className.replace(/expanded/,"contracted");
i.innerHTML="Maximize"
}else{j.className=j.className.replace(/contracted/,"expanded");
i.innerHTML="Minimize"
}}};
d.appendChild(document.createTextNode("Minimize"));
f.appendChild(d);
f.style.display="inline";
b.appendChild(f);
b.appendChild(document.createElement("br"));
var h=document.createElement("table");
h.id=ss_Debugger.DEBUG_CONTENT_ID;
var a=h.insertRow(-1);
var e=document.createElement("th");
e.innerHTML="Query";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Type";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Time";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="g";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Total";
a.appendChild(e);
b.appendChild(h);
document.body.appendChild(b)
}this.debugMode=true
};
ss_Debugger.prototype.deactivateConsole=function(){var a=document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
if(a){a.style.display="none"
}this.debugMode=false
};
ss_Debugger.prototype.addRequestDebugLine=function(c,b,f,e){var d=document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var g=document.createElement("td");
g.innerHTML="&lt;"+ss_escapeDbg(c)+"&gt;";
a.appendChild(g);
g=document.createElement("td");
g.innerHTML=b;
a.appendChild(g);
g=document.createElement("td");
g.className="no";
g.innerHTML=f+" ms";
a.appendChild(g);
switch(b){case"suggest":g=document.createElement("td");
g.className="no";
g.innerHTML=(e.g?e.g.length:0);
a.appendChild(g);
g=document.createElement("td");
a.appendChild(g);
break;
default:g=document.createElement("td");
a.appendChild(g);
g=document.createElement("td");
a.appendChild(g);
break
}}};
ss_Debugger.prototype.addShowDebugLine=function(c,e,g,b){var d=document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var f=document.createElement("td");
f.innerHTML="&lt;"+ss_escapeDbg(c)+"&gt;";
a.appendChild(f);
f=document.createElement("td");
f.innerHTML="<i>show</i>";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=e+" ms";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=(g?(g.g?g.g.length:0):0);
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=b;
a.appendChild(f)
}};
ss_Debugger.prototype.addHideDebugLine=function(c,b){var d=document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var e=document.createElement("td");
e.innerHTML="&lt;"+ss_escapeDbg(c)+"&gt;";
a.appendChild(e);
e=document.createElement("td");
e.innerHTML="<i>"+b+"</i>";
a.appendChild(e);
e=document.createElement("td");
e.className="no";
e.innerHTML="0 ms";
a.appendChild(e);
e=document.createElement("td");
a.appendChild(e);
e=document.createElement("td");
a.appendChild(e)
}};
ss_Debugger.prototype.addWaitDebugLine=function(c,b,e){var d=document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var f=document.createElement("td");
f.innerHTML="&lt;"+ss_escapeDbg(c)+"&gt;";
a.appendChild(f);
f=document.createElement("td");
f.innerHTML="<i>"+b+"</i>";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=e+" ms";
a.appendChild(f);
f=document.createElement("td");
a.appendChild(f);
f=document.createElement("td");
a.appendChild(f)
}};
var ss_use={};
ss_use.g=ss_seq.indexOf("g")>=0?true:false;
document.onkeyup=ss_handleAllKey;
var ss_cachedH=[];
var ss_qbackupH=null;
var ss_qshownH=null;
var ss_locH=-1;
var ss_waitingH=0;
var ss_paintingH=false;
var ss_key_handling_queueH=null;
var ss_painting_queueH=null;
var ss_dismissedH=false;
var ss_panicH=false;
var SS_ROW_CLASSH="ss-gac-a";
var SS_ROW_SELECTED_CLASSH="ss-gac-b";
if(!Array.indexOf){Array.prototype.indexOf=function(b){for(var a=0;
a<this.length;
a++){if(this[a]==b){return a
}}return -1
}
}var ss_debugH=new ss_DebuggerH();
function ss_composeSuggestUriH(d,e){var b=e.site?e.site.value:null;
var a=e.client?e.client.value:null;
if(!d||!b||!a){return null
}var f=(e.access&&e.access.value)?e.access.value:"p";
var c="/content/www/us/en/programmable/bin/gsasuggest";
if(SS_OUTPUT_FORMAT_LEGACY==ss_protocol){c=c+"?token="+encodeURIComponent(d)+"&max_matches="+ss_g_max_to_display
}else{c=c+"?q="+encodeURIComponent(d)+"&max="+ss_g_max_to_display
}c=c+"&mode="+ss_mode+"&site="+encodeURIComponent(b)+"&client="+encodeURIComponent(a)+"&access="+encodeURIComponent(f)+"&format="+encodeURIComponent(ss_protocol);
return c
}function ss_suggestH(qVal){var startTimeMs=new Date().getTime();
if(!ss_cachedH[qVal]){ss_cachedH[qVal]={}
}var suggestForm=document.getElementById(ss_form_elementH);
var uri=ss_composeSuggestUriH(qVal,suggestForm);
if(!uri){return
}var url=ss_gsa_host?"http://"+ss_gsa_host+uri:uri;
if(ss_panicH){alert("ss_suggestH() AJAX: "+url)
}var xmlhttp=XH_XmlHttpCreate();
var handler=function(){if(xmlhttp.readyState==XML_READY_STATE_COMPLETED){if(ss_panicH){alert("ss_suggestH() AJAX: "+xmlhttp.responseText)
}var suggested;
try{suggested=eval("("+xmlhttp.responseText+")")
}catch(e){ss_cachedH[qVal].g=null;
ss_showH(qVal);
return
}if(ss_useH.g){try{switch(ss_protocol){case SS_OUTPUT_FORMAT_LEGACY:default:var suggestions=suggested;
if(suggestions&&suggestions.length>0){var found=false;
ss_cachedH[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){ss_cachedH[qVal].g[si]={q:suggestions[si]};
found=true
}if(!found){ss_cachedH[qVal].g=null
}}else{ss_cachedH[qVal].g=null
}break;
case SS_OUTPUT_FORMAT_OPEN_SEARCH:if(suggested.length>1){var suggestions=suggested[1];
if(suggestions&&suggestions.length>0){var found=false;
ss_cachedH[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){if(suggestions[si]&&suggestions[si]!=suggested[0]){ss_cachedH[qVal].g[si]={q:suggestions[si]};
found=true
}else{if((suggested.length>3)&&ss_allow_non_query){var title=(suggested[2].length>si)?null:suggested[2][si];
var url=(suggested[3].length>si)?null:suggested[3][si];
if(url){title=!title?ss_non_query_empty_title:title;
ss_cachedH[qVal].g[si]={t:title,u:url};
found=true
}}}}if(!found){ss_cachedH[qVal].g=null
}}else{ss_cachedH[qVal].g=null
}}else{ss_cachedH[qVal].g=null
}break;
case SS_OUTPUT_FORMAT_RICH:var suggestions=suggested.results;
if(suggestions&&suggestions.length>0){var found=false;
ss_cachedH[qVal].g=[];
var max=(ss_g_max_to_display<=0)?suggestions.length:Math.min(ss_g_max_to_display,suggestions.length);
for(var si=0;
si<max;
si++){if(suggestions[si].name&&suggestions[si].name!=suggested.query){ss_cachedH[qVal].g[si]={q:suggestions[si].name};
found=true
}else{if(ss_allow_non_query){var title=suggestions[si].content;
var url=suggestions[si].moreDetailsUrl;
if(url){title=!title?ss_non_query_empty_title:title;
ss_cachedH[qVal].g[si]={t:title,u:url};
found=true
}}}}if(!found){ss_cachedH[qVal].g=null
}}else{ss_cachedH[qVal].g=null
}break
}}catch(e){ss_cachedH[qVal].g=null
}}if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){var stopTimeMs=new Date().getTime();
ss_debugH.addRequestDebugLine(qVal,"suggest",stopTimeMs-startTimeMs,ss_cachedH[qVal])
}ss_showH(qVal)
}};
XH_XmlHttpPOST(xmlhttp,url,"",handler)
}function ss_processedH(a){if(!ss_cachedH[a]&&ss_useH.g){return false
}return true
}function ss_handleAllKeyH(c){var a=(window.event)?window.event.keyCode:c.keyCode;
switch(a){case 40:case 38:break;
case 9:ss_qbackupH=null;
ss_dismissedH=true;
ss_clearH(true);
case 16:ss_qbackupH=null;
ss_dismissedH=true;
var b=document.getElementById(ss_form_elementH).q.value;
if(!ss_processedH(b)){if(ss_panicH){alert("run ajax when key off")
}ss_suggestH(b)
}break;
case 113:if(!ss_allow_debug){break
}if(ss_debugH&&ss_debugH.getDebugMode()){ss_debugH.deactivateConsole()
}else{ss_debugH.activateConsole()
}break;
default:break
}}function ss_handleKeyH(g){var c=(window.event)?window.event.keyCode:g.keyCode;
var i=document.getElementById(ss_form_elementH);
var h=(!ss_qbackupH)?ss_escape(i.q.value):ss_qbackupH;
var f=0;
var d=document.getElementById(ss_popup_elementH);
switch(c){case 40:ss_dismissedH=false;
if(ss_processedH(h)){f=ss_countSuggestionsH(h);
if(f>0){if(d.style.visibility=="hidden"){ss_showH(h);
break
}if(ss_qbackupH){ss_locH++
}else{ss_qbackupH=h;
ss_locH=1
}while(ss_locH>=f+1){ss_locH-=f
}var k=d.getElementsByTagName("tr");
for(var j=1;
j<=k.length-1;
j++){if(j==ss_locH){k[j].className=SS_ROW_SELECTED_CLASSH
}else{k[j].className=SS_ROW_CLASSH
}}var b=ss_locateSuggestionH(h,ss_locH);
if(b.q){i.q.value=b.q
}else{i.q.value=ss_qbackupH
}}}else{if(ss_panicH){alert("run ajax when key down")
}ss_suggestH(h)
}break;
case 38:ss_dismissedH=false;
if(ss_processedH(h)){f=ss_countSuggestionsH(h);
if(f>0){if(d.style.visibility=="hidden"){ss_showH(h);
break
}if(ss_qbackupH){ss_locH--
}else{ss_qbackupH=h;
ss_locH=-1
}while(ss_locH<0){ss_locH+=f
}var k=d.getElementsByTagName("tr");
for(var j=0;
j<=k.length-1;
j++){if(j==ss_locH){k[j].className=SS_ROW_SELECTED_CLASSH
}else{k[j].className=SS_ROW_CLASSH
}}var b=ss_locateSuggestionH(h,ss_locH);
if(b.q){i.q.value=b.q
}else{i.q.value=ss_qbackupH
}}}else{if(ss_panicH){alert("run ajax when key up")
}ss_suggestH(h)
}break;
case 13:var a=null;
if(ss_processedH(h)&&ss_qbackupH&&ss_locH>-1){var b=ss_locateSuggestionH(ss_qbackupH,ss_locH);
if(b.u){a=b.u
}}ss_qbackupH=null;
ss_dismissedH=true;
ss_clearH();
if(a){window.location.href=a
}break;
case 27:if(ss_qbackupH){i.q.value=ss_qbackupH;
ss_qbackupH=null
}ss_dismissedH=true;
ss_clearH();
break;
case 37:case 39:case 9:case 16:break;
default:ss_dismissedH=false;
if(i.q.value==ss_qshownH){}else{if(ss_key_handling_queueH){clearTimeout(ss_key_handling_queueH)
}ss_qbackupH=null;
ss_locH=-1;
ss_waitingH++;
if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){ss_debugH.addWaitDebugLine(ss_escape(i.q.value),"queue",ss_wait_millisec)
}ss_key_handling_queueH=setTimeout('ss_handleQueryH("'+ss_escapeH(i.q.value)+'", '+ss_waitingH+")",ss_wait_millisec)
}break
}}function ss_handleQueryH(b,a){if(a!=ss_waitingH){return
}ss_waitingH=0;
if(b==""){ss_clearH()
}else{if(!ss_processedH(b)){if(ss_panicH){alert("run ajax when key change")
}ss_suggestH(b)
}else{ss_showH(b)
}}}function ss_sfH(){document.getElementById(ss_form_elementH).q.focus();
ss_dismissedH=false
}function ss_clearH(b){ss_qshownH=null;
var a=document.getElementById(ss_form_elementH);
var c=(!ss_qbackupH)?ss_escape(a.q.value):ss_qbackupH;
ss_hideH(c);
if(!b){ss_sfH()
}}function ss_hideH(a){var b=document.getElementById(ss_popup_elementH);
if(b.style.visibility=="visible"){if(ss_panicH){alert("close suggestion box")
}if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){ss_debugH.addHideDebugLine(a,"hide")
}b.style.visibility="hidden"
}}function ss_showH(l){var i=document.getElementById(ss_form_elementH).q.value;
if(i!=l){if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){ss_debugH.addHideDebugLine(l,"skip")
}return
}var f=new Date().getTime();
if(ss_dismissedH){ss_qshownH=null;
ss_hideH(l);
return
}if(!ss_processedH(l)){return
}if(l==""){ss_hideH(l);
return
}var h=ss_cachedH[l]?ss_cachedH[l].g:null;
var o=false;
if(ss_useH.g&&h){o=true
}if(!o){ss_qshownH=null;
ss_hideH(l);
return
}if(ss_paintingH){if(ss_painting_queueH){clearTimeout(ss_painting_queueH)
}if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){ss_debugH.addWaitDebugLine(l,"delay",ss_delay_millisec)
}ss_painting_queueH=setTimeout('ss_showH("'+ss_escapeH(l)+'")',ss_delay_millisec);
return
}else{ss_paintingH=true
}var e=document.getElementById(ss_popup_elementH);
for(var n=e.rows.length-1;
n>-1;
n--){e.deleteRow(n)
}var b=0;
if(h&&h.length>0){var q=e.insertRow(-1);
q.className="ss-gac-e";
var j="";
if(h.length==1){j=ss_g_one_name_to_display
}else{j=ss_g_more_names_to_display
}var d=document.createElement("td");
d.appendChild(document.createTextNode(j));
d.className="ss-gac-c";
q.appendChild(d);
var p=document.createElement("td");
p.className="ss-gac-d";
p.onclick=function(){ss_qbackupH=null;
ss_clearH();
var g=document.getElementById(ss_form_elementH).q.value;
if(!ss_processedH(g)){ss_dismissedH=true;
if(ss_panicH){alert("run ajax when mouse close")
}ss_suggestH(g)
}};
var c=document.createElement("div");
c.className="icon-closeSearch";
var a=document.createElement("span");
c.appendChild(a);
p.appendChild(c);
q.appendChild(p)
}for(var m=0;
m<ss_seq.length;
m++){switch(ss_seq[m]){case"g":b+=ss_showSuggestionH(h,b,e,l);
break
}if(ss_max_to_display>0&&b>=ss_max_to_display){break
}}if(b>0){var q=e.insertRow(-1);
q.className="ss-gac-e";
var p=document.createElement("td");
p.colSpan=2;
q.appendChild(p);
e.style.visibility="visible";
ss_qshownH=l;
if(ss_panicH){alert("open suggestion box for "+l)
}if(ss_allow_debug&&ss_debugH&&ss_debugH.getDebugMode()){var k=new Date().getTime();
ss_debugH.addShowDebugLine(l,k-f,ss_cachedH[l],b)
}}else{ss_hideH(l)
}ss_paintingH=false
}function ss_showSuggestionH(h,a,d,j){if(ss_max_to_display>0&&a>=ss_max_to_display){return 0
}if(h&&h.length>0){lqry=j.toLowerCase().replace(/\"/g,"");
for(var e=0;
e<h.length;
e++){var k=d.insertRow(-1);
k.onclick=ss_handleMouseCH;
k.onmousemove=ss_handleMouseMH;
k.className=SS_ROW_CLASSH;
var f=document.createElement("td");
if(h[e].q){var c="<b>"+h[e].q.substr(0,lqry.length)+"</b>";
if(h[e].q.length>lqry.length){c+=h[e].q.substring(lqry.length)
}f.innerHTML=c
}else{f.innerHTML="<i>"+h[e].t+"</i>"
}f.className="ss-gac-c";
k.appendChild(f);
var b=document.createElement("td");
b.className="ss-gac-d";
k.appendChild(b);
if(ss_max_to_display>0&&a+e+1>=ss_max_to_display){return e+1
}}return h.length
}return 0
}function ss_handleMouseMH(){var c=document.getElementById(ss_form_elementH);
var e=document.getElementById(ss_popup_elementH);
var d=e.getElementsByTagName("tr");
for(var a=1;
a<=d.length-1;
a++){if(d[a]==this&&d[a].className!=SS_ROW_SELECTED_CLASSH){d[a].className=SS_ROW_SELECTED_CLASSH;
if(!ss_qbackupH){ss_qbackupH=c.q.value
}ss_locH=a;
var b=ss_locateSuggestionH(ss_qbackupH,ss_locH);
if(b.q){c.q.value=b.q
}else{c.q.value=ss_qbackupH
}}else{if(d[a]!=this){d[a].className=SS_ROW_CLASSH
}}}ss_sfH();
return true
}function ss_handleMouseCH(){var c=document.getElementById(ss_form_elementH);
var e=document.getElementById(ss_popup_elementH);
var d=e.getElementsByTagName("tr");
for(var a=1;
a<=d.length-1;
a++){if(d[a]==this){if(!ss_qbackupH){ss_qbackupH=c.q.value
}ss_locH=a;
var b=ss_locateSuggestionH(ss_qbackupH,ss_locH);
if(b.q){c.q.value=b.q;
c.submit()
}else{c.q.value=ss_qbackupH;
if(b.u){window.location.href=b.u
}}break
}}}function ss_countSuggestionsH(c){var b=0;
for(var a=0;
a<ss_seq.length;
a++){switch(ss_seq[a]){case"g":b+=ss_cachedH[c].g?ss_cachedH[c].g.length:0;
break
}if(ss_max_to_display>0&&b>=ss_max_to_display){return ss_max_to_display
}}return b
}function ss_locateSuggestionH(e,g){var c=1;
var b=0;
var a=null;
for(var f=0;
f<=ss_seq.length;
f++){switch(ss_seq[f]){case"g":b+=ss_cachedH[e].g?ss_cachedH[e].g.length:0;
break
}if(g>=c&&g<=b){switch(ss_seq[f]){case"g":var d=ss_cachedH[e].g[g-c].q;
if(d){return{q:d}
}else{return{u:ss_cachedH[e].g[g-c].u}
}}break
}c=b
}return null
}function ss_escapeH(a){return a.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')
}function ss_escapeDbgH(d){var b="";
var c=d.split("");
for(var a=0;
a<c.length;
a++){switch(c[a]){case"&":b+="&amp;";
break;
case"<":b+="&lt;";
break;
case">":b+="&gt;";
break;
default:b+=c[a];
break
}}return b
}function ss_DebuggerH(){this.debugMode=false
}ss_DebuggerH.DEBUG_CONSOLE_ID="ss_debug_console";
ss_DebuggerH.DEBUG_CONTENT_ID="ss_debug_content";
ss_DebuggerH.DEBUG_TOGGLE_ID="ss_debug_toggle";
ss_DebuggerH.prototype.getDebugMode=function(){return this.debugMode
};
ss_DebuggerH.prototype.activateConsole=function(){var c=document.getElementById(ss_DebuggerH.DEBUG_CONSOLE_ID);
if(c){c.style.display="block"
}else{var b=document.createElement("div");
b.id=ss_DebuggerH.DEBUG_CONSOLE_ID;
b.zIndex=100;
b.className="expanded";
var g=document.createElement("h1");
g.appendChild(document.createTextNode("GSA Suggest Debug Console"));
g.style.display="inline";
b.appendChild(g);
var f=document.createElement("div");
var d=document.createElement("button");
d.onclick=function(j){var k=document.getElementById(ss_DebuggerH.DEBUG_CONTENT_ID);
if(k){for(var i=k.rows.length-1;
i>0;
i--){k.deleteRow(i)
}}};
d.appendChild(document.createTextNode("Clear console"));
f.appendChild(d);
d=document.createElement("button");
d.onclick=function(i){ss_cachedH=[]
};
d.appendChild(document.createTextNode("Clear cache"));
f.appendChild(d);
d=document.createElement("button");
d.id=ss_DebuggerH.DEBUG_TOGGLE_ID;
d.onclick=function(k){var j=document.getElementById(ss_DebuggerH.DEBUG_CONSOLE_ID);
if(j){var i=document.getElementById(ss_DebuggerH.DEBUG_TOGGLE_ID);
if(j.className.indexOf("expanded")!=-1){j.className=j.className.replace(/expanded/,"contracted");
i.innerHTML="Maximize"
}else{j.className=j.className.replace(/contracted/,"expanded");
i.innerHTML="Minimize"
}}};
d.appendChild(document.createTextNode("Minimize"));
f.appendChild(d);
f.style.display="inline";
b.appendChild(f);
b.appendChild(document.createElement("br"));
var h=document.createElement("table");
h.id=ss_DebuggerH.DEBUG_CONTENT_ID;
var a=h.insertRow(-1);
var e=document.createElement("th");
e.innerHTML="Query";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Type";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Time";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="g";
a.appendChild(e);
e=document.createElement("th");
e.innerHTML="Total";
a.appendChild(e);
b.appendChild(h);
document.body.appendChild(b)
}this.debugMode=true
};
ss_DebuggerH.prototype.deactivateConsole=function(){var a=document.getElementById(ss_DebuggerH.DEBUG_CONSOLE_ID);
if(a){a.style.display="none"
}this.debugMode=false
};
ss_DebuggerH.prototype.addRequestDebugLine=function(c,b,f,e){var d=document.getElementById(ss_DebuggerH.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var g=document.createElement("td");
g.innerHTML="&lt;"+ss_escapeDbgH(c)+"&gt;";
a.appendChild(g);
g=document.createElement("td");
g.innerHTML=b;
a.appendChild(g);
g=document.createElement("td");
g.className="no";
g.innerHTML=f+" ms";
a.appendChild(g);
switch(b){case"suggest":g=document.createElement("td");
g.className="no";
g.innerHTML=(e.g?e.g.length:0);
a.appendChild(g);
g=document.createElement("td");
a.appendChild(g);
break;
default:g=document.createElement("td");
a.appendChild(g);
g=document.createElement("td");
a.appendChild(g);
break
}}};
ss_DebuggerH.prototype.addShowDebugLine=function(c,e,g,b){var d=document.getElementById(ss_DebuggerH.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var f=document.createElement("td");
f.innerHTML="&lt;"+ss_escapeDbgH(c)+"&gt;";
a.appendChild(f);
f=document.createElement("td");
f.innerHTML="<i>show</i>";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=e+" ms";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=(g?(g.g?g.g.length:0):0);
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=b;
a.appendChild(f)
}};
ss_DebuggerH.prototype.addHideDebugLine=function(c,b){var d=document.getElementById(ss_DebuggerH.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var e=document.createElement("td");
e.innerHTML="&lt;"+ss_escapeDbgH(c)+"&gt;";
a.appendChild(e);
e=document.createElement("td");
e.innerHTML="<i>"+b+"</i>";
a.appendChild(e);
e=document.createElement("td");
e.className="no";
e.innerHTML="0 ms";
a.appendChild(e);
e=document.createElement("td");
a.appendChild(e);
e=document.createElement("td");
a.appendChild(e)
}};
ss_DebuggerH.prototype.addWaitDebugLine=function(c,b,e){var d=document.getElementById(ss_DebuggerH.DEBUG_CONTENT_ID);
if(d){var a=d.insertRow(1);
var f=document.createElement("td");
f.innerHTML="&lt;"+ss_escapeDbgH(c)+"&gt;";
a.appendChild(f);
f=document.createElement("td");
f.innerHTML="<i>"+b+"</i>";
a.appendChild(f);
f=document.createElement("td");
f.className="no";
f.innerHTML=e+" ms";
a.appendChild(f);
f=document.createElement("td");
a.appendChild(f);
f=document.createElement("td");
a.appendChild(f)
}};
var ss_useH={};
ss_useH.g=ss_seq.indexOf("g")>=0?true:false;
document.onkeyup=ss_handleAllKeyH;
var XH_ieProgId_;
var XML_READY_STATE_UNINITIALIZED=0;
var XML_READY_STATE_LOADING=1;
var XML_READY_STATE_LOADED=2;
var XML_READY_STATE_INTERACTIVE=3;
var XML_READY_STATE_COMPLETED=4;
function XH_XmlHttpInit_(){var d=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
if(typeof XMLHttpRequest=="undefined"&&typeof ActiveXObject!="undefined"){for(var a=0;
a<d.length;
a++){var b=d[a];
try{new ActiveXObject(b);
XH_ieProgId_=b;
break
}catch(c){}}if(!XH_ieProgId_){throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed.")
}}}XH_XmlHttpInit_();
function XH_XmlHttpCreate(){if(XH_ieProgId_){return new ActiveXObject(XH_ieProgId_)
}else{return new XMLHttpRequest()
}}function XH_XmlHttpGET(a,b,c){a.open("GET",b,true);
a.onreadystatechange=c;
XH_XmlHttpSend(a,null)
}function XH_XmlHttpPOST(a,b,d,c){a.open("POST",b,true);
a.onreadystatechange=c;
a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
XH_XmlHttpSend(a,d)
}function XH_XmlHttpOpen(a,d,b,c){a.open(d,b,true);
a.onreadystatechange=c
}function XH_XmlHttpSetRequestHeader(a,b,c){a.setRequestHeader(b,c)
}function XH_XmlHttpSend(a,b){try{a.send(b)
}catch(c){log("XMLHttpSend failed "+c.toString()+"<br>"+c.stack);
throw c
}}function XH_XmlHttpAbort(a){SafeTimeout(window,function(){a.onreadystatechange=function(){}
},0);
if(a.readyState<XML_READY_STATE_COMPLETED){a.abort()
}}!function(d,c){"object"==typeof exports&&"undefined"!=typeof module?module.exports=c():"function"==typeof define&&define.amd?define(c):d.moment=c()
}(this,function(){function fh(){return bq.apply(null,arguments)
}function e9(b){bq=b
}function e7(b){return b instanceof Array||"[object Array]"===Object.prototype.toString.call(b)
}function e5(b){return null!=b&&"[object Object]"===Object.prototype.toString.call(b)
}function e3(d){var c;
for(c in d){return !1
}return !0
}function e1(b){return void 0===b
}function e0(b){return"number"==typeof b||"[object Number]"===Object.prototype.toString.call(b)
}function eY(b){return b instanceof Date||"[object Date]"===Object.prototype.toString.call(b)
}function eX(f,e){var h,g=[];
for(h=0;
h<f.length;
++h){g.push(e(f[h],h))
}return g
}function eW(d,c){return Object.prototype.hasOwnProperty.call(d,c)
}function eV(e,d){for(var f in d){eW(d,f)&&(e[f]=d[f])
}return eW(d,"toString")&&(e.toString=d.toString),eW(d,"valueOf")&&(e.valueOf=d.valueOf),e
}function eU(f,e,h,g){return bs(f,e,h,g,!0).utc()
}function eT(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}
}function eS(b){return null==b._pf&&(b._pf=eT()),b._pf
}function eR(f){if(null==f._isValid){var e=eS(f),h=aY.call(e.parsedDateParts,function(b){return null!=b
}),g=!isNaN(f._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&h);
if(f._strict&&(g=g&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(f)){return g
}f._isValid=g
}return f._isValid
}function eQ(d){var c=eU(NaN);
return null!=d?eV(eS(c),d):eS(c).userInvalidated=!0,c
}function eP(g,f){var j,i,h;
if(e1(f._isAMomentObject)||(g._isAMomentObject=f._isAMomentObject),e1(f._i)||(g._i=f._i),e1(f._f)||(g._f=f._f),e1(f._l)||(g._l=f._l),e1(f._strict)||(g._strict=f._strict),e1(f._tzm)||(g._tzm=f._tzm),e1(f._isUTC)||(g._isUTC=f._isUTC),e1(f._offset)||(g._offset=f._offset),e1(f._pf)||(g._pf=eS(f)),e1(f._locale)||(g._locale=f._locale),aN.length>0){for(j=0;
j<aN.length;
j++){i=aN[j],h=f[i],e1(h)||(g[i]=h)
}}return g
}function eO(a){eP(this,a),this._d=new Date(null!=a._d?a._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),aC===!1&&(aC=!0,fh.updateOffset(this),aC=!1)
}function eN(b){return b instanceof eO||null!=b&&null!=b._isAMomentObject
}function eM(b){return b<0?Math.ceil(b)||0:Math.floor(b)
}function eL(e){var d=+e,f=0;
return 0!==d&&isFinite(d)&&(f=eM(d)),f
}function eK(i,h,n){var m,l=Math.min(i.length,h.length),k=Math.abs(i.length-h.length),j=0;
for(m=0;
m<l;
m++){(n&&i[m]!==h[m]||!n&&eL(i[m])!==eL(h[m]))&&j++
}return j+k
}function eJ(a){fh.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)
}function eI(a,f){var e=!0;
return eV(function(){if(null!=fh.deprecationHandler&&fh.deprecationHandler(null,a),e){for(var i,d=[],c=0;
c<arguments.length;
c++){if(i="","object"==typeof arguments[c]){i+="\n["+c+"] ";
for(var b in arguments[0]){i+=b+": "+arguments[0][b]+", "
}i=i.slice(0,-2)
}else{i=arguments[c]
}d.push(i)
}eJ(a+"\nArguments: "+Array.prototype.slice.call(d).join("")+"\n"+(new Error).stack),e=!1
}return f.apply(this,arguments)
},f)
}function eG(a,d){null!=fh.deprecationHandler&&fh.deprecationHandler(a,d),al[a]||(eJ(d),al[a]=!0)
}function eE(b){return b instanceof Function||"[object Function]"===Object.prototype.toString.call(b)
}function fT(e){var d,f;
for(f in e){d=e[f],eE(d)?this[f]=d:this["_"+f]=d
}this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)
}function fS(f,d){var h,g=eV({},f);
for(h in d){eW(d,h)&&(e5(f[h])&&e5(d[h])?(g[h]={},eV(g[h],f[h]),eV(g[h],d[h])):null!=d[h]?g[h]=d[h]:delete g[h])
}for(h in f){eW(f,h)&&!eW(d,h)&&e5(f[h])&&(g[h]=eV({},g[h]))
}return g
}function fQ(b){null!=b&&this.set(b)
}function fO(f,e,h){var g=this._calendar[f]||this._calendar.sameElse;
return eE(g)?g.call(e,h):g
}function fM(e){var d=this._longDateFormat[e],f=this._longDateFormat[e.toUpperCase()];
return d||!f?d:(this._longDateFormat[e]=f.replace(/MMMM|MM|DD|dddd/g,function(b){return b.slice(1)
}),this._longDateFormat[e])
}function fK(){return this._invalidDate
}function fI(b){return this._ordinal.replace("%d",b)
}function fH(g,f,j,i){var h=this._relativeTime[j];
return eE(h)?h(g,f,j,i):h.replace(/%d/i,g)
}function fF(e,d){var f=this._relativeTime[e>0?"future":"past"];
return eE(f)?f(d):f.replace(/%s/i,d)
}function fE(e,d){var f=e.toLowerCase();
gi[f]=gi[f+"s"]=gi[d]=e
}function fD(b){return"string"==typeof b?gi[b]||gi[b.toLowerCase()]:void 0
}function fC(f){var e,h,g={};
for(h in f){eW(f,h)&&(e=fD(h),e&&(g[e]=f[h]))
}return g
}function fB(d,c){fV[d]=c
}function fA(e){var d=[];
for(var f in e){d.push({unit:f,priority:fV[f]})
}return d.sort(function(g,c){return g.priority-c.priority
}),d
}function fz(a,d){return function(b){return null!=b?(fx(this,a,b),fh.updateOffset(this,d),this):fy(this,a)
}
}function fy(d,c){return d.isValid()?d._d["get"+(d._isUTC?"UTC":"")+c]():NaN
}function fx(e,d,f){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+d](f)
}function fw(b){return b=fD(b),eE(this[b])?this[b]():this
}function fv(f,e){if("object"==typeof f){f=fC(f);
for(var h=fA(f),g=0;
g<h.length;
g++){this[h[g].unit](f[h[g].unit])
}}else{if(f=fD(f),eE(this[f])){return this[f](e)
}}return this
}function fu(h,g,l){var k=""+Math.abs(h),j=g-k.length,i=h>=0;
return(i?l?"+":"":"-")+Math.pow(10,Math.max(0,j)).toString().substr(1)+k
}function ft(g,f,j,i){var h=i;
"string"==typeof i&&(h=function(){return this[i]()
}),g&&(eg[g]=h),f&&(eg[f[0]]=function(){return fu(h.apply(this,arguments),f[1],f[2])
}),j&&(eg[j]=function(){return this.localeData().ordinal(h.apply(this,arguments),g)
})
}function fs(b){return b.match(/\[[\s\S]/)?b.replace(/^\[|\]$/g,""):b.replace(/\\/g,"")
}function fr(f){var e,h,g=f.match(fk);
for(e=0,h=g.length;
e<h;
e++){eg[g[e]]?g[e]=eg[g[e]]:g[e]=fs(g[e])
}return function(a){var d,c="";
for(d=0;
d<h;
d++){c+=eE(g[d])?g[d].call(a,f):g[d]
}return c
}
}function fq(d,c){return d.isValid()?(c=fp(c,d.localeData()),er[c]=er[c]||fr(c),er[c](d)):d.localeData().invalidDate()
}function fp(f,e){function h(b){return e.longDateFormat(b)||b
}var g=5;
for(eC.lastIndex=0;
g>=0&&eC.test(f);
){f=f.replace(eC,h),eC.lastIndex=0,g-=1
}return f
}function fn(e,d,f){e2[e]=eE(d)?d:function(b,c){return b&&f?f:d
}
}function f9(d,c){return eW(e2,d)?e2[d](c._strict,c._locale):new RegExp(fi(d))
}function fi(b){return gg(b.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(g,f,j,i,h){return f||j||i||h
}))
}function gg(b){return b.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
}function fR(f,e){var h,g=e;
for("string"==typeof f&&(f=[f]),e0(e)&&(g=function(b,d){d[e]=eL(b)
}),h=0;
h<f.length;
h++){ew[f[h]]=g
}}function fg(d,c){fR(d,function(b,h,g,f){g._w=g._w||{},c(b,g._w,g,f)
})
}function eA(e,d,f){null!=d&&eW(ew,e)&&ew[e](d,f._a,f,e)
}function ep(d,c){return new Date(Date.UTC(d,c+1,0)).getUTCDate()
}function d8(d,c){return d?e7(this._months)?this._months[d.month()]:this._months[(this._months.isFormat||ci).test(c)?"format":"standalone"][d.month()]:e7(this._months)?this._months:this._months.standalone
}function dX(d,c){return d?e7(this._monthsShort)?this._monthsShort[d.month()]:this._monthsShort[ci.test(c)?"format":"standalone"][d.month()]:e7(this._monthsShort)?this._monthsShort:this._monthsShort.standalone
}function dM(i,h,n){var m,l,k,j=i.toLocaleLowerCase();
if(!this._monthsParse){for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],m=0;
m<12;
++m){k=eU([2000,m]),this._shortMonthsParse[m]=this.monthsShort(k,"").toLocaleLowerCase(),this._longMonthsParse[m]=this.months(k,"").toLocaleLowerCase()
}}return n?"MMM"===h?(l=cy.call(this._shortMonthsParse,j),l!==-1?l:null):(l=cy.call(this._longMonthsParse,j),l!==-1?l:null):"MMM"===h?(l=cy.call(this._shortMonthsParse,j),l!==-1?l:(l=cy.call(this._longMonthsParse,j),l!==-1?l:null)):(l=cy.call(this._longMonthsParse,j),l!==-1?l:(l=cy.call(this._shortMonthsParse,j),l!==-1?l:null))
}function dB(h,g,l){var k,j,i;
if(this._monthsParseExact){return dM.call(this,h,g,l)
}for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),k=0;
k<12;
k++){if(j=eU([2000,k]),l&&!this._longMonthsParse[k]&&(this._longMonthsParse[k]=new RegExp("^"+this.months(j,"").replace(".","")+"$","i"),this._shortMonthsParse[k]=new RegExp("^"+this.monthsShort(j,"").replace(".","")+"$","i")),l||this._monthsParse[k]||(i="^"+this.months(j,"")+"|^"+this.monthsShort(j,""),this._monthsParse[k]=new RegExp(i.replace(".",""),"i")),l&&"MMMM"===g&&this._longMonthsParse[k].test(h)){return k
}if(l&&"MMM"===g&&this._shortMonthsParse[k].test(h)){return k
}if(!l&&this._monthsParse[k].test(h)){return k
}}}function dr(e,d){var f;
if(!e.isValid()){return e
}if("string"==typeof d){if(/^\d+$/.test(d)){d=eL(d)
}else{if(d=e.localeData().monthsParse(d),!e0(d)){return e
}}}return f=Math.min(e.date(),ep(e.year(),d)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](d,f),e
}function c9(a){return null!=a?(dr(this,a),fh.updateOffset(this,!0),this):fy(this,"Month")
}function cY(){return ep(this.year(),this.month())
}function cN(b){return this._monthsParseExact?(eW(this,"_monthsRegex")||cm.call(this),b?this._monthsShortStrictRegex:this._monthsShortRegex):(eW(this,"_monthsShortRegex")||(this._monthsShortRegex=bF),this._monthsShortStrictRegex&&b?this._monthsShortStrictRegex:this._monthsShortRegex)
}function cC(b){return this._monthsParseExact?(eW(this,"_monthsRegex")||cm.call(this),b?this._monthsStrictRegex:this._monthsRegex):(eW(this,"_monthsRegex")||(this._monthsRegex=bp),this._monthsStrictRegex&&b?this._monthsStrictRegex:this._monthsRegex)
}function cm(){function h(d,c){return c.length-d.length
}var g,l,k=[],j=[],i=[];
for(g=0;
g<12;
g++){l=eU([2000,g]),k.push(this.monthsShort(l,"")),j.push(this.months(l,"")),i.push(this.months(l,"")),i.push(this.monthsShort(l,""))
}for(k.sort(h),j.sort(h),i.sort(h),g=0;
g<12;
g++){k[g]=gg(k[g]),j[g]=gg(j[g])
}for(g=0;
g<24;
g++){i[g]=gg(i[g])
}this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+j.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+k.join("|")+")","i")
}function b5(b){return bU(b)?366:365
}function bU(b){return b%4===0&&b%100!==0||b%400===0
}function bJ(){return bU(this.year())
}function bt(j,i,p,o,n,m,l){var k=new Date(j,i,p,o,n,m,l);
return j<100&&j>=0&&isFinite(k.getFullYear())&&k.setFullYear(j),k
}function bi(d){var c=new Date(Date.UTC.apply(null,arguments));
return d<100&&d>=0&&isFinite(c.getUTCFullYear())&&c.setUTCFullYear(d),c
}function a1(g,f,j){var i=7+f-j,h=(7+bi(g,0,i).getUTCDay()-f)%7;
return -h+i-1
}function aQ(t,s,r,q,p){var o,n,m=(7+r-q)%7,l=a1(t,q,p),k=1+7*(s-1)+m+l;
return k<=0?(o=t-1,n=b5(o)+k):k>b5(t)?(o=t+1,n=k-b5(t)):(o=t,n=k),{year:o,dayOfYear:n}
}function aF(i,h,n){var m,l,k=a1(i.year(),h,n),j=Math.floor((i.dayOfYear()-k-1)/7)+1;
return j<1?(l=i.year()-1,m=j+ao(l,h,n)):j>ao(i.year(),h,n)?(m=j-ao(i.year(),h,n),l=i.year()+1):(l=i.year(),m=j),{week:m,year:l}
}function ao(g,f,j){var i=a1(g,f,j),h=a1(g+1,f,j);
return(b5(g)-i+h)/7
}function gq(b){return aF(b,this._week.dow,this._week.doy).week
}function f3(){return this._week.dow
}function bD(){return this._week.doy
}function bn(d){var c=this.localeData().week(this);
return null==d?c:this.add(7*(d-c),"d")
}function a6(d){var c=aF(this,1,4).week;
return null==d?c:this.add(7*(d-c),"d")
}function aV(d,c){return"string"!=typeof d?d:isNaN(d)?(d=c.weekdaysParse(d),"number"==typeof d?d:null):parseInt(d,10)
}function aK(d,c){return"string"==typeof d?c.weekdaysParse(d)%7||7:isNaN(d)?null:d
}function az(d,c){return d?e7(this._weekdays)?this._weekdays[d.day()]:this._weekdays[this._weekdays.isFormat.test(c)?"format":"standalone"][d.day()]:e7(this._weekdays)?this._weekdays:this._weekdays.standalone
}function ai(b){return b?this._weekdaysShort[b.day()]:this._weekdaysShort
}function gl(b){return b?this._weekdaysMin[b.day()]:this._weekdaysMin
}function fY(i,h,n){var m,l,k,j=i.toLocaleLowerCase();
if(!this._weekdaysParse){for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],m=0;
m<7;
++m){k=eU([2000,1]).day(m),this._minWeekdaysParse[m]=this.weekdaysMin(k,"").toLocaleLowerCase(),this._shortWeekdaysParse[m]=this.weekdaysShort(k,"").toLocaleLowerCase(),this._weekdaysParse[m]=this.weekdays(k,"").toLocaleLowerCase()
}}return n?"dddd"===h?(l=cy.call(this._weekdaysParse,j),l!==-1?l:null):"ddd"===h?(l=cy.call(this._shortWeekdaysParse,j),l!==-1?l:null):(l=cy.call(this._minWeekdaysParse,j),l!==-1?l:null):"dddd"===h?(l=cy.call(this._weekdaysParse,j),l!==-1?l:(l=cy.call(this._shortWeekdaysParse,j),l!==-1?l:(l=cy.call(this._minWeekdaysParse,j),l!==-1?l:null))):"ddd"===h?(l=cy.call(this._shortWeekdaysParse,j),l!==-1?l:(l=cy.call(this._weekdaysParse,j),l!==-1?l:(l=cy.call(this._minWeekdaysParse,j),l!==-1?l:null))):(l=cy.call(this._minWeekdaysParse,j),l!==-1?l:(l=cy.call(this._weekdaysParse,j),l!==-1?l:(l=cy.call(this._shortWeekdaysParse,j),l!==-1?l:null)))
}function fo(h,g,l){var k,j,i;
if(this._weekdaysParseExact){return fY.call(this,h,g,l)
}for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),k=0;
k<7;
k++){if(j=eU([2000,1]).day(k),l&&!this._fullWeekdaysParse[k]&&(this._fullWeekdaysParse[k]=new RegExp("^"+this.weekdays(j,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[k]=new RegExp("^"+this.weekdaysShort(j,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[k]=new RegExp("^"+this.weekdaysMin(j,"").replace(".",".?")+"$","i")),this._weekdaysParse[k]||(i="^"+this.weekdays(j,"")+"|^"+this.weekdaysShort(j,"")+"|^"+this.weekdaysMin(j,""),this._weekdaysParse[k]=new RegExp(i.replace(".",""),"i")),l&&"dddd"===g&&this._fullWeekdaysParse[k].test(h)){return k
}if(l&&"ddd"===g&&this._shortWeekdaysParse[k].test(h)){return k
}if(l&&"dd"===g&&this._minWeekdaysParse[k].test(h)){return k
}if(!l&&this._weekdaysParse[k].test(h)){return k
}}}function eH(d){if(!this.isValid()){return null!=d?this:NaN
}var c=this._isUTC?this._d.getUTCDay():this._d.getDay();
return null!=d?(d=aV(d,this.localeData()),this.add(d-c,"d")):c
}function eu(d){if(!this.isValid()){return null!=d?this:NaN
}var c=(this.day()+7-this.localeData()._week.dow)%7;
return null==d?c:this.add(d-c,"d")
}function ej(d){if(!this.isValid()){return null!=d?this:NaN
}if(null!=d){var c=aK(d,this.localeData());
return this.day(this.day()%7?c:c-7)
}return this.day()||7
}function d2(b){return this._weekdaysParseExact?(eW(this,"_weekdaysRegex")||dw.call(this),b?this._weekdaysStrictRegex:this._weekdaysRegex):(eW(this,"_weekdaysRegex")||(this._weekdaysRegex=gm),this._weekdaysStrictRegex&&b?this._weekdaysStrictRegex:this._weekdaysRegex)
}function dR(b){return this._weekdaysParseExact?(eW(this,"_weekdaysRegex")||dw.call(this),b?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(eW(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=fZ),this._weekdaysShortStrictRegex&&b?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)
}function dG(b){return this._weekdaysParseExact?(eW(this,"_weekdaysRegex")||dw.call(this),b?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(eW(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=bz),this._weekdaysMinStrictRegex&&b?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)
}function dw(){function t(d,c){return c.length-d.length
}var s,r,q,p,o,n=[],m=[],l=[],k=[];
for(s=0;
s<7;
s++){r=eU([2000,1]).day(s),q=this.weekdaysMin(r,""),p=this.weekdaysShort(r,""),o=this.weekdays(r,""),n.push(q),m.push(p),l.push(o),k.push(q),k.push(p),k.push(o)
}for(n.sort(t),m.sort(t),l.sort(t),k.sort(t),s=0;
s<7;
s++){m[s]=gg(m[s]),l[s]=gg(l[s]),k[s]=gg(k[s])
}this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+m.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")
}function dk(){return this.hours()%12||12
}function c3(){return this.hours()||24
}function cS(d,c){ft(d,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),c)
})
}function cH(d,c){return c._meridiemParse
}function cr(b){return"p"===(b+"").toLowerCase().charAt(0)
}function cg(e,d,f){return e>11?f?"pm":"PM":f?"am":"AM"
}function bZ(b){return b?b.toLowerCase().replace("_","-"):b
}function bO(h){for(var g,l,k,j,i=0;
i<h.length;
){for(j=bZ(h[i]).split("-"),g=j.length,l=bZ(h[i+1]),l=l?l.split("-"):null;
g>0;
){if(k=by(j.slice(0,g).join("-"))){return k
}if(l&&l.length>=g&&eK(j,l,!0)>=g-1){break
}g--
}i++
}return null
}function by(d){var c=null;
if(!av[d]&&"undefined"!=typeof module&&module&&module.exports){try{c=bj._abbr,require("./locale/"+d),cw(c)
}catch(d){}}return av[d]
}function cw(e,d){var f;
return e&&(f=e1(d)?fP(e):au(e,d),f&&(bj=f)),bj._abbr
}function au(e,d){if(null!==d){var f=aG;
if(d.abbr=e,null!=av[e]){eG("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),f=av[e]._config
}else{if(null!=d.parentLocale){if(null==av[d.parentLocale]){return gr[d.parentLocale]||(gr[d.parentLocale]=[]),gr[d.parentLocale].push({name:e,config:d}),null
}f=av[d.parentLocale]._config
}}return av[e]=new fQ(fS(f,d)),gr[e]&&gr[e].forEach(function(b){au(b.name,b.config)
}),cw(e),av[e]
}return delete av[e],null
}function f8(f,e){if(null!=e){var h,g=aG;
null!=av[f]&&(g=av[f]._config),e=fS(g,e),h=new fQ(e),h.parentLocale=av[f],av[f]=h,cw(f)
}else{null!=av[f]&&(null!=av[f].parentLocale?av[f]=av[f].parentLocale:null!=av[f]&&delete av[f])
}return av[f]
}function fP(d){var c;
if(d&&d._locale&&d._locale._abbr&&(d=d._locale._abbr),!d){return bj
}if(!e7(d)){if(c=by(d)){return c
}d=[d]
}return bO(d)
}function e8(){return bA(av)
}function ez(e){var d,f=e._a;
return f&&eS(e).overflow===-2&&(d=f[d4]<0||f[d4]>11?d4:f[dT]<1||f[dT]>ep(f[el],f[d4])?dT:f[dI]<0||f[dI]>24||24===f[dI]&&(0!==f[dx]||0!==f[dm]||0!==f[c5])?dI:f[dx]<0||f[dx]>59?dx:f[dm]<0||f[dm]>59?dm:f[c5]<0||f[c5]>999?c5:-1,eS(e)._overflowDayOfYear&&(d<el||d>dT)&&(d=dT),eS(e)._overflowWeeks&&d===-1&&(d=cU),eS(e)._overflowWeekday&&d===-1&&(d=cJ),eS(e).overflow=d),e
}function eo(r){var q,p,o,n,m,l,k=r._i,j=gh.exec(k)||fU.exec(k);
if(j){for(eS(r).iso=!0,q=0,p=eB.length;
q<p;
q++){if(eB[q][1].exec(j[1])){n=eB[q][0],o=eB[q][2]!==!1;
break
}}if(null==n){return void (r._isValid=!1)
}if(j[3]){for(q=0,p=eq.length;
q<p;
q++){if(eq[q][1].exec(j[3])){m=(j[2]||" ")+eq[q][0];
break
}}if(null==m){return void (r._isValid=!1)
}}if(!o&&null!=m){return void (r._isValid=!1)
}if(j[4]){if(!fj.exec(j[4])){return void (r._isValid=!1)
}l="Z"
}r._f=n+(m||"")+(l||""),cX(r)
}else{r._isValid=!1
}}function d7(z){var y,x,w,v,u,t,s,r,q={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},p="YXWVUTSRQPONZABCDEFGHIKLM";
if(y=z._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),x=dY.exec(y)){if(w=x[1]?"ddd"+(5===x[1].length?", ":" "):"",v="D MMM "+(x[2].length>10?"YYYY ":"YY "),u="HH:mm"+(x[4]?":ss":""),x[1]){var o=new Date(x[2]),n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][o.getDay()];
if(x[1].substr(0,3)!==n){return eS(z).weekdayMismatch=!0,void (z._isValid=!1)
}}switch(x[5].length){case 2:0===r?s=" +0000":(r=p.indexOf(x[5][1].toUpperCase())-12,s=(r<0?" -":" +")+(""+r).replace(/^-?/,"0").match(/..$/)[0]+"00");
break;
case 4:s=q[x[5]];
break;
default:s=q[" GMT"]
}x[5]=s,z._i=x.splice(1).join(""),t=" ZZ",z._f=w+v+u+t,cX(z),eS(z).rfc2822=!0
}else{z._isValid=!1
}}function dW(a){var d=d9.exec(a._i);
return null!==d?void (a._d=new Date(+d[1])):(eo(a),void (a._isValid===!1&&(delete a._isValid,d7(a),a._isValid===!1&&(delete a._isValid,fh.createFromInputFallback(a)))))
}function dL(e,d,f){return null!=e?e:null!=d?d:f
}function dA(a){var d=new Date(fh.now());
return a._useUTC?[d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()]:[d.getFullYear(),d.getMonth(),d.getDate()]
}function dq(h){var g,l,k,j,i=[];
if(!h._d){for(k=dA(h),h._w&&null==h._a[dT]&&null==h._a[d4]&&c8(h),null!=h._dayOfYear&&(j=dL(h._a[el],k[el]),(h._dayOfYear>b5(j)||0===h._dayOfYear)&&(eS(h)._overflowDayOfYear=!0),l=bi(j,0,h._dayOfYear),h._a[d4]=l.getUTCMonth(),h._a[dT]=l.getUTCDate()),g=0;
g<3&&null==h._a[g];
++g){h._a[g]=i[g]=k[g]
}for(;
g<7;
g++){h._a[g]=i[g]=null==h._a[g]?2===g?1:0:h._a[g]
}24===h._a[dI]&&0===h._a[dx]&&0===h._a[dm]&&0===h._a[c5]&&(h._nextDay=!0,h._a[dI]=0),h._d=(h._useUTC?bi:bt).apply(null,i),null!=h._tzm&&h._d.setUTCMinutes(h._d.getUTCMinutes()-h._tzm),h._nextDay&&(h._a[dI]=24)
}}function c8(t){var s,r,q,p,o,n,m,l;
if(s=t._w,null!=s.GG||null!=s.W||null!=s.E){o=1,n=4,r=dL(s.GG,t._a[el],aF(bh(),1,4).year),q=dL(s.W,1),p=dL(s.E,1),(p<1||p>7)&&(l=!0)
}else{o=t._locale._week.dow,n=t._locale._week.doy;
var k=aF(bh(),o,n);
r=dL(s.gg,t._a[el],k.year),q=dL(s.w,k.week),null!=s.d?(p=s.d,(p<0||p>6)&&(l=!0)):null!=s.e?(p=s.e+o,(s.e<0||s.e>6)&&(l=!0)):p=o
}q<1||q>ao(r,o,n)?eS(t)._overflowWeeks=!0:null!=l?eS(t)._overflowWeekday=!0:(m=aQ(r,q,p,o,n),t._a[el]=m.year,t._dayOfYear=m.dayOfYear)
}function cX(r){if(r._f===fh.ISO_8601){return void eo(r)
}if(r._f===fh.RFC_2822){return void d7(r)
}r._a=[],eS(r).empty=!0;
var q,p,o,n,m,l=""+r._i,k=l.length,a=0;
for(o=fp(r._f,r._locale).match(fk)||[],q=0;
q<o.length;
q++){n=o[q],p=(l.match(f9(n,r))||[])[0],p&&(m=l.substr(0,l.indexOf(p)),m.length>0&&eS(r).unusedInput.push(m),l=l.slice(l.indexOf(p)+p.length),a+=p.length),eg[n]?(p?eS(r).empty=!1:eS(r).unusedTokens.push(n),eA(n,p,r)):r._strict&&!p&&eS(r).unusedTokens.push(n)
}eS(r).charsLeftOver=k-a,l.length>0&&eS(r).unusedInput.push(l),r._a[dI]<=12&&eS(r).bigHour===!0&&r._a[dI]>0&&(eS(r).bigHour=void 0),eS(r).parsedDateParts=r._a.slice(0),eS(r).meridiem=r._meridiem,r._a[dI]=cM(r._locale,r._a[dI],r._meridiem),dq(r),ez(r)
}function cM(f,e,h){var g;
return null==h?e:null!=f.meridiemHour?f.meridiemHour(e,h):null!=f.isPM?(g=f.isPM(h),g&&e<12&&(e+=12),g||12!==e||(e=0),e):e
}function cB(h){var g,l,k,j,i;
if(0===h._f.length){return eS(h).invalidFormat=!0,void (h._d=new Date(NaN))
}for(j=0;
j<h._f.length;
j++){i=0,g=eP({},h),null!=h._useUTC&&(g._useUTC=h._useUTC),g._f=h._f[j],cX(g),eR(g)&&(i+=eS(g).charsLeftOver,i+=10*eS(g).unusedTokens.length,eS(g).score=i,(null==k||i<k)&&(k=i,l=g))
}eV(h,l||g)
}function cl(d){if(!d._d){var c=fC(d._i);
d._a=eX([c.year,c.month,c.day||c.date,c.hour,c.minute,c.second,c.millisecond],function(b){return b&&parseInt(b,10)
}),dq(d)
}}function b4(d){var c=new eO(ez(bT(d)));
return c._nextDay&&(c.add(1,"d"),c._nextDay=void 0),c
}function bT(e){var c=e._i,f=e._f;
return e._locale=e._locale||fP(e._l),null===c||void 0===f&&""===c?eQ({nullInput:!0}):("string"==typeof c&&(e._i=c=e._locale.preparse(c)),eN(c)?new eO(ez(c)):(eY(c)?e._d=c:e7(f)?cB(e):f?cX(e):bI(e),eR(e)||(e._d=null),e))
}function bI(a){var c=a._i;
e1(c)?a._d=new Date(fh.now()):eY(c)?a._d=new Date(c.valueOf()):"string"==typeof c?dW(a):e7(c)?(a._a=eX(c.slice(0),function(b){return parseInt(b,10)
}),dq(a)):e5(c)?cl(a):e0(c)?a._d=new Date(c):fh.createFromInputFallback(a)
}function bs(d,c,l,k,j){var e={};
return l!==!0&&l!==!1||(k=l,l=void 0),(e5(d)&&e3(d)||e7(d)&&0===d.length)&&(d=void 0),e._isAMomentObject=!0,e._useUTC=e._isUTC=j,e._l=l,e._i=d,e._f=c,e._strict=k,b4(e)
}function bh(f,e,h,g){return bs(f,e,h,g,!1)
}function a0(f,c){var h,g;
if(1===c.length&&e7(c[0])&&(c=c[0]),!c.length){return bh()
}for(h=c[0],g=1;
g<c.length;
++g){c[g].isValid()&&!c[g][f](h)||(h=c[g])
}return h
}function aP(){var b=[].slice.call(arguments,0);
return a0("isBefore",b)
}function aE(){var b=[].slice.call(arguments,0);
return a0("isAfter",b)
}function an(f){for(var e in f){if(dg.indexOf(e)===-1||null!=f[e]&&isNaN(f[e])){return !1
}}for(var h=!1,g=0;
g<dg.length;
++g){if(f[dg[g]]){if(h){return !1
}parseFloat(f[dg[g]])!==eL(f[dg[g]])&&(h=!0)
}}return !0
}function gp(){return this._isValid
}function f2(){return c2(NaN)
}function bC(v){var u=fC(v),t=u.year||0,s=u.quarter||0,r=u.month||0,q=u.week||0,p=u.day||0,o=u.hour||0,n=u.minute||0,m=u.second||0,l=u.millisecond||0;
this._isValid=an(u),this._milliseconds=+l+1000*m+60000*n+1000*o*60*60,this._days=+p+7*q,this._months=+r+3*s+12*t,this._data={},this._locale=fP(),this._bubble()
}function bm(b){return b instanceof bC
}function a5(b){return b<0?Math.round(-1*b)*-1:Math.round(b)
}function aU(d,c){ft(d,0,0,function(){var b=this.utcOffset(),e="+";
return b<0&&(b=-b,e="-"),e+fu(~~(b/60),2)+c+fu(~~b%60,2)
})
}function aJ(h,g){var l=(g||"").match(h);
if(null===l){return null
}var k=l[l.length-1]||[],j=(k+"").match(cZ)||["-",0,0],i=+(60*j[1])+eL(j[2]);
return 0===i?0:"+"===j[0]?i:-i
}function ay(a,h){var g,f;
return h._isUTC?(g=h.clone(),f=(eN(a)||eY(a)?a.valueOf():bh(a).valueOf())-g.valueOf(),g._d.setTime(g._d.valueOf()+f),fh.updateOffset(g,!1),g):bh(a).local()
}function ah(b){return 15*-Math.round(b._d.getTimezoneOffset()/15)
}function gk(a,j,i){var h,g=this._offset||0;
if(!this.isValid()){return null!=a?this:NaN
}if(null!=a){if("string"==typeof a){if(a=aJ(aq,a),null===a){return this
}}else{Math.abs(a)<16&&!i&&(a=60*a)
}return !this._isUTC&&j&&(h=ah(this)),this._offset=a,this._isUTC=!0,null!=h&&this.add(h,"m"),g!==a&&(!j||this._changeInProgress?bY(this,c2(a-g,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,fh.updateOffset(this,!0),this._changeInProgress=null)),this
}return this._isUTC?g:ah(this)
}function fX(d,c){return null!=d?("string"!=typeof d&&(d=-d),this.utcOffset(d,c),this):-this.utcOffset()
}function fm(b){return this.utcOffset(0,b)
}function eF(b){return this._isUTC&&(this.utcOffset(0,b),this._isUTC=!1,b&&this.subtract(ah(this),"m")),this
}function et(){if(null!=this._tzm){this.utcOffset(this._tzm,!1,!0)
}else{if("string"==typeof this._i){var b=aJ(ct,this._i);
null!=b?this.utcOffset(b):this.utcOffset(0,!0)
}}return this
}function ei(b){return !!this.isValid()&&(b=b?bh(b).utcOffset():0,(this.utcOffset()-b)%60===0)
}function d1(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()
}function dQ(){if(!e1(this._isDSTShifted)){return this._isDSTShifted
}var d={};
if(eP(d,this),d=bT(d),d._a){var c=d._isUTC?eU(d._a):bh(d._a);
this._isDSTShifted=this.isValid()&&eK(d._a,c.toArray())>0
}else{this._isDSTShifted=!1
}return this._isDSTShifted
}function dF(){return !!this.isValid()&&!this._isUTC
}function dv(){return !!this.isValid()&&this._isUTC
}function dj(){return !!this.isValid()&&(this._isUTC&&0===this._offset)
}function c2(i,g){var n,m,l,k=i,j=null;
return bm(i)?k={ms:i._milliseconds,d:i._days,M:i._months}:e0(i)?(k={},g?k[g]=i:k.milliseconds=i):(j=cO.exec(i))?(n="-"===j[1]?-1:1,k={y:0,d:eL(j[dT])*n,h:eL(j[dI])*n,m:eL(j[dx])*n,s:eL(j[dm])*n,ms:eL(a5(1000*j[c5]))*n}):(j=cD.exec(i))?(n="-"===j[1]?-1:1,k={y:cR(j[2],n),M:cR(j[3],n),w:cR(j[4],n),d:cR(j[5],n),h:cR(j[6],n),m:cR(j[7],n),s:cR(j[8],n)}):null==k?k={}:"object"==typeof k&&("from" in k||"to" in k)&&(l=cq(bh(k.from),bh(k.to)),k={},k.ms=l.milliseconds,k.M=l.months),m=new bC(k),bm(i)&&eW(i,"_locale")&&(m._locale=i._locale),m
}function cR(e,d){var f=e&&parseFloat(e.replace(",","."));
return(isNaN(f)?0:f)*d
}function cG(e,d){var f={milliseconds:0,months:0};
return f.months=d.month()-e.month()+12*(d.year()-e.year()),e.clone().add(f.months,"M").isAfter(d)&&--f.months,f.milliseconds=+d-+e.clone().add(f.months,"M"),f
}function cq(e,d){var f;
return e.isValid()&&d.isValid()?(d=ay(d,e),e.isBefore(d)?f=cG(e,d):(f=cG(d,e),f.milliseconds=-f.milliseconds,f.months=-f.months),f):{milliseconds:0,months:0}
}function b9(d,c){return function(h,g){var b,a;
return null===g||isNaN(+g)||(eG(c,"moment()."+c+"(period, number) is deprecated. Please use moment()."+c+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=h,h=g,g=a),h="string"==typeof h?+h:h,b=c2(h,g),bY(this,b,d),this
}
}function bY(a,n,m,l){var k=n._milliseconds,j=a5(n._days),i=a5(n._months);
a.isValid()&&(l=null==l||l,k&&a._d.setTime(a._d.valueOf()+k*m),j&&fx(a,"Date",fy(a,"Date")+j*m),i&&dr(a,fy(a,"Month")+i*m),l&&fh.updateOffset(a,j||i))
}function bN(e,d){var f=e.diff(d,"days",!0);
return f<-6?"sameElse":f<-1?"lastWeek":f<0?"lastDay":f<1?"sameDay":f<2?"nextDay":f<7?"nextWeek":"sameElse"
}function bx(a,l){var k=a||bh(),j=ay(k,this).startOf("day"),i=fh.calendarFormat(this,j)||"sameElse",h=l&&(eE(l[i])?l[i].call(this,k):l[i]);
return this.format(h||this.localeData().calendar(i,this,bh(k)))
}function cv(){return new eO(this)
}function at(e,d){var f=eN(e)?e:bh(e);
return !(!this.isValid()||!f.isValid())&&(d=fD(e1(d)?"millisecond":d),"millisecond"===d?this.valueOf()>f.valueOf():f.valueOf()<this.clone().startOf(d).valueOf())
}function f7(e,d){var f=eN(e)?e:bh(e);
return !(!this.isValid()||!f.isValid())&&(d=fD(e1(d)?"millisecond":d),"millisecond"===d?this.valueOf()<f.valueOf():this.clone().endOf(d).valueOf()<f.valueOf())
}function fN(f,e,h,g){return g=g||"()",("("===g[0]?this.isAfter(f,h):!this.isBefore(f,h))&&(")"===g[1]?this.isBefore(e,h):!this.isAfter(e,h))
}function e6(f,e){var h,g=eN(f)?f:bh(f);
return !(!this.isValid()||!g.isValid())&&(e=fD(e||"millisecond"),"millisecond"===e?this.valueOf()===g.valueOf():(h=g.valueOf(),this.clone().startOf(e).valueOf()<=h&&h<=this.clone().endOf(e).valueOf()))
}function ey(d,c){return this.isSame(d,c)||this.isAfter(d,c)
}function en(d,c){return this.isSame(d,c)||this.isBefore(d,c)
}function d6(i,h,n){var m,l,k,j;
return this.isValid()?(m=ay(i,this),m.isValid()?(l=60000*(m.utcOffset()-this.utcOffset()),h=fD(h),"year"===h||"month"===h||"quarter"===h?(j=dV(this,m),"quarter"===h?j/=3:"year"===h&&(j/=12)):(k=this-m,j="second"===h?k/1000:"minute"===h?k/60000:"hour"===h?k/3600000:"day"===h?(k-l)/86400000:"week"===h?(k-l)/604800000:k),n?j:eM(j)):NaN):NaN
}function dV(h,g){var l,k,j=12*(g.year()-h.year())+(g.month()-h.month()),i=h.clone().add(j,"months");
return g-i<0?(l=h.clone().add(j-1,"months"),k=(g-i)/(i-l)):(l=h.clone().add(j+1,"months"),k=(g-i)/(l-i)),-(j+k)||0
}function dK(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}function dz(){if(!this.isValid()){return null
}var b=this.clone().utc();
return b.year()<0||b.year()>9999?fq(b,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):eE(Date.prototype.toISOString)?this.toDate().toISOString():fq(b,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}function dp(){if(!this.isValid()){return"moment.invalid(/* "+this._i+" */)"
}var h="moment",g="";
this.isLocal()||(h=0===this.utcOffset()?"moment.utc":"moment.parseZone",g="Z");
var l="["+h+'("]',k=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",j="-MM-DD[T]HH:mm:ss.SSS",i=g+'[")]';
return this.format(l+k+j+i)
}function c7(a){a||(a=this.isUtc()?fh.defaultFormatUtc:fh.defaultFormat);
var d=fq(this,a);
return this.localeData().postformat(d)
}function cW(d,c){return this.isValid()&&(eN(d)&&d.isValid()||bh(d).isValid())?c2({to:this,from:d}).locale(this.locale()).humanize(!c):this.localeData().invalidDate()
}function cL(b){return this.from(bh(),b)
}function cA(d,c){return this.isValid()&&(eN(d)&&d.isValid()||bh(d).isValid())?c2({from:this,to:d}).locale(this.locale()).humanize(!c):this.localeData().invalidDate()
}function ck(b){return this.to(bh(),b)
}function b3(d){var c;
return void 0===d?this._locale._abbr:(c=fP(d),null!=c&&(this._locale=c),this)
}function bS(){return this._locale
}function bH(b){switch(b=fD(b)){case"year":this.month(0);
case"quarter":case"month":this.date(1);
case"week":case"isoWeek":case"day":case"date":this.hours(0);
case"hour":this.minutes(0);
case"minute":this.seconds(0);
case"second":this.milliseconds(0)
}return"week"===b&&this.weekday(0),"isoWeek"===b&&this.isoWeekday(1),"quarter"===b&&this.month(3*Math.floor(this.month()/3)),this
}function br(b){return b=fD(b),void 0===b||"millisecond"===b?this:("date"===b&&(b="day"),this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms"))
}function bg(){return this._d.valueOf()-60000*(this._offset||0)
}function aZ(){return Math.floor(this.valueOf()/1000)
}function aO(){return new Date(this.valueOf())
}function aD(){var b=this;
return[b.year(),b.month(),b.date(),b.hour(),b.minute(),b.second(),b.millisecond()]
}function am(){var b=this;
return{years:b.year(),months:b.month(),date:b.date(),hours:b.hours(),minutes:b.minutes(),seconds:b.seconds(),milliseconds:b.milliseconds()}
}function go(){return this.isValid()?this.toISOString():null
}function f1(){return eR(this)
}function bB(){return eV({},eS(this))
}function bl(){return eS(this).overflow
}function a4(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}
}function aT(d,c){ft(0,[d,d.length],0,c)
}function aI(b){return fW.call(this,b,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
}function ax(b){return fW.call(this,b,this.isoWeek(),this.isoWeekday(),1,4)
}function ag(){return ao(this.year(),1,4)
}function gj(){var b=this.localeData()._week;
return ao(this.year(),b.dow,b.doy)
}function fW(h,g,l,k,j){var i;
return null==h?aF(this,k,j).year:(i=ao(h,k,j),g>i&&(g=i),fl.call(this,h,g,l,k,j))
}function fl(i,h,n,m,l){var k=aQ(i,h,n,m,l),j=bi(k.year,0,k.dayOfYear);
return this.year(j.getUTCFullYear()),this.month(j.getUTCMonth()),this.date(j.getUTCDate()),this
}function eD(b){return null==b?Math.ceil((this.month()+1)/3):this.month(3*(b-1)+this.month()%3)
}function es(d){var c=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/86400000)+1;
return null==d?c:this.add(d-c,"d")
}function eh(d,c){c[c5]=eL(1000*("0."+d))
}function d0(){return this._isUTC?"UTC":""
}function dP(){return this._isUTC?"Coordinated Universal Time":""
}function dE(b){return bh(1000*b)
}function du(){return bh.apply(null,arguments).parseZone()
}function di(b){return b
}function c1(h,g,l,k){var j=fP(),i=eU().set(k,g);
return j[l](i,h)
}function cQ(g,f,j){if(e0(g)&&(f=g,g=void 0),g=g||"",null!=f){return c1(g,f,j,"month")
}var i,h=[];
for(i=0;
i<12;
i++){h[i]=c1(g,i,j,"month")
}return h
}function cF(j,g,p,o){"boolean"==typeof j?(e0(g)&&(p=g,g=void 0),g=g||""):(g=j,p=g,j=!1,e0(g)&&(p=g,g=void 0),g=g||"");
var n=fP(),m=j?n._week.dow:0;
if(null!=p){return c1(g,(p+m)%7,o,"day")
}var l,k=[];
for(l=0;
l<7;
l++){k[l]=c1(g,(l+m)%7,o,"day")
}return k
}function cp(d,c){return cQ(d,c,"months")
}function b8(d,c){return cQ(d,c,"monthsShort")
}function bX(e,d,f){return cF(e,d,f,"weekdays")
}function bM(e,d,f){return cF(e,d,f,"weekdaysShort")
}function bw(e,d,f){return cF(e,d,f,"weekdaysMin")
}function cu(){var b=this._data;
return this._milliseconds=ev(this._milliseconds),this._days=ev(this._days),this._months=ev(this._months),b.milliseconds=ev(b.milliseconds),b.seconds=ev(b.seconds),b.minutes=ev(b.minutes),b.hours=ev(b.hours),b.months=ev(b.months),b.years=ev(b.years),this
}function ar(g,f,j,i){var h=c2(f,j);
return g._milliseconds+=i*h._milliseconds,g._days+=i*h._days,g._months+=i*h._months,g._bubble()
}function f6(d,c){return ar(this,d,c,1)
}function fL(d,c){return ar(this,d,c,-1)
}function e4(b){return b<0?Math.floor(b):Math.ceil(b)
}function ex(){var r,q,p,o,n,m=this._milliseconds,l=this._days,k=this._months,j=this._data;
return m>=0&&l>=0&&k>=0||m<=0&&l<=0&&k<=0||(m+=86400000*e4(d5(k)+l),l=0,k=0),j.milliseconds=m%1000,r=eM(m/1000),j.seconds=r%60,q=eM(r/60),j.minutes=q%60,p=eM(q/60),j.hours=p%24,l+=eM(p/24),n=eM(em(l)),k+=n,l-=e4(d5(n)),o=eM(k/12),k%=12,j.days=l,j.months=k,j.years=o,this
}function em(b){return 4800*b/146097
}function d5(b){return 146097*b/4800
}function dU(f){if(!this.isValid()){return NaN
}var e,h,g=this._milliseconds;
if(f=fD(f),"month"===f||"year"===f){return e=this._days+g/86400000,h=this._months+em(e),"month"===f?h:h/12
}switch(e=this._days+Math.round(d5(this._months)),f){case"week":return e/7+g/604800000;
case"day":return e+g/86400000;
case"hour":return 24*e+g/3600000;
case"minute":return 1440*e+g/60000;
case"second":return 86400*e+g/1000;
case"millisecond":return Math.floor(86400000*e)+g;
default:throw new Error("Unknown unit "+f)
}}function dJ(){return this.isValid()?this._milliseconds+86400000*this._days+this._months%12*2592000000+31536000000*eL(this._months/12):NaN
}function dy(b){return function(){return this.as(b)
}
}function dn(b){return b=fD(b),this.isValid()?this[b+"s"]():NaN
}function c6(b){return function(){return this.isValid()?this._data[b]:NaN
}
}function cV(){return eM(this.days()/7)
}function cK(g,f,j,i,h){return h.relativeTime(f||1,!!j,g,i)
}function cz(v,u,t){var s=c2(v).abs(),r=aW(s.as("s")),q=aW(s.as("m")),p=aW(s.as("h")),o=aW(s.as("d")),n=aW(s.as("M")),m=aW(s.as("y")),l=r<=aL.ss&&["s",r]||r<aL.s&&["ss",r]||q<=1&&["m"]||q<aL.m&&["mm",q]||p<=1&&["h"]||p<aL.h&&["hh",p]||o<=1&&["d"]||o<aL.d&&["dd",o]||n<=1&&["M"]||n<aL.M&&["MM",n]||m<=1&&["y"]||["yy",m];
return l[2]=u,l[3]=+v>0,l[4]=t,cK.apply(null,l)
}function cj(b){return void 0===b?aW:"function"==typeof b&&(aW=b,!0)
}function b2(d,c){return void 0!==aL[d]&&(void 0===c?aL[d]:(aL[d]=c,"s"===d&&(aL.ss=c-1),!0))
}function bR(e){if(!this.isValid()){return this.localeData().invalidDate()
}var d=this.localeData(),f=cz(this,!e,d);
return e&&(f=d.pastFuture(+this,f)),d.postformat(f)
}function bG(){if(!this.isValid()){return this.localeData().invalidDate()
}var z,y,x,w=aA(this._milliseconds)/1000,v=aA(this._days),u=aA(this._months);
z=eM(w/60),y=eM(z/60),w%=60,z%=60,x=eM(u/12),u%=12;
var t=x,s=u,r=v,q=y,p=z,o=w,n=this.asSeconds();
return n?(n<0?"-":"")+"P"+(t?t+"Y":"")+(s?s+"M":"")+(r?r+"D":"")+(q||p||o?"T":"")+(q?q+"H":"")+(p?p+"M":"")+(o?o+"S":""):"P0D"
}var bq,a9;
a9=Array.prototype.some?Array.prototype.some:function(f){for(var e=Object(this),h=e.length>>>0,g=0;
g<h;
g++){if(g in e&&f.call(this,e[g],g,e)){return !0
}}return !1
};
var aY=a9,aN=fh.momentProperties=[],aC=!1,al={};
fh.suppressDeprecationWarnings=!1,fh.deprecationHandler=null;
var gn;
gn=Object.keys?Object.keys:function(e){var d,f=[];
for(d in e){eW(e,d)&&f.push(d)
}return f
};
var f0,bA=gn,bk={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},a3={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},aS="Invalid date",aH="%d",aw=/\d{1,2}/,gs={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},gi={},fV={},fk=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,eC=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,er={},eg={},dZ=/\d/,dO=/\d\d/,dD=/\d{3}/,dt=/\d{4}/,dh=/[+-]?\d{6}/,c0=/\d\d?/,cP=/\d\d\d\d?/,cE=/\d\d\d\d\d\d?/,co=/\d{1,3}/,b7=/\d{1,4}/,bW=/[+-]?\d{1,6}/,bL=/\d+/,bv=/[+-]?\d+/,ct=/Z|[+-]\d\d:?\d\d/gi,aq=/Z|[+-]\d\d(?::?\d\d)?/gi,f5=/[+-]?\d+(\.\d{1,3})?/,fJ=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,e2={},ew={},el=0,d4=1,dT=2,dI=3,dx=4,dm=5,c5=6,cU=7,cJ=8;
f0=Array.prototype.indexOf?Array.prototype.indexOf:function(d){var c;
for(c=0;
c<this.length;
++c){if(this[c]===d){return c
}}return -1
};
var cy=f0;
ft("M",["MM",2],"Mo",function(){return this.month()+1
}),ft("MMM",0,0,function(b){return this.localeData().monthsShort(this,b)
}),ft("MMMM",0,0,function(b){return this.localeData().months(this,b)
}),fE("month","M"),fB("month",8),fn("M",c0),fn("MM",c0,dO),fn("MMM",function(d,c){return c.monthsShortRegex(d)
}),fn("MMMM",function(d,c){return c.monthsRegex(d)
}),fR(["M","MM"],function(d,c){c[d4]=eL(d)-1
}),fR(["MMM","MMMM"],function(g,f,j,i){var h=j._locale.monthsParse(g,i,j._strict);
null!=h?f[d4]=h:eS(j).invalidMonth=g
});
var ci=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,b1="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),bQ="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),bF=fJ,bp=fJ;
ft("Y",0,0,function(){var b=this.year();
return b<=9999?""+b:"+"+b
}),ft(0,["YY",2],0,function(){return this.year()%100
}),ft(0,["YYYY",4],0,"year"),ft(0,["YYYYY",5],0,"year"),ft(0,["YYYYYY",6,!0],0,"year"),fE("year","y"),fB("year",1),fn("Y",bv),fn("YY",c0,dO),fn("YYYY",b7,dt),fn("YYYYY",bW,dh),fn("YYYYYY",bW,dh),fR(["YYYYY","YYYYYY"],el),fR("YYYY",function(a,d){d[el]=2===a.length?fh.parseTwoDigitYear(a):eL(a)
}),fR("YY",function(a,d){d[el]=fh.parseTwoDigitYear(a)
}),fR("Y",function(d,c){c[el]=parseInt(d,10)
}),fh.parseTwoDigitYear=function(b){return eL(b)+(eL(b)>68?1900:2000)
};
var a8=fz("FullYear",!0);
ft("w",["ww",2],"wo","week"),ft("W",["WW",2],"Wo","isoWeek"),fE("week","w"),fE("isoWeek","W"),fB("week",5),fB("isoWeek",5),fn("w",c0),fn("ww",c0,dO),fn("W",c0),fn("WW",c0,dO),fg(["w","ww","W","WW"],function(f,e,h,g){e[g.substr(0,1)]=eL(f)
});
var aX={dow:0,doy:6};
ft("d",0,"do","day"),ft("dd",0,0,function(b){return this.localeData().weekdaysMin(this,b)
}),ft("ddd",0,0,function(b){return this.localeData().weekdaysShort(this,b)
}),ft("dddd",0,0,function(b){return this.localeData().weekdays(this,b)
}),ft("e",0,0,"weekday"),ft("E",0,0,"isoWeekday"),fE("day","d"),fE("weekday","e"),fE("isoWeekday","E"),fB("day",11),fB("weekday",11),fB("isoWeekday",11),fn("d",c0),fn("e",c0),fn("E",c0),fn("dd",function(d,c){return c.weekdaysMinRegex(d)
}),fn("ddd",function(d,c){return c.weekdaysShortRegex(d)
}),fn("dddd",function(d,c){return c.weekdaysRegex(d)
}),fg(["dd","ddd","dddd"],function(g,f,j,i){var h=j._locale.weekdaysParse(g,i,j._strict);
null!=h?f.d=h:eS(j).invalidWeekday=g
}),fg(["d","e","E"],function(f,e,h,g){e[g]=eL(f)
});
var aM="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),aB="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ak="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),gm=fJ,fZ=fJ,bz=fJ;
ft("H",["HH",2],0,"hour"),ft("h",["hh",2],0,dk),ft("k",["kk",2],0,c3),ft("hmm",0,0,function(){return""+dk.apply(this)+fu(this.minutes(),2)
}),ft("hmmss",0,0,function(){return""+dk.apply(this)+fu(this.minutes(),2)+fu(this.seconds(),2)
}),ft("Hmm",0,0,function(){return""+this.hours()+fu(this.minutes(),2)
}),ft("Hmmss",0,0,function(){return""+this.hours()+fu(this.minutes(),2)+fu(this.seconds(),2)
}),cS("a",!0),cS("A",!1),fE("hour","h"),fB("hour",13),fn("a",cH),fn("A",cH),fn("H",c0),fn("h",c0),fn("k",c0),fn("HH",c0,dO),fn("hh",c0,dO),fn("kk",c0,dO),fn("hmm",cP),fn("hmmss",cE),fn("Hmm",cP),fn("Hmmss",cE),fR(["H","HH"],dI),fR(["k","kk"],function(f,e,h){var g=eL(f);
e[dI]=24===g?0:g
}),fR(["a","A"],function(e,d,f){f._isPm=f._locale.isPM(e),f._meridiem=e
}),fR(["h","hh"],function(e,d,f){d[dI]=eL(e),eS(f).bigHour=!0
}),fR("hmm",function(f,e,h){var g=f.length-2;
e[dI]=eL(f.substr(0,g)),e[dx]=eL(f.substr(g)),eS(h).bigHour=!0
}),fR("hmmss",function(g,f,j){var i=g.length-4,h=g.length-2;
f[dI]=eL(g.substr(0,i)),f[dx]=eL(g.substr(i,2)),f[dm]=eL(g.substr(h)),eS(j).bigHour=!0
}),fR("Hmm",function(f,e,h){var g=f.length-2;
e[dI]=eL(f.substr(0,g)),e[dx]=eL(f.substr(g))
}),fR("Hmmss",function(g,f,j){var i=g.length-4,h=g.length-2;
f[dI]=eL(g.substr(0,i)),f[dx]=eL(g.substr(i,2)),f[dm]=eL(g.substr(h))
});
var bj,a2=/[ap]\.?m?\.?/i,aR=fz("Hours",!0),aG={calendar:bk,longDateFormat:a3,invalidDate:aS,ordinal:aH,dayOfMonthOrdinalParse:aw,relativeTime:gs,months:b1,monthsShort:bQ,week:aX,weekdays:aM,weekdaysMin:ak,weekdaysShort:aB,meridiemParse:a2},av={},gr={},gh=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,fU=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,fj=/Z|[+-]\d\d(?::?\d\d)?/,eB=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],eq=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],d9=/^\/?Date\((\-?\d+)/i,dY=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
fh.createFromInputFallback=eI("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(b){b._d=new Date(b._i+(b._useUTC?" UTC":""))
}),fh.ISO_8601=function(){},fh.RFC_2822=function(){};
var dN=eI("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var b=bh.apply(null,arguments);
return this.isValid()&&b.isValid()?b<this?this:b:eQ()
}),dC=eI("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var b=bh.apply(null,arguments);
return this.isValid()&&b.isValid()?b>this?this:b:eQ()
}),ds=function(){return Date.now?Date.now():+new Date
},dg=["year","quarter","month","week","day","hour","minute","second","millisecond"];
aU("Z",":"),aU("ZZ",""),fn("Z",aq),fn("ZZ",aq),fR(["Z","ZZ"],function(e,d,f){f._useUTC=!0,f._tzm=aJ(aq,e)
});
var cZ=/([\+\-]|\d\d)/gi;
fh.updateOffset=function(){};
var cO=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,cD=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
c2.fn=bC.prototype,c2.invalid=f2;
var cn=b9(1,"add"),b6=b9(-1,"subtract");
fh.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",fh.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";
var bV=eI("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return void 0===b?this.localeData():this.locale(b)
});
ft(0,["gg",2],0,function(){return this.weekYear()%100
}),ft(0,["GG",2],0,function(){return this.isoWeekYear()%100
}),aT("gggg","weekYear"),aT("ggggg","weekYear"),aT("GGGG","isoWeekYear"),aT("GGGGG","isoWeekYear"),fE("weekYear","gg"),fE("isoWeekYear","GG"),fB("weekYear",1),fB("isoWeekYear",1),fn("G",bv),fn("g",bv),fn("GG",c0,dO),fn("gg",c0,dO),fn("GGGG",b7,dt),fn("gggg",b7,dt),fn("GGGGG",bW,dh),fn("ggggg",bW,dh),fg(["gggg","ggggg","GGGG","GGGGG"],function(f,e,h,g){e[g.substr(0,2)]=eL(f)
}),fg(["gg","GG"],function(a,h,g,f){h[f]=fh.parseTwoDigitYear(a)
}),ft("Q",0,"Qo","quarter"),fE("quarter","Q"),fB("quarter",7),fn("Q",dZ),fR("Q",function(d,c){c[d4]=3*(eL(d)-1)
}),ft("D",["DD",2],"Do","date"),fE("date","D"),fB("date",9),fn("D",c0),fn("DD",c0,dO),fn("Do",function(d,c){return d?c._dayOfMonthOrdinalParse||c._ordinalParse:c._dayOfMonthOrdinalParseLenient
}),fR(["D","DD"],dT),fR("Do",function(d,c){c[dT]=eL(d.match(c0)[0],10)
});
var bK=fz("Date",!0);
ft("DDD",["DDDD",3],"DDDo","dayOfYear"),fE("dayOfYear","DDD"),fB("dayOfYear",4),fn("DDD",co),fn("DDDD",dD),fR(["DDD","DDDD"],function(e,d,f){f._dayOfYear=eL(e)
}),ft("m",["mm",2],0,"minute"),fE("minute","m"),fB("minute",14),fn("m",c0),fn("mm",c0,dO),fR(["m","mm"],dx);
var bu=fz("Minutes",!1);
ft("s",["ss",2],0,"second"),fE("second","s"),fB("second",15),fn("s",c0),fn("ss",c0,dO),fR(["s","ss"],dm);
var cs=fz("Seconds",!1);
ft("S",0,0,function(){return ~~(this.millisecond()/100)
}),ft(0,["SS",2],0,function(){return ~~(this.millisecond()/10)
}),ft(0,["SSS",3],0,"millisecond"),ft(0,["SSSS",4],0,function(){return 10*this.millisecond()
}),ft(0,["SSSSS",5],0,function(){return 100*this.millisecond()
}),ft(0,["SSSSSS",6],0,function(){return 1000*this.millisecond()
}),ft(0,["SSSSSSS",7],0,function(){return 10000*this.millisecond()
}),ft(0,["SSSSSSSS",8],0,function(){return 100000*this.millisecond()
}),ft(0,["SSSSSSSSS",9],0,function(){return 1000000*this.millisecond()
}),fE("millisecond","ms"),fB("millisecond",16),fn("S",co,dZ),fn("SS",co,dO),fn("SSS",co,dD);
var ap;
for(ap="SSSS";
ap.length<=9;
ap+="S"){fn(ap,bL)
}for(ap="S";
ap.length<=9;
ap+="S"){fR(ap,eh)
}var f4=fz("Milliseconds",!1);
ft("z",0,0,"zoneAbbr"),ft("zz",0,0,"zoneName");
var fG=eO.prototype;
fG.add=cn,fG.calendar=bx,fG.clone=cv,fG.diff=d6,fG.endOf=br,fG.format=c7,fG.from=cW,fG.fromNow=cL,fG.to=cA,fG.toNow=ck,fG.get=fw,fG.invalidAt=bl,fG.isAfter=at,fG.isBefore=f7,fG.isBetween=fN,fG.isSame=e6,fG.isSameOrAfter=ey,fG.isSameOrBefore=en,fG.isValid=f1,fG.lang=bV,fG.locale=b3,fG.localeData=bS,fG.max=dC,fG.min=dN,fG.parsingFlags=bB,fG.set=fv,fG.startOf=bH,fG.subtract=b6,fG.toArray=aD,fG.toObject=am,fG.toDate=aO,fG.toISOString=dz,fG.inspect=dp,fG.toJSON=go,fG.toString=dK,fG.unix=aZ,fG.valueOf=bg,fG.creationData=a4,fG.year=a8,fG.isLeapYear=bJ,fG.weekYear=aI,fG.isoWeekYear=ax,fG.quarter=fG.quarters=eD,fG.month=c9,fG.daysInMonth=cY,fG.week=fG.weeks=bn,fG.isoWeek=fG.isoWeeks=a6,fG.weeksInYear=gj,fG.isoWeeksInYear=ag,fG.date=bK,fG.day=fG.days=eH,fG.weekday=eu,fG.isoWeekday=ej,fG.dayOfYear=es,fG.hour=fG.hours=aR,fG.minute=fG.minutes=bu,fG.second=fG.seconds=cs,fG.millisecond=fG.milliseconds=f4,fG.utcOffset=gk,fG.utc=fm,fG.local=eF,fG.parseZone=et,fG.hasAlignedHourOffset=ei,fG.isDST=d1,fG.isLocal=dF,fG.isUtcOffset=dv,fG.isUtc=dj,fG.isUTC=dj,fG.zoneAbbr=d0,fG.zoneName=dP,fG.dates=eI("dates accessor is deprecated. Use date instead.",bK),fG.months=eI("months accessor is deprecated. Use month instead",c9),fG.years=eI("years accessor is deprecated. Use year instead",a8),fG.zone=eI("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",fX),fG.isDSTShifted=eI("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",dQ);
var eZ=fQ.prototype;
eZ.calendar=fO,eZ.longDateFormat=fM,eZ.invalidDate=fK,eZ.ordinal=fI,eZ.preparse=di,eZ.postformat=di,eZ.relativeTime=fH,eZ.pastFuture=fF,eZ.set=fT,eZ.months=d8,eZ.monthsShort=dX,eZ.monthsParse=dB,eZ.monthsRegex=cC,eZ.monthsShortRegex=cN,eZ.week=gq,eZ.firstDayOfYear=bD,eZ.firstDayOfWeek=f3,eZ.weekdays=az,eZ.weekdaysMin=gl,eZ.weekdaysShort=ai,eZ.weekdaysParse=fo,eZ.weekdaysRegex=d2,eZ.weekdaysShortRegex=dR,eZ.weekdaysMinRegex=dG,eZ.isPM=cr,eZ.meridiem=cg,cw("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var d=e%10,f=1===eL(e%100/10)?"th":1===d?"st":2===d?"nd":3===d?"rd":"th";
return e+f
}}),fh.lang=eI("moment.lang is deprecated. Use moment.locale instead.",cw),fh.langData=eI("moment.langData is deprecated. Use moment.localeData instead.",fP);
var ev=Math.abs,ek=dy("ms"),d3=dy("s"),dS=dy("m"),dH=dy("h"),dl=dy("d"),c4=dy("w"),cT=dy("M"),cI=dy("y"),cx=c6("milliseconds"),ch=c6("seconds"),b0=c6("minutes"),bP=c6("hours"),bE=c6("days"),bo=c6("months"),a7=c6("years"),aW=Math.round,aL={ss:44,s:45,m:45,h:22,d:26,M:11},aA=Math.abs,aj=bC.prototype;
return aj.isValid=gp,aj.abs=cu,aj.add=f6,aj.subtract=fL,aj.as=dU,aj.asMilliseconds=ek,aj.asSeconds=d3,aj.asMinutes=dS,aj.asHours=dH,aj.asDays=dl,aj.asWeeks=c4,aj.asMonths=cT,aj.asYears=cI,aj.valueOf=dJ,aj._bubble=ex,aj.get=dn,aj.milliseconds=cx,aj.seconds=ch,aj.minutes=b0,aj.hours=bP,aj.days=bE,aj.weeks=cV,aj.months=bo,aj.years=a7,aj.humanize=bR,aj.toISOString=bG,aj.toString=bG,aj.toJSON=bG,aj.locale=b3,aj.localeData=bS,aj.toIsoString=eI("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",bG),aj.lang=bV,ft("X",0,0,"unix"),ft("x",0,0,"valueOf"),fn("x",bv),fn("X",f5),fR("X",function(e,d,f){f._d=new Date(1000*parseFloat(e,10))
}),fR("x",function(e,d,f){f._d=new Date(eL(e))
}),fh.version="2.18.1",e9(bh),fh.fn=fG,fh.min=aP,fh.max=aE,fh.now=ds,fh.utc=eU,fh.unix=dE,fh.months=cp,fh.isDate=eY,fh.locale=cw,fh.invalid=eQ,fh.duration=c2,fh.isMoment=eN,fh.weekdays=bX,fh.parseZone=du,fh.localeData=fP,fh.isDuration=bm,fh.monthsShort=b8,fh.weekdaysMin=bw,fh.defineLocale=au,fh.updateLocale=f8,fh.locales=e8,fh.weekdaysShort=bM,fh.normalizeUnits=fD,fh.relativeTimeRounding=cj,fh.relativeTimeThreshold=b2,fh.calendarFormat=bN,fh.prototype=fG,fh
});
(function(a,b){if(typeof define==="function"&&define.amd){define(b)
}else{if(typeof exports==="object"){module.exports=b()
}else{a.VMasker=b()
}}}(this,function(){var d="9",a="A",i="S",b=[9,16,17,18,36,37,38,39,40,49,91,92,93],f=function(l){for(var k=0,j=b.length;
k<j;
k++){if(l==b[k]){return false
}}return true
},e=function(j){j=j||{};
j={precision:j.hasOwnProperty("precision")?j.precision:2,separator:j.separator||",",delimiter:j.delimiter||".",unit:j.unit&&(j.unit.replace(/[\s]/g,"")+" ")||"",suffixUnit:j.suffixUnit&&(" "+j.suffixUnit.replace(/[\s]/g,""))||"",zeroCents:j.zeroCents,lastOutput:j.lastOutput};
j.moneyPrecision=j.zeroCents?0:j.precision;
return j
},c=function(j,k,l){for(;
k<j.length;
k++){if(j[k]===d||j[k]===a||j[k]===i){j[k]=l
}}return j
};
var g=function(j){this.elements=j
};
g.prototype.unbindElementToMask=function(){for(var k=0,j=this.elements.length;
k<j;
k++){this.elements[k].lastOutput="";
this.elements[k].onkeyup=false;
this.elements[k].onkeydown=false;
if(this.elements[k].value.length){this.elements[k].value=this.elements[k].value.replace(/\D/g,"")
}}};
g.prototype.bindElementToMask=function(k){var n=this,l=function(p){p=p||window.event;
var o=p.target||p.srcElement;
if(f(p.keyCode)){setTimeout(function(){n.opts.lastOutput=o.lastOutput;
o.value=h[k](o.value,n.opts);
o.lastOutput=o.value;
if(o.setSelectionRange&&n.opts.suffixUnit){o.setSelectionRange(o.value.length,(o.value.length-n.opts.suffixUnit.length))
}},0)
}};
for(var m=0,j=this.elements.length;
m<j;
m++){this.elements[m].lastOutput="";
this.elements[m].onkeyup=l;
if(this.elements[m].value.length){this.elements[m].value=h[k](this.elements[m].value,this.opts)
}}};
g.prototype.maskMoney=function(j){this.opts=e(j);
this.bindElementToMask("toMoney")
};
g.prototype.maskNumber=function(){this.opts={};
this.bindElementToMask("toNumber")
};
g.prototype.maskAlphaNum=function(){this.opts={};
this.bindElementToMask("toAlphaNumeric")
};
g.prototype.maskPattern=function(j){this.opts={pattern:j};
this.bindElementToMask("toPattern")
};
g.prototype.unMask=function(){this.unbindElementToMask()
};
var h=function(j){if(!j){throw new Error("VanillaMasker: There is no element to bind.")
}var k=("length" in j)?(j.length?j:[]):[j];
return new g(k)
};
h.toMoney=function(v,s){s=e(s);
if(s.zeroCents){s.lastOutput=s.lastOutput||"";
var k=("("+s.separator+"[0]{0,"+s.precision+"})"),B=new RegExp(k,"g"),n=v.toString().replace(/[\D]/g,"").length||0,w=s.lastOutput.toString().replace(/[\D]/g,"").length||0;
v=v.toString().replace(B,"");
if(n<w){v=v.slice(0,v.length-1)
}}var l=v.toString().replace(/[\D]/g,""),m=new RegExp("^(0|\\"+s.delimiter+")"),p=new RegExp("(\\"+s.separator+")$"),r=l.substr(0,l.length-s.moneyPrecision),y=r.substr(0,r.length%3),j=new Array(s.precision+1).join("0");
r=r.substr(r.length%3,r.length);
for(var x=0,z=r.length;
x<z;
x++){if(x%3===0){y+=s.delimiter
}y+=r[x]
}y=y.replace(m,"");
y=y.length?y:"0";
if(!s.zeroCents){var t=l.length-s.precision,u=l.substr(t,s.precision),A=u.length,o=(s.precision>A)?s.precision:A;
j=(j+u).slice(-o)
}var q=s.unit+y+s.separator+j+s.suffixUnit;
return q.replace(p,"")
};
h.toPattern=function(q,j){var o=(typeof j==="object"?j.pattern:j),m=o.replace(/\W/g,""),k=o.split(""),s=q.toString().replace(/\W/g,""),r=s.replace(/\W/g,""),n=0,l,t=k.length,p=(typeof j==="object"?j.placeholder:undefined);
for(l=0;
l<t;
l++){if(n>=s.length){if(m.length==r.length){return k.join("")
}else{if((p!==undefined)&&(m.length>r.length)){return c(k,l,p).join("")
}else{break
}}}else{if((k[l]===d&&s[n].match(/[0-9]/))||(k[l]===a&&s[n].match(/[a-zA-Z]/))||(k[l]===i&&s[n].match(/[0-9a-zA-Z]/))){k[l]=s[n++]
}else{if(k[l]===d||k[l]===a||k[l]===i){if(p!==undefined){return c(k,l,p).join("")
}else{return k.slice(0,l).join("")
}}}}}return k.join("").substr(0,l)
};
h.toNumber=function(j){return j.toString().replace(/(?!^-)[^0-9]/g,"")
};
h.toAlphaNumeric=function(j){return j.toString().replace(/[^a-z0-9 ]+/i,"")
};
return h
}));
(function(){function a(t,s,n){var p=/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?%?$|^0x[0-9a-f]+$|[0-9]+)/gi,g=/(^[ ]*|[ ]*$)/g,u=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,f=/^0x[0-9a-f]+$/i,d=/^0/,h=/(<([^>]+)>)/ig,k=t.toString().replace(g,"")||"",j=s.toString().replace(g,"")||"";
if(!n){k=k.replace(h,"");
j=j.replace(h,"")
}var e=k.replace(p,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),o=j.replace(p,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),i=parseInt(k.match(f),10)||(e.length!==1&&k.match(u)&&Date.parse(k)),q=parseInt(j.match(f),10)||i&&j.match(u)&&Date.parse(j)||null;
if(q){if(i<q){return -1
}else{if(i>q){return 1
}}}for(var m=0,l=Math.max(e.length,o.length);
m<l;
m++){var r=!(e[m]||"").match(d)&&parseFloat(e[m],10)||e[m]||0;
var c=!(o[m]||"").match(d)&&parseFloat(o[m],10)||o[m]||0;
if(isNaN(r)!==isNaN(c)){return(isNaN(r))?1:-1
}else{if(typeof r!==typeof c){r+="";
c+=""
}}if(r<c){return -1
}if(r>c){return 1
}}return 0
}jQuery.extend(jQuery.fn.dataTableExt.oSort,{"natural-asc":function(d,c){return a(d,c,true)
},"natural-desc":function(d,c){return a(d,c,true)*-1
},"natural-nohtml-asc":function(d,c){return a(d,c,false)
},"natural-nohtml-desc":function(d,c){return a(d,c,false)*-1
},"natural-ci-asc":function(d,c){d=d.toString().toLowerCase();
c=c.toString().toLowerCase();
return a(d,c,true)
},"natural-ci-desc":function(d,c){d=d.toString().toLowerCase();
c=c.toString().toLowerCase();
return a(d,c,true)*-1
}})
}());
loadjs=function(){var k=function(){},g={},b={},f={};
function j(m,i){if(m){var l=f[m];
if(b[m]=i,l){for(;
l.length;
){l[0](m,i),l.splice(0,1)
}}}}function a(i,c){i.call&&(i={success:i}),c.length?(i.error||k)(c):(i.success||k)(i)
}function h(p,x,l,q){var m,y,w=document,o=l.async,v=(l.numRetries||0)+1,n=l.before||k;
q=q||0,/(^css!|\.css$)/.test(p)?(m=!0,(y=w.createElement("link")).rel="stylesheet",y.href=p.replace(/^css!/,"")):((y=w.createElement("script")).src=p,y.async=void 0===o||o),y.onload=y.onerror=y.onbeforeload=function(e){var c=e.type[0];
if(m&&"hideFocus" in y){try{y.sheet.cssText.length||(c="e")
}catch(e){c="e"
}}if("e"==c&&(q+=1)<v){return h(p,x,l,q)
}x(p,c,e.defaultPrevented)
},!1!==n(p,y)&&w.head.appendChild(y)
}function d(m,e,l){var i,c;
if(e&&e.trim&&(i=e),c=(i?l:e)||{},i){if(i in g){throw"LoadJS"
}g[i]=!0
}!function(z,x,q){var w,y,p=(z=z.push?z:[z]).length,v=p,o=[];
for(w=function(A,s,u){if("e"==s&&o.push(A),"b"==s){if(!u){return
}o.push(A)
}--p||x(o)
},y=0;
y<v;
y++){h(z[y],w,q)
}}(m,function(o){a(c,o),j(i,o)
},c)
}return d.ready=function(i,c){return function(w,r){var v,m,t,p=[],l=(w=w.push?w:[w]).length,q=l;
for(v=function(o,e){e.length&&p.push(o),--q||r(p)
};
l--;
){m=w[l],(t=b[m])?v(m,t):(f[m]=f[m]||[]).push(v)
}}(i,function(e){a(c,e)
}),d
},d.done=function(c){j(c,[])
},d.reset=function(){g={},b={},f={}
},d.isDefined=function(c){return c in g
},d
}();
/*! version : 4.17.47
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery","moment"],a)
}else{if(typeof exports==="object"){module.exports=a(require("jquery"),require("moment"))
}else{if(typeof jQuery==="undefined"){throw"bootstrap-datetimepicker requires jQuery to be loaded first"
}if(typeof moment==="undefined"){throw"bootstrap-datetimepicker requires Moment.js to be loaded first"
}a(jQuery,moment)
}}}(function(b,c){if(!c){throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first")
}var a=function(v,C){var p={},al,ag,S=true,j,am=false,N=false,h,U=0,x,aq,s,ad=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],an=["days","months","years","decades"],t=["top","bottom","auto"],i=["left","right","auto"],ap=["default","top","bottom"],D={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t","delete":46,46:"delete"},aj={},o=function(){return c.tz!==undefined&&C.timeZone!==undefined&&C.timeZone!==null&&C.timeZone!==""
},y=function(av){var au;
if(av===undefined||av===null){au=c()
}else{if(c.isDate(av)||c.isMoment(av)){au=c(av)
}else{if(o()){au=c.tz(av,aq,C.useStrict,C.timeZone)
}else{au=c(av,aq,C.useStrict)
}}}if(o()){au.tz(C.timeZone)
}return au
},ah=function(au){if(typeof au!=="string"||au.length>1){throw new TypeError("isEnabled expects a single character string parameter")
}switch(au){case"y":return x.indexOf("Y")!==-1;
case"M":return x.indexOf("M")!==-1;
case"d":return x.toLowerCase().indexOf("d")!==-1;
case"h":case"H":return x.toLowerCase().indexOf("h")!==-1;
case"m":return x.indexOf("m")!==-1;
case"s":return x.indexOf("s")!==-1;
default:return false
}},G=function(){return(ah("h")||ah("m")||ah("s"))
},M=function(){return(ah("y")||ah("M")||ah("d"))
},l=function(){var av=b("<thead>").append(b("<tr>").append(b("<th>").addClass("prev").attr("data-action","previous").append(b("<span>").addClass(C.icons.previous))).append(b("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",(C.calendarWeeks?"6":"5"))).append(b("<th>").addClass("next").attr("data-action","next").append(b("<span>").addClass(C.icons.next)))),au=b("<tbody>").append(b("<tr>").append(b("<td>").attr("colspan",(C.calendarWeeks?"8":"7"))));
return[b("<div>").addClass("datepicker-days").append(b("<table>").addClass("table-condensed").append(av).append(b("<tbody>"))),b("<div>").addClass("datepicker-months").append(b("<table>").addClass("table-condensed").append(av.clone()).append(au.clone())),b("<div>").addClass("datepicker-years").append(b("<table>").addClass("table-condensed").append(av.clone()).append(au.clone())),b("<div>").addClass("datepicker-decades").append(b("<table>").addClass("table-condensed").append(av.clone()).append(au.clone()))]
},Q=function(){var au=b("<tr>"),av=b("<tr>"),aw=b("<tr>");
if(ah("h")){au.append(b("<td>").append(b("<a>").attr({href:"#",tabindex:"-1",title:C.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(b("<span>").addClass(C.icons.up))));
av.append(b("<td>").append(b("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:C.tooltips.pickHour}).attr("data-action","showHours")));
aw.append(b("<td>").append(b("<a>").attr({href:"#",tabindex:"-1",title:C.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(b("<span>").addClass(C.icons.down))))
}if(ah("m")){if(ah("h")){au.append(b("<td>").addClass("separator"));
av.append(b("<td>").addClass("separator").html(":"));
aw.append(b("<td>").addClass("separator"))
}au.append(b("<td>").append(b("<a>").attr({href:"#",tabindex:"-1",title:C.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(b("<span>").addClass(C.icons.up))));
av.append(b("<td>").append(b("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:C.tooltips.pickMinute}).attr("data-action","showMinutes")));
aw.append(b("<td>").append(b("<a>").attr({href:"#",tabindex:"-1",title:C.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(b("<span>").addClass(C.icons.down))))
}if(ah("s")){if(ah("m")){au.append(b("<td>").addClass("separator"));
av.append(b("<td>").addClass("separator").html(":"));
aw.append(b("<td>").addClass("separator"))
}au.append(b("<td>").append(b("<a>").attr({href:"#",tabindex:"-1",title:C.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(b("<span>").addClass(C.icons.up))));
av.append(b("<td>").append(b("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:C.tooltips.pickSecond}).attr("data-action","showSeconds")));
aw.append(b("<td>").append(b("<a>").attr({href:"#",tabindex:"-1",title:C.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(b("<span>").addClass(C.icons.down))))
}if(!h){au.append(b("<td>").addClass("separator"));
av.append(b("<td>").append(b("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:C.tooltips.togglePeriod})));
aw.append(b("<td>").addClass("separator"))
}return b("<div>").addClass("timepicker-picker").append(b("<table>").addClass("table-condensed").append([au,av,aw]))
},R=function(){var av=b("<div>").addClass("timepicker-hours").append(b("<table>").addClass("table-condensed")),au=b("<div>").addClass("timepicker-minutes").append(b("<table>").addClass("table-condensed")),ax=b("<div>").addClass("timepicker-seconds").append(b("<table>").addClass("table-condensed")),aw=[Q()];
if(ah("h")){aw.push(av)
}if(ah("m")){aw.push(au)
}if(ah("s")){aw.push(ax)
}return aw
},ac=function(){var au=[];
if(C.showTodayButton){au.push(b("<td>").append(b("<a>").attr({"data-action":"today",title:C.tooltips.today}).append(b("<span>").addClass(C.icons.today))))
}if(!C.sideBySide&&M()&&G()){au.push(b("<td>").append(b("<a>").attr({"data-action":"togglePicker",title:C.tooltips.selectTime}).append(b("<span>").addClass(C.icons.time))))
}if(C.showClear){au.push(b("<td>").append(b("<a>").attr({"data-action":"clear",title:C.tooltips.clear}).append(b("<span>").addClass(C.icons.clear))))
}if(C.showClose){au.push(b("<td>").append(b("<a>").attr({"data-action":"close",title:C.tooltips.close}).append(b("<span>").addClass(C.icons.close))))
}return b("<table>").addClass("table-condensed").append(b("<tbody>").append(b("<tr>").append(au)))
},at=function(){var aw=b("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),au=b("<div>").addClass("datepicker").append(l()),av=b("<div>").addClass("timepicker").append(R()),ay=b("<ul>").addClass("list-unstyled"),ax=b("<li>").addClass("picker-switch"+(C.collapse?" accordion-toggle":"")).append(ac());
if(C.inline){aw.removeClass("dropdown-menu")
}if(h){aw.addClass("usetwentyfour")
}if(ah("s")&&!h){aw.addClass("wider")
}if(C.sideBySide&&M()&&G()){aw.addClass("timepicker-sbs");
if(C.toolbarPlacement==="top"){aw.append(ax)
}aw.append(b("<div>").addClass("row").append(au.addClass("col-md-6")).append(av.addClass("col-md-6")));
if(C.toolbarPlacement==="bottom"){aw.append(ax)
}return aw
}if(C.toolbarPlacement==="top"){ay.append(ax)
}if(M()){ay.append(b("<li>").addClass((C.collapse&&G()?"collapse in":"")).append(au))
}if(C.toolbarPlacement==="default"){ay.append(ax)
}if(G()){ay.append(b("<li>").addClass((C.collapse&&M()?"collapse":"")).append(av))
}if(C.toolbarPlacement==="bottom"){ay.append(ax)
}return aw.append(ay)
},d=function(){var au,av={};
if(v.is("input")||C.inline){au=v.data()
}else{au=v.find("input").data()
}if(au.dateOptions&&au.dateOptions instanceof Object){av=b.extend(true,av,au.dateOptions)
}b.each(C,function(ax){var aw="date"+ax.charAt(0).toUpperCase()+ax.slice(1);
if(au[aw]!==undefined){av[ax]=au[aw]
}});
return av
},m=function(){var au=(am||v).position(),ay=(am||v).offset(),aw=C.widgetPositioning.vertical,av=C.widgetPositioning.horizontal,ax;
if(C.widgetParent){ax=C.widgetParent.append(N)
}else{if(v.is("input")){ax=v.after(N).parent()
}else{if(C.inline){ax=v.append(N);
return
}else{ax=v;
v.children().first().after(N)
}}}if(aw==="auto"){if(ay.top+N.height()*1.5>=b(window).height()+b(window).scrollTop()&&N.height()+v.outerHeight()<ay.top){aw="top"
}else{aw="bottom"
}}if(av==="auto"){if(ax.width()<ay.left+N.outerWidth()/2&&ay.left+N.outerWidth()>b(window).width()){av="right"
}else{av="left"
}}if(aw==="top"){N.addClass("top").removeClass("bottom")
}else{N.addClass("bottom").removeClass("top")
}if(av==="right"){N.addClass("pull-right")
}else{N.removeClass("pull-right")
}if(ax.css("position")==="static"){ax=ax.parents().filter(function(){return b(this).css("position")!=="static"
}).first()
}if(ax.length===0){throw new Error("datetimepicker component should be placed within a non-static positioned container")
}N.css({top:aw==="top"?"auto":au.top+v.outerHeight(),bottom:aw==="top"?ax.outerHeight()-(ax===v?0:au.top):"auto",left:av==="left"?(ax===v?0:au.left):"auto",right:av==="left"?"auto":ax.outerWidth()-v.outerWidth()-(ax===v?0:au.left)})
},r=function(au){if(au.type==="dp.change"&&((au.date&&au.date.isSame(au.oldDate))||(!au.date&&!au.oldDate))){return
}v.trigger(au)
},I=function(au){if(au==="y"){au="YYYY"
}r({type:"dp.update",change:au,viewDate:ag.clone()})
},e=function(au){if(!N){return
}if(au){s=Math.max(U,Math.min(3,s+au))
}N.find(".datepicker > div").hide().filter(".datepicker-"+ad[s].clsName).show()
},ak=function(){var av=b("<tr>"),au=ag.clone().startOf("w").startOf("d");
if(C.calendarWeeks===true){av.append(b("<th>").addClass("cw").text("#"))
}while(au.isBefore(ag.clone().endOf("w"))){av.append(b("<th>").addClass("dow").text(au.format("dd")));
au.add(1,"d")
}N.find(".datepicker-days thead").append(av)
},A=function(au){return C.disabledDates[au.format("YYYY-MM-DD")]===true
},P=function(au){return C.enabledDates[au.format("YYYY-MM-DD")]===true
},ab=function(au){return C.disabledHours[au.format("H")]===true
},ao=function(au){return C.enabledHours[au.format("H")]===true
},k=function(av,aw){if(!av.isValid()){return false
}if(C.disabledDates&&aw==="d"&&A(av)){return false
}if(C.enabledDates&&aw==="d"&&!P(av)){return false
}if(C.minDate&&av.isBefore(C.minDate,aw)){return false
}if(C.maxDate&&av.isAfter(C.maxDate,aw)){return false
}if(C.daysOfWeekDisabled&&aw==="d"&&C.daysOfWeekDisabled.indexOf(av.day())!==-1){return false
}if(C.disabledHours&&(aw==="h"||aw==="m"||aw==="s")&&ab(av)){return false
}if(C.enabledHours&&(aw==="h"||aw==="m"||aw==="s")&&!ao(av)){return false
}if(C.disabledTimeIntervals&&(aw==="h"||aw==="m"||aw==="s")){var au=false;
b.each(C.disabledTimeIntervals,function(){if(av.isBetween(this[0],this[1])){au=true;
return false
}});
if(au){return false
}}return true
},H=function(){var au=[],av=ag.clone().startOf("y").startOf("d");
while(av.isSame(ag,"y")){au.push(b("<span>").attr("data-action","selectMonth").addClass("month").text(av.format("MMM")));
av.add(1,"M")
}N.find(".datepicker-months td").empty().append(au)
},w=function(){var av=N.find(".datepicker-months"),aw=av.find("th"),au=av.find("tbody").find("span");
aw.eq(0).find("span").attr("title",C.tooltips.prevYear);
aw.eq(1).attr("title",C.tooltips.selectYear);
aw.eq(2).find("span").attr("title",C.tooltips.nextYear);
av.find(".disabled").removeClass("disabled");
if(!k(ag.clone().subtract(1,"y"),"y")){aw.eq(0).addClass("disabled")
}aw.eq(1).text(ag.year());
if(!k(ag.clone().add(1,"y"),"y")){aw.eq(2).addClass("disabled")
}au.removeClass("active");
if(al.isSame(ag,"y")&&!S){au.eq(al.month()).addClass("active")
}au.each(function(ax){if(!k(ag.clone().month(ax),"M")){b(this).addClass("disabled")
}})
},z=function(){var av=N.find(".datepicker-years"),ax=av.find("th"),au=ag.clone().subtract(5,"y"),ay=ag.clone().add(6,"y"),aw="";
ax.eq(0).find("span").attr("title",C.tooltips.prevDecade);
ax.eq(1).attr("title",C.tooltips.selectDecade);
ax.eq(2).find("span").attr("title",C.tooltips.nextDecade);
av.find(".disabled").removeClass("disabled");
if(C.minDate&&C.minDate.isAfter(au,"y")){ax.eq(0).addClass("disabled")
}ax.eq(1).text(au.year()+"-"+ay.year());
if(C.maxDate&&C.maxDate.isBefore(ay,"y")){ax.eq(2).addClass("disabled")
}while(!au.isAfter(ay,"y")){aw+='<span data-action="selectYear" class="year'+(au.isSame(al,"y")&&!S?" active":"")+(!k(au,"y")?" disabled":"")+'">'+au.year()+"</span>";
au.add(1,"y")
}av.find("td").html(aw)
},ae=function(){var au=N.find(".datepicker-decades"),aA=au.find("th"),aC=c({y:ag.year()-(ag.year()%100)-1}),aw=aC.clone().add(100,"y"),ax=aC.clone(),ay=false,aB=false,av,az="";
aA.eq(0).find("span").attr("title",C.tooltips.prevCentury);
aA.eq(2).find("span").attr("title",C.tooltips.nextCentury);
au.find(".disabled").removeClass("disabled");
if(aC.isSame(c({y:1900}))||(C.minDate&&C.minDate.isAfter(aC,"y"))){aA.eq(0).addClass("disabled")
}aA.eq(1).text(aC.year()+"-"+aw.year());
if(aC.isSame(c({y:2000}))||(C.maxDate&&C.maxDate.isBefore(aw,"y"))){aA.eq(2).addClass("disabled")
}while(!aC.isAfter(aw,"y")){av=aC.year()+12;
ay=C.minDate&&C.minDate.isAfter(aC,"y")&&C.minDate.year()<=av;
aB=C.maxDate&&C.maxDate.isAfter(aC,"y")&&C.maxDate.year()<=av;
az+='<span data-action="selectDecade" class="decade'+(al.isAfter(aC)&&al.year()<=av?" active":"")+(!k(aC,"y")&&!ay&&!aB?" disabled":"")+'" data-selection="'+(aC.year()+6)+'">'+(aC.year()+1)+" - "+(aC.year()+12)+"</span>";
aC.add(12,"y")
}az+="<span></span><span></span><span></span>";
au.find("td").html(az);
aA.eq(1).text((ax.year()+1)+"-"+(aC.year()))
},q=function(){var av=N.find(".datepicker-days"),aA=av.find("th"),au,ay=[],az,ax=[],aw;
if(!M()){return
}aA.eq(0).find("span").attr("title",C.tooltips.prevMonth);
aA.eq(1).attr("title",C.tooltips.selectMonth);
aA.eq(2).find("span").attr("title",C.tooltips.nextMonth);
av.find(".disabled").removeClass("disabled");
aA.eq(1).text(ag.format(C.dayViewHeaderFormat));
if(!k(ag.clone().subtract(1,"M"),"M")){aA.eq(0).addClass("disabled")
}if(!k(ag.clone().add(1,"M"),"M")){aA.eq(2).addClass("disabled")
}au=ag.clone().startOf("M").startOf("w").startOf("d");
for(aw=0;
aw<42;
aw++){if(au.weekday()===0){az=b("<tr>");
if(C.calendarWeeks){az.append('<td class="cw">'+au.week()+"</td>")
}ay.push(az)
}ax=["day"];
if(au.isBefore(ag,"M")){ax.push("old")
}if(au.isAfter(ag,"M")){ax.push("new")
}if(au.isSame(al,"d")&&!S){ax.push("active")
}if(!k(au,"d")){ax.push("disabled")
}if(au.isSame(y(),"d")){ax.push("today")
}if(au.day()===0||au.day()===6){ax.push("weekend")
}r({type:"dp.classify",date:au,classNames:ax});
az.append('<td data-action="selectDay" data-day="'+au.format("L")+'" class="'+ax.join(" ")+'">'+au.date()+"</td>");
au.add(1,"d")
}av.find("tbody").empty().append(ay);
w();
z();
ae()
},K=function(){var av=N.find(".timepicker-hours table"),ax=ag.clone().startOf("d"),au=[],aw=b("<tr>");
if(ag.hour()>11&&!h){ax.hour(12)
}while(ax.isSame(ag,"d")&&(h||(ag.hour()<12&&ax.hour()<12)||ag.hour()>11)){if(ax.hour()%4===0){aw=b("<tr>");
au.push(aw)
}aw.append('<td data-action="selectHour" class="hour'+(!k(ax,"h")?" disabled":"")+'">'+ax.format(h?"HH":"hh")+"</td>");
ax.add(1,"h")
}av.empty().append(au)
},F=function(){var aw=N.find(".timepicker-minutes table"),ax=ag.clone().startOf("h"),au=[],ay=b("<tr>"),av=C.stepping===1?5:C.stepping;
while(ag.isSame(ax,"h")){if(ax.minute()%(av*4)===0){ay=b("<tr>");
au.push(ay)
}ay.append('<td data-action="selectMinute" class="minute'+(!k(ax,"m")?" disabled":"")+'">'+ax.format("mm")+"</td>");
ax.add(av,"m")
}aw.empty().append(au)
},g=function(){var aw=N.find(".timepicker-seconds table"),au=ag.clone().startOf("m"),av=[],ax=b("<tr>");
while(ag.isSame(au,"m")){if(au.second()%20===0){ax=b("<tr>");
av.push(ax)
}ax.append('<td data-action="selectSecond" class="second'+(!k(au,"s")?" disabled":"")+'">'+au.format("ss")+"</td>");
au.add(5,"s")
}aw.empty().append(av)
},n=function(){var au,av,aw=N.find(".timepicker span[data-time-component]");
if(!h){au=N.find(".timepicker [data-action=togglePeriod]");
av=al.clone().add((al.hours()>=12)?-12:12,"h");
au.text(al.format("A"));
if(k(av,"h")){au.removeClass("disabled")
}else{au.addClass("disabled")
}}aw.filter("[data-time-component=hours]").text(al.format(h?"HH":"hh"));
aw.filter("[data-time-component=minutes]").text(al.format("mm"));
aw.filter("[data-time-component=seconds]").text(al.format("ss"));
K();
F();
g()
},O=function(){if(!N){return
}q();
n()
},T=function(av){var au=S?null:al;
if(!av){S=true;
j.val("");
v.data("date","");
r({type:"dp.change",date:false,oldDate:au});
O();
return
}av=av.clone().locale(C.locale);
if(o()){av.tz(C.timeZone)
}if(C.stepping!==1){av.minutes((Math.round(av.minutes()/C.stepping)*C.stepping)).seconds(0);
while(C.minDate&&av.isBefore(C.minDate)){av.add(C.stepping,"minutes")
}}if(k(av)){al=av;
ag=al.clone();
j.val(al.format(x));
v.data("date",al.format(x));
S=false;
O();
r({type:"dp.change",date:al.clone(),oldDate:au})
}else{if(!C.keepInvalid){j.val(S?"":al.format(x))
}else{r({type:"dp.change",date:av,oldDate:au})
}r({type:"dp.error",date:av,oldDate:au})
}},ai=function(){var au=false;
if(!N){return p
}N.find(".collapse").each(function(){var av=b(this).data("collapse");
if(av&&av.transitioning){au=true;
return false
}return true
});
if(au){return p
}if(am&&am.hasClass("btn")){am.toggleClass("active")
}N.hide();
b(window).off("resize",m);
N.off("click","[data-action]");
N.off("mousedown",false);
N.remove();
N=false;
r({type:"dp.hide",date:al.clone()});
j.blur();
ag=al.clone();
return p
},X=function(){T(null)
},W=function(au){if(C.parseInputDate===undefined){if(!c.isMoment(au)||au instanceof Date){au=y(au)
}}else{au=C.parseInputDate(au)
}return au
},aa={next:function(){var au=ad[s].navFnc;
ag.add(ad[s].navStep,au);
q();
I(au)
},previous:function(){var au=ad[s].navFnc;
ag.subtract(ad[s].navStep,au);
q();
I(au)
},pickerSwitch:function(){e(1)
},selectMonth:function(av){var au=b(av.target).closest("tbody").find("span").index(b(av.target));
ag.month(au);
if(s===U){T(al.clone().year(ag.year()).month(ag.month()));
if(!C.inline){ai()
}}else{e(-1);
q()
}I("M")
},selectYear:function(av){var au=parseInt(b(av.target).text(),10)||0;
ag.year(au);
if(s===U){T(al.clone().year(ag.year()));
if(!C.inline){ai()
}}else{e(-1);
q()
}I("YYYY")
},selectDecade:function(av){var au=parseInt(b(av.target).data("selection"),10)||0;
ag.year(au);
if(s===U){T(al.clone().year(ag.year()));
if(!C.inline){ai()
}}else{e(-1);
q()
}I("YYYY")
},selectDay:function(av){var au=ag.clone();
if(b(av.target).is(".old")){au.subtract(1,"M")
}if(b(av.target).is(".new")){au.add(1,"M")
}T(au.date(parseInt(b(av.target).text(),10)));
if(!G()&&!C.keepOpen&&!C.inline){ai()
}},incrementHours:function(){var au=al.clone().add(1,"h");
if(k(au,"h")){T(au)
}},incrementMinutes:function(){var au=al.clone().add(C.stepping,"m");
if(k(au,"m")){T(au)
}},incrementSeconds:function(){var au=al.clone().add(1,"s");
if(k(au,"s")){T(au)
}},decrementHours:function(){var au=al.clone().subtract(1,"h");
if(k(au,"h")){T(au)
}},decrementMinutes:function(){var au=al.clone().subtract(C.stepping,"m");
if(k(au,"m")){T(au)
}},decrementSeconds:function(){var au=al.clone().subtract(1,"s");
if(k(au,"s")){T(au)
}},togglePeriod:function(){T(al.clone().add((al.hours()>=12)?-12:12,"h"))
},togglePicker:function(az){var ay=b(az.target),ax=ay.closest("ul"),av=ax.find(".in"),au=ax.find(".collapse:not(.in)"),aw;
if(av&&av.length){aw=av.data("collapse");
if(aw&&aw.transitioning){return
}if(av.collapse){av.collapse("hide");
au.collapse("show")
}else{av.removeClass("in");
au.addClass("in")
}if(ay.is("span")){ay.toggleClass(C.icons.time+" "+C.icons.date)
}else{ay.find("span").toggleClass(C.icons.time+" "+C.icons.date)
}}},showPicker:function(){N.find(".timepicker > div:not(.timepicker-picker)").hide();
N.find(".timepicker .timepicker-picker").show()
},showHours:function(){N.find(".timepicker .timepicker-picker").hide();
N.find(".timepicker .timepicker-hours").show()
},showMinutes:function(){N.find(".timepicker .timepicker-picker").hide();
N.find(".timepicker .timepicker-minutes").show()
},showSeconds:function(){N.find(".timepicker .timepicker-picker").hide();
N.find(".timepicker .timepicker-seconds").show()
},selectHour:function(av){var au=parseInt(b(av.target).text(),10);
if(!h){if(al.hours()>=12){if(au!==12){au+=12
}}else{if(au===12){au=0
}}}T(al.clone().hours(au));
aa.showPicker.call(p)
},selectMinute:function(au){T(al.clone().minutes(parseInt(b(au.target).text(),10)));
aa.showPicker.call(p)
},selectSecond:function(au){T(al.clone().seconds(parseInt(b(au.target).text(),10)));
aa.showPicker.call(p)
},clear:X,today:function(){var au=y();
if(k(au,"d")){T(au)
}},close:ai},L=function(au){if(b(au.currentTarget).is(".disabled")){return false
}aa[b(au.currentTarget).data("action")].apply(p,arguments);
return false
},V=function(){var au,av={year:function(aw){return aw.month(0).date(1).hours(0).seconds(0).minutes(0)
},month:function(aw){return aw.date(1).hours(0).seconds(0).minutes(0)
},day:function(aw){return aw.hours(0).seconds(0).minutes(0)
},hour:function(aw){return aw.seconds(0).minutes(0)
},minute:function(aw){return aw.seconds(0)
}};
if(j.prop("disabled")||(!C.ignoreReadonly&&j.prop("readonly"))||N){return p
}if(j.val()!==undefined&&j.val().trim().length!==0){T(W(j.val().trim()))
}else{if(S&&C.useCurrent&&(C.inline||(j.is("input")&&j.val().trim().length===0))){au=y();
if(typeof C.useCurrent==="string"){au=av[C.useCurrent](au)
}T(au)
}}N=at();
ak();
H();
N.find(".timepicker-hours").hide();
N.find(".timepicker-minutes").hide();
N.find(".timepicker-seconds").hide();
O();
e();
b(window).on("resize",m);
N.on("click","[data-action]",L);
N.on("mousedown",false);
if(am&&am.hasClass("btn")){am.toggleClass("active")
}m();
N.show();
if(C.focusOnShow&&!j.is(":focus")){j.focus()
}r({type:"dp.show"});
return p
},E=function(){return(N?ai():V())
},B=function(aA){var aD=null,ay,az,aB=[],ax={},aC=aA.which,av,au,aw="p";
aj[aC]=aw;
for(ay in aj){if(aj.hasOwnProperty(ay)&&aj[ay]===aw){aB.push(ay);
if(parseInt(ay,10)!==aC){ax[ay]=true
}}}for(ay in C.keyBinds){if(C.keyBinds.hasOwnProperty(ay)&&typeof(C.keyBinds[ay])==="function"){av=ay.split(" ");
if(av.length===aB.length&&D[aC]===av[av.length-1]){au=true;
for(az=av.length-2;
az>=0;
az--){if(!(D[av[az]] in ax)){au=false;
break
}}if(au){aD=C.keyBinds[ay];
break
}}}}if(aD){aD.call(p,N);
aA.stopPropagation();
aA.preventDefault()
}},af=function(au){aj[au.which]="r";
au.stopPropagation();
au.preventDefault()
},f=function(av){var aw=b(av.target).val().trim(),au=aw?W(aw):null;
T(au);
av.stopImmediatePropagation();
return false
},u=function(){j.on({change:f,blur:C.debug?"":ai,keydown:B,keyup:af,focus:C.allowInputToggle?V:""});
if(v.is("input")){j.on({focus:V})
}else{if(am){am.on("click",E);
am.on("mousedown",false)
}}},J=function(){j.off({change:f,blur:blur,keydown:B,keyup:af,focus:C.allowInputToggle?ai:""});
if(v.is("input")){j.off({focus:V})
}else{if(am){am.off("click",E);
am.off("mousedown",false)
}}},Y=function(au){var av={};
b.each(au,function(){var aw=W(this);
if(aw.isValid()){av[aw.format("YYYY-MM-DD")]=true
}});
return(Object.keys(av).length)?av:false
},ar=function(au){var av={};
b.each(au,function(){av[this]=true
});
return(Object.keys(av).length)?av:false
},Z=function(){var au=C.format||"L LT";
x=au.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(av){var aw=al.localeData().longDateFormat(av)||av;
return aw.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(ax){return al.localeData().longDateFormat(ax)||ax
})
});
aq=C.extraFormats?C.extraFormats.slice():[];
if(aq.indexOf(au)<0&&aq.indexOf(x)<0){aq.push(x)
}h=(x.toLowerCase().indexOf("a")<1&&x.replace(/\[.*?\]/g,"").indexOf("h")<1);
if(ah("y")){U=2
}if(ah("M")){U=1
}if(ah("d")){U=0
}s=Math.max(U,s);
if(!S){T(al)
}};
p.destroy=function(){ai();
J();
v.removeData("DateTimePicker");
v.removeData("date")
};
p.toggle=E;
p.show=V;
p.hide=ai;
p.disable=function(){ai();
if(am&&am.hasClass("btn")){am.addClass("disabled")
}j.prop("disabled",true);
return p
};
p.enable=function(){if(am&&am.hasClass("btn")){am.removeClass("disabled")
}j.prop("disabled",false);
return p
};
p.ignoreReadonly=function(au){if(arguments.length===0){return C.ignoreReadonly
}if(typeof au!=="boolean"){throw new TypeError("ignoreReadonly () expects a boolean parameter")
}C.ignoreReadonly=au;
return p
};
p.options=function(au){if(arguments.length===0){return b.extend(true,{},C)
}if(!(au instanceof Object)){throw new TypeError("options() options parameter should be an object")
}b.extend(true,C,au);
b.each(C,function(av,aw){if(p[av]!==undefined){p[av](aw)
}else{throw new TypeError("option "+av+" is not recognized!")
}});
return p
};
p.date=function(au){if(arguments.length===0){if(S){return null
}return al.clone()
}if(au!==null&&typeof au!=="string"&&!c.isMoment(au)&&!(au instanceof Date)){throw new TypeError("date() parameter must be one of [null, string, moment or Date]")
}T(au===null?null:W(au));
return p
};
p.format=function(au){if(arguments.length===0){return C.format
}if((typeof au!=="string")&&((typeof au!=="boolean")||(au!==false))){throw new TypeError("format() expects a string or boolean:false parameter "+au)
}C.format=au;
if(x){Z()
}return p
};
p.timeZone=function(au){if(arguments.length===0){return C.timeZone
}if(typeof au!=="string"){throw new TypeError("newZone() expects a string parameter")
}C.timeZone=au;
return p
};
p.dayViewHeaderFormat=function(au){if(arguments.length===0){return C.dayViewHeaderFormat
}if(typeof au!=="string"){throw new TypeError("dayViewHeaderFormat() expects a string parameter")
}C.dayViewHeaderFormat=au;
return p
};
p.extraFormats=function(au){if(arguments.length===0){return C.extraFormats
}if(au!==false&&!(au instanceof Array)){throw new TypeError("extraFormats() expects an array or false parameter")
}C.extraFormats=au;
if(aq){Z()
}return p
};
p.disabledDates=function(au){if(arguments.length===0){return(C.disabledDates?b.extend({},C.disabledDates):C.disabledDates)
}if(!au){C.disabledDates=false;
O();
return p
}if(!(au instanceof Array)){throw new TypeError("disabledDates() expects an array parameter")
}C.disabledDates=Y(au);
C.enabledDates=false;
O();
return p
};
p.enabledDates=function(au){if(arguments.length===0){return(C.enabledDates?b.extend({},C.enabledDates):C.enabledDates)
}if(!au){C.enabledDates=false;
O();
return p
}if(!(au instanceof Array)){throw new TypeError("enabledDates() expects an array parameter")
}C.enabledDates=Y(au);
C.disabledDates=false;
O();
return p
};
p.daysOfWeekDisabled=function(au){if(arguments.length===0){return C.daysOfWeekDisabled.splice(0)
}if((typeof au==="boolean")&&!au){C.daysOfWeekDisabled=false;
O();
return p
}if(!(au instanceof Array)){throw new TypeError("daysOfWeekDisabled() expects an array parameter")
}C.daysOfWeekDisabled=au.reduce(function(aw,ax){ax=parseInt(ax,10);
if(ax>6||ax<0||isNaN(ax)){return aw
}if(aw.indexOf(ax)===-1){aw.push(ax)
}return aw
},[]).sort();
if(C.useCurrent&&!C.keepInvalid){var av=0;
while(!k(al,"d")){al.add(1,"d");
if(av===31){throw"Tried 31 times to find a valid date"
}av++
}T(al)
}O();
return p
};
p.maxDate=function(av){if(arguments.length===0){return C.maxDate?C.maxDate.clone():C.maxDate
}if((typeof av==="boolean")&&av===false){C.maxDate=false;
O();
return p
}if(typeof av==="string"){if(av==="now"||av==="moment"){av=y()
}}var au=W(av);
if(!au.isValid()){throw new TypeError("maxDate() Could not parse date parameter: "+av)
}if(C.minDate&&au.isBefore(C.minDate)){throw new TypeError("maxDate() date parameter is before options.minDate: "+au.format(x))
}C.maxDate=au;
if(C.useCurrent&&!C.keepInvalid&&al.isAfter(av)){T(C.maxDate)
}if(ag.isAfter(au)){ag=au.clone().subtract(C.stepping,"m")
}O();
return p
};
p.minDate=function(av){if(arguments.length===0){return C.minDate?C.minDate.clone():C.minDate
}if((typeof av==="boolean")&&av===false){C.minDate=false;
O();
return p
}if(typeof av==="string"){if(av==="now"||av==="moment"){av=y()
}}var au=W(av);
if(!au.isValid()){throw new TypeError("minDate() Could not parse date parameter: "+av)
}if(C.maxDate&&au.isAfter(C.maxDate)){throw new TypeError("minDate() date parameter is after options.maxDate: "+au.format(x))
}C.minDate=au;
if(C.useCurrent&&!C.keepInvalid&&al.isBefore(av)){T(C.minDate)
}if(ag.isBefore(au)){ag=au.clone().add(C.stepping,"m")
}O();
return p
};
p.defaultDate=function(av){if(arguments.length===0){return C.defaultDate?C.defaultDate.clone():C.defaultDate
}if(!av){C.defaultDate=false;
return p
}if(typeof av==="string"){if(av==="now"||av==="moment"){av=y()
}else{av=y(av)
}}var au=W(av);
if(!au.isValid()){throw new TypeError("defaultDate() Could not parse date parameter: "+av)
}if(!k(au)){throw new TypeError("defaultDate() date passed is invalid according to component setup validations")
}C.defaultDate=au;
if((C.defaultDate&&C.inline)||j.val().trim()===""){T(C.defaultDate)
}return p
};
p.locale=function(au){if(arguments.length===0){return C.locale
}if(!c.localeData(au)){throw new TypeError("locale() locale "+au+" is not loaded from moment locales!")
}C.locale=au;
al.locale(C.locale);
ag.locale(C.locale);
if(x){Z()
}if(N){ai();
V()
}return p
};
p.stepping=function(au){if(arguments.length===0){return C.stepping
}au=parseInt(au,10);
if(isNaN(au)||au<1){au=1
}C.stepping=au;
return p
};
p.useCurrent=function(au){var av=["year","month","day","hour","minute"];
if(arguments.length===0){return C.useCurrent
}if((typeof au!=="boolean")&&(typeof au!=="string")){throw new TypeError("useCurrent() expects a boolean or string parameter")
}if(typeof au==="string"&&av.indexOf(au.toLowerCase())===-1){throw new TypeError("useCurrent() expects a string parameter of "+av.join(", "))
}C.useCurrent=au;
return p
};
p.collapse=function(au){if(arguments.length===0){return C.collapse
}if(typeof au!=="boolean"){throw new TypeError("collapse() expects a boolean parameter")
}if(C.collapse===au){return p
}C.collapse=au;
if(N){ai();
V()
}return p
};
p.icons=function(au){if(arguments.length===0){return b.extend({},C.icons)
}if(!(au instanceof Object)){throw new TypeError("icons() expects parameter to be an Object")
}b.extend(C.icons,au);
if(N){ai();
V()
}return p
};
p.tooltips=function(au){if(arguments.length===0){return b.extend({},C.tooltips)
}if(!(au instanceof Object)){throw new TypeError("tooltips() expects parameter to be an Object")
}b.extend(C.tooltips,au);
if(N){ai();
V()
}return p
};
p.useStrict=function(au){if(arguments.length===0){return C.useStrict
}if(typeof au!=="boolean"){throw new TypeError("useStrict() expects a boolean parameter")
}C.useStrict=au;
return p
};
p.sideBySide=function(au){if(arguments.length===0){return C.sideBySide
}if(typeof au!=="boolean"){throw new TypeError("sideBySide() expects a boolean parameter")
}C.sideBySide=au;
if(N){ai();
V()
}return p
};
p.viewMode=function(au){if(arguments.length===0){return C.viewMode
}if(typeof au!=="string"){throw new TypeError("viewMode() expects a string parameter")
}if(an.indexOf(au)===-1){throw new TypeError("viewMode() parameter must be one of ("+an.join(", ")+") value")
}C.viewMode=au;
s=Math.max(an.indexOf(au),U);
e();
return p
};
p.toolbarPlacement=function(au){if(arguments.length===0){return C.toolbarPlacement
}if(typeof au!=="string"){throw new TypeError("toolbarPlacement() expects a string parameter")
}if(ap.indexOf(au)===-1){throw new TypeError("toolbarPlacement() parameter must be one of ("+ap.join(", ")+") value")
}C.toolbarPlacement=au;
if(N){ai();
V()
}return p
};
p.widgetPositioning=function(au){if(arguments.length===0){return b.extend({},C.widgetPositioning)
}if(({}).toString.call(au)!=="[object Object]"){throw new TypeError("widgetPositioning() expects an object variable")
}if(au.horizontal){if(typeof au.horizontal!=="string"){throw new TypeError("widgetPositioning() horizontal variable must be a string")
}au.horizontal=au.horizontal.toLowerCase();
if(i.indexOf(au.horizontal)===-1){throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+i.join(", ")+")")
}C.widgetPositioning.horizontal=au.horizontal
}if(au.vertical){if(typeof au.vertical!=="string"){throw new TypeError("widgetPositioning() vertical variable must be a string")
}au.vertical=au.vertical.toLowerCase();
if(t.indexOf(au.vertical)===-1){throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+t.join(", ")+")")
}C.widgetPositioning.vertical=au.vertical
}O();
return p
};
p.calendarWeeks=function(au){if(arguments.length===0){return C.calendarWeeks
}if(typeof au!=="boolean"){throw new TypeError("calendarWeeks() expects parameter to be a boolean value")
}C.calendarWeeks=au;
O();
return p
};
p.showTodayButton=function(au){if(arguments.length===0){return C.showTodayButton
}if(typeof au!=="boolean"){throw new TypeError("showTodayButton() expects a boolean parameter")
}C.showTodayButton=au;
if(N){ai();
V()
}return p
};
p.showClear=function(au){if(arguments.length===0){return C.showClear
}if(typeof au!=="boolean"){throw new TypeError("showClear() expects a boolean parameter")
}C.showClear=au;
if(N){ai();
V()
}return p
};
p.widgetParent=function(au){if(arguments.length===0){return C.widgetParent
}if(typeof au==="string"){au=b(au)
}if(au!==null&&(typeof au!=="string"&&!(au instanceof b))){throw new TypeError("widgetParent() expects a string or a jQuery object parameter")
}C.widgetParent=au;
if(N){ai();
V()
}return p
};
p.keepOpen=function(au){if(arguments.length===0){return C.keepOpen
}if(typeof au!=="boolean"){throw new TypeError("keepOpen() expects a boolean parameter")
}C.keepOpen=au;
return p
};
p.focusOnShow=function(au){if(arguments.length===0){return C.focusOnShow
}if(typeof au!=="boolean"){throw new TypeError("focusOnShow() expects a boolean parameter")
}C.focusOnShow=au;
return p
};
p.inline=function(au){if(arguments.length===0){return C.inline
}if(typeof au!=="boolean"){throw new TypeError("inline() expects a boolean parameter")
}C.inline=au;
return p
};
p.clear=function(){X();
return p
};
p.keyBinds=function(au){if(arguments.length===0){return C.keyBinds
}C.keyBinds=au;
return p
};
p.getMoment=function(au){return y(au)
};
p.debug=function(au){if(typeof au!=="boolean"){throw new TypeError("debug() expects a boolean parameter")
}C.debug=au;
return p
};
p.allowInputToggle=function(au){if(arguments.length===0){return C.allowInputToggle
}if(typeof au!=="boolean"){throw new TypeError("allowInputToggle() expects a boolean parameter")
}C.allowInputToggle=au;
return p
};
p.showClose=function(au){if(arguments.length===0){return C.showClose
}if(typeof au!=="boolean"){throw new TypeError("showClose() expects a boolean parameter")
}C.showClose=au;
return p
};
p.keepInvalid=function(au){if(arguments.length===0){return C.keepInvalid
}if(typeof au!=="boolean"){throw new TypeError("keepInvalid() expects a boolean parameter")
}C.keepInvalid=au;
return p
};
p.datepickerInput=function(au){if(arguments.length===0){return C.datepickerInput
}if(typeof au!=="string"){throw new TypeError("datepickerInput() expects a string parameter")
}C.datepickerInput=au;
return p
};
p.parseInputDate=function(au){if(arguments.length===0){return C.parseInputDate
}if(typeof au!=="function"){throw new TypeError("parseInputDate() sholud be as function")
}C.parseInputDate=au;
return p
};
p.disabledTimeIntervals=function(au){if(arguments.length===0){return(C.disabledTimeIntervals?b.extend({},C.disabledTimeIntervals):C.disabledTimeIntervals)
}if(!au){C.disabledTimeIntervals=false;
O();
return p
}if(!(au instanceof Array)){throw new TypeError("disabledTimeIntervals() expects an array parameter")
}C.disabledTimeIntervals=au;
O();
return p
};
p.disabledHours=function(au){if(arguments.length===0){return(C.disabledHours?b.extend({},C.disabledHours):C.disabledHours)
}if(!au){C.disabledHours=false;
O();
return p
}if(!(au instanceof Array)){throw new TypeError("disabledHours() expects an array parameter")
}C.disabledHours=ar(au);
C.enabledHours=false;
if(C.useCurrent&&!C.keepInvalid){var av=0;
while(!k(al,"h")){al.add(1,"h");
if(av===24){throw"Tried 24 times to find a valid date"
}av++
}T(al)
}O();
return p
};
p.enabledHours=function(au){if(arguments.length===0){return(C.enabledHours?b.extend({},C.enabledHours):C.enabledHours)
}if(!au){C.enabledHours=false;
O();
return p
}if(!(au instanceof Array)){throw new TypeError("enabledHours() expects an array parameter")
}C.enabledHours=ar(au);
C.disabledHours=false;
if(C.useCurrent&&!C.keepInvalid){var av=0;
while(!k(al,"h")){al.add(1,"h");
if(av===24){throw"Tried 24 times to find a valid date"
}av++
}T(al)
}O();
return p
};
p.viewDate=function(au){if(arguments.length===0){return ag.clone()
}if(!au){ag=al.clone();
return p
}if(typeof au!=="string"&&!c.isMoment(au)&&!(au instanceof Date)){throw new TypeError("viewDate() parameter must be one of [string, moment or Date]")
}ag=W(au);
I();
return p
};
if(v.is("input")){j=v
}else{j=v.find(C.datepickerInput);
if(j.length===0){j=v.find("input")
}else{if(!j.is("input")){throw new Error('CSS class "'+C.datepickerInput+'" cannot be applied to non input element')
}}}if(v.hasClass("input-group")){if(v.find(".datepickerbutton").length===0){am=v.find(".input-group-addon")
}else{am=v.find(".datepickerbutton")
}}if(!C.inline&&!j.is("input")){throw new Error("Could not initialize DateTimePicker without an input element")
}al=y();
ag=al.clone();
b.extend(true,C,d());
p.options(C);
Z();
u();
if(j.prop("disabled")){p.disable()
}if(j.is("input")&&j.val().trim().length!==0){T(W(j.val().trim()))
}else{if(C.defaultDate&&j.attr("placeholder")===undefined){T(C.defaultDate)
}}if(C.inline){V()
}return p
};
b.fn.datetimepicker=function(f){f=f||{};
var e=Array.prototype.slice.call(arguments,1),h=true,d=["destroy","hide","show","toggle"],g;
if(typeof f==="object"){return this.each(function(){var j=b(this),i;
if(!j.data("DateTimePicker")){i=b.extend(true,{},b.fn.datetimepicker.defaults,f);
j.data("DateTimePicker",a(j,i))
}})
}else{if(typeof f==="string"){this.each(function(){var j=b(this),i=j.data("DateTimePicker");
if(!i){throw new Error('bootstrap-datetimepicker("'+f+'") method was called on an element that is not using DateTimePicker')
}g=i[f].apply(i,e);
h=g===i
});
if(h||b.inArray(f,d)>-1){return this
}return g
}}throw new TypeError("Invalid arguments for DateTimePicker: "+f)
};
b.fn.datetimepicker.defaults={timeZone:"",format:false,dayViewHeaderFormat:"MMMM YYYY",extraFormats:false,stepping:1,minDate:false,maxDate:false,useCurrent:true,collapse:true,locale:c.locale(),defaultDate:false,disabledDates:false,enabledDates:false,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time"},useStrict:false,sideBySide:false,daysOfWeekDisabled:false,calendarWeeks:false,viewMode:"days",toolbarPlacement:"default",showTodayButton:false,showClear:false,showClose:false,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:false,keepOpen:false,focusOnShow:true,inline:false,keepInvalid:false,datepickerInput:".datepickerinput",keyBinds:{up:function(e){if(!e){return
}var f=this.date()||this.getMoment();
if(e.find(".datepicker").is(":visible")){this.date(f.clone().subtract(7,"d"))
}else{this.date(f.clone().add(this.stepping(),"m"))
}},down:function(e){if(!e){this.show();
return
}var f=this.date()||this.getMoment();
if(e.find(".datepicker").is(":visible")){this.date(f.clone().add(7,"d"))
}else{this.date(f.clone().subtract(this.stepping(),"m"))
}},"control up":function(e){if(!e){return
}var f=this.date()||this.getMoment();
if(e.find(".datepicker").is(":visible")){this.date(f.clone().subtract(1,"y"))
}else{this.date(f.clone().add(1,"h"))
}},"control down":function(e){if(!e){return
}var f=this.date()||this.getMoment();
if(e.find(".datepicker").is(":visible")){this.date(f.clone().add(1,"y"))
}else{this.date(f.clone().subtract(1,"h"))
}},left:function(e){if(!e){return
}var f=this.date()||this.getMoment();
if(e.find(".datepicker").is(":visible")){this.date(f.clone().subtract(1,"d"))
}},right:function(e){if(!e){return
}var f=this.date()||this.getMoment();
if(e.find(".datepicker").is(":visible")){this.date(f.clone().add(1,"d"))
}},pageUp:function(e){if(!e){return
}var f=this.date()||this.getMoment();
if(e.find(".datepicker").is(":visible")){this.date(f.clone().subtract(1,"M"))
}},pageDown:function(e){if(!e){return
}var f=this.date()||this.getMoment();
if(e.find(".datepicker").is(":visible")){this.date(f.clone().add(1,"M"))
}},enter:function(){this.hide()
},escape:function(){this.hide()
},"control space":function(d){if(!d){return
}if(d.find(".timepicker").is(":visible")){d.find('.btn[data-action="togglePeriod"]').click()
}},t:function(){this.date(this.getMoment())
},"delete":function(){this.clear()
}},debug:false,allowInputToggle:false,disabledTimeIntervals:false,disabledHours:false,enabledHours:false,viewDate:false};
return b.fn.datetimepicker
}));
(function(){var d=navigator.appName=="Netscape"&&navigator.appVersion.indexOf("Edge")>-1,a=!!window.MSInputMethodContext&&!!document.documentMode,b=navigator.appVersion.indexOf("MSIE 10")!==-1,e=navigator.appVersion.indexOf("MSIE 9")!==-1,c=document.createElement("script");
if(a||b||e){loadjs("/etc/clientlibs/altera-www/global/js/polyfills/polyfills.min.js")
}if(d){loadjs("/etc/clientlibs/altera-www/global/js/polyfills/edge-polyfills.min.js")
}})();
var fpga={};
fpga.utils={};
"use strict";
fpga.utils.debounce=function(b,d,a){var c;
return function(){var h=this,g=arguments;
var f=function(){c=null;
if(!a){b.apply(h,g)
}};
var e=a&&!c;
clearTimeout(c);
c=setTimeout(f,d);
if(e){b.apply(h,g)
}}
};
fpga.utils.delay=function(a){var b=0;
return function(c){clearTimeout(b);
b=setTimeout(c,a)
}
};
fpga.utils.isValidEmail=function(c){var e=false;
var a="";
var d="";
var b="";
if(c!=""&&c.length>5){a=c.indexOf("@");
d=c.substr(a+1);
b=d.indexOf(".")+a+1;
if(a>=1&&a<b&&b+1<c.length){e=true
}if(c.lastIndexOf(".")+1==c.length||c.lastIndexOf("@")+1==c.length||c.replace(/^\s+|\s+$/g,"").indexOf(" ")!=-1){e=false
}}return e
};
fpga.utils.getURLParameter=function(a){var d=window.location.search.substring(1),c=d.split("&"),e;
for(var b=0;
b<c.length;
b++){e=c[b].split("=");
if(e[0]==a){return unescape(e[1])
}}};
fpga.utils.getURLParameters=function(){var c=decodeURI(window.location.search.substring(1)),a=c.split("&"),b={};
a.forEach(function(e){if(e.indexOf("wcmmode")===-1){var d=e.split("=");
b[d[0]]=d[1]
}});
return b
};
fpga.utils.createCookie=function(d,g,a,e){var b="",f="",c=null;
if(a){f=";Domain="+a
}if(e){c=new Date();
c.setTime(c.getTime()+(e*1000));
b=";Expires="+c.toGMTString()
}document.cookie=d+"="+g+b+f+";Path=/"
};
fpga.utils.getCookie=function(d){var c=d+"=",b=document.cookie.split(";"),e;
for(var a=0;
a<b.length;
a++){e=b[a];
while(e.charAt(0)===" "){e=e.substring(1);
if(e.indexOf(d)!==-1){return e.substring(c.length,e.length)
}}}return null
};
fpga.utils.getCookie_depricate=function(b){var e=b+"=";
var a=document.cookie.split(";");
for(var d=0;
d<a.length;
d++){var f=a[d];
while(f.charAt(0)==" "){f=f.substring(1,f.length)
}if(f.indexOf(e)==0){return f.substring(e.length,f.length)
}}return null
};
fpga.utils.updateQueryString=function(c,a,d){var b=new RegExp("([?&])"+a+"=.*?(&|$)","i"),e=c.indexOf("?")!==-1?"&":"?";
if(c.match(b)){return c.replace(b,"$1"+a+"="+d+"$2")
}else{return c+e+a+"="+d
}};
fpga.utils.goBack=function(){history.back(-1)
};
fpga.utils.enable=function(a){if(a&&a.constructor!==HTMLInputElement){return
}a.classList.remove("disabled");
a.removeAttribute("disabled")
};
fpga.utils.disable=function(a){if(a&&a.constructor!==HTMLInputElement){return
}a.classList.add("disabled");
a.setAttribute("disabled",true)
};
fpga.utils.region=function(){var a=document.getElementById("intel_fpga");
return a.dataset.region||"en_us"
};
fpga.utils.region.abbr=function(){return fpga.utils.region().split("_")[0]
};
fpga.utils.region.path=function(){return fpga.utils.region().split("_").reverse().join("/")
};
fpga.utils.extend=function(){function a(){}return function(d,c){a.prototype=d;
var b=new a();
for(var e in c){if(c.hasOwnProperty(e)){b[e]=c[e]
}}return b
}
}();
fpga.utils.getDisabledFields=function(b){var a=b;
return function(h){var c=[].slice.call(a.querySelectorAll(".disabled")),g={},e,f;
c.forEach(d);
function d(i){g[i.id]=i
}f={fieldList:c,fields:g};
if(h==="fields"){f=g
}if(h==="list"){f=c
}return f
}
};
fpga.utils.observable=function(){var a={observers:[],subscribe:function(b){this.observers.push(b)
},unsubscribe:function(b){this.observers.filter(function(c){return c!==b
})
},notify:function(b){this.observers.forEach(function(c){c(b)
})
}};
return Object.create(a)
};
fpga.utils.pubSub=function(){var a={on:function(c,b){this.events[c]=this.events[c]||[];
this.events[c].push(b)
},trigger:function(c){var d=this.events[c],b=null;
if(!d||!d[0]){return
}b=Array.from(arguments).slice(1);
d.map(function(e){e.apply(this,b)
})
}};
return Object.assign(Object.create(a),{events:{}})
};
fpga.utils.getHeight=function(d){var a=Math.ceil(d.getBoundingClientRect().height),b=parseInt(window.getComputedStyle(d)["margin-top"],10),c=parseInt(window.getComputedStyle(d)["margin-bottom"],10);
return a+b+c
};
fpga.utils.getWidth=function(d){var a=Math.ceil(d.getBoundingClientRect().width),b=parseInt(window.getComputedStyle(d)["margin-left"],10),c=parseInt(window.getComputedStyle(d)["margin-right"],10);
return a+b+c
};
fpga.utils.offset=function offset(a){var b=a.getBoundingClientRect(),d=window.pageXOffset||document.documentElement.scrollLeft,c=window.pageYOffset||document.documentElement.scrollTop;
return{top:b.top+c,left:b.left+d}
};
fpga.binPath=function(c,b){var a=location.host.includes("localhost")||location.host.includes("cms");
return a?c:b
};
fpga.isPublish=function(){var a=true;
if(typeof(CQ)!=="undefined"&&CQ.WCM){if(CQ.WCM.isEditMode(true)||CQ.WCM.isDesignMode(true)){a=false
}}return a
};
fpga.validate={};
fpga.validate.phonePattern_us="[\\(]\\d{3}[\\)]\\s*\\d{3}[\\-]\\d{4}[\\s*|\\+0-9]*";
fpga.validate.phonePattern_other="^([0|\\+[0-9]{5,20})?([0-9]{0})?(\\sx[0-9]{1,6})*$";
fpga.validate.emailPattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,7}$";
fpga.events={};
fpga.events.create=function(a,b){var d=new CustomEvent(a),c=b&&b.nodeType===1?b:document;
return{dispatch:function(e){if(e){d.param=e
}return c.dispatchEvent(d)
}}
};
$(function(){var b={trigger:"hover"},a={container:"body"};
if(fpga.utils.popovers){b=fpga.utils.extend(b,fpga.utils.popovers)
}if(fpga.utils.tooltips){a=fpga.utils.extend(a,fpga.utils.tooltips)
}if(fpga.isPublish()){$('[data-toggle="popover"]').popover(b);
$('[data-toggle="tooltip"]').tooltip(a)
}});
fpga.pageLoad=function(a){document.addEventListener("DOMContentLoaded",b,false);
function b(){a.call(fpga)
}}.bind(fpga);
svg4everybody();
(function(){var b,a={init:function(){document.addEventListener("click",this.handleEvents.bind(this),false)
},handleEvents:function(d){var c=d.target;
if(c.classList.contains("overlay-close")&&document.documentElement.classList.contains("modal-open")){this.closeOverlay(c);
document.documentElement.classList.remove("modal-open")
}if(c.classList.contains("button-overlay-init")){document.documentElement.classList.add("modal-open");
b.classList.add("overlay");
setTimeout(function(){b.classList.add("expand")
},0)
}},closeOverlay:function(d){var c=d.parentNode;
while(!c.classList.contains("overlay")){c=c.parentNode
}c.classList.remove("expand");
if(c.classList.contains("button-overlay")){setTimeout(function(){c.classList.remove("overlay")
},300)
}}};
fpga.pageLoad(function(){b=document.querySelector(".button-overlay")||null;
if(this.isPublish()&&b){a.init()
}})
}());
(function(){$(document).ready(function(){if(!document.querySelector(".sidebar-widgets")){return
}var b=document.querySelector(".sidebar-widgets")||null,a=b.getAttribute("data-fixed-sidebar")||true;
if(b&&a&&a!=="false"){$(window).on("resize",fpga.utils.debounce(c,100));
c()
}function c(){var d=$(b);
b.style.height=window.innerHeight-90+"px";
if(window.matchMedia("(min-width: 768px)").matches){d.affix({offset:{top:160,bottom:350}})
}else{return
}}})
}());
fpga.regionCollapse=(function(){function a(d,c){var b={root:document.querySelector(d),init:function(){document.addEventListener("click",this.handleEvents.bind(this),false)
},handleEvents:function(i){var h=(c&&c.target)?c.target:i.target,g=(c&&c.currentTarget)?i.target:h.parentNode,f=this.root.classList[0];
if(h.classList.contains("collapsable")){if(!c.currentTarget){while(!g.classList.contains(f)){g=g.parentNode
}}g.classList.toggle("hide-region");
if(c.callback){c.callback.call(this)
}}}};
b.init()
}return a
}());
(function(){var a;
function c(f,e){var d={root:document.querySelector(f),init:function(){this.windowWidth=window.innerWidth;
this.content=document.querySelector(".sidebar-content-container");
this.handle=this.root.querySelector(".sidebar-collapse-handle")||e.handle;
this.handle.addEventListener("click",this.handleEvents.bind(this),false);
if(a){$(window).on("resize",fpga.utils.debounce(this.checkSize.bind(this),100));
this.checkSize()
}},checkSize:function(){if(window.matchMedia("(min-width: 768px)").matches){this.addHeight();
this.setScroll()
}else{this.removeHeight()
}},addHeight:function(){this.root.firstElementChild.style.height=(window.innerHeight+100)+"px"
},removeHeight:function(){this.root.firstElementChild.removeAttribute("style")
},setScroll:function(){setTimeout(function(){window.scrollBy(0,-600)
},100)
},handleEvents:function(h){var g=h.target;
this.content.classList.toggle("expanded");
this.root.classList.toggle("hide-content")
}};
d.init()
}function b(){var f=document.querySelector(".sidebar-widgets"),d=f.offsetHeight,e=document.querySelector(".sidebar-content-container");
a=JSON.parse(f.dataset.fixedSidebar);
if(a){e.style.minHeight=d+"px"
}}$(document).ready(function(){if(document.querySelector(".sidebar-collapse")){setTimeout(b,0);
c(".sidebar-collapse")
}})
}());
(function(c){var a={wrapper:null,input:null,button:null,state:false,init:function(){this.input=this.wrapper.querySelector(".password-input");
this.button=this.wrapper.querySelector(".password-btn");
this.button.addEventListener("click",this.handleEvents.bind(this),false)
},handleEvents:function(f){var d=f.target;
if(this.input.value===""){return
}this.toggle()
},toggle:function(){if(!this.state){this.button.classList.add("password-show");
this.input.type="text";
this.state=true
}else{this.button.classList.remove("password-show");
this.input.type="password";
this.state=false
}}},b={fields:null,init:function(){this.fields=document.querySelectorAll(".password");
this.buildElements()
},buildElements:function(){var e=[].slice.call(this.fields),d;
e.forEach(function(f){d=Object.create(a,{wrapper:{value:f}});
d.init()
})
}};
fpga.pageLoad(function(){document.addEventListener("password:input",b.init(),false)
})
}(jQuery));
(function(){var a=fpga.utils.getURLParameter("status")||fpga.utils.getURLParameter("errorcode"),b={init:function(){this.status=document.getElementById(a)||"";
if(this.status&&this.status.classList.contains("hide")){this.status.classList.remove("hide")
}}};
$(document).ready(function(){if(a){b.init()
}})
}());
$(document).ready(function(){var d=$(".tab-navigator")||null;
if(d.length===0){return
}var c=window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")+1);
d.on("click","li",function(l){if(!$(l.currentTarget).hasClass("active")){try{var j=$(l.currentTarget).closest(".tab-navigator"),k=$(l.currentTarget).closest(".tabbed-container"),i=j.children("li").index(l.currentTarget);
if(sessionStorage){sessionStorage.tab_container=c+":"+i
}j.children("li.active").removeClass("active");
k.find(".tab-item.active").removeClass("active");
$(l.currentTarget).addClass("active");
k.find(".tab-items .tab-item").eq(i).addClass("active")
}catch(l){}}});
var b;
if(sessionStorage){b=sessionStorage.tab_container
}var g=b==null?"":b.substring(0,b.indexOf(":"));
var f=b==null||c!=g?"0":b.substring(b.indexOf(":")+1);
d.find("li").eq(f).click();
$("body").on("click",".featurePanel .showHideFeatures",function(l){l.preventDefault();
var i=$(l.target).closest(".featurePanel"),j=i.children(".panelBody"),k=$(l.target).parent();
j.slideToggle().promise().then(function(){if(j.is(":visible")){k.children(".showHideFeatures.show").hide();
k.children(".showHideFeatures.hide").show();
if(sessionStorage){sessionStorage.showHideFeatures=c+":showHideFeatures-show"
}}else{k.children(".showHideFeatures.hide").hide();
k.children(".showHideFeatures.show").show();
if(sessionStorage){sessionStorage.showHideFeatures=c+":showHideFeatures-hide"
}}})
});
var a;
if(sessionStorage){a=sessionStorage.showHideFeatures
}var e=a==null?"":a.substring(0,a.indexOf(":"));
var h=a==null||c!=e?"showHideFeatures-show":a.substring(a.indexOf(":")+1);
if(h=="showHideFeatures-hide"){$(".featurePanel .panelBody").hide();
$(".featurePanel .showHideFeatures.show").show();
$(".featurePanel .showHideFeatures.hide").hide()
}});
$(function(){var a=document.getElementById("goBack")||document.querySelectorAll(".goBack")[0]||null;
if(a){a.addEventListener("click",fpga.utils.goBack,false)
}});
(function(){var d=function(h){if(Array.isArray(h)){for(var k=0,j=Array(h.length);
k<h.length;
k++){j[k]=h[k]
}return j
}else{return Array.from(h)
}};
var g={init:function f(){Granite.I18n.setLocale(fpga.utils.region.abbr());
this.seeMoreLabel=Granite.I18n.get("See more");
this.seeLessLabel=Granite.I18n.get("See less");
this.listItems=this.itemList.dataset.target?this.itemList.querySelectorAll(this.itemList.dataset.target):this.itemList.children;
if(this.listItems.length<=this.itemsToShow){return
}this.itemList.parentNode.addEventListener("click",this.handleButtonClick.bind(this),false);
this.addButtonToParent();
this.toggleClasses()
},toggleClasses:function b(){var h=this;
[].concat(d(this.listItems)).forEach(function(k,j){if(j>=h.itemsToShow){k.classList.toggle("hide")
}})
},handleButtonClick:function c(i){var h=i.target;
if(h.tagName==="BUTTON"){h.innerHTML=h.innerHTML===this.seeMoreLabel?this.seeLessLabel:this.seeMoreLabel;
if(h.classList.contains("more")){h.classList.remove("more");
h.classList.add("less")
}else{h.classList.remove("less");
h.classList.add("more")
}this.toggleClasses()
}},addButtonToParent:function a(h){var i=document.createElement("button");
i.classList.add("items-number","btn","btn-link","more");
i.innerHTML=this.seeMoreLabel;
this.itemList.insertAdjacentElement("afterend",i)
}};
fpga.pageLoad(e);
function e(k){var h=k?k.target:".show-more",i=document.querySelectorAll(h);
if(fpga.isPublish()&&i.length){var j="";
[].concat(d(i)).forEach(function(l){j=Object.create(g,{itemList:{value:l},itemsToShow:{value:parseInt(l.getAttribute("data-show"),10)}});
j.init()
})
}}fpga.showMore={};
fpga.showMore.restart=e
}());
fpga.rssFeed=function(){$(document).ready(function(){var h=$("#callback");
$("#devices").multiselect({click:function(i,j){var k=j.value;
if(j.checked){if(k.indexOf("stratix")>=0||k.indexOf("arria")>=0||k.indexOf("cyclone")>=0||k.indexOf("hardcopy")>=0||k.indexOf("max")>=0){e(k,"devices")
}else{e(k,"devices")
}}else{if(k.indexOf("stratix")>=0||k.indexOf("arria")>=0||k.indexOf("cyclone")>=0||k.indexOf("hardcopy")>=0||k.indexOf("max")>=0){b(k,"devices")
}else{b(k,"devices")
}}},header:false,noneSelectedText:"Select options",position:({my:"center top",at:"center bottom",collision:"flipfit",within:window})});
f({url:"/content/www/us/en/programmable/bin/dsnOptionList",data:"getDeviceFamily",el:$("#devices")});
$("#doctype").multiselect({click:function(i,j){var k=j.value;
if(j.checked){e(k,"doctype")
}else{b(k,"doctype")
}},header:false,noneSelectedText:"Select options",position:({my:"center top",at:"center bottom",collision:"flipfit",within:window})});
f({url:"/content/www/us/en/programmable/bin/optionListDoc",data:"doctype",el:$("#doctype")})
});
function f(h){$.ajax({url:h.url,type:"get",data:{type:h.data},dataType:"json",success:function(m){var n,o,l=h.el;
for(var k=0,j=m.length;
k<j;
k++){n=m[k].deviceName?m[k].deviceName:m[k].data,o=m[k].deviceName?m[k].deviceName:m[k].label,l.append($("<option>",{value:n,text:o}));
l.multiselect("refresh")
}}})
}function d(i,h){if(h==="devices"){g("#devices",i)
}else{if(h==="doctype"){g("#doctype",i)
}}b(i,h)
}function g(h,i){$(h).multiselect("widget").find(":checkbox").each(function(){if(this.value===i){this.click()
}})
}function e(q,n){var r="",j="",o="",l,p,m=document.getElementById("devicesval");
doctypevalData=document.getElementById("doctypeval");
if(n==="devices"){if(m.innerHTML===""){r=q
}else{r=m.innerHTML+","+q
}m.innerHTML=r
}else{if(n==="doctype"){if(doctypevalData.innerHTML===""){j=q
}else{j=doctypevalData.innerHTML+","+q
}doctypevalData.innerHTML=j
}}r=m.innerHTML;
if(r!=""){l=r.split(",");
for(var k=0;
k<l.length;
k++){o+="<span class='lbl filter-track-item' data-name='"+l[k]+"' data-type='devices'>"+l[k]+"</span>"
}}j=document.getElementById("doctypeval").innerHTML;
if(j!=""){p=j.split(",");
for(var k=0;
k<p.length;
k++){o+="<span class='lbl filter-track-item' data-name='"+p[k]+"' data-type='doctype'>"+p[k]+"</span>"
}}document.getElementById("singleFilterOptions").innerHTML=o;
r=encodeURIComponent(r);
j=encodeURIComponent(j);
var h="http://wwwdev.altera.com/content/www/us/en/programmable/bin/rssdoc?devices="+r+"&doctype="+j;
document.getElementById("copyTarget").value=h
}function b(q,n){var p="";
var t=q+",";
var j=","+q;
var s=new RegExp(j+"$");
var r=new RegExp(q+"$");
if(n=="devices"){var u=document.getElementById("devicesval").innerHTML.replace(t,"").replace(s,"").replace(r,"");
document.getElementById("devicesval").innerHTML=u
}else{if(n=="doctype"){var k=document.getElementById("doctypeval").innerHTML.replace(t,"").replace(s,"").replace(r,"");
document.getElementById("doctypeval").innerHTML=k
}}u=document.getElementById("devicesval").innerHTML;
if(u!=""){var m=u.split(",");
for(var l=0;
l<m.length;
l++){p+="<span class='lbl filter-track-item' data-name='"+m[l]+"' data-type='devices'>"+m[l]+"</span>"
}}k=document.getElementById("doctypeval").innerHTML;
if(k!=""){var o=k.split(",");
for(var l=0;
l<o.length;
l++){p+="<span class='lbl filter-track-item' data-name='"+o[l]+"' data-type='doctype'>"+o[l]+"</span>"
}}document.getElementById("singleFilterOptions").innerHTML=p;
u=encodeURIComponent(u);
k=encodeURIComponent(k);
var h="http://wwwdev.altera.com/content/www/us/en/programmable/bin/rssdoc?devices="+u+"&doctype="+k;
document.getElementById("copyTarget").value=h
}document.getElementById("singleFilterOptions").addEventListener("click",function(k){var j=k.target,h,i;
if(j.classList.contains("filter-track-item")){h=j.getAttribute("data-name");
i=j.getAttribute("data-type");
d(h,i)
}});
document.getElementById("openButton").addEventListener("click",function(){var h=document.getElementById("copyTarget").value;
if(h==""){alert("Please select a device.")
}else{var i=window.open(document.getElementById("copyTarget").value,"_blank");
i.focus()
}});
document.getElementById("copyButton").addEventListener("click",function(){c(document.getElementById("copyTarget"),"msg");
$(".share-container").next().hide();
$(".share-container").hide();
$(".share-container").prev().removeClass("active")
});
function c(i,h){var j=a(i);
var k;
if(!j){k="Copy not supported or blocked.  Press Ctrl+c to copy."
}else{k="Text copied to the clipboard."
}alert(k)
}function a(j){var p="_hiddenCopyText_";
var o=j.tagName==="INPUT"||j.tagName==="TEXTAREA";
var l,i;
if(o){n=j;
l=j.selectionStart;
i=j.selectionEnd
}else{n=document.getElementById(p);
if(!n){var n=document.createElement("textarea");
n.style.position="absolute";
n.style.left="-9999px";
n.style.top="0";
n.id=p;
document.body.appendChild(n)
}n.textContent=j.textContent
}var h=document.activeElement;
n.focus();
n.setSelectionRange(0,n.value.length);
var k;
try{k=document.execCommand("copy")
}catch(m){k=false
}if(h&&typeof h.focus==="function"){h.focus()
}if(o){j.setSelectionRange(l,i)
}else{n.textContent=""
}return k
}};