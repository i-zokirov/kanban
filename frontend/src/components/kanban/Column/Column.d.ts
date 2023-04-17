import React from 'react';
import './Column.css';
interface ColumnProps {
    title: string;
    children: React.ReactNode;
    innerRef: React.Ref<HTMLDivElement>;
    [x: string]: any;
}
declare const Column: React.FC<ColumnProps>;
export default Column;
