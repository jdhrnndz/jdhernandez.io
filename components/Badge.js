import BadgeStyles from './Badge.module.css';
import classnames from 'classnames';

const Badge = ({ children, fontClass, active }) => {
  const classes = classnames({
    [BadgeStyles.base]: true,
    [BadgeStyles.active]: active,
    [fontClass]: true,
    'after:content-[attr(after)]': true,
  });

  return (
    <span className={classes} after={children}>
      {children}
    </span>
  )
}
;

export default Badge;
