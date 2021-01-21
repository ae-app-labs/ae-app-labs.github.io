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

<section class="section mt-2 mb-6">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-8 is-hidden-mobile">
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

<section class="section mt-2 mb-6">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-6 is-hidden-mobile">
                &nbsp;
            </div>
			<div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Design Mockup</p>
				<p class="is-size-5">The second step in design was to create a mockup based on the approved wireframes.</p> <br/>
                <p class="is-size-6">Stock images were used, and we finally made use of the color palette.</p>
            </div>
		</div>
	</div>
</section>

<!-- Section - Mission -->
<section class="section section-full-width">
    <img src="/img/case-studies/tlf/section_mission.jpg" alt="mission section" />
</section>

<section class="section mt-2 mb-6">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-4 stagger2 is-offset-2">
                <p class="is-size-4 mb-4 has-text-weight-bold">The Mission Section</p>
				<p class="is-size-5">The organization works under five main tenets, 
					and we decided to signify each with a unique color from the palette which was created from the logo.</p> <br/>
                <p class="is-size-6">A number of ideas were bounced around to incorporate this, and finally selected the above design.</p>
            </div>
			<div class="column is-6 stagger2 p-2">
				<svg xmlns="http://www.w3.org/2000/svg" width="264.588" height="206.216" viewBox="0 0 264.588 206.216"><g transform="translate(-750.762 -187.108)"><path d="M-1111.191,10567.267s276.272,6.585,241.531-199.583" transform="translate(1864 -10176)" fill="none" stroke="#db3069" stroke-linecap="round" stroke-width="4" stroke-dasharray="12 13"/><path d="M-637.484,10411.053l14.511-16.557,17.953,16.557" transform="translate(1617.543 -10204.526)" fill="none" stroke="#db3069" stroke-linecap="round" stroke-width="4"/></g></svg>
			</div>
		</div>
	</div>
</section>

<!-- Section - Final Design -->
<section class="section section-full-width">
    <img src="/img/case-studies/tlf/tlf_final_design.png" alt="final design" />
</section>

<section class="section mt-2">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-4 is-hidden-mobile">
                &nbsp;
            </div>
			<div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">The Final Design</p>
				<p class="is-size-5">Finally, once the mockups were approved we began to develop the site incorporating a few suggestions.</p> <br/>
                <p class="is-size-6">The site is powered by Wordpress, using a custom layout engine. Wordpress helps with the content management and ease of customization.</p>
            </div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column has-text-centered">
				<a href="https://www.thelotusfoundation.org/" class="button is-primary" target="_blank">Visit Project</a>
			</div>
		</div>
	</div>
</section>