import * as d3 from 'd3'

const width = 800
const height = 600

const svg = d3.select('#container')
  .append('svg')
  .attr('width', width)
  .attr('height', height)

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

const groups = svg.selectAll('g')
  .data(circles)
  .enter()
  .append('g')
  .attr('id', d => d.id)

groups.append('circle')
  .attr('cx', d => d.cx)
  .attr('cy', d => d.cy)
  .attr('r', d => d.r)
  .attr('fill', d => `rgb(${d.fill})`)
  .attr('stroke', d => `rgb(${d.stroke})`)

// groups.append - Beschriftung (text) -> Hausübung