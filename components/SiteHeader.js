'use client'

const SiteHeader = ({ children }) => {
  return (
    <div className="flex-none rounded-b-lg h-auto mb-4 p-2 outline outline-2 outline-celadon-green bg-white bg-hero-pattern select-none">
      {children}
    </div>
  )
};

export default SiteHeader;
