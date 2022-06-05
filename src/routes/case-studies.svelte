<script>
	import { caseStudies } from './../data/store.js';
    
    $: cases = $caseStudies.data
</script>

<svelte:head>
	<title>ae app labs | Case Studies</title>
</svelte:head>

<section class="section list-cases">
	<div class="container has-text-centered">
		<p class="is-size-2 mb-2">“Every great design begins with an even better story.”</p>
		<p>Lorinda Mamo, Designer</p>
	</div>
</section>

<section class="section list-cases">
	<div class="container">
		<div class="columns is-multiline">
            {#each cases as oneCase (oneCase.slug)}
				<div class="column column is-12-mobile is-6-tablet is-4-desktop" >
					
					<div class="card is-shadowless is-slightly-rounded stagger has-background-info">
						<div class="card-image grow-effect">
							<figure class="image">
								<a href="case-studies/{oneCase.slug}">
									<img src="{oneCase.previewImage}" alt="{oneCase.title}">
								</a>
							</figure>
						</div>
						<div class="card-content">
							<div class="content">
								<div class="py-2">
									<span class="block">{oneCase.type}</span>
									<span class="block"> / {oneCase.creationDate}</span>
								</div>
								<p>
									<span class="title is-4 is-capitalized is-subtle-link mb-2 pb-2">
										<a href="case-studies/{oneCase.slug}" class="is-link">{oneCase.title}</a>
									</span> 
								</p>
								<p>{oneCase.description}</p>
								<p>
									<a href="case-studies/{oneCase.slug}" class="is-link">
										Read Article 
										<i class="fa fa-arrow-right ml-2" aria-hidden="true"></i>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
            {/each}
        </div>
	</div>
</section>

<div class="p-2">
	&nbsp;
</div>