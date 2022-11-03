<script>
	import EmbedVideoCard from '$lib/components/EmbedVideoCard.svelte';
	import { tutorials } from '$lib/data/store.js'
	import { fade } from 'svelte/transition';

	$: tutorialsData = $tutorials.data
</script>

<svelte:head>
	<title>ae app labs | Tutorials</title>
</svelte:head>

<section class="section" transition:fade>
    <div class="container content">
        <div class="columns">
            <div class="column is-5 fadeInUp">
                <p class="is-size-3 is-family-secondary">Design and Development Tutorials</p>
                <p class="subtitle">See a list of curated video tutorials hosted on Youtube. These range from tutorials on UI design, to complete landing page development.</p>
                <p class="is-size-4 pt-4">
                    <a href="https://www.youtube.com/@aeapplabs" class="button is-link is-medium" target="_blank"> 
						Visit Channel 
						<i class="fas fa-external-link-alt has-text-black pl-2" aria-hidden="true"></i>
					</a>
                </p>
            </div>
            <div class="column is-7">
                <!-- Loop through the tutorials array in reverse order so that the latest video is shown first-->
                {#each tutorialsData.reverse() as tutorial, index (tutorial.id)}
                    <EmbedVideoCard {tutorial} {index} />
                {/each}
                <!-- End videos list column -->
            </div>
        </div>
    </div>
</section>
