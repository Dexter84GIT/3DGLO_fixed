(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),o=()=>{const c=(()=>{const e=(new Date("25 november 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.textContent=c.hours,t.textContent=c.minutes,n.textContent=c.seconds,e.textContent.length<2?e.textContent=`0${c.hours}`:t.textContent.length<2?t.textContent=`0${c.minutes}`:n.textContent.length<2&&(n.textContent=`0${c.seconds}`),c.timeRemaining<=0?(e.textContent="00",t.textContent="00",n.textContent="00",clearInterval(o)):setInterval(o,1e3)};setTimeout(o,0)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector(".close-btn"),o=document.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close");let o,c;window.addEventListener("resize",(()=>{o=document.documentElement.clientWidth}));const s=(e,t)=>{c=requestAnimationFrame(s),e.style.opacity=0,e.style.display="block",setTimeout((()=>{e.style.opacity=1}),t)};t.forEach((t=>{t.addEventListener("click",(()=>{o>768?s(e,1e3):(e.style.display="block",e.style.opacity=1)}))})),n.addEventListener("click",(()=>{var t;o>768?((t=e).style.opacity=1,t.style.opacity=0,setTimeout((()=>{t.style.display="none"}),1e3),cancelAnimationFrame(s)):(e.style.display="none",e.style.opacity=0)}))})()})();