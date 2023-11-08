'use client'

const Links = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jdhrnndz',
    name: 'linkedin',
    iconUrl: 'https://cdn.simpleicons.org/linkedin',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/jdhrnndz',
    name: 'github',
    iconUrl: 'https://cdn.simpleicons.org/github',
  },
  {
    title: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/2511541/jd-hernandez',
    name: 'stackoverflow',
    iconUrl: 'https://cdn.simpleicons.org/stackoverflow',
  },
  {
    title: 'Monkeytype',
    url: 'https://monkeytype.com/profile/jdhrnndz',
    name: 'monkeytype',
    iconUrl: 'https://cdn.simpleicons.org/monkeytype',
  },
  {
    title: 'Holopin',
    url: 'https://holopin.io/@jdhrnndz',
    name: 'holopin',
    iconUrl: 'https://www.holopin.io/favicon.ico',
  }
]

const Linkshrub = () => (
  <div className="flex flex-col mx-auto h-full justify-center w-8/12 gap-4">
    {
      Links.filter(({ name }) => name).map(({ title, url, iconUrl, name }) => (
        <article key={name} className="flex flex-row px-4 py-2 sm:px-8 sm:py-4 group rounded-full bg-zinc-50 outline outline-2 outline-celadon-green/50">
          <img height="32" width="32" src={iconUrl} className="basis-1 transition-transform group-hover:scale-110 group-hover:transition-transform" />
          <a className="basis-full text-center text-celadon-green text-lg sm:text-2xl font-[Urbanist] group-hover:underline group-hover:decoration-double" href={url} target="_blank">{title}</a>
        </article>
      ))
    }
  </div>
);

export default Linkshrub;
