<script>
	import { caseStudies } from './../data/store.js';
	import { onMount } from 'svelte';
    
    $: caseStudiesData = $caseStudies.data

	onMount(async () => {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: true,
            dots: '#dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 0
                    }
                }
            ]
        })
	});
</script>

<section class="section has-background-info py-6">
    <div class="container">
        <div class="slider-section">
            <div class="slider-header">
                <p class="is-family-secondary title is-size-2">Case Studies</p>
                <p class="my-4">A look at our branding and UI/UX Design projects and the process.</p>
                <a href="/about" class="is-uppercase mb-4 is-link">
                    All Case Studies <i class="fas fa-arrow-right"></i>
                </a>
            </div>
            <div class="glider-contain multiple">
                <button class="glider-prev">
                    <i class="fa fa-chevron-left has-text-white-ter"></i>
                </button>
        
                <div class="glider mx-4">
    
                    <!-- one glider box -->
                    {#each caseStudiesData as caseStudy, index (caseStudy.slug) }
                        <div class="card is-shadowless is-rounded mx-2" style="transform: translate(0px, 0px); opacity: 1; background:#31718B;">
                            <div class="card-image grow-effect">
                                <figure class="image">
                                    <a href="about"><img src="{caseStudy.previewImage}" alt="AE Branding"></a>
                                </figure>
                            </div> 
                            <div class="card-content">
                                <div class="content">
                                    <p>
                                        <span class="tag is-link">{caseStudy.type}</span>
                                        <span class="ml-2 block">{caseStudy.creationDate}</span>
                                    </p> 
                                    <p>
                                        <span class="title is-capitalized is-4 mb-2 pb-2">
                                            {caseStudy.title}
                                        </span>
                                    </p> 
                                    <p>{caseStudy.description}</p> 
                                    <p>
                                        <a href="about" class="button is-rounded has-text-black">
                                            <span>Read Article</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                    <!-- end glider box -->
                    
                </div>
        
                <button class="glider-next">
                    <i class="fa fa-chevron-right has-text-white-ter"></i>
                </button>
        
                <div id="dots" class="glider-dots"></div>
        
            </div>
        </div>
    </div>
</section>