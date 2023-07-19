const body = document.querySelector('body')

const modalWrapper = document.querySelector('.modal-wrapper')

const button = body.querySelector('#openModal')

button.onclick = function() {
    modalWrapper.classList.toggle('invisible')
    console.log(modalWrapper.classList)
}

document.onkeydown = function(event) {
    if(event.key=='Escape' && modalWrapper.classList.contains('invisible')===false) {
        modalWrapper.classList.toggle('invisible')
        console.log(modalWrapper.classList) 
    }
}
