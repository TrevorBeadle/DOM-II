// Your code goes here

// nav-link selectors
const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('.nav-link');

// nav-link event handlers
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseover', (event) => {
        event.target.style.color = 'lightgrey';
    });
    navLinks[i].addEventListener('mouseout', (event) => {
        event.target.style.color = 'black';
    });
}

// content section selectors
const contentSections = document.querySelectorAll('.content-section');

contentSections.forEach(item => {
    item.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = '#DED1B6';
    })
});
contentSections.forEach(item => {
    item.addEventListener('mouseleave', event => {
        event.target.style.backgroundColor = 'white';
    })
})

// content destination selector
const contentDestination = document.querySelector('.content-destination');
contentDestination.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = '#DED1B6';
});
contentDestination.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'white';
});


// window load event listener
window.addEventListener('load', event => {
    alert('Page Has Fully Loaded');
})

// appending an input to the end of the nav
const input = document.createElement('input');
input.style.width = '15rem';
input.style.height = '1.8rem';
input.placeholder = 'search';
// changing nav width to fit the input
nav.style.width = '100%';
nav.append(input);
// adding a focus event listener to input
input.addEventListener('focus', event => {
    event.target.style.backgroundColor = 'pink';
});
input.addEventListener('blur', event => {
    event.target.style.backgroundColor = 'white';
});


// selector for section images
const sectionImages = document.querySelectorAll('section img');

sectionImages.forEach(item => {
    item.addEventListener('dblclick', event => {
        event.target.style.display = 'none';
    });
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape'){
        sectionImages.forEach(item => {
            item.style.display = '';
        });
    }
});

document.addEventListener('keyup', event => {
    if (event.key === 'Escape'){
        alert(`The images have returned!`);
    }
});