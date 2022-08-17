const buttonOpen = document.querySelector('.page-header__toggler-button')
const buttonClose = document.querySelector('.page-header__button-close')
const menuContent = document.querySelector('.page-header__content')

buttonOpen.addEventListener('click', ()=>{
    menuContent.classList.add('active')
    buttonClose.classList.add('active')
    buttonOpen.classList.add('disable')
})
buttonClose.addEventListener('click', ()=>{
    menuContent.classList.remove('active')
    buttonClose.classList.remove('active')
    buttonOpen.classList.remove('disable')
})
