'use client'

const Badge = ({ children, fontClass }) => (
  <span className={`${fontClass} select-none inline-flex items-center rounded-md bg-celadon-green/10 px-2 py-1 text-celadon-green ring-2 ring-inset ring-celadon-green/50`}>
    {children}
  </span>
);

export default Badge;
