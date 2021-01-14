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
		
		<div class="columns">
			<div class="column is-5 is-offset-1 section-content">
				<p class="is-size-3">Formed in 2005 as a personal design project, we do UI/UX research, web and app development.</p><br />
				<p class="is-size-6">We also create and maintain a few open source projects and web development.</p>
				<br />

				<p class="is-size-4">Explore more of our design work</p>
				<p class="ml-4"><a href="https://www.uplabs.com/aeapplabs" target="_blank">https://www.uplabs.com/aeapplabs</a></p>
				<p class="ml-4"><a href="https://instagram.com/AeAppLabs" target="_blank">https://instagram.com/AeAppLabs</a></p>
				<br />

				<p class="is-size-4 mt-2">Educational and Research projects</p>
				<p>Educational and Research projects are available under AeAppLabs with open source licenses at <a href="https://github.com/ae-app-labs">https://github.com/ae-app-labs</a></p>
			</div>
			<div class="column is-offset-2">
				<a href="https://www.uplabs.com/posts/website-for-a-virtual-job-board-app" target="_blank" alt="view on uplabs">
					<figure class="image">
						<img src="/img/portfolio/web/uplabs_muyu.png" alt="muyu web" class="v-lazy-image v-lazy-image-loaded">
					</figure>
				</a>
			</div>
		</div>

	</div>
</section>