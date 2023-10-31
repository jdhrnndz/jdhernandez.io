'use client'

import { useEffect, useState } from "react";
import { MyEventKey, MyMagicString, MyWindowEvent } from "./enums";

const Omnibar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const keyboardListener = window.addEventListener(MyWindowEvent.Keydown, (event) => {
      if (event.key === MyEventKey.K && event.ctrlKey) {
        event.preventDefault();
        setVisible(true);
      }

      if (event.key === MyEventKey.Escape) {
        setVisible(false);
      }
    });

    return (() => {
      window.removeEventListener(MyWindowEvent.Keydown, keyboardListener);
    });
  }, []);

  return (
    visible &&
      <div className="absolute top-0 left-0 w-full h-full p-40 z-50 bg-white/30 backdrop-blur-sm flex-col justify-center">
        <div className="flex flex-col mx-auto w-1/5 justify-center bg-stone-50 outline outline-2 outline-celadon-green/30">
          <input name="search" autoFocus required type="text" placeholder={MyMagicString.Search.placeholder} className="form-input w-full h-fit border-transparent outline outline-2 outline-celadon-green/30 shadow-inner bg-celadon-green/10 focus:border-asda-green"/>
        </div>
      </div>
  );
}

export default Omnibar;
