<script>
	import CommonHero from '../../components/CommonHero.svelte'
	export let cases

	import { onMount } from "svelte"
	import { gsap, Power4 } from 'gsap'

	// Run animations using gsap on mount
	onMount( () => {
		gsap.from('.stagger', {opacity: 0, delay: 0, y: 100, stagger:.2},"-=1")
	})
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

<section class="section">
	<div class="container has-text-centered">
		<p class="is-size-2 mb-2">“Every great design begins with an even better story.”</p>
		<p>Lorinda Mamo, Designer</p>
	</div>
</section>

<section class="section list-cases">
	<div class="container">
		<div class="columns is-multiline">
            {#each cases as oneCase (oneCase.slug)}
				<div class="column column is-12-mobile is-6-tablet is-3-desktop" >
					
					<div class="card is-shadowless is-slightly-rounded stagger">
						<div class="card-image">
							<figure class="image">
								<a href="case-studies/{oneCase.slug}">
									<img src="{oneCase.previewImage}" alt="{oneCase.title}">
								</a>
							</figure>
						</div>
						<div class="card-content">
							<div class="content">
								<p>
									<span class="title is-4 is-capitalized">
										<a href="case-studies/{oneCase.slug}">{oneCase.title}</a>
									</span> 
									<br> 
									<span class="m-t-tiny block">{oneCase.creationDate}</span>
									&middot;
									<span class="m-t-tiny block"><i>{oneCase.type}</i></span>
								</p>
								<p>{oneCase.description}</p>
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