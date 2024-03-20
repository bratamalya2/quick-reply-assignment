import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Icons from '@phosphor-icons/react';

import './button.css';

const Button = ({ text, iconOnly, textOnly, type, status, size, icon, ...props }) => {
    const [Icon, setIcon] = useState(Icons[icon]);
    const [color, setColor] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [hoverClassName, setHoverClassName] = useState('');

    useEffect(() => {
        switch (type) {
            case 'default':
                setColor('#47B647');
                break;
            case 'neutral':
                setColor('#5B5B5C');
                break;
            case 'reverse':
                setColor('#FFFFFF');
                break;
            default:
                setColor('#47B647')
                break;
        }
    }, [type]);

    useEffect(() => {
        setIcon(Icons[icon]);
    }, [icon]);

    useEffect(() => {
        switch (status) {
            case 'hover':
                setHoverClassName(`${type}-hover`);
                setDisabled(false);
                break;
            case 'disabled':
                setHoverClassName('');
                setDisabled(true);
                break;
            default:
                setHoverClassName('');
                setDisabled(false);
        }
    }, [type, status]);

    if (!Icon)
        return null;

    return disabled ? (
        <button className={`btn ${type} ${hoverClassName} btn-size-${size}`} disabled>
            {
                size === 'default' && !textOnly && <Icon size={24} color={color} />
            }
            {
                size === 'small' && !textOnly && <Icon size={20} color={color} />
            }
            {
                size === 'X-small' && !textOnly && <Icon size={18} color={color} />
            }
            {iconOnly ? null : text}
        </button>
    ) : (
        <button className={`btn ${type} ${hoverClassName} btn-size-${size}`}>
            {
                size === 'default' && !textOnly && <Icon size={24} color={color} />
            }
            {
                size === 'small' && !textOnly && <Icon size={20} color={color} />
            }
            {
                size === 'X-small' && !textOnly && <Icon size={18} color={color} />
            }
            {iconOnly ? null : text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    iconOnly: PropTypes.bool,
    textOnly: PropTypes.bool,
    type: PropTypes.string,
    status: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string
};

Button.defaultProps = {
    text: 'Action',
    iconOnly: false,
    textOnly: false,
    type: 'default',
    status: 'default',
    size: 'default',
    icon: 'UserCircle'
};

export default Button;