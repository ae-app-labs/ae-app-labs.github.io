import { redirect } from '@sveltejs/kit';


	export async function load( { fetch, params} ) {
		const res = await fetch(`/privacy-policy/${params.slug}.json`)
const policy = await res.json()
		
		if(res.ok) {
    return {
    policy
}
} 
throw redirect(301, '/privacy-policy');
	}
