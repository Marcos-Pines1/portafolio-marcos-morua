/*===================== LOADING ========================*/

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
});

/*===================== NAV MENU ========================*/

const navMenu = document.getElementById("menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");


/* Sidebar show */
// Validate If constant Exists

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

/* Sidebar Hide */
// Validate If constant Exists

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById("menu")
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*============ Scroll Sections Active Link ==============*/

// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionID = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const navLink = document.querySelector(".nav__list a[href*=" + sectionID + "]");
            if (navLink) {
                navLink.classList.add("active");
            }
        } else {
            const navLink = document.querySelector(".nav__list a[href*=" + sectionID + "]");
            if (navLink) {
                navLink.classList.remove("active");
            }
        }
    });
}

/*===================== HEADER SHADOW ========================*/

const shadowHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('shadow-header'); else header.classList.remove('shadow-header');
}

window.addEventListener('scroll', shadowHeader);


/*===================== CHANGE THEME ========================*/

const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'ri-moon-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  // Update the icon
  if (getCurrentTheme() === 'light') {
    themeButton.classList.remove('ri-sun-line');
    themeButton.classList.add('ri-moon-line');
  } else {
    themeButton.classList.remove('ri-moon-line');
    themeButton.classList.add('ri-sun-line');
  }

  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});


/*==================== TEXT ANIMATION ========================*/ 

const typed = new Typed(".auto-type",{
    strings : ["Programador","Frontend", "Backend" ],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

/*==================== TAB ABOUT ========================*/ 

document.addEventListener('DOMContentLoaded', () => {
    const tablinks = document.getElementsByClassName("about__tab-link");
    const tabcontents = document.getElementsByClassName("about__tab__contents");

    function opentab(tabname, element) {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-cont");
        }
        element.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-cont");
    }

    Array.from(tablinks).forEach(link => {
        link.addEventListener('click', function() {
            const tabname = this.getAttribute('data-tab-about');
            opentab(tabname, this);
        });
    });
});

/*==================== TAB SKILLS ========================*/ 

document.addEventListener('DOMContentLoaded', () => {
    const tablinks = document.getElementsByClassName("skills-link");
    const tabcontents = document.getElementsByClassName("skills__tab__contents");

    function opentab(tabname, element) {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-cont");
        }
        element.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-cont");
    }

    Array.from(tablinks).forEach(link => {
        link.addEventListener('click', function() {
            const tabname = this.getAttribute('data-tab-habilities');
            opentab(tabname, this);
        });
    });
});

/*==================== MixitUP ========================*/

let mixerPortfolio = mixitup('.portfolio__container',{
    selectors: {
        target: '.portfolio__card'
    },
    animation: {
        duration: 300
    }
})
/*==================== PORTFOLIO FILTER ========================*/

const linkWork = document.querySelectorAll('.portfolio__item')

function activeItem() {
    linkWork.forEach(l=> l.classList.remove('active-item'))
    this.classList.add('active-item')
}

linkWork.forEach(l=> l.addEventListener('click', activeItem))

/*==================== PORTFOLIO POPUP ========================*/

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("portfolio__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".portfolio__popup-img").src = portfolioItem.querySelector(".portfolio__img").src;
    document.querySelector(".popup-subtitle-span").innerHTML = portfolioItem.querySelector(".portfolio__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;

}

/*==================== INPUT ANIMATION ========================*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus")
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
})


/*==================== EMAIL JS ========================*/ 

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('form-message')

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_hho7gtw', 'template_j9co7mb', '#contact-form', 'exy09Xsbtu2vQosNz')
    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields

        contactForm.reset();
    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    });
}

contactForm.addEventListener('submit', sendEmail)


/*==================== SCROLL UP ========================*/ 

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up');
  // cuando el scroll sea superior a 560 de altura del viewport, agrega show-scroll 
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

