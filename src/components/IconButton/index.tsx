import React from 'react';
import clsx from 'clsx';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';

export interface IconButtonProps extends ButtonProps {
  img?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { className, icon, img, ...other } = props;
  return (
    <Button className={clsx('IconBtn', className)} ref={ref} {...other}>
      {icon && typeof icon == "string" ? <Icon type={icon} /> : icon}
      {!icon && img && <img src={img} alt="" />}
    </Button>
  );
});
