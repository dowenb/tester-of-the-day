const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')
   
// Read testers-of-the-day.json file 
fs.readFile("../winners/testers-of-the-day.json", function(err, data) { 
      
    // Check for errors 
    if (err) throw err; 
   
    // Converting to JSON 
    const winners = JSON.parse(data); 
      
    //console.log(winners[0]); // Print winners  
    for(let i = 0; i < winners.length; i++){
      makeTrophy(winners[i]['name'], winners[i]['date'])
    }
}); 

//makeTrophy("Ben Dowen", "22-08-2020");

function makeTrophy(winName, winDate){
  console.log("Generating award for: " + winName)
  console.log("The day: " + winDate)

  const width = 800
  const height = 600

  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  context.fillStyle = '#FFF'
  context.fillRect(0, 0, width, height)

  context.font = 'bold 50pt Sans'
  context.textAlign = 'center'
  context.textBaseline = 'top'
  context.fillStyle = '#3574d4'

  const textWidth = context.measureText(winName).width
  context.fillRect(400 - textWidth / 2 - 10, 80 - 5, textWidth + 20, 120)
  context.fillStyle = '#fff'
  context.fillText(winName, 400, 100)

  context.fillStyle = '#000'
  context.font = 'bold 30pt Sans'
  context.fillText('Tester of the day', 450, 275)

  context.fillStyle = '#000'
  context.font = 'bold 30pt Sans'
  context.fillText(winDate, 450, 375)

  context.fillStyle = '#000'
  context.font = 'bold 30pt Sans'
  context.fillText('tester-of-the-day.netlify.app', 400, 530)

  loadImage('./trophy.svg').then(image => {
    context.drawImage(image, 50, 250, 200, 200)
    const buffer = canvas.toBuffer('image/png')
    const fileName = '' + winName + winDate + '.png'
    fileName.replace(/\s/g, "")
    fs.writeFileSync(fileName, buffer)
    console.log('output file: ' + fileName)
  })
}