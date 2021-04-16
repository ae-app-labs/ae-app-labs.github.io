import { desktopProjects, androidProjects, webProjects } from '../data/store'

const siteUrl = "https://ae-app-labs.github.io/";

function readAllProjects(){
    return new Promise( resolve => {
        var allProjects = []
        var projectsRead = 0;

        desktopProjects.subscribe( val => {
            projectsRead++
            allProjects = allProjects.concat( ...val.projects )
        })
        webProjects.subscribe( val => {
            projectsRead++
            allProjects = allProjects.concat( ...val.projects )
        })
        androidProjects.subscribe( val => {
            projectsRead++
            allProjects = allProjects.concat( ...val.projects )
        })

        // Do nothing loop until all data is read
        // Note the semicolon at the end of the while statement
        while(projectsRead != 3);

        resolve(allProjects)
    })
}

async function getProjects(){

    return await webProjects.projects
}

function renderXmlRssFeed(projects) {
    return `<?xml version="1.0" encoding="utf-8"?>
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title><![CDATA[Ae App Labs Projects]]></title>
        <link>${siteUrl}</link>
        <description><![CDATA[Projects by Ae App Labs.]]></description>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <image>
            <title><![CDATA[Projects by Ae App Labs]]></title>
            <link>${siteUrl}</link>
        </image>
        ${projects.map(project => `
            <item>
                <title>${project.title}</title>
                <link>${project.buttons[0].target}</link>
                <guid isPermaLink="false">${project.buttons[0].target}</guid>
                <description><![CDATA[${project.description}]]></description>
                <pubDate>${new Date().toUTCString()}</pubDate>
            </item>
        `).join('\n')}
    </channel>
    </rss>`
}

 export async function get(req, res) {

    res.writeHead(200, {
        'Cache-Control' : `max-age=0, s-max-age=${600}`,
        'Content-Type' : 'application/rss+xml'
    })

    const allProjects = await readAllProjects()
    const feed = renderXmlRssFeed(allProjects)

    res.end(feed)   
 }