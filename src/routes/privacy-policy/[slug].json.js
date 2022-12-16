import privacyPolicyData from '$lib/data/privacy-policy-data.js'

export async function GET({ params }) {
    const post = privacyPolicyData.find( (g) => {
        //console.log(g);
        return g.slug == params.slug
    })
    console.log(post)

    if(post){
        return {
            status: 200,
            body: { post }
        }
    }

}