!function(){"use strict";const s=1626453633180,i=`cache${s}`,e=["/client/client.fa409565.js","/client/inject_styles.5607aec6.js","/client/index.44287919.js","/client/store.a33a8af2.js","/client/index.894b1663.js","/client/ScrollTrigger.04e8a798.js","/client/index.db27b230.js","/client/[slug].29f4f179.js","/client/_layout.ed6e2bfc.js","/client/index.54633fb7.js","/client/random-contact.9c2ed2a2.js","/client/ae-branding.7e9bcd52.js","/client/tlf.dbd8644a.js","/client/tutorials.50b234e4.js","/client/about.c6047f3a.js"].concat(["/service-worker-index.html","/app-ads.txt","/apple-touch-icon.png","/css/custom.css","/css/global.css","/css/global.css.map","/css/global.scss","/css/main.css","/favicon.ico","/favicon.png","/icon-32.png","/icon-512.png","/img/ae_logo.svg","/img/ae_logomark.svg","/img/case-studies/ae-branding/ae-preview.jpg","/img/case-studies/ae-branding/ae_logo_v0.png","/img/case-studies/ae-branding/ae_logo_v1.jpg","/img/case-studies/ae-branding/ae_logo_v2_bw.jpg","/img/case-studies/ae-branding/ae_logo_v2_color.jpg","/img/case-studies/random-contact/app_icon.png","/img/case-studies/random-contact/mockup_dark.png","/img/case-studies/random-contact/mockup_light.png","/img/case-studies/random-contact/promotional.png","/img/case-studies/random-contact/random-contact-preview.png","/img/case-studies/random-contact/wireframes.png","/img/case-studies/tlf/section_mission.png","/img/case-studies/tlf/tlf-preview.jpg","/img/case-studies/tlf/tlf_assets.png","/img/case-studies/tlf/tlf_design.jpg","/img/case-studies/tlf/tlf_final_design.jpg","/img/case-studies/tlf/tlf_mockups.png","/img/case-studies/tlf/tlf_wireframes.png","/img/footer_bg_graphic.svg","/img/header_bg.png","/img/icons/app_labs.png","/img/icons/featured_star.svg","/img/icons/icon_android.svg","/img/icons/icon_apps.svg","/img/icons/icon_uiux.svg","/img/icons/icon_web.svg","/img/icons/labs_icon.svg","/img/portfolio/desktop/project_screenshot_triton.png","/img/portfolio/icons/icon_c19_counter.png","/img/portfolio/icons/icon_cryptx.png","/img/portfolio/icons/icon_lib_ae_apps.png","/img/portfolio/icons/icon_message_counter.png","/img/portfolio/icons/icon_random_contact.png","/img/portfolio/icons/icon_tlf.png","/img/portfolio/icons/icon_trip_meter.png","/img/portfolio/icons/icon_triton_player.png","/img/portfolio/icons/icon_triton_player_v1.png","/img/portfolio/mobile/message_counter_screens.png","/img/portfolio/web/uplabs_muyu.png","/manifest.json","/scripts.js"]),t=new Set(e);self.addEventListener("install",(s=>{s.waitUntil(caches.open(i).then((s=>s.addAll(e))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const e of s)e!==i&&await caches.delete(e);self.clients.claim()})))})),self.addEventListener("fetch",(i=>{if("GET"!==i.request.method||i.request.headers.has("range"))return;const e=new URL(i.request.url),n=e.protocol.startsWith("http"),o=e.hostname===self.location.hostname&&e.port!==self.location.port,c=e.host===self.location.host&&t.has(e.pathname),a="only-if-cached"===i.request.cache&&!c;!n||o||a||i.respondWith((async()=>c&&await caches.match(i.request)||async function(i){const e=await caches.open(`offline${s}`);try{const s=await fetch(i);return e.put(i,s.clone()),s}catch(s){const t=await e.match(i);if(t)return t;throw s}}(i.request))())}))}();
