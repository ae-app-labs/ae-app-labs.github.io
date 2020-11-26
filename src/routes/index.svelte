<script>
	import Tags from '../components/Tags.svelte'
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
			<div class="columns">
				<div class="column has-text-link">
					<h1 class="title">Research & Learning</h1>
					<h1 class="subtitle">Open Source Web and Mobile development and experiments</h1>
					<button class="button is-warning is-medium pl-2 pr-2" on:click={ () => scrollToSection('projects-android')}>Learn More</button>
				</div>
				<div class="column is-narrow is-hidden-mobile">
					<!-- to be filled later -->
				</div>
			</div>
		</div>
	</div>
</section>

<!-- A tag cloud -->
<Tags/>

<!-- Show projects by category -->
<CategorySection sectionData={androidProjects}/>

<CategorySection sectionData={desktopProjects}/>
