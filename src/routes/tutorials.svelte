<script>
    import CommonHero from "../components/CommonHero.svelte";
    import { tutorials } from '../data/store'

    $: tutorialsData = $tutorials.data
</script>

<svelte:head>
    <title>ae app labs | Tutorials</title>
</svelte:head>

<CommonHero title="Tutorials" subtitle="" />

<section class="section">
    <div class="container content">
        <div class="columns">
            <div class="column is-5">
                <h2 class="is-size-2 is-size-4-mobile">Design and Development</h2>
                <h3 class="is-size-3 is-size-6-mobile">Video tutorials on Youtube</h3>
                <p class="is-size-4 pt-4">
                    <a href="https://www.youtube.com/channel/UCCYOqc-QhZCbWtjpHZ5ROXw" class="button is-primary is-rounded"> Visit Channel</a>
                </p>
            </div>
            <div class="column is-7">
                <!-- Loop through the tutorials array in reverse order so that the latest video is shown first-->
                {#each tutorialsData.reverse() as tutorial, index (tutorial.id)}
                    <div class="card mb-4">
                        <div class="card-content" class:has-background-primary-dark={index==0}>
                            <h3>{ tutorial.title } </h3>
                            
                            <p class="mb-2 has-text-centered">
                                {#each tutorial.tags as tag (tag.id)}
                                    <span class="tag {tag.className} is-light mr-2 mt-2">{tag.name}</span>
                                {/each}
                            </p>
    
                            <div class="has-text-centered">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="{ tutorial.videoUrl }?controls=0"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                />
                            </div>
                        </div>
                    </div>
                {/each}
                <!-- End videos list column -->
            </div>
        </div>
    </div>
</section>
