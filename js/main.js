//Toggle nav bar icon
let menuIcon  = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
}


// Scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Toggle Icon Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    // Remove toggle icon and navbar
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active')

};

// Scroll Reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.home-content, heading, .line-1',  { origin: 'left' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .line-2', { origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img',  { origin: 'left' });

ScrollReveal().reveal('.home-contact p, .about-content',  { origin: 'right' });





// Typed JS
const typed = new Typed('.multiple-texts', {
    strings: ['Backend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    // loop: true
})

const typed1 = new Typed('.about-texts', {
    strings: ['ME'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
})


