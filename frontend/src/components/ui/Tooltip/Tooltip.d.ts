import { ReactNode } from 'react';
interface TooltipProps {
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: ReactNode;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
