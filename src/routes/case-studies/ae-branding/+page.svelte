<script>
	import { fade } from 'svelte/transition'
	import { page } from '$app/stores'
	import StyleGuide from '$lib/components/StyleGuide.svelte'
    import SeoMetaTags from '$lib/components/SEOMetaTags.svelte';
</script>

<SeoMetaTags
	sectionName="Case Studies"
	title="AE Branding"
	description="Take a look at the history and the rebranding for AE and the designs that we have gone through."
	pageUrl = {$page.url.pathname}
	image="https://ae-app-labs.github.io/img/case-studies/ae-branding/ae_org_site_v3.png"
	imageAlt="An image of website redesign screenshots"
/>

<section class="section-header mb-4" transition:fade|global>
	<div class="container py-4 fadeInUp">
        <p class="is-size-1 is-family-secondary">The Brand of AE</p>
        <p class="is-size-4 stagger2 mt-4 tag is-link is-rounded">Branding</p>

		<div class="mt-4">
			<p class="is-size-4 stagger2">The history of creating a unique brand identity for ae.</p>
			<p class="is-size-5 mt-2 stagger2">AE (Artistik Expressionz) specializes in creating exceptional user experiences and interfaces.</p>
		</div>
	</div>
</section>

<div class="my-4">
	<img src="/img/case-studies/ae-branding/ae_org_site_v3.png" alt="Org Page Version 3" />
	<p class="is-size-5 has-text-centered mt-2">We recently redesigned our org page, shown above.</p>
</div>

<section class="section">
	<StyleGuide/>
</section>

<section class="section">
	<div class="container">
		<p class="is-size-2 is-family-secondary mb-2">Evolution of the logo</p>
		<div class="columns is-vcentered mt-4">
			<div class="column is-4 has-text-centered">
				<img src="/img/case-studies/ae-branding/ae_logo_v0.png" alt="first logo" class="fadeIn">
			</div>
			<div class="column is-4 is-centered-content is-offset-2 stagger2">
				<p class="is-size-4 mb-4 has-text-weight-bold">The very First</p>
				<p class="is-size-5">The initial and short lived logo for AE was very simple, but blocky.</p>
				<br/>
				<p class="is-size-6">2005</p>
				<p class="is-size-6">It was created with Adobe Flash as a vector graphic.</p>
			</div>
			<div class="column is-2"></div>
		</div>
	</div>
</section>

<section class="section primary-bg">
	<div class="container">
		<div class="columns pt-6 pb-6 is-vcentered">
			<div class="column is-3 is-offset-5">
				<figure class="is-centered-content">
					<img src="/img/case-studies/ae-branding/ae_logo_v1.jpg" alt="official version 1" class="fadeIn">
				</figure>
			</div>
			
			<div class="column is-3 is-centered-content pr-4 stagger2">
				<p class="is-size-4 mb-4 has-text-weight-bold">The Retired</p>
				<p class="is-size-5">
					The most widely used logo was a little bit more creative and designed to emphasize symmetry.
				</p>
				<br/>
				<p class="is-size-6">2005 - 2020</p>
				<p class="is-size-6">It was also created with Adobe Flash as a vector graphic.</p>
			</div>

		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="columns pt-3">
			<div class="column is-4 stagger2">
				<p class="is-size-4 mb-4 has-text-weight-bold has-text-left">A Modern Approach</p>
				<p class="is-size-5">
					The logo was simplified while retaining the idea of symmetry.
					Also a dash of color with a slight gradient was added, with 
					alternate monochrome variations as well.
				</p>
				<br/>
				<p class="is-size-6">2020 - Present</p>
				<p class="is-size-6">It was initially created with Adobe XD as a vector graphic, then redrawn in Figma by 2022.</p>
			</div>
		</div>

		<div>
			<img src="/img/case-studies/ae-branding/billboard_roadside.jpg" alt="billboard" class="fadeIn">
		</div>
		<div class="columns pt-3">
			<div class="column is-two-thirds is-hidden-mobile">
				&nbsp;
			</div>
			<div class="column">
				<img src="/img/case-studies/ae-branding/ae_logo_v2_bw.jpg" alt="redesign monochrome versions" class="fadeIn">
			</div>
		</div>
	</div>
</section>

<!--
<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column is-half">&nbsp;</div>
			<div class="column is-half"></div>
		</div>
	</div>
</section>
-->