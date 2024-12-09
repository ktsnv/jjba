anychart.onDocumentReady(setTimeout(generate,1));
let rank = ["F","E","D","C","B","A","Infinite"];
let stats = ['dp','sp','ra','pe','pr','po'];
let standPowers = fetchData('Data/powers.txt');
let styles = fetchData('Data/styles.txt');
let species = fetchData('Data/species.txt');
let jobs = fetchData('Data/jobs.txt');
let locations = fetchData('Data/places.txt');
let requiemPowers = fetchData('Data/requiem.txt');
let color = fetchData('Data/colors.txt');
let standType1 = ["Natural","Artificial"];
let standType2 = ["Humanoid","Non-Humanoid"];

function generate() {
  let name = prompt("Please enter your name", "");
  let stand = prompt("Please enter your stand's name", "");
  if (stats[5] == 6) {
    stand += " Requiem";
  }
  const container = document.querySelector("#container");
  header("Stand User: " + name, container);
  body("Species: " + species[random(0,species.length-1)]);
  body("Occupation: " + jobs[random(0,jobs.length-1)]);
  body("Birthplace: " + locations[random(0,locations.length-1)]);
  body("Fighting Style: " + styles[random(0,styles.length-1)]);
  header("Stand: " + stand);
  subHeader("Abilities: ");
  let i = 0;
  while (i<random(1,3)) {
    i++
    body(generateRandom(standPowers),container);
    if (stats[5] == 6) {
      body(generateRandom(requiemPowers),container);
    }
  }
  subHeader("Colors: ", container);
  body(generateRandom(standColor) + " and " + generateRandom(standColor), container);
  subHeader("Type: ", container);
  body(generateRandom(standType1) + " and " + generateRandom(standType2), container);
  subHeader("Destructive Power: "+ rank[stats[0]]);
  subHeader("Speed: "+ rank[stats[1]]);
  subHeader("Range: "+ rank[stats[2]]);
  subHeader("Persistence: "+ rank[stats[3]]);
  subHeader("Precision: "+ rank[stats[4]]);
  subHeader("Potential: "+ rank[stats[5]]);
  createChart();
}

function lineBreak() {
  const container = document.querySelector("#container");
  const br = document.createElement("br");
  container.append(br);
}
function header(text, container) {
  const header = document.createElement("h1");
  header.textContent = text;
  container.append(header);
}
function subHeader(text, container) {
  const header = document.createElement("h2");
  header.textContent = text;
  container.append(header);
}
function body(text, container) {
  container.append(text);
  lineBreak();
}
function generateRandom(arr) {
  let temp = random(0,arr.length-1);
  arr.splice(temp, 1);
  return arr[temp];
}
function random(min,max) {
  return Math.round(Math.random()*(max-min)+min)
}
function createChart()
{
    anychart.theme({defaultFontSettings: {fontColor: 'White', fontSize: '50'}});
    var data = [
      {x: 'Destructive Power', value: stats[0]},
      {x: 'Speed', value: stats[1]},
      {x: 'Range', value: stats[2]},
      {x: 'Persistence', value: stats[3]},
      {x: 'Precision', value: stats[4]},
      {x: 'Potential', value: stats[5]}
    ];
    var chart = anychart.radar();
    chart.yScale()
      .minimum(0)
      .maximum(6)
      .ticks({'interval':1});
    chart.area(data).name('Stand').fill('#FF69B4', 0.75).stroke('#E55934', 0);
    chart.legend(false);
    chart.background().fill("red", 0);
    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
   removeCredits();
}
function removeCredits() {
 const credits = document.getElementsByClassName("anychart-credits")[0];
 credits.remove();
}

function fetchData(url) {
  let temp;
  fetch(url)
  .then(res => res.text())
  .then(data => {
    temp = data.split("\n");
   })
  .then(() => {
    console.log(temp);
   });
  return temp;
}
