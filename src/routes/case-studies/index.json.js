import cases from './_cases.js';

const contents = JSON.stringify(cases.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		type: post.type,
		description: post.description,
		creationDate: post.creationDate,
		previewImage: post.previewImage
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}