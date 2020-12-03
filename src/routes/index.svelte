<script>
	import Tags from '../components/Tags.svelte'
	import Services from '../components/Services.svelte'
	import CategorySection from '../components/CategorySection.svelte'
	import { desktopProjects, androidProjects } from '../data/store'
	
	import { onMount } from "svelte"
	import { gsap, Power4 } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	const scrollToSection = (section) => {
		const element = document.getElementById(section)
		const y = element.getBoundingClientRect().top + window.scrollY;
		window.scroll({
		top: y,
		behavior: 'smooth'
		});
		return false
	}

	// Run animations using gsap on mount
	onMount( () => {
		gsap.registerPlugin(ScrollTrigger)
		const tl = gsap.timeline()
		tl.from('.stagger1',{opacity: 0, duration: 1, delay: .5,y: -50,stagger: .3, ease: Power4.easeOut})
		// tl.from('.transition1', {opacity: 0, duration: .4, ease:Power4.easeOut})
		tl.from('.stagger2', {opacity: 0, duration: 1, delay: 0, y: 100, stagger:.2, ease:Power4.easeInOut},"-=1")

		gsap.from('.transition2', {
            scrollTrigger: {
                trigger: '.transition2',
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
	<title>ae app labs | organization page</title>
</svelte:head>

<!-- This is the hero on the landing page -->
<section class="hero is-medium is-primary hero-landing">
	<div class="hero-body">
		<!-- use:animate={{ type: 'from', duration: 2, opacity: 0, delay: 1 }} -->
		<div class="container">
			<div class="has-text-link">
				<h1 class="title stagger1">Research & Learning</h1>
				<h1 class="subtitle stagger1">Open Source Web and Mobile development and experiments</h1>
				<button class="button is-warning is-medium pl-2 pr-2 stagger1" on:click={ () => scrollToSection('projects-android')}>Learn More</button>
			</div>
		</div>
	</div>
</section>

<!-- A tag cloud -->
<Tags />

<Services/>

<!-- Show projects by category -->
<CategorySection sectionData={androidProjects}/>

<CategorySection sectionData={desktopProjects}/>
