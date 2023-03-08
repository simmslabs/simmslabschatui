import React from 'react';
import clsx from 'clsx';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';

export interface IconButtonProps extends ButtonProps {
  img?: string | React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { className, icon, img, ...other } = props;
  return (
    <Button className={clsx('IconBtn', className)} ref={ref} {...other}>
      {icon && typeof icon == "string" ? <Icon type={icon} /> : icon}
      {!icon && img && typeof img == "string" ? <img src={img} alt="" /> : img}
    </Button>
  );
});
