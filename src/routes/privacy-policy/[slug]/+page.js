import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch, params}) => {
	const res = await fetch(`/privacy-policy/${params.slug}.json`)
	const policy = await res.json()

	if(res.ok) {
		return {
			policy
		}
	} 
	throw redirect(301, '/privacy-policy');
}