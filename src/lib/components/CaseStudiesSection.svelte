<script>
	import { caseStudies } from '$lib/data/store.js';
	import { onMount } from 'svelte';
    
    $: caseStudiesData = $caseStudies.data.reverse()

	onMount(async () => {

        // Wait for a little bit for the DOM to get initialized
        setTimeout( () => {
            initGlider()
        }, 1000)
        
	});

    const initGlider = () => {
        new Glider(document.querySelector('.glider'), {
            // Mobile-first defaults
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            scrollLock: true,

            dots: '#dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
            responsive: [
                {
                    // screens greater than >= 600px
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 'auto',
                        slidesToScroll: 'auto',
                        itemWidth: 150,
                        duration: 0.25
                    }
                }, {
                    // screens greater than >= 1024px
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        draggable: true,
                    }
                },
                
            ]
        })
    }

</script>

<section class="section has-background-info py-6">
    <div class="container">
        <div class="slider-section">
            <div class="slider-header">
                <p class="is-family-secondary is-size-1">Case Studies</p>
                <p class="my-4 is-size-5">A look at our branding and UI/UX Design projects and the process.</p>
                <a href="/case-studies" class="is-uppercase mb-4 is-link">
                    All Case Studies <i class="fas fa-arrow-right"></i>
                </a>
            </div>
            <div class="glider-contain multiple">
                <button class="glider-prev" name="Previous">
                    <i class="fa fa-chevron-left has-text-white-ter"></i>
                </button>
        
                <div class="glider mx-4">
    
                    <!-- one glider box -->
                    {#each caseStudiesData as caseStudy, index (caseStudy.slug) }
                        <div class="card is-shadowless is-rounded mx-2" style="transform: translate(0px, 0px); opacity: 1; background:#31718B;">
                            <div class="card-image grow-effect">
                                <figure class="image">
                                    <a href="{caseStudy.articleUrl}"><img src="{caseStudy.previewImage}" alt="AE Branding"></a>
                                </figure>
                            </div> 
                            <div class="card-content">
                                <div class="content">
                                    <p>
                                        <span class="tag is-link is-rounded">{caseStudy.type}</span>
                                        <span class="ml-2 block">{caseStudy.creationDate}</span>
                                    </p> 
                                    <p>
                                        <span class="title is-capitalized is-4 mb-2 pb-2">
                                            {caseStudy.title}
                                        </span>
                                    </p> 
                                    <p class="is-size-5">{caseStudy.description}</p> 
                                    <p>
                                        <a href="{caseStudy.articleUrl}" class="button is-success has-text-black">
                                            <span>Read Article</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                    <!-- end glider box -->
                    
                </div>
        
                <button class="glider-next" name="Next">
                    <i class="fa fa-chevron-right has-text-white-ter"></i>
                </button>
        
                <div id="dots" class="glider-dots"></div>
        
            </div>
        </div>
    </div>
</section>