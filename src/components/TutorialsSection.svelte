<script>
	import { tutorials } from './../data/store.js'

	$: tutorialsData = $tutorials.data
    $: displayData = tutorialsData.reverse().slice( 0, Math.min(3, tutorialsData.length) )
</script>

<section class="section">
    <div class="container py-6 tutorials">
        <h1 class="is-size-1 is-family-secondary">Video Tutorials</h1>
        <div class="columns">
            <!-- Column 1-->
            {#each displayData as data, index}
                <div class="card mb-4 mx-4">
                    <div class="card-content has-background-info">
                        <div class="grow-effect">
                            <a href="{data.videoUrl }" target="_blank">
                                <figure class="image">
                                    <img src="{data.coverImage }" alt="Placeholder">
                                </figure>
                            </a>
                        </div>
                        <h3 class="is-size-5 mt-4">
                            <a href="{data.videoUrl }" target="_blank" class="has-text-white">
                                {data.title }
                            </a>
                        </h3>
                        
                        <div class="columns mt-2">
                            <div class="column is-two-third">
                                <p class="is-size-6">{data.videoLength + ""} / English</p>
                            </div>
                            <div class="column is-one-third has-text-right">
                                <span class="tag is-link is-medium is-rounded">FREE</span>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
            <!-- End Column 1-->
                
        </div>

        <a href="/tutorials" class="is-uppercase is-link">
            All Tutorials <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</section>