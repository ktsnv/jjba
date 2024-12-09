anychart.onDocumentReady(setTimeout(setup,1));
let rank = ["F","E","D","C","B","A","Infinite"];
let stats = ['dp','sp','ra','pe','pr','po'];
let standPowers;
let styles;
let species;
let jobs;
let locations;
let requiemPowers;
let standColor = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Purple", "White", "Black", "Brown", "Gray"];
let standType1 = ["Natural","Artificial"];
let standType2 = ["Humanoid","Non-Humanoid"];
//https://stackoverflow.com/questions/45018338/javascript-fetch-api-how-to-save-output-to-variable-as-an-object-not-the-prom
function setup() {
  fetch('standPowers.txt')
  .then(res => res.text())
  .then(data => {
    standPowers = data.split("\n");
   })
  .then(() => {
    console.log(standPowers);
    generate();
   });
}
function generate() {
 let person = prompt("Please enter your name", "");
 let stand = prompt("Please enter your stand's name", "");
 if (standPotential == 6)
 {
   stand += " Requiem";
 }
 const container = document.querySelector("#container");
 header("Stand User: " + person);
 container.append("Species: " + species[random(0,species.length-1)]);
 lineBreak();
 container.append("Occupation: " + jobs[random(0,jobs.length-1)]);
 lineBreak();
 container.append("Birthplace: " + locations[random(0,locations.length-1)]);
 lineBreak();
 container.append("Fighting Style: " + styles[random(0,styles.length-1)]);
 lineBreak();
 header("Stand: " + stand);
 header("Abilities: ");
 let i = 0;
 let r = random(1,3);
 while (i<r)
 {
  i++;
  let temp = generateRandom(standPowers);
  container.append("",temp);
  lineBreak();
  const index = standPowers.indexOf(temp);
  if (index > -1) {
   standPowers.splice(index, 1);
  }
  if (standPotential == 6)
  {
    let temp = generateRandom(standRequiemPowers);
    container.append("",temp);
    lineBreak();
    const index = standRequiemPowers.indexOf(temp);
    if (index > -1) {
    standRequiemPowers.splice(index, 1);
    }
  }
 }
 header("Colors: ");
 container.append(generateRandom(standColor) + " and " + generateRandom(standColor));
 header("Type: ");
 container.append(generateRandom(standType1) + " " + generateRandom(standType2));
 header("Destructive Power: "+ rank[standDP]);
 header("Speed: "+ rank[standSpeed]);
 header("Range: "+ rank[standRange]);
 header("Persistence: "+ rank[standPersistence]);
 header("Precision: "+ rank[standPrecision]);
 header("Potential: "+ rank[standPotential]);
 createChart();
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
function generateRandom(arr) {
  return arr[random(0,arr.length-1)]
}
function random(min,max) {
  return Math.round(Math.random()*(max-min)+min)
}
function createChart()
{
    anychart.theme({defaultFontSettings: {fontColor: 'White', fontSize: '50'}});
    var data = [
      {x: 'Destructive Power', value: standDP},
      {x: 'Speed', value: standSpeed},
      {x: 'Range', value: standRange},
      {x: 'Persistence', value: standPersistence},
      {x: 'Precision', value: standPrecision},
      {x: 'Potential', value: standPotential}
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
