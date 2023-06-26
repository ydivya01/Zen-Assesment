var a = "";
var x = "";

function clear() {
  a = "";
  let displayDiv = document.getElementById("display");
  displayDiv.innerText = 0;
}

function buttonPress(value) {
  if (value == "C") {
    clear();
  }

  if (value == "=") {
    calc();
  }
  if (value != "C") {
    a = a + value;

    let displayDiv = document.getElementById("display");
    displayDiv.innerText = a;
  }

  console.log(a);
  console.log(x);
}

function calc() {
  var result = eval(a);
  let displayDiv = document.getElementById("display");
  displayDiv.innerText = result;
}
