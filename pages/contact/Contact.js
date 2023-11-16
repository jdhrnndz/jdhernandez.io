'use client'

import { BlobEnum } from "@components/BlobThingy";
import FlashyButton from "@components/FlashyButton";
import { MyMagicString } from "@components/enums";
import { useState } from "react";

const ButtonState = {
  Loading: 'loading',
  Idle: 'idle',
  Done: 'done',
}

export default function Contact() {
  const [buttonState, setButtonState] = useState(ButtonState.Idle);

  const handleSubmit = (event) => {
    if (buttonState !== ButtonState.Idle) return;

    setButtonState(ButtonState.Loading);
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setButtonState(ButtonState.Done);
      })
      .catch((error) => alert(error))
      .finally(() => {
        myForm.reset();
      });
  };

  const handleSuccessAnimationEnd = () => {
    setButtonState(ButtonState.Idle);
  }

  const getButtonChildren = (state) => {
    switch(state) {
      case ButtonState.Loading:
        return <svg className="fill-celadon-green group-hover:fill-white animate-spin h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" /></svg>
      case ButtonState.Done:
        return <svg onAnimationEnd={handleSuccessAnimationEnd} className="fill-celadon-green group-hover:fill-white animate-fullsend h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
      case ButtonState.Idle:
      default:
        return MyMagicString.Contact.cta;
    }
  }

  return (
    <div className="flex flex-col mx-auto h-full justify-center w-fit sm:w-8/12 px-12 py-8">
      <header className="bg-celadon-green w-fit h-fit px-4 py-2 sm:px-8 sm:py-4 rounded-full text-lg sm:text-2xl text-white font-bold tracking-wide">
        {MyMagicString.Contact.header}
      </header>
      <div className="w-fit h-fit grid grid-rows-[1fr_auto] grid-cols-6">
        <BlobEnum.LeftConnector width="w-9 sm:w-16" height="h-4" />
        <BlobEnum.ConnectorFill width="w-9 sm:w-16" height="h-4" />
        <BlobEnum.RightConnector width="w-9 sm:w-16" height="h-4" />
      </div>
      <div className="text-stone-700 font-[Urbanist] selection:bg-asda-green/50">
        <form name="contact" data-netlify="true" netlify="true" className="flex flex-wrap flex-row gap-4 max-h-full" onSubmit={handleSubmit}>
          <input
            type="hidden"
            required
            name="form-name"
            value="contact"
          />
          <input
            name="name"
            required
            type="text"
            placeholder={MyMagicString.Contact.placeholder.name}
            className="form-input px-4 py-2 sm:px-8 sm:py-4 focus:border-asda-green basis-full sm:basis-1/2-gap-4 border-transparent outline outline-2 outline-celadon-green shadow-inner bg-zinc-100 text-base sm:text-xl font-bold tracking-wide rounded-full"
          />
          <input
            name="email"
            required
            type="email"
            placeholder={MyMagicString.Contact.placeholder.email}
            className="form-input px-4 py-2 sm:px-8 sm:py-4 focus:border-asda-green basis-full sm:basis-1/2-gap-4 border-transparent outline outline-2 outline-celadon-green shadow-inner bg-zinc-100 text-base sm:text-xl font-bold tracking-wide rounded-full"
          />
          <textarea
            name="message"
            required
            placeholder={MyMagicString.Contact.placeholder.message}
            rows="5"
            className="form-textarea px-4 py-2 sm:px-8 sm:py-4 focus:border-asda-green resize-none basis-full border-transparent outline outline-2 outline-celadon-green shadow-inner bg-zinc-100 text-base sm:text-xl font-bold tracking-wide rounded-3xl"
          />
          <div className="mx-auto h-16">
            <FlashyButton type={buttonState === ButtonState.Idle ? 'submit' : ''}>
              {getButtonChildren(buttonState)}
            </FlashyButton>
            <div className="h-[150%]"/>
          </div>
        </form>
      </div>
    </div>
  );
}
