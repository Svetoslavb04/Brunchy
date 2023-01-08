import styles from './FreeDelivery.module.scss';

const FreeDelivery = () => {
    return (
        <div className={styles['free-delivery']}>
            <span>Free delivery</span>
            <div className={styles['circle']}></div>
        </div>
    )
}
export default FreeDelivery