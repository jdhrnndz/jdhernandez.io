'use client'

import Badge from "@components/Badge";

const PROJECTS = [
  {
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
    title: 'Project HaBit',
    description: 'A mobile app where employees can give a colleague a token of appreciation for a job well done.',
    skills: [
      'Android',
    ],
    company: 'Android Developer @ Stratpoint Technologies Inc.',
  },
  {
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

const Project = ({title, description, skills, company}) => {
  return (
    title &&
    <article className="h-fit w-full text-stone-500 font-[Urbanist] bg-zinc-50 outline outline-2 outline-celadon-green/30 overflow-hidden">
      <hgroup>
        <header className="text-2xl text-white tracking-tight font-[Urbanist] font-bold bg-celadon-green w-fit h-fit pl-8 pr-4 py-1 relative after:bg-inherit after:skew after:h-full after:absolute after:w-12 after:-top-0 after:-right-2 after:shadow-stripes z-0 after:-z-[1]">{title}</header>
      </hgroup>
      <div className="px-8 py-4">
        <main className="text-xl font-bold mb-8 leading-relaxed">
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
      <footer className="bg-celadon-green/10 px-4 py-2 text-center">
        {company}
      </footer>
    </article>
  );
};

export default function ProjectList() {
  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 flex-wrap place-items-start gap-4 pb-12 selection:bg-asda-green/50">
      {
        PROJECTS.map((item, index) => (
          <Project key={index} {...item} />
        ))
      }
    </div>
  );
}
