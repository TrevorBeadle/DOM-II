// Your code goes here
const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('.nav-link');

// nav-link event handlers
for (let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('mouseover', (event) => {
        event.target.style.color = 'lightgrey';
    });
    navLinks[i].addEventListener('mouseout', (event) => {
        event.target.style.color = 'black';
    });
}