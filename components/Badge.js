import classnames from 'classnames';

const Badge = ({ children, fontClass, active }) => {
  const classes = classnames([
    fontClass,
    'font-[Lekton] select-none inline-flex items-center rounded-full px-4 py-1 ring-2 ring-inset ring-celadon-green/50 bg-celadon-green/10 text-celadon-green relative z-0 overflow-hidden',
    {
      'text-white': active,
    }
  ]);

  const sweepEffectClasses = classnames([
    'bg-celadon-green -z-10 duration-200',
    'absolute w-full h-full top-0 ease-in',
    'after:absolute after:w-full after:h-full after:skew after:bg-inherit after:left-6 after:top-0',
    {
      'left-0': active,
      '-left-[calc(100%+3rem)]': !active,
    },
  ]);

  return (
    <span className={classes} after={children}>
      <span className={sweepEffectClasses} />
      {children}
    </span>
  )
}
;

export default Badge;
