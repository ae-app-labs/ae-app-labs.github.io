<script>
    export let pageUrl = ''
    export let sectionName = ''
    export let title = ''
    export let description = ''
    export let image = ''
    export let imageAlt = ''
</script>

<svelte:head>
	<title>{sectionName} - {title}</title>

    <!-- SEOMetaTags Start -->
	<meta property="og:url" content="{pageUrl}"/>
	<meta name="description" content="{description}" >
	<meta name="og:description" content="{description}" >
	<meta name="twitter:description" content="{description}" >
	<meta name="twitter:title" content="{title}" >
	<meta name="og:title" content="{title}" >

    {#if image}
	<meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="{image}" />
    <meta name="og:image" content="{image}" />
    <meta name="twitter:image:alt" content="{imageAlt}" />
    {/if}
    <!-- SEOMetaTags End -->
</svelte:head>