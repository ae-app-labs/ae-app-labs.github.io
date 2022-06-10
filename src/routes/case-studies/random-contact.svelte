<script>
    import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Case Studies - Random Contact Redesign</title>
</svelte:head>

<style>
    [data-letters]:before {
    content:attr(data-letters);
    display:inline-block;
    font-size:2em;
    width:3.5em;
    height:3.5em;
    line-height:3em;
    text-align:center;
    border-radius:50%;
    background:orangered;
    vertical-align:middle;
    margin-right:1em;
    color:white;
    }

    .screenshot-bg {
        background: rgb(255,52,103);
        background: linear-gradient(180deg, rgba(255,52,103,1) 0%, rgba(253,128,158,1) 100%);
    }
</style>

<section class="section-header banner-bg" transition:fade>
	<div class="container py-6">
        <p class="is-size-1 is-family-secondary">A Mobile app <br/> Redesign Project</p>
        <p class="is-size-4 stagger2 mt-4">UI/UX App Design</p>
	</div>
</section>

<section class="section mt-4 mb-4">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-6">
                <img src="/img/case-studies/random-contact/app_icon.png" alt="app icon"/>
            </div>
			<div class="column is-5">
                <p class="is-size-4 mb-4 has-text-weight-bold">Random Contact App</p>
				<p class="is-size-5">This is a hobby Android project that enables its users to see a random contact from their contacts list, and provides a method to contact them. The app also has an option to create and manage custom contact groups to generate a random contact from.</p>
                <br/>
                <p class="is-size-6">The project started out as an experiment and now has been downloaded more than 1000 times.</p>
            </div>
		</div>
	</div>
</section>

<!-- Section - Banner -->
<section class="section section-full-width is-hidden-mobile screenshot-bg">
    <img src="/img/case-studies/random-contact/banner.png" alt="mockup" />
</section>

<section class="section mt-4">
	<div class="container">
		<div class="columns is-vcentered">
            <div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">A fresh coat of paint</p>
				<p class="is-size-5">The prior version, "Random Contact 3" was designed based on the Google Material Design guidelines from 2017.</p> <br/>
                <p class="is-size-6">Since then the design guidelines have evolved along with better theming support, as well as dark mode became easier to implement.</p>
            </div>
		</div>
	</div>
</section>

<!-- Section - Wireframe -->
<section class="section section-full-width" style="background-color: #9999ff;">
    <img src="/img/case-studies/random-contact/wireframes.png" alt="wireframes" />
</section>

<section class="section mt-2 mb-6">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-4 is-hidden-mobile">
                &nbsp;
            </div>
            <div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Design Approach</p>
                <p class="is-size-5">Armed with the powerful Adobe XD to design and wireframe, we started out with a basic wireframe of all the flows required for the app.</p> <br/>
                <p class="is-size-6">As always starting with the wireframe is the best approach to capture all the essentials for the UX.</p> <br/>
                <p class="is-size-6">There were some shortcomings of the previous design such as "Custom Group Management" being hidden underneath a hamburger menu.</p>
            </div>
        </div>
    </div>
</section>

<!-- Section - Light Mockup -->
<section class="section section-full-width" style="background-color: #517bbb;">
    <img src="/img/case-studies/random-contact/mockup_light.png" alt="mockup" />
</section>

<section class="section mt-2 mb-6">
    <div class="container">
		<div class="columns is-vcentered">
			<div class="column is-8 is-hidden-mobile">
                &nbsp;
            </div>
			<div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Mocking Up</p>
				<p class="is-size-5">Moving away from the colorful and Card style design to a more modern and streamlined design had been the plan.</p> <br/>
                <p class="is-size-6">The colors of the icon are used carefully as accents in the interface.</p><br/>
                <p class="is-size-6">The toolbar was cleaned up in the final design along with the bottom navigation bar.</p>
            </div>
		</div>
	</div>
</section>

<!-- Section - dark Mockup -->
<section class="section section-full-width" style="background-color: #fa678c;">
    <img src="/img/case-studies/random-contact/mockup_dark.png" alt="mockup" />
</section>

<section class="section mt-2">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-4 is-hidden-mobile">
                &nbsp;
            </div>
            <div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Dark Mode</p>
                <p class="is-size-5">The latest Android design guidelines and resources make it quite easy to provide users with light and dark themes. The light theme mockup was used as a basis to design a dark variant theme.</p> 
            </div>
        </div>
    </div>
</section>

<section class="section has-background-grey-light">
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-1">

                <article class="media">
                    <figure class="media-left">
                        <p data-letters="A"></p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Ashirbad Das</strong>
                          <br>
                          Best random contact app ever. It's so beautiful, it makes my eyes water.
                        </p>
                      </div>
                    </div>
                  </article>

            </div>
            <div class="column is-4 is-offset-1">

                <article class="media">
                    <figure class="media-left">
                        <p data-letters="E"></p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>eFeet eFeet</strong>
                          <br>
                          It fulfills its objective. Very good app, it fulfills what I was looking for LOL !!.
                        </p>
                      </div>
                    </div>
                  </article>

            </div>
        </div>
    </div>
</section>

<section class="section mb-4">
	<div class="container">
		<div class="columns is-vcentered is-centered">
			<div class="column is-4 has-text-centered">
                <a href="https://play.google.com/store/apps/details?id=com.ae.apps.randomcontact" rel="nofollow" target="_blank">
                    <img alt="Get it on Google Play" width="200px" src="https://camo.githubusercontent.com/2149f526e69167218eb7eea8f21cb74a756aa43495f7acfeccfe995d40f62028/68747470733a2f2f706c61792e676f6f676c652e636f6d2f696e746c2f656e5f75732f6261646765732f696d616765732f67656e657269632f656e5f62616467655f7765625f67656e657269632e706e67" data-canonical-src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" style="max-width:100%;">
                </a>
			</div>
            <div class="column is-4 ">
                <a class="is-vcentered is-link" href="https://github.com/midhunhk/random-contact" name="Github Page">
                    <span class="icon mr-4"><i class="fab fa-github fa-2x has-text-white"></i></span>
                    Explore Source Code 
                    <i class="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                </a>
            </div>
		</div>
	</div>
</section>
