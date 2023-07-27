// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x-circle')
    navbar.classList.toggle('active')
};

// scroll section active link//

let section = document.querySelectorAll('section');
let navkinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navkinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }

    });

    // sticky navbar////

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar

    menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');

};




// <!-- scroll reveal -->
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,

});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });


// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'MERN Stack Developer'],
    typeSpeed: 100,
    backSpeedL: 100,
    backdelay: 1000,
    loop: true

});

function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        message: document.getElementById('message').value,

    }


    const serviceID = "service_vwdr5eh"
    const templateID = "template_h8uk786"
    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById('email').value = "";
                document.getElementById('number').value = "";
                document.getElementById('message').value = "";
                console.log(res);
                alert("your message sent successfully")
            }
        )
        .catch(err => console.log(err))
}

