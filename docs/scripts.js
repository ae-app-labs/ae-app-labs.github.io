document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

            });
        });
    }

});

function scrollToSection(section) {
    const element = document.getElementById(section)
    const y = element.getBoundingClientRect().top + window.scrollY;
    window.scroll({
    top: y,
    behavior: 'smooth'
    });
    return false
}

/*
gsap.registerPlugin(ScrollTrigger)
var tl = gsap.timeline()

tl.from('.hero-landing', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})

tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Power4.easeOut,
    duration: 2
}, "-=1.5")

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: 'top bottom'
    },
    y: 50,
    opacity: 0,
    stagger: .3
})
*/