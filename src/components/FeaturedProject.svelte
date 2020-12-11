<script>
    export let projectData

    $: buttons = projectData.buttons
    $: tags = projectData.tags
</script>


<div class="card box featured transition2">
    <div class="content columns">
        <div class="featured-info column is-2 is-narrow">
            <div>
                <figure class="image is-96x96">
                    <img src="{projectData.icon}" alt="{projectData.title}" class="v-lazy-image v-lazy-image-loaded">
                </figure>
            </div>
            <div>
                <p class="title is-5 is-size-6-mobile has-text-centered">{projectData.title}</p>
                {#if tags.length > 0}
                    <p class="subtitle is-6 has-text-centered">
                        {#each tags as tag (tag.id)}
                            <span class="tag {tag.className} is-light mr-2">{tag.name}</span>
                        {/each}
                    </p>
                {/if}
            </div>
        </div>
        <div class="featured-desc column">
            <div>
                {@html projectData.description}        
            </div>
            <div class="is-right featured-buttons">
                {#each buttons as button (button.id)}
                    {#if button.isPrimary}
                        <a class="button is-primary is-small is-rounded mr-2" href="{button.target}">{button.text}</a>
                    {:else}
                        <a class="button is-primary is-outlined is-small is-rounded mr-2" href="{button.target}">{button.text}</a>
                    {/if}
                {/each}
            </div>
        </div>
        <div class="featured-image is-hidden-mobile column">
            {#if projectData.featuredImage}
                <figure class="image">
                    <img src="{projectData.featuredImage}" alt="{projectData.title}" class="v-lazy-image v-lazy-image-loaded">
                </figure>
            {/if}
        </div>

    </div>
</div>