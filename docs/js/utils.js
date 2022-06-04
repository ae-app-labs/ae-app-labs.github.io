const scrollToSection = (section) => {
    const element = document.getElementById(section)
    const y = element.getBoundingClientRect().top + window.scrollY - 60;
    window.scroll({
    top: y,
    behavior: 'smooth'
    });
    return false
}

