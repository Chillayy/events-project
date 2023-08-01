let purpleButton = document.getElementById("purple");
let tealButton = document.getElementById("teal");
let pinkButton = document.getElementById("pink");
let aquaButton = document.getElementById("aqua");
let colorlessButton = document.getElementById("colorless");
let colorDisplay = document.getElementById("color-display");

purpleButton.onclick = function () {
  colorDisplay.style.backgroundColor = "purple";
  colorDisplay.innerHTML = "purple";
};
tealButton.onclick = function () {
  colorDisplay.style.backgroundColor = "teal";
  colorDisplay.innerHTML = "teal";
};
pinkButton.onclick = function () {
  colorDisplay.style.backgroundColor = "pink";
  colorDisplay.innerHTML = "pink";
};
aquaButton.onclick = function () {
  colorDisplay.style.backgroundColor = "aqua";
  colorDisplay.innerHTML = "aqua";
};
colorlessButtonButton.onclick = function () {
  colorDisplay.style.backgroundColor = "white";
  colorDisplay.innerHTML = "white";
};
