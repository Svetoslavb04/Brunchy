import styles from './SuccessfulOrder.module.scss'

import Button from '../Button/Button';

const SuccessfulOrder = ({ onButtonClick, className }) => {
    return (
        <div
            className={`${styles['successful-order']} ${className || ''} successful-order`}
        >
            <h1>Congratulations!</h1>
            <h2>Your order it’s on its way.</h2>
            <Button
                className={styles['close-modal-button']}
                text='Ok'
                onClick={onButtonClick}
            />
        </div>
    )
}

export default SuccessfulOrder
