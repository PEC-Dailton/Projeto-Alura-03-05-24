function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(145,18,300);
  textSize(40); 
  fill(color(80, 300, 400)); // 
  text("Formadores", 100, 190);
}

function changeFontSize() {
  var texto = document.getElementById("texto");
  texto.style.fontSize = "100px";
}