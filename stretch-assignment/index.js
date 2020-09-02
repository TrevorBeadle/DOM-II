const block = document.querySelectorAll('.block');
const blocks = document.querySelector('.blocks');

block.forEach(item => {
    item.addEventListener('click', event => {
        blocks.prepend(event.target);
    })
})