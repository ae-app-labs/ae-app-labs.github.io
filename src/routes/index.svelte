<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import TutorialsSection from '$lib/components/TutorialsSection.svelte';
	import RecentWorkSection from '$lib/components/RecentWorkSection.svelte';
	import CaseStudiesSection from '$lib/components/CaseStudiesSection.svelte';
	import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
	import Services from '$lib/components/Services.svelte';
    import LandingHero from '$lib/components/LandingHero.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<!-- Include GLiderJs for only this page -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/glider-js/1.6.6/glider.min.js" integrity="sha512-RidPlemZ+Xtdq62dXb81kYFycgFQJ71CKg+YbKw+deBWB0TLIqCraOn6k0CWDH2rGvE1a8ruqMB+4E4OLVJ7Dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</svelte:head>

<div transition:fade>

	<LandingHero/>
	
	<Services/>
	
	<FeaturedProjects/>
	
	<RecentWorkSection/>

	<CaseStudiesSection/>

	<TutorialsSection/>

	<SocialLinks/>

	<ContactForm/>
</div>