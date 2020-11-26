<script>
    export let projectData

    $: buttons = projectData.buttons
    $: tags = projectData.tags
</script>


<div class="card box featured">
    <div class="content">
        <div class="featured-info">
            <div>
                <figure class="image is-96x96">
                    <img src="{projectData.icon}" alt="{projectData.title}" class="v-lazy-image v-lazy-image-loaded">
                </figure>
            </div>
            <div>
                <p class="title is-4 is-size-3-mobile has-text-centered">{projectData.title}</p>
                {#if tags.length > 0}
                    <p class="subtitle is-6 is-hidden-mobile has-text-centered">
                        {#each tags as tag (tag.id)}
                            <span class="tag {tag.className} mr-1">{tag.name}</span>
                        {/each}
                    </p>
                {/if}
            </div>
        </div>
        <div class="featured-desc">
            <div>
                {projectData.description}        
            </div>
            <div class="is-right featured-buttons">
                {#each buttons as button (button.id)}
                    {#if button.isPrimary}
                        <a class="button is-primary is-small is-rounded mr-1" href="{button.target}">{button.text}</a>
                    {:else}
                        <a class="button is-primary is-outlined is-small is-rounded mr-1" href="{button.target}">{button.text}</a>
                    {/if}
                {/each}
            </div>
        </div>
        <div class="featured-image">
        
        </div>

    </div>
</div>