// const rand = Math.floor(Math.random() * 10 + 1)
// console.log(rand);


const number = document.querySelector(".number")
const btn = document.querySelector(".generate")

const generator = () => {
  // generaror between btn 1 and 10

  const randomNumber = Math.floor(Math.random() * 20 + 1);
  number.innerHTML = randomNumber

};

btn.addEventListener("click", generator)