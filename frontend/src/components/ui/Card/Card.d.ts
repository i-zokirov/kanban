import React from 'react';
interface CardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    innerRef?: React.Ref<HTMLDivElement>;
    [x: string]: any;
}
declare const Card: React.FC<CardProps>;
export default Card;
