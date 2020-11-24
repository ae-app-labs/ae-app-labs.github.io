<script>
    import Project from './Project.svelte'

    export let sectionData

    $: projects = $sectionData.projects
</script>

<section class="section" id="projects-{$sectionData.category}" name="projects-{$sectionData.category}">
	<div class="container is-fluid">
		<div class="subtitle section-title">{$sectionData.categoryTitle}</div>
		
		<div class="columns is-multiline" >
            {#each projects as project (project.id)}
			    <div class="column is-half">
                    <Project projectData={project}/>
		        </div>
            {/each}
        </div>
	</div>
</section>