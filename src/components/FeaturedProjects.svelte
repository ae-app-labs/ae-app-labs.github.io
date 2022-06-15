<script>
	import { featuredProjects } from './../data/store.js'

	$: featuredProjectsData = $featuredProjects
    $: displayData = featuredProjectsData.slice( 0, Math.min(2, featuredProjectsData.length) )
</script>

<section class="section">
    <div id="featuredProjects" class="container py-6 projects">
        <h1 class="is-size-1 is-family-secondary">
            Featured Projects
          </h1>
        
          <div class="columns">
              <!-- Start Column 1 -->
              {#each featuredProjectsData as projectData, index(projectData.id)}
                <div class="column is-half">
                    <div class="card has-background-info is-shadowless is-slightly-rounded">
                        <div class="card-image grow-effect">
                            <figure class="image p-0 m-0">
                                <img src="{projectData.featuredImage}" alt="Banner">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <p class="is-size-3 mb-4">{projectData.title}</p>
                                <p class="is-size-6">
                                    {#each projectData.tags as tag}
                                        <span class="tag {tag.className} is-rounded mr-2">{tag.name}</span>
                                    {/each}
                                </p>
                                <p class="is-size-5">
                                    {@html projectData.description}
                                </p>
                                <p>
                                    {#each projectData.buttons as button}
                                        {#if button.isPrimary}
                                            <a class="button is-success has-text-black mr-2 mt-2" href="{button.target}">{button.text}</a>
                                        {:else}
                                            <a class="button is-outlined is-warning has-text-error mr-2 mt-2" href="{button.target}">{button.text}</a>
                                        {/if}
                                    {/each}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
            <!-- End Column 1 -->

        </div>

        <a href="/projects" class="is-uppercase is-link">
            All Projects <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</section>