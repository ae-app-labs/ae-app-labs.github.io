<script>
	import CategorySection from '../components/CategorySection.svelte';
	import { webProjects, desktopProjects, androidProjects } from './../data/store.js';
	
</script>

<svelte:head>
	<title>ae app labs | Projects</title>
</svelte:head>

<section class="section">
	<div class="container">
		<CategorySection sectionData={androidProjects}/>

		<CategorySection sectionData={desktopProjects}/>
		
		<CategorySection sectionData={webProjects}/>
	</div>
</section>