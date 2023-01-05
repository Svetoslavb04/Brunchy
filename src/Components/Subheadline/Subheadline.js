import styles from './Subheadline.module.scss';

const Subheadline = () => {
    return (
        <div id={styles['subheadline-wrapper']}>
            <h3 id={styles['subheadline']}>
                This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How about you ?
            </h3>
        </div>
    )
}

export default Subheadline