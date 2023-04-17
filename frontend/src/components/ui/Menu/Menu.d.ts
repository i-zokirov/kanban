import React from 'react';
interface MenuProps {
    anchorElement: React.ReactNode;
    className?: string;
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
}
declare const Menu: React.FC<MenuProps>;
export default Menu;
