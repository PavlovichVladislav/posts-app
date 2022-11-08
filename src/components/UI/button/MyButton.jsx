import React from 'react';
import s from './MyButton.module.css';

const MyButton = ({children, className, ...props}) => {
    return (
        <button {...props} className={[s.myBtn, className].join(' ')}>
            {children}
        </button>
    );
};

export default MyButton;