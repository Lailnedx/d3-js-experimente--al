const container = document.getElementById('container')

const svgNS = 'http://www.w3.org/2000/svg' // Namespace für SVG

const svg = document.createElementNS(svgNS, 'svg')
const width = 800
const height = 600
svg.setAttribute('width', width)
svg.setAttribute('height', height)

const createCircle = (cx, cy, r, fillColor, strokeColor) => {
  const circle = document.createElementNS(svgNS, 'circle')
  circle.setAttribute('cx', cx)
  circle.setAttribute('cy', cy)
  circle.setAttribute('r', r)
  circle.setAttribute('fill', `rgb(${fillColor})`)
  circle.setAttribute('stroke', `rgb(${strokeColor})`)
  return circle
}

const createText = (x, y, textContent) => {
  const text = document.createElementNS(svgNS, 'text')
  text.setAttribute('x', x)
  text.setAttribute('y', y)
  text.textContent = textContent
  return text
}

const centerX = width / 2
const centerY = height / 2
const radius = 150

const red = [255, 0, 0]
const green = [0, 255, 0]
const blue = [0, 0, 255]

const circles = [
  {
    id: 'circleA',
    cx: centerX - 100,
    cy: centerY - 75,
    r: radius,
    fill: red,
    stroke: red,
    label: 'Set A'
  },
  {
    id: 'circleB',
    cx: centerX + 100,
    cy: centerY - 75,
    r: radius,
    fill: green,
    stroke: green,
    label: 'Set B'
  },
  {
    id: 'circleC',
    cx: centerX,
    cy: centerY + 100,
    r: radius,
    fill: blue,
    stroke: blue,
    label: 'Set C'
  }
]

circles.forEach(circle => {
  const group = document.createElementNS(svgNS, 'g')
  group.setAttribute('id', circle.id)
  group.appendChild(createCircle(circle.cx, circle.cy, circle.r, circle.fill, circle.stroke))
  group.appendChild(createText(circle.cx - 30, circle.cy + 10, circle.label))
  svg.appendChild(group)
})

container.appendChild(svg)
