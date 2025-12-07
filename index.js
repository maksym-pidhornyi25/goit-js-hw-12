import{a as w,S as R,i}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const p=15;async function m(r,o){return(await w.get("https://pixabay.com/api/",{params:{key:"53582990-021f86ccd386d56203414afea",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:p}})).data}const h=document.querySelector(".gallery"),g=document.querySelector(".load-more"),y=document.querySelector(".loader");let S=new R(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const o=r.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          loading="lazy"
        />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${e.likes}</p>
        <p class="info-item"><b>Views:</b> ${e.views}</p>
        <p class="info-item"><b>Comments:</b> ${e.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </li>`).join("");h.insertAdjacentHTML("beforeend",o),S.refresh()}function q(){h.innerHTML=""}function b(){y.classList.add("is-visible")}function l(){y.classList.remove("is-visible")}function v(){g.classList.add("is-visible")}function c(){g.classList.remove("is-visible")}const B=document.querySelector("#search-form"),E=document.querySelector(".load-more");let u="",n=1,f=0;c();B.addEventListener("submit",async r=>{r.preventDefault();const o=r.currentTarget.elements.search.value.trim();if(!o){i.warning({message:"Поле пошуку не може бути порожнім",position:"topRight"});return}u=o,n=1,q(),c(),b();try{const e=await m(u,n);if(f=e.totalHits,l(),e.hits.length===0){i.info({message:"Зображень не знайдено. Спробуйте інший запит.",position:"topRight"});return}if(L(e.hits),i.success({message:`Знайдено ${f} зображень`,position:"topRight"}),e.hits.length<p){i.info({message:"You've reached the end of search results.",position:"topRight"}),c();return}v()}catch{l(),i.error({message:"Помилка завантаження зображень",position:"topRight"})}});E.addEventListener("click",async()=>{n+=1,b(),c();try{const r=await m(u,n);L(r.hits),l();const o=document.querySelector(".gallery a");if(o){const a=o.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}if(n*p>=f){c(),i.info({message:"You've reached the end of search results.",position:"topRight"});return}v()}catch{l(),i.error({message:"Помилка завантаження зображень",position:"topRight"})}});
//# sourceMappingURL=index.js.map
