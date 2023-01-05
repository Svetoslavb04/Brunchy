import styles from './Headline.module.scss';

const Headline = () => {
    return (
        <div id={styles['headline-wrapper']}>
            <h1 id={styles['headline']}>
                The fastest      brunch delivery in <span className='text-primary'>Your city</span>
            </h1>
        </div>
    )
}

export default Headline