(()=>{"use strict";(()=>{const t=document.getElementById("timer-hours"),e=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),n=()=>{const l=(()=>{const t=(new Date("21 november 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=l.hours,e.textContent=l.minutes,o.textContent=l.seconds,t.textContent.length<2?t.textContent=`0${l.hours}`:e.textContent.length<2?e.textContent=`0${l.minutes}`:o.textContent.length<2&&(o.textContent=`0${l.seconds}`),l.timeRemaining<=0&&(clearInterval(n),t.textContent="00",e.textContent="00",o.textContent="00"),setInterval(n,1e3)};setTimeout(n,0)})(),(()=>{const t=document.querySelector(".menu"),e=document.querySelector("menu"),o=document.querySelector(".close-btn"),n=document.querySelectorAll("ul>li>a"),l=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",l),o.addEventListener("click",l),n.forEach((t=>t.addEventListener("click",l)))})(),(()=>{const t=document.querySelector(".popup"),e=document.querySelectorAll(".popup-btn"),o=t.querySelector(".popup-close");let n,l;window.addEventListener("resize",(()=>{n=document.documentElement.clientWidth}));const c=(t,e)=>{l=requestAnimationFrame(c),t.style.opacity=0,t.style.display="block",setTimeout((()=>{t.style.opacity=1}),e)};e.forEach((e=>{e.addEventListener("click",(()=>{n>768?c(t,1e3):(t.style.display="block",t.style.opacity=1)}))})),o.addEventListener("click",(()=>{var e;n>768?((e=t).style.opacity=1,e.style.opacity=0,setTimeout((()=>{e.style.display="none"}),1e3),cancelAnimationFrame(c)):(t.style.display="none",t.style.opacity=0)}))})(),(()=>{const t=document.querySelector(".portfolio-content"),e=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n=[],l=document.querySelectorAll(".dot"),c=0,i=0;const r=(t,e,o)=>{t[e].classList.add(o)},s=(t,e,o)=>{t[e].classList.remove(o)},a=()=>{s(e,c,"portfolio-item-active"),s(l,c,"dot-active"),c++,c>=e.length&&(c=0),r(e,c,"portfolio-item-active"),r(l,c,"dot-active")},d=(t=1500)=>{i=setInterval(a,t)};t.addEventListener("click",(t=>{t.preventDefault(),t.target.matches(".dot, .portfolio-btn")&&(s(e,c,"portfolio-item-active"),s(l,c,"dot-active"),t.target.matches("#arrow-right")?c++:t.target.matches("#arrow-left")?c--:t.target.classList.contains("dot")&&l.forEach(((e,o)=>{t.target===e&&(c=o)})),c>=e.length&&(c=0),c<0&&(c=e.length-1),r(e,c,"portfolio-item-active"),r(l,c,"dot-active"))})),t.addEventListener("mouseenter",(t=>{t.target.matches(".dot, .portfolio-btn")&&clearInterval(i)}),!0),t.addEventListener("mouseleave",(t=>{t.target.matches(".dot, .portfolio-btn")&&d(2e3)}),!0),(()=>{let t=[],c=document.createElement("li");for(let o=0;o<e.length;o++)t.push(c),l=t;n=t.map((()=>"<li class='dot'></li>")).join(""),o.innerHTML=n,document.querySelectorAll(".dot")[0].classList.add("dot-active")})(),d(2e3)})()})();