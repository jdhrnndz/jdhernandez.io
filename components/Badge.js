'use client'

const Badge = ({ children, fontClass, active }) => (
  <span className={`${fontClass} select-none inline-flex items-center rounded-full ${active ? 'bg-celadon-green text-white' : 'bg-celadon-green/10 text-celadon-green'} px-4 py-1 ring-2 ring-inset ring-celadon-green/50`}>
    {children}
  </span>
);

export default Badge;
