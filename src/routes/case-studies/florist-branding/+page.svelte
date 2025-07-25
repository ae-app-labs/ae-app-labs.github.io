<script>
	import { fade } from 'svelte/transition'
	import { page } from '$app/stores'
    import SeoMetaTags from '$lib/components/SEOMetaTags.svelte'
</script>

<SeoMetaTags
	sectionName="Case Studies"
	title="Van Belle Flowers Branding"
	description="Concept rebranding for a local flower shop"
	pageUrl = {$page.url.pathname}
	image="https://ae-app-labs.github.io/img/case-studies/florist-branding/vb-banner.png"
	imageAlt="A banner image with a stylyzed screenshot of a web page and tools used"
/>

<section class="section section-header banner-bg my-0 py-0 " transition:fade|global>
	<div class="container py-4 fadeInUp">
        <p class="is-size-1 is-family-secondary">Van Belle Florals</p>
        <p class="is-size-4 stagger1">Re-Branding Concept</p>

		<div class="columns mt-4">
			<div class="column is-8 stagger1 pr-4">
				<p class="is-size-5 my-2">
					Van Belle Florals is a family owned and operated flower shop in Durham Region operating since the 1960s.
					It is a well known florist and garden supplies store that is historic and has a lot of unique features.
				</p>
			</div>
		</div>

		<div class="columns stagger2 mt-4">
			<div class="column is-2">
				<h3 class="is-size-4 has-text-weight-bold">Effort</h3>
				<p class="is-size-6 pt-2">Research and Design</p>
			</div>
			<div class="column is-2">
				<h3 class="is-size-4 has-text-weight-bold">Deliverables</h3>
				<p class="is-size-6 pt-2">Digital Assets</p>
			</div>
			<div class="column is-2">
				<h3 class="is-size-4 has-text-weight-bold">Presentation</h3>
				<p class="is-size-6 pt-2 has-text-link-dark">
					<a href="https://www.behance.net/gallery/197383145/Florist-Website-and-Branding" target="_blank" class="button is-link" rel="noreferrer">
						Visit Behance <i class="fas fa-external-link-alt ml-2"></i>
					</a>
				</p>
			</div>
		</div>
	</div>
</section>

<div class="my-0">
    <img src="/img/case-studies/florist-branding/vb-banner.png" alt="Branding" />
</div>

<section class="section py-0" style="background-color: white; color: black">
	<div class="container">
		<div class="columns is-vcentered">
			<div class="column is-7 py-6">
                <img src="/img/case-studies/florist-branding/colors-logo.png" alt="assets"/>
            </div>
			<div class="column is-4 stagger2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Logo Redesign</p>
				<p class="is-size-5">The existing logo looks dated, but iconic and historic to the store location that was opened back in the 1960s.</p>
                <br/>
                <p class="is-size-6">The first step was to modernize the logo while keeping true to the roots. After a number of iterations with the help from Gen AI Tools, a simple logo was created.</p>
            </div>
            <div class="column is-1">&nbsp;</div>
		</div>
	</div>
</section>

