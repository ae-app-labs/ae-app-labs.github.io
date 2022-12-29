

<script>
	import ContactForm from "$lib/components/ContactForm.svelte";
	export let data

	$: post = data.policy.post
</script>

<style>
	.wrapper{
		margin-top: -2em;
	}
</style>

<svelte:head>
	<title>Privacy Policy - {post.title}</title>
</svelte:head>

<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column is-3">
				<div class="is-size-3 is-family-secondary section-title">{post.title} Privacy Policy</div>	
			</div>
			<div class="column is-8">
				{@html post.html}

				<div class="mt-2">
					The privacy policy for this app was last updated on {post.lastUpdated}
				</div>
			</div>
		</div>
	</div>
</section>

<div class="wrapper">
	<ContactForm/>
</div>