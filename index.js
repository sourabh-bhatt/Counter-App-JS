const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const counterElement = document.getElementById("counter");

let counter = 0;

function incrementCounter() {
  counter++;
  counterElement.innerText = counter;
}

function decrementCounter() {
  counter--;
  counterElement.innerText = counter;
}

incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);