<section class="section">
    <div class="container">
        <div class="columns my-6">
            <div class="column is-4">
                <p class="is-size-4 mb-4 has-text-weight-bold">The Hero section</p>
				<p class="is-size-5">Since the existing website does not have a hero section or clear call to action button, these were worked into the design.</p>
                <br/><br/>
				<p class="is-size-6">We retained the language selection, user profile, shopping cart and phone number for the store at the top of the page.</p>
                <br/>
				<p class="is-size-6">Recraft.AI was used to extensively create all graphical assets for the design from scratch, including patterns.</p>
                <div class="has-text-right is-hidden-mobile">
                    <svg width="84" height="110" viewBox="0 0 84 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_87_94)">
                        <path d="M55.0706 1.47748C44.0481 2.88292 35.8903 11.0538 30.0003 19.9473C24.4866 28.2875 20.4887 37.712 18.3157 47.5063C16.1426 57.3005 14.7918 69.1473 18.9917 78.7605C22.5835 86.9827 30.9496 92.9778 39.7963 93.8815C50.8851 95.0123 62.6528 88.9408 68.4184 79.4198C69.3046 77.9521 68.523 76.8535 66.9022 76.9069C65.0208 76.9562 62.916 78.4195 61.9121 79.9619C52.8435 93.9341 32.7507 89.189 26.0518 75.2788C22.2095 67.2911 22.9483 57.2339 24.4522 48.7631C25.9562 40.2922 28.5711 32.6824 32.4896 25.4344C36.4082 18.1864 42.5843 7.8204 51.8717 6.62261C53.6013 6.39643 55.5945 5.36844 56.4902 3.7974C57.2124 2.5188 56.7214 1.25435 55.0706 1.47748V1.47748Z" fill="#006E42"/>
                        <path d="M47.7765 72.8035L59.021 77.5912C62.7631 79.1889 66.4751 80.9564 70.2839 82.3735C72.027 83.0087 74.0767 82.105 75.4132 80.9478C76.0815 80.3693 76.7777 79.6819 77.0432 78.8191C77.1883 78.2935 77.1986 77.4453 76.57 77.2073C75.9889 76.9956 75.4133 76.8024 74.8377 76.6092C72.9183 75.9855 66.951 79.7904 69.4383 81.7364C69.722 81.955 70.0002 82.155 70.3023 82.3681L76.5883 77.2019C72.9497 75.4129 69.0988 73.988 65.3567 72.3903L54.1122 67.6026C52.4208 66.8717 50.2514 67.9112 48.9461 69.039C48.2962 69.6122 46.0613 72.0595 47.7949 72.7981L47.7765 72.8035Z" fill="#006E42"/>
                        <path d="M71.1899 81.0407C64.3746 85.8995 58.0734 91.694 52.9438 98.3518C52.221 99.2885 51.3559 101.032 53.1515 101.37C54.8205 101.685 57.0035 100.42 58.0394 99.1899C59.3331 97.6831 60.6378 96.2133 61.9846 94.7513C62.6958 93.979 63.4308 93.2198 64.1713 92.4792C64.5415 92.1089 64.9117 91.7386 65.2819 91.3682C65.4698 91.1924 65.6521 90.9979 65.84 90.822C66.153 90.5289 66.2156 90.4702 66.0407 90.6222C65.8713 90.7927 65.9468 90.7102 66.2415 90.4224C66.4293 90.2465 66.6172 90.0706 66.8234 89.8893C67.2174 89.5321 67.5985 89.1989 67.9925 88.8417C68.7234 88.2045 69.4727 87.5619 70.2274 86.9378C71.7865 85.6549 73.3987 84.4168 75.051 83.2475C75.9397 82.6041 77.6282 80.5387 76.1614 79.6212C74.6946 78.7036 72.3346 80.1814 71.1791 81.0037L71.1899 81.0407Z" fill="#006E42"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_87_94">
                        <rect width="58" height="96" fill="white" transform="translate(0.650879 17.1152) rotate(-16.3645)"/>
                        </clipPath>
                        </defs>
                    </svg>     
                </div>
                <p class="is-size-6">Most importantly the awards and accolades are displayed prominently as social proof, instead of being hidden away in an about us page.</p>
            </div>
            <div class="column is-8">
                <img src="/img/case-studies/florist-branding/home-hero.jpg" alt="home">
            </div>
        </div>
    </div>

    <div class="container">
        <div class="columns">
            <div class="column is-8">
                <img src="/img/case-studies/florist-branding/home-products.jpg" alt="products">
            </div>
            <div class="column is-4">
                <p class="is-size-4 mb-4 has-text-weight-bold">Products section</p>
				<p class="is-size-5">The products section was redesigned to be elegant and provide clear information.</p>
                <br/><br/>
				<p class="is-size-6">A featured item or collection can be highlighted prominently as part of a promotion.</p>
                <br/>
				<p class="is-size-6">Recraft.AI was used to create the images and ChatGPT was used to generate the descriptions for the products.</p>
            </div>
        </div>
    </div>
</section>

<div class="my-0">
    <img src="/img/case-studies/florist-branding/mobile.jpg" alt="Mobile" />
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-8 is-offset-2">
                <p class="is-size-4 mb-4 has-text-weight-bold">Responsive and Mobile friendly</p>
                <p class="is-size-5">One of the most important aspects for a modern website is to behave responsively to any screen size and be usable.</p>
                <br/><br/>
            </div>
        </div>
    </div>
</div>

<div class="my-0 py-0">
    <img src="/img/case-studies/florist-branding/brand.jpg" alt="Branding" />
</div>