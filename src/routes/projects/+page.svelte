<script>
	import CategorySection from '$lib/components/CategorySection.svelte';
	import { webProjects, desktopProjects, androidProjects } from '$lib/data/store.js';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>ae app labs | Projects</title>
</svelte:head>

<section class="section" transition:fade>
	<div class="container">
		<CategorySection sectionData={androidProjects}/>

		<CategorySection sectionData={desktopProjects}/>
		
		<CategorySection sectionData={webProjects}/>
	</div>
</section>