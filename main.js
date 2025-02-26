setTimeout(generate,1);
let power;
let color;
function generate() {
 let rank = ['F','E','D','C','B','A','S'];
 let person = prompt("Please enter your name", "");
 let stand = prompt("Please enter your stand's name", "");
 let stats = [random(0,6),random(0,6),random(0,6),random(0,6),random(0,6),random(0,6)];
 if (stats[5] == 6)
 {
   stand += " Requiem";
 }
 const container = document.querySelector("#container");
 header("Stand User: " + person);
 header("Stand: " + stand);
 header("Ability: ");
 power = aiText("Make a power for a stand from JJBA named " + stand + ", while fitting everything in a single sentence, don't say anything other than the power: ");
 header("Colors: ");
 color = aiText("Give me a color scheme for a stand from JJBA named " + stand + ", while fitting everything in a single sentence, don't say anything other than the colors: ");
 header("Destructive Power: "+ rank[stats[0]]);
 header("Speed: "+ rank[stats[1]]);
 header("Range: "+ rank[stats[2]]);
 header("Persistence: "+ rank[stats[3]]);
 header("Precision: "+ rank[stats[4]]);
 header("Potential: "+ rank[stats[5]]);
 
 wait();
}
function wait() {
  if (power == 'undefined' || color == 'undefined') {
   setTimeout(wait, 100);
  }
  else {
    image("A different and unique stand from JJBA named " + stand + " in a Jojo's Bizarre Adventure style. Its color scheme being: " + color + " and its power being: " + power);
  }
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
  image.src = "https://image.pollinations.ai/prompt/"+encodeURIComponent(prompt)+'?width=${540}&height=${540}&model=${"Flux-realism"}';
  container.append(image);
}
function aiText(prompt) {
  const container = document.querySelector("#container");
  const text = document.createElement("embed");
  text.src = "https://text.pollinations.ai/prompt/"+encodeURIComponent(prompt);
  container.append(text);
}
function random(min,max) {
  return Math.round(Math.random()*(max-min)+min)
}
