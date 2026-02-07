'use client'

import { useState } from "react";
import Badge from "@components/Badge";
import { MyMagicString } from "@components/enums";
import BlobThingy, { BlobEnum } from "@components/BlobThingy";
import skillsData from "./skills-data";

const SkillsButton = ({ name, setClicked, icon }) => (
  <button
    key={`${name}`}
    className={`w-7 h-7 sm:w-14 sm:h-14 -m-4 sm:-m-7 select-none cursor-pointer rounded-full bg-zinc-50 ring-celadon-green/0 z-10 p-1.5 sm:p-3`}
    onClick={() => setClicked((prevClicked) => {
      if (prevClicked.includes(name)) {
        return prevClicked;
      }

      return [...prevClicked, name];
    })}>
    {icon}
  </button>
)

export default function HomeBanner ({}) {
  const [clicked, setClicked] = useState([]);

  const skillsBlob1 = [
    [
      BlobEnum.Empty,
      ({ width, height }) => <BlobEnum.EndLeft width={width} height={height}><SkillsButton name='reactjs' icon={skillsData.reactjs.icon} setClicked={setClicked}/></BlobEnum.EndLeft>,
      BlobEnum.Fill,
      BlobEnum.EndRight,
      BlobEnum.Empty,
      ({ width, height }) => <BlobEnum.Island width={width} height={height}><SkillsButton name='nextjs' icon={skillsData.nextjs.icon} setClicked={setClicked}/></BlobEnum.Island>,
    ],
    [
      BlobEnum.Empty,
      BlobEnum.LeftConnector,
      BlobEnum.ConnectorFill,
      BlobEnum.RightConnector,
      BlobEnum.Empty,
      BlobEnum.Empty,
    ],
    [
      ({ width, height }) => <BlobEnum.EndLeft width={width} height={height}><SkillsButton name='git' icon={skillsData.git.icon} setClicked={setClicked}/></BlobEnum.EndLeft>,
      BlobEnum.Fill,
      BlobEnum.Fill,
      ({ width, height }) => <BlobEnum.Fill width={width} height={height}><SkillsButton name='tailwindcss' icon={skillsData.tailwindcss.icon} setClicked={setClicked}/></BlobEnum.Fill>,
      BlobEnum.EndRight,
      BlobEnum.Empty,
    ],
  ];
  const skillsBlob2 = [
    [
      BlobEnum.Empty,
      BlobEnum.Empty,
      BlobEnum.EndLeft,
      BlobEnum.Fill,
      ({ width, height }) => <BlobEnum.Fill width={width} height={height}><SkillsButton name='typescript' icon={skillsData.typescript.icon} setClicked={setClicked}/></BlobEnum.Fill>,
      BlobEnum.EndRight,
    ],
    [
      BlobEnum.Empty,
      BlobEnum.Empty,
      BlobEnum.Empty,
      BlobEnum.LeftConnector,
      BlobEnum.ConnectorFill,
      BlobEnum.RightConnector,
    ],
    [
      BlobEnum.EndLeft,
      ({ width, height }) => <BlobEnum.Fill width={width} height={height}><SkillsButton name='vuejs' icon={skillsData.vuejs.icon} setClicked={setClicked}/></BlobEnum.Fill>,
      BlobEnum.Fill,
      BlobEnum.Fill,
      BlobEnum.Fill,
      ({ width, height }) => <BlobEnum.EndRight width={width} height={height}><SkillsButton name='graphql' icon={skillsData.graphql.icon} setClicked={setClicked}/></BlobEnum.EndRight>,
    ],
    [
      BlobEnum.Empty,
      BlobEnum.LeftConnector,
      BlobEnum.ConnectorFill,
      BlobEnum.RightConnector,
      BlobEnum.Empty,
      BlobEnum.Empty,
    ],
    [
      BlobEnum.Empty,
      BlobEnum.EndLeft,
      ({ width, height }) => <BlobEnum.Fill width={width} height={height}><SkillsButton name='jest' icon={skillsData.jest.icon} setClicked={setClicked}/></BlobEnum.Fill>,
      ({ width, height }) => <BlobEnum.Fill width={width} height={height}><SkillsButton name='nestjs' icon={skillsData.nestjs.icon} setClicked={setClicked}/></BlobEnum.Fill>,
      BlobEnum.EndRight,
      BlobEnum.Empty,
    ],
  ];

  return (
    <div className="flex-auto flex flex-col-reverse sm:flex-row selection:bg-asda-green/50">
      <hgroup className="basis-3/5 text-justify sm:text-right font-[Urbanist] flex flex-col sm:justify-center items-center sm:items-end">
        <span className="text-stone-600 text-3xl sm:text-6xl w-fit bg-zinc-50 p-4 pl-6 sm:p-6 sm:pl-10 font-bold leading-[2.5rem] justify-end">
          Hello, World! I'm
        </span>
        <span className="flex flex-row items-top justify-center bg-celadon-green p-4 pl-6 sm:p-6 sm:pl-10 w-fit flex-nowrap rounded-full rounded-br-none mb-4 sm:mb-8">
          <span className="text-white text-4xl sm:text-7xl w-fit font-[Lekton] font-bold whitespace-nowrap">
            {MyMagicString.MyName}
          </span>
        </span>
        <span className="text-base sm:text-3xl text-stone-500 w-fit bg-zinc-50 p-4 sm:p-6leading-relaxed font-bold">
          {MyMagicString.MyDescription}
        </span>
        <div className="w-fit bg-zinc-50 p-4 sm:p-6 mt-2 sm:mt-8 flex flex-row gap-2 sm:gap-4 flex-wrap justify-center sm:justify-end">
          <span
            key="counter"
            className="group relative w-7 h-7 sm:w-10 sm:h-10 cursor-pointer select-none inline-flex items-center justify-center rounded-full bg-celadon-green px-2 text-sm sm:text-2xl text-white font-[Lekton]"
          >
            {clicked.length}
            <small
              className="pointer-events-none absolute py-1 px-2 rounded text-sm text-stone-700 -top-9 left-0 w-max bg-zinc-50 outline outline-1 outline-stone-500 opacity-0 transition-opacity group-hover:opacity-100"
            >
              {MyMagicString.Minigame.hint}
            </small>
          </span>
          {
            Object.entries(skillsData).map(([key, { title }]) => (
              <Badge key={key} active={clicked.includes(key)} fontClass="text-sm sm:text-2xl">
                {title}
              </Badge>
            ))
          }
        </div>
      </hgroup>
      <div className="basis-2/5 relative">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <BlobThingy data={skillsBlob1} className="z-10 -mb-12 pr-20" />
          <img
            src="/jdhernandez.jpg"
            className="z-0 select-none w-48 sm:w-80 square rounded-full outline-8 outline-zinc-50 outline"
            alt={MyMagicString.MyPicture}
          />
          <BlobThingy data={skillsBlob2} className="z-10 -mt-12 pl-20" />
        </div>
      </div>
    </div>
  );
}
