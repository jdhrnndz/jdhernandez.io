'use client'

const SiteHeader = ({ children }) => {
  return (
    <div className="sticky top-0 flex-initial rounded-b-lg p-2 outline outline-2 outline-celadon-green bg-white bg-hero-pattern select-none">
      {children}
    </div>
  )
};

export default SiteHeader;
