import { readable } from "svelte/store"

import tutorialsData from './tutorials-data.js'
import caseStudiesData from './case-studies-data.js'
import privacyPolicyData from "./privacy-policy-data.js"
import coursesData from "./courses-data.js"
import { desktopProjectsData, webProjectsData, androidProjectsData } from "./projects-data.js"

export const tutorials = readable(null, set => {
    set(tutorialsData)
})

export const courses = readable(null, set => {
    set(coursesData)
})

export const caseStudies = readable(null, set => {
    set(caseStudiesData)
})

export const privacyPolicies = readable(null, set => {
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

export const featuredProjects = readable(
    desktopProjectsData.projects
        .concat(androidProjectsData.projects, webProjectsData.projects)
        .filter(project => project.featured)
)

export const filterPrivacyPolicy = (slug) => {
    return privacyPolicyData.filter( (data) => {
        return data.slug === slug
    }  )
}