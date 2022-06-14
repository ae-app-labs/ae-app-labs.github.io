<script>
    export let tutorial
    export let index

    const showVideo = (index) => {
		console.log(index)
		document.querySelector("#coverImage_"+index).classList.add('is-hidden')
		document.querySelector("#videoFrame_"+index).classList.remove('is-hidden')
		document.querySelector("#video_"+index).src += "&autoplay=1"
	}
</script>

<div class="card mb-4">
    <div class="card-content" class:has-background-primary-dark={index==0} class:has-background-info={index!=0}>
        <a href="{ tutorial.videoUrl}" class="has-text-white">
            <h3>{ tutorial.title }</h3>
        </a>
        
        <p class="mb-2 has-text-centered">
            {#each tutorial.tags as tag (tag.id)}
                <span class="tag {tag.className} mr-2 mt-2">{tag.name}</span>
            {/each}
        </p>

        <div class="has-text-centered mt-4 py-4">
            <div id="coverImage_{index}" class="grow-effect">
                <a href="{ tutorial.videoUrl}" on:click="{(e) => { e.preventDefault(); showVideo(index); } }">
                    <img src="{ tutorial.coverImage }" alt="{ tutorial.title }">
                    <div class="play-overlay">
                        <svg width="74" height="74" viewBox="0 0 74 74" opacity=".9">
                            <g transform="translate(-315 -3181)">
                              <circle  cx="37" cy="37" r="33" transform="translate(315 3181)" fill="#1fa591" stroke="#eaeaea" stroke-width="4"/>
                              <path d="M16,0,32,28H0Z" transform="translate(370 3200) rotate(90)" fill="#f3d55f"/>
                            </g>
                          </svg>
                    </div>
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
            <div class="has-text-left mt-4 ml-3">
                <span><i class="fas fa-external-link-alt has-text-white pr-2" aria-hidden="true"></i></span>
                <a href="{ tutorial.videoUrl}" class="is-link">
                    { tutorial.title }
                </a>
            </div>
        </div>
    </div>
</div>