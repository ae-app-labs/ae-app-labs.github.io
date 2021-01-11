<script>
	import CommonHero from '../../components/CommonHero.svelte'
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

<CommonHero title="Case Studies" subtitle="Case Studies from our previous projects"/>

<section class="section" >
	<div class="container">
		<div>
			This page lists a few case studies from our past work.
			<br /> <br />
		</div>
		<div class="columns is-multiline" >
            {#each cases as oneCase (oneCase.slug)}
				<div class="column is-half">
					
					<div class="box">
						<article class="media">
							<div class="media-left">
							<figure class="image is-128x128">
								<img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
							</figure>
							</div>
							<div class="media-content">
								<div class="content">
									<h2>{oneCase.title}</h2>
									<div class="has-text-weight-light pb-2">{oneCase.creationDate}</div>
									<div>{oneCase.description}</div>
								</div>
								<div class="is-right">
									<a class="button is-primary is-small is-rounded mr-2" href="case-studies/{oneCase.slug}">Read Case Study</a>
								</div>
							</div>
						</article>
						</div>



				</div>
            {/each}
        </div>
	</div>
</section>
