'use client'

const PROJECTS = [
  {
    title: 'Insurance Administrator and Direct-to-Customer Web App',
    description: 'A SaaS application consisting of a web app for insurance providers to manage insurance policies, a web app for customers to apply for insurance products and organize their policies, and a collection of services for handling business logic, managing assets and documents, and integrating with third-party services.',
    skills: [
      'TypeScript',
      'VueJS',
      'NestJS',
      'GraphQL',
    ],
    company: 'HavenTech Asia',
  },
  {
    title: 'AIA Rewards Marketplace CMS',
    description: 'A headless CMS for the items redeemable within the AIA rewards system. The CMS is made using dotCMS whose UI is used by the marketing managers. A lightweight REST API using Express.js is created to serve the CMS content as JSON.',
    skills: [
      'JavaScript',
      'GraphQL',
      'dotCMS',
      'Docker',
    ],
    company: 'VISEO Hong Kong Ltd.',
  },
  {
    title: 'Project EMMA (AXA HK)',
    description: 'A module in a mobile app that serves as a storage for information and documents pertinent to the user\'s family members and assets.',
    skills: [
      'JavaScript',
      'React Native',
      'Jest',
      'Enzyme',
    ],
    company: 'VISEO Philippines Inc.',
  },
  {
    title: 'Project HaBit',
    description: 'A mobile app where employees can give a colleague a token of appreciation for a job well done.',
    skills: [
      'Android',
    ],
    company: 'Stratpoint Technologies Inc., Philippines',
  },
  {
    title: '',
    description: '',
    skills: '',
    company: '',
  },
  {
    title: '',
    description: '',
    skills: '',
    company: '',
  },
  {
    title: '',
    description: '',
    skills: '',
    company: '',
  },
];

const Project = ({title, description, skills, company}) => {
  return (
    title &&
    <div className="basis-1/3-gap-4 md:basis-1/2-gap-4 sm:basis-full h-fit rounded text-black font-mono cursor-pointer outline outline-2 outline-celadon-green">
      <div className="flex flex-row">
        <div className="bg-celadon-green rounded-br-xl grow-1">
          <div className="p-2">
            <span className="text-2xl text-white">{title}</span>
          </div>
        </div>
        <div className="grow bg-celadon-green">
          <div className="rounded-tl-xl bg-white w-full h-full"></div>
        </div>
      </div>
      <div className="bg-celadon-green">
        <div className="rounded-tl-xl p-8 bg-white">
          <div className="">
            {description}
          </div>
          <div className="my-4 flex flex-wrap gap-2">
            {
              skills.length > 0 &&
              skills.map((skillName) => (
                <span
                  key={skillName}
                  className="select-none inline-flex items-center rounded-md bg-celadon-green px-2 py-1 font-medium text-white"
                >
                  {skillName}
                </span>
              ))
            }
          </div>
          <div className="italic">
            {company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectList() {
  return (
    <div className="flex flex-row flex-wrap place-items-start gap-4">
      {
        PROJECTS.map((item, index) => (
          <Project key={index} {...item} />
        ))
      }
    </div>
  );
}
