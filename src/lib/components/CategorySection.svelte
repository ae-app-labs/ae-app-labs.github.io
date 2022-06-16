<script>
    import Project from './Project.svelte'
    export let sectionData

    $: projects = $sectionData.projects
</script>

<div id="projects-{$sectionData.category}" name="projects-{$sectionData.category}">
    <div class="is-size-3 my-4 py-4 is-family-secondary fadeInUp">{$sectionData.categoryTitle}</div>
    
    <div class="columns is-multiline" >
        {#each projects as project (project.id)}
            <div class="column is-half">
                <Project projectData={project}/>
            </div>
        {/each}
    </div>
</div>