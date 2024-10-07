const container = document.getElementById('container')

const canvas = document.createElement('canvas')
canvas.width = 800
canvas.height = 600
canvas.style.border = '1px solid black'

container.appendChild(canvas)

const ctx = canvas.getContext('2d')

const drawCircle = (x, y, radius, color, opacity = 0.5) => {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  console.log(`rgba(${color}, ${opacity})`)
  ctx.fillStyle = `rgba(${color}, ${opacity})`
  ctx.fill()
  ctx.lineWidth = 2
  ctx.strokeStyle = `rgba(${color}, 1)`
  ctx.stroke()
}

const centerX = canvas.width / 2
const centerY = canvas.height / 2
const radius = 150

const red = [255, 0, 0]
const green = [0, 255, 0]
const blue = [0, 0, 255]

drawCircle(centerX - 100, centerY - 75, radius, red)
drawCircle(centerX + 100, centerY - 75, radius, green)
drawCircle(centerX, centerY + 100, radius, blue)

ctx.font = '20px Arial'
ctx.fillStyle = 'black'
ctx.fillText('Set A', centerX - 170, centerY - 70)
ctx.fillText('Set B', centerX + 120, centerY - 70)
ctx.fillText('Set C', centerX - 20, centerY + 150)
