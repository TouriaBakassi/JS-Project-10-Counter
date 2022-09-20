// Counter

let button1, button2, button3, result;
button1 = document.querySelector("#button1");
button2 = document.querySelector("#button2");
button3 = document.querySelector("#button3");

result = document.querySelector("#COUNT");

let count = Number(result.textContent);

function increment() {
  result.textContent = ++count;
  changecolor();
}

function decrement() {
  result.textContent = --count;
  changecolor();
}
const Reset = () => {
  count = 0;
  result.textContent = 0;
  changecolor();
};

function changecolor() {
  if (count == 0) {
    result.style.color = "blue";
  } else if (count > 0) {
    result.style.color = "green";
  } else {
    result.style.color = "red";
  }
}

button1.addEventListener("click", increment);
button2.addEventListener("click", decrement);
button3.addEventListener("click", Reset);
