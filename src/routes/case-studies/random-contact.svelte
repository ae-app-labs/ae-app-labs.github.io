<script>
	import { onMount } from "svelte"
	import { gsap, Power4 } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";

// Run animations using gsap on mount
	onMount( () => {
		gsap.registerPlugin(ScrollTrigger)
		const tl = gsap.timeline( {defaults: {duration:1, ease: Power4.easeInOut} } )
		tl.from('.stagger1',{opacity: 0, delay: .5,y: -60,stagger: .4})
		tl.from('.stagger2', {opacity: 0, delay: 0, y: 100, stagger:.2},"-=1")

		gsap.from('.section', {
            scrollTrigger: {
                trigger: '.section',
                start: "top bottom"
            },
            y: 120,
            opacity: 0,
            duration: 1,
            stagger: .6
		})
	})	
</script>

<svelte:head>
	<title>Case Studies - Random Contact Redesign</title>
</svelte:head>

<section class="section-header primary-bg">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-5">
				<div class="is-size-2 stagger1">THE CHALLENGE</div>
			</div>
			<div class="column is-6">
				<div class="pr-2">
					<p class="is-size-4 stagger2">Redesign the app to improve user experience and add additional features.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section mt-4 mb-4">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-4 is-offset-4 has-text-centered">
                <img src="/img/case-studies/random-contact/app_icon.png" alt="app icon"/>
            </div>
			<div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Random Contact App</p>
				<p class="is-size-5">This is a hobby Android project that enables its users to see a random contact from their contacts list.</p>
                <br/>
                <p class="is-size-6">It started out as an experiment and now has been downloaded more than 1000 times.</p>
            </div>
		</div>
	</div>
</section>

<section class="section mt-4">
	<div class="container">
		<div class="columns is-vcentered">
            <div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">A fresh coat of paint</p>
				<p class="is-size-5">Random Contact version 3 was designed based on the Google Material Design guidelines back when it launched for the first time.</p> <br/>
                <p class="is-size-6">Since then the design guidelines have evolved and better theme support, as well as dark mode became available.</p>
            </div>
		</div>
	</div>
</section>

<!-- Section - Wireframe -->
<section class="section section-full-width">
    <img src="/img/case-studies/random-contact/wireframes.png" alt="wireframes" />
</section>

<section class="section mt-2 mb-6">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-4 is-hidden-mobile">
                &nbsp;
            </div>
            <div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Design Approach</p>
                <p class="is-size-5">Armed with the powerful Adobe XD to design and wireframe, we started out with a basic wireframe of all the flows required for the app.</p> <br/>
                <p class="is-size-6">As always starting with the wireframe is the best approach to capture all the essentials for the UX.</p> <br/>
                <p class="is-size-6">There were some shortcomings of the previous design such as Custom Group Management hidden underneath a hanmburger menu.</p>
            </div>
        </div>
    </div>
</section>

<!-- Section - Light Mockup -->
<section class="section section-full-width">
    <img src="/img/case-studies/random-contact/mockup_light.png" alt="mockup" />
</section>

<section class="section mt-2 mb-6">
    <div class="container">
		<div class="columns is-vcentered">
			<div class="column is-8 is-hidden-mobile">
                &nbsp;
            </div>
			<div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Mocking Up</p>
				<p class="is-size-5">Moving away from the colorful and Card style design to a more modern and streamlined design was always the plan.</p> <br/>
                <p class="is-size-6">The colors of the icon are used carefully as accents in the interface.</p><br/>
                <p class="is-size-6">The toolbar was cleaned up in the final design and made use of a bottom navigation bar.</p>
            </div>
		</div>
	</div>
</section>

<!-- Section - dark Mockup -->
<section class="section section-full-width">
    <img src="/img/case-studies/random-contact/mockup_dark.png" alt="mockup" />
</section>

<section class="section mt-2">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-4 is-hidden-mobile">
                &nbsp;
            </div>
            <div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Dark Mode</p>
                <p class="is-size-5">The latest Android design guidelines and resources makes it quite easy to provide users with light and dark themes. The light theme mockup was used as a basis to design a dark variant theme.</p> 
            </div>
        </div>
    </div>
</section>

<section class="section mb-4">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column has-text-centered">
                <a href="https://play.google.com/store/apps/details?id=com.ae.apps.randomcontact" rel="nofollow" target="_blank">
                    <img alt="Get it on Google Play" width="200px" src="https://camo.githubusercontent.com/2149f526e69167218eb7eea8f21cb74a756aa43495f7acfeccfe995d40f62028/68747470733a2f2f706c61792e676f6f676c652e636f6d2f696e746c2f656e5f75732f6261646765732f696d616765732f67656e657269632f656e5f62616467655f7765625f67656e657269632e706e67" data-canonical-src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" style="max-width:100%;">
                </a>
			</div>
		</div>
	</div>
</section>

<!-- Section - Promotional -->
<section class="section section-full-width">
    <img src="/img/case-studies/random-contact/promotional.png" alt="mockup" />
</section>