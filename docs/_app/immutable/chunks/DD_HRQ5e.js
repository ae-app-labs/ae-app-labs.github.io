import{E as j,x as C,w as D}from"./6YYQdP7l.js";import{r as n}from"./CjCd5Oz-.js";function E(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function F(e,c){e.d(1),c.delete(e.key)}function V(e,c){D(e,1,1,()=>{c.delete(e.key)})}function q(e,c,S,W,T,y,l,N,f,_,m,U){let o=e.length,r=y.length,s=o;const u={};for(;s--;)u[e[s].key]=s;const d=[],g=new Map,h=new Map,w=[];for(s=r;s--;){const t=U(T,y,s),a=S(t);let i=l.get(a);i?w.push(()=>i.p(t,c)):(i=_(a,t),i.c()),g.set(a,d[s]=i),a in u&&h.set(a,Math.abs(s-u[a]))}const v=new Set,A=new Set;function b(t){C(t,1),t.m(N,m),l.set(t.key,t),m=t.first,r--}for(;o&&r;){const t=d[r-1],a=e[o-1],i=t.key,p=a.key;t===a?(m=t.first,o--,r--):g.has(p)?!l.has(i)||v.has(i)?b(t):A.has(p)?o--:h.get(i)>h.get(p)?(A.add(i),b(t)):(v.add(p),o--):(f(a,l),o--)}for(;o--;){const t=e[o];g.has(t.key)||f(t,l)}for(;r;)b(d[r-1]);return j(w),d}const B={data:[{id:"1",title:"Portfolio Landing Page Design with Adobe XD",embedUrl:"https://www.youtube.com/embed/rAvU5qBP_ws",videoUrl:"https://www.youtube.com/watch?v=rAvU5qBP_ws",coverImage:"/img/tutorials/tutorial_cover_001.png",videoLength:"28 minutes",tags:[{id:"1",name:"Adobe XD",className:"is-primary"},{id:"2",name:"UI Design",className:"is-warning"}]},{id:"2",title:"Portfolio Landing Page Development",embedUrl:"https://www.youtube.com/embed/T55-dwmur4s",videoUrl:"https://www.youtube.com/watch?v=T55-dwmur4s",coverImage:"/img/tutorials/tutorial_cover_002.png",videoLength:"32 minutes",tags:[{id:"1",name:"HTML",className:"is-primary"},{id:"2",name:"Sass",className:"is-warning"}]},{id:"3",title:"Camping Website Development",embedUrl:"https://www.youtube.com/embed/BfvvOsIuTP8",videoUrl:"https://www.youtube.com/watch?v=BfvvOsIuTP8",coverImage:"/img/tutorials/tutorial_cover_004.png",videoLength:"39 minutes",tags:[{id:"1",name:"HTML",className:"is-primary"},{id:"2",name:"SASS",className:"is-warning"}]},{id:"4",title:"Creating an Android App",embedUrl:"https://www.youtube.com/embed/vR1wcqfslWM",videoUrl:"https://www.youtube.com/watch?v=vR1wcqfslWM",coverImage:"/img/tutorials/tutorial_cover_005.png",videoLength:"13 minutes",tags:[{id:"1",name:"Android",className:"is-primary"},{id:"2",name:"Android Studio",className:"is-success"}]},{id:"5",title:"Let's build a landing page with Bulma CSS Part 1",embedUrl:"https://www.youtube.com/embed/kp-JVtnETWI",videoUrl:"https://www.youtube.com/watch?v=kp-JVtnETWI",coverImage:"/img/tutorials/tutorial_cover_003-01.png",videoLength:"15 minutes",tags:[{id:"1",name:"Bulma",className:"is-primary"},{id:"2",name:"SASS",className:"is-warning"}]},{id:"6",title:"Let's build a landing page with Bulma CSS Part 2",embedUrl:"https://www.youtube.com/embed/0hj3ZVn1c-I",videoUrl:"https://www.youtube.com/watch?v=0hj3ZVn1c-I",coverImage:"/img/tutorials/tutorial_cover_003-02.png",videoLength:"14 minutes",tags:[{id:"1",name:"Bulma",className:"is-primary"},{id:"2",name:"SASS",className:"is-warning"}]},{id:"7",title:"Let's build a landing page with Bulma CSS Part 3",embedUrl:"https://www.youtube.com/embed/AntRJWRWKEc",videoUrl:"https://www.youtube.com/watch?v=AntRJWRWKEc",coverImage:"/img/tutorials/tutorial_cover_003-03.png",videoLength:"32 minutes",tags:[{id:"1",name:"Bulma",className:"is-primary"},{id:"2",name:"SASS",className:"is-warning"}]},{id:"8",title:"Animated Hero Background with HTML5 and SASS",embedUrl:"https://www.youtube.com/embed/KwI1sZFaj1M",videoUrl:"https://www.youtube.com/watch?v=KwI1sZFaj1M",coverImage:"/img/tutorials/tutorial_cover_008.png",videoLength:"9 minutes",tags:[{id:"1",name:"HTML5",className:"is-primary"},{id:"2",name:"SASS",className:"is-warning"}]}]},M={data:[{title:"AE Branding",slug:"ae-branding",type:"Branding",previewImage:"img/case-studies/ae-branding/ae-preview.jpg",articleUrl:"/case-studies/ae-branding",creationDate:"01 Jan 2021",description:"Take a look at the history and the rebranding for AE and the designs that we have gone through."},{title:"The Lotus Foundation",slug:"tlf",type:"UI/UX Web Design",previewImage:"img/case-studies/tlf/tlf-preview.jpg?t=20220705",articleUrl:"/case-studies/tlf",creationDate:"20 Jan 2021",description:"The design and development of the website for The Lotus Foundation, a non profit organization."},{title:"Random Contact Redesign",slug:"random-contact",type:"UI/UX App Design",previewImage:"img/case-studies/random-contact/random-contact-preview.png?t=20220705",articleUrl:"/case-studies/random-contact",creationDate:"20 Mar 2021",description:"The redesign of our first Android app that was released on the Play Store."},{title:"Silverback Gaming Branding",slug:"silverback-gaming",type:"Branding",previewImage:"img/case-studies/silverback-gaming/sb-preview.png",articleUrl:"/case-studies/silverback-gaming",creationDate:"14 Dec 2023",description:"The branding of a Youtube Gaming Channel."},{title:"Van Belle Flowers Branding",slug:"florist-branding",type:"Branding",previewImage:"img/case-studies/florist-branding/vb-preview.png",articleUrl:"/case-studies/florist-branding",creationDate:"30 May 2024",description:"The rebranding of a local flower shop's digital presence"}]},x=[{title:"Message Counter",slug:"message-counter",lastUpdated:"20 Jul 2021",html:`
			<p>
				<strong>Message Counter (the "app")</strong> does not collect or offer to share any personal information or Personally Identifiable Information (PII).
			</p>
			<br />
			<p>
				The app uses a background service to count the SMS messages that are sent by your device. <br />
				The app does not process the contents of the messages in any way.
			</p>
			<br />
			<p>
				For displaying some data, the app accesses your device's contacts and messages. <br />
				This information is only read and not stored in any form or shared by the app.
			</p>
			<br />
			<p>
				The complete source code of the app is published at <a class="is-link" href="https://github.com/midhunhk/message-counter">https://github.com/midhunhk/message-counter</a> and can be reviewed. <br />
				All published builds are uploaded to the <a class="is-link" href="https://github.com/midhunhk/message-counter">Releases</a> page after signing with the license used to upload to Google Play.
			</p>
			<br />
			<p>
				As of version 4.1.1, we have integrated Firebase Analytics with the app to monitor the usage and crash reporting. <br />
				No personally Identifiable Information is tracked or logged for this purpose. <br />
				<a class="is-link" href="https://firebase.google.com/policies/analytics">Google Analytics for Firebase Use Policy</a>
			</p>
			<br />
			<p>If you have any questions or concerns, please submit a comment or send an email to [<i>aeapplabs.ca+support at gmail.com</i>]</p>
		`},{title:"Random Contact",slug:"random-contact",lastUpdated:"20 Jul 2021",html:`
			<p>
				<strong>Random Contact (the "app")</strong> does not collect or offer to share any personal information.
			</p>
			<br />
			<p>
				We respect your privacy and do not request you to provide any personal information. <br />
				For displaying the data, the app accesses your contacts databases stored on the phone.  <br />
				This information is only read and not stored in any form or shared by the app. <br />
				The app <u>does not</u> collect or maintain your personal information including name, addresses, phone numbers etc.
			</p>
			<br />
			<p>If you have any questions or concerns, please send an email to [<i>aeapplabs.ca+support at gmail.com</i>]</p>
		`},{title:"PNR Status App",slug:"pnr-status-app",lastUpdated:"10 Jul 2024",html:`
			<p>
				<strong>PNRStatusApp (the "app")</strong> does not collect offer share any personal information. <br/>
				This app only provides a convenience to store/save PNR Numbers that the user enters <br/>
				This app is not official or endorsed by Indian Rail. <br />
				(The official website is: https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html)
			</p>
			<br />
			<p>
				The "PNR Number" that you enter is saved in an internal database for retrieval on app startup. <br />
				No part of the PNR information retrieved from the internet is persisted by the app. <br />
				The app uses third party services which may or may not provide accurate results, which may change their interfaces without notice. <br />
			</p>
			<br />
			<p>If you have any questions or concerns, please send an email to [<i>aeapplabs.ca+support at gmail.com</i>]</p>
		`},{title:"AE Sticker App",slug:"ae-sticker-app",lastUpdated:"20 Jul 2021",html:`
			<p>
				<strong>AE Sticker App (the "app")</strong> does not collect or offer to share any personal information or Personally Identifiable Information (PII).
			</p>
			<br />
			<p>
				As of Version 1.3.0, the app integrates Firebase Analytics to study and improve the content. <br />
				This however does not store or transmit any information about the user, their location or any PII. <br />
				<a class="is-link" href="https://firebase.google.com/policies/analytics">Google Analytics for Firebase Use Policy</a>
			</p>
			<br />
			<p>If you have any questions or concerns, please send an email to [<i>aeapplabs.ca+support at gmail.com</i>]</p>
		`},{title:"C19 Counter App",slug:"c19-counter-app",lastUpdated:"20 Jul 2021",html:`
			<p>
				C19 Counter App (the "app") does not collect or offer to share any personal information or Personally Identifiable Information (PII).
			</p>
			<br />
			<p>
				The app uses a REST web service to display the data, and no information about your device or location is captured or shared.
			</p>
			<br />
			<p>If you have any questions or concerns, please send an email to [<i>aeapplabs.ca+support at gmail.com</i>]</p>
		`},{title:"midhunhk.com",slug:"midhunhk-blog",lastUpdated:"22 Nov 2021",html:`
		<p>
			The website for "midhunhk" located at <a class="is-link" href="https://www.midhunhk.com/">https://www.midhunhk.com</a>, from here onwards referred to as "site"
			<u>does not collect or offer to share</u> any personal information or Personally Identifiable Information (PII). 
			<br/>This website does not create or maintain any cookies.
		</p>
		<br />
		<p class="subtitle">Website Analytics</p>
		<p>
			We may make use of a selected third-party vendor like <a class="is-link" href="https://support.google.com/analytics/answer/6004245?hl=en">Google Analytics</a>, to allow tracking technologies using third-party cookies, to analyze and track users’ use of the "site", to determine the popularity of certain content and improve performance. 
			This data does not include any personally identifiable or personal information. <br/> <br/>
			By accessing the Site, you consent to the collection and use of your information by these third-party vendors. <br/>
			You are encouraged to review their privacy policy and contact them directly for responses to your questions. <br/>
			We do not record or transfer personal information to these third-party vendors. <br/><br/>
			However, if you do not want any information to be collected and used by tracking technologies, you can visit the third-party vendor or the
			<a class="is-link" href="https://tools.google.com/dlpage/gaoptout/?hl=en-GB">Google Analytics Opt-out Browser Add-on</a>.
		</p><br/>
		<p>Privacy Policy for <a class="is-link" href="https://policies.google.com/privacy?hl=en-US">Google Analytics</a></p>
		<br />
		<p>If you have any questions or concerns, please send an email to [<i>aeapplabs.ca at gmail.com</i>].</p>
		<br />
		<p class="subtitle">Website Advertisements</p>
		<p>
			We may partner with a third party vendor inorder to incorporate native ads on selected pages of the website.
			<br/>
			Privacy Policy for <a class="is-link" href="https://www.infolinks.com/privacy-policy/" target="_blank">Infolinks </a>
		</p>
		`}],R={data:[{title:"Java Spring Microservices Course",slug:"java-spring-microservices",type:"Development",tags:["Java","Spring Boot","Microservices"],articleUrl:"/courses/java-spring-microservices",creationDate:"25 Aug 2025",shortDescription:"Fast-track your journey from Java fundamentals to building scalable microservices in just 3 months! ",longDescription:"This hands-on course teaches you core Java, RESTful APIs with Spring Boot, database integration with JPA, application security, and modern microservices architecture with Spring Cloud and Docker. Build real-world projects like a Blog Management System and a Mini E-commerce platform, and gain the skills to design, develop, and deploy backend systems used in professional software development. Perfect for aspiring backend or full-stack developers looking to launch their career."},{title:"Mastering Spring Boot",slug:"mastering-spring-boot",type:"Development",tags:["Java","Spring Boot","Microservices"],articleUrl:"/courses/mastering-spring-boot",creationDate:"26 Aug 2025",shortDescription:"A Beginner to Advanced Crash Course on Spring Boot",longDescription:"This hands-on course teaches you Java Web Development using Spring Boot. It is planned to be completed in 5 weeks and includes a hands on project to learn."}]},P={categoryId:"3",category:"web",categoryTitle:"Web Projects",projects:[{id:"301",icon:"img/portfolio/icons/icon_tlf.png",title:"The Lotus Foundation",featured:!1,tags:[{id:"1",name:"Wordpress",className:"is-primary"}],description:"Designed and developed the website for a non profit organization based on Ontario, Canada. The project was designed with Adobe XD and developed using wordpress and a custom theme engine.",buttons:[{id:"330101",isPrimary:!1,text:"Case Study",target:"https://ae-app-labs.github.io/case-studies/tlf"},{id:"330102",isPrimary:!0,text:"View Project",target:"https://www.thelotusfoundation.org"}]},{id:"302",icon:"img/portfolio/icons/icon_cryptx_web.png",title:"CryptX Web",featured:!1,tags:[{id:"1",name:"Svelte",className:"is-primary"}],description:"A simple web app built on Svelte and Bulma to encrypt and decrypt test messages using AES algorithm.",buttons:[{id:"330201",isPrimary:!0,text:"View Project",target:"https://www.midhunhk.com/cryptx-web/"}]}]},k={categoryId:"2",category:"desktop",categoryTitle:"Desktop Applications",projects:[{id:"201",icon:"img/portfolio/icons/icon_triton_player.png",title:"Triton Player",featured:!0,featuredImage:"img/portfolio/desktop/project_screenshot_triton.png?t=202206161947",tags:[{id:"1",name:"Adobe Air",className:"is-primary"},{id:"2",name:"Flash Platform",className:"is-link"},{id:"3",name:"Open Source",className:"is-success"}],description:"Triton Player is an MP3 player based on Adobe AIR platform. <br/><br/> What started as an educational endeavour while working on Adobe Flex and the AIR platform, was released to the general public.<br/><br/>This application is considered to be feature complete and is no longer maintained or updated.",buttons:[{id:"220101",isPrimary:!0,text:"View Project",target:"https://github.com/midhunhk/triton-player"}]},{id:"202",icon:"img/portfolio/icons/icon_cryptx.png",title:"Cryptx",featured:!1,tags:[{id:"1",name:"Adobe Air",className:"is-primary"},{id:"2",name:"Flash Platform",className:"is-link"}],description:`Cryptx is a file encryption/decryption app developed with Adobe Air that uses 128-bit AES Encryption. 
It was developed as a proof of concept application that uses Green Threads since ActionScript is single threaded.`,buttons:[{id:"220201",isPrimary:!0,text:"View Project",target:"https://github.com/midhunhk/cryptx"}]}]},I={categoryId:"1",category:"android",categoryTitle:"Android Projects",projects:[{id:"101",icon:"img/portfolio/icons/icon_message_counter.png",title:"Message Counter",featured:!0,featuredImage:"img/portfolio/mobile/message_counter_screens.png?t=202206161948",tags:[{id:"1",name:"Android",className:"is-primary"},{id:"2",name:"Travis CI",className:"is-danger"},{id:"3",name:"Open Source",className:"is-success"}],description:"Message Counter is a modern Android app that counts the number of text messages a user sends, and has been download more than 1,00,000 times, translated into 5 languages and used in more than 10 countries around the world.<br/><br/>It is now entirely rewritten in Kotlin and makes use of Android Architecture Components and Kotlin Extensions.",buttons:[{id:"1",isPrimary:!1,text:"View Project",target:"https://github.com/midhunhk/message-counter/"},{id:"2",isPrimary:!0,text:"View Page",target:"https://midhunhk.github.io/message-counter/"}]},{id:"104",icon:"img/portfolio/icons/icon_trip_meter.png",title:"Trip-O-Meter",featured:!1,tags:[{id:"1",name:"Android",className:"is-primary"},{id:"2",name:"Travis CI",className:"is-danger"}],description:"Trip O Meter was an attempt to integrate multiple features into a single application for managing a trip. It presently includes a fuel cost calculator and expense manager when going with friends. <br/><br/>The development of this project is currently on hold.",buttons:[{id:"1",isPrimary:!0,text:"View Project",target:"https://midhunhk.github.io/trip-o-meter/"}]},{id:"102",icon:"img/portfolio/icons/icon_lib_ae_apps.png",title:"lib-aeapps",featured:!1,tags:[{id:"1",name:"Android",className:"is-primary"},{id:"2",name:"Travis CI",className:"is-danger"}],description:"An Android library for application developers which is constantly improved. Most of the apps created by ae app labs use this library to enable code reuse and faster development cycle.",buttons:[{id:"1",isPrimary:!0,text:"View Page",target:"https://midhunhk.github.io/lib-aeapps/"}]},{id:"103",icon:"img/portfolio/icons/icon_random_contact.png",title:"Random Contact",featured:!1,tags:[{id:"1",name:"Android",className:"is-primary"}],description:"Random Contact is an Android app that shows the details of a random contact from the contacts list. This is an experimental, fun and personal project which is open source. And surprisingly it has a good user base.",buttons:[{id:"3",isPrimary:!1,text:"Case Study",target:"https://ae-app-labs.github.io/case-studies/random-contact"},{id:"1",isPrimary:!0,text:"View Page",target:"https://midhunhk.github.io/random-contact/"}]},{id:"105",icon:"img/portfolio/icons/icon_c19_counter.png",title:"C19 Counter",featured:!1,tags:[{id:"1",name:"Android",className:"is-primary"}],description:"C-19 Counter is a modern Android app with a NodeJS backend to show the daily status of C19 for country or states in India.",buttons:[{id:"1",isPrimary:!0,text:"View Project",target:"https://github.com/midhunhk/c19-counter-app"}]}]},G=n(null,e=>{e(B)}),O=n(null,e=>{e(R)}),H=n(null,e=>{e(M)}),K=n(null,e=>{e(x)}),X=n(null,e=>{e(k)}),Z=n(null,e=>{e(I)}),z=n(null,e=>{e(P)}),Y=n(k.projects.concat(I.projects,P.projects).filter(e=>e.featured));export{O as a,Z as b,H as c,F as d,E as e,X as f,Y as g,V as o,K as p,G as t,q as u,z as w};
