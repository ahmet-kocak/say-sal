"use strict";
let ekran = document.getElementById("ekran");
let result = document.getElementById("result");
let result1 = document.getElementById("result1");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

button1.addEventListener("click", show);
function show() {
  if (button2.style.display == "none") {
    for (let i = 1; i < 50; i++) {
      let div = document.createElement("div");
      div.style.width = "80px";
      div.style.height = "80px";
      div.style.borderRadius = "50px";
      div.style.border = "1px solid black";
      div.style.background = "blue";
      div.style.float = "left";
      div.style.margin = "10px 5px 5px 5px";
      div.textContent = i;
      div.style.textAlign = "center";
      div.style.lineHeight = "80px";
      div.style.color = "white";
      div.style.fontSize = "25px";
      ekran.appendChild(div);
    }
  }
  button2.style.display = "inline-block";
  button3.style.display = "inline-block";
}

let arr = [];
button2.onclick = function () {
  if (arr == "") {
    for (let k = 0; k < 6; k++) {
      let random = Math.floor(Math.random() * 49);

      for (let i = 0; i < 49; i++) {
        if (i == random) {
          ekran.childNodes[i].style.background = "red";
          arr.push(i + 1);
        }
      }
      console.log(random + 1);
      if (arr.filter((e, i, a) => a.indexOf(e) !== i).length > 0) {
        arr.pop();
        k--;
      }
    }
  }
 
};

button3.onclick = function () { if(arr!=""){
  result.style.display = "block";
  result.innerHTML = arr;
  result1.style.display = "block"}
};
result1.onclick = function () {
  window.location.reload();
};
