'use client'

import FlashyButtonStyles from "./FlashyButton.module.css";
import classnames from "classnames";

const FlashyButton = ({ type, isActive, children, ...rest }) => {
  const buttonClasses = classnames([
    FlashyButtonStyles.base,
    isActive ?'bg-celadon-green' : 'bg-white',
    'group',
  ]);

  const textClasses = classnames([
    FlashyButtonStyles.text,
    isActive ? 'text-white' : 'text-celadon-green',
    'group-hover:text-white',
  ]);

  const firstEffectClasses = classnames([
    FlashyButtonStyles.effect_base,
    FlashyButtonStyles.first_effect,
    'skew',
    'group-hover:w-[150%]',
  ]);

  const secondEffectClasses = classnames([
    FlashyButtonStyles.effect_base,
    FlashyButtonStyles.second_effect,
    'skew',
    'group-hover:w-[150%]',
    'group-hover:duration-100',
    'group-hover:ease-in-out',
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
