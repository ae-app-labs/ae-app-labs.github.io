<script context="module">
	export function preload() {
		return this.fetch(`privacy-policy.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section class="section" id="projects-desktop" name="projects-desktop">
	<div class="container">
		<h1>Recent posts</h1>

		<ul>
			{#each posts as post}
				<!-- we're using the non-standard `rel=prefetch` attribute to
						tell Sapper to load the data for the page as soon as
						the user hovers over the link or taps it, instead of
						waiting for the 'click' event -->
				<li><a rel="prefetch" href="privacy-policy/{post.slug}">{post.title}</a></li>
			{/each}
		</ul>
		
	</div>
</section>