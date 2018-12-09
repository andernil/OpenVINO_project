(function(a){a.flexslider=function(E,j){var b=a(E);
b.vars=a.extend({},a.flexslider.defaults,j);
var w=b.vars.namespace,F=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart" in window||F||window.DocumentTouch&&document instanceof DocumentTouch)&&b.vars.touch,D="click touchend MSPointerUp",B="",y,q=b.vars.direction==="vertical",A=b.vars.reverse,x=b.vars.itemWidth>0,e=b.vars.animation==="fade",z=b.vars.asNavFor!=="",C={},k=!0;
a.data(E,"flexslider",b);
C={init:function(){b.animating=!1;
b.currentSlide=parseInt(b.vars.startAt?b.vars.startAt:0);
isNaN(b.currentSlide)&&(b.currentSlide=0);
b.animatingTo=b.currentSlide;
b.atEnd=b.currentSlide===0||b.currentSlide===b.last;
b.containerSelector=b.vars.selector.substr(0,b.vars.selector.search(" "));
b.slides=a(b.vars.selector,b);
b.container=a(b.containerSelector,b);
b.count=b.slides.length;
b.syncExists=a(b.vars.sync).length>0;
b.vars.animation==="slide"&&(b.vars.animation="swing");
b.prop=q?"top":"marginLeft";
b.args={};
b.manualPause=!1;
b.stopped=!1;
b.started=!1;
b.startTimeout=null;
b.transitions=!b.vars.video&&!e&&b.vars.useCSS&&function(){var d=document.createElement("div"),c=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];
for(var f in c){if(d.style[c[f]]!==undefined){b.pfx=c[f].replace("Perspective","").toLowerCase();
b.prop="-"+b.pfx+"-transform";
return !0
}}return !1
}();
b.vars.controlsContainer!==""&&(b.controlsContainer=a(b.vars.controlsContainer).length>0&&a(b.vars.controlsContainer));
b.vars.manualControls!==""&&(b.manualControls=a(b.vars.manualControls).length>0&&a(b.vars.manualControls));
if(b.vars.randomize){b.slides.sort(function(){return Math.round(Math.random())-0.5
});
b.container.empty().append(b.slides)
}b.doMath();
b.setup("init");
b.vars.controlNav&&C.controlNav.setup();
b.vars.directionNav&&C.directionNav.setup();
b.vars.keyboard&&(a(b.containerSelector).length===1||b.vars.multipleKeyboard)&&a(document).bind("keyup",function(d){var c=d.keyCode;
if(!b.animating&&(c===39||c===37)){var f=c===39?b.getTarget("next"):c===37?b.getTarget("prev"):!1;
b.flexAnimate(f,b.vars.pauseOnAction)
}});
b.vars.mousewheel&&b.bind("mousewheel",function(h,d,l,c){h.preventDefault();
var f=d<0?b.getTarget("next"):b.getTarget("prev");
b.flexAnimate(f,b.vars.pauseOnAction)
});
b.vars.pausePlay&&C.pausePlay.setup();
b.vars.slideshow&&b.vars.pauseInvisible&&C.pauseInvisible.init();
if(b.vars.slideshow){b.vars.pauseOnHover&&b.hover(function(){!b.manualPlay&&!b.manualPause&&b.pause()
},function(){!b.manualPause&&!b.manualPlay&&!b.stopped&&b.play()
});
if(!b.vars.pauseInvisible||!C.pauseInvisible.isHidden()){b.vars.initDelay>0?b.startTimeout=setTimeout(b.play,b.vars.initDelay):b.play()
}}z&&C.asNav.setup();
g&&b.vars.touch&&C.touch();
(!e||e&&b.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",C.resize);
b.find("img").attr("draggable","false");
setTimeout(function(){b.vars.start(b)
},200)
},asNav:{setup:function(){b.asNav=!0;
b.animatingTo=Math.floor(b.currentSlide/b.move);
b.currentItem=b.currentSlide;
b.slides.removeClass(w+"active-slide").eq(b.currentItem).addClass(w+"active-slide");
if(!F){b.slides.click(function(c){c.preventDefault();
var h=a(this),d=h.index(),f=h.offset().left-a(b).scrollLeft();
if(f<=0&&h.hasClass(w+"active-slide")){b.flexAnimate(b.getTarget("prev"),!0)
}else{if(!a(b.vars.asNavFor).data("flexslider").animating&&!h.hasClass(w+"active-slide")){b.direction=b.currentItem<d?"next":"prev";
b.flexAnimate(d,b.vars.pauseOnAction,!1,!0,!0)
}}})
}else{E._slider=b;
b.slides.each(function(){var c=this;
c._gesture=new MSGesture;
c._gesture.target=c;
c.addEventListener("MSPointerDown",function(d){d.preventDefault();
d.currentTarget._gesture&&d.currentTarget._gesture.addPointer(d.pointerId)
},!1);
c.addEventListener("MSGestureTap",function(f){f.preventDefault();
var h=a(this),d=h.index();
if(!a(b.vars.asNavFor).data("flexslider").animating&&!h.hasClass("active")){b.direction=b.currentItem<d?"next":"prev";
b.flexAnimate(d,b.vars.pauseOnAction,!1,!0,!0)
}})
})
}}},controlNav:{setup:function(){b.manualControls?C.controlNav.setupManual():C.controlNav.setupPaging()
},setupPaging:function(){var d=b.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",r=1,h,p;
b.controlNavScaffold=a('<ol class="'+w+"control-nav "+w+d+'"></ol>');
if(b.pagingCount>1){for(var m=0;
m<b.pagingCount;
m++){p=b.slides.eq(m);
h=b.vars.controlNav==="thumbnails"?'<img src="'+p.attr("data-thumb")+'"/>':"<a>"+r+"</a>";
if("thumbnails"===b.vars.controlNav&&!0===b.vars.thumbCaptions){var c=p.attr("data-thumbcaption");
""!=c&&undefined!=c&&(h+='<span class="'+w+'caption">'+c+"</span>")
}b.controlNavScaffold.append("<li>"+h+"</li>");
r++
}}b.controlsContainer?a(b.controlsContainer).append(b.controlNavScaffold):b.append(b.controlNavScaffold);
C.controlNav.set();
C.controlNav.active();
b.controlNavScaffold.delegate("a, img",D,function(f){f.preventDefault();
if(B===""||B===f.type){var o=a(this),l=b.controlNav.index(o);
if(!o.hasClass(w+"active")){b.direction=l>b.currentSlide?"next":"prev";
b.flexAnimate(l,b.vars.pauseOnAction)
}}B===""&&(B=f.type);
C.setToClearWatchedEvent()
})
},setupManual:function(){b.controlNav=b.manualControls;
C.controlNav.active();
b.controlNav.bind(D,function(c){c.preventDefault();
if(B===""||B===c.type){var f=a(this),d=b.controlNav.index(f);
if(!f.hasClass(w+"active")){d>b.currentSlide?b.direction="next":b.direction="prev";
b.flexAnimate(d,b.vars.pauseOnAction)
}}B===""&&(B=c.type);
C.setToClearWatchedEvent()
})
},set:function(){var c=b.vars.controlNav==="thumbnails"?"img":"a";
b.controlNav=a("."+w+"control-nav li "+c,b.controlsContainer?b.controlsContainer:b)
},active:function(){b.controlNav.removeClass(w+"active").eq(b.animatingTo).addClass(w+"active")
},update:function(c,d){b.pagingCount>1&&c==="add"?b.controlNavScaffold.append(a("<li><a>"+b.count+"</a></li>")):b.pagingCount===1?b.controlNavScaffold.find("li").remove():b.controlNav.eq(d).closest("li").remove();
C.controlNav.set();
b.pagingCount>1&&b.pagingCount!==b.controlNav.length?b.update(d,c):C.controlNav.active()
}},directionNav:{setup:function(){var c=a('<ul class="'+w+'direction-nav"><li><a class="'+w+'prev" href="#">'+b.vars.prevText+'</a></li><li><a class="'+w+'next" href="#">'+b.vars.nextText+"</a></li></ul>");
if(b.controlsContainer){a(b.controlsContainer).append(c);
b.directionNav=a("."+w+"direction-nav li a",b.controlsContainer)
}else{b.append(c);
b.directionNav=a("."+w+"direction-nav li a",b)
}C.directionNav.update();
b.directionNav.bind(D,function(d){d.preventDefault();
var f;
if(B===""||B===d.type){f=a(this).hasClass(w+"next")?b.getTarget("next"):b.getTarget("prev");
b.flexAnimate(f,b.vars.pauseOnAction)
}B===""&&(B=d.type);
C.setToClearWatchedEvent()
})
},update:function(){var c=w+"disabled";
b.pagingCount===1?b.directionNav.addClass(c).attr("tabindex","-1"):b.vars.animationLoop?b.directionNav.removeClass(c).removeAttr("tabindex"):b.animatingTo===0?b.directionNav.removeClass(c).filter("."+w+"prev").addClass(c).attr("tabindex","-1"):b.animatingTo===b.last?b.directionNav.removeClass(c).filter("."+w+"next").addClass(c).attr("tabindex","-1"):b.directionNav.removeClass(c).removeAttr("tabindex")
}},pausePlay:{setup:function(){var c=a('<div class="'+w+'pauseplay"><a></a></div>');
if(b.controlsContainer){b.controlsContainer.append(c);
b.pausePlay=a("."+w+"pauseplay a",b.controlsContainer)
}else{b.append(c);
b.pausePlay=a("."+w+"pauseplay a",b)
}C.pausePlay.update(b.vars.slideshow?w+"pause":w+"play");
b.pausePlay.bind(D,function(d){d.preventDefault();
if(B===""||B===d.type){if(a(this).hasClass(w+"pause")){b.manualPause=!0;
b.manualPlay=!1;
b.pause()
}else{b.manualPause=!1;
b.manualPlay=!0;
b.play()
}}B===""&&(B=d.type);
C.setToClearWatchedEvent()
})
},update:function(c){c==="play"?b.pausePlay.removeClass(w+"pause").addClass(w+"play").html(b.vars.playText):b.pausePlay.removeClass(w+"play").addClass(w+"pause").html(b.vars.pauseText)
}},touch:function(){var G,h,r,c,N,K,t=!1,H=0,M=0,l=0;
if(!F){E.addEventListener("touchstart",s,!1);
function s(d){if(b.animating){d.preventDefault()
}else{if(window.navigator.msPointerEnabled||d.touches.length===1){b.pause();
c=q?b.h:b.w;
K=Number(new Date);
H=d.touches[0].pageX;
M=d.touches[0].pageY;
r=x&&A&&b.animatingTo===b.last?0:x&&A?b.limit-(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo:x&&b.currentSlide===b.last?b.limit:x?(b.itemW+b.vars.itemMargin)*b.move*b.currentSlide:A?(b.last-b.currentSlide+b.cloneOffset)*c:(b.currentSlide+b.cloneOffset)*c;
G=q?M:H;
h=q?H:M;
E.addEventListener("touchmove",J,!1);
E.addEventListener("touchend",I,!1)
}}}function J(d){H=d.touches[0].pageX;
M=d.touches[0].pageY;
N=q?G-M:G-H;
t=q?Math.abs(N)<Math.abs(H-h):Math.abs(N)<Math.abs(M-h);
var f=500;
if(!t||Number(new Date)-K>f){d.preventDefault();
if(!e&&b.transitions){b.vars.animationLoop||(N/=b.currentSlide===0&&N<0||b.currentSlide===b.last&&N>0?Math.abs(N)/c+2:1);
b.setProps(r+N,"setTouch")
}}}function I(m){E.removeEventListener("touchmove",J,!1);
if(b.animatingTo===b.currentSlide&&!t&&N!==null){var d=A?-N:N,f=d>0?b.getTarget("next"):b.getTarget("prev");
b.canAdvance(f)&&(Number(new Date)-K<550&&Math.abs(d)>50||Math.abs(d)>c/2)?b.flexAnimate(f,b.vars.pauseOnAction):e||b.flexAnimate(b.currentSlide,b.vars.pauseOnAction,!0)
}E.removeEventListener("touchend",I,!1);
G=null;
h=null;
N=null;
r=null
}}else{E.style.msTouchAction="none";
E._gesture=new MSGesture;
E._gesture.target=E;
E.addEventListener("MSPointerDown",L,!1);
E._slider=b;
E.addEventListener("MSGestureChange",O,!1);
E.addEventListener("MSGestureEnd",p,!1);
function L(d){d.stopPropagation();
if(b.animating){d.preventDefault()
}else{b.pause();
E._gesture.addPointer(d.pointerId);
l=0;
c=q?b.h:b.w;
K=Number(new Date);
r=x&&A&&b.animatingTo===b.last?0:x&&A?b.limit-(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo:x&&b.currentSlide===b.last?b.limit:x?(b.itemW+b.vars.itemMargin)*b.move*b.currentSlide:A?(b.last-b.currentSlide+b.cloneOffset)*c:(b.currentSlide+b.cloneOffset)*c
}}function O(m){m.stopPropagation();
var o=m.target._slider;
if(!o){return
}var f=-m.translationX,d=-m.translationY;
l+=q?d:f;
N=l;
t=q?Math.abs(l)<Math.abs(-f):Math.abs(l)<Math.abs(-d);
if(m.detail===m.MSGESTURE_FLAG_INERTIA){setImmediate(function(){E._gesture.stop()
});
return
}if(!t||Number(new Date)-K>500){m.preventDefault();
if(!e&&o.transitions){o.vars.animationLoop||(N=l/(o.currentSlide===0&&l<0||o.currentSlide===o.last&&l>0?Math.abs(l)/c+2:1));
o.setProps(r+N,"setTouch")
}}}function p(f){f.stopPropagation();
var n=f.target._slider;
if(!n){return
}if(n.animatingTo===n.currentSlide&&!t&&N!==null){var m=A?-N:N,d=m>0?n.getTarget("next"):n.getTarget("prev");
n.canAdvance(d)&&(Number(new Date)-K<550&&Math.abs(m)>50||Math.abs(m)>c/2)?n.flexAnimate(d,n.vars.pauseOnAction):e||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)
}G=null;
h=null;
N=null;
r=null;
l=0
}}},resize:function(){if(!b.animating&&b.is(":visible")){x||b.doMath();
if(e){C.smoothHeight()
}else{if(x){b.slides.width(b.computedW);
b.update(b.pagingCount);
b.setProps()
}else{if(q){b.viewport.height(b.h);
b.setProps(b.h,"setTotal")
}else{b.vars.smoothHeight&&C.smoothHeight();
b.newSlides.width(b.computedW);
b.setProps(b.computedW,"setTotal")
}}}}},smoothHeight:function(d){if(!q||e){var c=e?b:b.viewport;
d?c.animate({height:b.slides.eq(b.animatingTo).height()},d):c.height(b.slides.eq(b.animatingTo).height())
}},sync:function(d){var f=a(b.vars.sync).data("flexslider"),c=b.animatingTo;
switch(d){case"animate":f.flexAnimate(c,b.vars.pauseOnAction,!1,!0);
break;
case"play":!f.playing&&!f.asNav&&f.play();
break;
case"pause":f.pause()
}},pauseInvisible:{visProp:null,init:function(){var d=["webkit","moz","ms","o"];
if("hidden" in document){return"hidden"
}for(var c=0;
c<d.length;
c++){d[c]+"Hidden" in document&&(C.pauseInvisible.visProp=d[c]+"Hidden")
}if(C.pauseInvisible.visProp){var f=C.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";
document.addEventListener(f,function(){C.pauseInvisible.isHidden()?b.startTimeout?clearTimeout(b.startTimeout):b.pause():b.started?b.play():b.vars.initDelay>0?setTimeout(b.play,b.vars.initDelay):b.play()
})
}},isHidden:function(){return document[C.pauseInvisible.visProp]||!1
}},setToClearWatchedEvent:function(){clearTimeout(y);
y=setTimeout(function(){B=""
},3000)
}};
b.flexAnimate=function(G,c,H,v,r){!b.vars.animationLoop&&G!==b.currentSlide&&(b.direction=G>b.currentSlide?"next":"prev");
z&&b.pagingCount===1&&(b.direction=b.currentItem<G?"next":"prev");
if(!b.animating&&(b.canAdvance(G,r)||H)&&b.is(":visible")){if(z&&v){var l=a(b.vars.asNavFor).data("flexslider");
b.atEnd=G===0||G===b.count-1;
l.flexAnimate(G,!0,!1,!0,r);
b.direction=b.currentItem<G?"next":"prev";
l.direction=b.direction;
if(Math.ceil((G+1)/b.visible)-1===b.currentSlide||G===0){b.currentItem=G;
b.slides.removeClass(w+"active-slide").eq(G).addClass(w+"active-slide");
return !1
}b.currentItem=G;
b.slides.removeClass(w+"active-slide").eq(G).addClass(w+"active-slide");
G=Math.floor(G/b.visible)
}b.animating=!0;
b.animatingTo=G;
c&&b.pause();
b.vars.before(b);
b.syncExists&&!r&&C.sync("animate");
b.vars.controlNav&&C.controlNav.active();
x||b.slides.removeClass(w+"active-slide").eq(G).addClass(w+"active-slide");
b.atEnd=G===0||G===b.last;
b.vars.directionNav&&C.directionNav.update();
if(G===b.last){b.vars.end(b);
b.vars.animationLoop||b.pause()
}if(!e){var d=q?b.slides.filter(":first").height():b.computedW,h,p,o;
if(x){h=b.vars.itemMargin;
o=(b.itemW+h)*b.move*b.animatingTo;
p=o>b.limit&&b.visible!==1?b.limit:o
}else{b.currentSlide===0&&G===b.count-1&&b.vars.animationLoop&&b.direction!=="next"?p=A?(b.count+b.cloneOffset)*d:0:b.currentSlide===b.last&&G===0&&b.vars.animationLoop&&b.direction!=="prev"?p=A?0:(b.count+1)*d:p=A?(b.count-1-G+b.cloneOffset)*d:(G+b.cloneOffset)*d
}b.setProps(p,"",b.vars.animationSpeed);
if(b.transitions){if(!b.vars.animationLoop||!b.atEnd){b.animating=!1;
b.currentSlide=b.animatingTo
}b.container.unbind("webkitTransitionEnd transitionend");
b.container.bind("webkitTransitionEnd transitionend",function(){b.wrapup(d)
})
}else{b.container.animate(b.args,b.vars.animationSpeed,b.vars.easing,function(){b.wrapup(d)
})
}}else{if(!g){b.slides.eq(b.currentSlide).css({zIndex:1}).animate({opacity:0},b.vars.animationSpeed,b.vars.easing);
b.slides.eq(G).css({zIndex:2}).animate({opacity:1},b.vars.animationSpeed,b.vars.easing,b.wrapup)
}else{b.slides.eq(b.currentSlide).css({opacity:0,zIndex:1});
b.slides.eq(G).css({opacity:1,zIndex:2});
b.wrapup(d)
}}b.vars.smoothHeight&&C.smoothHeight(b.vars.animationSpeed)
}};
b.wrapup=function(c){!e&&!x&&(b.currentSlide===0&&b.animatingTo===b.last&&b.vars.animationLoop?b.setProps(c,"jumpEnd"):b.currentSlide===b.last&&b.animatingTo===0&&b.vars.animationLoop&&b.setProps(c,"jumpStart"));
b.animating=!1;
b.currentSlide=b.animatingTo;
b.vars.after(b)
};
b.animateSlides=function(){!b.animating&&k&&b.flexAnimate(b.getTarget("next"))
};
b.pause=function(){clearInterval(b.animatedSlides);
b.animatedSlides=null;
b.playing=!1;
b.vars.pausePlay&&C.pausePlay.update("play");
b.syncExists&&C.sync("pause")
};
b.play=function(){b.playing&&clearInterval(b.animatedSlides);
b.animatedSlides=b.animatedSlides||setInterval(b.animateSlides,b.vars.slideshowSpeed);
b.started=b.playing=!0;
b.vars.pausePlay&&C.pausePlay.update("pause");
b.syncExists&&C.sync("play")
};
b.stop=function(){b.pause();
b.stopped=!0
};
b.canAdvance=function(d,c){var f=z?b.pagingCount-1:b.last;
return c?!0:z&&b.currentItem===b.count-1&&d===0&&b.direction==="prev"?!0:z&&b.currentItem===0&&d===b.pagingCount-1&&b.direction!=="next"?!1:d===b.currentSlide&&!z?!1:b.vars.animationLoop?!0:b.atEnd&&b.currentSlide===0&&d===f&&b.direction!=="next"?!1:b.atEnd&&b.currentSlide===f&&d===0&&b.direction==="next"?!1:!0
};
b.getTarget=function(c){b.direction=c;
return c==="next"?b.currentSlide===b.last?0:b.currentSlide+1:b.currentSlide===0?b.last:b.currentSlide-1
};
b.setProps=function(f,d,h){var c=function(){var m=f?f:(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo,l=function(){if(x){return d==="setTouch"?f:A&&b.animatingTo===b.last?0:A?b.limit-(b.itemW+b.vars.itemMargin)*b.move*b.animatingTo:b.animatingTo===b.last?b.limit:m
}switch(d){case"setTotal":return A?(b.count-1-b.currentSlide+b.cloneOffset)*f:(b.currentSlide+b.cloneOffset)*f;
case"setTouch":return A?f:f;
case"jumpEnd":return A?f:b.count*f;
case"jumpStart":return A?b.count*f:f;
default:return f
}}();
return l*-1+"px"
}();
if(b.transitions){c=q?"translate3d(0,"+c+",0)":"translate3d("+c+",0,0)";
h=h!==undefined?h/1000+"s":"0s";
b.container.css("-"+b.pfx+"-transition-duration",h)
}b.args[b.prop]=c;
(b.transitions||h===undefined)&&b.container.css(b.args)
};
b.setup=function(c){if(!e){var f,d;
if(c==="init"){b.viewport=a('<div class="'+w+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(b).append(b.container);
b.cloneCount=0;
b.cloneOffset=0;
if(A){d=a.makeArray(b.slides).reverse();
b.slides=a(d);
b.container.empty().append(b.slides)
}}if(b.vars.animationLoop&&!x){b.cloneCount=2;
b.cloneOffset=1;
c!=="init"&&b.container.find(".clone").remove();
b.container.append(b.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(b.slides.first().clone().addClass("clone").attr("aria-hidden","true"))
}b.newSlides=a(b.vars.selector,b);
f=A?b.count-1-b.currentSlide+b.cloneOffset:b.currentSlide+b.cloneOffset;
if(q&&!x){b.container.height((b.count+b.cloneCount)*200+"%").css("position","absolute").width("100%");
setTimeout(function(){b.newSlides.css({display:"block"});
b.doMath();
b.viewport.height(b.h);
b.setProps(f*b.h,"init")
},c==="init"?100:0)
}else{b.container.width((b.count+b.cloneCount)*200+"%");
b.setProps(f*b.computedW,"init");
setTimeout(function(){b.doMath();
b.newSlides.css({width:b.computedW,"float":"left",display:"block"});
b.vars.smoothHeight&&C.smoothHeight()
},c==="init"?100:0)
}}else{b.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});
c==="init"&&(g?b.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+b.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(b.currentSlide).css({opacity:1,zIndex:2}):b.slides.css({opacity:0,display:"block",zIndex:1}).eq(b.currentSlide).css({zIndex:2}).animate({opacity:1},b.vars.animationSpeed,b.vars.easing));
b.vars.smoothHeight&&C.smoothHeight()
}x||b.slides.removeClass(w+"active-slide").eq(b.currentSlide).addClass(w+"active-slide")
};
b.doMath=function(){var f=b.slides.first(),d=b.vars.itemMargin,h=b.vars.minItems,c=b.vars.maxItems;
b.w=b.viewport===undefined?b.width():b.viewport.width();
b.h=f.height();
b.boxPadding=f.outerWidth()-f.width();
if(x){b.itemT=b.vars.itemWidth+d;
b.minW=h?h*b.itemT:b.w;
b.maxW=c?c*b.itemT-d:b.w;
b.itemW=b.minW>b.w?(b.w-d*(h-1))/h:b.maxW<b.w?(b.w-d*(c-1))/c:b.vars.itemWidth>b.w?b.w:b.vars.itemWidth;
b.visible=Math.floor(b.w/b.itemW);
b.move=b.vars.move>0&&b.vars.move<b.visible?b.vars.move:b.visible;
b.pagingCount=Math.ceil((b.count-b.visible)/b.move+1);
b.last=b.pagingCount-1;
b.limit=b.pagingCount===1?0:b.vars.itemWidth>b.w?b.itemW*(b.count-1)+d*(b.count-1):(b.itemW+d)*b.count-b.w-d
}else{b.itemW=b.w;
b.pagingCount=b.count;
b.last=b.count-1
}b.computedW=b.itemW-b.boxPadding
};
b.update=function(d,c){b.doMath();
if(!x){d<b.currentSlide?b.currentSlide+=1:d<=b.currentSlide&&d!==0&&(b.currentSlide-=1);
b.animatingTo=b.currentSlide
}if(b.vars.controlNav&&!b.manualControls){if(c==="add"&&!x||b.pagingCount>b.controlNav.length){C.controlNav.update("add")
}else{if(c==="remove"&&!x||b.pagingCount<b.controlNav.length){if(x&&b.currentSlide>b.last){b.currentSlide-=1;
b.animatingTo-=1
}C.controlNav.update("remove",b.last)
}}}b.vars.directionNav&&C.directionNav.update()
};
b.addSlide=function(d,f){var c=a(d);
b.count+=1;
b.last=b.count-1;
q&&A?f!==undefined?b.slides.eq(b.count-f).after(c):b.container.prepend(c):f!==undefined?b.slides.eq(f).before(c):b.container.append(c);
b.update(f,"add");
b.slides=a(b.vars.selector+":not(.clone)",b);
b.setup();
b.vars.added(b)
};
b.removeSlide=function(c){var d=isNaN(c)?b.slides.index(a(c)):c;
b.count-=1;
b.last=b.count-1;
isNaN(c)?a(c,b.slides).remove():q&&A?b.slides.eq(b.last).remove():b.slides.eq(c).remove();
b.doMath();
b.update(d,"remove");
b.slides=a(b.vars.selector+":not(.clone)",b);
b.setup();
b.vars.removed(b)
};
C.init()
};
a(window).blur(function(b){focused=!1
}).focus(function(b){focused=!0
});
a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};
a.fn.flexslider=function(b){b===undefined&&(b={});
if(typeof b=="object"){return this.each(function(){var f=a(this),e=b.selector?b.selector:".slides > li",d=f.find(e);
if(d.length===1&&b.allowOneSlide===!0||d.length===0){d.fadeIn(400);
b.start&&b.start(f)
}else{f.data("flexslider")===undefined&&new a.flexslider(this,b)
}})
}var c=a(this).data("flexslider");
switch(b){case"play":c.play();
break;
case"pause":c.pause();
break;
case"stop":c.stop();
break;
case"next":c.flexAnimate(c.getTarget("next"),!0);
break;
case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);
break;
default:typeof b=="number"&&c.flexAnimate(b,!0)
}}
})(jQuery);
var FourSquaresNav=function(){this.CalculateTallestHeight=function(){var h=$(".fourSquaresNavigator .tab-items");
for(var g=0;
g<h.length;
g++){var e=h.eq(g).children(".content-panel");
var c=286;
for(var d=0;
d<e.length;
d++){var b=e.eq(d);
var a=false;
if(!b.hasClass("active")){b.addClass("active");
a=true
}if(b.height()>c){c=b.height()
}if(a){b.removeClass("active")
}}var f=c+18;
$(".fourSquaresNavigator .left-panel").eq(g).height(f);
$(".fourSquaresNavigator .tab-items").eq(g).height(f);
$(".fourSquaresNavigator .tab-items").eq(g).css("margin-top",0-f)
}};
this.registerEvents=function(){FourSquaresNav.CalculateTallestHeight();
$(".navigator-panel .panel").on("click",function(d){d.preventDefault();
var c=$(d.target).closest("div");
var b=c.parent().attr("id");
var f=b.replace("-nav","-items");
var a=c.index();
$("#"+b+" .panel.active").removeClass("active");
$("#"+b+" > .panel:eq("+a+")").addClass("active");
$("#"+f+" .content-panel.active").removeClass("active");
$("#"+f+" .content-panel:eq("+(a+1)+")").addClass("active")
});
$(".fourSquaresNavigator .comp-title").on("click",function(c){c.preventDefault();
var b=$(c.target).closest("div");
var a=b.parent().parent().attr("id");
$("#"+a+"-nav .panel.active").removeClass("active");
$("#"+a+"-items .content-panel.active").removeClass("active");
$("#"+a+"-items .content-panel:eq(0)").addClass("active")
})
};
this.afterEdit=function(){this.refreshSelf();
FourSquaresNav.registerEvents()
};
this.init=function(){if($(".fourSquaresNavigator .tab-items").length>0){FourSquaresNav.registerEvents()
}}
};
var FourSquaresNav=new FourSquaresNav();
$(function(){FourSquaresNav.init()
});
var FiveOrSixSquaresNav=function(){this.CalculateTallestHeight=function(){var h=$(".fiveSixSquaresNavigator .btmsquares-panel-content");
for(var g=0;
g<h.length;
g++){var d=h.eq(g).children(".content-panel");
var f=200;
var e=25;
for(var c=0;
c<d.length;
c++){var b=d.eq(c);
var a=false;
if(!b.hasClass("active")){b.addClass("active");
a=true
}if(b.height()>f){f=b.height()+e
}if(a){b.removeClass("active")
}}h.eq(g).height(f)
}};
this.registerEvents=function(){this.CalculateTallestHeight();
$(".btmsquares-panel-thumbnails").click(function(j){var f=$(j.target).closest("div");
var k=f.parent().attr("id");
var h=k.replace("-nav","-items");
var g=f.index();
$("#"+k+" .btmsquares-list.active").removeClass("active");
$("#"+k+">.btmsquares-list:eq("+g+")").addClass("active");
$("#"+h+" .content-panel.active").removeClass("active");
$("#"+h+">.content-panel:eq("+g+")").addClass("active")
});
var b=$(".fiveSixSquaresNavigator .btmsquares-panel-thumbnails");
for(var a=0;
a<b.length;
a++){var d=b.eq(a).children(".btmsquares-list");
var c=d.length;
if(c==6){b.eq(a).addClass("six")
}else{b.eq(a).addClass("five")
}}};
this.afterEdit=function(){this.refreshSelf();
FiveOrSixSquaresNav.registerEvents()
};
this.init=function(){if($(".fiveSixSquaresNavigator .btmsquares-panel-content").length>0){FiveOrSixSquaresNav.registerEvents()
}}
};
var FiveOrSixSquaresNav=new FiveOrSixSquaresNav();
$(window).load(function(){FiveOrSixSquaresNav.init()
});
var Accordion=function(){this.bindAccordionTypeEvent=function(c,d,b){var a=d.parent();
if(!d.hasClass("accordion-active")){if(c=="default"){a.children("dd").slideUp();
a.children("dt").removeClass("accordion-active")
}d.addClass("accordion-active");
b.addClass("active").slideDown()
}else{d.removeClass("accordion-active");
b.addClass("active").slideUp()
}};
this.init=function(){}
};
var Accordion=new Accordion();
$(function(){Accordion.init()
});
(function(bu,aT){var bc={version:"3.0.3"};
var bi=navigator.userAgent.toLowerCase();
if(bi.indexOf("windows")>-1||bi.indexOf("win32")>-1){bc.isWindows=true
}else{if(bi.indexOf("macintosh")>-1||bi.indexOf("mac os x")>-1){bc.isMac=true
}else{if(bi.indexOf("linux")>-1){bc.isLinux=true
}}}bc.isIE=bi.indexOf("msie")>-1;
bc.isIE6=bi.indexOf("msie 6")>-1;
bc.isIE7=bi.indexOf("msie 7")>-1;
bc.isGecko=bi.indexOf("gecko")>-1&&bi.indexOf("safari")==-1;
bc.isWebKit=bi.indexOf("applewebkit/")>-1;
var bP=/#(.+)$/,bL=/^(light|shadow)box\[(.*?)\]/i,bk=/\s*([a-z_]*?)\s*=\s*(.+)\s*/,aY=/[0-9a-z]+$/i,bT=/(.+\/)shadowbox\.js/i;
var bz=false,a3=false,aS={},K=0,bb,bB;
bc.current=-1;
bc.dimensions=null;
bc.ease=function(a){return 1+Math.pow(a-1,3)
};
bc.errorInfo={fla:{name:"Flash",url:"http://www.adobe.com/products/flashplayer/"},qt:{name:"QuickTime",url:"http://www.apple.com/quicktime/download/"},wmp:{name:"Windows Media Player",url:"http://www.microsoft.com/windows/windowsmedia/"},f4m:{name:"Flip4Mac",url:"http://www.flip4mac.com/wmv_download.htm"}};
bc.gallery=[];
bc.onReady=bH;
bc.path=null;
bc.player=null;
bc.playerId="sb-player";
bc.options={animate:true,animateFade:true,autoplayMovies:true,continuous:false,enableKeys:true,flashParams:{bgcolor:"#000000",allowfullscreen:true},flashVars:{},flashVersion:"9.0.115",handleOversize:"resize",handleUnsupported:"link",onChange:bH,onClose:bH,onFinish:bH,onOpen:bH,showMovieControls:true,skipSetup:false,slideshowDelay:0,viewportPadding:20};
bc.getCurrent=function(){return bc.current>-1?bc.gallery[bc.current]:null
};
bc.hasNext=function(){return bc.gallery.length>1&&(bc.current!=bc.gallery.length-1||bc.options.continuous)
};
bc.isOpen=function(){return bz
};
bc.isPaused=function(){return bB=="pause"
};
bc.applyOptions=function(a){aS=bU({},bc.options);
bU(bc.options,a)
};
bc.revertOptions=function(){bU(bc.options,aS)
};
bc.init=function(c,e){if(a3){return
}a3=true;
if(bc.skin.options){bU(bc.options,bc.skin.options)
}if(c){bU(bc.options,c)
}if(!bc.path){var f,d=document.getElementsByTagName("script");
for(var a=0,b=d.length;
a<b;
++a){f=bT.exec(d[a].src);
if(f){bc.path=f[1];
break
}}}if(e){bc.onReady=e
}bd()
};
bc.open=function(b){if(bz){return
}var a=bc.makeGallery(b);
bc.gallery=a[0];
bc.current=a[1];
b=bc.getCurrent();
if(b==null){return
}bc.applyOptions(b.options||{});
bn();
if(bc.gallery.length){b=bc.getCurrent();
if(bc.options.onOpen(b)===false){return
}bz=true;
bc.skin.onOpen(b,a1)
}};
bc.close=function(){if(!bz){return
}bz=false;
if(bc.player){bc.player.remove();
bc.player=null
}if(typeof bB=="number"){clearTimeout(bB);
bB=null
}K=0;
bA(false);
bc.options.onClose(bc.getCurrent());
bc.skin.onClose();
bc.revertOptions()
};
bc.play=function(){if(!bc.hasNext()){return
}if(!K){K=bc.options.slideshowDelay*1000
}if(K){bb=bq();
bB=setTimeout(function(){K=bb=0;
bc.next()
},K);
if(bc.skin.onPlay){bc.skin.onPlay()
}}};
bc.pause=function(){if(typeof bB!="number"){return
}K=Math.max(0,K-(bq()-bb));
if(K){clearTimeout(bB);
bB="pause";
if(bc.skin.onPause){bc.skin.onPause()
}}};
bc.change=function(a){if(!(a in bc.gallery)){if(bc.options.continuous){a=(a<0?bc.gallery.length+a:0);
if(!(a in bc.gallery)){return
}}else{return
}}bc.current=a;
if(typeof bB=="number"){clearTimeout(bB);
bB=null;
K=bb=0
}bc.options.onChange(bc.getCurrent());
a1(true)
};
bc.next=function(){bc.change(bc.current+1)
};
bc.previous=function(){bc.change(bc.current-1)
};
bc.setDimensions=function(f,a,h,g,b,j,l,o){var m=f,c=a;
var n=2*l+b;
if(f+n>h){f=h-n
}var d=2*l+j;
if(a+d>g){a=g-d
}var e=(m-f)/m,k=(c-a)/c,p=(e>0||k>0);
if(o&&p){if(e>k){a=Math.round((c/m)*f)
}else{if(k>e){f=Math.round((m/c)*a)
}}}bc.dimensions={height:f+b,width:a+j,innerHeight:f,innerWidth:a,top:Math.floor((h-(f+n))/2+l),left:Math.floor((g-(a+d))/2+l),oversized:p};
return bc.dimensions
};
bc.makeGallery=function(f){var c=[],a=-1;
if(typeof f=="string"){f=[f]
}if(typeof f.length=="number"){bR(f,function(h,g){if(g.content){c[h]=g
}else{c[h]={content:g}
}});
a=0
}else{if(f.tagName){var d=bc.getCache(f);
f=d?d:bc.makeObject(f)
}if(f.gallery){c=[];
var e;
for(var b in bc.cache){e=bc.cache[b];
if(e.gallery&&e.gallery==f.gallery){if(a==-1&&e.content==f.content){a=c.length
}c.push(e)
}}if(a==-1){c.unshift(f);
a=0
}}else{c=[f];
a=0
}}bR(c,function(h,g){c[h]=bU({},g)
});
return[c,a]
};
bc.makeObject=function(a,c){var e={content:a.href,title:a.getAttribute("title")||"",link:a};
if(c){c=bU({},c);
bR(["player","title","height","width","gallery"],function(g,f){if(typeof c[f]!="undefined"){e[f]=c[f];
delete c[f]
}});
e.options=c
}else{e.options={}
}if(!e.player){e.player=bc.getPlayer(e.content)
}var b=a.getAttribute("rel");
if(b){var d=b.match(bL);
if(d){e.gallery=escape(d[2])
}bR(b.split(";"),function(g,f){d=f.match(bk);
if(d){e[d[1]]=d[2]
}})
}return e
};
bc.getPlayer=function(c){if(c.indexOf("#")>-1&&c.indexOf(document.location.href)==0){return"inline"
}var a=c.indexOf("?");
if(a>-1){c=c.substring(0,a)
}var d,b=c.match(aY);
if(b){d=b[0].toLowerCase()
}if(d){if(bc.img&&bc.img.ext.indexOf(d)>-1){return"img"
}if(bc.swf&&bc.swf.ext.indexOf(d)>-1){return"swf"
}if(bc.flv&&bc.flv.ext.indexOf(d)>-1){return"flv"
}if(bc.qt&&bc.qt.ext.indexOf(d)>-1){if(bc.wmp&&bc.wmp.ext.indexOf(d)>-1){return"qtwmp"
}else{return"qt"
}}if(bc.wmp&&bc.wmp.ext.indexOf(d)>-1){return"wmp"
}}return"iframe"
};
function bn(){var c=bc.errorInfo,b=bc.plugins,l,k,g,d,h,e,j,f;
for(var a=0;
a<bc.gallery.length;
++a){l=bc.gallery[a];
k=false;
g=null;
switch(l.player){case"flv":case"swf":if(!b.fla){g="fla"
}break;
case"qt":if(!b.qt){g="qt"
}break;
case"wmp":if(bc.isMac){if(b.qt&&b.f4m){l.player="qt"
}else{g="qtf4m"
}}else{if(!b.wmp){g="wmp"
}}break;
case"qtwmp":if(b.qt){l.player="qt"
}else{if(b.wmp){l.player="wmp"
}else{g="qtwmp"
}}break
}if(g){if(bc.options.handleUnsupported=="link"){switch(g){case"qtf4m":h="shared";
e=[c.qt.url,c.qt.name,c.f4m.url,c.f4m.name];
break;
case"qtwmp":h="either";
e=[c.qt.url,c.qt.name,c.wmp.url,c.wmp.name];
break;
default:h="single";
e=[c[g].url,c[g].name]
}l.player="html";
l.content='<div class="sb-message">'+aL(bc.lang.errors[h],e)+"</div>"
}else{k=true
}}else{if(l.player=="inline"){d=bP.exec(l.content);
if(d){j=bN(d[1]);
if(j){l.content=j.innerHTML
}else{k=true
}}else{k=true
}}else{if(l.player=="swf"||l.player=="flv"){f=(l.options&&l.options.flashVersion)||bc.options.flashVersion;
if(bc.flash&&!bc.flash.hasFlashPlayerVersion(f)){l.width=310;
l.height=177
}}}}if(k){bc.gallery.splice(a,1);
if(a<bc.current){--bc.current
}else{if(a==bc.current){bc.current=a>0?a-1:a
}}--a
}}}function bA(a){if(!bc.options.enableKeys){return
}(a?bp:bg)(document,"keydown",bD)
}function bD(b){if(b.metaKey||b.shiftKey||b.altKey||b.ctrlKey){return
}var c=aI(b),a;
switch(c){case 81:case 88:case 27:a=bc.close;
break;
case 37:a=bc.previous;
break;
case 39:a=bc.next;
break;
case 32:a=typeof bB=="number"?bc.pause:bc.play;
break
}if(a){aQ(b);
a()
}}function a1(e){bA(false);
var f=bc.getCurrent();
var c=(f.player=="inline"?"html":f.player);
if(typeof bc[c]!="function"){throw"unknown player "+c
}if(e){bc.player.remove();
bc.revertOptions();
bc.applyOptions(f.options||{})
}bc.player=new bc[c](f,bc.playerId);
if(bc.gallery.length>1){var a=bc.gallery[bc.current+1]||bc.gallery[0];
if(a.player=="img"){var d=new Image();
d.src=a.content
}var g=bc.gallery[bc.current-1]||bc.gallery[bc.gallery.length-1];
if(g.player=="img"){var b=new Image();
b.src=g.content
}}bc.skin.onLoad(e,a7)
}function a7(){if(!bz){return
}if(typeof bc.player.ready!="undefined"){var a=setInterval(function(){if(bz){if(bc.player.ready){clearInterval(a);
a=null;
bc.skin.onReady(aZ)
}}else{clearInterval(a);
a=null
}},10)
}else{bc.skin.onReady(aZ)
}}function aZ(){if(!bz){return
}bc.player.append(bc.skin.body,bc.dimensions);
bc.skin.onShow(bj)
}function bj(){if(!bz){return
}if(bc.player.onLoad){bc.player.onLoad()
}bc.options.onFinish(bc.getCurrent());
if(!bc.isPaused()){bc.play()
}bA(true)
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,b){var a=this.length>>>0;
b=b||0;
if(b<0){b+=a
}for(;
b<a;
++b){if(b in this&&this[b]===c){return b
}}return -1
}
}function bq(){return(new Date).getTime()
}function bU(b,a){for(var c in a){b[c]=a[c]
}return b
}function bR(a,e){var d=0,c=a.length;
for(var b=a[0];
d<c&&e.call(b,d,b)!==false;
b=a[++d]){}}function aL(b,a){return b.replace(/\{(\w+?)\}/g,function(d,c){return a[c]
})
}function bH(){}function bN(a){return document.getElementById(a)
}function bv(a){a.parentNode.removeChild(a)
}var aW=true,aG=true;
function a0(){var a=document.body,b=document.createElement("div");
aW=typeof b.style.opacity==="string";
b.style.position="fixed";
b.style.margin=0;
b.style.top="20px";
a.appendChild(b,a.firstChild);
aG=b.offsetTop==20;
a.removeChild(b)
}bc.getStyle=(function(){var a=/opacity=([^)]*)/,b=document.defaultView&&document.defaultView.getComputedStyle;
return function(e,f){var c;
if(!aW&&f=="opacity"&&e.currentStyle){c=a.test(e.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";
return c===""?"1":c
}if(b){var d=b(e,null);
if(d){c=d[f]
}if(f=="opacity"&&c==""){c="1"
}}else{c=e.currentStyle[f]
}return c
}
})();
bc.appendHTML=function(c,d){if(c.insertAdjacentHTML){c.insertAdjacentHTML("BeforeEnd",d)
}else{if(c.lastChild){var b=c.ownerDocument.createRange();
b.setStartAfter(c.lastChild);
var a=b.createContextualFragment(d);
c.appendChild(a)
}else{c.innerHTML=d
}}};
bc.getWindowSize=function(a){if(document.compatMode==="CSS1Compat"){return document.documentElement["client"+a]
}return document.body["client"+a]
};
bc.setOpacity=function(b,a){var c=b.style;
if(aW){c.opacity=(a==1?"":a)
}else{c.zoom=1;
if(a==1){if(typeof c.filter=="string"&&(/alpha/i).test(c.filter)){c.filter=c.filter.replace(/\s*[\w\.]*alpha\([^\)]*\);?/gi,"")
}}else{c.filter=(c.filter||"").replace(/\s*[\w\.]*alpha\([^\)]*\)/gi,"")+" alpha(opacity="+(a*100)+")"
}}};
bc.clearOpacity=function(a){bc.setOpacity(a,1)
};
function aP(b){var a=b.target?b.target:b.srcElement;
return a.nodeType==3?a.parentNode:a
}function a8(c){var b=c.pageX||(c.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)),a=c.pageY||(c.clientY+(document.documentElement.scrollTop||document.body.scrollTop));
return[b,a]
}function aQ(a){a.preventDefault()
}function aI(a){return a.which?a.which:a.keyCode
}function bp(a,c,d){if(a.addEventListener){a.addEventListener(c,d,false)
}else{if(a.nodeType===3||a.nodeType===8){return
}if(a.setInterval&&(a!==bu&&!a.frameElement)){a=bu
}if(!d.__guid){d.__guid=bp.guid++
}if(!a.events){a.events={}
}var b=a.events[c];
if(!b){b=a.events[c]={};
if(a["on"+c]){b[0]=a["on"+c]
}}b[d.__guid]=d;
a["on"+c]=bp.handleEvent
}}bp.guid=1;
bp.handleEvent=function(a){var c=true;
a=a||bp.fixEvent(((this.ownerDocument||this.document||this).parentWindow||bu).event);
var d=this.events[a.type];
for(var b in d){this.__handleEvent=d[b];
if(this.__handleEvent(a)===false){c=false
}}return c
};
bp.preventDefault=function(){this.returnValue=false
};
bp.stopPropagation=function(){this.cancelBubble=true
};
bp.fixEvent=function(a){a.preventDefault=bp.preventDefault;
a.stopPropagation=bp.stopPropagation;
return a
};
function bg(b,c,a){if(b.removeEventListener){b.removeEventListener(c,a,false)
}else{if(b.events&&b.events[c]){delete b.events[c][a.__guid]
}}}var S=false,bF;
if(document.addEventListener){bF=function(){document.removeEventListener("DOMContentLoaded",bF,false);
bc.load()
}
}else{if(document.attachEvent){bF=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",bF);
bc.load()
}}
}}function aX(){if(S){return
}try{document.documentElement.doScroll("left")
}catch(a){setTimeout(aX,1);
return
}bc.load()
}function bd(){if(document.readyState==="complete"){return bc.load()
}if(document.addEventListener){document.addEventListener("DOMContentLoaded",bF,false);
bu.addEventListener("load",bc.load,false)
}else{if(document.attachEvent){document.attachEvent("onreadystatechange",bF);
bu.attachEvent("onload",bc.load);
var a=false;
try{a=bu.frameElement===null
}catch(b){}if(document.documentElement.doScroll&&a){aX()
}}}}bc.load=function(){if(S){return
}if(!document.body){return setTimeout(bc.load,13)
}S=true;
a0();
bc.onReady();
if(!bc.options.skipSetup){bc.setup()
}bc.skin.init()
};
bc.plugins={};
if(navigator.plugins&&navigator.plugins.length){var aH=[];
bR(navigator.plugins,function(a,b){aH.push(b.name)
});
aH=aH.join(",");
var bI=aH.indexOf("Flip4Mac")>-1;
bc.plugins={fla:aH.indexOf("Shockwave Flash")>-1,qt:aH.indexOf("QuickTime")>-1,wmp:!bI&&aH.indexOf("Windows Media")>-1,f4m:bI}
}else{var aO=function(b){var c;
try{c=new ActiveXObject(b)
}catch(a){}return !!c
};
bc.plugins={fla:aO("ShockwaveFlash.ShockwaveFlash"),qt:aO("QuickTime.QuickTime"),wmp:aO("wmplayer.ocx"),f4m:false}
}var a6=/^(light|shadow)box/i,bE="shadowboxCacheKey",a2=1;
bc.cache={};
bc.select=function(d){var c=[];
if(!d){var b;
bR(document.getElementsByTagName("a"),function(g,f){b=f.getAttribute("rel");
if(b&&a6.test(b)){c.push(f)
}})
}else{var e=d.length;
if(e){if(typeof d=="string"){if(bc.find){c=bc.find(d)
}}else{if(e==2&&typeof d[0]=="string"&&d[1].nodeType){if(bc.find){c=bc.find(d[0],d[1])
}}else{for(var a=0;
a<e;
++a){c[a]=d[a]
}}}}else{c.push(d)
}}return c
};
bc.setup=function(a,b){bR(bc.select(a),function(d,c){bc.addCache(c,b)
})
};
bc.teardown=function(a){bR(bc.select(a),function(c,b){bc.removeCache(b)
})
};
bc.addCache=function(b,a){var c=b[bE];
if(c==aT){c=a2++;
b[bE]=c;
bp(b,"click",aJ)
}bc.cache[c]=bc.makeObject(b,a)
};
bc.removeCache=function(a){bg(a,"click",aJ);
delete bc.cache[a[bE]];
a[bE]=null
};
bc.getCache=function(b){var a=b[bE];
return(a in bc.cache&&bc.cache[a])
};
bc.clearCache=function(){for(var a in bc.cache){bc.removeCache(bc.cache[a].link)
}bc.cache={}
};
function aJ(a){bc.open(this);
if(bc.gallery.length){aQ(a)
}}bc.find=(function(){var h=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,g=0,e=Object.prototype.toString,o=false,p=true;
[0,0].sort(function(){p=false;
return 0
});
var s=function(v,A,J,I){J=J||[];
var G=A=A||document;
if(A.nodeType!==1&&A.nodeType!==9){return[]
}if(!v||typeof v!=="string"){return J
}var u=[],y,E,B,z,w=true,x=r(A),H=v;
while((h.exec(""),y=h.exec(H))!==null){H=y[3];
u.push(y[1]);
if(y[2]){z=y[3];
break
}}if(u.length>1&&m.exec(v)){if(u.length===2&&l.relative[u[0]]){E=c(u[0]+u[1],A)
}else{E=l.relative[u[0]]?[A]:s(u.shift(),A);
while(u.length){v=u.shift();
if(l.relative[v]){v+=u.shift()
}E=c(v,E)
}}}else{if(!I&&u.length>1&&A.nodeType===9&&!x&&l.match.ID.test(u[0])&&!l.match.ID.test(u[u.length-1])){var F=s.find(u.shift(),A,x);
A=F.expr?s.filter(F.expr,F.set)[0]:F.set[0]
}if(A){var F=I?{expr:u.pop(),set:j(I)}:s.find(u.pop(),u.length===1&&(u[0]==="~"||u[0]==="+")&&A.parentNode?A.parentNode:A,x);
E=F.expr?s.filter(F.expr,F.set):F.set;
if(u.length>0){B=j(E)
}else{w=false
}while(u.length){var C=u.pop(),D=C;
if(!l.relative[C]){C=""
}else{D=u.pop()
}if(D==null){D=A
}l.relative[C](B,D,x)
}}else{B=u=[]
}}if(!B){B=E
}if(!B){throw"Syntax error, unrecognized expression: "+(C||v)
}if(e.call(B)==="[object Array]"){if(!w){J.push.apply(J,B)
}else{if(A&&A.nodeType===1){for(var t=0;
B[t]!=null;
t++){if(B[t]&&(B[t]===true||B[t].nodeType===1&&k(A,B[t]))){J.push(E[t])
}}}else{for(var t=0;
B[t]!=null;
t++){if(B[t]&&B[t].nodeType===1){J.push(E[t])
}}}}}else{j(B,J)
}if(z){s(z,G,J,I);
s.uniqueSort(J)
}return J
};
s.uniqueSort=function(t){if(f){o=p;
t.sort(f);
if(o){for(var u=1;
u<t.length;
u++){if(t[u]===t[u-1]){t.splice(u--,1)
}}}}return t
};
s.matches=function(u,t){return s(u,null,null,t)
};
s.find=function(t,A,B){var u,w;
if(!t){return[]
}for(var x=0,y=l.order.length;
x<y;
x++){var v=l.order[x],w;
if((w=l.leftMatch[v].exec(t))){var z=w[1];
w.splice(1,1);
if(z.substr(z.length-1)!=="\\"){w[1]=(w[1]||"").replace(/\\/g,"");
u=l.find[v](w,A,B);
if(u!=null){t=t.replace(l.match[v],"");
break
}}}}if(!u){u=A.getElementsByTagName("*")
}return{set:u,expr:t}
};
s.filter=function(G,H,D,x){var y=G,B=[],t=H,v,A,u=H&&H[0]&&r(H[0]);
while(G&&H.length){for(var I in l.filter){if((v=l.match[I].exec(G))!=null){var z=l.filter[I],C,E;
A=false;
if(t===B){B=[]
}if(l.preFilter[I]){v=l.preFilter[I](v,t,D,B,x,u);
if(!v){A=C=true
}else{if(v===true){continue
}}}if(v){for(var w=0;
(E=t[w])!=null;
w++){if(E){C=z(E,v,w,t);
var F=x^!!C;
if(D&&C!=null){if(F){A=true
}else{t[w]=false
}}else{if(F){B.push(E);
A=true
}}}}}if(C!==aT){if(!D){t=B
}G=G.replace(l.match[I],"");
if(!A){return[]
}break
}}}if(G===y){if(A==null){throw"Syntax error, unrecognized expression: "+G
}else{break
}}y=G
}return t
};
var l=s.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(t){return t.getAttribute("href")
}},relative:{"+":function(t,y){var w=typeof y==="string",u=w&&!/\W/.test(y),A=w&&!u;
if(u){y=y.toLowerCase()
}for(var x=0,z=t.length,v;
x<z;
x++){if((v=t[x])){while((v=v.previousSibling)&&v.nodeType!==1){}t[x]=A||v&&v.nodeName.toLowerCase()===y?v||false:v===y
}}if(A){s.filter(y,t,true)
}},">":function(t,y){var v=typeof y==="string";
if(v&&!/\W/.test(y)){y=y.toLowerCase();
for(var x=0,z=t.length;
x<z;
x++){var u=t[x];
if(u){var w=u.parentNode;
t[x]=w.nodeName.toLowerCase()===y?w:false
}}}else{for(var x=0,z=t.length;
x<z;
x++){var u=t[x];
if(u){t[x]=v?u.parentNode:u.parentNode===y
}}if(v){s.filter(y,t,true)
}}},"":function(v,x,t){var w=g++,y=b;
if(typeof x==="string"&&!/\W/.test(x)){var u=x=x.toLowerCase();
y=n
}y("parentNode",x,w,v,u,t)
},"~":function(v,x,t){var w=g++,y=b;
if(typeof x==="string"&&!/\W/.test(x)){var u=x=x.toLowerCase();
y=n
}y("previousSibling",x,w,v,u,t)
}},find:{ID:function(v,u,t){if(typeof u.getElementById!=="undefined"&&!t){var w=u.getElementById(v[1]);
return w?[w]:[]
}},NAME:function(w,t){if(typeof t.getElementsByName!=="undefined"){var x=[],u=t.getElementsByName(w[1]);
for(var v=0,y=u.length;
v<y;
v++){if(u[v].getAttribute("name")===w[1]){x.push(u[v])
}}return x.length===0?null:x
}},TAG:function(u,t){return t.getElementsByTagName(u[1])
}},preFilter:{CLASS:function(w,y,x,z,t,A){w=" "+w[1].replace(/\\/g,"")+" ";
if(A){return w
}for(var v=0,u;
(u=y[v])!=null;
v++){if(u){if(t^(u.className&&(" "+u.className+" ").replace(/[\t\n]/g," ").indexOf(w)>=0)){if(!x){z.push(u)
}}else{if(x){y[v]=false
}}}}return false
},ID:function(t){return t[1].replace(/\\/g,"")
},TAG:function(t,u){return t[1].toLowerCase()
},CHILD:function(u){if(u[1]==="nth"){var t=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(u[2]==="even"&&"2n"||u[2]==="odd"&&"2n+1"||!/\D/.test(u[2])&&"0n+"+u[2]||u[2]);
u[2]=(t[1]+(t[2]||1))-0;
u[3]=t[3]-0
}u[0]=g++;
return u
},ATTR:function(v,y,x,z,u,t){var w=v[1].replace(/\\/g,"");
if(!t&&l.attrMap[w]){v[1]=l.attrMap[w]
}if(v[2]==="~="){v[4]=" "+v[4]+" "
}return v
},PSEUDO:function(u,x,w,y,t){if(u[1]==="not"){if((h.exec(u[3])||"").length>1||/^\w/.test(u[3])){u[3]=s(u[3],null,null,x)
}else{var v=s.filter(u[3],x,w,true^t);
if(!w){y.push.apply(y,v)
}return false
}}else{if(l.match.POS.test(u[0])||l.match.CHILD.test(u[0])){return true
}}return u
},POS:function(t){t.unshift(true);
return t
}},filters:{enabled:function(t){return t.disabled===false&&t.type!=="hidden"
},disabled:function(t){return t.disabled===true
},checked:function(t){return t.checked===true
},selected:function(t){t.parentNode.selectedIndex;
return t.selected===true
},parent:function(t){return !!t.firstChild
},empty:function(t){return !t.firstChild
},has:function(t,u,v){return !!s(v[3],t).length
},header:function(t){return/h\d/i.test(t.nodeName)
},text:function(t){return"text"===t.type
},radio:function(t){return"radio"===t.type
},checkbox:function(t){return"checkbox"===t.type
},file:function(t){return"file"===t.type
},password:function(t){return"password"===t.type
},submit:function(t){return"submit"===t.type
},image:function(t){return"image"===t.type
},reset:function(t){return"reset"===t.type
},button:function(t){return"button"===t.type||t.nodeName.toLowerCase()==="button"
},input:function(t){return/input|select|textarea|button/i.test(t.nodeName)
}},setFilters:{first:function(t,u){return u===0
},last:function(u,v,w,t){return v===t.length-1
},even:function(t,u){return u%2===0
},odd:function(t,u){return u%2===1
},lt:function(t,u,v){return u<v[3]-0
},gt:function(t,u,v){return u>v[3]-0
},nth:function(t,u,v){return v[3]-0===u
},eq:function(t,u,v){return v[3]-0===u
}},filter:{PSEUDO:function(t,x,w,A){var y=x[1],v=l.filters[y];
if(v){return v(t,w,x,A)
}else{if(y==="contains"){return(t.textContent||t.innerText||d([t])||"").indexOf(x[3])>=0
}else{if(y==="not"){var u=x[3];
for(var w=0,z=u.length;
w<z;
w++){if(u[w]===t){return false
}}return true
}else{throw"Syntax error, unrecognized expression: "+y
}}}},CHILD:function(A,x){var u=x[1],z=A;
switch(u){case"only":case"first":while((z=z.previousSibling)){if(z.nodeType===1){return false
}}if(u==="first"){return true
}z=A;
case"last":while((z=z.nextSibling)){if(z.nodeType===1){return false
}}return true;
case"nth":var y=x[2],B=x[3];
if(y===1&&B===0){return true
}var v=x[0],C=A.parentNode;
if(C&&(C.sizcache!==v||!A.nodeIndex)){var w=0;
for(z=C.firstChild;
z;
z=z.nextSibling){if(z.nodeType===1){z.nodeIndex=++w
}}C.sizcache=v
}var t=A.nodeIndex-B;
if(y===0){return t===0
}else{return(t%y===0&&t/y>=0)
}}},ID:function(t,u){return t.nodeType===1&&t.getAttribute("id")===u
},TAG:function(t,u){return(u==="*"&&t.nodeType===1)||t.nodeName.toLowerCase()===u
},CLASS:function(t,u){return(" "+(t.className||t.getAttribute("class"))+" ").indexOf(u)>-1
},ATTR:function(u,w){var x=w[1],z=l.attrHandle[x]?l.attrHandle[x](u):u[x]!=null?u[x]:u.getAttribute(x),t=z+"",v=w[2],y=w[4];
return z==null?v==="!=":v==="="?t===y:v==="*="?t.indexOf(y)>=0:v==="~="?(" "+t+" ").indexOf(y)>=0:!y?t&&z!==false:v==="!="?t!==y:v==="^="?t.indexOf(y)===0:v==="$="?t.substr(t.length-y.length)===y:v==="|="?t===y||t.substr(0,y.length+1)===y+"-":false
},POS:function(u,x,w,t){var y=x[2],v=l.setFilters[y];
if(v){return v(u,w,x,t)
}}}};
var m=l.match.POS;
for(var q in l.match){l.match[q]=new RegExp(l.match[q].source+/(?![^\[]*\])(?![^\(]*\))/.source);
l.leftMatch[q]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[q].source)
}var j=function(t,u){t=Array.prototype.slice.call(t,0);
if(u){u.push.apply(u,t);
return u
}return t
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)
}catch(a){j=function(t,u){var w=u||[];
if(e.call(t)==="[object Array]"){Array.prototype.push.apply(w,t)
}else{if(typeof t.length==="number"){for(var v=0,x=t.length;
v<x;
v++){w.push(t[v])
}}else{for(var v=0;
t[v];
v++){w.push(t[v])
}}}return w
}
}var f;
if(document.documentElement.compareDocumentPosition){f=function(u,v){if(!u.compareDocumentPosition||!v.compareDocumentPosition){if(u==v){o=true
}return u.compareDocumentPosition?-1:1
}var t=u.compareDocumentPosition(v)&4?-1:u===v?0:1;
if(t===0){o=true
}return t
}
}else{if("sourceIndex" in document.documentElement){f=function(u,v){if(!u.sourceIndex||!v.sourceIndex){if(u==v){o=true
}return u.sourceIndex?-1:1
}var t=u.sourceIndex-v.sourceIndex;
if(t===0){o=true
}return t
}
}else{if(document.createRange){f=function(u,w){if(!u.ownerDocument||!w.ownerDocument){if(u==w){o=true
}return u.ownerDocument?-1:1
}var v=u.ownerDocument.createRange(),x=w.ownerDocument.createRange();
v.setStart(u,0);
v.setEnd(u,0);
x.setStart(w,0);
x.setEnd(w,0);
var t=v.compareBoundaryPoints(Range.START_TO_END,x);
if(t===0){o=true
}return t
}
}}}function d(w){var v="",t;
for(var u=0;
w[u];
u++){t=w[u];
if(t.nodeType===3||t.nodeType===4){v+=t.nodeValue
}else{if(t.nodeType!==8){v+=d(t.childNodes)
}}}return v
}(function(){var u=document.createElement("div"),t="script"+(new Date).getTime();
u.innerHTML="<a name='"+t+"'/>";
var v=document.documentElement;
v.insertBefore(u,v.firstChild);
if(document.getElementById(t)){l.find.ID=function(y,x,w){if(typeof x.getElementById!=="undefined"&&!w){var z=x.getElementById(y[1]);
return z?z.id===y[1]||typeof z.getAttributeNode!=="undefined"&&z.getAttributeNode("id").nodeValue===y[1]?[z]:aT:[]
}};
l.filter.ID=function(w,y){var x=typeof w.getAttributeNode!=="undefined"&&w.getAttributeNode("id");
return w.nodeType===1&&x&&x.nodeValue===y
}
}v.removeChild(u);
v=u=null
})();
(function(){var t=document.createElement("div");
t.appendChild(document.createComment(""));
if(t.getElementsByTagName("*").length>0){l.find.TAG=function(y,u){var v=u.getElementsByTagName(y[1]);
if(y[1]==="*"){var w=[];
for(var x=0;
v[x];
x++){if(v[x].nodeType===1){w.push(v[x])
}}v=w
}return v
}
}t.innerHTML="<a href='#'></a>";
if(t.firstChild&&typeof t.firstChild.getAttribute!=="undefined"&&t.firstChild.getAttribute("href")!=="#"){l.attrHandle.href=function(u){return u.getAttribute("href",2)
}
}t=null
})();
if(document.querySelectorAll){(function(){var v=s,t=document.createElement("div");
t.innerHTML="<p class='TEST'></p>";
if(t.querySelectorAll&&t.querySelectorAll(".TEST").length===0){return
}s=function(w,x,z,y){x=x||document;
if(!y&&x.nodeType===9&&!r(x)){try{return j(x.querySelectorAll(w),z)
}catch(A){}}return v(w,x,z,y)
};
for(var u in v){s[u]=v[u]
}t=null
})()
}(function(){var t=document.createElement("div");
t.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!t.getElementsByClassName||t.getElementsByClassName("e").length===0){return
}t.lastChild.className="e";
if(t.getElementsByClassName("e").length===1){return
}l.order.splice(1,0,"CLASS");
l.find.CLASS=function(w,v,u){if(typeof v.getElementsByClassName!=="undefined"&&!u){return v.getElementsByClassName(w[1])
}};
t=null
})();
function n(z,u,v,B,t,C){for(var x=0,y=B.length;
x<y;
x++){var A=B[x];
if(A){A=A[z];
var w=false;
while(A){if(A.sizcache===v){w=B[A.sizset];
break
}if(A.nodeType===1&&!C){A.sizcache=v;
A.sizset=x
}if(A.nodeName.toLowerCase()===u){w=A;
break
}A=A[z]
}B[x]=w
}}}function b(z,u,v,B,t,C){for(var x=0,y=B.length;
x<y;
x++){var A=B[x];
if(A){A=A[z];
var w=false;
while(A){if(A.sizcache===v){w=B[A.sizset];
break
}if(A.nodeType===1){if(!C){A.sizcache=v;
A.sizset=x
}if(typeof u!=="string"){if(A===u){w=true;
break
}}else{if(s.filter(u,[A]).length>0){w=A;
break
}}}A=A[z]
}B[x]=w
}}}var k=document.compareDocumentPosition?function(t,u){return t.compareDocumentPosition(u)&16
}:function(t,u){return t!==u&&(t.contains?t.contains(u):true)
};
var r=function(u){var t=(u?u.ownerDocument||u:0).documentElement;
return t?t.nodeName!=="HTML":false
};
var c=function(z,A){var w=[],v="",u,x=A.nodeType?[A]:A;
while((u=l.match.PSEUDO.exec(z))){v+=u[0];
z=z.replace(l.match.PSEUDO,"")
}z=l.relative[z]?z+"*":z;
for(var t=0,y=x.length;
t<y;
t++){s(z,x[t],w)
}return s.filter(v,w)
};
return s
})();
bc.lang={code:"en",of:"of",loading:"loading",cancel:"Cancel",next:"Next",previous:"Previous",play:"Play",pause:"Pause",close:"Close",errors:{single:'You must install the <a href="{0}">{1}</a> browser plugin to view this content.',shared:'You must install both the <a href="{0}">{1}</a> and <a href="{2}">{3}</a> browser plugins to view this content.',either:'You must install either the <a href="{0}">{1}</a> or the <a href="{2}">{3}</a> browser plugin to view this content.'}};
var bt,bw="sb-drag-proxy",bs,aU,bK;
function bo(){bs={x:0,y:0,startX:null,startY:null}
}function bW(){var a=bc.dimensions;
bU(aU.style,{height:a.innerHeight+"px",width:a.innerWidth+"px"})
}function be(){bo();
var a=["position:absolute","cursor:"+(bc.isGecko?"-moz-grab":"move"),"background-color:"+(bc.isIE?"#fff;filter:alpha(opacity=0)":"transparent")].join(";");
bc.appendHTML(bc.skin.body,'<div id="'+bw+'" style="'+a+'"></div>');
aU=bN(bw);
bW();
bp(aU,"mousedown",bh)
}function bx(){if(aU){bg(aU,"mousedown",bh);
bv(aU);
aU=null
}bK=null
}function bh(b){aQ(b);
var a=a8(b);
bs.startX=a[0];
bs.startY=a[1];
bK=bN(bc.player.id);
bp(document,"mousemove",bm);
bp(document,"mouseup",aV);
if(bc.isGecko){aU.style.cursor="-moz-grabbing"
}}function bm(f){var c=bc.player,e=bc.dimensions,a=a8(f);
var b=a[0]-bs.startX;
bs.startX+=b;
bs.x=Math.max(Math.min(0,bs.x+b),e.innerWidth-c.width);
var d=a[1]-bs.startY;
bs.startY+=d;
bs.y=Math.max(Math.min(0,bs.y+d),e.innerHeight-c.height);
bU(bK.style,{left:bs.x+"px",top:bs.y+"px"})
}function aV(){bg(document,"mousemove",bm);
bg(document,"mouseup",aV);
if(bc.isGecko){aU.style.cursor="-moz-grab"
}}bc.img=function(c,b){this.obj=c;
this.id=b;
this.ready=false;
var a=this;
bt=new Image();
bt.onload=function(){a.height=c.height?parseInt(c.height,10):bt.height;
a.width=c.width?parseInt(c.width,10):bt.width;
a.ready=true;
bt.onload=null;
bt=null
};
bt.src=c.content
};
bc.img.ext=["bmp","gif","jpg","jpeg","png"];
bc.img.prototype={append:function(d,e){var c=document.createElement("img");
c.id=this.id;
c.src=this.obj.content;
c.style.position="absolute";
var b,a;
if(e.oversized&&bc.options.handleOversize=="resize"){b=e.innerHeight;
a=e.innerWidth
}else{b=this.height;
a=this.width
}c.setAttribute("height",b);
c.setAttribute("width",a);
d.appendChild(c)
},remove:function(){var a=bN(this.id);
if(a){bv(a)
}bx();
if(bt){bt.onload=null;
bt=null
}},onLoad:function(){var a=bc.dimensions;
if(a.oversized&&bc.options.handleOversize=="drag"){be()
}},onWindowResize:function(){var a=bc.dimensions;
switch(bc.options.handleOversize){case"resize":var c=bN(this.id);
c.height=a.innerHeight;
c.width=a.innerWidth;
break;
case"drag":if(bK){var b=parseInt(bc.getStyle(bK,"top")),d=parseInt(bc.getStyle(bK,"left"));
if(b+this.height<a.innerHeight){bK.style.top=a.innerHeight-this.height+"px"
}if(d+this.width<a.innerWidth){bK.style.left=a.innerWidth-this.width+"px"
}bW()
}break
}}};
var bC=false,a5=[],aN=["sb-nav-close","sb-nav-next","sb-nav-play","sb-nav-pause","sb-nav-previous"],bQ,bM,a4,aR=true;
function bf(d,g,l,n,f){var h=(g=="opacity"),m=h?bc.setOpacity:function(p,q){p.style[g]=""+q+"px"
};
if(n==0||(!h&&!bc.options.animate)||(h&&!bc.options.animateFade)){m(d,l);
if(f){f()
}return
}var k=parseFloat(bc.getStyle(d,g))||0;
var j=l-k;
if(j==0){if(f){f()
}return
}n*=1000;
var c=bq(),o=bc.ease,a=c+n,b;
var e=setInterval(function(){b=bq();
if(b>=a){clearInterval(e);
e=null;
m(d,l);
if(f){f()
}}else{m(d,k+o((b-c)/n)*j)
}},10)
}function bV(){bQ.style.height=bc.getWindowSize("Height")+"px";
bQ.style.width=bc.getWindowSize("Width")+"px"
}function bS(){bQ.style.top=document.documentElement.scrollTop+"px";
bQ.style.left=document.documentElement.scrollLeft+"px"
}function bl(a){if(a){bR(a5,function(c,b){b[0].style.visibility=b[1]||""
})
}else{a5=[];
bR(bc.options.troubleElements,function(b,c){bR(document.getElementsByTagName(c),function(d,e){a5.push([e,e.style.visibility]);
e.style.visibility="hidden"
})
})
}}function aM(b,a){var c=bN("sb-nav-"+b);
if(c){c.style.display=a?"":"none"
}}function bJ(c,e){var f=bN("sb-loading"),b=bc.getCurrent().player,a=(b=="img"||b=="html");
if(c){bc.setOpacity(f,0);
f.style.display="block";
var d=function(){bc.clearOpacity(f);
if(e){e()
}};
if(a){bf(f,"opacity",1,bc.options.fadeDuration,d)
}else{d()
}}else{var d=function(){f.style.display="none";
bc.clearOpacity(f);
if(e){e()
}};
if(a){bf(f,"opacity",0,bc.options.fadeDuration,d)
}else{d()
}}}function aK(j){var a=bc.getCurrent();
bN("sb-title-inner").innerHTML=a.title||"";
var h,m,e,g,l;
if(bc.options.displayNav){h=true;
var k=bc.gallery.length;
if(k>1){if(bc.options.continuous){m=l=true
}else{m=(k-1)>bc.current;
l=bc.current>0
}}if(bc.options.slideshowDelay>0&&bc.hasNext()){g=!bc.isPaused();
e=!g
}}else{h=m=e=g=l=false
}aM("close",h);
aM("next",m);
aM("play",e);
aM("pause",g);
aM("previous",l);
var f="";
if(bc.options.displayCounter&&bc.gallery.length>1){var k=bc.gallery.length;
if(bc.options.counterType=="skip"){var b=0,c=k,d=parseInt(bc.options.counterLimit)||0;
if(d<k&&d>2){var n=Math.floor(d/2);
b=bc.current-n;
if(b<0){b+=k
}c=bc.current+(d-n);
if(c>k){c-=k
}}while(b!=c){if(b==k){b=0
}f+='<a onclick="Shadowbox.change('+b+');"';
if(b==bc.current){f+=' class="sb-counter-current"'
}f+=">"+(++b)+"</a>"
}}else{f=[bc.current+1,bc.lang.of,k].join(" ")
}}bN("sb-counter").innerHTML=f;
j()
}function a9(a){var c=bN("sb-title-inner"),b=bN("sb-info-inner"),d=0.35;
c.style.visibility=b.style.visibility="";
if(c.innerHTML!=""){bf(c,"marginTop",0,d)
}bf(b,"marginTop",0,d,a)
}function br(d,g){var j=bN("sb-title"),f=bN("sb-info"),c=j.offsetHeight,b=f.offsetHeight,a=bN("sb-title-inner"),h=bN("sb-info-inner"),e=(d?0.35:0);
bf(a,"marginTop",c,e);
bf(h,"marginTop",b*-1,e,function(){a.style.visibility=h.style.visibility="hidden";
g()
})
}function bO(c,a,d,e){var f=bN("sb-wrapper-inner"),b=(d?bc.options.resizeDuration:0);
bf(a4,"top",a,b);
bf(f,"height",c,b,e)
}function by(c,a,d,e){var b=(d?bc.options.resizeDuration:0);
bf(a4,"left",a,b);
bf(a4,"width",c,b,e)
}function bG(g,d){var b=bN("sb-body-inner"),g=parseInt(g),d=parseInt(d),e=a4.offsetHeight-b.offsetHeight,f=a4.offsetWidth-b.offsetWidth,j=bM.offsetHeight,h=bM.offsetWidth,a=parseInt(bc.options.viewportPadding)||20,c=(bc.player&&bc.options.handleOversize!="drag");
return bc.setDimensions(g,d,j,h,e,f,a,c)
}var ba={};
ba.markup='<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>{loading}</span></div></div></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div></div></div></div></div>';
ba.options={animSequence:"sync",counterLimit:10,counterType:"default",displayCounter:true,displayNav:true,fadeDuration:0.35,initialHeight:160,initialWidth:320,modal:false,overlayColor:"#000",overlayOpacity:0.35,resizeDuration:0.35,showOverlay:true,troubleElements:["select","object","embed","canvas"]};
ba.init=function(){bc.appendHTML(document.body,aL(ba.markup,bc.lang));
ba.body=bN("sb-body-inner");
bQ=bN("sb-container");
bM=bN("sb-overlay");
a4=bN("sb-wrapper");
if(!aG){bQ.style.position="absolute"
}if(!aW){var c,b,d=/url\("(.*\.png)"\)/;
bR(aN,function(f,e){c=bN(e);
if(c){b=bc.getStyle(c,"backgroundImage").match(d);
if(b){c.style.backgroundImage="none";
c.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="+b[1]+",sizingMethod=scale);"
}}})
}var a;
bp(bu,"resize",function(){if(a){clearTimeout(a);
a=null
}if(bz){a=setTimeout(ba.onWindowResize,10)
}})
};
ba.onOpen=function(b,a){aR=false;
bQ.style.display="block";
bV();
var c=bG(bc.options.initialHeight,bc.options.initialWidth);
bO(c.innerHeight,c.top);
by(c.width,c.left);
if(bc.options.showOverlay){bM.style.backgroundColor=bc.options.overlayColor;
bc.setOpacity(bM,0);
if(!bc.options.modal){bp(bM,"click",bc.close)
}bC=true
}if(!aG){bS();
bp(bu,"scroll",bS)
}bl();
bQ.style.visibility="visible";
if(bC){bf(bM,"opacity",bc.options.overlayOpacity,bc.options.fadeDuration,a)
}else{a()
}};
ba.onLoad=function(b,a){bJ(true);
while(ba.body.firstChild){bv(ba.body.firstChild)
}br(b,function(){if(!bz){return
}if(!b){a4.style.visibility="visible"
}aK(a)
})
};
ba.onReady=function(a){if(!bz){return
}var d=bc.player,c=bG(d.height,d.width);
var b=function(){a9(a)
};
switch(bc.options.animSequence){case"hw":bO(c.innerHeight,c.top,true,function(){by(c.width,c.left,true,b)
});
break;
case"wh":by(c.width,c.left,true,function(){bO(c.innerHeight,c.top,true,b)
});
break;
default:by(c.width,c.left,true);
bO(c.innerHeight,c.top,true,b)
}};
ba.onShow=function(a){bJ(false,a);
aR=true
};
ba.onClose=function(){if(!aG){bg(bu,"scroll",bS)
}bg(bM,"click",bc.close);
a4.style.visibility="hidden";
var a=function(){bQ.style.visibility="hidden";
bQ.style.display="none";
bl(true)
};
if(bC){bf(bM,"opacity",0,bc.options.fadeDuration,a)
}else{a()
}};
ba.onPlay=function(){aM("play",false);
aM("pause",true)
};
ba.onPause=function(){aM("pause",false);
aM("play",true)
};
ba.onWindowResize=function(){if(!aR){return
}bV();
var a=bc.player,b=bG(a.height,a.width);
by(b.width,b.left);
bO(b.innerHeight,b.top);
if(a.onWindowResize){a.onWindowResize()
}};
bc.skin=ba;
bu.Shadowbox=bc
})(window);
var Paginator=function(){this.init=function(){};
this.tableAfterEdit=function(){this.refreshSelf()
};
this.modifySearchBox=function(a,b){$(a).after('<span class="search-icon"></span>');
$(a).attr("placeholder",b)
};
this.exportTableToCSV=function(j,a){var k=[];
k.push(j.find("thead tr")[0]);
k=k.concat(j.dataTable().fnGetNodes());
var h=$(k);
var b=String.fromCharCode(11);
var g=String.fromCharCode(0);
var e='","';
var c='"\r\n"';
var d='"'+h.map(function(n,o){var l=$(o);
var m=[];
if(l.find("th").length>0){m=l.find("th")
}else{m=l.find("td")
}return m.map(function(q,p){var r=$(p),s=r.text();
return s.replace('"','""')
}).get().join(b)
}).get().join(g).split(g).join(c).split(b).join(e)+'"';
var f="data:application/csv;charset=utf-8,"+encodeURIComponent(d);
$(this).attr({download:a,href:f,target:"_blank"})
};
this.initDataTables=function(a,f,b,d,e){$.fn.DataTable.ext.pager.numbers_length=7;
if($.fn.dataTableExt){$.extend($.fn.dataTableExt.oStdClasses,{sFilterInput:"search-filter",sPaging:"pagination "})
}var c=$(a).DataTable({autoWidth:false,order:[[e,"asc"]],ordering:d,language:{url:"",aria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},search:"Keywords: ",paginate:{first:"<<",last:">>",next:">",previous:"<"},emptyTable:b.noData,info:b.showing+" _START_ - _END_ / _TOTAL_ "+b.entries,infoEmpty:b.showing+" 0 - 0 / 0 "+b.entries,infoFiltered:"("+b.filteredFrom+" _MAX_ "+b.total+" "+b.entries+")",infoPostFix:"",infoThousands:",",zeroRecords:b.noEntries},displayLength:20,columnDefs:f,lengthMenu:[[20,50,-1],[20,50,"All"]],dom:'<"table-controls"fpi>t<"table-controls-bottom table-controls"ip>',paginationType:"full_numbers"});
$(a).wrap('<div class="dataTables_scrollHead"></div>')
}
};
Array.prototype.getUnique=function(){var d={},c=[];
for(var e=0,b=this.length;
e<b;
++e){if(d.hasOwnProperty(this[e])){continue
}c.push(this[e]);
d[this[e]]=1
}return c
};
function decodeJavascriptEscape(b){var a=/\\u([\d\w]{4})/gi;
b=b.replace(a,function(d,c){return String.fromCharCode(parseInt(c,16))
});
b=unescape(b);
return b
}function getParameterByName(b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var a="[\\?&]"+b+"=([^&#]*)";
var d=new RegExp(a);
var c=d.exec(window.location.href);
if(c==null){return""
}else{return decodeURIComponent(c[1].replace(/\+/g," "))
}}function searchTable(a,b){var b=$("#"+b);
b.find("tr").each(function(c,f){var d=$(f).find("td");
if(d.length>0){var e=false;
d.each(function(h,j){var g=new RegExp(a,"i");
if(g.test($(j).text())){e=true;
return false
}});
if(e==true){$(f).show()
}else{$(f).hide()
}}})
}var Paginator=new Paginator();
function initDataTableWithData(f){if($.fn.dataTableExt){$.extend($.fn.dataTableExt.oStdClasses,{sFilterInput:"search-field",sPaging:"pagination "})
}var m,v=f.tableId,H=f.tableData,c=f.columns,r=f.labelsLoc,B=f.hiddenIndexArr,e=f.orderableIndexArr,o=f.natureSortArr,y=f.isSort,D=f.defaultSortTarget,F=f.fileName,g=f.download,s=f.checkboxStyle,p=f.colStyle,a=f.colIndex,x=f.modalClass,q=f.customAttr,b=f.attrContent,t=f.colContent,E=f.filterIndexArr,h=f.showDatatableLength,l=h?'<"table-controls-top top"fli>rt<"table-controls-bottom"p><"clear">':'<"table-controls-top top"fi>rt<"table-controls-bottom"p><"clear">',z=[],u;
if(s!=="none"){if(c!==null&&c!==undefined&&c.length>0){var n={};
n=c.filter(function(I){return I.hasOwnProperty("defaultContent")?(I.targets==0):c
})[0];
n.orderable=false;
n.className="select-checkbox";
n.render=function G(J,I,K){return""
};
c.splice(0,1,n)
}else{c=[{orderable:false,className:"select-checkbox",targets:0,render:function G(J,I,K){return""
}}]
}z={style:s}
}if(p.length>0&&a.length>0&&q!==""&&b!==""){q=JSON.parse(f.customAttr);
b=JSON.parse(f.attrContent);
var w={},k="";
var d=/(?:[^\]\[,]+|\[[^\]\[]+\])+/g;
$.each(p,function(L,Q){if(Q.trim()!=="none"){var K,R,P,O,N,M,I,J;
(function(){K=Q.trim();
R=parseInt(a[L].trim())||0;
if(c!==null&&c!==undefined&&c.length>0&&R>=c.length){return
}P=x[L].trim();
O=q[L].trim().split(",");
N=b[L].trim();
M=t[L].trim();
I="";
J={};
k=M;
if(c!==null&&c!==undefined&&c.length>0){J=c.filter(function(W){return W.targets==R
})[0];
if(J===undefined){J=c[R]
}}var S=void 0,V=[],U=0;
while((S=d.exec(N))!==null){if(N.index===d.lastIndex){d.lastIndex++
}S.forEach(function(W,X){V[U]=W
});
U++
}if(K.indexOf("popover")>-1){K=K.replace("popover","");
w={render:function T(X,W,Y){if(W==="export"){return X
}else{if(X!==null){$.each(O,function(ab,ac){if(ac.trim()!==""&&V.length>=ab+1){var aa=V[ab].trim();
if(aa.indexOf("[")>-1||!isNaN(aa)){var Z=aa.replace("[","").replace("]","").split(",");
aa="";
$.each(Z,function(ae,ad){var af=Y[Object.keys(Y)[ad]];
if(af){aa+=" "+af.toLowerCase().replace(/[^\w\\s*]/g,"-")
}})
}I+=" "+ac+'="'+aa+'"'
}});
if(M===""){k=X;
if(X===Y){k=J.hasOwnProperty("defaultContent")?J.defaultContent:J.data
}k=(k!==null&&k!==undefined&&k.length>25)?k.substring(0,25):k
}if(k!==""){return"<div>"+k+'<div><sub class="table-sub clickable" data-toggle="popover" data-placement="'+K+'" data-content="'+X+'"'+I+">...</sub></div></div>"
}}}return X
},targets:R}
}else{if(K==="modal"){w={orderable:false,className:"select-modal",targets:R,render:function T(X,W,Y){if(X!==null){$.each(O,function(ab,ac){if(ac.trim()!==""&&V.length>=ab+1){var aa=V[ab].trim();
if(aa.indexOf("[")>-1||!isNaN(aa)){var Z=aa.replace("[","").replace("]","").split(",");
aa="";
$.each(Z,function(ae,ad){var af=Y[Object.keys(Y)[ad]];
if(af){aa+=" "+af.toString().toLowerCase().replace(/[^\w\\s*]/g,"-")
}})
}I+=" "+ac+'="'+aa+'"'
}});
if(M===""){k=X;
if(X===Y){k=J.hasOwnProperty("defaultContent")?J.defaultContent:J.data
}k=(k!==null&&k!==undefined)?k:""
}return'<a href="#" data-target=".'+P+'" data-toggle="modal"'+I+">"+k+"</a>"
}return X
}}
}else{if(K==="link"){w={orderable:false,targets:R,render:function T(X,W,Y){if(X!==null){$.each(O,function(ab,ac){if(ac.trim()!==""&&V.length>=ab+1){var aa=V[ab].trim();
if(aa.indexOf("[")>-1||!isNaN(aa)){var Z=aa.replace("[","").replace("]","").split(",");
aa="";
$.each(Z,function(ae,ad){if($.isNumeric(ad)){var af=Y[Object.keys(Y)[ad]];
if(af){aa+=" "+af.toString().toLowerCase().replace(/[^\w\\s*]/g,"-")
}}})
}I+=" "+ac+'="'+aa+'"'
}});
if(M===""){k=X;
if(X===Y){k=J.hasOwnProperty("defaultContent")?J.defaultContent:J.data
}k=(k!==null&&k!==undefined)?k:""
}return'<a href="#" class="select-link '+k.toLowerCase().replace(/[^\w\\s*]/g,"-")+'"'+I+">"+k+"</a>"
}return X
}}
}}}J.orderable=w.hasOwnProperty("orderable")?w.orderable:J.orderable;
J.className=w.hasOwnProperty("className")?w.className:J.className;
J.render=w.hasOwnProperty("render")?w.render:J.render;
if(c!==null&&c!==undefined&&c.length>R){c.splice(R,1,J)
}else{c.push(w)
}})()
}})
}if(g||s!=="none"){l="B"+l;
var A=[];
if(g){A.push({text:"Download",extend:"csvHtml5",className:"export-csv btn btn-primary section-content",title:F,extension:".csv",exportOptions:{columns:":visible",orthogonal:"export"}})
}if(s!=="none"){A.push({extend:"selectNone",tag:"input",className:"btn btn-primary section-content"});
u={};
u.buttons=A;
u.dom={container:{className:"btn-inline default"}}
}else{u={};
u.buttons=A;
u.dom={button:{tag:"button"}}
}}if(E){$("#"+v).before('<div class="'+v+'_filter row"></div>');
m=function m(){var I=this.api();
if(E.length>0&&$("."+v+"_filter").children().length===0){E.forEach(function(L,N){if(L.trim()!==""){var M=I.column(parseInt(L));
if(Object.prototype.toString.call(M.data()[0])!=="[object Object]"){var K=$('<select><option value=""></option></select>').appendTo($("."+v+"_filter")).on("change",function(){var O=$.fn.dataTable.util.escapeRegex($(this).val());
M.search(O?O:"",true,false).draw()
});
var J=[];
if(M.data()!==undefined){M.data().each(function(Q,O){if(Object.prototype.toString.call(Q)==="[object String]"){if(Q.indexOf(",")>-1){var P=Q.split(",");
P.forEach(function(R,S){if(R.trim().length>0){J.push(R.trim())
}})
}else{if(Q.trim().length>0){J.push(Q.trim())
}}}else{if(Object.prototype.toString.call(Q)==="[object Array]"){Q.forEach(function(R,S){if(R.trim().length>0){J.push(R.trim())
}})
}}})
}$.uniqueSort(J).sort().forEach(function(P,O){K.append('<option value="'+P+'">'+P+"</option>")
});
K.wrap('<div class="col-xs-12"></div>');
$(K).before("<span>"+$(M.header()).text().trim()+": </span>")
}}})
}}
}if(e){if(c!==null&&c!==undefined&&c.length>0){c.forEach(function(J,I){if(o.indexOf(I)!==-1){J.type="natural"
}if(e.indexOf(I)!==-1){J.orderable=true
}})
}}var C=$("#"+v).DataTable({initComplete:m,destroy:true,deferRender:true,processing:true,stateSave:true,data:H,columns:c,select:z,order:[[D,"asc"]],ordering:y,lengthChange:true,pagingType:"full_numbers",language:{aria:{sortAscending:": activate to sort column ascending",sortDescending:": activate to sort column descending"},paginate:{first:"<<",last:">>",next:">",previous:"<"},emptyTable:r.noData,info:r.showing+" _START_ - _END_ / _TOTAL_ "+r.entries,infoEmpty:r.showing+" 0 - 0 / 0 "+r.entries,infoFiltered:"("+r.filteredFrom+" _MAX_ "+r.total+" "+r.entries+")",infoPostFix:"",thousands:",",processing:"Loading Data",zeroRecords:r.noEntries},dom:l,buttons:u,drawCallback:function j(I){$(".table-sub").popover({trigger:"click"})
}});
if(B.length>0){B.forEach(function(J,I){C.column(J).visible(false,false)
});
C.columns.adjust().draw(false)
}C.on("select",function(I){});
$("#"+v).wrap('<div class="dataTables_scrollHead"></div>');
$(".table-sub").popover({trigger:"click"});
return C
}var TextMultimedia=function(){this.init=function(){};
this.CalculateTallestHeightAfterEdit=function(){this.refreshSelf();
if(typeof FiveOrSixSquaresNav=="object"){FiveOrSixSquaresNav.CalculateTallestHeight()
}else{if(typeof FourSquaresNav=="object"){FourSquaresNav.CalculateTallestHeight()
}}};
this.CalculateTallestHeightAfterDelete=function(){this.refreshParent();
if(typeof FiveOrSixSquaresNav=="object"){FiveOrSixSquaresNav.CalculateTallestHeight()
}else{if(typeof FourSquaresNav=="object"){FourSquaresNav.CalculateTallestHeight()
}}}
};
var TextMultimedia=new TextMultimedia();
$(function(){TextMultimedia.init()
});
(function(){var a={video:null,videoID:null,init:function(){var c=$(".modal");
this.videoID=this.videoWrapper.id;
this.video=this.videoWrapper;
c.on("show.bs.modal",$.proxy(this.modalOpen,this));
c.on("shown.bs.modal",$.proxy(this.modalPlay,this));
c.on("hide.bs.modal",$.proxy(this.modalClose,this))
},modalOpen:function(f){var c=f.relatedTarget,d=f.target;
if(this.playFromModal==="true"){return
}if(!this.srcElem){this.srcElem=document.createElement("source")
}this.srcElem.src=c.dataset.href;
this.srcElem.type="video/mp4";
this.video.appendChild(this.srcElem)
},modalPlay:function(){this.video.play()
},modalClose:function(c){if(!!this.playFromModal){this.srcElem.setAttribute("src","");
this.srcElem.setAttribute("type","")
}this.video.load()
}},b={videoWrapper:null,init:function(){this.videoWrapper=document.querySelectorAll(".video-player");
this.setup()
},setup:function(){var d=Array.prototype.slice.call(this.videoWrapper),c;
d.forEach(function(f){var e=f.querySelector("video");
if(e.dataset.playFromLink==="true"||e.dataset.playFromModal==="true"){c=Object.create(a,{videoWrapper:{value:e},playFromModal:{value:e.dataset.playFromModal}});
c.init()
}}.bind(this))
}};
fpga.pageLoad(function(){if(this.isPublish()){b.init()
}})
}());
!function(a){var c={},b={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4000,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};
a.fn.bxSlider=function(aq){if(0==this.length){return this
}if(this.length>1){return this.each(function(){a(this).bxSlider(aq)
}),this
}var ap={},am=this;
c.el=this;
var aB=a(window).width(),at=a(window).height(),ay=function(){ap.settings=a.extend({},b,aq),ap.settings.slideWidth=parseInt(ap.settings.slideWidth),ap.children=am.children(ap.settings.slideSelector),ap.children.length<ap.settings.minSlides&&(ap.settings.minSlides=ap.children.length),ap.children.length<ap.settings.maxSlides&&(ap.settings.maxSlides=ap.children.length),ap.settings.randomStart&&(ap.settings.startSlide=Math.floor(Math.random()*ap.children.length)),ap.active={index:ap.settings.startSlide},ap.carousel=ap.settings.minSlides>1||ap.settings.maxSlides>1,ap.carousel&&(ap.settings.preloadImages="all"),ap.minThreshold=ap.settings.minSlides*ap.settings.slideWidth+(ap.settings.minSlides-1)*ap.settings.slideMargin,ap.maxThreshold=ap.settings.maxSlides*ap.settings.slideWidth+(ap.settings.maxSlides-1)*ap.settings.slideMargin,ap.working=!1,ap.controls={},ap.interval=null,ap.animProp="vertical"==ap.settings.mode?"top":"left",ap.usingCSS=ap.settings.useCSS&&"fade"!=ap.settings.mode&&function(){var f=document.createElement("div"),g=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];
for(var d in g){if(void 0!==f.style[g[d]]){return ap.cssPrefix=g[d].replace("Perspective","").toLowerCase(),ap.animProp="-"+ap.cssPrefix+"-transform",!0
}}return !1
}(),"vertical"==ap.settings.mode&&(ap.settings.maxSlides=ap.settings.minSlides),am.data("origStyle",am.attr("style")),am.children(ap.settings.slideSelector).each(function(){a(this).data("origStyle",a(this).attr("style"))
}),az()
},az=function(){am.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),ap.viewport=am.parent(),ap.loader=a('<div class="bx-loading" />'),ap.viewport.prepend(ap.loader),am.css({width:"horizontal"==ap.settings.mode?100*ap.children.length+215+"%":"auto",position:"relative"}),ap.usingCSS&&ap.settings.easing?am.css("-"+ap.cssPrefix+"-transition-timing-function",ap.settings.easing):ap.settings.easing||(ap.settings.easing="swing"),ax(),ap.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),ap.viewport.parent().css({maxWidth:ak()}),ap.settings.pager||ap.viewport.parent().css({margin:"0 auto 0px"}),ap.children.css({"float":"horizontal"==ap.settings.mode?"left":"none",listStyle:"none",position:"relative"}),ap.children.css("width",al()),"horizontal"==ap.settings.mode&&ap.settings.slideMargin>0&&ap.children.css("marginRight",ap.settings.slideMargin),"vertical"==ap.settings.mode&&ap.settings.slideMargin>0&&ap.children.css("marginBottom",ap.settings.slideMargin),"fade"==ap.settings.mode&&(ap.children.css({position:"absolute",zIndex:0,display:"none"}),ap.children.eq(ap.settings.startSlide).css({zIndex:50,display:"block"})),ap.controls.el=a('<div class="bx-controls" />'),ap.settings.captions&&J(),ap.active.last=ap.settings.startSlide==ai()-1,ap.settings.video&&am.fitVids();
var d=ap.children.eq(ap.settings.startSlide);
"all"==ap.settings.preloadImages&&(d=ap.children),ap.settings.ticker?ap.settings.pager=!1:(ap.settings.pager&&F(),ap.settings.controls&&ad(),ap.settings.auto&&ap.settings.autoControls&&ab(),(ap.settings.controls||ap.settings.autoControls||ap.settings.pager)&&ap.viewport.after(ap.controls.el)),aw(d,av)
},aw=function(g,d){var f=g.find("img, iframe").length;
if(0==f){return d(),void 0
}var h=0;
g.find("img, iframe").each(function(){a(this).one("load",function(){++h==f&&d()
}).each(function(){this.complete&&a(this).load()
})
})
},av=function(){if(ap.settings.infiniteLoop&&"fade"!=ap.settings.mode&&!ap.settings.ticker){var g="vertical"==ap.settings.mode?ap.settings.minSlides:ap.settings.maxSlides,d=ap.children.slice(0,g).clone().addClass("bx-clone"),f=ap.children.slice(-g).clone().addClass("bx-clone");
am.append(d).prepend(f)
}ap.loader.remove(),G(),"vertical"==ap.settings.mode&&(ap.settings.adaptiveHeight=!0),ap.viewport.height(ao()),am.redrawSlider(),ap.settings.onSliderLoad(ap.active.index),ap.initialized=!0,ap.settings.responsive&&a(window).bind("resize",ae),ap.settings.auto&&ap.settings.autoStart&&aa(),ap.settings.ticker&&U(),ap.settings.pager&&Z(ap.settings.startSlide),ap.settings.controls&&s(),ap.settings.touchEnabled&&!ap.settings.ticker&&K()
},ao=function(){var f=0,d=a();
if("vertical"==ap.settings.mode||ap.settings.adaptiveHeight){if(ap.carousel){var g=1==ap.settings.moveSlides?ap.active.index:ap.active.index*ar();
for(d=ap.children.eq(g),i=1;
i<=ap.settings.maxSlides-1;
i++){d=g+i>=ap.children.length?d.add(ap.children.eq(i-1)):d.add(ap.children.eq(g+i))
}}else{d=ap.children.eq(ap.active.index)
}}else{d=ap.children
}return"vertical"==ap.settings.mode?(d.each(function(){f+=a(this).outerHeight()
}),ap.settings.slideMargin>0&&(f+=ap.settings.slideMargin*(ap.settings.minSlides-1))):f=Math.max.apply(Math,d.map(function(){return a(this).outerHeight(!1)
}).get()),f
},ak=function(){var d="100%";
return ap.settings.slideWidth>0&&(d="horizontal"==ap.settings.mode?ap.settings.maxSlides*ap.settings.slideWidth+(ap.settings.maxSlides-1)*ap.settings.slideMargin:ap.settings.slideWidth),d
},al=function(){var d=ap.settings.slideWidth,f=ap.viewport.width();
return 0==ap.settings.slideWidth||ap.settings.slideWidth>f&&!ap.carousel||"vertical"==ap.settings.mode?d=f:ap.settings.maxSlides>1&&"horizontal"==ap.settings.mode&&(f>ap.maxThreshold||f<ap.minThreshold&&(d=(f-ap.settings.slideMargin*(ap.settings.minSlides-1))/ap.settings.minSlides)),d
},ax=function(){var d=1;
if("horizontal"==ap.settings.mode&&ap.settings.slideWidth>0){if(ap.viewport.width()<ap.minThreshold){d=ap.settings.minSlides
}else{if(ap.viewport.width()>ap.maxThreshold){d=ap.settings.maxSlides
}else{var f=ap.children.first().width();
d=Math.floor(ap.viewport.width()/f)
}}}else{"vertical"==ap.settings.mode&&(d=ap.settings.minSlides)
}return d
},ai=function(){var f=0;
if(ap.settings.moveSlides>0){if(ap.settings.infiniteLoop){f=ap.children.length/ar()
}else{for(var g=0,d=0;
g<ap.children.length;
){++f,g=d+ax(),d+=ap.settings.moveSlides<=ax()?ap.settings.moveSlides:ax()
}}}else{f=Math.ceil(ap.children.length/ax())
}return f
},ar=function(){return ap.settings.moveSlides>0&&ap.settings.moveSlides<=ax()?ap.settings.moveSlides:ax()
},G=function(){if(ap.children.length>ap.settings.maxSlides&&ap.active.last&&!ap.settings.infiniteLoop){if("horizontal"==ap.settings.mode){var f=ap.children.last(),g=f.position();
aA(-(g.left-(ap.viewport.width()-f.width())),"reset",0)
}else{if("vertical"==ap.settings.mode){var d=ap.children.length-ap.settings.minSlides,g=ap.children.eq(d).position();
aA(-g.top,"reset",0)
}}}else{var g=ap.children.eq(ap.active.index*ar()).position();
ap.active.index==ai()-1&&(ap.active.last=!0),void 0!=g&&("horizontal"==ap.settings.mode?aA(-g.left,"reset",0):"vertical"==ap.settings.mode&&aA(-g.top,"reset",0))
}},aA=function(g,k,f,h){if(ap.usingCSS){var l="vertical"==ap.settings.mode?"translate3d(0, "+g+"px, 0)":"translate3d("+g+"px, 0, 0)";
am.css("-"+ap.cssPrefix+"-transition-duration",f/1000+"s"),"slide"==k?(am.css(ap.animProp,l),am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),ac()
})):"reset"==k?am.css(ap.animProp,l):"ticker"==k&&(am.css("-"+ap.cssPrefix+"-transition-timing-function","linear"),am.css(ap.animProp,l),am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),aA(h.resetValue,"reset",0),Q()
}))
}else{var d={};
d[ap.animProp]=g,"slide"==k?am.animate(d,f,ap.settings.easing,function(){ac()
}):"reset"==k?am.css(ap.animProp,g):"ticker"==k&&am.animate(d,speed,"linear",function(){aA(h.resetValue,"reset",0),Q()
})
}},aj=function(){for(var g="",d=ai(),f=0;
d>f;
f++){var h="";
ap.settings.buildPager&&a.isFunction(ap.settings.buildPager)?(h=ap.settings.buildPager(f),ap.pagerEl.addClass("bx-custom-pager")):(h=f+1,ap.pagerEl.addClass("bx-default-pager")),g+='<div class="bx-pager-item"><a href="" data-slide-index="'+f+'" class="bx-pager-link">'+h+"</a></div>"
}ap.pagerEl.html(g)
},F=function(){ap.settings.pagerCustom?ap.pagerEl=a(ap.settings.pagerCustom):(ap.pagerEl=a('<div class="bx-pager" />'),ap.settings.pagerSelector?a(ap.settings.pagerSelector).html(ap.pagerEl):ap.controls.el.addClass("bx-has-pager").append(ap.pagerEl),aj()),ap.pagerEl.delegate("a","click",an)
},ad=function(){ap.controls.next=a('<a class="bx-next" href="">'+ap.settings.nextText+"</a>"),ap.controls.prev=a('<a class="bx-prev" href="">'+ap.settings.prevText+"</a>"),ap.controls.next.bind("click",ah),ap.controls.prev.bind("click",ag),ap.settings.nextSelector&&a(ap.settings.nextSelector).append(ap.controls.next),ap.settings.prevSelector&&a(ap.settings.prevSelector).append(ap.controls.prev),ap.settings.nextSelector||ap.settings.prevSelector||(ap.controls.directionEl=a('<div class="bx-controls-direction" />'),ap.controls.directionEl.append(ap.controls.prev).append(ap.controls.next),ap.controls.el.addClass("bx-has-controls-direction").append(ap.controls.directionEl))
},ab=function(){ap.controls.start=a('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+ap.settings.startText+"</a></div>"),ap.controls.stop=a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+ap.settings.stopText+"</a></div>"),ap.controls.autoEl=a('<div class="bx-controls-auto" />'),ap.controls.autoEl.delegate(".bx-start","click",au),ap.controls.autoEl.delegate(".bx-stop","click",R),ap.settings.autoControlsCombine?ap.controls.autoEl.append(ap.controls.start):ap.controls.autoEl.append(ap.controls.start).append(ap.controls.stop),ap.settings.autoControlsSelector?a(ap.settings.autoControlsSelector).html(ap.controls.autoEl):ap.controls.el.addClass("bx-has-controls-auto").append(ap.controls.autoEl),af(ap.settings.autoStart?"stop":"start")
},J=function(){ap.children.each(function(){var d=a(this).find("img:first").attr("title");
void 0!=d&&(""+d).length&&a(this).append('<div class="bx-caption"><span>'+d+"</span></div>")
})
},ah=function(d){ap.settings.auto&&am.stopAuto(),am.goToNextSlide(),d.preventDefault()
},ag=function(d){ap.settings.auto&&am.stopAuto(),am.goToPrevSlide(),d.preventDefault()
},au=function(d){am.startAuto(),d.preventDefault()
},R=function(d){am.stopAuto(),d.preventDefault()
},an=function(g){ap.settings.auto&&am.stopAuto();
var d=a(g.currentTarget),f=parseInt(d.attr("data-slide-index"));
f!=ap.active.index&&am.goToSlide(f),g.preventDefault()
},Z=function(f){var d=ap.children.length;
return"short"==ap.settings.pagerType?(ap.settings.maxSlides>1&&(d=Math.ceil(ap.children.length/ap.settings.maxSlides)),ap.pagerEl.html(f+1+ap.settings.pagerShortSeparator+d),void 0):(ap.pagerEl.find("a").removeClass("active"),ap.pagerEl.each(function(g,h){a(h).find("a").eq(f).addClass("active")
}),void 0)
},ac=function(){if(ap.settings.infiniteLoop){var d="";
0==ap.active.index?d=ap.children.eq(0).position():ap.active.index==ai()-1&&ap.carousel?d=ap.children.eq((ai()-1)*ar()).position():ap.active.index==ap.children.length-1&&(d=ap.children.eq(ap.children.length-1).position()),"horizontal"==ap.settings.mode?aA(-d.left,"reset",0):"vertical"==ap.settings.mode&&aA(-d.top,"reset",0)
}ap.working=!1,ap.settings.onSlideAfter(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index)
},af=function(d){ap.settings.autoControlsCombine?ap.controls.autoEl.html(ap.controls[d]):(ap.controls.autoEl.find("a").removeClass("active"),ap.controls.autoEl.find("a:not(.bx-"+d+")").addClass("active"))
},s=function(){1==ai()?(ap.controls.prev.addClass("disabled"),ap.controls.next.addClass("disabled")):!ap.settings.infiniteLoop&&ap.settings.hideControlOnEnd&&(0==ap.active.index?(ap.controls.prev.addClass("disabled"),ap.controls.next.removeClass("disabled")):ap.active.index==ai()-1?(ap.controls.next.addClass("disabled"),ap.controls.prev.removeClass("disabled")):(ap.controls.prev.removeClass("disabled"),ap.controls.next.removeClass("disabled")))
},aa=function(){ap.settings.autoDelay>0?setTimeout(am.startAuto,ap.settings.autoDelay):am.startAuto(),ap.settings.autoHover&&am.hover(function(){ap.interval&&(am.stopAuto(!0),ap.autoPaused=!0)
},function(){ap.autoPaused&&(am.startAuto(!0),ap.autoPaused=null)
})
},U=function(){var f=0;
if("next"==ap.settings.autoDirection){am.append(ap.children.clone().addClass("bx-clone"))
}else{am.prepend(ap.children.clone().addClass("bx-clone"));
var d=ap.children.first().position();
f="horizontal"==ap.settings.mode?-d.left:-d.top
}aA(f,"reset",0),ap.settings.pager=!1,ap.settings.controls=!1,ap.settings.autoControls=!1,ap.settings.tickerHover&&!ap.usingCSS&&ap.viewport.hover(function(){am.stop()
},function(){var k=0;
ap.children.each(function(){k+="horizontal"==ap.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)
});
var g=(k===0||isNaN(k))?null:ap.settings.speed/k,h="horizontal"==ap.settings.mode?"left":"top",l=g*(k-Math.abs(parseInt(am.css(h))));
Q(l)
}),Q()
},Q=function(g){speed=g?g:ap.settings.speed;
var k={left:0,top:0},f={left:0,top:0};
"next"==ap.settings.autoDirection?k=am.find(".bx-clone").first().position():f=ap.children.first().position();
var h="horizontal"==ap.settings.mode?-k.left:-k.top,l="horizontal"==ap.settings.mode?-f.left:-f.top,d={resetValue:l};
aA(h,"ticker",speed,d)
},K=function(){ap.touch={start:{x:0,y:0},end:{x:0,y:0}},ap.viewport.bind("touchstart",j)
},j=function(d){if(ap.working){d.preventDefault()
}else{ap.touch.originalPos=am.position();
var f=d.originalEvent;
ap.touch.start.x=f.changedTouches[0].pageX,ap.touch.start.y=f.changedTouches[0].pageY,ap.viewport.bind("touchmove",e),ap.viewport.bind("touchend",t)
}},e=function(f){var k=f.originalEvent,d=Math.abs(k.changedTouches[0].pageX-ap.touch.start.x),g=Math.abs(k.changedTouches[0].pageY-ap.touch.start.y);
if(3*d>g&&ap.settings.preventDefaultSwipeX?f.preventDefault():3*g>d&&ap.settings.preventDefaultSwipeY&&f.preventDefault(),"fade"!=ap.settings.mode&&ap.settings.oneToOneTouch){var l=0;
if("horizontal"==ap.settings.mode){var h=k.changedTouches[0].pageX-ap.touch.start.x;
l=ap.touch.originalPos.left+h
}else{var h=k.changedTouches[0].pageY-ap.touch.start.y;
l=ap.touch.originalPos.top+h
}aA(l,"reset",0)
}},t=function(f){ap.viewport.unbind("touchmove",e);
var h=f.originalEvent,d=0;
if(ap.touch.end.x=h.changedTouches[0].pageX,ap.touch.end.y=h.changedTouches[0].pageY,"fade"==ap.settings.mode){var g=Math.abs(ap.touch.start.x-ap.touch.end.x);
g>=ap.settings.swipeThreshold&&(ap.touch.start.x>ap.touch.end.x?am.goToNextSlide():am.goToPrevSlide(),am.stopAuto())
}else{var g=0;
"horizontal"==ap.settings.mode?(g=ap.touch.end.x-ap.touch.start.x,d=ap.touch.originalPos.left):(g=ap.touch.end.y-ap.touch.start.y,d=ap.touch.originalPos.top),!ap.settings.infiniteLoop&&(0==ap.active.index&&g>0||ap.active.last&&0>g)?aA(d,"reset",200):Math.abs(g)>=ap.settings.swipeThreshold?(0>g?am.goToNextSlide():am.goToPrevSlide(),am.stopAuto()):aA(d,"reset",200)
}ap.viewport.unbind("touchend",t)
},ae=function(){var f=a(window).width(),d=a(window).height();
(aB!=f||at!=d)&&(aB=f,at=d,am.redrawSlider())
};
return am.goToSlide=function(o,k){if(!ap.working&&ap.active.index!=o){if(ap.working=!0,ap.oldIndex=ap.active.index,ap.active.index=0>o?ai()-1:o>=ai()?0:o,ap.settings.onSlideBefore(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index),"next"==k?ap.settings.onSlideNext(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index):"prev"==k&&ap.settings.onSlidePrev(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index),ap.active.last=ap.active.index>=ai()-1,ap.settings.pager&&Z(ap.active.index),ap.settings.controls&&s(),"fade"==ap.settings.mode){ap.settings.adaptiveHeight&&ap.viewport.height()!=ao()&&ap.viewport.animate({height:ao()},ap.settings.adaptiveHeightSpeed),ap.children.filter(":visible").fadeOut(ap.settings.speed).css({zIndex:0}),ap.children.eq(ap.active.index).css("zIndex",51).fadeIn(ap.settings.speed,function(){a(this).css("zIndex",50),ac()
})
}else{ap.settings.adaptiveHeight&&ap.viewport.height()!=ao()&&ap.viewport.animate({height:ao()},ap.settings.adaptiveHeightSpeed);
var u=0,f={left:0,top:0};
if(!ap.settings.infiniteLoop&&ap.carousel&&ap.active.last){if("horizontal"==ap.settings.mode){var r=ap.children.eq(ap.children.length-1);
f=r.position(),u=ap.viewport.width()-r.outerWidth()
}else{var h=ap.children.length-ap.settings.minSlides;
f=ap.children.eq(h).position()
}}else{if(ap.carousel&&ap.active.last&&"prev"==k){var p=1==ap.settings.moveSlides?ap.settings.maxSlides-ar():(ai()-1)*ar()-(ap.children.length-ap.settings.maxSlides),r=am.children(".bx-clone").eq(p);
f=r.position()
}else{if("next"==k&&0==ap.active.index){f=am.find("> .bx-clone").eq(ap.settings.maxSlides).position(),ap.active.last=!1
}else{if(o>=0){var q=o*ar();
f=ap.children.eq(q).position()
}}}}if("undefined"!=typeof f){var m="horizontal"==ap.settings.mode?-(f.left-u):-f.top;
aA(m,"slide",ap.settings.speed)
}}}},am.goToNextSlide=function(){if(ap.settings.infiniteLoop||!ap.active.last){var d=parseInt(ap.active.index)+1;
am.goToSlide(d,"next")
}},am.goToPrevSlide=function(){if(ap.settings.infiniteLoop||0!=ap.active.index){var d=parseInt(ap.active.index)-1;
am.goToSlide(d,"prev")
}},am.startAuto=function(d){ap.interval||(ap.interval=setInterval(function(){"next"==ap.settings.autoDirection?am.goToNextSlide():am.goToPrevSlide()
},ap.settings.pause),ap.settings.autoControls&&1!=d&&af("stop"))
},am.stopAuto=function(d){ap.interval&&(clearInterval(ap.interval),ap.interval=null,ap.settings.autoControls&&1!=d&&af("start"))
},am.getCurrentSlide=function(){return ap.active.index
},am.getSlideCount=function(){return ap.children.length
},am.redrawSlider=function(){ap.children.add(am.find(".bx-clone")).outerWidth(al()),ap.viewport.css("height",ao()),ap.settings.ticker||G(),ap.active.last&&(ap.active.index=ai()-1),ap.active.index>=ai()&&(ap.active.last=!0),ap.settings.pager&&!ap.settings.pagerCustom&&(aj(),Z(ap.active.index))
},am.destroySlider=function(){ap.initialized&&(ap.initialized=!1,a(".bx-clone",this).remove(),ap.children.each(function(){void 0!=a(this).data("origStyle")?a(this).attr("style",a(this).data("origStyle")):a(this).removeAttr("style")
}),void 0!=a(this).data("origStyle")?this.attr("style",a(this).data("origStyle")):a(this).removeAttr("style"),a(this).unwrap().unwrap(),ap.controls.el&&ap.controls.el.remove(),ap.controls.next&&ap.controls.next.remove(),ap.controls.prev&&ap.controls.prev.remove(),ap.pagerEl&&ap.pagerEl.remove(),a(".bx-caption",this).remove(),ap.controls.autoEl&&ap.controls.autoEl.remove(),clearInterval(ap.interval),ap.settings.responsive&&a(window).unbind("resize",ae))
},am.reloadSlider=function(d){void 0!=d&&(aq=d),am.destroySlider(),ay()
},ay(),this
}
}($);
var VideoSlider=function(){this.init=function(){$(".vid-slider-horizontal .slidee").bxSlider({infiniteLoop:false,hideControlOnEnd:true,pager:false,slideWidth:183,moveSlides:4,maxSlides:5,slideMargin:5});
$(".vid-slider .item").click(function(){window.location=$(this).find(".thumbnail").attr("queryTitle")
})
}
};
var VideoSlider=new VideoSlider();
$(function(){VideoSlider.init()
});
$(function(){$(".play-btn").click(function(){var a=$(this).next();
a.attr("controls","controls");
$(".play-btn").each(function(){$(this).next()[0].pause()
});
a[0].play();
$(this).hide()
});
$(".vid-strip-link").click(function(){$(this).parent().parent().find(".play-btn").click()
});
if($(".vid-strip-wrapper").parents(".col2-75-25").length>0||$(".vid-strip-wrapper").parents(".col2-25-75").length>0){$("#videoStrip4").remove()
}$(".vid-strip video").on("volumechange",function(a){if(a.target.muted||!(a.target.volume>0)){$(a.target).closest(".video-js").find(".vjs-control-bar").addClass("vjs-vol-0")
}else{$(a.target).closest(".video-js").find(".vjs-control-bar").removeClass("vjs-vol-0")
}})
});
var Mekon=function(){var mekonRestfulBase="https://documentation.altera.com/";
function UUID(){var i;
var s=[];
var hexDigits="0123456789ABCDEF";
for(i=0;
i<32;
i++){s[i]=hexDigits.substr(Math.floor(Math.random()*16),1)
}s[12]="4";
s[16]=hexDigits.substr((s[16]&3)|8,1);
return s.join("")
}function getCookie(Name){var value="";
var re=new RegExp(Name+"=[^;]+","i");
if(document.cookie.match(re)){value=document.cookie.match(re)[0].split("=")[1]
}return value
}function setCookie(name,value){document.cookie=name+"="+value
}function onResponse(data,textStatus,jqXHR){var params=this;
var resp=jqXHR.responseText;
st=resp.indexOf("<sessionId>");
en=resp.indexOf("</sessionId>");
if(en<1){st=resp.indexOf('essionId":"');
en=resp.indexOf('","authenticated":')
}var skey=resp.substring(st+11,en);
st=resp.indexOf("<silo>");
en=resp.indexOf("</silo>");
if(en<1){st=resp.indexOf('ilo":"');
en=resp.indexOf('","nickname')
}if(en>1){var silo=resp.substring(st+6,en)
}setCookie("skey",skey,1);
setCookie("silo",silo);
if(params.method="getDitaTopic"){getDitaTopic(params)
}}function getDitaTopic(params){if(!params.selector){return
}var url=mekonRestfulBase+"NotusCloudApi/resources/dita/topic/"+params.pubId+"/"+params.topicId;
$.ajax({url:url+"?uuid="+UUID(),type:"GET",context:params,data:{format:"html"},datatype:"xml",success:function(data,textStatus,jqXHR){var params=this;
var mekonContainer=$(params.selector);
var beg=jqXHR.responseText.indexOf("<content>");
var end=jqXHR.responseText.lastIndexOf("</content>");
if(beg!=-1&&end!=-1){beg+="<content>".length;
var text=jqXHR.responseText.substr(beg,end-beg);
mekonContainer.empty();
mekonContainer.append(text);
mekonContainer.find("img").each(function(){var imgSrc=$(this).attr("src");
$(this).attr("src",mekonRestfulBase+imgSrc.substring(imgSrc.indexOf("NotusCloudApi")))
});
mekonContainer.find("embed").each(function(){var imgPath=$(this).attr("src");
$(this).attr("src",mekonRestfulBase+imgPath.substring(imgPath.indexOf("NotusCloudApi")))
});
mekonContainer.find("object").each(function(){var imgData=$(this).attr("data");
$(this).attr("data",mekonRestfulBase+imgData.substring(imgData.indexOf("NotusCloudApi")))
});
CQ.shared.HTTP.post(params.currentNode,function(options,success,response){if(!success){console.log("Could not modify property cacheContent")
}},{cacheContent:mekonContainer.html()});
getDitaMap(params)
}else{var errorWrapper=$("<h4></h4>");
errorWrapper.text("Topic not found. Please try another Topic ID");
mekonContainer.append(errorWrapper)
}},error:function(jqXHR){var params=this;
var mekonContainer=$(params.selector);
mekonContainer.empty();
var url=CQ.shared.HTTP.noCaching(params.currentNode+".infinity.json");
var cacheContent=CQ.shared.HTTP.eval(url)["cacheContent"];
mekonContainer.append(cacheContent);
var respText=jqXHR.responseText.replace('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',"");
console.log("[NotusCloudApi/resources/dita/topic/"+params.pubId+"/"+params.topicId+"] status: "+jqXHR.status+" "+jqXHR.statusText+"\n\n"+respText)
},headers:{skey:getCookie("skey")}})
}function getDitaMap(params){if(!params.selector){return
}var url=mekonRestfulBase+"NotusCloudApi/resources/dita/map/"+params.pubId;
$.ajax({url:url+"?uuid="+UUID(),type:"GET",context:params,data:{format:"dita"},datatype:"xml",success:function(data,textStatus,jqXHR){var params=this;
var mekonContainer=$(params.selector);
var beg=jqXHR.responseText.indexOf("<content>");
var end=jqXHR.responseText.lastIndexOf("</content>");
if(beg!=-1&&end!=-1){beg+="<content>".length;
var text=jqXHR.responseText.substr(beg,end-beg);
var $tempText=$(text);
var url=CQ.shared.HTTP.noCaching(params.currentPage+"/jcr:content.1.json");
var pageNode=CQ.shared.HTTP.eval(url);
var tags=[];
if(typeof pageNode["cq:tags"]!=="undefined"){tags=pageNode["cq:tags"]
}$tempText.find("keyword").each(function(){if($(this).text()!=""){var tag="altera:"+$(this).text();
tag=tag.replace(/ /g,"-");
tags.push(tag)
}});
CQ.shared.HTTP.post(params.currentPage+"/jcr:content",function(options,success,response){if(!success){console.log("Could not modify property cq:tags")
}},{"cq:tags":tags})
}else{var errorWrapper=$("<h4></h4>");
errorWrapper.text("Publication ID not found. Please try another Publication ID");
mekonContainer.append(errorWrapper)
}},error:function(jqXHR){var params=this;
var respText=jqXHR.responseText.replace('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',"");
console.log("[NotusCloudApi/resources/dita/map/"+params.pubId+"] status: "+jqXHR.status+" "+jqXHR.statusText+"\n\n"+respText)
},headers:{skey:getCookie("skey")}})
}this.makeRequestWhoami=function(params){var silo="altera_t";
if(getCookie("skey")==""){$.ajax({url:mekonRestfulBase+"NotusCloudApi/resources/user/whoami?uuid="+UUID(),type:"GET",data:{silo:silo},context:params,datatype:"xml",success:onResponse,error:function(jqXHR){var params=this;
var mekonContainer=$(params.selector);
mekonContainer.empty();
var url=CQ.shared.HTTP.noCaching(params.currentNode+".infinity.json");
var cacheContent=CQ.shared.HTTP.eval(url)["cacheContent"];
mekonContainer.append(cacheContent);
var respText=jqXHR.responseText.replace('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',"");
console.log("[NotusCloudApi/resources/user/whoami] status: "+jqXHR.status+" "+jqXHR.statusText+"\n\n"+respText)
}})
}else{if(params.method="getDitaTopic"){getDitaTopic(params)
}}};
this.init=function(){}
};
var Mekon=new Mekon();
$(function(){Mekon.init()
});
setColumns=function(field,record,path){var panel=field.findParentByType("panel");
var rootPath=panel.findByType("textfield")[0];
var rootLabel=panel.findByType("textfield")[1];
var linkLabel1=panel.findByType("textfield")[2];
var linkPath1=panel.findByType("textfield")[3];
var linkLabel2=panel.findByType("textfield")[4];
var linkPath2=panel.findByType("textfield")[5];
var linkLabel3=panel.findByType("textfield")[6];
var linkPath3=panel.findByType("textfield")[7];
var linkLabel4=panel.findByType("textfield")[8];
var linkPath4=panel.findByType("textfield")[9];
var linkLabel5=panel.findByType("textfield")[10];
var linkPath5=panel.findByType("textfield")[11];
var MAX_COUNTNODE=5;
var show=field.getValue()[0];
if(show){if(rootPath.getValue()!=""){rootLabel.show();
linkLabel1.show();
linkPath1.show();
linkLabel2.show();
linkPath2.show();
linkLabel3.show();
linkPath3.show();
linkLabel4.show();
linkPath4.show();
linkLabel5.show();
linkPath5.show();
rootLabel.setValue("");
linkLabel1.setValue("");
linkPath1.setValue("");
linkLabel2.setValue("");
linkPath2.setValue("");
linkLabel3.setValue("");
linkPath3.setValue("");
linkLabel4.setValue("");
linkPath4.setValue("");
linkLabel5.setValue("");
linkPath5.setValue("");
var url=CQ.HTTP.noCaching(rootPath.getValue()+".infinity.json");
var childPages=CQ.HTTP.eval(url);
var i=1;
if(url.indexOf("solutions.infinity.json")>-1||url.indexOf("products.infinity.json")>-1||url.indexOf("index.infinity.json")>-1){url=url.replace("infinity","2");
childPages=CQ.HTTP.eval(url)
}rootLabel.setValue(childPages["jcr:content"]["jcr:title"]);
for(var name in childPages){if(childPages[name]["jcr:content"]){var child={};
child.text=childPages[name]["jcr:content"]["jcr:title"];
child.value=rootPath.getValue()+"/"+name;
if(i==1){linkLabel1.setValue(child.text);
linkPath1.setValue(child.value)
}else{if(i==2){linkLabel2.setValue(child.text);
linkPath2.setValue(child.value)
}else{if(i==3){linkLabel3.setValue(child.text);
linkPath3.setValue(child.value)
}else{if(i==4){linkLabel4.setValue(child.text);
linkPath4.setValue(child.value)
}else{if(i==5){linkLabel5.setValue(child.text);
linkPath5.setValue(child.value)
}}}}}i++
}}}else{field.setValue(false);
CQ.Ext.Msg.alert("Validation Error","Please select a link!")
}}else{rootLabel.hide();
linkLabel1.hide();
linkPath1.hide();
linkLabel2.hide();
linkPath2.hide();
linkLabel3.hide();
linkPath3.hide();
linkLabel4.hide();
linkPath4.hide();
linkLabel5.hide();
linkPath5.hide()
}};
var FourCardNav=function(){this.init=function(){$("div.image_on_top").hover(function(){$(this).find(".stripe").addClass("stripe_hover")
},function(){$(this).find(".stripe").removeClass("stripe_hover")
});
$("div.image_on_bottom").hover(function(){$(this).find(".stripe").addClass("stripe_hover")
},function(){$(this).find(".stripe").removeClass("stripe_hover")
})
}
};
var four_card_init=new FourCardNav();
$(function(){four_card_init.init()
});
(function(){var a=function(){this.initEmbedRelVideos=function(){$(".ft-vid-relatedvideo").each(function(){var c="";
var f="";
var e=$($(this).find(".hidEmbed").val());
if(e.length>0){var b=e.attr("src");
if(b.indexOf("vimeo.com")>=0){var h=b.split("?")[0].split("/");
var d=h[h.length-1];
$.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+d+".json",dataType:"json",async:false,success:function(j){c=j[0].thumbnail_medium;
f=j[0].title
},error:function(j){alert("GET Vimeo API Error:"+j.statusText)
}})
}else{if(b.indexOf("youtube.com")>=0){var h=b.split("/");
var g=h[h.length-1];
c="http://img.youtube.com/vi/"+g+"/hqdefault.jpg";
$(this).find(".ft-vid-reltext").data("youtubeId",g)
}}$(this).find(".ft-vid-relimage img").attr("src",c);
$(this).find(".ft-vid-reltext span").text(f)
}})
};
this.init=function(){$(".ft-vid-relatedvideo").click(function(){var p=$(this).find(".ft-vid-relimage").attr("path");
var g=$(this).find(".ft-vid-relimage img").attr("src");
var r=$(this).find(".ft-vid-reltext span").text();
var h=$(this).parent().parent().parent().find(".ft-vid-video");
var f="";
var n="";
var o=$(this).parent().parent().parent().find(".ft-vid-title span").text();
var d="";
if(h.find(".embed").length>0){var k=h.find(".embed iframe");
d=k[0].outerHTML;
var e=k.attr("src");
if(e.indexOf("vimeo.com")>=0){var m=e.split("?")[0].split("/");
var q=m[m.length-1];
$.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+q+".json",dataType:"json",async:false,success:function(s){n=s[0].thumbnail_medium;
o=s[0].title
},error:function(s){alert("GET Vimeo API Error:"+s.statusText)
}})
}else{if(e.indexOf("youtube.com")>=0){var m=e.split("/");
var b=m[m.length-1];
n="http://img.youtube.com/vi/"+b+"/hqdefault.jpg"
}}if(p!=""){$(this).parent().parent().parent().find(".ft-vid-title span").text(r);
h.find(".embed").remove();
var c=$('<video poster="'+g+'" width="420" height="236" class="video-js vjs-default-skin vjs-big-play-centered" preload="none" data-setup="{}" controls></video>');
var l=$('<source src="'+p+'" type="video/mp4"></source>');
c.append(l);
h.append(c);
c[0].load();
videojs(c[0],{},function(){});
AlteraVideo.resize(c);
AlteraVideo.handleMute(c)
}else{$(this).parent().parent().parent().find(".ft-vid-title span").text(r);
h.find(".embed").empty();
h.find(".embed").append($(this).find(".hidEmbed").val());
h.find("iframe").attr("width","420px");
h.find("iframe").attr("height","236px")
}}else{f=h.find("video source").attr("src");
n=h.find("video").attr("poster");
if(p!=""){$(this).parent().parent().parent().find(".ft-vid-title span").text(r);
h.find("video").attr("src",p);
h.find("source").attr("src",p);
h.find("video").attr("poster",g);
h.find(".vjs-poster").css("background-image","url("+g+")");
h.find("video")[0].load();
AlteraVideo.resize(h.find("video"));
AlteraVideo.handleMute(h.find("video"))
}else{$(this).parent().parent().parent().find(".ft-vid-title span").text(r);
var d=$(this).find(".hidEmbed").val();
h.find("div.video-js").remove();
var j=$('<div class="embed"></div>');
h.append(j);
if(d!=""){j.append(d)
}h.find("iframe").attr("width","420px");
h.find("iframe").attr("height","236px")
}}$(this).find(".hidEmbed").val(d);
$(this).find(".ft-vid-relimage").attr("path",f);
$(this).find(".ft-vid-relimage img").attr("src",n);
$(this).find(".ft-vid-reltext span").text(o)
});
this.initEmbedRelVideos()
};
this.updateRelTitle=function(){$(".ft-vid-reltext").each(function(){var b=$(this).data("youtubeId");
if(typeof b!=="undefined"){$.getJSON("https://gdata.youtube.com/feeds/api/videos/"+b+"?v=2&alt=json-in-script&callback=?",function(c){$(".ft-vid-reltext").each(function(){var d=$(this).data("youtubeId");
if(d==c.entry.media$group.yt$videoid.$t){$(this).find("span").text(c.entry.title.$t)
}})
})
}})
}
};
var a=new a();
$(function(){a.init();
a.updateRelTitle()
})
}());
setFieldset=function(f){var c=f.findParentByType("panel");
var e=c.findByType("dialogfieldset")[0];
var b=c.findByType("dialogfieldset")[1];
var g=c.findByType("dialogfieldset")[2];
var a=c.findByType("dialogfieldset")[3];
var h=c.findByType("dialogfieldset")[4];
var d=CQ.HTTP.noCaching(CQ.HTTP.getPath());
if(d.indexOf("/arria")>=0){e.hide()
}else{if(d.indexOf("/cyclone")>=0){b.hide()
}else{if(d.indexOf("/max")>=0){g.hide()
}else{if(d.indexOf("/stratix")>=0){a.hide()
}else{if(d.indexOf("/socs")>=0){h.hide()
}}}}}};
checkProducts=function(e){var b=e.findParentByType("panel");
var c=b.findByType("selection")[0];
var a=b.findByType("selection")[1];
var j=b.findByType("selection")[2];
var h=b.findByType("selection")[3];
var g=b.findByType("selection")[4];
var f=b.findByType("selection")[5];
var d=0;
if(c.getValue()!=""){d=d+c.getValue().toString().split(",").length
}if(a.getValue()!=""){d=d+a.getValue().toString().split(",").length
}if(j.getValue()!=""){d=d+j.getValue().toString().split(",").length
}if(h.getValue()!=""){d=d+h.getValue().toString().split(",").length
}if(g.getValue()!=""){d=d+g.getValue().toString().split(",").length
}if(f.getValue()!=""){d=d+f.getValue().toString().split(",").length
}if(d>5){CQ.Ext.Msg.alert("Validation Error","Max number of products allowed is 5!");
return false
}else{return true
}};
var TableGenerator=function(){this.init=function(){};
this.tableAfterEdit=function(){this.refreshSelf()
};
this.modifySearchBox=function(a,c){var b=$(a);
b.wrap('<div class="search-input"></div>');
b.after('<button type="reset" class="input-clear"></button><svg class="search-icon svg-sprite pull-right"><use class="search-icon" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/etc/clientlibs/altera-www/global/img/icons/icon-sprites.svg#search-icon"></use></svg>');
b.attr("placeholder",c);
b.attr({placeholder:c,required:true})
};
if($.fn.dataTableExt){$.extend($.fn.dataTableExt.oStdClasses,{sFilterInput:"search-field",sPaging:"pagination "})
}this.initDataTables=function(n,a,t,c,g){Granite.I18n.setLocale(fpga.utils.region.abbr());
var j=Granite.I18n.get("First"),k=Granite.I18n.get("Last"),q=Granite.I18n.get("Next"),p=Granite.I18n.get("Prev"),l=Granite.I18n.get("noData"),e=Granite.I18n.get("Showing"),d=Granite.I18n.get("Filtered From"),h=Granite.I18n.get("Entries"),u=Granite.I18n.get("total"),f=Granite.I18n.get("noEntries"),b='<"top clearfix"fli>rt<"table-controls-bottom"p><"clear">',o=[[0,"asc"]],s=[];
$.fn.DataTable.ext.pager.numbers_length=7;
if(a){b="B"+b
}if(c){o=[]
}if(g){s=g
}var m=$(n).DataTable({buttons:["excel"],order:o,pageLength:10,language:{url:"",aria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},search:"",paginate:{first:"<<",last:">>",next:">",previous:"<"},emptyTable:l,info:e+" _START_ - _END_ / _TOTAL_ "+h,infoEmpty:e+" 0 - 0 / 0 "+h,infoFiltered:"("+d+" _MAX_ "+u+" "+h+")",zeroRecords:f},displayLength:20,columnDefs:s,dom:b,buttons:[{text:"Download",extend:"csvHtml5",className:"export-csv",title:t,extension:".csv"}],paginationType:"full_numbers"}),r;
$(n).wrap('<div class="dataTables_scrollHead"></div>');
setTimeout(function(){r=$(".input-clear");
r.on("click",function(v){m.search("").columns().search("").draw()
})
},0);
return m
}
};
TableGenerator=new TableGenerator();
var Designflow=function(){this.init=function(){$(".designflow").each(function(){if($(this).find("tr:first > th").is("[colspan]")){$(this).find("tr:first").next().find("th.minor").css("border","0px");
var a=0;
var c=0;
var b=0;
$(this).find("tr:first > th[colspan]").each(function(){c=parseInt($(this).attr("colspan"));
b+=a;
var d=$(this).parent().next().find("th.minor");
d.eq(b).css("border-left","solid 2px #fff");
if(b+c-1!=d.length-1){d.eq(b+c-1).css("border-right","solid 2px #fff")
}a=c
})
}})
}
};
var Designflow=new Designflow();
$(function(){Designflow.init()
});
var TableNavigation=function(){this.init=function(){};
this.tableAfterEdit=function(){this.refreshSelf()
};
this.modifySearchBox=function(a,b){$(a).after('<span class="search-icon"></span>');
$(a).attr("placeholder",b)
};
this.exportTableToCSV=function(j,a){var h=j.find("tr");
var b=String.fromCharCode(11);
var g=String.fromCharCode(0);
var e='","';
var c='"\r\n"';
var d='"'+h.map(function(m,n){var k=$(n);
var l=[];
if(k.find("th").length>0){l=k.find("th")
}else{l=k.find("td")
}return l.map(function(p,o){var q=$(o),r=q.text();
return r.replace('"','""')
}).get().join(b)
}).get().join(g).split(g).join(c).split(b).join(e)+'"';
var f="data:application/csv;charset=utf-8,"+encodeURIComponent(d);
$(this).attr({download:a,href:f,target:"_blank"})
};
this.initDataTables=function(a,e,b,c){var d=$(a+" thead");
if(d.length==0){d=$("<thead></thead>").prependTo($(a))
}$(a).find("tr").eq(0).appendTo(d);
$.fn.dataTableExt.oPagination.iFullNumbersShowPages=7;
$(a).dataTable({aaSorting:[[0,"asc"]],bSort:c,oLanguage:{sUrl:"",oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:b.first,sLast:b.last,sNext:b.next,sPrevious:b.prev},sEmptyTable:b.noData,sInfo:b.showing+" _START_ - _END_ / _TOTAL_ "+b.entries,sInfoEmpty:b.showing+" 0 - 0 / 0 "+b.entries,sInfoFiltered:"("+b.filteredFrom+" _MAX_ "+b.total+" "+b.entries+")",sInfoPostFix:"",sInfoThousands:",",sZeroRecords:b.noEntries},iDisplayLength:20,aoColumnDefs:e,sDom:'<"H"fpi>t<"F"ip>',sPaginationType:"full_numbers"})
}
};
var TableNavigation=new TableNavigation();
window.Modernizr=(function(m,r,g){var c="2.8.3",k={},o=true,A=r.documentElement,B="modernizr",y=r.createElement(B),n=y.style,d,u={}.toString,D={svg:"http://www.w3.org/2000/svg"},h={},b={},s={},x=[],t=x.slice,a,w=function(M,O,G,N){var F,L,I,J,E=r.createElement("div"),K=r.body,H=K||r.createElement("body");
if(parseInt(G,10)){while(G--){I=r.createElement("div");
I.id=N?N[G]:B+(G+1);
E.appendChild(I)
}}F=["&#173;",'<style id="s',B,'">',M,"</style>"].join("");
E.id=B;
(K?E:H).innerHTML+=F;
H.appendChild(E);
if(!K){H.style.background="";
H.style.overflow="hidden";
J=A.style.overflow;
A.style.overflow="hidden";
A.appendChild(H)
}L=O(E,M);
if(!K){H.parentNode.removeChild(H);
A.style.overflow=J
}else{E.parentNode.removeChild(E)
}return !!L
},q=({}).hasOwnProperty,z;
if(!j(q,"undefined")&&!j(q.call,"undefined")){z=function(E,F){return q.call(E,F)
}
}else{z=function(E,F){return((F in E)&&j(E.constructor.prototype[F],"undefined"))
}
}if(!Function.prototype.bind){Function.prototype.bind=function C(G){var H=this;
if(typeof H!="function"){throw new TypeError()
}var E=t.call(arguments,1),F=function(){if(this instanceof F){var K=function(){};
K.prototype=H.prototype;
var J=new K();
var I=H.apply(J,E.concat(t.call(arguments)));
if(Object(I)===I){return I
}return J
}else{return H.apply(G,E.concat(t.call(arguments)))
}};
return F
}
}function p(E){n.cssText=E
}function f(F,E){return p(prefixes.join(F+";")+(E||""))
}function j(F,E){return typeof F===E
}function l(F,E){return !!~(""+F).indexOf(E)
}function v(F,I,H){for(var E in F){var G=I[F[E]];
if(G!==g){if(H===false){return F[E]
}if(j(G,"function")){return G.bind(H||I)
}return G
}}return false
}h.canvas=function(){var E=r.createElement("canvas");
return !!(E.getContext&&E.getContext("2d"))
};
h.canvastext=function(){return !!(k.canvas&&j(r.createElement("canvas").getContext("2d").fillText,"function"))
};
h.webgl=function(){return !!m.WebGLRenderingContext
};
h.fontface=function(){var E;
w('@font-face {font-family:"font";src:url("https://")}',function(I,J){var H=r.getElementById("smodernizr"),F=H.sheet||H.styleSheet,G=F?(F.cssRules&&F.cssRules[0]?F.cssRules[0].cssText:F.cssText||""):"";
E=/src/i.test(G)&&G.indexOf(J.split(" ")[0])===0
});
return E
};
h.video=function(){var F=r.createElement("video"),E=false;
try{if(E=!!F.canPlayType){E=new Boolean(E);
E.ogg=F.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");
E.h264=F.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");
E.webm=F.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")
}}catch(G){}return E
};
h.svg=function(){return !!r.createElementNS&&!!r.createElementNS(D.svg,"svg").createSVGRect
};
h.inlinesvg=function(){var E=r.createElement("div");
E.innerHTML="<svg/>";
return(E.firstChild&&E.firstChild.namespaceURI)==D.svg
};
for(var e in h){if(z(h,e)){a=e.toLowerCase();
k[a]=h[e]();
x.push((k[a]?"":"no-")+a)
}}k.addTest=function(F,G){if(typeof F=="object"){for(var E in F){if(z(F,E)){k.addTest(E,F[E])
}}}else{F=F.toLowerCase();
if(k[F]!==g){return k
}G=typeof G=="function"?G():G;
if(typeof o!=="undefined"&&o){A.className+=" "+(G?"":"no-")+F
}k[F]=G
}return k
};
p("");
y=d=null;
(function(O,Q){var K="3.7.0";
var H=O.html5||{};
var L=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
var G=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
var U;
var M="_html5shiv";
var E=0;
var S={};
var I;
(function(){try{var X=Q.createElement("a");
X.innerHTML="<xyz></xyz>";
U=("hidden" in X);
I=X.childNodes.length==1||(function(){(Q.createElement)("a");
var Z=Q.createDocumentFragment();
return(typeof Z.cloneNode=="undefined"||typeof Z.createDocumentFragment=="undefined"||typeof Z.createElement=="undefined")
}())
}catch(Y){U=true;
I=true
}}());
function J(X,Z){var aa=X.createElement("p"),Y=X.getElementsByTagName("head")[0]||X.documentElement;
aa.innerHTML="x<style>"+Z+"</style>";
return Y.insertBefore(aa.lastChild,Y.firstChild)
}function P(){var X=N.elements;
return typeof X=="string"?X.split(" "):X
}function T(X){var Y=S[X[M]];
if(!Y){Y={};
E++;
X[M]=E;
S[E]=Y
}return Y
}function R(aa,X,Z){if(!X){X=Q
}if(I){return X.createElement(aa)
}if(!Z){Z=T(X)
}var Y;
if(Z.cache[aa]){Y=Z.cache[aa].cloneNode()
}else{if(G.test(aa)){Y=(Z.cache[aa]=Z.createElem(aa)).cloneNode()
}else{Y=Z.createElem(aa)
}}return Y.canHaveChildren&&!L.test(aa)&&!Y.tagUrn?Z.frag.appendChild(Y):Y
}function V(Z,ab){if(!Z){Z=Q
}if(I){return Z.createDocumentFragment()
}ab=ab||T(Z);
var ac=ab.frag.cloneNode(),aa=0,Y=P(),X=Y.length;
for(;
aa<X;
aa++){ac.createElement(Y[aa])
}return ac
}function W(X,Y){if(!Y.cache){Y.cache={};
Y.createElem=X.createElement;
Y.createFrag=X.createDocumentFragment;
Y.frag=Y.createFrag()
}X.createElement=function(Z){if(!N.shivMethods){return Y.createElem(Z)
}return R(Z,X,Y)
};
X.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+P().join().replace(/[\w\-]+/g,function(Z){Y.createElem(Z);
Y.frag.createElement(Z);
return'c("'+Z+'")'
})+");return n}")(N,Y.frag)
}function F(X){if(!X){X=Q
}var Y=T(X);
if(N.shivCSS&&!U&&!Y.hasCSS){Y.hasCSS=!!J(X,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")
}if(!I){W(X,Y)
}return X
}var N={elements:H.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:K,shivCSS:(H.shivCSS!==false),supportsUnknownElements:I,shivMethods:(H.shivMethods!==false),type:"default",shivDocument:F,createElement:R,createDocumentFragment:V};
O.html5=N;
F(Q)
}(this,r));
k._version=c;
k.testStyles=w;
A.className=A.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(o?" js "+x.join(" "):"");
return k
})(this,this.document);
(function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)
}function Z(b){return"string"==typeof b
}function Y(){}function X(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b
}function W(){var b=O.shift();
M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)
},0):(b(),W()):M=0
}function V(w,v,t,s,q,p,n){function m(a){if(!g&&X(h.readyState)&&(x.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=w&&R(function(){I.removeChild(h)
},50);
for(var c in D[v]){D[v].hasOwnProperty(c)&&D[v][c].onload()
}}}var n=n||L.errorTimeout,h=ac.createElement(w),g=0,b=0,x={t:t,s:v,e:q,a:p,x:n};
1===D[v]&&(b=1,D[v]=[]),"object"==w?h.data=v:(h.src=v,h.type=w),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)
},O.splice(s,0,x),"img"!=w&&(b||2===D[v]?(I.insertBefore(h,J?null:Q),R(m,n)):D[v].push(h))
}function U(g,e,k,j,h){return M=0,e=e||"j",Z(g)?V("c"==e?G:H,g,e,this.i++,k,j,h):(O.splice(this.i++,0,g),1==O.length&&W()),this
}function T(){var b=L;
return b.loader={load:U,i:0},b
}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)
},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d
}},N,L;
L=function(e){function c(j){var j=j.split("!"),h=E.length,r=j.pop(),q=j.length,r={url:r,origUrl:r,prefixes:j},p,o,l;
for(o=0;
o<q;
o++){l=j[o].split("="),(p=C[l.shift()])&&(r=p(r,l))
}for(o=0;
o<h;
o++){r=E[o](r)
}return r
}function n(b,s,r,q,p){var o=c(b),l=o.autoCallback;
o.url.split(".").pop().split("?").shift(),o.bypass||(s&&(s=aa(s)?s:s[b]||s[q]||s[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,s,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ab,o.noexec,o.attrs,o.timeout),(aa(s)||aa(l))&&r.load(function(){T(),s&&s(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2
})))
}function m(w,v){function u(b,h){if(b){if(Z(b)){h||(r=function(){var j=[].slice.call(arguments);
q.apply(this,j),p()
}),n(b,r,v,0,t)
}else{if(Object(b)===b){for(g in o=function(){var a=0,j;
for(j in b){b.hasOwnProperty(j)&&a++
}return a
}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(aa(r)?r=function(){var j=[].slice.call(arguments);
q.apply(this,j),p()
}:r[g]=function(j){return function(){var a=[].slice.call(arguments);
j&&j.apply(this,a),p()
}
}(q[g])),n(b[g],r,v,g,t))
}}}}else{!h&&p()
}}var t=!!w.test,s=w.load||w.both,r=w.callback||Y,q=r,p=w.complete||Y,o,g;
u(t?w.yep:w.nope,!!s),s&&u(s)
}var k,f,d=this.yepnope.loader;
if(Z(e)){n(e,0,d,0)
}else{if(F(e)){for(k=0;
k<e.length;
k++){f=e[k],Z(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)
}}else{Object(e)===e&&m(e,d)
}}},L.addPrefix=function(d,c){C[d]=c
},L.addFilter=function(b){E.push(b)
},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"
},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;
g.src=r;
for(b in p){g.setAttribute(b,p[b])
}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)
},R(function(){f||(f=1,q(1))
},n),m?g.onload():Q.parentNode.insertBefore(g,Q)
},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;
l.href=b,l.rel="stylesheet",l.type="text/css";
for(f in m){l.setAttribute(f,m[f])
}k||(Q.parentNode.insertBefore(l,Q),R(n,0))
}
})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))
};
var compatibleAlert=false;
var getRandomInt=function(b,a){return Math.floor(Math.random()*(a-b+1))+b
};
var callFromCompatibleAlert=function(){toggleOverlay();
if(compatibleAlert){checkDiplayOverlay();
compatibleAlert=false
}};
var checkDiplayOverlay=function(c,a){var b=0;
if(c==null){c="Altera-Overlay-Cookies-Compability";
b=1500
}if(a==null){a=getCookie(c)
}setTimeout(function(){if(document.getElementById("publish_mode")!=null){if((document.getElementById("popup_instance_mode").value=="publish")||(document.getElementById("popup_instance_mode").value=="both")){checkCookies(c,a,0)
}}else{if(document.getElementById("author_mode")!=null){if((document.getElementById("popup_instance_mode").value=="author")||(document.getElementById("popup_instance_mode").value=="both")){checkCookies(c,a,0)
}}}},b)
};
var toggleOverlay=function(o,a,p,n){var h=document.getElementById("overlay");
var g=document.getElementById("specialBox");
h.style.opacity=0.8;
if(h.style.display=="block"){h.style.display="none";
g.style.display="none"
}else{h.style.display="block";
g.style.display="block"
}var q=document.getElementById("popupTitle");
var e=q.getElementsByTagName("h2");
if(n==0){e[0].innerHTML=document.getElementById("popup_title").value;
document.getElementById("popupContent").innerHTML=document.getElementById("popup_content").value;
var c=document.getElementById("button_list").value;
if(c!=null||c!=""){var m=document.getElementById("popup_buttons");
while(m.firstChild){m.removeChild(m.firstChild)
}var l=JSON.parse(c);
for(var f in l){if(l[f]!=null&&typeof l[f].title!="undefined"){var b=document.createElement("a");
if(l[f].url!=""){if(l[f].url.indexOf("http")>-1){b.target="_blank";
b.href=l[f].url
}else{b.href=(l[f].url+".html")
}}else{b.setAttribute("onmousedown","toggleOverlay()");
b.href="#"
}var d=document.createTextNode(l[f].title);
b.appendChild(d);
m.appendChild(b)
}}}}else{if(n==1){e[0].innerHTML="Browser Compatibility Check";
document.getElementById("popupContent").innerHTML="Your browser is not fully compatible with HTML5.";
var j=document.getElementById("popup_buttons");
var b=document.createElement("a");
b.setAttribute("onmousedown","callFromCompatibleAlert()");
b.href="#";
var d=document.createTextNode("I got it!");
b.appendChild(d);
j.appendChild(b)
}}if(p!=null&&p!=""){insertCookie(o,a,p,n)
}};
var checkCookies=function(m,d,k){var o=(k==0)?document.getElementById("popup_title").value:"CompatibleAlert";
o=o.replace(/(?:\r\n|\r|\n|\s)/g,"");
var b=d;
var e=new Date(document.getElementById("popup_expiry_date").value);
var l=new Date();
var p=false;
if(k==0){if(l>e){p=true
}}if(!p){var j=(k==0)?document.getElementById("popup_frequency").value:"weekly";
var h;
switch(j){case"daily":h=new Date();
h.setTime(l.getTime()+(1*24*60*60*1000));
break;
case"weekly":h=new Date();
h.setTime(l.getTime()+(7*24*60*60*1000));
break;
case"monthly":h=new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate();
break;
case"randomly":h=-1;
break
}var q=0;
if(j=="randomly"){q=getRandomInt(0,50);
console.log("random: "+q)
}if(q%2==0){if(h==-1){toggleOverlay(m,b,"",k)
}else{var r=true;
if(b!=null&&b!=""){if(b.indexOf(o)>-1){var g=b.split("&&");
for(var n=0;
n<g.length;
n++){if(g[n].indexOf(o)>-1){var c=g[n].split("!@");
var f=new Date(c[1]);
if(f>l){r=false
}}}}}if(r){toggleOverlay(m,b,o+"!@"+h.toUTCString(),k)
}else{if(k==1){checkDiplayOverlay(m,b)
}}}}}else{remove_cookie_record(m,b,o)
}};
var remove_cookie_record=function(f,d,e){if(d!=null&&d!=""){var c=d.split("&&");
for(var b=0;
b<c.length;
b++){if(c[b].indexOf(e)>-1){if(b==0){d=d.replace(c[b]+"&&","")
}else{d=d.replace("&&"+c[b],"")
}}}}if(!d){document.cookie=f+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}else{insertCookie(f,d)
}};
var insertCookie=function(g,c,e,d){var a=new Date();
var b=new Date();
b.setFullYear(a.getFullYear()+1);
var f;
if(e!=null&&e!=""){if(c!=null&&c!=""){f=c+"&&"+e
}else{f=e
}}document.cookie=g+"="+((f)?f:c)+((b)?"; expires="+b.toUTCString():"")+("; path=/")
};
var getCookie=function(d){var c=d+"=";
var b=document.cookie.split(";");
for(var a=0;
a<b.length;
a++){var e=b[a];
while(e.charAt(0)==" "){e=e.substring(1)
}if(e.indexOf(d)!=-1){return e.substring(c.length,e.length)
}}return null
};
if(document.getElementById("specialBox")!=null){var cookieName="Altera-Overlay-Cookies-Compability";
var cookie=getCookie(cookieName);
if(!Modernizr.video){checkCookies(cookieName,cookie,1);
compatibleAlert=true
}if(!compatibleAlert){checkDiplayOverlay(cookieName,cookie)
}}function GenerateHtmlPDF(){var a=($("html").clone());
a.find("link").each(function(){$(this).attr("href",function(c,d){if(d.substr(0,1)=="/"){d="https://www.altera.com"+d;
$(this).attr("href",d)
}})
});
a.find("img").each(function(){var c=0;
$(this).attr("src",function(d,e){if(e.substr(0,1)=="/"){e="https://www.altera.com"+e;
$(this).attr("src",e)
}})
});
a.find("form, .generic-nav.content-header-nav, .generic-nav.content-header-social-nav, .primary-nav, .breadcrumb, .generic-nav.content-footer-eyebrow-nav, .generic-nav.content-footer-social-nav, .sightly-generatepdf").each(function(){$(this).remove()
});
var b=a.prop("outerHTML");
processPDF(b);
$("#divMekonPDF").html("<p>Retrieving...</p>")
}function removeElements(c,a){var b=$(c);
b.find("form").remove();
return b.html()
}function GeneratePDF(){$("#divMekonPDF").html("<p>Retrieving...</p>");
var a=window.location.pathname;
if(a.indexOf(".html")>-1){a=a.replace(".html",".xml")
}var b;
$.ajax({type:"GET",url:a,dataType:"xml",success:function(d){var f=getXmlAsString(d);
var e=$(f).find("*").filter(function(){return this.nodeName.match(/^mekon/i)
}).map(function(){return $(this).attr("cacheContent")
});
var c='<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"><head><meta http-equiv="content-type" content="text/html; charset=utf-8"/></head><body>';
$.each(e,function(g,h){c+="<p>";
c+=h.replace(/(\r\n|\n|\r)/gm,"");
c+="</p>"
}),c+="</body></html>";
processPDF(c)
},error:function(e,c,d){msg="Error status code: "+e.status+" Error details: "+d;
$("#divMekonPDF").html("<p>"+msg+"</p>")
}})
}function processPDF(b){var a="/content/www/us/en/programmable/bin/demandpdf";
var c="";
$.ajax({url:a,type:"POST",data:{mekonHtml:b},success:function(d){var e=JSON.parse(d);
if(e.exitCode=="0"){c='<a href="http://sj-itwebdev02/AHF/'+e.pdfName+'" download="'+e.pdfName+'">Click here to download '+e.pdfName+"</a>"
}else{c="Opps! Something went wrong... (Error:"+e.exitCode+")"
}$("#divMekonPDF").html("<p>"+c+"</p>")
},error:function(f,d,e){c="Error status code: "+f.status+" Error details: "+e;
$("#divMekonPDF").html("<p>"+c+"</p>")
}})
}function getXmlAsString(a){return(typeof XMLSerializer!=="undefined")?(new window.XMLSerializer()).serializeToString(a):a.xml
}function parseXML(b){if(typeof window.DOMParser!="undefined"){return(new window.DOMParser()).parseFromString(b,"text/xml")
}else{if(typeof window.ActiveXObject!="undefined"&&new window.ActiveXObject("Microsoft.XMLDOM")){var a=new window.ActiveXObject("Microsoft.XMLDOM");
a.async="false";
return a.loadXML(b)
}}}$("#backLink").click(function(c){c.preventDefault();
var e=window.location.href;
e=e.substr(e.lastIndexOf("/")+1,e.length);
String.prototype.includes=function(){return String.prototype.indexOf.apply(this,arguments)!==-1
};
if(e.includes("product-detail.html")){history.back(1)
}else{var d=document.referrer;
if(d.includes("by-search")||d.includes("by-product-wizards")||d.includes("by-parameters")||d.includes("find-ip")||d.includes("find-dev-kits")){history.back(1)
}else{var b=window.location.href;
var a=b.substr(0,b.lastIndexOf("/"));
window.location=a+"/product-selector/by-search.html"
}}});
function validate(d){var f=0;
if(d.parentNode.previousElementSibling!=null){sibling=d.parentNode.previousElementSibling;
if(sibling.childNodes!=null){var e=sibling.childNodes;
for(var c=0;
c<e.length;
c++){childNode=e[c];
var g=[0,0,0];
if(childNode.nodeName=="DIV"&&childNode.className=="col-sm-7"){var b=0;
subNodes=childNode.childNodes;
for(var a=0;
a<subNodes.length;
a++){inputNode=subNodes[a];
if(inputNode.nodeName=="INPUT"&&inputNode.type=="number"){maxValue=parseInt(inputNode.max);
value=parseInt(inputNode.value);
g[2]=maxValue!=""?maxValue:0;
g[b]=value!=""?value:0;
b++;
if(b>1&&g[1]>g[2]){inputNode.value=g[2]
}}}if(g[0]>g[1]){childNode.nextElementSibling.className="alert alert-danger";
childNode.nextElementSibling.innerHTML="<strong>Wrong input!</strong> Minimum input should be smaller than Maximum";
f++
}else{if(g[0]<0||g[1]<0){childNode.nextElementSibling.className="alert alert-danger";
childNode.nextElementSibling.innerHTML="<strong>Wrong input!</strong> Input must greater than 0";
f++
}else{if(childNode.nextElementSibling.className=="alert alert-danger"){$(childNode.nextElementSibling).toggleClass("display-none")
}}}}}}}return(f==0)
}var boxArray=["step1","step2","step3","step4","step5"];
var imgArray=["img1","img2","img3","img4","img5"];
var navbardiv=document.getElementsByClassName("navbar")[0];
function activeNavBar(a){var c=navbardiv.children;
for(var b=0;
b<c.length;
b++){if(b<=a){c[b].className="active"
}else{c[b].className=""
}}}function nextFlow(b,a){if(validate(b)){showNextBox((b.parentNode).parentNode.parentNode.id)
}else{return
}if(typeof a!="undefined"){activeNavBar(a)
}}function hideAll(){for(var a=0;
a<boxArray.length;
a++){document.getElementById(boxArray[a]).style.display="none"
}}function normalAll(){for(var a=0;
a<imgArray.length;
a++){document.getElementById(imgArray[a]).src="/etc/clientlibs/altera-www/base/css/img/icon_"+boxArray[a]+".png"
}}function showNextBox(a){hideAll();
normalAll();
if(a=="step1"){document.getElementById("step2").style.display="block";
activeNavBar(1);
document.getElementById("img2").src="/etc/clientlibs/altera-www/base/css/img/icon_step2_down.png"
}else{if(a=="step2"){document.getElementById("step3").style.display="block";
activeNavBar(2);
document.getElementById("img3").src="/etc/clientlibs/altera-www/base/css/img/icon_step3_down.png"
}else{if(a=="step3"){document.getElementById("step4").style.display="block";
activeNavBar(3);
document.getElementById("img4").src="/etc/clientlibs/altera-www/base/css/img/icon_step4_down.png"
}else{if(a=="step4"){document.getElementById("step5").style.display="block";
activeNavBar(4);
document.getElementById("img5").src="/etc/clientlibs/altera-www/base/css/img/icon_step5_down.png"
}else{if(a=="step5"){document.getElementById("step1").style.display="block";
activeNavBar(0);
document.getElementById("img1").src="/etc/clientlibs/altera-www/base/css/img/icon_step1_down.png"
}}}}}}function prevFlow(b,a){if(validate(b)){showPrevBox((b.parentNode).parentNode.parentNode.id)
}else{return
}if(typeof a!="undefined"){activeNavBar(a)
}}function showPrevBox(a){hideAll();
normalAll();
if(a=="step2"){document.getElementById("step1").style.display="block";
activeNavBar(0);
document.getElementById("img1").src="/etc/clientlibs/altera-www/base/css/img/icon_step1_down.png"
}else{if(a=="step3"){document.getElementById("step2").style.display="block";
activeNavBar(1);
document.getElementById("img2").src="/etc/clientlibs/altera-www/base/css/img/icon_step2_down.png"
}else{if(a=="step4"){document.getElementById("step3").style.display="block";
activeNavBar(2);
document.getElementById("img3").src="/etc/clientlibs/altera-www/base/css/img/icon_step3_down.png"
}else{if(a=="step5"){document.getElementById("step4").style.display="block";
activeNavBar(3);
document.getElementById("img4").src="/etc/clientlibs/altera-www/base/css/img/icon_step4_down.png"
}}}}}function disableInput(a){if(a.id=="iomin"||a.id=="iomax"){if(document.getElementById("iomin").value!=""||document.getElementById("iomax").value!=""){document.getElementById("pkgsizemin").disabled=true;
document.getElementById("pkgsizemax").disabled=true
}else{document.getElementById("pkgsizemin").disabled=false;
document.getElementById("pkgsizemax").disabled=false
}}else{if(a.id=="pkgsizemin"||a.id=="pkgsizemax"){if(document.getElementById("pkgsizemin").value!=""||document.getElementById("pkgsizemax").value!=""){document.getElementById("iomin").disabled=true;
document.getElementById("iomax").disabled=true
}else{document.getElementById("iomin").disabled=false;
document.getElementById("iomax").disabled=false
}}}}function enableFields(a){$(a).find("input").each(function(){$(this).prop("disabled",false)
})
}(function(a){a(function(){a(document).trigger("alteraResStackTable.init")
})
})(jQuery);
function glassHourStop(){jQuery("#contentloading .bg").height("100%");
jQuery("#contentloading").fadeOut(300);
jQuery("body").css("cursor","default")
}function glassHourStart(){jQuery("body").append('<div id="contentloading" style="display:none"><div id="onload" class="center"><div class="icon-loading" style="transform:scale(2);"></div></div><div class="bg"></div></div>');
jQuery("#contentloading").css({width:"100%",height:"100%",position:"fixed","z-index":"10000000",top:"0",left:"0",right:"0",bottom:"0",margin:"auto"});
jQuery("#contentloading .bg").css({background:"#000000",opacity:"0.4",width:"100%",height:"100%",position:"absolute",top:"0"});
jQuery("#contentloading>div:first").css({width:"250px",height:"75px","text-align":"center",position:"fixed",top:"0",left:"0",right:"0",bottom:"0",margin:"auto","font-size":"16px","z-index":"10",color:"#ffffff"});
jQuery("#contentloading .bg").height("100%");
jQuery("#contentloading").fadeIn(300);
jQuery("body").css("cursor","wait")
}var AlteraTable=function(){this.init=function(){$(".altera-table").each(function(){if($(this).find("tr:first > th").is("[colspan]")){$(this).find("tr:first").next().find("th.minor").css("border","0px");
var a=0;
var c=0;
var b=0;
$(this).find("tr:first > th[colspan]").each(function(){c=parseInt($(this).attr("colspan"));
b+=a;
var d=$(this).parent().next().find("th.minor");
d.eq(b).css("border-left","solid 2px #fff");
if(b+c-1!=d.length-1){d.eq(b+c-1).css("border-right","solid 2px #fff")
}a=c
})
}})
}
};
var AlteraTable=new AlteraTable();
$(function(){});
(function(){var a=function(){this.tableAfterEdit=function(){this.refreshSelf()
};
this.modifySearchBox=function(b,c){$(b).after('<span class="search-icon"></span>');
$(b).attr({placeholder:c,required:true})
};
this.exportTableToCSV=function(k,b){var j=k.find("tr");
var c=String.fromCharCode(11);
var h=String.fromCharCode(0);
var f='","';
var d='"\r\n"';
var e='"'+j.map(function(n,o){var l=$(o);
var m=[];
if(l.find("th").length>0){m=l.find("th")
}else{m=l.find("td")
}return m.map(function(q,p){var r=$(p),s=r.text();
return s.replace('"','""')
}).get().join(c)
}).get().join(h).split(h).join(d).split(c).join(f)+'"';
var g="data:application/csv;charset=utf-8,"+encodeURIComponent(e);
$(this).attr({download:b,href:g,target:"_blank"})
};
this.initDataTables=function(c,e,f,b,j){var g=$(c+" thead");
if(g.length==0){g=$("<thead></thead>").prependTo($(c))
}$(c).find("tr").eq(0).appendTo(g);
$.fn.dataTableExt.oPagination.iFullNumbersShowPages=7;
var d='<"paging-top"fip>t<"paging-bottom"ip>';
var l=20;
var h=$(c).DataTable({aaSorting:[[0,"asc"]],bSort:b,oLanguage:{sUrl:"",oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},sSearch:'<div class="search-input">_INPUT_<button type="reset" class="input-clear"></button><svg class="search-icon svg-sprite pull-right"><use class="search-icon" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/etc/clientlibs/altera-www/global/img/icons/icon-sprites.svg#search-icon" /></svg></div>',oPaginate:{sFirst:"<<",sLast:">>",sNext:">",sPrevious:"<"},sEmptyTable:f.noData,sInfo:f.showing+" _START_ - _END_ / _TOTAL_ "+f.entries,sInfoEmpty:f.showing+" 0 - 0 / 0 "+f.entries,sInfoFiltered:"("+f.filteredFrom+" _MAX_ "+f.total+" "+f.entries+")",sInfoPostFix:"",sInfoThousands:",",sZeroRecords:f.noEntries},iDisplayLength:l,aoColumnDefs:e,sDom:d,sPaginationType:"full_numbers"});
var k;
setTimeout(function(){k=$(".input-clear");
k.on("click",function(m){h.search("").columns().search("").draw()
})
},0)
}
};
fpga.AlteraTable=new a||{}
}());
$(document).ready(function(){var p=$("#dynForm").length>0||$(".dynForm");
if($("#renderField").val()==true){$("#dvSmplSrch").addClass("hide")
}var g="application/x-www-form-urlencoded";
var n=$("#overwriteTableID");
var m="",q="",l="",a=[],c="<tr>";
var b;
if(p.is(":visible")==true){if(n.val()==""){m="dynTable"
}else{m=n.val()
}f()
}function f(){a=[];
q=$("input[name=columns]").val().split(",");
l=$("input[name=keys]").val().split(",");
$.each(q,function(r,t){var s={};
s.sTitle=t;
s.className=t;
s.mData=l[r];
s.orderable=true;
a.push(s)
})
}function h(r){var t=(r.totalRecords==null)?0:r.totalRecords;
var s=r.results;
fpga.psgCloudServices.prepareDynamicDatatable(m,s,a,o.bind(this));
if(n.val()==""){d(false)
}}function o(){var r="#"+m;
if($(r).find("thead").children().length>1){$(r).find("thead").children().first().remove()
}c+="</tr>";
$(c).prependTo($(r).find("thead"))
}$(".dynSearchbtn").click(function(){e(p.serialize(),g,h)
});
$(".dynShowAllbtn").click(function(){p[0].reset();
e(p.serialize(),g,h)
});
$(".dynForm").on("dynform:preload",function(){j()
});
function j(){if($("#useDynTable").val()=="Yes"){if(n.val()==""){m="dynTable"
}else{m=n.val()
}f();
e(p.serialize(),g,h)
}}if($("#dynRender").val()=="Yes"){j()
}function k(){q=$("input[name=columns]").val().split(",");
var t=[];
var s=1,r="";
$.each(q,function(v,x){var w={},u={};
if(/(\d+)(_)(.*)/.test(x)){var y=x.match(/(\d+)(_)(.*)/);
if(r===""){r=y[1]
}else{if(r===y[1]){s++
}else{if(r!==y[1]){u[r]=s;
t.push(u);
c+="<th colspan='"+s+"'>"+r+"</th>";
s=1;
r=y[1]
}}}}else{if(r!==""){u[r]=s;
t.push(u);
c+="<th colspan='"+s+"'>"+r+"</th>";
s=1;
r=""
}s=1;
u[x]=s;
c+="<th colspan='1'></th>";
t.push(u)
}w.title=x;
w.className=x;
if(x.indexOf("disty")!=-1||x.indexOf("opn")!=-1||x.indexOf("customer")!=-1||x.indexOf("site")!=-1){w.orderable=true
}else{w.orderable=false
}a.push(w)
})
}function e(s,t,r){d(true);
fpga.psgCloudServices.getDynamicData($("#svcPath").val(),s,t,$("#svcMethod").val(),$("#svcReqType").val(),r.bind(this));
$(".collapse-title").click()
}function d(r){if(r){$("#tablewrapper").addClass("hide");
$("#onload").addClass("show")
}else{$("#tablewrapper").addClass("show");
$("#onload").addClass("hide")
}}});
fpga.psgCloudServices=(function(){var j=[];
var h='<"top"fli>rt<"table-controls-bottom"p><"clear">';
var n;
var m;
function f(p){n=p
}function k(p){m=p==true?"AUTHOR":"CLOUD"
}function c(p){j=p;
h='<"top"fliB>rt<"table-controls-bottom"Bp><"clear">'
}function o(p,r){var q=$("#"+r).DataTable();
new $.fn.dataTable.Buttons(q,{buttons:p});
console.log("appending buttons");
q.buttons(1,null).container().appendTo(q.table().container())
}function b(t,u,v,q,r,s){var p={data:u,SvcPath:t,SvcMethod:q,SvcReqType:r};
if(m){p.ServiceType=m
}$.post("/content/www/us/en/programmable/bin/cloudservice",p,function(w){if(s!==undefined){s(w)
}},"json").fail(function(w,y,x){if(s!==undefined){s(u)
}})
}function l(t,u,q,r,s){var p={data:JSON.stringify(u),SvcPath:t,SvcMethod:q,SvcReqType:r,cleanup:"bypass"};
$.post("/content/www/us/en/programmable/bin/cloudservice",p,function(v){if(s!==undefined){s(v)
}},"json").fail(function(v,x,w){if(s!==undefined){s(u)
}})
}function d(p){var q=document.createElement("textarea");
q.innerHTML=p;
return q.value
}function g(C,r,x,v){if($.fn.dataTableExt){$.extend($.fn.dataTableExt.oStdClasses,{sFilterInput:"search-field",sPaging:"pagination "})
}var t="Show <select><option value='25'>25</option><option value='50'>50</option><option value='100'>100</option><option value='-1'>All</option></select> entries /page";
var z=true;
if($("input[name=renderResults]").val()=="Yes"){t="";
z=false
}var s=null;
var A=[];
var u=$("#PreviewLink");
var y=$("#InsertLink");
var q=$("#EditLink");
var B=$("#DeleteLink");
if(u.val()!=null){A.push('<a href="'+u.val()+'">Preview</a>')
}if(y.val()!=null){A.push('<a href="'+y.val()+'">Insert</a>')
}if(q.val()!=null){A.push('<a href="'+q.val()+'">Edit</a>')
}if(B.val()!=null){A.push('<a href="'+B.val()+'">Delete</a>')
}if(A.length>0){var p=x.length;
s=[{aTargets:[p],mData:($("input[name=LinkKey]")).val(),mRender:function(D){return A.join(" | ").replace(/##placeholder##/g,D)
}}]
}var w=$("#"+C).DataTable({aoColumnDefs:s,destroy:true,deferRender:true,bProcessing:true,bServerSide:false,stateSave:true,data:r,columns:x,bFilter:z,bLengthChange:true,sPaginationType:"full_numbers",iDisplayLength:25,oLanguage:{sLengthMenu:t,sUrl:"",oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},sSearch:"Search",oPaginate:{sFirst:"<<",sLast:">>",sNext:">",sPrevious:"<"},sScrollX:"100%",sScrollXInner:"150%",sProcessing:"Loading Devices Data",sInfoPostFix:"",sInfoThousands:","},dom:h,buttons:j,fnDrawCallback:n});
$("#"+C).wrap('<div class="dataTables_scrollHead"></div>');
$("#"+C+"_info").html('Loading...<div class="spinnerIcon"><div></div></div>');
if($("input[name=renderResults]").val()!="Yes"){$("#"+C+" .dataTables_filter input").after('<span class="search-icon"></span>');
$("#"+C+" .dataTables_filter input").attr("placeholder",'<%=i18n.get("search-placeholder")%>')
}w.draw();
$("#"+C).show();
if(v!==undefined){v()
}}function a(B,r,t,w,y){var z=$("#"+B+"_filter");
z.find("."+t).remove();
var q=$('<div class="col-xs-3 '+t+' form-group"></div>');
q.append('<label class="form-label">'+w+": </label>");
var u=[];
var A=[];
var v=$("#"+B).DataTable();
var p=v.data();
for(var s=0;
s<p.length;
s++){if(p[s][y]!=""){u.push(p[s][y])
}}u=u.getUnique().sort();
A.push('<option value="None">None</option>');
for(var s=0;
s<u.length;
s++){if(!/^ *$/.test(u[s])){A.push('<option value="'+u[s]+'">'+u[s]+"</option>")
}}var x=$('<select class="'+r+'"></select>').append(A.join()).change(function(){if($(this).val()!="None"){e(v,y,$(this).val())
}else{e(v,y,"")
}});
q.append(x);
z.append(q)
}function e(p,q,r){p.column(q).search(r,false,false,true).draw()
}return{addDrawCallback:f,getDynamicData:b,getDynamicDataJson:l,decodeEntities:d,prepareDynamicDatatable:g,bindCustomFilter:a,filterColumn:e,prepareCustomButtons:c,appendCustomButtons:o,overrideUseAuthorProxy:k}
}());