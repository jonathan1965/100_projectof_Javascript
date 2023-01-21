const modal = document.querySelector('.modal')
const showModal = document.querySelector('.show-modal')
const closedModal = document.querySelector('.close-modal')


showModal.addEventListener('click',function(){
    modal.classList.remove('hidden')
})


closedModal.addEventListener('click',function(){
    modal.classList.add('hidden')
    console.log(closedModal)
})