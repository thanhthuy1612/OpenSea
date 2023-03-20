import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { Wrapper as PopperWrapper } from './Popper';
import SearchList from './SearchList';
import { Account } from '~/constants/Account';

export default function Header() {
    const searchRef = useRef();
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <img src={images.logo} alt="OpenSea" className={styles.logoImage} />
                    <h2 className={styles.logoText}> OpenSea </h2>
                </div>
                <Tippy
                    interactive
                    visible
                    render={(attrs) => (
                        <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                {Account.map((data, index) => (
                                    <SearchList key={index} data={data.data} title={data.title} />
                                ))}
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={styles.search}>
                        <button className={styles.searchButton}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input
                            ref={searchRef}
                            //value={input}
                            //onChange={handleChange}
                            placeholder="Search items, collections and accounts"
                            spellCheck={false}
                        />
                    </div>
                </Tippy>
            </div>
        </header>
    );
}
