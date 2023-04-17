import React from 'react';
type IconButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
};
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
