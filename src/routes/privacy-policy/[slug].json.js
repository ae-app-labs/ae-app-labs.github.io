import privacyPolicyData from '../../data/privacy-policy-data.js'

export async function get({ params }) {
    const post = privacyPolicyData.find( (g) => {
        //console.log(g);
        return g.slug == params.slug
    })
    //console.log(post)

    if(post){
        return {
            status: 200,
            body: { post }
        }
    }

}