(function($){Drupal.behaviors.intel_filter_syntaxhighlighter={attach:function(context,settings){SyntaxHighlighter.toolbar.items.copyToClipboard=function(highlighter){var flashDiv,flashSwf,highlighterId=highlighter.id,sh=SyntaxHighlighter;this.create=function(){return sh.config.strings.copyToClipboard};this.execute=function(sender,event,args){var code=sh.utils.unindent(sh.utils.fixInputString(highlighter.originalCode).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"));var textArea=document.createElement("textarea");textArea.style.position="fixed";textArea.style.top=0;textArea.style.left=0;textArea.style.width="2em";textArea.style.height="2em";textArea.style.padding=0;textArea.style.border="none";textArea.style.outline="none";textArea.style.boxShadow="none";textArea.style.background="transparent";textArea.value=code;document.body.appendChild(textArea);textArea.select();try{var successful=document.execCommand("copy");if(successful)sh.utils.alert(Drupal.t("The code is in your clipboard now."));else sh.utils.alert(Drupal.t("Oops, unable to copy"))}catch(err){sh.utils.alert(Drupal.t("Oops, unable to copy"))}document.body.removeChild(textArea)}};delete SyntaxHighlighter.toolbar.items.about;delete SyntaxHighlighter.toolbar.items.viewSource;delete SyntaxHighlighter.toolbar.items.printSource;SyntaxHighlighter.defaults.gutter=true;SyntaxHighlighter.config.strings.copyToClipboard=Drupal.t("Copy Code");$("#page, #page-wrapper",context).once("intel_filter_syntaxhighlighter",function(){if(typeof SyntaxHighlighter=="object"){var brushCount=0;for(i in SyntaxHighlighter.brushes){brushCount++;break}if(brushCount>0){SyntaxHighlighter.all()}}})}}})(jQuery);;
(function ($) {
    dataLayer.push({'canonicalURL': $("link[rel='canonical']").attr("href")});
})(jQuery)
;
