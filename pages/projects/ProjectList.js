'use client'

import Badge from "@components/Badge";

const PROJECTS = [
  {
    name: 'haven-life',
    title: 'Haven Life',
    description: 'A SaaS application consisting of a web app for insurance providers to manage insurance policies, a web app for customers to apply for insurance products and organize their policies, and a collection of services for handling business logic, managing assets and documents, and integrating with third-party services.',
    skills: [
      'TypeScript',
      'VueJS',
      'NestJS',
      'GraphQL',
    ],
    company: 'Full-stack Developer @ HavenTech Asia',
  },
  {
    name: 'aia-rewards-marketplace-cms',
    title: 'AIA Rewards Marketplace CMS',
    description: 'A headless CMS for the items redeemable within the AIA rewards system. The CMS is made using dotCMS whose UI is used by the marketing managers. A lightweight REST API using Express.js is created to serve the CMS content as JSON.',
    skills: [
      'JavaScript',
      'GraphQL',
      'dotCMS',
      'Docker',
    ],
    company: 'Back-end Developer @ VISEO Hong Kong Ltd.',
  },
  {
    name: 'project-emma-axa-hk',
    title: 'Project EMMA @ AXA HK',
    description: 'A module in a mobile app that serves as a storage for information and documents pertinent to the user\'s family members and assets.',
    skills: [
      'JavaScript',
      'React Native',
      'Jest',
      'Enzyme',
    ],
    company: 'Front-end Developer @ VISEO Philippines Inc.',
  },
  {
    name: 'hct-life-axa-hk',
    title: 'HCT Life @ AXA HK',
    description: 'A web app that helps to explore the network of doctors and hospitals working with the insurance provider.',
    skills: [
      'JavaScript',
      'ReactJS',
      'GraphQL',
      'Enzyme',
    ],
    company: 'Front-end Developer @ VISEO Philippines Inc.',
  },
  {
    name: 'project-habit',
    title: 'Project HaBit',
    description: 'A mobile app where employees can give a colleague a token of appreciation for a job well done.',
    skills: [
      'Android',
    ],
    company: 'Android Developer @ Stratpoint Technologies Inc.',
  },
  {
    name: 'project-sofa',
    title: 'Project SoFa',
    description: 'A mobile app where subscribers manage their broadband account.',
    skills: [
      'node.js',
      'mySQL',
      'AWS Lambda',
    ],
    company: 'Back-end Developer @ Stratpoint Technologies Inc.',
  },
  {
    name: 'project-unimart',
    title: 'Project Unimart',
    description: 'An e-commerce website that provides subscribers easy access to subscriptions and enables resellers to track customer registrations and sales.',
    skills: [
      'ReactJS',
      'npm',
      'Adobe Experience Manager',
      'Jenkins',
      'Bootstrap',
    ],
    company: 'Front-end Developer @ Stratpoint Technologies Inc.',
  },
  {
    name: 'batasqc',
    title: 'BatasQC',
    description: 'A mobile app that provides access to all ordinances and announcements within Quezon City, Philippines.',
    skills: [
      'Android',
      'Kotlin',
      'DBFlow',
      'Retrofit',
    ],
    company: 'Freelance Android Developer',
  },
  {
    name: 'personnel-management-system',
    title: 'Personnel Management System',
    description: 'A website for managing personnels\' information and their departments, contributions, and violations. Admins have access to audit logs, statistics dashboard, and user privileges.',
    skills: [
      'jQuery',
      'Semantic UI',
      'PHP',
      'CodeIgniter',
    ],
    company: 'Freelance Front-end Developer',
  }
];

const Project = ({name, title, description, skills, company}) => {
  return (
    title &&
    <article className="group basis-full h-fit w-full text-stone-500 font-[Urbanist] bg-zinc-50 outline outline-2 outline-celadon-green/30 grid grid-rows-1 grid-cols-6 grid-flow-col mx-6" >
      <div className="col-span-full sm:col-span-2 w-full min-h-80 max-h-96 overflow-hidden shadow-inner">
        <img alt={`Preview of ${title}`} src={`/project-previews/${name}.png`} className="object-cover w-full h-full transition-transform group-hover:scale-125 group-hover:transition-transform bg-hero-pattern" />
      </div>
      <div className="col-span-full sm:col-span-4 flex flex-col justify-between">
        <div className="px-12 py-8">
          <header className="text-lg sm:text-2xl text-celadon-green font-[Urbanist] font-extrabold w-fit h-fit group-hover:decoration-double group-hover:underline">{title}</header>
          <main className="text-base sm:text-xl font-bold mb-8 leading-relaxed">
            {description}
          </main>
          <section className="flex flex-wrap gap-2 justify-center">
            {
              skills.length > 0 &&
              skills.map((skillName) => (
                <Badge key={skillName} fontClass='font-medium'>
                  {skillName}
                </Badge>
              ))
            }
          </section>
        </div>
        <footer className="bg-celadon-green/10 px-4 py-2 text-center align-bottom">
          {company}
        </footer>
      </div>
    </article>
  );
};

export default function ProjectList() {
  return (
    <div className="flex flex-wrap place-items-start gap-4 pb-12 selection:bg-asda-green/50">
      {
        PROJECTS.map((item) => (
          <Project key={item.name} {...item} />
        ))
      }
    </div>
  );
}
