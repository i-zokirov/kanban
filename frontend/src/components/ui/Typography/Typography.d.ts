import React from 'react';
type TypographyProps = {
    children: React.ReactNode;
    variant?: 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
};
declare const Typography: React.FC<TypographyProps>;
export default Typography;
