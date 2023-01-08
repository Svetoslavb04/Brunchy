import styles from './SuccessModal.module.scss'

import Button from '../Button/Button';

const SuccessModal = ({ isVisible, closeModal }) => {
    return (
        <>
            <div
                id={styles['blur-element']}

                className={`${isVisible ? styles['visible'] : styles['hidden']} blur-element`}
            ></div>
            <div
                id={styles['success-modal']}
                className={`${isVisible ? styles['visible'] : styles['hidden']} success-modal`}
            >
                <h1>Congratulations!</h1>
                <h2>Your order it’s on its way.</h2>
                <Button
                    className={styles['close-modal-button']}
                    text='Ok'
                    onClick={closeModal}
                />
            </div>
        </>
    )
}

export default SuccessModal
