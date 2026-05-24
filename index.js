import{S as p,a as m,i as a}from"./assets/vendor-Dwt2oygk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:f})=>`
          <li class="gallery-item">
            <a href="${n}">
              <img
                src="${o}"
                alt="${e}"
                class="gallery-image"
              />
            </a>

            <div class="info">
              <p><b>Likes</b> ${t}</p>
              <p><b>Views</b> ${s}</p>
              <p><b>Comments</b> ${d}</p>
              <p><b>Downloads</b> ${f}</p>
            </div>
          </li>
        `).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function y(){l.innerHTML=""}function b(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const S="56002305-72176059533bc29105aa8638a",w="https://pixabay.com/api/";function P(i){return m.get(w,{params:{key:S,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".form");c.addEventListener("submit",i=>{i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query!",position:"topRight"});return}y(),b(),P(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}).catch(o=>{a.error({message:"Something went wrong. Please try again later!",position:"topRight"}),console.log(o)}).finally(()=>{L(),c.reset()})});
//# sourceMappingURL=index.js.map
