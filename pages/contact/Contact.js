'use client'

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => { myForm.reset(); })
      .catch((error) => alert(error));
  };

  return (
    <div className="flex flex-col mx-auto h-full justify-center w-8/12 gap-4">
      <div className="bg-zinc-50 text-stone-700 font-[Urbanist] outline outline-2 outline-celadon-green/30 selection:bg-asda-green/50">
        <hgroup className="relative bg-celadon-green w-fit h-fit px-8 py-4 after:bg-celadon-green after:skew after:h-full after:absolute after:w-12 after:-top-0 after:-right-2 after:shadow-stripes z-0 after:-z-[1]">
          <header className="text-2xl text-white font-bold">
            Send me a message!
          </header>
        </hgroup>
        <form name="contact" data-netlify="true" netlify="true" className="flex flex-wrap flex-row gap-4 p-8" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" type="text" placeholder="John Doe" className="form-input basis-1/2-gap-4 border-transparent outline outline-2 outline-celadon-green/30 shadow-inner bg-celadon-green/10"/>
          <input name="email" type="email" placeholder="johndoe@mail.com" className="form-input basis-1/2-gap-4 border-transparent outline outline-2 outline-celadon-green/30 shadow-inner bg-celadon-green/10"/>
          <textarea name="message" placeholder="What's on your mind?" className="form-textarea basis-full col-span-2 border-transparent outline outline-2 outline-celadon-green/30 shadow-inner bg-celadon-green/10"/>
          <button type="submit" className="w-fit h-fit mx-auto form-input border-transparent col-span-2 align-middle group relative z-20 bg-white uppercase inline-block no-underline text-center tracking-widest py-2 px-5 outline outline-2 outline-asda-green overflow-hidden">
            <span className="absolute w-0 h-full bg-asda-green skew top-0 -left-6 -z-[1] transition-width duration-200 ease-in hover-fill group-hover:w-[150%]" />
            <span className="absolute w-0 h-full bg-celadon-green skew top-0 -left-6 -z-[2] transition-width duration-300 ease-in group-hover:duration-100 group-hover:ease-in-out group-hover:w-[150%]" />
            <span className="absolute w-0 h-full top-0 left-0 -z-[3]" />
            <span className="uppercase no-underline text-center tracking-widest font-[Lekton] font-bold text-xl text-asda-green group-hover:text-white">Send</span>
          </button>
        </form>
      </div>
    </div>
  )
}
