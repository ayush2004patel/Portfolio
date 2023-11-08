// Backgroung Image scrolling script
var headerBg = document.getElementById('header');
window.addEventListener('scroll', function () {
    headerBg.style.opacity = 1 - window.pageYOffset / 1800;
    headerBg.style.top = window.pageYOffset + 'px';
    headerBg.style.backgroundPositionY = window.pageYOffset / 2 + 'px';
});

// Navbar for small screen
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// Typing Animation Script
var typed = new Typed(".auto-type span", {
    strings: ["Student.", "Programmer.", "Developer.",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Fadding Transition Script
const headerText = document.querySelector('.header-text');
const appearOptions = {
    threshold: 0.5
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

appearOnScroll.observe(headerText);

//contact-form data send on google sheet script
const scriptURL = 'https://script.google.com/macros/s/AKfycbwPMopxqR_Vk-JfwWipc0bQHWGz4j56HLDyJj0WD2pjXN_6cLh2D3UHeL085lBTEL9qEw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

function displaySuccessMessage() {
  msg.style.display = "block";
  setTimeout(function () {
    msg.style.display = "none";
  }, 3000);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      displaySuccessMessage();
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
    });
});