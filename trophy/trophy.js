const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')
const args = process.argv.slice(2)
console.log("called with: " + args[0])

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

const text = args[0] || 'No Name';

const textWidth = context.measureText(text).width
context.fillRect(400 - textWidth / 2 - 10, 80 - 5, textWidth + 20, 120)
context.fillStyle = '#fff'
context.fillText(text, 400, 100)

context.fillStyle = '#000'
context.font = 'bold 30pt Sans'
context.fillText('Tester of the day', 450, 275)

const winDate = args[1] || 'No Date';
context.fillStyle = '#000'
context.font = 'bold 30pt Sans'
context.fillText(winDate, 450, 375)

context.fillStyle = '#000'
context.font = 'bold 30pt Sans'
context.fillText('tester-of-the-day.netlify.app', 400, 530)

loadImage('./trophy.svg').then(image => {
  context.drawImage(image, 50, 250, 200, 200)
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync('./test.png', buffer)
})