!function(){"use strict";const s=1611265265010,i=`cache${s}`,e=["/client/client.7938067c.js","/client/inject_styles.5607aec6.js","/client/index.e5474115.js","/client/index.e83d55fd.js","/client/ScrollTrigger.185c2439.js","/client/index.75a0d3da.js","/client/[slug].5f3bfa37.js","/client/_layout.85887ff4.js","/client/index.846db6f8.js","/client/ae-branding.c1089445.js","/client/tlf.fbe257d4.js","/client/about.963b2579.js"].concat(["/service-worker-index.html","/apple-touch-icon.png","/css/custom.css","/css/global.css","/css/global.css.map","/css/global.scss","/css/main.css","/favicon.ico","/favicon.png","/icon-32.png","/icon-512.png","/img/ae_logo.svg","/img/ae_logomark.svg","/img/case-studies/ae-branding/ae-preview.jpg","/img/case-studies/ae-branding/ae_logo_v0.png","/img/case-studies/ae-branding/ae_logo_v1.jpg","/img/case-studies/ae-branding/ae_logo_v2_bw.jpg","/img/case-studies/ae-branding/ae_logo_v2_color.jpg","/img/case-studies/tlf/section_mission.jpg","/img/case-studies/tlf/tlf-preview.jpg","/img/case-studies/tlf/tlf_assets.png","/img/case-studies/tlf/tlf_final_design.png","/img/case-studies/tlf/tlf_mockups.png","/img/case-studies/tlf/tlf_wireframes.png","/img/footer_bg_graphic.svg","/img/icons/app_labs.png","/img/icons/featured_star.svg","/img/icons/icon_android.svg","/img/icons/icon_apps.svg","/img/icons/icon_uiux.svg","/img/icons/icon_web.svg","/img/icons/labs_icon.svg","/img/portfolio/desktop/project_screenshot_triton.png","/img/portfolio/icons/icon_c19_counter.png","/img/portfolio/icons/icon_cryptx.png","/img/portfolio/icons/icon_lib_ae_apps.png","/img/portfolio/icons/icon_message_counter.png","/img/portfolio/icons/icon_random_contact.png","/img/portfolio/icons/icon_trip_meter.png","/img/portfolio/icons/icon_triton_player.png","/img/portfolio/icons/icon_triton_player_v1.png","/img/portfolio/mobile/message_counter_screens.png","/img/portfolio/web/uplabs_muyu.png","/manifest.json","/scripts.js"]),n=new Set(e);self.addEventListener("install",(s=>{s.waitUntil(caches.open(i).then((s=>s.addAll(e))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const e of s)e!==i&&await caches.delete(e);self.clients.claim()})))})),self.addEventListener("fetch",(i=>{if("GET"!==i.request.method||i.request.headers.has("range"))return;const e=new URL(i.request.url),t=e.protocol.startsWith("http"),o=e.hostname===self.location.hostname&&e.port!==self.location.port,c=e.host===self.location.host&&n.has(e.pathname),a="only-if-cached"===i.request.cache&&!c;!t||o||a||i.respondWith((async()=>c&&await caches.match(i.request)||async function(i){const e=await caches.open(`offline${s}`);try{const s=await fetch(i);return e.put(i,s.clone()),s}catch(s){const n=await e.match(i);if(n)return n;throw s}}(i.request))())}))}();
