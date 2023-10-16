'use client'

import { useState } from "react";

const SKILLS_DATA = [
  {
    name: 'vuejs',
    title: 'VueJS',
    icon: <svg className="w-8 h-8 fill-[#4FC08D]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vue.js</title><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>,
    animation: 'motion-reduce:animate-none animate-floating-2',
    position: 'top-0 right-3'
  },
  {
    name: 'reactjs',
    title: 'ReactJS',
    icon: <svg className="w-8 h-8 fill-[#61DAFB]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>,
    animation: 'motion-reduce:animate-none animate-floating',
    position: 'top-14 right-9'
  },
  {
    name: 'typescript',
    title: 'TypeScript',
    icon: <svg className="w-8 h-8 fill-[#3178C6]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TypeScript</title><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>,
    animation: 'motion-reduce:animate-none animate-floating-3',
    position: 'bottom-0 left-0'
  },
  {
    name: 'git',
    title: 'Git',
    icon: <svg className="w-8 h-8 fill-[#F05032]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>,
    animation: 'motion-reduce:animate-none animate-floating-2',
    position: 'bottom-8 right-0',
  },
  {
    name: 'graphql',
    title: 'GraphQL',
    icon: <svg className="w-8 h-8 fill-[#E10098]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GraphQL</title><path d="M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z"/></svg>,
    animation: 'motion-reduce:animate-none animate-floating-8',
    position: 'top-0 left-10',
  }
]

export default function HomeBanner ({}) {
  const [clicked, setClicked] = useState([]);

  return (
    <div className="flex-auto grid grid-cols-2 grid-rows-1">
      <div className="text-celadon-green text-left font-[Lekton] flex flex-col justify-center">
        <span className="text-7xl w-fit bg-zinc-50 p-6">
          <i>Hello!</i> I am
        </span>
        <span className="text-7xl w-fit bg-zinc-50 p-6 font-bold">
          JD Hernandez
        </span>
        <span className="text-4xl w-fit bg-zinc-50 p-6 mt-8">
          With over 8 years of dedicated experience in crafting user-friendly software solutions, I have built expertise in JavaScript and other software development technologies.
        </span>
        <span className="w-fit bg-zinc-50 p-6 mt-8 flex flex-row gap-4 text-center flex-wrap">
          <span
            key="counter"
            className="w-10 h-10 relative cursor-pointer select-none inline-flex items-center justify-center rounded-full bg-celadon-green px-2 text-2xl text-white"
            data-tooltip="Find and click the corresponding icons!"
          >
            {clicked.length}
          </span>
          {
            SKILLS_DATA.map(({ title, name }) => (
              clicked.includes(name)
              ? (
                <span
                  key={name}
                  className="select-none inline-flex items-center rounded-md bg-celadon-green px-2 py-1 text-2xl font-medium text-white"
                >
                  {title}
                </span>
              )
              : (
                <span
                  key={name}
                  className="select-none inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-2xl font-medium text-celadon-green ring-2 ring-inset ring-celadon-green/10"
                >
                  {title}
                </span>
              )
            ))
          }
        </span>
      </div>
      <div className="flex flex-col justify-center">
        <div className="relative h-fit w-fit mx-auto p-104">
          <img
            className="select-none mx-auto min-w-96 max-w-96 min-h-96 max-h-96 rounded-full border-8 border-zinc-50"
            alt="JD Hernandez's avatar image"
            src="/jdhernandez.jpg"
          />
          {
            SKILLS_DATA.map(({ animation, name, position, icon }) => (
              <span
                key={`${name}-${animation}}`}
                className={`absolute ${position} select-none cursor-pointer rounded-full bg-zinc-50 ring-2 ring-celadon-green p-3 ${animation} hover:pause`}
                onClick={() => setClicked((prevClicked) => {
                  if (prevClicked.includes(name)) {
                    return prevClicked;
                  }

                  return [...prevClicked, name];
                })}>
                {icon}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  );
}
