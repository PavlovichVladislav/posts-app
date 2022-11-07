import React from 'react';
import c from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
    const modalClass = [c.myModal];
    if (visible) modalClass.push(c.active);

    return (
        <div className={modalClass.join(' ')} onClick={() => setVisible(false)}>
            <div className={c.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;