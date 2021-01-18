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
	<title>Case Studies - The Lotus Foundation</title>
</svelte:head>

<style>

</style>

<section class="section-header primary-bg">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-6 is-offset-1 is-dark-link">
				<div class="is-size-2 stagger1">The Lotus Foundation</div>
                <div class="stagger1">
                    <a href="https://www.thelotusfoundation.org/" target="_blank">
                        See the Project
                        <i class="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                    </a>
                </div>
			</div>
			<div class="column is-3">
				<div class="pr-2">
					<p class="is-size-4 stagger2">How we created a unique design, and developed the website for a non profit organization.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-half">
                <img src="/img/case-studies/tlf/tlf_assets.png" alt="assets" />
            </div>
			<div class="column is-4 is-offset-1 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Logo &amp; Palette</p>
				<p class="is-size-5">The organization's current logo was already provided and we created a color palette based on the colors present in the logo.</p>
                <br/>
                <p class="is-size-6">More on the usage of the color palette later.</p>
            </div>
            <div class="column is-1">&nbsp;</div>
		</div>
	</div>
</section>

<!-- Section - Wireframe -->
<section class="section section-full-width">
    <img src="/img/case-studies/tlf/tlf_wireframes.png" alt="wireframes" />
</section>

<section class="section">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-6 is-hidden-mobile">
                &nbsp;
            </div>
			<div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Wireframing</p>
				<p class="is-size-5">The first step was to start with a few wireframes to capture the most important sections of the website as per the requirements.</p> <br/>
                <p class="is-size-6">Designing without color is great at this stage since everyone gets to concentrate on the layouts and structures.</p>
            </div>
		</div>
	</div>
</section>

<!-- Section - Mockups -->
<section class="section section-full-width">
    <img src="/img/case-studies/tlf/tlf_mockups.png" alt="mockups" />
</section>

<section class="section">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-5 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Design Mockup</p>
				<p class="is-size-5">The second step in design was to create a mockup based on the approved wireframes.</p> <br/>
                <p class="is-size-6">Stock images were used, and we finally made use of the color palette.</p>
            </div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column is-half">&nbsp;</div>
			<div class="column is-half"></div>
		</div>
	</div>
</section>