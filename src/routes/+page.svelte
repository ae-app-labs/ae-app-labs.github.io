<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import TutorialsSection from '$lib/components/TutorialsSection.svelte';
	import RecentWorkSection from '$lib/components/RecentWorkSection.svelte';
	import CaseStudiesSection from '$lib/components/CaseStudiesSection.svelte';
	import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
	import Services from '$lib/components/Services.svelte';
    import LandingHero from '$lib/components/LandingHero.svelte';
    import DesignReviewSection from '$lib/components/DesignReviewSection.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<!-- Include GLiderJs for only this page -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/glider-js/1.6.6/glider.min.js" integrity="sha512-RidPlemZ+Xtdq62dXb81kYFycgFQJ71CKg+YbKw+deBWB0TLIqCraOn6k0CWDH2rGvE1a8ruqMB+4E4OLVJ7Dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

	<meta property="og:url" content="https://ae-app-labs.github.io"/>
	<meta name="description" content="Ae App Labs is a design studio that works on UI UX Design, App and Web Design and development" >
	<meta name="og:description" content="Tutorials, Design and Development for the modern Web and Mobile." >
	<meta name="twitter:description" content="Ae App Labs is a design studio that works on UI UX Design, App and Web Design and development" >
	<meta name="twitter:title" content="Let's learn, design and build together." >
	<meta name="og:title" content="Let's learn, design and build together." >
</svelte:head>

<div transition:fade|global>

	<LandingHero/>
	
	<Services/>
	
	<FeaturedProjects/>
	
	<RecentWorkSection/>

	<DesignReviewSection/>

	<CaseStudiesSection/>

	<TutorialsSection/>

	<SocialLinks/>

	<ContactForm/>
</div>