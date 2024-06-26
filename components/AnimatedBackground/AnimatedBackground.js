'use client'

import { useEffect, useRef, useState } from "react";
import { computeWindowDimensions, setupDrawLoop } from "./utils";
import { MyWindowEvent } from "@components/enums";

const useBackgroundAnimation = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const canvasRef = useRef(null);
  const debouncedSetter = useRef(null);

  useEffect(() => {
    // TODO: check if this is really needed, forces a double initial render without debounce
    setWindowDimensions({...computeWindowDimensions()});

    console.info('add resize event listener');
    const resizeHandler = window.addEventListener(MyWindowEvent.Resize, (_event) => {
      clearTimeout(debouncedSetter.current);
      debouncedSetter.current = setTimeout(() => setWindowDimensions({...computeWindowDimensions()}), 200);
    });

    return () => {
      console.info('remove resize event listener');
      window.removeEventListener(MyWindowEvent.Resize, resizeHandler);
    };
  }, []);

  useEffect(() => {
    const drawLoop = setupDrawLoop(canvasRef, windowDimensions);

    return () => {
      drawLoop.stop();
    };
  }, [windowDimensions.width, windowDimensions.height]);

  return canvasRef;
}

const AnimatedBackground = () => (<canvas ref={useBackgroundAnimation()} className="absolute top-0 left-0 -z-50 h-full w-full" />);

export default AnimatedBackground;
