<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import RecentWork from '$lib/components/RecentWork.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>ae app labs | About</title>
</svelte:head>

<div transition:fade>
	<img src="/img/site/banner_ae.png" alt="Bannner" />
</div>

<section class="section section-about fadeInUp" id="section-about" name="section-about" transition:fade>
	<div class="container">
		
		<div class="columns">
			<div class="column is-10">
				<h3 class="is-size-2 is-family-secondary mb-4">Formed in 2005 as a personal project and now an independent design studio, ae app labs focuses on UI/UX research, web and app development.</h3><br />
			</div>
		</div>

		<div class="subtitle mt-4">
			What we can do for you
		</div>
		<div class="columns about-services mb-4">
			<div class="column is-6">
				<h4 class="is-size-4">Design and Build your website</h4>
				<h4 class="is-size-4">Build a digital product</h4>
				<h4 class="is-size-4">Technical Consultation for any project</h4>
			</div>
			<div class="column is-6">
				<h4 class="is-size-4">Design mobile application</h4>
				<h4 class="is-size-4">User Experience Consultation</h4>
				<h4 class="is-size-4">Graphics and Design</h4>
			</div>
		</div>

		<div class="subtitle mt-4">
			Some of our work
		</div>
		
		<RecentWork/>

		<div>
			<p class="is-size-4">Explore more of our design work</p>
			<p class="ml-4 mb-4">
				<a href="https://www.uplabs.com/aeapplabs" class="is-link" target="_blank">https://www.uplabs.com/aeapplabs</a> <br/>
				<a href="https://instagram.com/AeAppLabs" class="is-link" target="_blank">https://instagram.com/AeAppLabs</a>
			</p>

			<p class="is-size-4">Educational and Research projects</p>
			<p>Educational and Research projects are available under AeAppLabs with open source licenses at <a href="https://github.com/ae-app-labs" class="is-link">https://github.com/ae-app-labs</a></p>
		</div>

	</div>
</section>

<ContactForm />