'use client'

const Links = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jdhrnndz',
    iconSlug: 'linkedin',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/jdhrnndz',
    iconSlug: 'github',
  },
  {
    title: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/2511541/jd-hernandez',
    iconSlug: 'stackoverflow',
  },
  {
    title: 'Monkeytype',
    url: 'https://monkeytype.com/profile/jdhrnndz',
    iconSlug: 'monkeytype',
  },
  {
    title: 'Holopin',
    url: 'https://holopin.io/@jdhrnndz',
    iconSlug: '',
  }
]

const Linkshrub = () => (
  <div className="flex flex-col mx-auto w-8/12 gap-4">
    {
      Links.filter(({ iconSlug }) => iconSlug).map(({ title, url, iconSlug }) => (
        <article key={iconSlug} className="flex flex-row px-8 py-4 group rounded-full bg-zinc-50 outline outline-2 outline-celadon-green/50">
          <img height="32" width="32" src={`https://cdn.simpleicons.org/${iconSlug}`} className="basis-1 transition-transform group-hover:scale-110 group-hover:transition-transform" />
          <a className="basis-full text-center text-asda-green text-2xl font-[Urbanist] group-hover:underline group-hover:decoration-double" href={url}>{title}</a>
        </article>
      ))
    }
  </div>
);

export default Linkshrub;
