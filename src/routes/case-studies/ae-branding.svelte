<script>
	import { onMount } from "svelte"
	import { gsap, Power4 } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";

// Run animations using gsap on mount
	onMount( () => {
		gsap.registerPlugin(ScrollTrigger)
		const tl = gsap.timeline( {defaults: {duration:1, ease: Power4.easeInOut} } )
		tl.from('.stagger1',{opacity: 0, delay: .5,y: -60,stagger: .4})
		tl.from('.fadeIn', {opacity: 0}, "-=.6")
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
	<title>Case Studies - AE Branding</title>
</svelte:head>

<section class="section-header primary-bg">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-6 is-offset-1">
				<div class="is-size-2 stagger1">The brand of ae</div>
			</div>
			<div class="column is-3">
				<div class="pr-2">
					<p class="is-size-4 stagger2">The history of creating a unique brand identity for ae.</p>
					<p class="is-size-5 mt-2 stagger2">AE is all about UX &amp; UI. Excellence in all design efforts were always of the highest priority.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column is-4 is-centered-content is-offset-2 stagger2">
				<p class="is-size-4 mb-4 has-text-weight-bold">The First Logo</p>
				<p class="is-size-5">The initial and short lived logo for AE was very simple, but blocky.</p>
				<br/>
				<p class="is-size-6">2005</p>
				<p class="is-size-6">It was created with Adobe Flash as a vector graphic.</p>
			</div>
			<div class="column is-4">
				<img src="img/case-studies/ae-branding/ae_logo_v0.png" alt="first logo" class="fadeIn">
			</div>
			<div class="column is-2"></div>
		</div>
	</div>
</section>

<section class="section primary-bg">
	<div class="container">
		<div class="columns pt-6 pb-6 is-vcentered">
			<div class="column is-3 is-offset-2">
				<figure class="is-centered-content">
					<img src="img/case-studies/ae-branding/ae_logo_v1.jpg" alt="official version 1" class="fadeIn">
				</figure>
			</div>
			
			<div class="column is-3 is-centered-content pr-4 stagger2">
				<p class="is-size-4 mb-4 has-text-weight-bold">The Retired</p>
				<p class="is-size-5">
					The most widely used logo was a little bit more creative and designed to emphasize symmetry.
				</p>
				<br/>
				<p class="is-size-6">2005 - 2020</p>
				<p class="is-size-6">It was also created with Adobe Flash as a vector graphic.</p>
			</div>

		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="columns pt-3">
			<div class="column is-one-third">
				<img src="img/case-studies/ae-branding/ae_logo_v2_color.jpg" alt="redesign color versions" class="fadeIn">
			</div>
		</div>
		<div class="columns pt-3">
			<div class="column is-offset-4 is-4 stagger2">
				<p class="is-size-4 mb-4 has-text-weight-bold has-text-left">A Modern Approach</p>
				<p class="is-size-5">
					The logo was simplified while retaining the idea of symmetry.
					Also a dash of color with a slight gradient is incorporated.
					An alternate monochrome variations are also present.
				</p>
				<br/>
				<p class="is-size-6">2020 - Present</p>
				<p class="is-size-6">It was created with Adobe XD as a vector graphic.</p>
			</div>
		</div>
		<div class="columns pt-3">
			<div class="column is-two-thirds is-hidden-mobile">&nbsp;</div>
			<div class="column">
				<img src="img/case-studies/ae-branding/ae_logo_v2_bw.jpg" alt="redesign monochrome versions" class="fadeIn">
			</div>
		</div>
	</div>
</section>

<!--
<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column is-half">&nbsp;</div>
			<div class="column is-half"></div>
		</div>
	</div>
</section>
-->