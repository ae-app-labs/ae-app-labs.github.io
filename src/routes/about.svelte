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
				<p>Ae App Labs does UI/UX research and explores multiple frameworks and solutions for educational purposes.</p>
				<br />
				<p>The educational research projects are available under open source liceses at <a href="https://github.com/ae-app-labs">https://github.com/ae-app-labs</a></p>
			</div>
			<div class="column">
				<figure class="image">
                    <img src="/img/portfolio/web/uplabs_muyu.png" alt="muyu web" class="v-lazy-image v-lazy-image-loaded">
                </figure>
			</div>
		</div>
	</div>
</section>