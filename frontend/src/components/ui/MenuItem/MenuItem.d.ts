import React from 'react';
interface MeuItemProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
declare const MenuItem: React.FC<MeuItemProps>;
export default MenuItem;
