import { randomUniform, rgb, scaleLinear, scaleSequential, select } from "d3";
import { FULL_CIRCLE, GRADIENT, MOVE_SPEED } from './constants';

export const computeWindowDimensions = () => {
  const w = window,
    d = document,
    e = d.documentElement,
    body = select("body");
    const width = window.innerWidth || e.clientWidth || body.clientWidth;
    const height = window.innerHeight || e.clientHeight || body.clientHeight;

  return { width, height };
};
export const getColorScale = (maxValue) => (scaleSequential((t) => rgb(GRADIENT(t))).domain([0, maxValue]));
export const getScreenArea = ({width, height}) => (width * height);
export const getMinLinkThreshold = (screenArea) => (screenArea * 0.001);
export const getMaxLinkThreshold = (screenArea) => (screenArea * 0.01);
export const getOpacityScale = (screenArea) => scaleLinear().domain([getMinLinkThreshold(screenArea), getMaxLinkThreshold(screenArea)]).range([1, 0.2]);
export const getNodeCount = (screenArea) => (Math.max(50, Math.min(150, Math.round(screenArea / 10000))));
export const generateNode = (windowDimensions, colorScale) => {
  let size = randomUniform(3, 5)();
  let cx = randomUniform(1 + size, windowDimensions.width - size)();
  let cy = randomUniform(1 + size, windowDimensions.height - size)();

  let xVelocity;
  let yVelocity;
  // Randomize slope grade, i.e. [0, 100]
  yVelocity = Math.round(randomUniform(1, 100)()) * 0.01;
  // Compute velocity using circle formula; quadrant randomized by multiplying -1 to 1 or 2
  xVelocity = Math.pow(-1, Math.round(randomUniform(1, 2)())) * Math.sqrt(1 - yVelocity ** 2);
  yVelocity = Math.pow(-1, Math.round(randomUniform(1, 2)())) * Math.sqrt(1 - xVelocity ** 2);
  // Apply mass ¯\_(ツ)_/¯
  xVelocity = xVelocity * size * MOVE_SPEED;
  yVelocity = yVelocity * size * MOVE_SPEED;

  return {
    cx, cy, size,
    color: colorScale(cx),
    xVelocity, yVelocity,
  };
};
export const drawNodes = (context, node) => {
  context.fillStyle = node.color;
  context.beginPath();
  context.arc(node.cx, node.cy, node.size, 0, FULL_CIRCLE);
  context.fill();
};

export const drawLinks = (context, source, destination, minLinks, maxLinks, opacityScale) => {
  context.lineWidth = 0.5;
  let dist = (destination.cy - source.cy) ** 2 + (destination.cx - source.cx) ** 2;
  if (minLinks < dist && dist < maxLinks) {
    let color = source.color;
    color.opacity = opacityScale(dist);
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(source.cx, source.cy);
    context.lineTo(destination.cx, destination.cy);
    context.stroke();
  }
};
