+function(b){function a(){var e=document.createElement("bootstrap");
var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var c in d){if(e.style[c]!==undefined){return{end:d[c]}
}}return false
}b.fn.emulateTransitionEnd=function(e){var d=false;
var c=this;
b(this).one("bsTransitionEnd",function(){d=true
});
var f=function(){if(!d){b(c).trigger(b.support.transition.end)
}};
setTimeout(f,e);
return this
};
b(function(){b.support.transition=a();
if(!b.support.transition){return
}b.event.special.bsTransitionEnd={bindType:b.support.transition.end,delegateType:b.support.transition.end,handle:function(c){if(b(c.target).is(this)){return c.handleObj.handler.apply(this,arguments)
}}}
})
}(jQuery);
+function(d){function c(f,e){this.$body=d(document.body);
this.$scrollElement=d(f).is(document.body)?d(window):d(f);
this.options=d.extend({},c.DEFAULTS,e);
this.selector=(this.options.target||"")+" .nav li > a";
this.offsets=[];
this.targets=[];
this.activeTarget=null;
this.scrollHeight=0;
this.$scrollElement.on("scroll.bs.scrollspy",d.proxy(this.process,this));
this.refresh();
this.process()
}c.VERSION="3.3.7";
c.DEFAULTS={offset:10};
c.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
};
c.prototype.refresh=function(){var g=this;
var e="offset";
var f=0;
this.offsets=[];
this.targets=[];
this.scrollHeight=this.getScrollHeight();
if(!d.isWindow(this.$scrollElement[0])){e="position";
f=this.$scrollElement.scrollTop()
}this.$body.find(this.selector).map(function(){var i=d(this);
var h=i.data("target")||i.attr("href");
var j=/^#./.test(h)&&d(h);
return(j&&j.length&&j.is(":visible")&&[[j[e]().top+f,h]])||null
}).sort(function(i,h){return i[0]-h[0]
}).each(function(){g.offsets.push(this[0]);
g.targets.push(this[1])
})
};
c.prototype.process=function(){var k=this.$scrollElement.scrollTop()+this.options.offset;
var g=this.getScrollHeight();
var j=this.options.offset+g-this.$scrollElement.height();
var h=this.offsets;
var e=this.targets;
var l=this.activeTarget;
var f;
if(this.scrollHeight!=g){this.refresh()
}if(k>=j){return l!=(f=e[e.length-1])&&this.activate(f)
}if(l&&k<h[0]){this.activeTarget=null;
return this.clear()
}for(f=h.length;
f--;
){l!=e[f]&&k>=h[f]&&(h[f+1]===undefined||k<h[f+1])&&this.activate(e[f])
}};
c.prototype.activate=function(g){this.activeTarget=g;
this.clear();
var e=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]';
var f=d(e).parents("li").addClass("active");
if(f.parent(".dropdown-menu").length){f=f.closest("li.dropdown").addClass("active")
}f.trigger("activate.bs.scrollspy")
};
c.prototype.clear=function(){d(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.scrollspy");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.scrollspy",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.scrollspy;
d.fn.scrollspy=b;
d.fn.scrollspy.Constructor=c;
d.fn.scrollspy.noConflict=function(){d.fn.scrollspy=a;
return this
};
d(window).on("load.bs.scrollspy.data-api",function(){d('[data-spy="scroll"]').each(function(){var e=d(this);
b.call(e,e.data())
})
})
}(jQuery);
+function(d){var c=function(f,e){this.options=d.extend({},c.DEFAULTS,e);
this.$target=d(this.options.target).on("scroll.bs.affix.data-api",d.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",d.proxy(this.checkPositionWithEventLoop,this));
this.$element=d(f);
this.affixed=null;
this.unpin=null;
this.pinnedOffset=null;
this.checkPosition()
};
c.VERSION="3.3.7";
c.RESET="affix affix-top affix-bottom";
c.DEFAULTS={offset:0,target:window};
c.prototype.getState=function(n,m,f,g){var e=this.$target.scrollTop();
var i=this.$element.offset();
var j=this.$target.height();
if(f!=null&&this.affixed=="top"){return e<f?"top":false
}if(this.affixed=="bottom"){if(f!=null){return(e+this.unpin<=i.top)?false:"bottom"
}return(e+j<=n-g)?false:"bottom"
}var h=this.affixed==null;
var l=h?e:i.top;
var k=h?j:m;
if(f!=null&&e<=f){return"top"
}if(g!=null&&(l+k>=n-g)){return"bottom"
}return false
};
c.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(c.RESET).addClass("affix");
var f=this.$target.scrollTop();
var e=this.$element.offset();
return(this.pinnedOffset=e.top-f)
};
c.prototype.checkPositionWithEventLoop=function(){setTimeout(d.proxy(this.checkPosition,this),1)
};
c.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return
}var f=this.$element.height();
var l=this.options.offset;
var j=l.top;
var h=l.bottom;
var i=Math.max(d(document).height(),d(document.body).height());
if(typeof l!="object"){h=j=l
}if(typeof j=="function"){j=l.top(this.$element)
}if(typeof h=="function"){h=l.bottom(this.$element)
}var g=this.getState(i,f,j,h);
if(this.affixed!=g){if(this.unpin!=null){this.$element.css("top","")
}var m="affix"+(g?"-"+g:"");
var k=d.Event(m+".bs.affix");
this.$element.trigger(k);
if(k.isDefaultPrevented()){return
}this.affixed=g;
this.unpin=g=="bottom"?this.getPinnedOffset():null;
this.$element.removeClass(c.RESET).addClass(m).trigger(m.replace("affix","affixed")+".bs.affix")
}if(g=="bottom"){this.$element.offset({top:i-f-h})
}};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.affix");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.affix",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.affix;
d.fn.affix=b;
d.fn.affix.Constructor=c;
d.fn.affix.noConflict=function(){d.fn.affix=a;
return this
};
d(window).on("load",function(){d('[data-spy="affix"]').each(function(){var f=d(this);
var e=f.data();
e.offset=e.offset||{};
if(e.offsetBottom!=null){e.offset.bottom=e.offsetBottom
}if(e.offsetTop!=null){e.offset.top=e.offsetTop
}b.call(f,e)
})
})
}(jQuery);
+function(c){var d=function(g,f){this.$element=c(g);
this.$indicators=this.$element.find(".carousel-indicators");
this.options=f;
this.paused=null;
this.sliding=null;
this.interval=null;
this.$active=null;
this.$items=null;
this.options.keyboard&&this.$element.on("keydown.bs.carousel",c.proxy(this.keydown,this));
this.options.pause=="hover"&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",c.proxy(this.pause,this)).on("mouseleave.bs.carousel",c.proxy(this.cycle,this))
};
d.VERSION="3.3.7";
d.TRANSITION_DURATION=600;
d.DEFAULTS={interval:5000,pause:"hover",wrap:true,keyboard:true};
d.prototype.keydown=function(f){if(/input|textarea/i.test(f.target.tagName)){return
}switch(f.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}f.preventDefault()
};
d.prototype.cycle=function(f){f||(this.paused=false);
this.interval&&clearInterval(this.interval);
this.options.interval&&!this.paused&&(this.interval=setInterval(c.proxy(this.next,this),this.options.interval));
return this
};
d.prototype.getItemIndex=function(f){this.$items=f.parent().children(".item");
return this.$items.index(f||this.$active)
};
d.prototype.getItemForDirection=function(j,i){var f=this.getItemIndex(i);
var g=(j=="prev"&&f===0)||(j=="next"&&f==(this.$items.length-1));
if(g&&!this.options.wrap){return i
}var k=j=="prev"?-1:1;
var h=(f+k)%this.$items.length;
return this.$items.eq(h)
};
d.prototype.to=function(h){var g=this;
var f=this.getItemIndex(this.$active=this.$element.find(".item.active"));
if(h>(this.$items.length-1)||h<0){return
}if(this.sliding){return this.$element.one("slid.bs.carousel",function(){g.to(h)
})
}if(f==h){return this.pause().cycle()
}return this.slide(h>f?"next":"prev",this.$items.eq(h))
};
d.prototype.pause=function(f){f||(this.paused=true);
if(this.$element.find(".next, .prev").length&&c.support.transition){this.$element.trigger(c.support.transition.end);
this.cycle(true)
}this.interval=clearInterval(this.interval);
return this
};
d.prototype.next=function(){if(this.sliding){return
}return this.slide("next")
};
d.prototype.prev=function(){if(this.sliding){return
}return this.slide("prev")
};
d.prototype.slide=function(m,i){var p=this.$element.find(".item.active");
var g=i||this.getItemForDirection(m,p);
var k=this.interval;
var n=m=="next"?"left":"right";
var j=this;
if(g.hasClass("active")){return(this.sliding=false)
}var l=g[0];
var f=c.Event("slide.bs.carousel",{relatedTarget:l,direction:n});
this.$element.trigger(f);
if(f.isDefaultPrevented()){return
}this.sliding=true;
k&&this.pause();
if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var h=c(this.$indicators.children()[this.getItemIndex(g)]);
h&&h.addClass("active")
}var o=c.Event("slid.bs.carousel",{relatedTarget:l,direction:n});
if(c.support.transition&&this.$element.hasClass("slide")){g.addClass(m);
g[0].offsetWidth;
p.addClass(n);
g.addClass(n);
p.one("bsTransitionEnd",function(){g.removeClass([m,n].join(" ")).addClass("active");
p.removeClass(["active",n].join(" "));
j.sliding=false;
setTimeout(function(){j.$element.trigger(o)
},0)
}).emulateTransitionEnd(d.TRANSITION_DURATION)
}else{p.removeClass("active");
g.addClass("active");
this.sliding=false;
this.$element.trigger(o)
}k&&this.cycle();
return this
};
function b(f){return this.each(function(){var j=c(this);
var i=j.data("bs.carousel");
var g=c.extend({},d.DEFAULTS,j.data(),typeof f=="object"&&f);
var h=typeof f=="string"?f:g.slide;
if(!i){j.data("bs.carousel",(i=new d(this,g)))
}if(typeof f=="number"){i.to(f)
}else{if(h){i[h]()
}else{if(g.interval){i.pause().cycle()
}}}})
}var a=c.fn.carousel;
c.fn.carousel=b;
c.fn.carousel.Constructor=d;
c.fn.carousel.noConflict=function(){c.fn.carousel=a;
return this
};
var e=function(k){var g;
var j=c(this);
var f=c(j.attr("data-target")||(g=j.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,""));
if(!f.hasClass("carousel")){return
}var h=c.extend({},f.data(),j.data());
var i=j.attr("data-slide-to");
if(i){h.interval=false
}b.call(f,h);
if(i){f.data("bs.carousel").to(i)
}k.preventDefault()
};
c(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e);
c(window).on("load",function(){c('[data-ride="carousel"]').each(function(){var f=c(this);
b.call(f,f.data())
})
})
}(jQuery);
+function(d){var e=function(g,f){this.$element=d(g);
this.options=d.extend({},e.DEFAULTS,f);
this.$trigger=d('[data-toggle="collapse"][href="#'+g.id+'"],[data-toggle="collapse"][data-target="#'+g.id+'"]');
this.transitioning=null;
if(this.options.parent){this.$parent=this.getParent()
}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)
}if(this.options.toggle){this.toggle()
}};
e.VERSION="3.3.7";
e.TRANSITION_DURATION=350;
e.DEFAULTS={toggle:true};
e.prototype.dimension=function(){var f=this.$element.hasClass("width");
return f?"width":"height"
};
e.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return
}var h;
var j=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(j&&j.length){h=j.data("bs.collapse");
if(h&&h.transitioning){return
}}var g=d.Event("show.bs.collapse");
this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}if(j&&j.length){b.call(j,"hide");
h||j.data("bs.collapse",null)
}var k=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",true);
this.$trigger.removeClass("collapsed").attr("aria-expanded",true);
this.transitioning=1;
var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k]("");
this.transitioning=0;
this.$element.trigger("shown.bs.collapse")
};
if(!d.support.transition){return f.call(this)
}var i=d.camelCase(["scroll",k].join("-"));
this.$element.one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[k](this.$element[0][i])
};
e.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return
}var g=d.Event("hide.bs.collapse");
this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}var h=this.dimension();
this.$element[h](this.$element[h]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);
this.$trigger.addClass("collapsed").attr("aria-expanded",false);
this.transitioning=1;
var f=function(){this.transitioning=0;
this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
if(!d.support.transition){return f.call(this)
}this.$element[h](0).one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)
};
e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
e.prototype.getParent=function(){return d(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(d.proxy(function(h,g){var f=d(g);
this.addAriaAndCollapsedClass(c(f),f)
},this)).end()
};
e.prototype.addAriaAndCollapsedClass=function(g,f){var h=g.hasClass("in");
g.attr("aria-expanded",h);
f.toggleClass("collapsed",!h).attr("aria-expanded",h)
};
function c(f){var g;
var h=f.attr("data-target")||(g=f.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"");
return d(h)
}function b(f){return this.each(function(){var i=d(this);
var h=i.data("bs.collapse");
var g=d.extend({},e.DEFAULTS,i.data(),typeof f=="object"&&f);
if(!h&&g.toggle&&/show|hide/.test(f)){g.toggle=false
}if(!h){i.data("bs.collapse",(h=new e(this,g)))
}if(typeof f=="string"){h[f]()
}})
}var a=d.fn.collapse;
d.fn.collapse=b;
d.fn.collapse.Constructor=e;
d.fn.collapse.noConflict=function(){d.fn.collapse=a;
return this
};
d(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(j){var i=d(this);
if(!i.attr("data-target")){j.preventDefault()
}var f=c(i);
var h=f.data("bs.collapse");
var g=h?"toggle":i.data();
b.call(f,g)
})
}(jQuery);
+function(d){var b=function(f){this.element=d(f)
};
b.VERSION="3.3.7";
b.TRANSITION_DURATION=150;
b.prototype.show=function(){var l=this.element;
var h=l.closest("ul:not(.dropdown-menu)");
var g=l.data("target");
if(!g){g=l.attr("href");
g=g&&g.replace(/.*(?=#[^\s]*$)/,"")
}if(l.parent("li").hasClass("active")){return
}var j=h.find(".active:last a");
var k=d.Event("hide.bs.tab",{relatedTarget:l[0]});
var i=d.Event("show.bs.tab",{relatedTarget:j[0]});
j.trigger(k);
l.trigger(i);
if(i.isDefaultPrevented()||k.isDefaultPrevented()){return
}var f=d(g);
this.activate(l.closest("li"),h);
this.activate(f,f.parent(),function(){j.trigger({type:"hidden.bs.tab",relatedTarget:l[0]});
l.trigger({type:"shown.bs.tab",relatedTarget:j[0]})
})
};
b.prototype.activate=function(h,g,k){var f=g.find("> .active");
var j=k&&d.support.transition&&(f.length&&f.hasClass("fade")||!!g.find("> .fade").length);
function i(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",false);
h.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",true);
if(j){h[0].offsetWidth;
h.addClass("in")
}else{h.removeClass("fade")
}if(h.parent(".dropdown-menu").length){h.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",true)
}k&&k()
}f.length&&j?f.one("bsTransitionEnd",i).emulateTransitionEnd(b.TRANSITION_DURATION):i();
f.removeClass("in")
};
function c(f){return this.each(function(){var h=d(this);
var g=h.data("bs.tab");
if(!g){h.data("bs.tab",(g=new b(this)))
}if(typeof f=="string"){g[f]()
}})
}var a=d.fn.tab;
d.fn.tab=c;
d.fn.tab.Constructor=b;
d.fn.tab.noConflict=function(){d.fn.tab=a;
return this
};
var e=function(f){f.preventDefault();
c.call(d(this),"show")
};
d(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)
}(jQuery);
+function(d){var b=function(f,e){this.options=e;
this.$body=d(document.body);
this.$element=d(f);
this.$dialog=this.$element.find(".modal-dialog");
this.$backdrop=null;
this.isShown=null;
this.originalBodyPad=null;
this.scrollbarWidth=0;
this.ignoreBackdropClick=false;
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,d.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
}};
b.VERSION="3.3.7";
b.TRANSITION_DURATION=300;
b.BACKDROP_TRANSITION_DURATION=150;
b.DEFAULTS={backdrop:true,keyboard:true,show:true};
b.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)
};
b.prototype.show=function(h){var f=this;
var g=d.Event("show.bs.modal",{relatedTarget:h});
this.$element.trigger(g);
if(this.isShown||g.isDefaultPrevented()){return
}this.isShown=true;
this.checkScrollbar();
this.setScrollbar();
this.$body.addClass("modal-open");
this.escape();
this.resize();
this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',d.proxy(this.hide,this));
this.$dialog.on("mousedown.dismiss.bs.modal",function(){f.$element.one("mouseup.dismiss.bs.modal",function(i){if(d(i.target).is(f.$element)){f.ignoreBackdropClick=true
}})
});
this.backdrop(function(){var j=d.support.transition&&f.$element.hasClass("fade");
if(!f.$element.parent().length){f.$element.appendTo(f.$body)
}f.$element.show().scrollTop(0);
f.adjustDialog();
if(j){f.$element[0].offsetWidth
}f.$element.addClass("in");
f.enforceFocus();
var i=d.Event("shown.bs.modal",{relatedTarget:h});
j?f.$dialog.one("bsTransitionEnd",function(){f.$element.trigger("focus").trigger(i)
}).emulateTransitionEnd(b.TRANSITION_DURATION):f.$element.trigger("focus").trigger(i)
})
};
b.prototype.hide=function(f){if(f){f.preventDefault()
}f=d.Event("hide.bs.modal");
this.$element.trigger(f);
if(!this.isShown||f.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
this.resize();
d(document).off("focusin.bs.modal");
this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
this.$dialog.off("mousedown.dismiss.bs.modal");
d.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",d.proxy(this.hideModal,this)).emulateTransitionEnd(b.TRANSITION_DURATION):this.hideModal()
};
b.prototype.enforceFocus=function(){d(document).off("focusin.bs.modal").on("focusin.bs.modal",d.proxy(function(f){if(document!==f.target&&this.$element[0]!==f.target&&!this.$element.has(f.target).length){this.$element.trigger("focus")
}},this))
};
b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",d.proxy(function(f){f.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")
}}};
b.prototype.resize=function(){if(this.isShown){d(window).on("resize.bs.modal",d.proxy(this.handleUpdate,this))
}else{d(window).off("resize.bs.modal")
}};
b.prototype.hideModal=function(){var e=this;
this.$element.hide();
this.backdrop(function(){e.$body.removeClass("modal-open");
e.resetAdjustments();
e.resetScrollbar();
e.$element.trigger("hidden.bs.modal")
})
};
b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
b.prototype.backdrop=function(i){var h=this;
var f=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var e=d.support.transition&&f;
this.$backdrop=d(document.createElement("div")).addClass("modal-backdrop "+f).appendTo(this.$body);
this.$element.on("click.dismiss.bs.modal",d.proxy(function(j){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;
return
}if(j.target!==j.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus():this.hide()
},this));
if(e){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!i){return
}e?this.$backdrop.one("bsTransitionEnd",i).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):i()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var g=function(){h.removeBackdrop();
i&&i()
};
d.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):g()
}else{if(i){i()
}}}};
b.prototype.handleUpdate=function(){this.adjustDialog()
};
b.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})
};
b.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
};
b.prototype.checkScrollbar=function(){var f=window.innerWidth;
if(!f){var e=document.documentElement.getBoundingClientRect();
f=e.right-Math.abs(e.left)
}this.bodyIsOverflowing=document.body.clientWidth<f;
this.scrollbarWidth=this.measureScrollbar()
};
b.prototype.setScrollbar=function(){var e=parseInt((this.$body.css("padding-right")||0),10);
this.originalBodyPad=document.body.style.paddingRight||"";
if(this.bodyIsOverflowing){this.$body.css("padding-right",e+this.scrollbarWidth)
}};
b.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
};
b.prototype.measureScrollbar=function(){var f=document.createElement("div");
f.className="modal-scrollbar-measure";
this.$body.append(f);
var e=f.offsetWidth-f.clientWidth;
this.$body[0].removeChild(f);
return e
};
function c(e,f){return this.each(function(){var i=d(this);
var h=i.data("bs.modal");
var g=d.extend({},b.DEFAULTS,i.data(),typeof e=="object"&&e);
if(!h){i.data("bs.modal",(h=new b(this,g)))
}if(typeof e=="string"){h[e](f)
}else{if(g.show){h.show(f)
}}})
}var a=d.fn.modal;
d.fn.modal=c;
d.fn.modal.Constructor=b;
d.fn.modal.noConflict=function(){d.fn.modal=a;
return this
};
d(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(j){var i=d(this);
var g=i.attr("href");
var f=d(i.attr("data-target")||(g&&g.replace(/.*(?=#[^\s]+$)/,"")));
var h=f.data("bs.modal")?"toggle":d.extend({remote:!/#/.test(g)&&g},f.data(),i.data());
if(i.is("a")){j.preventDefault()
}f.one("show.bs.modal",function(e){if(e.isDefaultPrevented()){return
}f.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")
})
});
c.call(f,h,this)
})
}(jQuery);
+function(d){var c=function(f,e){this.type=null;
this.options=null;
this.enabled=null;
this.timeout=null;
this.hoverState=null;
this.$element=null;
this.inState=null;
this.init("tooltip",f,e)
};
c.VERSION="3.3.7";
c.TRANSITION_DURATION=150;
c.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false,viewport:{selector:"body",padding:0}};
c.prototype.init=function(l,j,g){this.enabled=true;
this.type=l;
this.$element=d(j);
this.options=this.getOptions(g);
this.$viewport=this.options.viewport&&d(d.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):(this.options.viewport.selector||this.options.viewport));
this.inState={click:false,hover:false,focus:false};
if(this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}var k=this.options.trigger.split(" ");
for(var h=k.length;
h--;
){var f=k[h];
if(f=="click"){this.$element.on("click."+this.type,this.options.selector,d.proxy(this.toggle,this))
}else{if(f!="manual"){var m=f=="hover"?"mouseenter":"focusin";
var e=f=="hover"?"mouseleave":"focusout";
this.$element.on(m+"."+this.type,this.options.selector,d.proxy(this.enter,this));
this.$element.on(e+"."+this.type,this.options.selector,d.proxy(this.leave,this))
}}}this.options.selector?(this._options=d.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
};
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.getOptions=function(e){e=d.extend({},this.getDefaults(),this.$element.data(),e);
if(e.delay&&typeof e.delay=="number"){e.delay={show:e.delay,hide:e.delay}
}return e
};
c.prototype.getDelegateOptions=function(){var e={};
var f=this.getDefaults();
this._options&&d.each(this._options,function(g,h){if(f[g]!=h){e[g]=h
}});
return e
};
c.prototype.enter=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);
if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());
d(f.currentTarget).data("bs."+this.type,e)
}if(f instanceof d.Event){e.inState[f.type=="focusin"?"focus":"hover"]=true
}if(e.tip().hasClass("in")||e.hoverState=="in"){e.hoverState="in";
return
}clearTimeout(e.timeout);
e.hoverState="in";
if(!e.options.delay||!e.options.delay.show){return e.show()
}e.timeout=setTimeout(function(){if(e.hoverState=="in"){e.show()
}},e.options.delay.show)
};
c.prototype.isInStateTrue=function(){for(var e in this.inState){if(this.inState[e]){return true
}}return false
};
c.prototype.leave=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);
if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());
d(f.currentTarget).data("bs."+this.type,e)
}if(f instanceof d.Event){e.inState[f.type=="focusout"?"focus":"hover"]=false
}if(e.isInStateTrue()){return
}clearTimeout(e.timeout);
e.hoverState="out";
if(!e.options.delay||!e.options.delay.hide){return e.hide()
}e.timeout=setTimeout(function(){if(e.hoverState=="out"){e.hide()
}},e.options.delay.hide)
};
c.prototype.show=function(){var o=d.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(o);
var p=d.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(o.isDefaultPrevented()||!p){return
}var n=this;
var l=this.tip();
var h=this.getUID(this.type);
this.setContent();
l.attr("id",h);
this.$element.attr("aria-describedby",h);
if(this.options.animation){l.addClass("fade")
}var k=typeof this.options.placement=="function"?this.options.placement.call(this,l[0],this.$element[0]):this.options.placement;
var s=/\s?auto?\s?/i;
var t=s.test(k);
if(t){k=k.replace(s,"")||"top"
}l.detach().css({top:0,left:0,display:"block"}).addClass(k).data("bs."+this.type,this);
this.options.container?l.appendTo(this.options.container):l.insertAfter(this.$element);
this.$element.trigger("inserted.bs."+this.type);
var q=this.getPosition();
var f=l[0].offsetWidth;
var m=l[0].offsetHeight;
if(t){var j=k;
var r=this.getPosition(this.$viewport);
k=k=="bottom"&&q.bottom+m>r.bottom?"top":k=="top"&&q.top-m<r.top?"bottom":k=="right"&&q.right+f>r.width?"left":k=="left"&&q.left-f<r.left?"right":k;
l.removeClass(j).addClass(k)
}var i=this.getCalculatedOffset(k,q,f,m);
this.applyPlacement(i,k);
var g=function(){var e=n.hoverState;
n.$element.trigger("shown.bs."+n.type);
n.hoverState=null;
if(e=="out"){n.leave(n)
}};
d.support.transition&&this.$tip.hasClass("fade")?l.one("bsTransitionEnd",g).emulateTransitionEnd(c.TRANSITION_DURATION):g()
}};
c.prototype.applyPlacement=function(j,k){var l=this.tip();
var g=l[0].offsetWidth;
var q=l[0].offsetHeight;
var f=parseInt(l.css("margin-top"),10);
var i=parseInt(l.css("margin-left"),10);
if(isNaN(f)){f=0
}if(isNaN(i)){i=0
}j.top+=f;
j.left+=i;
d.offset.setOffset(l[0],d.extend({using:function(r){l.css({top:Math.round(r.top),left:Math.round(r.left)})
}},j),0);
l.addClass("in");
var e=l[0].offsetWidth;
var m=l[0].offsetHeight;
if(k=="top"&&m!=q){j.top=j.top+q-m
}var p=this.getViewportAdjustedDelta(k,j,e,m);
if(p.left){j.left+=p.left
}else{j.top+=p.top
}var n=/top|bottom/.test(k);
var h=n?p.left*2-g+e:p.top*2-q+m;
var o=n?"offsetWidth":"offsetHeight";
l.offset(j);
this.replaceArrow(h,l[0][o],n)
};
c.prototype.replaceArrow=function(g,e,f){this.arrow().css(f?"left":"top",50*(1-g/e)+"%").css(f?"top":"left","")
};
c.prototype.setContent=function(){var f=this.tip();
var e=this.getTitle();
f.find(".tooltip-inner")[this.options.html?"html":"text"](e);
f.removeClass("fade in top bottom left right")
};
c.prototype.hide=function(j){var g=this;
var i=d(this.$tip);
var h=d.Event("hide.bs."+this.type);
function f(){if(g.hoverState!="in"){i.detach()
}if(g.$element){g.$element.removeAttr("aria-describedby").trigger("hidden.bs."+g.type)
}j&&j()
}this.$element.trigger(h);
if(h.isDefaultPrevented()){return
}i.removeClass("in");
d.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f();
this.hoverState=null;
return this
};
c.prototype.fixTitle=function(){var e=this.$element;
if(e.attr("title")||typeof e.attr("data-original-title")!="string"){e.attr("data-original-title",e.attr("title")||"").attr("title","")
}};
c.prototype.hasContent=function(){return this.getTitle()
};
c.prototype.getPosition=function(g){g=g||this.$element;
var i=g[0];
var f=i.tagName=="BODY";
var h=i.getBoundingClientRect();
if(h.width==null){h=d.extend({},h,{width:h.right-h.left,height:h.bottom-h.top})
}var k=window.SVGElement&&i instanceof window.SVGElement;
var l=f?{top:0,left:0}:(k?null:g.offset());
var e={scroll:f?document.documentElement.scrollTop||document.body.scrollTop:g.scrollTop()};
var j=f?{width:d(window).width(),height:d(window).height()}:null;
return d.extend({},h,e,j,l)
};
c.prototype.getCalculatedOffset=function(e,h,f,g){return e=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-f/2}:e=="top"?{top:h.top-g,left:h.left+h.width/2-f/2}:e=="left"?{top:h.top+h.height/2-g/2,left:h.left-f}:{top:h.top+h.height/2-g/2,left:h.left+h.width}
};
c.prototype.getViewportAdjustedDelta=function(h,k,e,j){var m={top:0,left:0};
if(!this.$viewport){return m
}var g=this.options.viewport&&this.options.viewport.padding||0;
var l=this.getPosition(this.$viewport);
if(/right|left/.test(h)){var n=k.top-g-l.scroll;
var i=k.top+g-l.scroll+j;
if(n<l.top){m.top=l.top-n
}else{if(i>l.top+l.height){m.top=l.top+l.height-i
}}}else{var o=k.left-g;
var f=k.left+g+e;
if(o<l.left){m.left=l.left-o
}else{if(f>l.right){m.left=l.left+l.width-f
}}}return m
};
c.prototype.getTitle=function(){var g;
var e=this.$element;
var f=this.options;
g=e.attr("data-original-title")||(typeof f.title=="function"?f.title.call(e[0]):f.title);
return g
};
c.prototype.getUID=function(e){do{e+=~~(Math.random()*1000000)
}while(document.getElementById(e));
return e
};
c.prototype.tip=function(){if(!this.$tip){this.$tip=d(this.options.template);
if(this.$tip.length!=1){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
}}return this.$tip
};
c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow"))
};
c.prototype.enable=function(){this.enabled=true
};
c.prototype.disable=function(){this.enabled=false
};
c.prototype.toggleEnabled=function(){this.enabled=!this.enabled
};
c.prototype.toggle=function(g){var f=this;
if(g){f=d(g.currentTarget).data("bs."+this.type);
if(!f){f=new this.constructor(g.currentTarget,this.getDelegateOptions());
d(g.currentTarget).data("bs."+this.type,f)
}}if(g){f.inState.click=!f.inState.click;
if(f.isInStateTrue()){f.enter(f)
}else{f.leave(f)
}}else{f.tip().hasClass("in")?f.leave(f):f.enter(f)
}};
c.prototype.destroy=function(){var e=this;
clearTimeout(this.timeout);
this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type);
if(e.$tip){e.$tip.detach()
}e.$tip=null;
e.$arrow=null;
e.$viewport=null;
e.$element=null
})
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.tooltip");
var f=typeof e=="object"&&e;
if(!g&&/destroy|hide/.test(e)){return
}if(!g){h.data("bs.tooltip",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.tooltip;
d.fn.tooltip=b;
d.fn.tooltip.Constructor=c;
d.fn.tooltip.noConflict=function(){d.fn.tooltip=a;
return this
}
}(jQuery);
+function(d){var c=function(f,e){this.init("popover",f,e)
};
if(!d.fn.tooltip){throw new Error("Popover requires tooltip.js")
}c.VERSION="3.3.7";
c.DEFAULTS=d.extend({},d.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
c.prototype=d.extend({},d.fn.tooltip.Constructor.prototype);
c.prototype.constructor=c;
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.setContent=function(){var g=this.tip();
var f=this.getTitle();
var e=this.getContent();
g.find(".popover-title")[this.options.html?"html":"text"](f);
g.find(".popover-content").children().detach().end()[this.options.html?(typeof e=="string"?"html":"append"):"text"](e);
g.removeClass("fade top bottom left right in");
if(!g.find(".popover-title").html()){g.find(".popover-title").hide()
}};
c.prototype.hasContent=function(){return this.getTitle()||this.getContent()
};
c.prototype.getContent=function(){var e=this.$element;
var f=this.options;
return e.attr("data-content")||(typeof f.content=="function"?f.content.call(e[0]):f.content)
};
c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".arrow"))
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.popover");
var f=typeof e=="object"&&e;
if(!g&&/destroy|hide/.test(e)){return
}if(!g){h.data("bs.popover",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.popover;
d.fn.popover=b;
d.fn.popover.Constructor=c;
d.fn.popover.noConflict=function(){d.fn.popover=a;
return this
}
}(jQuery);
+function(h){var e=".dropdown-backdrop";
var b='[data-toggle="dropdown"]';
var a=function(i){h(i).on("click.bs.dropdown",this.toggle)
};
a.VERSION="3.3.7";
function f(k){var i=k.attr("data-target");
if(!i){i=k.attr("href");
i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")
}var j=i&&h(i);
return j&&j.length?j:k.parent()
}function d(i){if(i&&i.which===3){return
}h(e).remove();
h(b).each(function(){var l=h(this);
var k=f(l);
var j={relatedTarget:this};
if(!k.hasClass("open")){return
}if(i&&i.type=="click"&&/input|textarea/i.test(i.target.tagName)&&h.contains(k[0],i.target)){return
}k.trigger(i=h.Event("hide.bs.dropdown",j));
if(i.isDefaultPrevented()){return
}l.attr("aria-expanded","false");
k.removeClass("open").trigger(h.Event("hidden.bs.dropdown",j))
})
}a.prototype.toggle=function(m){var l=h(this);
if(l.is(".disabled, :disabled")){return
}var k=f(l);
var j=k.hasClass("open");
d();
if(!j){if("ontouchstart" in document.documentElement&&!k.closest(".navbar-nav").length){h(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(h(this)).on("click",d)
}var i={relatedTarget:this};
k.trigger(m=h.Event("show.bs.dropdown",i));
if(m.isDefaultPrevented()){return
}l.trigger("focus").attr("aria-expanded","true");
k.toggleClass("open").trigger(h.Event("shown.bs.dropdown",i))
}return false
};
a.prototype.keydown=function(m){if(!/(38|40|27|32)/.test(m.which)||/input|textarea/i.test(m.target.tagName)){return
}var l=h(this);
m.preventDefault();
m.stopPropagation();
if(l.is(".disabled, :disabled")){return
}var k=f(l);
var j=k.hasClass("open");
if(!j&&m.which!=27||j&&m.which==27){if(m.which==27){k.find(b).trigger("focus")
}return l.trigger("click")
}var n=" li:not(.disabled):visible a";
var o=k.find(".dropdown-menu"+n);
if(!o.length){return
}var i=o.index(m.target);
if(m.which==38&&i>0){i--
}if(m.which==40&&i<o.length-1){i++
}if(!~i){i=0
}o.eq(i).trigger("focus")
};
function g(i){return this.each(function(){var k=h(this);
var j=k.data("bs.dropdown");
if(!j){k.data("bs.dropdown",(j=new a(this)))
}if(typeof i=="string"){j[i].call(k)
}})
}var c=h.fn.dropdown;
h.fn.dropdown=g;
h.fn.dropdown.Constructor=a;
h.fn.dropdown.noConflict=function(){h.fn.dropdown=c;
return this
};
h(document).on("click.bs.dropdown.data-api",d).on("click.bs.dropdown.data-api",".dropdown form",function(i){i.stopPropagation()
}).on("click.bs.dropdown.data-api",b,a.prototype.toggle).on("keydown.bs.dropdown.data-api",b,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)
}(jQuery);