const resetButton = document.querySelector('.resetb');
const colors = document.querySelector('.colorshex') 
const randomn = Math.random().toString(36).substring(2,7)

resetButton.addEventListener('click', () =>{
    colors.innerHTML = randomn
});