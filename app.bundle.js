!function(){"use strict";const e=document.querySelector(".form"),t=new class{constructor(){this.popovers=[]}showPopover(e){const t=document.createElement("div");t.innerHTML='\n      <h3 class="popoverHeader">Popover title</h3>\n      <div class ="message">And here\'s some amazing content. It\'s very engaging. Right?</div>',t.classList.add("popoverArea");const o=performance.now();this.popovers.push({id:o,element:t}),document.body.appendChild(t);const{left:s,top:n}=e.getBoundingClientRect();return t.style.left=s/2+"px",t.style.top=n-t.offsetHeight-10.5+"px",o}hidePopover(e){const t=this.popovers.find((t=>t.id===e));void 0!==t.element&&t.element.remove(),this.popovers=this.popovers.filter((t=>t.id!==e))}};let o=[];e.addEventListener("submit",(e=>(e.preventDefault(),0!==o.length?(t.hidePopover(o[0]),o=[],!1):(o.push(t.showPopover(e.submitter)),!0))))}();