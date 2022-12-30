<script>
	import Analytics from '$lib/components/Analytics.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

</script>

<Analytics/>

<Navbar/>

<main>
	<slot></slot>
</main>

<Footer/>