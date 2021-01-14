import { readable } from "svelte/store"

import desktopProjectsData from './projects-desktop.js'
import androidProjectsData from './projects-android.js'

export const desktopProjects = readable(null, set => {
    set(desktopProjectsData)
})

export const androidProjects = readable(null, set => {
    set(androidProjectsData)
})