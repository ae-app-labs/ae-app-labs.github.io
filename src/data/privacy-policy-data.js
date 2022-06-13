const privacyPolicyData = [
	{
		title: 'Message Counter',
		slug: 'message-counter',
		lastUpdated: "20 Jul 2021",
		html: `
			<p>
				<strong>Message Counter (the "app")</strong> does not collect or offer to share any personal information or Personally Identifiable Information (PII).
			</p>
			<br />
			<p>
				The app uses a background service to count the SMS messages that are sent by your device. <br />
				The app does not process the contents of the messages in any way.
			</p>
			<br />
			<p>
				For displaying some data, the app accesses your device's contacts and messages. <br />
				This information is only read and not stored in any form or shared by the app.
			</p>
			<br />
			<p>
				The complete source code of the app is published at <a class="is-link" href="https://github.com/midhunhk/message-counter">https://github.com/midhunhk/message-counter</a> and can be reviewed. <br />
				All published builds are uploaded to the <a class="is-link" href="https://github.com/midhunhk/message-counter">Releases</a> page after signing with the license used to upload to Google Play.
			</p>
			<br />
			<p>
				As of version 4.1.1, we have integrated Firebase Analytics with the app to monitor the usage and crash reporting. <br />
				No personally Identifiable Information is tracked or logged for this purpose. <br />
				<a class="is-link" href="https://firebase.google.com/policies/analytics">Google Analytics for Firebase Use Policy</a>
			</p>
			<br />
			<p>If you have any questions or concerns, please submit a comment or send an email to [<i>aeapplabs.ca+support at gmail.com</i>]</p>
		`
	},

	{
		title: 'Random Contact',
		slug: 'random-contact',
		lastUpdated: "20 Jul 2021",
		html: `
			<p>
				<strong>Random Contact (the "app")</strong> does not collect or offer to share any personal information.
			</p>
			<br />
			<p>
				We respect your privacy and do not request you to provide any personal information. <br />
				For displaying the data, the app accesses your contacts databases stored on the phone.  <br />
				This information is only read and not stored in any form or shared by the app. <br />
				The app <u>does not</u> collect or maintain your personal information including name, addresses, phone numbers etc.
			</p>
			<br />
			<p>If you have any questions or concerns, please send an email to [<i>aeapplabs.ca+support at gmail.com</i>]</p>
		`
	},

	{
		title: 'PNR Status App',
		slug: 'pnr-status-app',
		lastUpdated: "20 Jul 2021",
		html: `
			<p>
				<strong>PNRStatusApp (the "app")</strong> does not collect offer share any personal information.
			</p>
			<br />
			<p>
				The "PNR Number" that you enter is saved in an internal database for retrieval on app startup. <br />
				No part of the PNR information retrieved from the internet is persisted by the app.
			</p>
			<br />
			<p>If you have any questions or concerns, please send an email to [<i>aeapplabs.ca+support at gmail.com</i>]</p>
		`
	},

	{
		title: 'AE Sticker App',
		slug: 'ae-sticker-app',
		lastUpdated: "20 Jul 2021",
		html: `
			<p>
				<strong>AE Sticker App (the "app")</strong> does not collect or offer to share any personal information or Personally Identifiable Information (PII).
			</p>
			<br />
			<p>
				As of Version 1.3.0, the app integrates Firebase Analytics to study and improve the content. <br />
				This however does not store or transmit any information about the user, their location or any PII. <br />
				<a class="is-link" href="https://firebase.google.com/policies/analytics">Google Analytics for Firebase Use Policy</a>
			</p>
			<br />
			<p>If you have any questions or concerns, please send an email to [<i>aeapplabs.ca+support at gmail.com</i>]</p>
		`
	},

	{
		title: 'C19 Counter App',
		slug: 'c19-counter-app',
		lastUpdated: "20 Jul 2021",
		html: `
			<p>
				C19 Counter App (the "app") does not collect or offer to share any personal information or Personally Identifiable Information (PII).
			</p>
			<br />
			<p>
				The app uses a REST web service to display the data, and no information about your device or location is captured or shared.
			</p>
			<br />
			<p>If you have any questions or concerns, please send an email to [<i>aeapplabs.ca+support at gmail.com</i>]</p>
		`
	},

	{
		title: 'midhunhk.com',
		slug: 'midhunhk-blog',
		lastUpdated: "22 Nov 2021",
		html: `
		<p>
			The website for "midhunhk" located at <a class="is-link" href="https://www.midhunhk.com/">https://www.midhunhk.com</a>, from here onwards referred to as "site"
			<u>does not collect or offer to share</u> any personal information or Personally Identifiable Information (PII). 
			<br/>This website does not create or maintain any cookies.
		</p>
		<br />
		<p class="subtitle">Website Analytics</p>
		<p>
			We may make use of a selected third-party vendor like <a class="is-link" href="https://support.google.com/analytics/answer/6004245?hl=en">Google Analytics</a>, to allow tracking technologies using third-party cookies, to analyze and track users’ use of the "site", to determine the popularity of certain content and improve performance. 
			This data does not include any personally identifiable or personal information. <br/> <br/>
			By accessing the Site, you consent to the collection and use of your information by these third-party vendors. <br/>
			You are encouraged to review their privacy policy and contact them directly for responses to your questions. <br/>
			We do not record or transfer personal information to these third-party vendors. <br/><br/>
			However, if you do not want any information to be collected and used by tracking technologies, you can visit the third-party vendor or the
			<a class="is-link" href="https://tools.google.com/dlpage/gaoptout/?hl=en-GB">Google Analytics Opt-out Browser Add-on</a>.
		</p><br/>
		<p>Privacy Policy for <a class="is-link" href="https://policies.google.com/privacy?hl=en-US">Google Analytics</a></p>
		<br />
		<p>If you have any questions or concerns, please send an email to [<i>aeapplabs.ca at gmail.com</i>].</p>
		<br />
		<p class="subtitle">Website Advertisements</p>
		<p>
			We may partner with a third party vendor inorder to incorporate native ads on selected pages of the website.
			<br/>
			Privacy Policy for <a class="is-link" href="https://www.infolinks.com/privacy-policy/" target="_blank">Infolinks </a>
		</p>
		`
	}
];

/*
privacyPolicyData.forEach(post => {
	privacyPolicyData.html = privacyPolicyData.html.replace(/^\t{3}/gm, '');
});
*/

export default privacyPolicyData