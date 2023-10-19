'use client'

const SiteHeader = ({ children }) => {
  return (
    <header className="flex-initial p-2 outline outline-2 outline-celadon-green bg-white bg-hero-pattern select-none">
      {children}
    </header>
  )
};

export default SiteHeader;
