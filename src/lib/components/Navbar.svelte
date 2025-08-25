<script>
    import { page } from '$app/stores'
    import { onMount } from 'svelte';

    onMount( () => {
        const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

        // Add a click event on each of them
        navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target
                const theTarget = document.getElementById(target)

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active')
                theTarget.classList.toggle('is-active')
            })
        })
    })

</script>

<nav class="navbar is-primary is-fixed-">  
    <div class="container">  
        <div class="navbar-brand">  
            <a class="navbar-item h" name="Home" alt="Home" href="/" class:is-active={$page.url.pathname === '/'} title="Home">
               <svg width="149.57" height="37.773" viewBox="0 0 149.57 37.773"><path d="M14.316,0H10.039V-.684L6.992-.215A22.617,22.617,0,0,1,3.965.078a2.141,2.141,0,0,1-2.441-2.4V-9.434a2.193,2.193,0,0,1,2.52-2.441h6.035v-4.531H5.8v2.813H1.758v-3.691a2.193,2.193,0,0,1,2.52-2.441h7.559a2.175,2.175,0,0,1,2.48,2.441ZM10.078-3.555V-8.848H5.8V-3.4Zm20.2,1.113A2.193,2.193,0,0,1,27.754,0H20.039a2.193,2.193,0,0,1-2.52-2.441V-17.285a2.193,2.193,0,0,1,2.52-2.441h7.715a2.193,2.193,0,0,1,2.52,2.441v7.246l-1.23,1.23H21.8v5.527H26V-6.562h4.277ZM26-11.719v-4.727H21.8v4.727ZM54.473,0H50.2V-.684l-3.047.469a22.617,22.617,0,0,1-3.027.293,2.141,2.141,0,0,1-2.441-2.4V-9.434a2.193,2.193,0,0,1,2.52-2.441h6.035v-4.531H45.957v2.813H41.914v-3.691a2.193,2.193,0,0,1,2.52-2.441h7.559a2.175,2.175,0,0,1,2.48,2.441ZM50.234-3.555V-8.848H45.957V-3.4Zm20.605-.41A3.515,3.515,0,0,1,69.121-.605a8.156,8.156,0,0,1-3.789.684q-.586,0-1.65-.039T62.148,0V7.207H57.676V-19.727h4.473V-19q1.563-.234,3.125-.488A21.144,21.144,0,0,1,68.4-19.8a2.141,2.141,0,0,1,2.441,2.4ZM66.348-5.2V-16l-4.2.078V-3.711h2.773Q66.348-3.711,66.348-5.2Zm20.82,1.23A3.515,3.515,0,0,1,85.449-.605,8.156,8.156,0,0,1,81.66.078q-.586,0-1.65-.039T78.477,0V7.207H74V-19.727h4.473V-19q1.562-.234,3.125-.488a21.144,21.144,0,0,1,3.125-.312,2.141,2.141,0,0,1,2.441,2.4ZM82.676-5.2V-16l-4.2.078V-3.711H81.25Q82.676-3.711,82.676-5.2ZM103.086,0H98.691V-30.566h4.395Zm16.035,0h-4.277V-.684L111.8-.215a22.617,22.617,0,0,1-3.027.293,2.141,2.141,0,0,1-2.441-2.4V-9.434a2.193,2.193,0,0,1,2.52-2.441h6.035v-4.531h-4.277v2.813h-4.043v-3.691a2.193,2.193,0,0,1,2.52-2.441h7.559a2.175,2.175,0,0,1,2.48,2.441Zm-4.238-3.555V-8.848h-4.277V-3.4Zm20.605-.41a3.816,3.816,0,0,1-1.113,2.91A4.139,4.139,0,0,1,131.406,0h-9.082V-30.566H126.8V-19q1.562-.234,3.125-.488a21.144,21.144,0,0,1,3.125-.312,2.141,2.141,0,0,1,2.441,2.4ZM131-5.2V-16l-4.2.078V-3.711h2.773Q131-3.711,131-5.2Zm20.1,2.754A2.175,2.175,0,0,1,148.613,0h-7.52a2.175,2.175,0,0,1-2.48-2.441V-6.68h4.277v3.32h3.926V-6.484l-6.855-4.043a2.42,2.42,0,0,1-1.348-2.148v-4.609a2.193,2.193,0,0,1,2.52-2.441h7.441a2.175,2.175,0,0,1,2.48,2.441v3.965h-4.238v-3.047h-3.926v2.852l6.836,4a2.416,2.416,0,0,1,1.367,2.188Z" transform="translate(-1.523 30.566)" fill="#fff"/></svg>
            </a>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>

        <div class="navbar-menu has-background-primary" id="navMenu">
            <div class="navbar-start">
                <a class="navbar-item has-text-white" href="/case-studies" class:is-active={$page.url.pathname.includes('/case-studies')} title="Case Studies">Case Studies</a>
                <a class="navbar-item has-text-white" href="/projects" class:is-active={$page.url.pathname.includes('/projects')} title="Projects">Projects</a>
                <a class="navbar-item has-text-white" href="/tutorials" class:is-active={$page.url.pathname.includes('/tutorials')} title="Tutorials">Tutorials</a>
                <a class="navbar-item has-text-white" href="/courses" class:is-active={$page.url.pathname.includes('/courses')} title="Courses">Courses</a>
                <a class="navbar-item has-text-white" href="/about" class:is-active={$page.url.pathname.includes('/about')} title="About">About</a>
            </div>
            <div class="navbar-end nav-social">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary" href="https://www.behance.net/midhunharikumar" name="Behance Profile" title="Behance">
                            <span class="icon"><i class="fab fa-behance fa-2x has-text-white-ter"></i></span>
                        </a>
                        <a class="button is-primary" href="https://instagram.com/AeAppLabs" name="Instagram" title="Instagram">
                            <span class="icon"><i class="fab fa-instagram fa-2x has-text-white-ter"></i></span>
                        </a>
                        <a class="button is-primary" href="https://twitter.com/aeapplabs" name="Twitter" title="X (formerly Twitter)">
                            <span class="icon">
                                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M118.131 7.20624H141.131L90.8813 64.6437L150 142.787H103.712L67.4625 95.3875L25.975 142.787H2.9625L56.7125 81.35L0 7.21249H47.4625L80.2312 50.5375L118.131 7.20624ZM110.063 129.025H122.806L40.5375 20.25H26.8625L110.063 129.025Z" fill="#F8F8F8"/>
                                </svg>                                    
                            </span>
                        </a>
                        <a class="button is-primary" href="https://github.com/ae-app-labs" name="Github Page" title="Github">
                            <span class="icon"><i class="fab fa-github fa-2x has-text-white-ter"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>