import{a as v,S as w,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const E="53582990-021f86ccd386d56203414afea",S="https://pixabay.com/api/",R=15;async function p(s,t=1){try{return(await v.get(S,{params:{key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:R,page:t}})).data}catch(o){throw console.error("Помилка запиту до Pixabay:",o),o}}const m=document.querySelector(".gallery"),y=document.querySelector(".load-more"),h=document.querySelector(".loader");let q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const t=s.map(o=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img
          class="gallery-image"
          src="${o.webformatURL}"
          alt="${o.tags}"
          loading="lazy"
        />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${o.likes}</p>
        <p class="info-item"><b>Views:</b> ${o.views}</p>
        <p class="info-item"><b>Comments:</b> ${o.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${o.downloads}</p>
      </div>
    </li>`).join("");m.insertAdjacentHTML("beforeend",t),q.refresh()}function B(){m.innerHTML=""}function b(){h.classList.add("is-visible")}function a(){h.classList.remove("is-visible")}function L(){y.classList.add("is-visible")}function d(){y.classList.remove("is-visible")}const P=document.querySelector("#search-form"),$=document.querySelector(".load-more");let n="",i=1,u=0;P.addEventListener("submit",async s=>{if(s.preventDefault(),n=s.currentTarget.elements.search.value.trim(),!!n){i=1,B(),d(),b();try{const t=await p(n,i);if(u=t.totalHits,t.hits.length===0){l.info({title:"No results",message:"Зображень не знайдено.",position:"topRight"}),a();return}g(t.hits),a(),u>i*15&&L()}catch{a(),l.error({title:"Error",message:"Помилка завантаження зображень",position:"topRight"})}}});$.addEventListener("click",async()=>{i+=1,b(),d();try{const s=await p(n,i);g(s.hits),a();const t=document.querySelector(".gallery a").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),i*15>=u?(d(),l.info({title:"End",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L()}catch{a(),l.error({title:"Error",message:"Помилка завантаження зображень",position:"topRight"})}});
//# sourceMappingURL=index.js.map
