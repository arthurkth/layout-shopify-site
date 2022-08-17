let imagens= document.querySelectorAll('.portfolio__grid-link');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal="";

imagens.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        const el = e.target.parentElement.parentElement
        const img = el.querySelector('.portfolio__grid-image')
        const src = img.getAttribute('src')
        modalImg.setAttribute('src', src);
        modal.classList.toggle('modal_active');
    })
})

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});