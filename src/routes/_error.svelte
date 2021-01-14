<script>
	import CommonHero from '../components/CommonHero.svelte'

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Status {status}</title>
</svelte:head>

<CommonHero title="Status {status}" subtitle=""/>

<section class="section">
	<div class="container">
		<h1>Uh oh!</h1>

		<p>An error has occured and the message is <strong>{error.message}</strong></p>

		<p>Click <a href="/">here</a> to visit our home page.</p>

		{#if dev && error.stack}
			<pre>{error.stack}</pre>
		{/if}

	</div>
</section>