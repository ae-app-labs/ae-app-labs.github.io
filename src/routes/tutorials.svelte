<script>
	import { tutorials } from './../data/store.js'

	$: tutorialsData = $tutorials.data

	const showVideo = (index) => {
		console.log(index)
		document.querySelector("#coverImage_"+index).classList.add('is-hidden')
		document.querySelector("#videoFrame_"+index).classList.remove('is-hidden')
		document.querySelector("#video_"+index).src += "&autoplay=1"
	}
</script>

<svelte:head>
	<title>ae app labs | Tutorials</title>
</svelte:head>

<section class="section">
    <div class="container content">
        <div class="columns">
            <div class="column is-5">
                <p class="is-size-3 is-family-secondary">Design and Development Tutorials</p>
                <p class="subtitle">See a list of curated video tutorials hosted on Youtube. These range from tutorials on UI design, to complete landing page development.</p>
                <p class="is-size-4 pt-4">
                    <a href="https://www.youtube.com/channel/UCCYOqc-QhZCbWtjpHZ5ROXw" class="button is-primary is-rounded is-medium" target="_blank"> 
						Visit Channel 
						<i class="fas fa-external-link-alt has-text-white pl-2" aria-hidden="true"></i>
					</a>
                </p>
            </div>
            <div class="column is-7">
                <!-- Loop through the tutorials array in reverse order so that the latest video is shown first-->
                {#each tutorialsData.reverse() as tutorial, index (tutorial.id)}
                    <div class="card mb-4">
                        <div class="card-content" class:has-background-primary-dark={index==0} class:has-background-info={index!=0}>
                            <h3>{ tutorial.title }</h3>
                            
                            <p class="mb-2 has-text-centered">
                                {#each tutorial.tags as tag (tag.id)}
                                    <span class="tag {tag.className} mr-2 mt-2">{tag.name}</span>
                                {/each}
                            </p>
    
                            <div class="has-text-centered mt-4 py-4">
								<div id="coverImage_{index}" class="grow-effect">
									<a href="{ tutorial.videoUrl}" on:click="{(e) => { e.preventDefault(); showVideo(index); } }">
										<img src="{ tutorial.coverImage }" alt="{ tutorial.title }">
									</a>
								</div>
								<div id="videoFrame_{index}" class="is-hidden">
									<iframe
										id="video_{index}"
										width="560"
										height="315"
										src="{ tutorial.embedUrl }?controls=1"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									/>
								</div>
                            </div>
                        </div>
                    </div>
                {/each}
                <!-- End videos list column -->
            </div>
        </div>
    </div>
</section>
