import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';

const styles = {
  size: {
    xs: 'px-4 h-9 text-16 font-medium md:text-14 md:px-4.5',
    sm: 'px-5 h-11 text-18 font-bold md:text-14 md:px-5',
    md: 'px-5 h-12 text-18 font-bold md:text-16 md:px-6 sm:text-14',
  },
  base: 'inline-flex leading-normal rounded-sm items-center justify-center',
  theme: {
    'fill-white': 'bg-white text-black',
    'fill-yellow': 'bg-yellow text-black',
    outline: 'text-white border border-white',
  },
};

const Button = ({
  className: additionalClassName = null,
  to = null,
  size = 'sm',
  theme,
  children,
  ...otherProps
}) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
