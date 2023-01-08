import styles from './Modal.module.scss';

const Modal = ({ className, id, children, isVisible }) => {
    return (
        <div
            id={id}
            className={`${isVisible ? styles['visible'] : styles['hidden']} ${styles['blur-element']} ${className}`}
        >
            {children}
        </div>
    )
}

export default Modal