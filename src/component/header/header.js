import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Buttonbtn from '../Button/Button';
import Menu from '../Menu/Menu';
import Info from '../info/info';
import Search from '../search/search';

import { Link } from 'react-router-dom';
import configRoutes from '../../Routes/configRoutes';

import Tippy from '@tippyjs/react/headless';
import { Wrraper as PopperWrapper } from '../Popper/index';
import { Singpper as PopperSingpper } from '../Popper/index';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';

const cx = classNames.bind(styles);

//menu
const menu = [
    {
        title: 'STANDARD BLOG LAYOUT',
        to: '/STANDARDBLOGlAYOUT',
    },
    {
        title: 'lIST LAYOUT',
    },
    {
        title: '1ST FULL POST THEN lIST',
    },
    {
        title: 'GRID lAYOUT',
    },
    {
        title: '1ST FULL POST THEN GRID',
    },
];

//currentmenu
const currentmenu = [
    {
        title: 'GUTENBERG POST',
    },
    {
        title: 'STANDARD POST',
    },
    {
        title: 'FULL WIDTH POST',
    },
    {
        title: 'INDEX SHORTCODE',
    },
    {
        title: 'TYPOGRAPHY',
    },
    {
        title: 'FULL WIDTH PAGE',
    },
];

//shop
const shop = [
    {
        title: 'CART',
    },
    {
        title: 'CHECK OUT',
    },
];

const icons = <FontAwesomeIcon icon={faChevronDown} />;

function Header() {
    // const [searchValue, SetSearchValue] = useState('');
    const [show, setShow] = useState(false);

    // const handleInput = (e) => {
    //     SetSearchValue(e.target.value);
    // };

    const hanleShow = () => {
        setShow(!show);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ul className={cx('left-menu')}>
                    <Link to={configRoutes.home}>
                        <Menu items={menu}>
                            <li>
                                <Buttonbtn lock rightIcon={icons}>
                                    HOME
                                </Buttonbtn>
                            </li>
                        </Menu>
                    </Link>
                    <Tippy
                        placement="bottom-end"
                        delay={[0, 100]}
                        interactive="true"
                        render={(attrs) => (
                            <div className={cx('menu-lists')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <ul>
                                        {currentmenu.map((item, index) => {
                                            return (
                                                <li className={cx('homeless')} key={index}>
                                                    <Buttonbtn primarytwo big>
                                                        {item.title}
                                                    </Buttonbtn>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <li>
                            <Buttonbtn lock rightIcon={icons}>
                                FEATURES
                            </Buttonbtn>
                        </li>
                    </Tippy>
                    <li>
                        <Buttonbtn lock>LIFESTYLE</Buttonbtn>
                    </li>
                    <li>
                        <Buttonbtn lock>TRAVEL</Buttonbtn>
                    </li>
                    <Tippy
                        placement="bottom-end"
                        delay={[0, 100]}
                        interactive="true"
                        render={(attrs) => (
                            <div className={cx('menu-lists')} tabIndex="-1" {...attrs}>
                                <PopperSingpper>
                                    <ul>
                                        {shop.map((item, index) => {
                                            return (
                                                <li className={cx('homeless')} key={index}>
                                                    <Buttonbtn primarytwo small>
                                                        {item.title}
                                                    </Buttonbtn>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </PopperSingpper>
                            </div>
                        )}
                    >
                        <li>
                            <Buttonbtn lock rightIcon={icons}>
                                SHOP
                            </Buttonbtn>
                        </li>
                    </Tippy>
                    <li>
                        <Buttonbtn lock onClick={hanleShow}>
                            ABOUT ME +
                        </Buttonbtn>
                        {show && <Info className={cx('aboutme')} />}
                    </li>
                    <Link to={configRoutes.login}>
                        <li>
                            <Buttonbtn lock>Login</Buttonbtn>
                        </li>
                    </Link>
                </ul>
                <div className={cx('right-menu')}>
                    <ul className={cx('right-inner')}>
                        <li>
                            <a href=" ">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                <i className="fa-brands fa-pinterest"></i>
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                <i className="fa-solid fa-rss"></i>
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                        </li>
                    </ul>
                    <Search />
                    {/* <div className={cx('top-search')}>
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
                    </div> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
