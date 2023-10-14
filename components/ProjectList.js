'use client'

const PROJECTS = [
  {
    title: 'Insurance Administrator and Direct-to-Customer Web App',
    description: `A SaaS application consisting of a web app for insurance providers tomanage insurance policies, a web app for customers to apply for insurance products and organize their policies, and a collection of services for handling business logic,managing assets and documents, and integrating with third-party services.
    ⬩ Created a robust conﬁguration page for the existing insurance application ﬂow.
    ⬩ Created a highly conﬁgurable sign-in and sign-upmechanism with 2FA.
    ⬩ Created utilities to embed images stored in AWS S3 into email templates.
    ⬩ Created a highly conﬁgurable reporting setup using GraphQL Introspection.
    ⬩ Integrated LexisNexis Bridger for watchlist search for customer applications.
    ⬩ Implemented e2e and unit tests on the backend using Jest.
    ⬩ Implemented simple load testing on the backend using Grafana k6.
    ⬩ Implemented automated tests for the Direct-to-Customer App using Cypress.`,
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
    description: `A headless CMS for the items redeemable within
    the AIA rewards system. The CMS ismade using dotCMS whose UI is used by the
    marketingmanagers. A lightweight REST API using Express.js is created to serve the
    CMS content as JSON.`,
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
    description: ` A module in a mobile app that serves as a storage for
    information and documents pertinent to the user's familymembers and assets.
    ⬩ Implemented screens using React Native, referencing mock-ups from the UX
    team. Ensured that the UI is consistent across different devices and platforms.
    ⬩ Maintained more than 90% code coverage within themodule.`,
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
    description: ` Amobile app where employees can give a colleague a token of
    appreciation for a job well done.
    ⬩ Created a carousel image display for the user’s tokens with data from an
    existing backend API.
    ⬩ Created token sending form that utilizes an existing backend API for the
    transaction.
    ⬩ Implemented user login via Google Auth.
    ⬩ Integrated Fabric Crashlytics in the app.`,
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
    <div className="rounded bg-white text-celadon-green font-mono p-8 cursor-pointer outline outline-2 outline-celadon-green">
      <h1 className="text-2xl">{title}</h1>
      <hr className="mt-2" />
      <div className="mt-3 text-l">
        {description}
      </div>
      <div className="flex flex-wrap space-x-2 my-4">
        {
          skills.length > 0 &&
          skills.map((item, index) => (
            <div key={index} className="rounded bg-[#328173] p-0.5 text-white">
              {item}
            </div>
          ))
        }
      </div>
      <div>
        {company}
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="mx-auto grid grid-cols-4 gap-4">
      {
        PROJECTS.map((item, index) => (
          <Project key={index} {...item} />
        ))
      }
    </div>
  );
}

export default ProjectList;
