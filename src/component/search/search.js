import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, SetSearchValue] = useState('');
    const [results, setResults] = useState([]);

    const handleInput = (e) => {
        SetSearchValue(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/${searchValue}`);
            const data = await response.json();
            setResults(data.results);
        };

        if (searchValue) {
            fetchData();
        }
    }, [searchValue]);

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
            <ul>
                {results.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
