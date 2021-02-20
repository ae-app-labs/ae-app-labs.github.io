<script>
	const scrollToSection = (section) => {
		const element = document.getElementById(section)
		const y = element.getBoundingClientRect().top + window.scrollY - 60;
		window.scroll({
		top: y,
		behavior: 'smooth'
		});
		return false
	}
</script>

<section class="hero is-medium is-primary hero-landing">
	<div class="hero-body">
		<div class="container">

			<div class="columns is-vcentered is-12">
            	<div class="column is-half">
					<div class="has-text-link">
						<h1 class="title stagger1 pb-2">Research & Learning</h1>
						<h1 class="subtitle stagger1 pt-2 pb-2">Open Source Web, Mobile development and experiments.</h1>
						<button class="button is-warning is-medium btn btn-hover-effect p-2 stagger1" on:click={ () => scrollToSection('projects-android')}>See Projects &rsaquo;</button>
					</div>
				</div>

				<div class="column is-one-third">
					<div class="video-container stagger1">
						<iframe width="560" height="315" title="Design Tutorial" src="https://www.youtube.com/embed/+latest?list=PLCwTpl0YtSmdzJsTW_MdN7jUbPFiMCwVn" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
					<!--
					<div class="hero-graphic stagger1" style="float:right">
						<svg width="172" height="207" viewBox="0 0 240.799 285.893">
                            <g id="labs_icon" transform="translate(-1291.29 -214.685)">
                                <path id="InnerFill" class="flask-inner" d="M1300.034,265.819l90.626-20.536,69.454,124.5v18.964l-16.733,10.04H1255.97l-14.5-13.386V369.779Z" transform="translate(60.222 91.774)" fill="#00d1b2"/>
                                <path id="Flask" d="M1307.151,57.685h84.095V87.862c-2.76,7.372-11.773,3.466-12.872,10.489v54.585L1456.891,289.8s22.38,35.612-25.743,35.612H1267.322s-43.153,3.568-22.383-35.612,77.23-136.868,77.23-136.868c.154-61.546.079-54.258,0-54.585-.84-7.2-11.263-2.23-15.017-10.489Z" transform="translate(61 166)" fill="none" stroke="#00d1b2" stroke-width="10"/>
                            </g>
                        </svg>
					</div>
					-->
				</div>
		</div>
	</div>
</section>