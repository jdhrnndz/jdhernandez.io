'use client'

import classnames from "classnames";

const FlashyButton = ({ type, isActive, children, ...rest }) => {
  const buttonClasses = classnames([
    'relative h-fit w-fit z-20 uppercase inline-block no-underline text-center tracking-widest whitespace-nowrap py-2 px-5 outline outline-2 outline-celadon-green m-1.5 overflow-clip rounded-md transition-width',
    isActive ? 'bg-celadon-green' : 'bg-white',
    'group',
  ]);

  const textClasses = classnames([
    'uppercase no-underline text-center tracking-widest font-[Lekton] font-bold text-xl',
    isActive ? 'text-white' : 'text-celadon-green',
    'group-hover:text-white',
  ]);

  const firstEffectClasses = classnames([
    'bg-celadon-green -z-[1] duration-200',
    'absolute w-full h-full top-0 -left-[calc(100%+3rem)] ease-in',
    'after:absolute after:w-full after:h-full after:skew after:bg-inherit after:left-6 after:top-0',
    'group-hover:left-0',
  ]);

  const secondEffectClasses = classnames([
    'bg-asda-green -z-[2] duration-300',
    'absolute w-full h-full top-0 -left-[calc(100%+3rem)] ease-in',
    'after:absolute after:w-full after:h-full after:skew after:bg-inherit after:left-6 after:top-0',
    'group-hover:left-0 group-hover:duration-100 group-hover:ease-in-out',
  ]);

  return ( // TODO: identify the magic props here, i.e. in the rest variable
    <button type={type} className={buttonClasses} {...rest}>
      <span className={firstEffectClasses} />
      <span className={secondEffectClasses} />
      <span className={textClasses}>{children}</span>
    </button>
  );
}

export default FlashyButton;
