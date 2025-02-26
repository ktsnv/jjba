setTimeout(generate,1);
let rank = [F,E,D,C,B,A,S];
function generate() {
 let person = prompt("Please enter your name", "");
 let stand = prompt("Please enter your stand's name", "");
 let stats = [random(1,7),random(1,7),random(1,7),random(1,7),random(1,7),random(1,7)];
 if (stats[5] == 7)
 {
   stand += " Requiem";
 }
 const container = document.querySelector("#container");
 header("Stand User: " + person);
 header("Stand: " + stand);
 header("Ability: ");
 let power = aiText("Make a single power for a stand from JJBA named: " + stand);
 header("Colors: ");
 let color = aiText("Give me a color scheme for a stand from JJBA named: " + stand);
 header("Destructive Power: "+ rank[stats[0]]);
 header("Speed: "+ rank[stats[1]]);
 header("Range: "+ rank[stats[2]]);
 header("Persistence: "+ rank[stats[3]]);
 header("Precision: "+ rank[stats[4]]);
 header("Potential: "+ rank[stats[5]]);
 image("A stand from JJBA named " + stand + " in a 2d seinen manga style with heavy shading. Its color scheme being: " + color + " and its power being: " + power);
}
function lineBreak() {
  const container = document.querySelector("#container");
  const br = document.createElement("br");
  container.append(br);
}
function header(arr) {
  const container = document.querySelector("#container");
  const header = document.createElement("h1");
  header.textContent = arr;
  container.append(header);
}
function image(prompt) {
  const container = document.querySelector("#container");
  const image = document.createElement("img");
  image.src = "https://image.pollinations.ai/prompt/"+encodeURIComponent(prompt)+'?width=${540}&height=${540}&model=${"Flux-anime"}';
  container.append(image);
}
function aiText(prompt) {
  const container = document.querySelector("#container");
  const text = document.createElement("h3");
  text.textContent = "https://text.pollinations.ai/prompt/"+encodeURIComponent(prompt);
  container.append(text);
}
function random(min,max) {
  return Math.round(Math.random()*(max-min)+min)
}
