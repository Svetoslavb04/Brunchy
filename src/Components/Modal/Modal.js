import { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ className, id, children, isVisible, childrenWrapperClassName }) => {

    const modalContentRef = useRef(null);

    useEffect(() => {
        
        if (modalContentRef.current && modalContentRef.current.firstChild) {

            modalContentRef.current.firstChild.style.zIndex = 4;
            
        }

    }, []);

    return (
        <>
            <div
                id={id}
                className={`${isVisible ? styles['visible'] : styles['hidden']} ${styles['blur-element']} ${className || ''}`}
            >
            </div>
            <div
                ref={modalContentRef}
                className={`
                    ${isVisible ? styles['visible'] : styles['hidden']} 
                    ${styles['modal-content']} 
                    ${childrenWrapperClassName || ''}
                `}
            >
                {children}
            </div>
        </>

    )
}

export default Modal