<script>
	import Tags from '../components/Tags.svelte'
	import CategorySection from '../components/CategorySection.svelte'
	import { desktopProjects, androidProjects } from '../data/store'
	

	// console.log( $desktopProjects )
</script>

<svelte:head>
	<title>ae app labs | organization page</title>
</svelte:head>

<section class="hero is-medium is-primary">
	<div class="hero-body">
		<div class="container">
			<div class="columns">
				<div class="column is-narrow is-hidden-mobile">
					<img src="/img/icons/app_labs.png" height="72px" width="72px" alt="ae app labs" />
				</div>
				<div class="column">
					<h1 class="title">ae app labs</h1>
					<h1 class="subtitle">Research &amp; Learning</h1>
				</div>
			</div>
		</div>
	</div>
</section>

<Tags/>

<CategorySection sectionData={androidProjects}/>

<CategorySection sectionData={desktopProjects}/>
