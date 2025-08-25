<script>
    import { courses } from '$lib/data/store.js';
	import { fade } from 'svelte/transition';

    $: coursesData = $courses.data
</script>

<svelte:head>
	<title>ae app labs | Courses</title>
</svelte:head>

<section class="section" transition:fade|global>
    <div class="container content">
        <div class="columns">
            <div class="column is-5 fadeInUp">
                <p class="is-size-3 is-family-secondary">Courses</p>
                <p class="subtitle">Learn in-demand programming skills through hands-on projects and guided learning paths. From Java fundamentals to Spring Boot, microservices, and full-stack development, our courses equip you with the knowledge and practical experience to build real-world applications and advance your career in software development.</p>
            </div>
            <div class="column is-7">
                {#each coursesData as course, index (course.slug)}
                    <div class="card is-shadowless is-slightly-rounded has-background-info">
                        <div class="card-content">
                            <div class="content">
                                <div class="py-2">
                                    <p>
                                        <span class="title is-4 is-capitalized is-subtle-link">
                                            <a href="courses/{course.slug}" class="has-text-white">{course.title}</a>
                                        </span> 
                                    </p>
                                    <p>
                                        <span class="block tag is-primary">{course.type}</span> &middot;
                                        <span class="block"> {course.creationDate}</span>
                                    </p>
                                    {#each course.tags as tag}
                                        <span class="block tag is-rounded is-link mr-1 mb-1">{tag}</span>
                                    {/each}
                                </div>
                                <p class="is-size-5">{course.shortDescription}</p>
                                <p class="is-size-6">{course.longDescription}</p>
                                <p>
                                    <a href="courses/{course.slug}" class="is-link">
                                        View Course Details 
                                        <i class="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>