import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import styles from './ButtonCategory.module.scss';

export default function ButtonCategory() {
    return (
        <button className={styles.button}>
            <img className={styles.buttonImg} src={images.ava} alt="images" />
            <div className={styles.title}>
                <span>Title</span>
                <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div className={styles.content}>
                <div className={styles.time}>
                    <span>STARTS</span>
                    <span>Apr 6</span>
                </div>
                <div className={styles.price}>
                    <span>PRICE</span>
                    <span>6 ETH</span>
                </div>
            </div>
        </button>
    );
}
