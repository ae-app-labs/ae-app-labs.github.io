<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { privacyPolicies } from '$lib/data/store.js'
    
    $: posts = $privacyPolicies
</script>

<style>
	.wrapper{
		margin-top: -2em;
	}
</style>

<svelte:head>
	<title>Privacy Policy</title>
</svelte:head>

<section class="section">
	<div class="container pr-4">
		<div class="columns">
			<div class="column is-3">
				<div class="is-size-3 is-family-secondary section-title">Privacy Policy</div>
			</div>
			<div class="column is-8">
				<p class="subtitle has-text-weight-bold">Introduction</p>
				<p>
					The website for "ae app labs" located at <a class="is-link" href="https://ae-app-labs.github.io">https://ae-app-labs.github.io</a> and <a class="is-link" href="https://ae-app-labs.web.app">https://ae-app-labs.web.app</a>, from here onwards referred to as "site"
					<u>does not collect or offer to share</u> any personal information or Personally Identifiable Information (PII). <br/>
					We respect the privacy of our users. This website does not create or maintain any cookies.
				</p>
				<br />
				<p class="subtitle has-text-weight-bold">Form Data</p>
				<p>
					There are two forms on this website on to which users can enter data, which are below.
				</p>
				<div class="content">
					<ul>
						<li>Contact Form for any inquiries or information</li>
						<li>Design Review Request form</li>
					</ul>
				</div>
				<p>
					Personally Identifiable Information (PII) is not required to be entered in any of the forms. By providing any value in the email or name fields, you agree that the information may be stored electronically for a short period of time (less than 30 days) and you may be contacted for the purpose of providing information.
					<br/><br/>
					Use the contact form to request to know if any personal information was stored electronically prior to sending the request as well as to permanently delete any information that is stored.
				</p>
				<br />

				<p class="subtitle has-text-weight-bold">Website Analytics</p>
				<p>
					We may also partner with a selected third-party vendor like <a class="is-link" href="https://support.google.com/analytics/answer/6004245?hl=en">Google Analytics</a>, to allow tracking technologies using third-party cookies,
					to analyze and track users' use of the "site", to determine the popularity of certain content and improve performance. 
					This data does not include any personally identifiable or personal information. <br/> <br/>
					By accessing the Site, you consent to the collection and use of your information by these third-party vendors. <br/>
					You are encouraged to review their privacy policy and contact them directly for responses to your questions. <br/>
					We do not record or transfer personal information to these third-party vendors. <br/><br/>
					However, if you do not want any information to be collected and used by tracking technologies, you can visit the third-party vendor or the
					<a class="is-link" href="https://tools.google.com/dlpage/gaoptout/?hl=en-GB">Google Analytics Opt-out Browser Add-on</a>.
				</p><br/>
				<p>Privacy Policy for <a class="is-link" href="https://policies.google.com/privacy?hl=en-US">Google Analytics</a></p>
				<br />
				<p>If you have any questions or concerns, please send an email to [<i>aeapplabs.ca at google.com</i>] or use the contact form.</p>
				<br/>
				<pre>The privacy policy for this page was last updated on 20 Sep 2022.</pre>
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column is-3">
				<div class="subtitle section-title">Privacy Policy for apps</div>	
			</div>
			<div class="column is-8">
				<p class="is-size-5">Privacy policy for some apps are linked below.</p>
				<br/>
				<ul>
					{#each posts as post}
						<li class="mb-2"><a class="is-link" rel="prefetch" data-sveltekit-prefetch href="privacy-policy/{post.slug}">{post.title}</a></li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<div class="wrapper">
	<ContactForm/>
</div>