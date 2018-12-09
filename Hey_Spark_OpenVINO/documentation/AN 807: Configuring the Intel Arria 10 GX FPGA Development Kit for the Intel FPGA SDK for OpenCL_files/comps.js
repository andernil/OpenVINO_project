(function(){$(document).ready(function(){var b=document.getElementById("table_of_contents")||false,a=document.getElementById("doc_portal_container")||"";
if(document.querySelector(".collapse-parent")){fpga.regionCollapse(".collapse-parent",{currentTarget:true})
}if(b){b.addEventListener("click",function(f){var d=f.target.parentElement,c=a.querySelector(".overlay-close");
if(a&&a.querySelector(".expand")&&d.tagName==="A"){c.click()
}});
$("body").scrollspy({target:"#table_of_contents",offset:100})
}})
}());
(function(){if(fpga.isPublish()&&!document.querySelector(".doc-filter-component")){return
}var p=fpga.utils.pubSub();
function k(){var t={add:function s(u){this[u.id]=u.trackItem
},remove:function q(u){delete this[u.id]
},getItems:function r(){return Object.values(this)
}};
return Object.create(t)
}function h(){var r=null,q=k();
r=document.getElementById("filterTrack");
p.on("filter-group:add",v);
p.on("filter-group:remove",t);
p.on("filter-group:update",t);
p.on("filter-group:clearGroup",x);
p.on("filter-group:setDefaults",u);
function v(y){q.add(y);
w()
}function u(y){y.forEach(function(z){q.add(z)
});
w()
}function t(y){q.remove(y);
w()
}function x(y){Object.values(y).forEach(function(z){q.remove(z)
});
w()
}function w(){var y=document.createDocumentFragment();
if(r.hasChildNodes()){while(r.firstChild){r.removeChild(r.firstChild)
}}q.getItems().forEach(function(z){y.appendChild(z)
});
r.appendChild(y);
s()
}function s(){if(q.getItems().length===0){r.classList.add("hide");
return
}r.classList.remove("hide")
}}function i(){p.on("filter-group:groupFilter",q);
function q(t){var s=t.btn,r=t.checkedItems;
if(r.length===0){s.classList.add("btn-disabled");
return
}s.classList.remove("btn-disabled")
}}function a(x){var E=x.table,y=x.options.filterCols,v=null,w={},F=false;
p.on("filter-group:add",B("add"));
p.on("filter-group:remove",B("remove"));
p.on("filter-group:update",C);
p.on("filter-group:clearGroup",s);
p.on("filter-group:setDefaults",A);
p.on("table:render",G);
function B(I){return function(J){switch(I){case"add":q(J);
break;
case"remove":C(J);
break
}G()
}
}function A(I){I.forEach(function(J){q(J)
});
F=true;
G();
F=false
}function q(L){var I=L.dataColumn,K=L.filter,J=w[I];
if(J){J.filter+="|"+K;
return
}w[I]={id:I,filter:K,checked:true};
v=I
}function C(L){var I=L.dataColumn,K=L.filter,J=w[I],M=J?J.filter.split("|"):"";
v=I;
if(J&&M.length>1&&J.filter.includes(K)){M.splice(M.indexOf(K),1);
J.filter=M.join("|");
return
}delete w[I]
}function s(J){var I=Object.values(J);
I.forEach(function(K){C(K)
});
G()
}function D(){var I=[].concat(y);
I.splice(y.indexOf(v),1);
return I
}function H(){return E.columns(D(),{filter:"applied"}).data().join(",").split(",")
}function t(){return E.columns(y).data().join(",").split(",")
}function u(L){var K=E.columns(L,{filter:"current"}).data().join(",").split(","),J=E.columns(y,{filter:"applied"}).data().join(",").split(",");
var I=K.reduce(function(M,N){if(!J.includes(N)){M.push(N)
}return M
},[]);
return J.concat(I)
}function r(){var I=z();
return I.reduce(function(K,J){if(J!==""){if(K[J]){K[J]++
}else{K[J]=1
}}return K
},{})
}function z(){var I=Object.keys(w).length;
if(!I){return t()
}if(F){return u(v)
}return H()
}function G(){var I=Object.values(w);
E.search("").columns().search("");
if(I.length!==0){I.forEach(function(J){E.columns(J.id).search(J.filter,true,false)
})
}p.trigger("table:status",v,r());
E.draw()
}}function f(){function q(t,v,s,u){var r=document.createElement("span");
r.className="lbl filter-track-item ";
r.innerText=t;
r.dataset.filterId=v;
r.dataset.filterTrackItem=s;
r.dataset.filterGroup=u;
return r
}return{create:q}
}function j(){var u={add:function w(z,A,y){var B=f();
this.id=A.id;
this.dataColumn=A.dataset.column;
this.filter=A.value;
this.checkbox=A;
this.trackItem=B.create(A.dataset.filterCb,A.id,A.value,A.dataset.filterGroup);
this.counter=z;
this.container=y.parentElement
},disable:function t(){this.disabled=true;
this.container.classList.add("disabled");
this.checkbox.setAttribute("disabled",true);
if(this.isChecked()){p.trigger("checkbox:unchecked",this);
this.uncheck()
}},enable:function s(){this.disabled=false;
this.container.classList.remove("disabled");
this.checkbox.removeAttribute("disabled")
},setCount:function v(y){if(y===0){this.disable()
}else{this.enable()
}this.counter.innerText="("+y+")"
},isChecked:function x(){return this.checkbox.checked
},check:function q(){this.checkbox.checked=true
},uncheck:function r(){this.checkbox.checked=false
}};
return Object.create(u)
}function e(q,r){var z={add:function A(B){this.checked[B.id]=B;
p.trigger("filter-group:add",this.checked[B.id]);
p.trigger("filter-group:groupFilter",this.getChecked())
},addChecked:function y(B){this.checked[B.id]=B;
this.setChecked(B.id);
delete B.setChecked;
p.trigger("filter-group:groupFilter",this.getChecked())
},remove:function u(B){p.trigger("filter-group:remove",this.checked[B]);
delete this.checked[B];
p.trigger("filter-group:groupFilter",this.getChecked())
},update:function t(B,C){if(B==="checked"){p.trigger("filter-group:update",this.checked[C]);
delete this.checked[C];
p.trigger("filter-group:groupFilter",this.getChecked())
}},clearAll:function x(B){p.trigger("filter-group:clearGroup",this.checked);
this.checked={};
p.trigger("filter-group:groupFilter",this.getChecked())
},getChecked:function w(C){var B={btn:this.groupBtn,checkedItems:Object.values(this.checked)};
return B
},setChecked:function v(B){if(this.checked[B]){this.checked[B].check()
}},uncheck:function s(B){if(this.checked[B]){this.checked[B].uncheck()
}}};
return Object.assign(Object.create(z),{groupID:q,groupBtn:r,checked:{}})
}var g={};
function b(v){function w(y){g[v]=y
}function s(y){g[v].add(y)
}function x(y){return g[v]?true:false
}function u(y){g[v].addChecked(y)
}function q(y){g[v].uncheck(y);
g[v].remove(y)
}function r(y,z){g[v].uncheck(z);
g[v].update(y,z)
}function t(){var y=g[v],z=Array.from(g[v].getChecked().checkedItems);
z.forEach(function(A){y.uncheck(A.id)
});
y.clearAll()
}return{addGroup:w,addGroupItem:s,addCheckedGroupItem:u,removeGroupItem:q,updateGroupItem:r,clearAll:t,isChecked:x}
}var n=[];
function l(){p.trigger("filter-group:setDefaults",n)
}function d(){var s=Array.from(document.querySelectorAll(".filter-group"));
p.on("checkbox:unchecked",r);
p.on("checkbox:checked",t);
p.on("checkbox:setDefaults",l);
p.on("checkbox:clearAll",q);
s.forEach(function(u){var v=e(u.id,u.querySelector(".clear-all"));
b(u.id).addGroup(v)
});
function t(v){var u=v.dataset.filterGroup,w=v.id||v.dataset.filterId;
if(o[w].setChecked){n.push(o[w]);
b(u).addCheckedGroupItem(o[w]);
return
}if(v.checked){b(u).addGroupItem(o[w]);
return
}b(u).removeGroupItem(w)
}function r(w){var u=w.checkbox.dataset.filterGroup,x=w.id,v=w.isChecked()?"checked":"unchecked";
b(u).updateGroupItem(v,x)
}function q(v){var u=v.dataset.filterTarget;
b(u).clearAll()
}}var o={};
function m(t){var s=Array.from(document.querySelectorAll(".checkbox")),r=Array.from(document.querySelectorAll(".topic-filter")).filter(function(v){return v.checked
});
p.on("table:status",q);
u(t);
function u(v){s.forEach(function(z){var y=j(),w=z.querySelector(".topic-filter"),x=z.querySelector(".filter-count");
y.add(x,w,z);
o[w.id]=y;
if(w.checked||!r.length&&v&&v.includes(w.id)){y.setChecked=true;
p.trigger("checkbox:checked",w)
}});
if(!v||!v.length){p.trigger("table:render")
}else{l()
}}function q(y,w){var x=Object.values(o),A=w,B=document.querySelector(".sidebar-widgets"),z=document.querySelector(".sidebar-collapse"),v=document.createDocumentFragment();
v.appendChild(B);
x.forEach(function(C){if(A[C.filter]){C.setCount(A[C.filter])
}else{if(C.dataColumn!==y){C.setCount(0)
}}});
z.appendChild(v)
}}function c(){document.addEventListener("filter:init",r,false);
function r(t){var s=t.param,u=s.options.defaults;
document.addEventListener("click",q,false);
h();
i();
a(s);
d();
m(u)
}function q(v){var u=v.target,s=u.hasAttribute("data-filter-target"),t=u.hasAttribute("data-filter-cb"),w=u.hasAttribute("data-filter-track-item");
if(t){p.trigger("checkbox:checked",u)
}if(w){p.trigger("checkbox:checked",u)
}if(s){if(!u.classList.contains("btn-disabled")){p.trigger("checkbox:clearAll",u)
}}}}c()
}());
fpga.doc_utils={};
fpga.doc_utils.tableFilters=(function(){function a(d){var e=document.querySelector(".filters"),o=e.querySelector(".button-group"),r=document.querySelectorAll(".cancel-btn"),c=document.querySelectorAll(".filter-list"),j=[],m=[],l=[],h=0,n=c.length,q=[],f={el:null,parentObj:null,classname:null,add:function(t,k,i){this.parentObj=t;
this.parentEl=k;
this.parentInput=i;
this.classname="filter-track-item";
this.render();
this.el.addEventListener("click",this.handleEvents.bind(this),false);
return this.el
},render:function(){this.el=this.parentEl.cloneNode(true);
this.el.classList.add(this.classname)
},handleEvents:function(t){var k=t.target,i=k.getAttribute("data-value");
this.parentInput.checked=false;
this.parentObj.deleteFilterTrack(i)
}},b={el:document.querySelector(".filter-track"),list:{},add:function(i,k){this.list[i.value]=k;
this.el.appendChild(k);
this.showTrack()
},remove:function(i){if(Object.keys(this.list).length===0){return
}if(this.list[i]){this.el.removeChild(this.list[i]);
delete this.list[i]
}if(Object.keys(this.list).length===0){this.hideTrack()
}},showTrack:function(){this.el.classList.remove("hide")
},hideTrack:function(){this.el.classList.add("hide")
},removeAll:function(){this.el.innerHTML="";
this.list={}
}},p=function(i){var k={root:i,table:d,init:function(){this.filterTrack=Object.create(b);
this.itemList=this.root.querySelectorAll(".filter-option");
this.allItemList=document.querySelectorAll(".filter-option");
this.root.addEventListener("change",this.handleEvents.bind(this),false);
this.filterColMap={"topic-filter":3,"type-filter":4};
var w=this.itemList[0].getAttribute("data-column");
var u=new Object();
var t=[];
for(var v=0;
v<this.itemList.length;
++v){t.push(this.itemList[v])
}u.name=this.itemList[0].name.trim();
u.dataColumn=w;
u.items=t;
q.push(u);
if(l.filter(function(x){return x.column==w
}).length===0){l.push({column:this.itemList[0].getAttribute("data-column"),val:[]})
}},handleEvents:function(v){var t=v.target,u=t.parentNode.querySelector(".lbl");
if(typeof(_gaq)!=="undefined"){if(t.checked){_gaq.push(["_trackEvent","Support Filter","select",u.innerHTML])
}else{_gaq.push(["_trackEvent","Support Filter","deselect",u.innerHTML])
}}if(t.value!=="all"){if(t.type==="checkbox"){this.itemList[0].checked=false
}this.changeFilter(t);
this.updateFilters(u,t)
}else{this.changeFilter(t);
this.uncheckAll()
}this.checkAll(t)
},reset:function(t){var u=document.querySelectorAll("input[data-column='"+t.getAttribute("data-column")+"']");
Array.from(u).forEach(function(v){this.uncheckAll(v)
}.bind(this));
t.classList.add("btn-disabled");
this.checkAll()
},checkAll:function(t){if(document.querySelectorAll(".filter-option:checked").length===0){m=[];
this.allItemList[0].checked=true;
this.changeFilter("all")
}},changeFilter:function(B){var K=$(".dataTables_filter input").val(),W=1,V=1,X=this.itemList.length,Q=this.allItemList.length,S=q.length,I,y,Y=[],z=false,G=q.length,R=l.length;
if(B==="all"){if(K&&K!=""){this.table.search(K).draw()
}else{this.table.search("").columns().search("").draw()
}return
}var J=l.filter(function(ac){return ac.column===B.getAttribute("data-column")
})[0];
var w=J.val;
var y=B.value;
var H=B.closest(".collapsable-region").querySelector(".btn.cancel-btn");
if(y==="all"){y=""
}if(B.closest(".collapsable-region").querySelectorAll("input:checked").length>0){H.classList.remove("btn-disabled")
}else{H.classList.add("btn-disabled")
}if($.inArray(y,w)==-1){w.push(y)
}else{w.splice($.inArray(y,w),1)
}J.val=w;
if(G<4){for(W=0;
W<G;
W++){var E=q[W],x=E.items,ab=E.name,D=E.dataColumn,P=[],v=x.length,O=this.table;
for(V=0;
V<v;
V++){this.table.search("").columns().search("");
var aa=x[V];
y=aa.value;
if(y==="all"){y=""
}O=this.table;
J=l.filter(function(ac){return ac.column===aa.getAttribute("data-column")
})[0];
var t=J.val;
J.val=y;
for(var U=0;
U<R;
U++){if(l[U].val.length===0){continue
}var M=l[U].val;
if(M instanceof Array){M=M.join("|")
}O=O.column(l[U].column).search(M,true,false)
}J.val=t;
var Z=aa.parentNode.querySelector(".lbl").innerHTML,A=/&nbsp;\(*\d+\)$/g,C=O.page.info().recordsDisplay;
var L=aa.parentNode.querySelector(".lbl"),F=L.nextSibling.innerHTML,u,N=A.test(F);
var T=L.closest("li");
if(N){F=F.replace(A,"");
u=L.nextSibling
}else{u=document.createElement("span");
if(L.nextSibling){L.parentNode.insertBefore(u,L.nextSibling)
}}if(u){u.innerHTML="&nbsp;("+C+")"
}if(aa.value!=="all"){if(C===0){if(aa.checked){aa.click()
}aa.disabled=true;
if(T){T.classList.add("disabled")
}}else{aa.disabled=false;
if(T){T.classList.remove("disabled")
}}}}}}O=this.table;
O.search("").columns().search("").draw();
if(K&&K!=""){O=O.search(K)
}for(W=0;
W<R;
W++){O=O.column(l[W].column).search(l[W].val.join("|"),true,false)
}O.draw()
},uncheckAll:function(w){var v=1,u=this.allItemList.length;
if(w){var t=w.closest("ul").querySelectorAll(".filter-option");
u=t.length;
for(v;
v<u;
++v){if(t[v].checked){t[v].click();
b.remove(t[v].value)
}}}else{if(document.querySelectorAll(".filter-option:checked").length===0){for(;
v<u;
++v){this.allItemList[v].checked=false;
this.filterTrack.remove(this.allItemList[v].value)
}}else{v=1,u=this.itemList.length;
for(v;
v<u;
++v){this.itemList[v].checked=false;
this.filterTrack.remove(this.itemList[v].value)
}}}},updateFilters:function(v,u){var x=1,t=this.allItemList.length,w=this.filterTrack,y;
for(;
x<t;
++x){y=this.allItemList[x];
if(w.list[y.value]&&!y.checked){w.remove(y.value)
}}if(window.matchMedia("(min-width: 768px)").matches){if(u.checked){this.addToFilterTrack(v,u)
}}},deleteFilterTrack:function(u){this.filterTrack.remove(u);
if($.inArray(u,m)==-1){m.push(u)
}else{m.splice($.inArray(u,m),1)
}var t=document.querySelector('[value="'+u+'"]');
this.changeFilter(t);
this.checkAll()
},addToFilterTrack:function(u,t){var v=Object.create(f);
v.add(this,u,t);
this.filterTrack.add(t,v.el)
}};
k.init();
return k
};
for(;
h<n;
++h){j.push(p(c[h]))
}for(var g=0;
g<r.length;
g++){var s=r[g];
s.addEventListener("mousedown",function(w){var v=w.target,t=0,k=j.length;
for(;
t<k;
++t){var u=j[t].itemList[0].getAttribute("data-column");
if(u===s.getAttribute("data-column")){j[t].reset(v)
}else{continue
}}},false)
}o.addEventListener("mousedown",function(v){var u=v.target,w=o.querySelector(".overlay-close"),t=0,k=j.length;
if(u.classList.contains("cancel-btn")){for(;
t<k;
++t){j[t].reset()
}}w.click()
},false)
}return a
}());
fpga.tableGenerator=(function(){function a(g,e){e=e||{};
$.fn.DataTable.ext.pager.numbers_length=7;
$.extend($.fn.dataTableExt.oStdClasses,{sFilterInput:"search-field",sPaging:"pagination "});
if(e.columns){$.extend(true,$.fn.dataTable.defaults,{columns:e.columns})
}if(e.columnDefs){$.extend(true,$.fn.dataTable.defaults,{columnDefs:e.columnDefs})
}if(!e.order){e.order=[]
}var d=$(g),c=d.DataTable({order:e.order,autoWidth:false,language:{url:"",aria:{sSortAscending:"activate to sort column ascending",sSortDescending:"activate to sort column descending"},search:'<div class="search-input">_INPUT_<button type="reset" class="input-clear"></button><svg class="search-icon svg-sprite pull-right"><use class="search-icon" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/etc/clientlibs/altera-www/global/img/icons/icon-sprites.svg#search-icon" /></svg></div>',searchPlaceholder:"Search",paginate:{first:"<<",last:">>",next:">",previous:"<"},info:"Showing _START_ to _END_ of _TOTAL_ entries",infoFiltered:"(filtered from _MAX_ total records)",emptyTable:"No data available in table",zeroRecords:"No Entries meet critera"},displayLength:20,dom:'<"table-controls"fpi>t<"table-controls-bottom"pi>',paginationType:"full_numbers",bLengthChange:false}),h=$("#doc_table_filter").find("label"),b=h.find(".search-field"),f;
if(e.dataSet){c.clear();
c.rows.add(e.dataSet);
c.draw()
}h.find(".search-field").attr("required",true);
d.wrap('<div class="dataTables_scrollHead"></div>');
f=h.find(".input-clear");
f.on("click",function(i){c.search("").columns().search("").draw()
});
if(e.filters){e.filters(c)
}else{fpga.events.create("filter:init").dispatch({table:c,options:e})
}}return a
}());
var IconLinksList=function(){this.PreviewIcon=function(c,b){this.spriteClass="sprite-icon ";
this.previewSprite;
this.spritesSelection=c.findParentByType("panel");
this.select=c.findByType("selection")[1];
this.selectedSprite=this.select.getValue();
this.iconValue="";
if(c.getXType()==="selection"){this.previewSprite=this.spritesSelection.findByType("label")[0];
spriteClass+=b
}else{this.previewSprite=c.findByType("label")[0];
this.spriteClass+=this.selectedSprite==="Please Select"?"":this.selectedSprite
}this.select.addListener("selectionchanged",function(e,d){this.iconValue=d;
this.setIcon()
}.bind(this));
this.iconValue=this.selectedSprite;
this.setIcon()
};
this.setIcon=function(){if(this.previewSprite.fieldLabel==="Preview Icon SVG"){this.previewSprite.update('<svg class="svg-icon-preview '+this.spriteClass+'"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/etc/clientlibs/altera-www/global/img/icons/icon-sprites.svg#'+this.iconValue+'"></use></svg>');
return
}this.previewSprite.update('<span class="sprite-icon '+this.iconValue+'"></span>')
};
this.RefreshLinkListener=function(){this.refreshSelf();
a()
};
function a(){$(".icon-link-list-item").each(function(){if($(this).attr("href")!="#"){$(this).addClass("selectable");
$(this).click(function(){var b=$(this).attr("isNewWindow")===null?false:$(this).attr("isNewWindow");
if(b=="true"){window.open($(this).attr("href"),"_blank")
}else{window.location.href=$(this).attr("href")
}})
}else{$(this).removeClass("selectable")
}})
}this.init=function(){a()
}
};
var IconLinksList=new IconLinksList();
$(function(){});
(function(c){var b=document.querySelectorAll(".accordion"),d={init:function(){this.collapseItems=Array.prototype.slice.call(this.wrapper.querySelectorAll(".collapse-title"));
this.openItem();
window.addEventListener("hashchange",this.openItem.bind(this),false);
document.addEventListener("click",this.handleEvents.bind(this),false)
},handleEvents:function(g){var f=g.target;
if(f.classList.contains("collapse-title")){this.setGA(f)
}},setGA:function(g){var e=location.href,h=g.getAttribute("href"),f=e+h;
if(typeof(_gaq)!=="undefined"){_gaq.push(["_trackEvent","Collapse Component","click",f])
}},openItem:function(){this.selected="";
this.select=this.collapseItems.forEach(this.matchId.bind(this))||null;
if(this.selected){this.selected.click()
}},matchId:function(e){if(e.hash===location.hash){this.selected=e;
return
}}},a={init:function(){this.collapsable=Array.prototype.slice.call(b);
this.buildCollapse()
},buildCollapse:function(){var e;
this.collapsable.forEach(function(f){e=Object.create(d,{wrapper:{value:f}});
e.init()
})
}};
fpga.pageLoad(function(){if(this.isPublish()&&b.length>0){a.init()
}})
}());
(function(){var a=document.querySelectorAll(".responsive-collapse_container"),b={root:document.querySelector(".main-content"),panelTitle:null,init:function(){this.panelTitle=this.wrapper.querySelectorAll(".collapse-title");
this.mq=c("tablet");
window.addEventListener("resize",fpga.utils.debounce(this.setClick.bind(this),500),false);
this.setClick()
},setClick:function(f){var e=[].slice.call(this.panelTitle);
this.isDesktop=this.mq();
e.forEach(function(h,g){if(this.isDesktop){this.removeAttr(h);
this.preventClick(h);
this.addIn(h,g)
}else{this.addAttr(h);
this.addClick(h);
this.removeIn(h,g)
}}.bind(this))
},removeIn:function(f,e){if(e>0){$(f.parentNode.nextSibling.nextSibling).collapse("hide")
}},addIn:function(g,e){var f=g.parentNode.nextSibling.nextSibling;
if(f.classList.contains("in")){return
}if(e>0){$(g.parentNode.nextSibling.nextSibling).collapse("show")
}},removeAttr:function(e){e.removeAttribute("data-toggle")
},addAttr:function(e){e.setAttribute("data-toggle","collapse")
},preventClick:function(e){e.onclick=function(f){f.preventDefault()
};
e.addEventListener("click",function(f){f.preventDefault()
})
},addClick:function(e){e.removeEventListener("click",function(f){f.preventDefault()
})
}},d={init:function(){this.responsiveContainers=Array.prototype.slice.call(a);
this.buildResponsive()
},buildResponsive:function(){var e;
this.responsiveContainers.forEach(function(f){e=Object.create(b,{wrapper:{value:f}});
e.init()
})
}};
function c(g){var f={desktop:1200,laptop:992,tablet:768,phone:480},e=f[g];
return function(){if(window.matchMedia("(min-width: "+e+"px)").matches){return true
}return false
}
}fpga.pageLoad(function(){if(this.isPublish()&&a.length>0){d.init()
}})
}());
(function(){var a=document.querySelector(".sections-side-nav"),b={sectionItems:null,init:function(){this.sectionItems=Array.prototype.slice.call(a.querySelectorAll(".section-url"));
this.openItem();
window.addEventListener("hashchange",this.openItem.bind(this),false);
a.addEventListener("click",this.handleEvents.bind(this),false)
},handleEvents:function(d){var c=d.target;
if(c.classList.contains("section-url")){this.setGA(c)
}},setGA:function(e){var c=location.href,f=e.getAttribute("href"),d=c+f;
if(typeof(_gaq)!=="undefined"){_gaq.push(["_trackEvent","Sections Component","click",d])
}},openItem:function(c){this.selected="";
this.select=this.sectionItems.forEach(this.matchId.bind(this))||null;
if(this.selected){this.selected.click()
}},matchId:function(c){if(c.hash===location.hash){this.selected=c;
return
}}};
fpga.pageLoad(function(){if(this.isPublish()&&a){b.init()
}})
}());
(function(d){var b=function(f){return(function(){navbar=f;
function g(){var m=navbar.parentElement,l=Array.from(m.children),j=0;
for(var k=0,h=l.length;
k<h;
k++){if(l[k].classList.contains("sections")){break
}j+=d.getHeight(l[k])
}return j-60
}return{getOffset:g}
}())
};
var a=function(g,f){return(function(){var p=null,l=g,i=f,j=Array.from(i.children),w=0,m=null,u=d.getWidth(i);
i.style.width=u+"px";
function n(){return u
}function s(){return d.getWidth(l)
}function o(x){p=x;
return{setIndex:r}
}function r(){w=j.indexOf(p)
}function k(){return w
}function t(x){m=j.indexOf(x)
}function h(){return m
}function v(){return p
}function q(){var z=i.getBoundingClientRect(),A=p?Math.ceil(p.getBoundingClientRect().left):null,y=Math.ceil(i.children[0].getBoundingClientRect().left),x=Math.ceil(i.children[i.childElementCount-1].getBoundingClientRect().left);
return{navInfo:z,currentPosition:A,headPosition:y,tailPosition:x}
}return{getNavWidth:n,getNavBarWidth:s,setActiveItem:o,getActiveItem:v,checkPosition:q,setSelectedIndex:t,getSelectedIndex:h,getActiveIndex:k}
}())
};
var e=document.querySelector(".sections"),c={init:function(){this.sectionBar=document.querySelector(".section-bar"),this.navItems=this.sectionBar.querySelector(".top-nav-navbar-items");
this.sectionNav=this.navItems.querySelector(".section-nav");
this.$sectionBar=$(this.sectionBar);
this.leftNav=this.sectionBar.querySelector(".nav-prev");
this.rightNav=this.sectionBar.querySelector(".nav-next");
this.scrollTo=null;
this.SectionNavBar=b(e);
this.SectionNav=a(this.navItems,this.sectionNav);
this.checkPosition=this.SectionNav.checkPosition;
this.sectionBar.addEventListener("click",this.handleEvents.bind(this),false);
window.addEventListener("resize",d.debounce(this.resizeWindow.bind(this),66),false);
this.sectionNav.addEventListener("touchend",this.checkScrollPosition.bind(this),false);
$("body").scrollspy({target:".section-bar"});
this.$sectionBar.affix({offset:{top:this.SectionNavBar.getOffset()}});
this.$sectionBar.on("activate.bs.scrollspy",this.setScrollspy.bind(this));
this.checkScrollPosition()
},handleEvents:function(g){var f=g.target;
if(f.classList.contains("nav-prev")){this.leftBtn(g)
}if(f.classList.contains("nav-next")){this.rightBtn(g)
}if(f.classList.contains("top-nav-section-url")){this.scrollDown(g)
}},checkScrollPosition:function(){var f=this.SectionNav.checkPosition(),h=f.tailPosition,g=f.headPosition;
if(g<0){this.showHideBtn("leftNav","show")
}else{this.showHideBtn("leftNav","hide")
}if(f.navInfo.right===this.SectionNav.getNavBarWidth()){this.showHideBtn("rightNav","hide");
return
}else{this.showHideBtn("rightNav","show")
}if(this.SectionNav.getNavBarWidth()>=this.SectionNav.getNavWidth()){this.showHideBtn("rightNav","hide");
this.showHideBtn("leftNav","hide")
}},setScrollspy:function(i){var h=i.target,g=this.SectionNav.getActiveIndex(),f=this.SectionNav.getSelectedIndex();
this.SectionNav.setActiveItem(h).setIndex();
if(f===null||g===f){this.scrollMenu();
this.SectionNav.setSelectedIndex(h)
}},scrollMenu:function(g){var i=this.SectionNav.getActiveItem(),h=i?this.checkPosition().currentPosition+d.getWidth(i)/2+this.navItems.scrollLeft-this.SectionNav.getNavBarWidth()/2:"",f=g?g:h;
$(this.navItems).animate({scrollLeft:f},200).promise().then(this.checkScrollPosition.bind(this))
},resizeWindow:function(f){this.$sectionBar.data("bs.affix").options.offset.top=this.SectionNavBar.getOffset();
this.$sectionBar.affix("checkPosition");
this.checkScrollPosition()
},showHideBtn:function(f,g){if(g==="show"&&!this[f].classList.contains("hide")){return
}else{if(g==="hide"&&this[f].classList.contains("hide")){return
}}if(g==="hide"){return this[f].classList.add("hide")
}else{return this[f].classList.remove("hide")
}},leftBtn:function(f){this.scrollTo=this.navItems.scrollLeft-this.SectionNav.getNavBarWidth();
this.scrollMenu(this.scrollTo);
this.showHideBtn("rightNav","show");
if(this.scrollTo<=0){this.showHideBtn("leftNav","hide")
}},rightBtn:function(f){this.scrollTo=this.navItems.scrollLeft+this.SectionNav.getNavBarWidth();
this.scrollMenu(this.scrollTo);
this.showHideBtn("leftNav","show");
if((this.scrollTo)>=this.SectionNav.getNavBarWidth()){this.showHideBtn("rightNav","hide")
}},scrollDown:function(i){i.preventDefault();
var h=i.target,f=h.getAttribute("href"),g=document.getElementById(f.replace("#",""));
this.SectionNav.setSelectedIndex(h.parentElement);
this.scroll(fpga.utils.offset(g).top,500)
},scroll:function(l,j){var f=document.documentElement.scrollTop||document.body.scrollTop,g=(f+l)*0.5,k=f-g,h=performance.now();
function i(){var m=(performance.now()-h)/j;
if(m>1){m=1;
this.scrollMenu()
}window.scrollTo(0,g+k*Math.cos(m*Math.PI));
if(m<1){window.requestAnimationFrame(i.bind(this))
}}window.requestAnimationFrame(i.bind(this))
}};
fpga.pageLoad(function(){if(this.isPublish()&&e){if(e.querySelector(".sections-top-nav")){c.init()
}}})
}(fpga.utils));
(function(b){var a={root:document.querySelectorAll(".date-picker"),init:function(){this.setup()
},setup:function(){var c=[].slice.call(this.root);
c.forEach(this.applyCalendar)
},applyCalendar:function(c){b(c).datetimepicker({format:"MM/DD/YYYY"})
}};
b(document).ready(function(){if(a.root.length===0){return
}a.init()
})
}(jQuery));
(function(c){var b=Array.prototype.slice.call(document.querySelectorAll(".phone"))||"",a={mask:[],init:function(){this.root=this.formElem.querySelector(".form-input");
this.helpMsg=this.formElem.querySelector(".help-block-msg");
document.addEventListener("country",this.handlePhone.bind(this),false)
},handlePhone:function(k){var j=k.target,i={us:"(999) 999-9999",usx:"(999) 999-9999 +9999"},f="e.g. +4367689012 x34567",d=[],g=0,h=fpga.validate.phonePattern_other;
if(j.value==="USA"){d=[i.us,i.usx];
f="e.g. (408) 544-7000 +1234";
h=fpga.validate.phonePattern_us
}this.setMask(d,g);
this.helpMsg.dataset.originalTitle=f;
this.root.setAttribute("placeholder",f);
this.root.setAttribute("pattern",h)
},setMask:function(e,d){if(e.length===0){this.mask="";
VMasker(this.root).unMask();
return
}this.length=d||14;
this.mask=e;
this.len;
VMasker(this.root).maskPattern(this.mask[0]);
this.root.addEventListener("input",this.inputHandler.bind(this,this.mask),false)
},inputHandler:function(e,g){var h=g.target,f=h.value.replace(/\D/g,""),d=h.value.length>this.length?1:0;
if(!this.mask){return
}VMasker(h).unMask();
VMasker(h).maskPattern(this.mask[d]);
h.value=VMasker.toPattern(f,this.mask[d])
}};
fpga.pageLoad(function(){var d;
if(this.isPublish()&&b){b.forEach(function(e){d=Object.create(a,{formElem:{value:e}});
d.init()
})
}})
}(jQuery));
(function(){var b=Array.prototype.slice.call(document.querySelectorAll(".form-mv-add"))||"",a={wrapper:null,init:function(){this.name=this.formElem.dataset.name;
this.rows=this.formElem.dataset.rows;
this.fieldLimit=this.formElem.dataset.multifieldLimit;
this.fieldType=this.rows>1?"textarea":"input";
this.container=document.getElementById(this.name+"_field");
this.fieldBtn=this.formElem;
this.count=0;
this.container.addEventListener("click",this.handleClick.bind(this),false);
this.createField_ob=fpga.utils.observable();
this.createField_ob.subscribe(this.createField.bind(this));
this.createField_ob.subscribe(this.createIcon.bind(this));
this.addField_ob=fpga.utils.observable();
this.addField_ob.subscribe(this.fieldCount.bind(this));
this.addField_ob.subscribe(this.addField.bind(this));
this.removeField_ob=fpga.utils.observable();
this.removeField_ob.subscribe(this.fieldCount.bind(this));
this.removeField_ob.subscribe(this.removeField.bind(this))
},handleClick:function(d){var c=d.target;
if(c.classList.contains("form-mv-add")){this.addField_ob.notify();
return
}if(c.classList.contains("form-mv-remove")){this.removeField_ob.notify(c.parentNode);
return
}},createField:function(){var c=document.createElement("div"),d=new Date().getTime(),e;
if(this.maxFields){return
}c.className="top-margin";
c.id=this.name+"_"+d+"_wrapper";
if(this.fieldType==="input"){e=document.createElement("input");
e.type="text";
e.className="form-input form-control form-field-text"
}else{e=document.createElement("textarea");
e.className="form-input form-control form-field-textarea";
e.rows=this.rows
}e.name="mv_"+this.name+"_"+this.count;
c.appendChild(e);
this.field=c
},createIcon:function(){var c=document.createElement("span");
if(this.maxFields){return
}c.className="form-mv-remove form-multi-btn";
c.innerHTML="[&ndash;]";
this.icon=c
},addField:function(){this.createField_ob.notify();
this.field.appendChild(this.icon);
this.container.appendChild(this.field)
},removeField:function(c){this.container.removeChild(c)
},fieldCount:function(c){this.maxFields=false;
if(c){this.count-=1;
return
}this.count+=1;
if(this.fieldLimit>0&&this.count>=this.fieldLimit){this.count=this.fieldLimit-1;
this.maxFields=true;
return
}}};
$(document).ready(function(){var c;
if(b){b.forEach(function(d){c=Object.create(a,{formElem:{value:d}});
c.init()
})
}})
}());
(function(){var a=Array.prototype.slice.call(document.querySelectorAll(".auto-suggest")),c={values:[],listContainer:"",suggestItemClass:"suggest-item-list",init:function(){this.field=this.wrapper.querySelector(".form-input");
this.apiURL=this.field.dataset.autoSuggest;
if(this.apiURL===""){console.log(this.field,"event");
this.field.addEventListener("autosuggest",d,false);
return
}this.getData();
this.dataComplete_ob=fpga.utils.observable();
this.dataComplete_ob.subscribe(this.buildList.bind(this));
this.createList_ob=fpga.utils.observable();
this.createList_ob.subscribe(this.createList.bind(this));
document.addEventListener("mouseup",this.handleSelect.bind(this),false)
},handleSelect:function(g){var f=g.target;
if(!this.listContainer||this.listContainer.classList.contains("hide")){return
}if(f.classList.contains("suggest-item")){this.field.value=f.innerText
}this.showHideSuggestion()
},handleSuggest:function(f){this.createList_ob.notify()
},getData:function(){console.log("getData");
$.ajax({type:"GET",url:this.apiURL,dataType:"json",cache:false}).success(function(e){if(!Array.isArray(e)&&e.length>0){return
}this.values=e;
this.wrapper.appendChild(this.createListContainer(e));
this.field.addEventListener("input",fpga.utils.debounce(this.handleSuggest.bind(this),200),false)
}.bind(this))
},showHideSuggestion:function(e){if(e==="show"){this.listContainer.classList.remove("hide");
return
}this.listContainer.classList.add("hide")
},createList:function(f){var e=this.buildList(this.field).join("");
this.listContainer=this.wrapper.querySelector("."+this.suggestItemClass);
if(this.field.value===""){e=""
}if(e!==""){this.showHideSuggestion("show")
}else{this.showHideSuggestion()
}this.listContainer.innerHTML=e
},buildList:function(f){var e=[];
this.values.map(function(h,g){if(h.slice(0,f.value.length)===f.value.toLowerCase()){return e.push('<li class="suggest-item">'+h+"</li>")
}else{return
}}.bind(this));
return e
},createListContainer:function(){var e=document.createDocumentFragment(),f=document.createElement("ul");
f.className=this.suggestItemClass+" hide no-bullets";
e.appendChild(f);
return e
}},b={init:function(){var e;
a.forEach(function(f){e=Object.create(c,{wrapper:{value:f}});
e.init()
})
}};
if(fpga.isPublish()&&a.length>0){b.init()
}function d(h){var f=h.target,g=h.param.path;
if(g){f.dataset.autoSuggest=g;
b.init()
}}}());
(function(){var b=[].slice.call(document.querySelectorAll(".form-content"))||"",c={submitData:null,events:{},init:function(){Granite.I18n.setLocale(fpga.utils.region.abbr());
this.form=this.formElem;
document.addEventListener("DOMContentLoaded",this.handlePageLoad.bind(this),false);
this.form.addEventListener("submit",this.handleSubmit.bind(this),false);
this.form.addEventListener("click",this.handleClick.bind(this),false);
this.form.addEventListener("change",this.handleChange.bind(this),false);
this.form.addEventListener("input",this.handleInput.bind(this),false);
this.msgObj={empty:Granite.I18n.get("This field is required"),email:Granite.I18n.get("error.valid.email"),tel:Granite.I18n.get("error.valid.phone.number"),file:Granite.I18n.get("Please choose a file"),fileType:Granite.I18n.get("error.valid.fileType"),url:Granite.I18n.get("error.valid.url"),pw_input:Granite.I18n.get("error.password.length"),custom:""};
this.formControls=this.getElements();
this.formGroups=this.getFormGroups();
this.getURLParam=fpga.utils.getURLParameter;
this.setEvent()
},getElements:function(){return this.form.elements
},showHide:function(e,d){return{elem:e,input:d,show:function(){this.elem.classList.remove("hide")
},hide:function(){this.elem.classList.add("hide")
}}
},setValidation:function(e,d){return{msgObj:d,input:e.input,msg:e.msg,setPattern:function(f){if(f===""){this.input.removeAttribute("pattern");
return
}this.input.setAttribute("pattern",f);
return
},setMsg:function(f){if(f===""){this.msg.removeAttribute("data-valid-msg");
return
}this.msg.setAttribute("data-valid-msg",f)
},setDefaultMsg:function(f){this.msg.setAttribute("data-valid-msg",f)
}}
},getFormGroups:function(){var g=[].slice.call(this.form.querySelectorAll(".form-group")),f=null,e={},h,d={},i=[];
g.forEach(function(j){f=j.querySelector(".form-input");
e[f.id]=this.showHide(j,f);
if(f.hasAttribute("required")){h={};
h.wrapper=j;
h.input=f;
h.msg=j.querySelector(".error-msg")||j.parentNode.parentNode.querySelector(".error-msg");
i.push(h);
if(f.type!=="file"){d[[f.id]]=this.setValidation(h,this.msgObj)
}}}.bind(this));
e.validate=i;
e.required=d;
return e
},checkFileUpload:function(e){var d=e.input,g=d.pattern.split(", ").join("|").replace(/\s*/g,""),f=new RegExp(g,"gi");
if(!d.required){return true
}if(d.value===""){return false
}if(d.files.length>0){if(d.value.match(f)!==null){return true
}else{d.setCustomValidity(this.msgObj.fileType);
return false
}}},validateForm:function(){var d;
this.formGroups.validate.forEach(function(e){if(e.wrapper.classList.contains("hide")){e.input.removeAttribute("required");
return
}if(e.input.type==="file"){if(this.checkFileUpload(e)){this.valid(e.wrapper,e.msg);
return
}else{this.invalid(e.wrapper,e.input,e.msg);
return
}}if(e.input.validity.patternMismatch||e.input.validity.valueMissing||e.input.validity.typeMismatch){this.invalid(e.wrapper,e.input,e.msg)
}else{this.valid(e.wrapper,e.msg)
}}.bind(this));
d=this.form.querySelector(".has-error");
if(d){d.querySelector(".form-input").focus();
return
}return true
},invalid:function(g,e,f,d){g.classList.add("has-error");
if(e.validity.patternMismatch){f.textContent=f.dataset.validMsg||this.msgObj[e.dataset.name]||this.msgObj[e.name]||this.msgObj[e.type]||this.msgObj.empty||e.validationMessage
}if(e.validity.typeMismatch){f.textContent=f.dataset.validMsg||this.msgObj[e.dataset.name]||this.msgObj[e.name]||this.msgObj[e.type]||this.msgObj.empty||e.validationMessage
}if(e.validity.valueMissing){f.textContent=this.msgObj[e.dataset.name]||this.msgObj[e.name]||this.msgObj.empty||e.validationMessage
}if(e.validity.customError){f.textContent=e.validationMessage||this.msgObj.empty
}},valid:function(d,e){d.classList.remove("has-error");
e.textContent=""
},setEvent:function(){var e={bubbles:true,cancelable:true},d={bubbles:true};
this.events.submit=new CustomEvent("form:submit",e);
this.events.click=new CustomEvent("form:click",d);
this.events.change=new CustomEvent("form:change",d);
this.events.pageLoad=new CustomEvent("form:load",d);
this.events.validate=new CustomEvent("form:validate",d);
this.events.input=new CustomEvent("form:input",d);
this.events.afterSubmit=new CustomEvent("form:afterSubmit",d)
},handleSubmit:function(j){var i=null,f=this.events.validate,h=j.currentTarget,g=this.events.submit,d=this.events.afterSubmit;
g.formTarget=document.activeElement;
g.form=h;
g.input=this.formControls;
g.submitForm=function(){this.form.setAttribute("data-prevent-submit","false")
};
f.formGroups=this.formGroups;
f.required=this.formGroups.required;
d.formGroups=this.formGroups;
d.input=this.formControls;
d.formTarget=document.activeElement;
j.currentTarget.dispatchEvent(f);
this.validateForm();
j.currentTarget.dispatchEvent(g);
i=JSON.parse(this.form.dataset.preventSubmit);
if(i||!this.form.checkValidity()){j.preventDefault()
}if(i&&this.form.checkValidity()){j.currentTarget.dispatchEvent(d);
this.collapseContainer(h)
}},handleInput:function(g){var f=g.target,d=g.currentTarget,h=this.events.input;
if(f.type==="button"){return
}h.formTarget=document.activeElement;
h.input=this.formControls;
h.formGroups=this.formGroups;
d.dispatchEvent(h)
},handleClick:function(h){var g=h.target,d=h.currentTarget,f=this.events.click;
if(g.type!=="button"){return
}f.formTarget=document.activeElement;
f.preventCollapse=false;
f.input=this.formControls;
f.formGroups=this.formGroups;
d.dispatchEvent(f);
if(!f.preventCollapse){this.collapseContainer(d)
}},collapseContainer:function(d){if(d.dataset.collapseForm){$("#formcollapse").collapse("hide")
}},handleChange:function(i){var h=i.target,g=i.currentTarget,d=i.srcElement||h,f=this.events.change;
if(h.type==="text"){return
}f.formTarget=h;
f.input=this.formControls;
f.formGroups=this.formGroups;
f.required=this.formGroups.required;
f[d.name]=d||h;
g.dispatchEvent(f)
},handlePageLoad:function(f){var d=this.events.pageLoad;
d.formTarget=this.form;
d.input=this.formControls;
d.formGroups=this.formGroups;
d.required=this.formGroups.required;
this.form.dispatchEvent(this.events.pageLoad)
}};
if(b){var a;
b.forEach(function(d){a=Object.create(c,{formElem:{value:d}});
a.init()
})
}}());
(function(){var a=document.querySelectorAll(".password-input"),b={init:function(c){this.confirm_pw=c.required.confirm_password||"";
this.parent_pw=c.required.set_password||"";
this.confirm_input=this.confirm_pw.input||"";
this.parent_input=this.confirm_pw?c.input[this.confirm_input.dataset.parentPw]:"";
fpga.events.create("password:input").dispatch();
if(!this.confirm_pw){return
}document.addEventListener("form:validate",this.handleValidation.bind(this),false)
},handleValidation:function(c){Granite.I18n.setLocale(fpga.utils.region.abbr());
if(this.parent_input.value===""&&this.confirm_input.value===""){this.reset();
return
}if(this.parent_input.value.length<6||this.parent_input.value.length>20){this.setPassword(Granite.I18n.get("error.password.length"),"[a-zA-Z\d]{6,20}");
return
}if(this.specialChars(this.parent_input.value.charAt(0))){this.setPassword(Granite.I18n.get("error.password.alphanumeric"),"[^`|~|!|@|#|$|%|^|&|*|(|)|\\-|_|+|=|{|\\}|\\\\|\\[|\\]|:|;|'|\"|<|>|,|.|?|/||]+");
this.setConfirmPassword("","");
return
}if(this.parent_input.value!==""&&this.checkAllowed(this.parent_input.value)){this.setPassword(Granite.I18n.get("error.password.symbols")+": ( )`~ ! @ # $ % ^ & * - + = | \\ { } [ ] : < > , . ? /","[^;_'\"|\\s]+");
this.setConfirmPassword("","");
return
}if(this.parent_input.value!==this.confirm_input.value){this.setPassword("","");
this.setConfirmPassword(Granite.I18n.get("error.password.mismatch"),this.parent_pw.value);
return
}this.reset()
},reset:function(){this.setPassword("","");
this.setConfirmPassword("","")
},specialChars:function(c){return/[~`@_!\.#$%\^&*+=\-\[\]\\';\(\),/{}|\\":<>\?]/g.test(c)
},checkAllowed:function(c){return/[;_'"\s]+/g.test(c)
},setConfirmPassword:function(d,c){this.confirm_pw.setMsg(d);
this.confirm_pw.setPattern(c)
},setPassword:function(d,c){this.parent_pw.setMsg(d);
this.parent_pw.setPattern(c)
}};
if(fpga.isPublish()&&a.length>0){document.addEventListener("form:load",b.init.bind(b),false)
}}());
(function(){var b={init:function(){this.checkboxList=Array.prototype.slice.call(document.querySelectorAll("."+this.name));
this.wrapper.addEventListener("change",this.handleChange.bind(this),false)
},handleChange:function(f){var d=f.target,c;
if(this.checkboxList.length<=1){return
}if(d.checked){this.checkboxList.forEach(function(e){e.removeAttribute("required","")
})
}else{c=this.checkboxList.filter(function(e){return e.checked
});
if(c.length===0){this.checkboxList.forEach(function(e){e.setAttribute("required",true)
})
}}return
}},a={init:function(){this.required=Array.prototype.slice.call(document.querySelectorAll(".checkbox-required"));
this.buildElements()
},buildElements:function(){var c;
this.required.forEach(function(d){c=Object.create(b,{wrapper:{value:d},name:{value:d.querySelector(".cb").name}});
c.init()
})
}};
a.init()
}());
(function(){var a=Array.prototype.slice.call(document.querySelectorAll(".messages")),c={init:function(){this.alert=this.wrapper.querySelector(".message");
this.alert.addEventListener("click",this.closeMsg.bind(this.alert),false);
fpga[this.alert.id]=(function(d){var e=d.alert;
return function(g){var f=e.querySelector(".panel-content");
if(g){if(g==="show"){e.classList.remove("hide");
return
}e.classList.remove("hide");
f.innerHTML=g;
return
}e.classList.add("hide")
}
}(this));
fpga.hideMessages=function(){var d=[].slice.call(document.querySelectorAll(".message"));
d.forEach(function(e){e.classList.add("hide")
})
}
},closeMsg:function(d){if(d.target.classList.contains("close")){this.classList.add("hide")
}}},b={init:function(){var d=fpga.utils.getURLParameter,e;
a.forEach(function(f){e=Object.create(c,{wrapper:{value:f},query:{value:d}});
e.init()
})
}};
fpga.pageLoad(function(){if(this.isPublish()&&a.length>0){b.init()
}})
}());
(function(){var c=document.getElementById("country"),b=document.getElementById("state_province"),a={init:function(){this.setEvent();
document.addEventListener("DOMContentLoaded",this.handleCountryEvents.bind(this),false);
c.addEventListener("change",this.handleCountryEvents.bind(this),false)
},setEvent:function(){this.countryToggle=new CustomEvent("country",{bubbles:true})
},handleCountryEvents:function(j){var f=document.getElementById("state_wrapper"),h=document.getElementById("state"),g=document.getElementById("province_wrapper"),d=document.getElementById("province"),k={en_us:"USA",ja_jp:"JAPAN",zh_cn:"CHINA"},i=k[fpga.utils.region()];
c.dispatchEvent(this.countryToggle);
if(!h){return
}if(c.value===""||c.value===i){f.classList.remove("hide");
g.classList.add("hide");
d.setAttribute("required","false");
h.setAttribute("required","true")
}else{f.classList.add("hide");
g.classList.remove("hide");
d.setAttribute("required","true");
h.setAttribute("required","false")
}}};
if(fpga.isPublish()&&c||b){a.init()
}}());
(function(){var b=Array.prototype.slice.call(document.querySelectorAll(".loading-spinner")),c={init:function(){this.show=this.wrapper.dataset.show;
this.hide=this.wrapper.dataset.hide;
document.addEventListener(this.show,this.showLoader.bind(this));
document.addEventListener(this.hide,this.hideLoader.bind(this))
},showLoader:function(){this.wrapper.classList.remove("hide")
},hideLoader:function(){this.wrapper.classList.add("hide")
}},a={init:function(){var d;
b.forEach(function(e){d=Object.create(c,{wrapper:{value:e},id:{value:e.id}});
d.init()
})
}};
if(b){if(fpga.isPublish()){a.init()
}}}());
(function(){var a=document.getElementById("predefined_form_container"),b={autoOpen:false,isTimed:false,init:function(){this.modalWindow=$(".modal-window");
this.form=document.querySelector(".form-content");
this.url=document.getElementById("page");
this.message=document.getElementById("successMsg");
this.formType=a.dataset.formType.replace(".html","");
this.checkTimed();
this.autoOpenModal();
a.addEventListener("click",this.handleEvents.bind(this),false);
this.form.addEventListener("invalid",function(c){c.preventDefault()
},true);
this.form.addEventListener("submit",this.handleSubmit.bind(this),false)
},checkTimed:function(){var c=localStorage.getItem(this.formType+"_autoOpen")||"";
if(a.dataset.predefinedForm==="true"&&c!==this.formType){this.autoOpen=true
}},handleEvents:function(d){var c=d.target;
if(c.id==="noSubscribe"){this.closeModal()
}},handleSubmit:function(g){var f=g.target,c=[].slice.call(this.form.querySelectorAll(":invalid")),d={};
g.preventDefault();
c.forEach(function(e){e.parentNode.parentNode.classList.add("has-error")
});
if(!this.form.checkValidity()){g.preventDefault()
}else{this.submitForm()
}},submitForm:function(){$.ajax({data:$(this.form).serialize(),type:"POST",dataType:"jsonp",url:"https://s1680167719.t.eloqua.com/e/f2",success:this.showSuccess()})
},showSuccess:function(){this.form.classList.add("hide");
this.message.classList.remove("hide");
this.setTimer(this.closeModal,2000)
},autoOpenModal:function(){if(this.autoOpen){this.setTimer(this.openModal,5000)
}},setTimer:function(c,d){setTimeout(c.bind(this),d)
},closeModal:function(){this.stopAutoOpen();
this.modalWindow.modal("hide")
},openModal:function(){this.modalWindow.modal("show");
this.url.value=location.href
},stopAutoOpen:function(){localStorage.setItem(this.formType+"_autoOpen",this.formType)
}};
if(fpga.isPublish()&&a){b.init()
}}());
(function(){var b=Array.prototype.slice.call(document.querySelectorAll(".form-field-file-upload"))||"",a={init:function(){this.elem=this.formElem;
this.submit=document.addEventListener("form:submit",this.handleSubmit.bind(this),false)
},handleSubmit:function(c){}};
$(document).ready(function(){var c;
if(b){b.forEach(function(d){c=Object.create(a,{formElem:{value:d}});
c.init()
})
}})
}());
(function(){var b=Array.prototype.slice.call(document.querySelectorAll(".modal-wrapper"));
var d={autoOpen:false,init:function o(){this.modalWindow=$(this.wrapper);
this.timedPopUp=this.wrapper.dataset.timedpopup;
this.timedID=this.wrapper.dataset.timedid;
this.timeToAppear=this.wrapper.dataset.timetoappear;
this.wrapper.addEventListener("click",this.handleModal.bind(this),false);
this.modalWindow.on("show.bs.modal",this.modalOpen.bind(this));
fpga.events.create("modal-init").dispatch({modalWrapper:this.wrapper});
this.localStorageID=!this.timedID?"autoOpenModal":"autoOpenModal_"+this.timedID;
this.modalWindow[0].addEventListener("modalWindow",this.exec.bind(this));
this.checkTimed();
this.autoOpenModal()
},exec:function g(p){this[p.param]()
},setTimed:function f(p){this.timedPopUp=true;
this.checkTimed();
this.autoOpenModal()
},handleModal:function h(q){var p=q.target;
if(p.id.indexOf("no_show")>-1){this.stopAutoOpen();
this.closeModal()
}if(p.id.indexOf("close_modal")>-1){this.closeModal()
}},checkTimed:function j(){var p=localStorage.getItem(this.localStorageID)||"";
if(this.timedPopUp&&!p){this.autoOpen=true
}},autoOpenModal:function c(){if(this.autoOpen){this.setTimer(this.openModal,this.timeToAppear*1000);
this.hideButton()
}},modalOpen:function m(){fpga.events.create("modal").dispatch({modalWrapper:this.wrapper});
this.hideButton()
},hideButton:function i(s){var q=Array.prototype.slice.call(this.wrapper.querySelectorAll(".btn")),p=q.filter(function(t){return t.id.indexOf("no_show")>-1?t:null
}),r=s&&s.relatedTarget?s.relatedTarget.dataset.toggle==="modal":"";
if(p.length===0){return
}if(!this.autoOpen||r){p[0].classList.add("hide")
}},stopAutoOpen:function e(){localStorage.setItem(this.localStorageID,false)
},openModal:function a(){this.modalWindow.modal("show")
},closeModal:function l(){this.modalWindow.modal("hide")
},setTimer:function k(p,q){setTimeout(p.bind(this),q)
}};
var n={init:function o(){var p;
b.forEach(function(q){p=Object.create(d,{wrapper:{value:q}});
p.init()
})
}};
fpga.pageLoad(function(){if(this.isPublish()&&b.length>0){n.init()
}})
}());
(function(){function a(g){if(Array.isArray(g)){for(var j=0,h=Array(g.length);
j<g.length;
j++){h[j]=g[j]
}return h
}else{return Array.from(g)
}}var d=document.querySelectorAll(".carousel-multi")||"";
var b={init:function f(){this.carousel=this.carouselItems.querySelectorAll(".item");
this.buildList()
},buildList:function c(){[].concat(a(this.carousel)).forEach(this.carouselItem)
},carouselItem:function e(l,g,m){var k=l;
var n=void 0;
for(var h=1;
h<4;
h++){k=k.nextElementSibling;
if(k===null){k=m[0]
}n=k.firstElementChild.cloneNode(true);
n.classList.add("cloneditem-"+h);
l.appendChild(n)
}}};
fpga.pageLoad(function(){if(this.isPublish()&&d){var g="";
[].concat(a(d)).forEach(function(h){g=Object.create(b,{carouselItems:{value:h}});
g.init()
})
}})
}());