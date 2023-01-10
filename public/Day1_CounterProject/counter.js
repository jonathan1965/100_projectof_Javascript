const count = document.querySelector(".count");
const add = document.querySelector('.add')
const sub = document.querySelector('.sub')
const resetCounter = document.querySelector('.resetCounter')
let resetValue= "0"

add.addEventListener("click", () => {
    count.innerHTML ++;
});

resetCounter.addEventListener("click", () => {
    count.innerHTML = resetValue;
})

sub.addEventListener("click", () => {
    count.innerHTML --;
});

