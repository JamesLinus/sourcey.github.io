define(["../var/support"],function(e){return function(){var n=document.createDocumentFragment(),t=n.appendChild(document.createElement("div"));t.innerHTML="<input type='radio' checked='checked' name='t'/>",e.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",e.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}(),e});