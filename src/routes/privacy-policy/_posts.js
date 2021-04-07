// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Message Counter',
		slug: 'message-counter',
		lastUpdated: "24 Nov 2020",
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
				The complete source code of the app is published at <a href="https://github.com/midhunhk/message-counter">https://github.com/midhunhk/message-counter</a> and can be reviewed. <br />
				All published builds are uploaded to the <a href="https://github.com/midhunhk/message-counter">Releases</a> page after signing with the license used to upload to Google Play.
			</p>
			<br />
			<p>
				As of version 4.1.1, we have integrated Firebase Analytics with the app to monitor the usage and crash reporting. <br />
				No personally Identifiable Information is tracked or logged for this purpose. <br />
				<a href="https://firebase.google.com/policies/analytics">Google Analytics for Firebase Use Policy</a>
			</p>
			<br />
			<p>If you have any questions or concerns, please submit a comment or send an email to aeapplabs-support at live.in.</p>
		`
	},

	{
		title: 'Random Contact',
		slug: 'random-contact',
		lastUpdated: "23 Feb 2021",
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
			<p>If you have any questions or concerns, please send an email to aeapplabs-support at live.in.</p>
		`
	},

	{
		title: 'PNR Status App',
		slug: 'pnr-status-app',
		lastUpdated: "17 Mar 2019",
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
			<p>If you have any questions or concerns, please send an email to aeapplabs-support at live.in.</p>
		`
	},

	{
		title: 'AE Sticker App',
		slug: 'ae-sticker-app',
		lastUpdated: "11 Feb 2018",
		html: `
			<p>
				<strong>AE Sticker App (the "app")</strong> does not collect or offer to share any personal information or Personally Identifiable Information (PII).
			</p>
			<br />
			<p>
				As of Version 1.3.0, the app integrates Firebase Analytics to study and improve the content. <br />
				This however does not store or transmit any information about the user, their location or any PII. <br />
				<a href="https://firebase.google.com/policies/analytics">Google Analytics for Firebase Use Policy</a>
			</p>
			<br />
			<p>If you have any questions or concerns, please send an email to aeapplabs-support at live.in.</p>
		`
	},

	{
		title: 'C19 Counter App',
		slug: 'c19-counter-app',
		lastUpdated: "06 Apr 2021",
		html: `
			<p>
				C19 Counter App (the "app") does not collect or offer to share any personal information or Personally Identifiable Information (PII).
			</p>
			<br />
			<p>
				The app uses a REST web service to display the data, and no information about your device or location is captured or shared.
			</p>
			<br />
			<p>If you have any questions or concerns, please send an email to aeapplabs-support at live.in.</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
