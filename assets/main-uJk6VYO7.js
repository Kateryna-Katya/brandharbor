import{S as w,A as m}from"./vendor-Dh8rjQuo.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();let f=null;const g=()=>{window.innerWidth>=1440||f||(f=new w(".reviews-swiper",{modules:[m],slidesPerView:1.3,spaceBetween:12,loop:!0,speed:700,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0}}))},v=()=>{f&&(f.destroy(!0,!0),f=null)},h=()=>{window.innerWidth<1440?g():v()};h();window.addEventListener("resize",h);const y=document.querySelectorAll(".typing-text"),L=(r,o=45)=>new Promise(a=>{const l=r.dataset.text||"";let e=0;const t=setInterval(()=>{r.textContent+=l[e],e+=1,e>=l.length&&(clearInterval(t),r.classList.add("is-finished"),a())},o)}),k=async()=>{for(const r of y)await L(r),await new Promise(o=>setTimeout(o,400))};k();document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".menu-button"),o=r.querySelector(".icon"),a=document.querySelector(".modal"),l=document.querySelectorAll(".menu-list-item"),e=document.querySelector(".header");let t=!1;const d=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_4_350)">
    <path d="M4 6H20" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 12H20" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 18H20" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_4_350">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
    `,n=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_4_328)">
    <path d="M18 6L6 18" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6 6L18 18" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_4_328">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
    `;r.addEventListener("click",()=>{t=!t,o.innerHTML=t?n:d,t?i():s()}),l.forEach(u=>u.addEventListener("click",()=>{s(),o.innerHTML=d,t=!1})),window.addEventListener("scroll",c);function i(){a.style.display="block"}function s(){a.style.display="none"}function c(){e&&(window.scrollY>60?e.classList.add("header-scroll"):e.classList.remove("header-scroll"))}});document.addEventListener("DOMContentLoaded",()=>{function r(){const n=document.getElementById("site-header");return n?n.offsetHeight:0}function o(n){const i=document.getElementById(n);if(!i)return;const s=r(),c=i.getBoundingClientRect().top+window.pageYOffset-s;window.scrollTo({top:c,behavior:"smooth"})}document.querySelectorAll(".navigation-item a").forEach(n=>{n.addEventListener("click",function(i){const s=this.getAttribute("href");if(!s)return;const[c,u]=s.split("#");if(!u)return;const p=window.location.pathname.split("/").pop();!(c===""||c==="./"||c===p||c==="./"+p)||!document.getElementById(u)||(i.preventDefault(),o(u),t(u))})});const l=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".navigation-item");function t(n){e.forEach(s=>s.classList.remove("active"));const i=document.querySelector(`.navigation-item a[href*="#${n}"]`);i&&i.closest(".navigation-item").classList.add("active")}function d(){const n=window.pageYOffset+r()+100;l.forEach(i=>{const s=i.offsetTop,c=s+i.offsetHeight;n>=s&&n<c&&t(i.id)})}if(window.addEventListener("scroll",d),window.location.hash){const n=window.location.hash.substring(1);setTimeout(()=>{o(n),t(n)},300)}});
//# sourceMappingURL=main-uJk6VYO7.js.map
