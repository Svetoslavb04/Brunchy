import styles from './FreeDelivery.module.scss';

const FreeDelivery = () => {
    return (
        <div id={styles['free-delivery']}>
            <span>Free delivery</span>
            <div id={styles['circle']}></div>
        </div>
    )
}
export default FreeDelivery