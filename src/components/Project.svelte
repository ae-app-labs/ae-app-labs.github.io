<script>
    export let projectData

    $: buttons = projectData.buttons
    $: tags = projectData.tags
</script>

<!--
    <div class="card box" class:has-background-primary-dark={projectData.featured} class:has-background-info={!projectData.featured}>
-->
<div class="card box has-background-info">
    <div class="content">
        <div class="media mb-0">
            <div class="media-left">
                <figure class="image is-64x64">
                    <img src="{projectData.icon}" alt="{projectData.title}" class="v-lazy-image v-lazy-image-loaded">
                </figure>
            </div>
            <div class="media-content my-2">
                <p class="title is-4 is-size-5-mobile">{projectData.title}</p>
                {#if tags.length > 0}
                    <p class="subtitle is-6">
                        {#each tags as tag (tag.id)}
                            <span class="tag {tag.className} mr-2 mt-2">{tag.name}</span>
                        {/each}
                    </p>
                {/if}
            </div>
        </div>
        <div class="content project-desc my-4">
            {@html projectData.description}
        </div>
        <div class="is-right">
            {#each buttons as button (button.id)}
                {#if button.isPrimary}
                    <a class="button is-primary is-small is-rounded mr-2" href="{button.target}">{button.text}</a>
                {:else}
                    <a class="button is-warning is-outlined is-small is-rounded mr-2" href="{button.target}">{button.text}</a>
                {/if}
            {/each}
        </div>
    </div>
</div>