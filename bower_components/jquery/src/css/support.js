define(["../core","../var/support"],function(e,t){return function(){function n(){p.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",d.appendChild(r);var e=window.getComputedStyle(p,null);o="1%"!==e.top,i="4px"===e.width,d.removeChild(r)}var o,i,l="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",d=document.documentElement,r=document.createElement("div"),p=document.createElement("div");p.style.backgroundClip="content-box",p.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===p.style.backgroundClip,r.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",r.appendChild(p),window.getComputedStyle&&e.extend(t,{pixelPosition:function(){return n(),o},boxSizingReliable:function(){return null==i&&n(),i},reliableMarginRight:function(){var e,t=p.appendChild(document.createElement("div"));return t.style.cssText=p.style.cssText=l,t.style.marginRight=t.style.width="0",p.style.width="1px",d.appendChild(r),e=!parseFloat(window.getComputedStyle(t,null).marginRight),d.removeChild(r),p.innerHTML="",e}})}(),t});