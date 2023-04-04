const hex = document.querySelector(".colorshex") 
const btn = document.querySelector(".resetb")

const generateColor = () => {
    const randomColor= Math.random().toString(16).substring(2,8).toUpperCase()
    document.body.style.background = "#" + randomColor
    hex.innerHTML = "#" + randomColor
}

btn.addEventListener('click',generateColor)