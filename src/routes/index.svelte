<script>
	import Tags from '../components/Tags.svelte'
</script>

<svelte:head>
	<title>ae app labs | organization page</title>
</svelte:head>

<!-- Hero Start -->
<section class="hero is-medium is-primary">
	<div class="hero-body">
		<div class="container">
			<div class="columns">
				<div class="column is-narrow is-hidden-mobile">
					<img src="/img/icons/app_labs.png" height="72px" width="72px" alt="ae app labs" />
				</div>
				<div class="column">
					<h1 class="title">ae app labs</h1>
					<h1 class="subtitle">Research &amp; Learning</h1>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Hero End -->

<Tags/>

<!-- Section: Desktop Apps -->
<section class="section" id="projects-desktop" name="projects-desktop">
	<div class="container">
		<div class="subtitle">Desktop Applications</div>
		
		<div class="columns">
			<div class="column is-half">

					<!-- Triton Player App -->
					<div class="card box">
					<div class="content">
						<div class="media">
							<div class="media-left">
								<figure class="image is-64x64">
									<img src="https://raw.githubusercontent.com/midhunhk/triton-player/master/Resources/trident-icon.png" alt="feature" class="v-lazy-image v-lazy-image-loaded">
								</figure>
							</div>
							<div class="media-content">
								<p class="title is-4 is-size-3-mobile">triton-player</p>
								<p class="subtitle is-6 is-hidden-mobile">
									<span class="tag is-primary">Adobe AIR</span>
									<span class="tag is-link">Flash Platform</span>
								</p>
							</div>
						</div>
						<div class="content">
							Triton Player is an MP3 player based on Adobe AIR platform. 
							What started as an educational endeavour while working on Adobe Flex and the AIR platform, was released to the general public.
							This application is considered to be feature complete and is no longer maintained or updated.
						</div>
						<div class="is-right">
							<a class="button is-primary is-outlined is-small is-rounded" href="https://github.com/midhunhk/triton-player">View Project</a>
						</div>
					</div>
				</div>

			</div>
			<div class="column is-half">

				<!-- Cryptx -->
				<div class="card box">
					<div class="content">
						<div class="media">
							<div class="media-left">
								<figure class="image is-64x64">
									<img src="https://raw.githubusercontent.com/midhunhk/cryptx/master/Resources/cryptx-6-icon.png" alt="feature" class="v-lazy-image v-lazy-image-loaded">
								</figure>
							</div>
							<div class="media-content">
								<p class="title is-4 is-size-3-mobile">cryptx</p>
								<p class="subtitle is-6 is-hidden-mobile">
									<span class="tag is-primary">Adobe AIR</span>
									<span class="tag is-link">Flash Platform</span>
								</p>
							</div>
						</div>
						<div class="content">
							Cryptx is a file encryption/decryption app developed with Adobe Air that uses 128-bit AES Encryption.
							It was developed as a proof of concept application that uses Green Threads since ActionScript is single threaded.
						</div>
						<div class="is-right">
							<a class="button is-primary is-outlined is-small is-rounded" href="https://github.com/midhunhk/cryptx">View Project</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>


