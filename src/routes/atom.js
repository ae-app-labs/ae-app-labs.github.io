import { desktopProjects, androidProjects, webProjects } from '../data/store'

//const allProjects = webProjects.projects //[...webProjects.projects, ...androidProjects.projects, ...desktopProjects.projects]
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

function toRFC3339(date) {

    function pad(n) {
        return n < 10 ? "0" + n : n;
    }
  
    function timezoneOffset(offset) {
        var sign;
        if (offset === 0) {
            return "Z";
        }
        sign = (offset > 0) ? "-" : "+";
        offset = Math.abs(offset);
        return sign + pad(Math.floor(offset / 60)) + ":" + pad(offset % 60);
    }
  
    return date.getFullYear() + "-" +
        pad(date.getMonth() + 1) + "-" +
        pad(date.getDate()) + "T" +
        pad(date.getHours()) + ":" +
        pad(date.getMinutes()) + ":" +
        pad(date.getSeconds()) + 
        timezoneOffset(date.getTimezoneOffset());
  }

function renderXmlAtomFeed(projects) {
    return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title>Projects</title>
    <link href="${siteUrl}"/>
    <link rel="self" href="${siteUrl}/atom"/>
    <updated>${toRFC3339(new Date())}</updated>
    <author>
        <name>Ae App Labs</name>
    </author>
    ${projects.map( project => `
        <entry>
            <title>${project.title}</title>
            <link href="${project.buttons[0].target}"/>
            <id>urn:uuid:${project.id}</id>
            <updated>${toRFC3339(new Date())}</updated>
            <content type="xhtml">
                <div xmlns="http://www.w3.org/1999/xhtml">
                ${project.description}
                </div>
            </content>
            <summary type="xhtml">
                <div xmlns="http://www.w3.org/1999/xhtml">
                ${project.icon}
                </div>
            </summary>
        </entry>
    `).join('\n')}
</feed>`

}

 export async function get(req, res) {

    res.writeHead(200, {
        'Cache-Control' : `max-age=0, s-max-age=${600}`,
        'Content-Type' : 'text/xml'
    })

    const allProjects = await readAllProjects()
    const feed = renderXmlAtomFeed(allProjects)
    res.end(feed)   
 }