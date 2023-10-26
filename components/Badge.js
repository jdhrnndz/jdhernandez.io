import BadgeStyles from './Badge.module.css';
import classnames from 'classnames';

const Badge = ({ children, fontClass, active }) => {
  const classes = classnames([
    BadgeStyles.base,
    fontClass,
    'after:content-[attr(after)]',
    'before:skew',
    {
      [BadgeStyles.active]: active,
    },
  ]);

  return (
    <span className={classes} after={children}>
      {children}
    </span>
  )
}
;

export default Badge;
