!function(){"use strict";const s=1611436233365,e=`cache${s}`,i=["/client/client.47cc1306.js","/client/inject_styles.5607aec6.js","/client/index.0f27229f.js","/client/index.e83d55fd.js","/client/ScrollTrigger.185c2439.js","/client/index.dbe93b4a.js","/client/[slug].211d1537.js","/client/_layout.d0e53293.js","/client/index.0a7d3fc5.js","/client/ae-branding.d9d7a420.js","/client/tlf.c45bb9c4.js","/client/about.d040f92e.js"].concat(["/service-worker-index.html","/apple-touch-icon.png","/css/custom.css","/css/global.css","/css/global.css.map","/css/global.scss","/css/main.css","/favicon.ico","/favicon.png","/icon-32.png","/icon-512.png","/img/ae_logo.svg","/img/ae_logomark.svg","/img/case-studies/ae-branding/ae-preview.jpg","/img/case-studies/ae-branding/ae_logo_v0.png","/img/case-studies/ae-branding/ae_logo_v1.jpg","/img/case-studies/ae-branding/ae_logo_v2_bw.jpg","/img/case-studies/ae-branding/ae_logo_v2_color.jpg","/img/case-studies/tlf/section_mission.jpg","/img/case-studies/tlf/tlf-preview.jpg","/img/case-studies/tlf/tlf_assets.png","/img/case-studies/tlf/tlf_final_design.png","/img/case-studies/tlf/tlf_mockups.png","/img/case-studies/tlf/tlf_wireframes.png","/img/footer_bg_graphic.svg","/img/icons/app_labs.png","/img/icons/featured_star.svg","/img/icons/icon_android.svg","/img/icons/icon_apps.svg","/img/icons/icon_uiux.svg","/img/icons/icon_web.svg","/img/icons/labs_icon.svg","/img/portfolio/desktop/project_screenshot_triton.png","/img/portfolio/icons/icon_c19_counter.png","/img/portfolio/icons/icon_cryptx.png","/img/portfolio/icons/icon_lib_ae_apps.png","/img/portfolio/icons/icon_message_counter.png","/img/portfolio/icons/icon_random_contact.png","/img/portfolio/icons/icon_trip_meter.png","/img/portfolio/icons/icon_triton_player.png","/img/portfolio/icons/icon_triton_player_v1.png","/img/portfolio/mobile/message_counter_screens.png","/img/portfolio/web/uplabs_muyu.png","/manifest.json","/scripts.js"]),n=new Set(i);self.addEventListener("install",(s=>{s.waitUntil(caches.open(e).then((s=>s.addAll(i))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const i of s)i!==e&&await caches.delete(i);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const i=new URL(e.request.url),t=i.protocol.startsWith("http"),o=i.hostname===self.location.hostname&&i.port!==self.location.port,c=i.host===self.location.host&&n.has(i.pathname),a="only-if-cached"===e.request.cache&&!c;!t||o||a||e.respondWith((async()=>c&&await caches.match(e.request)||async function(e){const i=await caches.open(`offline${s}`);try{const s=await fetch(e);return i.put(e,s.clone()),s}catch(s){const n=await i.match(e);if(n)return n;throw s}}(e.request))())}))}();
