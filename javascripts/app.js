$(document).foundation(),$(document).ready(function(){Socialite.load()}),$(window).load(function(){var o=$("body article .sidebar");if(o.length){var l,n=$("body article .content"),e=n.offset().top,a=n.height()+e-o.height(),t=!1;$(window).bind("scroll",function(){$(this).scrollTop()>=a?(o.hide(),t=!0):$(this).scrollTop()>=e?(t&&(t=!1,o.show()),o.addClass("float"),l=!0):l&&(o.removeClass("float"),l=!1)})}var s=$(".toc",o);s.length&&(s.find("h4").append('<a href="#top">&uArr;</a>'),s.find("ul#markdown-toc > li").each(function(){var o=$(this),l=o.children("ul");if(l.length){var n=$('<a href="#" class="toggle"><span class="open">&dArr;</span><span class="close">&lArr;</span></a>');n.click(function(){return console.log("tap"),l.slideToggle(),o.toggleClass("closed"),!1}),o.prepend(n)}console.log(l.length)}))});