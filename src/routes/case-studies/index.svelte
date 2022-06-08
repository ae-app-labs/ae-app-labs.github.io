<script>
	export let cases
</script>

<script context="module">
	export function preload() {
		return this.fetch(`case-studies.json`).then(r => r.json()).then(cases => {
			return { cases };
		});
	}
</script>

<svelte:head>
	<title>Case Studies</title>
</svelte:head>

<section class="section list-cases">
	<div class="container has-text-centered">
		<p class="is-size-2 is-family-secondary mb-2">“Every great design begins with an even better story.”</p>
		<p>Lorinda Mamo, Designer</p>
	</div>
</section>

<section class="section list-cases">
	<div class="container">
		<div class="columns is-multiline">
            {#each cases as oneCase (oneCase.slug)}
				<div class="column column is-12-mobile is-6-tablet is-4-desktop" >
					
					<div class="card is-shadowless is-slightly-rounded stagger">
						<div class="card-image grow-effect">
							<figure class="image">
								<a href="case-studies/{oneCase.slug}">
									<img src="{oneCase.previewImage}" alt="{oneCase.title}">
								</a>
							</figure>
						</div>
						<div class="card-content">
							<div class="content">
								<p>
									<span class="m-t-tiny block">{oneCase.type}</span>
									&#9679;
									<span class="m-t-tiny block">{oneCase.creationDate}</span>
								</p>
								<p>
									<span class="title is-4 is-capitalized is-subtle-link mb-2 pb-2">
										<a href="case-studies/{oneCase.slug}">{oneCase.title}</a>
									</span> 
								</p>
								<p>{oneCase.description}</p>
								<p>
									<a href="case-studies/{oneCase.slug}">
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