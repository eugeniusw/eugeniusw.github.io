document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".a_140"),t=document.querySelector(".a_485");function _(){return e.querySelector(".a_486").classList.toggle("a_438"),t.classList.toggle("a_171")}function n(){window.removeEventListener("scroll",a),document.removeEventListener("click",o)}function a(){_(),n()}function o(a){t.contains(a.target)||e.contains(a.target)||(_(),n())}e.addEventListener("click",(()=>{_()?(window.addEventListener("scroll",a),document.addEventListener("click",o)):n()}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".a_795");var t=window.scrollY||window.pageYOffset,_=0,n=0;window.onscroll=function(){var a=window.scrollY||window.pageYOffset;t>a?(1===_&&(e.style.position="relative",e.style.top=a-100+"px",n=a-100,_-=1),n>=a&&(e.style.position="sticky",e.style.top=0)):_<1&&(e.style.position="relative",e.style.top=`${a}px`,_+=1),t=a}})),document.addEventListener("DOMContentLoaded",(e=>{const t=window.location.href.split("#")[0];document.querySelectorAll("a.a_334[href]").forEach((e=>{if(e.href==t){let t=e.closest(".a_335");if(t.classList.toggle("a_120"),t.nextElementSibling&&(t.nextElementSibling.classList.toggle("a_142"),t.querySelector(".a_486").classList.toggle("a_438")),t.parentElement.parentElement.parentElement.parentElement.matches(".a_631")){let e=t.parentElement.parentElement.parentElement.parentElement.querySelector(".a_335");for(e!==t&&(e.classList.toggle("a_120"),e.parentElement.querySelector(".a_336").classList.toggle("a_142"),e.querySelector(".a_486").classList.toggle("a_438")),t=e.parentElement.parentElement.parentElement.parentElement.querySelector(".a_335");e!==t&&e.parentElement.parentElement.parentElement.parentElement.matches(".a_631");)e=t,e.classList.toggle("a_120"),e.parentElement.querySelector(".a_336").classList.toggle("a_142"),e.querySelector(".a_486").classList.toggle("a_438"),t=e.parentElement.parentElement.parentElement.parentElement.querySelector(".a_335")}}})),document.querySelectorAll(".a_172").forEach((e=>{e.addEventListener("click",(()=>{e.closest(".a_335").nextElementSibling&&e.closest(".a_335").nextElementSibling.classList.toggle("a_142"),e.querySelector(".a_486").classList.toggle("a_438")}))}))})),document.addEventListener("DOMContentLoaded",(()=>{a_337=document.querySelector(".a_121"),a_143=document.querySelector(".a_121 span"),a_513=document.querySelector(".a_749"),a_337.addEventListener("click",(()=>{a_513.classList.toggle("a_440"),a_513.querySelector("input").focus(),a_143.classList.toggle("fa-times"),document.body.classList.toggle("a_144")}))}));