import styles from './Navigation.module.scss';
import FreeDelivery from '../FreeDelivery/FreeDelivery';

const Navigation = () => {
    return (
        <header id={styles['navigation']}>
            <nav>
                <h2 id={styles['text-logo']}>Brunchy</h2>
                <ul id={styles['links']}>
                    <li><a href="https://www.dreamshot.bg/" target='_blank' rel='noreferrer'>About</a></li>
                    <li><a href="https://www.dreamshot.bg/" target='_blank' rel='noreferrer'>Call Us</a></li>
                </ul>
            </nav>
            <FreeDelivery></FreeDelivery>
        </header>
    )
}

export default Navigation