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
		html: `
			<p><strong>Message Counter (the "app")</strong> does not collect or offer to share any personal information or Personally Identifiable Information (PII).</p>
			<br />
			<p>The app uses a background service to count the SMS messages that are sent by your device. The app does not process the contents of the messages in any way.</p>
			<br />
			<p>For displaying some data, the app accesses your device's contacts and messages. This information is only read and not stored in any form or shared by the app.</p>
			<br />
			<p>
				The complete source code of the app is published at <a href="https://github.com/midhunhk/message-counter">https://github.com/midhunhk/message-counter</a> and can be reviewed.
				All published builds are uploaded to the <a href="https://github.com/midhunhk/message-counter">Releases</a> page after signing with the license used to upload to Google Play.
			</p>
			<br />
			<p>
				As of version 4.1.1, we have integrated Firebase Analytics with the app to monitor the usage and crash reporting. 
				No personally Identifiable Information is tracked or logged for this purpose.
				<a href="https://firebase.google.com/policies/analytics">Google Analytics for Firebase Use Policy</a>
			</p>
			<br />
			<p>If you have any questions or concerns, please submit a comment or send an email to aeapplabs-support at live.in.</p>
			<br />
			<pre>The privacy policy for this app was last updated on 24 Nov 2020.</pre>
			<br />
		`
	},

	{
		title: 'Random Contact',
		slug: 'random-contact',
		html: `
			<p><strong>Random Contact (the "app")</strong> does not collect offer share any personal information.</p>
			<br />
			<p>For displaying the data, the app accesses your contacts and call log databases stored in the phone. However these information is not stored or shared by the app.</p>
			<br />
			<p>If you have any questions or concerns, please send an email to aeapplabs-support at live.in.</p>
			<br />
			<pre>The privacy policy for the app has been updated on 11-12-2013.</pre>
		`
	},

	{
		title: 'PNR Status App',
		slug: 'pnr-status-app',
		html: `
			<p><strong>PNRStatusApp (the "app")</strong> does not collect offer share any personal information.</p>
			<br />
			<p>The "PNR Number" that you enter is saved in an internal database for retrieval on app startup. No part of the PNR information retrieved from the internet is persisted by the app.</p>
			<br />
			<p>If you have any questions or concerns, please send an email to aeapplabs-support at live.in.</p>
			<br />
			<pre>The privacy policy for the app has been updated on 17-March-2019.</pre>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
