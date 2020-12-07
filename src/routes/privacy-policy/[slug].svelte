<script context="module">
	import CommonHero from '../../components/CommonHero.svelte'
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`privacy-policy/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<CommonHero title="Privacy Policy" subtitle=""/>

<section class="section">
	<div class="container">
		<div class="subtitle section-title">{post.title} Privacy Policy</div>
		
		{@html post.html}

		<div class="mt-2">
			<pre>
				The privacy policy for this app was last updated on {post.lastUpdated}
			</pre>
		</div>
	</div>
</section>