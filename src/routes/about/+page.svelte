<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import RecentWork from '$lib/components/RecentWork.svelte';
    import ReviewSubmitForm from '$lib/components/ReviewSubmitForm.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>ae app labs | About</title>
</svelte:head>

<div transition:fade>
	<img src="/img/site/banner_ae.png" alt="Bannner" />
</div>

<section class="section section-about" id="section-about" name="section-about" >
	<div class="container">
		
		<div class="columns fadeInUp" transition:fade>
			<div class="column is-10">
				<h3 class="is-size-2 is-family-secondary mb-4">Formed in 2005 as a personal project and now an independent design studio, ae app labs focuses on UI/UX research, web and app development.</h3><br />
			</div>
		</div>

		<div class="has-background-grey-darker p-4">
			<div class="is-size-2  is-family-secondary mt-4 mb-2">
				What we can do for you
			</div>
			<div class="columns about-services mb-4">
				<div class="column is-6">
					<h4 class="is-size-3">Design and Build your website</h4>
					<h4 class="is-size-3">Build a digital product</h4>
					<h4 class="is-size-3">Technical Consultation for any project</h4>
				</div>
				<div class="column is-6">
					<h4 class="is-size-3">Design mobile application</h4>
					<h4 class="is-size-3">User Experience Consultation</h4>
					<h4 class="is-size-3">Graphics and Design</h4>
					<h4 class="is-size-3">Free Design Reviews</h4>
				</div>
			</div>
			
		</div>
		
		<ReviewSubmitForm />
		
		<div class="is-size-2 is-family-secondary mt-4 mb-2">
			Some of our work
		</div>
		
		<RecentWork/>

		<div class="columns">
			<div class="column is-6">
				<h4 class="is-size-3">Explore more of our design work</h4>
				<ul class="mt-2 mb-4 ">
					<li>
						<a href="https://www.uplabs.com/aeapplabs" class="is-link has-text-white" target="_blank">
							<span><i class="fas fa-external-link-alt has-text-white pr-2" aria-hidden="true"></i></span>
							Uplabs</a>
					</li>
					<li>
						<a href="https://instagram.com/AeAppLabs" class="is-link has-text-white" target="_blank">
							<span><i class="fas fa-external-link-alt has-text-white pr-2" aria-hidden="true"></i></span>
							Instagram</a>
					</li>
					<li>
						<a href="https://www.behance.net/midhunharikumar" class="is-link has-text-white" target="_blank">
							<span><i class="fas fa-external-link-alt has-text-white pr-2" aria-hidden="true"></i></span>
							Behance</a>
					</li>
				</ul>
			
			</div>
			<div class="column is-6">
				<h4 class="is-size-3">Apps &amp; Research projects</h4>
				<p>Educational and Research projects are available under AeAppLabs with open source licenses at 
					<br/>
					<a href="https://github.com/ae-app-labs" class="is-link has-text-white mt-2" target="_blank">
					<span><i class="fas fa-external-link-alt has-text-white pr-2" aria-hidden="true"></i></span>
					https://github.com/ae-app-labs</a>
				</p>
			</div>
		</div>

	</div>
</section>

<ContactForm />