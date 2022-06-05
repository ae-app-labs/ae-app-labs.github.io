import { readable } from "svelte/store"

import tutorialsData from './tutorials-data.js'
import cases from './case-studies-data.js'
import privacyPolicyData from "./privacy-policy-data.js"
import { desktopProjectsData, webProjectsData, androidProjectsData } from "./projects-data.js"

export const tutorials = readable(null, set => {
    set(tutorialsData)
})

export const caseStudies = readable(null, set => {
    set(cases)
})

export const privacyPolicies = readable(null, set => {
    console.log("Hrllo")
    console.log(privacyPolicyData)
    set(privacyPolicyData)
})

export const desktopProjects = readable(null, set => {
    set(desktopProjectsData)
})

export const androidProjects = readable(null, set => {
    set(androidProjectsData)
})

export const webProjects = readable(null, set => {
    set(webProjectsData)
})

export const featuredProjects = readable(null, set => {
    const allProjects = [...desktopProjectsData.projects, ...androidProjectsData.projects, ...webProjectsData.projects]
    const featuredProjectsList = allProjects.filter( (project) => project.featured)
    set(featuredProjectsList)
})

export const filterPrivacyPolicy = (slug) => {
    console.log(slug)
    return privacyPolicyData.filter( (data) => {
        console.log("marco " + data)
        return data.slug === slug
    }  )
}