!function(){"use strict";const s=1612830606732,e=`cache${s}`,i=["/client/client.b117f7b4.js","/client/inject_styles.5607aec6.js","/client/index.79c3edea.js","/client/index.894b1663.js","/client/ScrollTrigger.04e8a798.js","/client/index.04364bf0.js","/client/[slug].8749112d.js","/client/_layout.e84e2538.js","/client/index.84a5324f.js","/client/ae-branding.b74e59a3.js","/client/tlf.fc2cb098.js","/client/about.48648466.js"].concat(["/service-worker-index.html","/apple-touch-icon.png","/css/custom.css","/css/global.css","/css/global.css.map","/css/global.scss","/css/main.css","/favicon.ico","/favicon.png","/icon-32.png","/icon-512.png","/img/ae_logo.svg","/img/ae_logomark.svg","/img/case-studies/ae-branding/ae-preview.jpg","/img/case-studies/ae-branding/ae_logo_v0.png","/img/case-studies/ae-branding/ae_logo_v1.jpg","/img/case-studies/ae-branding/ae_logo_v2_bw.jpg","/img/case-studies/ae-branding/ae_logo_v2_color.jpg","/img/case-studies/tlf/section_mission.jpg","/img/case-studies/tlf/tlf-preview.jpg","/img/case-studies/tlf/tlf_assets.png","/img/case-studies/tlf/tlf_design.jpg","/img/case-studies/tlf/tlf_final_design.png","/img/case-studies/tlf/tlf_mockups.png","/img/case-studies/tlf/tlf_wireframes.png","/img/footer_bg_graphic.svg","/img/icons/app_labs.png","/img/icons/featured_star.svg","/img/icons/icon_android.svg","/img/icons/icon_apps.svg","/img/icons/icon_uiux.svg","/img/icons/icon_web.svg","/img/icons/labs_icon.svg","/img/portfolio/desktop/project_screenshot_triton.png","/img/portfolio/icons/icon_c19_counter.png","/img/portfolio/icons/icon_cryptx.png","/img/portfolio/icons/icon_lib_ae_apps.png","/img/portfolio/icons/icon_message_counter.png","/img/portfolio/icons/icon_random_contact.png","/img/portfolio/icons/icon_trip_meter.png","/img/portfolio/icons/icon_triton_player.png","/img/portfolio/icons/icon_triton_player_v1.png","/img/portfolio/mobile/message_counter_screens.png","/img/portfolio/web/uplabs_muyu.png","/manifest.json","/scripts.js"]),t=new Set(i);self.addEventListener("install",(s=>{s.waitUntil(caches.open(e).then((s=>s.addAll(i))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const i of s)i!==e&&await caches.delete(i);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const i=new URL(e.request.url),n=i.protocol.startsWith("http"),o=i.hostname===self.location.hostname&&i.port!==self.location.port,c=i.host===self.location.host&&t.has(i.pathname),a="only-if-cached"===e.request.cache&&!c;!n||o||a||e.respondWith((async()=>c&&await caches.match(e.request)||async function(e){const i=await caches.open(`offline${s}`);try{const s=await fetch(e);return i.put(e,s.clone()),s}catch(s){const t=await i.match(e);if(t)return t;throw s}}(e.request))())}))}();
