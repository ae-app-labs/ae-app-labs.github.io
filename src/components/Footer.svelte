<script>
    import ContactForm from '../components/ContactForm.svelte';
</script>

<footer class="footer py-4">
    <div id="footer_bg_graphic" class="bg-graphic is-hidden-mobile">
        <svg width="254.853" height="140.007" viewBox="0 0 254.853 140.007">
            <g transform="translate(-832.074 -2107.496)" opacity="0.6">
                <rect width="99" height="99" transform="translate(960.5 2107.496) rotate(45)" fill="#09bfa4"/>
                <rect width="59" height="61" transform="translate(1045.207 2135.073) rotate(45)" fill="#2de2c7"/>
                <rect width="59" height="61" transform="translate(875.207 2135.073) rotate(45)" fill="#2de2c7"/>
            </g>
        </svg>
    </div>
	<div class="container">
        <div class="columns">
            <div class="column is-one-quarter is-desktop is-vcentered">
                <div>
                    <svg  width="200" height="120" viewBox="0 0 209.313 131.46">
                        <g transform="translate(-504.327 -2063.881)">
                            <path d="M72.4,164.685s69.683-51.825,88.36,29.4c5.864,25.5-1.8,58.854-36.674,68.33-43.769,5.688-46.853-48.027-46.853-48.027l83.527-18.247" transform="translate(437 1924)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="17"/>
                            <path d="M90.146,95s-69.683,50.16-88.36-28.452C-4.078,41.859,3.585,9.579,38.46.408,82.229-5.1,85.313,46.892,85.313,46.892L1.786,64.553" transform="translate(618.528 2075.318)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="17"/>
                        </g>
                    </svg>
                </div>

            </div>
            
            <div class="column is-one-quarter">
                <h2 class="subtitle has-text-light has-text-weight-bold">Links</h2>
                <ul>
                    <li class="pt-1"><a href="/">Home</a></li>
                    <li class="pt-1"><a href="about">About</a></li>
                    <li class="pt-1"><a href="privacy-policy">Privacy Policy</a></li>
                    <li class="pt-1"><a href="case-studies">Case Studies</a></li>
                    <li class="pt-1"><a href="tutorials">Tutorials</a></li>
                </ul>
                <br />
                <div>
                    <a class="button is-primary" href="https://play.google.com/store/apps/dev?id=6177347481993841752&hl=en_US" name="Play Store">
                        <span class="icon"><i class="fab fa-google-play"></i></span>
                    </a>
                    <a class="button is-primary" href="https://www.facebook.com/AeAppLabs/" name="Facebook Page">
                        <span class="icon"><i class="fab fa-facebook"></i></span>
                    </a>
                    <a class="button is-primary" href="https://twitter.com/aeapplabs" name="Twitter">
                        <span class="icon"><i class="fab fa-twitter"></i></span>
                    </a>
                    <a class="button is-primary" href="https://instagram.com/AeAppLabs" name="Instagram">
                        <span class="icon"><i class="fab fa-instagram"></i></span>
                    </a>
                    <a class="button is-primary" href="https://github.com/ae-app-labs" name="Github Page">
                        <span class="icon"><i class="fab fa-github"></i></span>
                    </a>
                </div>
            </div>

            <div class="column is-half">
                <ContactForm />
            </div>
        </div>
	</div>
</footer>

<div class="footer-bottom p-3">
    <div class="container has-text-light">
        &copy; 2021 ae app labs | All rights reserved
    </div>
</div>
