// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const cases = [
	{
		title: 'AE Branding',
		slug: 'ae-branding',
		type: 'branding',
		previewImage: 'img/case-studies/ae-branding/ae-preview.jpg',
		creationDate: "01 Jan 2021",
		description: "Take a look at the history and the rebranding for AE and the designs that we have gone through."
	},
	{
		title: 'The Lotus Foundation',
		slug: 'tlf',
		type: 'web design',
		previewImage: 'img/case-studies/tlf/tlf-preview.jpg',
		creationDate: "20 Jan 2021",
		description: "The design and development of the website for The Lotus Foundation, a non profit organization."
	},
	{
		title: 'Random Contact Redesign',
		slug: 'random-contact',
		type: 'app design',
		previewImage: 'img/case-studies/random-contact/random-contact-preview.png',
		creationDate: "20 Mar 2021",
		description: "The redesign of our first Android app that was released on the Play Store."
	}
];


export default cases;
