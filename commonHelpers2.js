/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new Swiper(".mySwiper",{slidesPerView:3,spaceBetween:30,freeMode:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const c=document.getElementById("cookiesPop"),a=document.querySelector(".cookies-accept"),f=document.querySelector(".cookies-decline");f.addEventListener("click",()=>{c.style.display="none"});a.addEventListener("click",()=>{c.style.display="none",localStorage.setItem("cookies","accepted")});localStorage.getItem("cookies")?c.style.display="none":c.style.display="block";const l=document.querySelector(".burger"),d=document.querySelector(".nav"),u=document.querySelectorAll(".nav-link");l.hidden=!1;l.addEventListener("click",()=>{d.classList.toggle("open")});u.forEach(n=>{n.addEventListener("click",()=>{d.classList.remove("open")})});u.forEach(n=>{n.addEventListener("click",function(o){o.preventDefault();const s=this.getAttribute("href"),r=document.querySelector(s);if(r){const e=document.querySelector("header").offsetHeight,t=r.offsetTop-e;window.scrollTo({top:t,behavior:"smooth"})}})});
//# sourceMappingURL=commonHelpers2.js.map
