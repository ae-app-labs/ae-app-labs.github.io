<script>
    import CommonHero from "../components/CommonHero.svelte";
</script>

<svelte:head>
    <title>ae app labs | Tutorials</title>
</svelte:head>

<CommonHero title="Tutorials" subtitle="" />

<section class="section">
    <div class="container content">
        <div class="columns">
            <div class="column is-6">
                <h1>Design and Development</h1>
                <h3>Video tutorials on Youtube</h3>
                <p class="is-size-4 pt-4">
                    <a href="https://www.youtube.com/channel/UCCYOqc-QhZCbWtjpHZ5ROXw">Visit Channel</a>
                </p>
            </div>
            <div class="column is-6">
                <!-- Render this content dynamically -->
                <div class="card mb-4">
                    <div class="card-content">
                        <h3>Portfolio Landing Page Design with Adobe XD</h3>
                        <p class="mb-2">
                            <span class="tag is-light is-primary">Adobe XD</span>
                            <span class="tag is-light is-info">UI Design</span>
                        </p>

                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/rAvU5qBP_ws"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-content">
                        <h3>Portfolio Landing Page Development</h3>
                        <p class="mb-2">
                            <span class="tag is-light is-primary">HTML</span>
                            <span class="tag is-light is-info">SASS</span>
                        </p>

                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/T55-dwmur4s"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-content">
                        <h3>Camping website development</h3>
                        <p class="mb-2">
                            <span class="tag is-light is-primary">HTML</span>
                            <span class="tag is-light is-info">SASS</span>
                        </p>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/BfvvOsIuTP8"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen/>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-content">
                        <h3>Creating an Android App</h3>
                        <p class="mb-2">
                            <span class="tag is-light is-primary">Android</span>
                            <span class="tag is-light is-info">Android Studio</span>
                        </p>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/vR1wcqfslWM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen/>
                    </div>
                </div>

            <!-- End videos list column -->
            </div>
        </div>
    </div>
</section>
