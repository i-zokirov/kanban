"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Typography = ({ children, variant = 'body1', className = '' }) => {
    let component;
    let fontWeight;
    let fontSize;
    let lineHeight;
    let letterSpacing;
    switch (variant) {
        case 'body1':
            component = 'p';
            fontWeight = 'normal';
            fontSize = '1rem';
            lineHeight = '1.5';
            letterSpacing = 'normal';
            break;
        case 'body2':
            component = 'p';
            fontWeight = 'normal';
            fontSize = '0.875rem';
            lineHeight = '1.25';
            letterSpacing = 'normal';
            break;
        case 'subtitle1':
            component = 'h6';
            fontWeight = 'normal';
            fontSize = '1rem';
            lineHeight = '1.75';
            letterSpacing = '0.00938em';
            break;
        case 'subtitle2':
            component = 'h6';
            fontWeight = '600';
            fontSize = '0.875rem';
            lineHeight = '1.57';
            letterSpacing = '0.00714em';
            break;
        case 'h1':
            component = 'h1';
            fontWeight = 'bold';
            fontSize = '3rem';
            lineHeight = '1.167';
            letterSpacing = '-0.01562em';
            break;
        case 'h2':
            component = 'h2';
            fontWeight = 'bold';
            fontSize = '2.125rem';
            lineHeight = '1.2';
            letterSpacing = '0em';
            break;
        case 'h3':
            component = 'h3';
            fontWeight = 'bold';
            fontSize = '1.5rem';
            lineHeight = '1.167';
            letterSpacing = '0.0075em';
            break;
        case 'h4':
            component = 'h4';
            fontWeight = 'bold';
            fontSize = '1.25rem';
            lineHeight = '1.2';
            letterSpacing = '0.00938em';
            break;
        case 'h5':
            component = 'h5';
            fontWeight = 'bold';
            fontSize = '1rem';
            lineHeight = '1.5';
            letterSpacing = '0em';
            break;
        case 'h6':
            component = 'h6';
            fontWeight = '600';
            fontSize = '0.875rem';
            lineHeight = '1.6';
            letterSpacing = '0.0075em';
            break;
        default:
            component = 'p';
            fontWeight = 'normal';
            fontSize = '1rem';
            lineHeight = '1.5';
            letterSpacing = 'normal';
    }
    const classes = `font-${fontWeight} text-${variant} leading-${lineHeight} tracking-${letterSpacing} ${className}`;
    const Element = component;
    return <Element className={classes}>{children}</Element>;
};
exports.default = Typography;
//# sourceMappingURL=Typography.js.map