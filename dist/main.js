(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function c(r){let l=(r-n)/o;l>1&&(l=1);let a=e(l);t(a),l<1&&requestAnimationFrame(c)}))};(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),n=()=>{const c=(()=>{const e=(new Date("30 november 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.textContent=c.hours,t.textContent=c.minutes,o.textContent=c.seconds,e.textContent.length<2?e.textContent=`0${c.hours}`:t.textContent.length<2?t.textContent=`0${c.minutes}`:o.textContent.length<2&&(o.textContent=`0${c.seconds}`),c.timeRemaining<=0&&(clearInterval(n),e.textContent="00",t.textContent="00",o.textContent="00"),setInterval(n,1e3)};setTimeout(n,0)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=document.querySelector(".close-btn"),n=document.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),o.addEventListener("click",c),n.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const t=document.querySelector(".popup"),o=(document.querySelector(".popup-content"),document.querySelectorAll(".popup-btn")),n=t.querySelector(".popup-close");let c=document.documentElement.clientWidth;window.addEventListener("resize",(()=>{c=document.documentElement.clientWidth})),o.forEach((o=>{o.addEventListener("click",(()=>{c>768?e({duration:2e3,timing:e=>e,draw(e){t.style.opacity=e,t.style.display="block"}}):console.log("not")}))})),n.addEventListener("click",(()=>{c>768?e({duration:2e3,timing:e=>e,draw(e){t.style.display="none"}}):console.log("not")}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,c=[],r=0,l=0;const a=(e,t,o)=>{e[t].classList.add(o)},i=(e,t,o)=>{e[t].classList.remove(o)},s=()=>{i(t,r,"portfolio-item-active"),i(n,r,"dot-active"),r++,r>=t.length&&(r=0),a(t,r,"portfolio-item-active"),a(n,r,"dot-active")},d=(e=1500)=>{l=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(i(t,r,"portfolio-item-active"),i(n,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&n.forEach(((t,o)=>{e.target===t&&(r=o)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),a(t,r,"portfolio-item-active"),a(n,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&d(2e3)}),!0),(()=>{let e=[],r=document.createElement("li");for(let o=0;o<t.length;o++)e.push(r),n=e;c=e.map((()=>"<li class='dot'></li>")).join(""),o.innerHTML=c,document.querySelectorAll(".dot")[0].classList.add("dot-active")})(),d(2e3)})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==n&&t.target!==c&&t.target!==r||(()=>{const t=+o.options[o.selectedIndex].value,a=n.value;let i=0,s=1,d=1;c.value>1&&(s+=+c.value/10),r.value&&r.value<5?d=2:r.value&&r.value<10&&(d=1.5),i=o.value&&n.value?e*t*a*s*d:0,l.textContent=i})()}))})()})();