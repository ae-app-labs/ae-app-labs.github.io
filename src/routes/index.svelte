<script>
	import Tags from '../components/Tags.svelte'
	import Services from '../components/Services.svelte'
	import CategorySection from '../components/CategorySection.svelte'
	import { desktopProjects, androidProjects } from '../data/store'

	const scrollToSection = (section) => {
		const element = document.getElementById(section)
		const y = element.getBoundingClientRect().top + window.scrollY;
		window.scroll({
		top: y,
		behavior: 'smooth'
		});
		return false
	}
</script>

<svelte:head>
	<title>ae app labs | organization page</title>
</svelte:head>

<!-- This is the hero on the landing page -->
<section class="hero is-medium is-primary hero-landing">
	<div class="hero-body">
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
<Tags/>

<Services/>

<!-- Show projects by category -->
<CategorySection sectionData={androidProjects}/>

<CategorySection sectionData={desktopProjects}/>
