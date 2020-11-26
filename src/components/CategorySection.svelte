<script>
    import Project from './Project.svelte'
    import FeaturedProject from './FeaturedProject.svelte'

    export let sectionData

    $: projects = $sectionData.projects
</script>

<section class="section" id="projects-{$sectionData.category}" name="projects-{$sectionData.category}"
         data-wow-duration="2s" data-wow-delay="5s">
	<div class="container">
		<div class="subtitle section-title">{$sectionData.categoryTitle}</div>
		
		<div class="columns is-multiline" >
            {#each projects as project (project.id)}
                {#if project.featured}
                    <div class="column is-full">
                        <FeaturedProject projectData={project}/>
                    </div>
                {:else}
                    <div class="column is-half">
                        <Project projectData={project}/>
                    </div>
                {/if}
            {/each}
        </div>
	</div>
</section>