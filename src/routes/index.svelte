<script>
	import ContactForm from './../components/ContactForm.svelte';
	import SocialLinks from './../components/SocialLinks.svelte';
	import TutorialsSection from './../components/TutorialsSection.svelte';
	import RecentWorkSection from './../components/RecentWorkSection.svelte';
	import CaseStudiesSection from '../components/CaseStudiesSection.svelte';
	import FeaturedProjects from './../components/FeaturedProjects.svelte';
	import Services from './../components/Services.svelte';
    import LandingHero from './../components/LandingHero.svelte';
	import { fade } from 'svelte/transition';
</script>

<div transition:fade>

	<LandingHero/>
	
	<Services/>
	
	<FeaturedProjects/>

	<CaseStudiesSection/>

	<RecentWorkSection/>

	<TutorialsSection/>

	<SocialLinks/>

	<ContactForm/>
</div>