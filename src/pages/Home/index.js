import ButtonCategory from './ButtonCategory';
import styles from './Home.module.scss';

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <ButtonCategory />
            <ButtonCategory />
            <ButtonCategory />
            <ButtonCategory />
        </div>
    );
}
