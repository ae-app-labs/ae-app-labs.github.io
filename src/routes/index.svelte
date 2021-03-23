<script>
	import Tags from '../components/Tags.svelte'
	import Services from '../components/Services.svelte'
	import CategorySection from '../components/CategorySection.svelte'
	import LandingHero from '../components/LandingHero.svelte'
	import { desktopProjects, androidProjects, webProjects } from '../data/store'
	
	import { onMount } from "svelte"
	import { gsap, Power4 } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	// Run animations using gsap on mount
	onMount( () => {
		// Timeline One
		const tl = gsap.timeline( {defaults: {duration:1, ease: Power4.easeInOut} } )
		tl.from('.stagger1',{opacity: 0, delay: .5,y: -60,stagger: .4})
		tl.from('.fadeIn', {opacity: 0}, "-=.6")
		tl.from('.stagger2', {opacity: 0, delay: 0, y: 100, stagger:.2},"-=1")

		// Timeline Two
		var tl2 = gsap.timeline({defaults:{duration: 1.5, delay:1}})
		tl2.to(".flask-inner", {opacity: .1, repeat: -1, yoyo:true})

		gsap.from('.tag',{opacity: 0, delay: 3.5,y: -80,stagger: .2})

		// Enable scroll trigger
		gsap.registerPlugin(ScrollTrigger)
		gsap.from('.transition2', {
            scrollTrigger: {
				trigger: '.transition2',
				toggleActions : 'play pause resume none',
				start: "top center"
            },
            y: 120,
            opacity: 0,
            duration: 1,
            stagger: .6
		})
		
	})
</script>

<svelte:head>
	<title>ae app labs | organization page</title>
</svelte:head>

<LandingHero/>

<main>

	<!-- A tag cloud -->
	<Tags />

	<Services/>

	<!-- Show projects by category -->
	
	<CategorySection sectionData={androidProjects}/>

	<CategorySection sectionData={desktopProjects}/>
	
	<CategorySection sectionData={webProjects}/>

</main>