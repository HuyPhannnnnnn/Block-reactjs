import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, SetSearchValue] = useState('');

    const handleInput = (e) => {
        SetSearchValue(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-search')}>
                <input
                    value={searchValue}
                    type="text"
                    placeholder="Search and hit Enter...."
                    onChange={handleInput}
                    spellCheck={false}
                />
                {searchValue && (
                    <button className={cx('check')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                <button className={cx('icon-search')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}

export default Search;
