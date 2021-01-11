import cases from './_cases.js';

const contents = JSON.stringify(cases.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		description: post.description,
		creationDate: post.creationDate,
		image: post.image
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}