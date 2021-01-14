<script>
	import CommonHero from '../components/CommonHero.svelte'
	import { onMount } from "svelte"
	import { gsap, Power4 } from 'gsap'

	onMount( () => {
		const tl = gsap.timeline()
		tl.from('.section-title', {opacity: 0, duration: .5, ease:Power4.easeOut})
		tl.from('.section-content', {opacity: 0, duration: .4, ease:Power4.easeOut})
		tl.from('.image', {opacity: 0, x:200, duration: 1, ease:Power4.easeInOut})
	})
</script>

<svelte:head>
	<title>ae app labs | About</title>
</svelte:head>

<CommonHero title="About" subtitle=""/>

<section class="section" id="section-about" name="section-about">
	<div class="container">
		<div class="subtitle section-title">About</div>

		<div class="columns">
			<div class="column is-two-thirds section-content">
				<p>We do UI/UX research as well as explore multiple frameworks and solutions for educational purposes.</p>
				<br />
				<p>We also create and maintain a few open source projects and web development.</p>
				<br />
				<p>The educational research projects are available under open source licenses at <a href="https://github.com/ae-app-labs">https://github.com/ae-app-labs</a></p>

				<br />
				The following software and libraries were used to create this website.
				<ul>
					<li class="ml-2">Adobe XD</li>
					<li class="ml-2">Bulma</li>
					<li class="ml-2">SvelteJS</li>
					<li class="ml-2">SapperJS</li>
					<li class="ml-2">gsap 3</li>
				</ul>

			</div>
			<div class="column">
				<a href="https://www.uplabs.com/posts/website-for-a-virtual-job-board-app" target="_blank" alt="view on uplabs">
					<figure class="image">
						<img src="/img/portfolio/web/uplabs_muyu.png" alt="muyu web" class="v-lazy-image v-lazy-image-loaded">
					</figure>
				</a>
			</div>
		</div>

	</div>
</section>