const resetButton = document.querySelector('.resetb');
const colors = document.querySelector('.colorshex') 
const randomn = Math.random().toString(36).substring(2,7)

resetButton.addEventListener('click', () =>{
   
    for(i=0 ; i<randomn.length; i++) {
        return colors.innerHTML = randomn[i]
    }
    
});