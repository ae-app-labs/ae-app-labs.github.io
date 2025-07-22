import { json } from '@sveltejs/kit';
import privacyPolicyData from '$lib/data/privacy-policy-data.js'

export async function GET({ params }) {
    const post = privacyPolicyData.find( (g) => {
        console.log(params.slug);
        return g.slug == params.slug
    })

    if(post){
        return json({ post })
    }

}