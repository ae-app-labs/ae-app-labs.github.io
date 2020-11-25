<script>
    import Project from './Project.svelte'

    export let sectionData

    $: projects = $sectionData.projects
</script>

<section class="section wow slideInLeft" id="projects-{$sectionData.category}" name="projects-{$sectionData.category}"
         data-wow-duration="2s" data-wow-delay="5s">
	<div class="container">
		<div class="subtitle section-title">{$sectionData.categoryTitle}</div>
		
		<div class="columns is-multiline" >
            {#each projects as project (project.id)}
			    <div class="column is-half wow fadeInUp" data-wow-duration="2s" data-wow-delay="5s">
                    <Project projectData={project}/>
		        </div>
            {/each}
        </div>
	</div>
</section>