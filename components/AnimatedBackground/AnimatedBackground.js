'use client'

import { useEffect, useRef, useState } from "react";
import { range, timer } from 'd3';
import { computeWindowDimensions, drawLinks, drawNodes, generateNode, getColorScale, getMaxLinkThreshold, getMinLinkThreshold, getNodeCount, getOpacityScale, getScreenArea } from "./utils";

const useBackgroundAnimation = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  let nodeData;
  const canvasRef = useRef(null);

  useEffect(() => {
    const windowDimensions = computeWindowDimensions();
    const colorScale = getColorScale(windowDimensions.width);
    const screenArea = getScreenArea(windowDimensions);
    const nodeCount = getNodeCount(screenArea);
    nodeData = range(nodeCount).map(() => generateNode(windowDimensions, colorScale));
    const canvas = canvasRef.current;
    // Set canvas properties
    canvas.width = windowDimensions.width;
    canvas.height = windowDimensions.height;

    console.info('add resize event listener');
    const resizeHandler = window.addEventListener('resize', (event) => {
      setWindowDimensions({...computeWindowDimensions()});
    });

    return () => {
      console.info('remove resize event listener');
      window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  useEffect(() => {
    const windowDimensions = computeWindowDimensions();
    const colorScale = getColorScale(windowDimensions.width);
    const screenArea = getScreenArea(windowDimensions);
    const minLinks = getMinLinkThreshold(screenArea);
    const maxLinks = getMaxLinkThreshold(screenArea);
    const opacityScale = getOpacityScale(screenArea);
    const nodeCount = getNodeCount(screenArea);
    nodeData = range(nodeCount).map(() => generateNode(windowDimensions, colorScale));
    const canvas = canvasRef.current;
    // Set canvas properties
    canvas.width = windowDimensions.width;
    canvas.height = windowDimensions.height;
    let context = canvas.getContext("2d");

    const drawLoop = timer((_elapsed) => {
      // Faster than resetting canvas' width and height
      context.clearRect(0, 0, windowDimensions.width, windowDimensions.height);

      for (let i = 0; i < nodeData.length; i++) {
        // Apply movement to all nodes using x/yVelocity
        nodeData[i].cy += nodeData[i].yVelocity;
        if (nodeData[i].cy < 0 || windowDimensions.height < nodeData[i].cy) {
          nodeData[i].yVelocity *= -1;
        }

        nodeData[i].cx += nodeData[i].xVelocity
        if (nodeData[i].cx < 0 || windowDimensions.width < nodeData[i].cx) {
          nodeData[i].xVelocity *= -1;
        }

        nodeData[i].color = colorScale(nodeData[i].cx);
        drawNodes(context, nodeData[i]);
        for (let j = i + 1; j < nodeData.length; j++) {
          drawLinks(context, nodeData[i], nodeData[j], minLinks, maxLinks, opacityScale);
        }
      }
    });

    return () => {
      drawLoop.stop();
    };
  }, [windowDimensions.width, windowDimensions.height]);

  return ({
    canvasRef,
  });
}

const AnimatedBackground = () => {
  const { canvasRef } = useBackgroundAnimation();

  return <canvas ref={canvasRef} id="animated-bg-canvas" className="absolute top-0 left-0 -z-50 h-full w-full" />;
}

export default AnimatedBackground;
