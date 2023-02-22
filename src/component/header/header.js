import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Buttonbtn from '../Button/Button';
import Info from '../info/info';
import Search from '../search/search';

import {  Link } from 'react-router-dom';
import configRoutes from '../../Routes/configRoutes';

import Tippy from '@tippyjs/react/headless';
import { Wrraper as PopperWrapper } from '../Popper/index';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';

const cx = classNames.bind(styles);

//currentmenu
const currentmenu = [
    {
        title: 'Etiam id feugiat dui, at dictum nisi',
        to: '/Etiam',
    },
    {
        title: 'Aenean at laoreet metus',
        to: '/Aenean',
    },
    {
        title: 'Curabitur ipsum risus',
        to: '/Curabitur',
    },
    {
        title: 'Sed nec rhoncus ante',
        to: '/Sed',
    },
    {
        title: 'Phasellus ac tempor libero',
        to: '/Phasellus',
    },
];

//shop
const shop = [
    {
        title: 'CART',
        to: '/cart',
    },
    {
        title: 'CHECK OUT',
        to: '/checkout',
    },
];

const icons = <FontAwesomeIcon icon={faChevronDown} />;

function Header() {
    const [show, setShow] = useState(false);

    const hanleShow = () => {
        setShow(!show);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('plus')} onClick={hanleShow}>
                <i class="fa-solid fa-square-plus"></i>
                {show && <Info className={cx('aboutme')} />}
            </div>
            <div className={cx('inner')}>
                <ul className={cx('left-menu')}>
                    <Link to={configRoutes.home}>
                        <li>
                            <Buttonbtn lock>HOME</Buttonbtn>
                        </li>
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
                                                    <Buttonbtn to={item.to} primarytwo big>
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
                                <PopperWrapper>
                                    <ul>
                                        {shop.map((item, index) => {
                                            return (
                                                <li className={cx('homeless')} key={index}>
                                                    <Buttonbtn to={item.to} primarytwo big>
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
                                SHOP
                            </Buttonbtn>
                        </li>
                    </Tippy>
                    <Link to={configRoutes.aboutme}>
                        <li>
                            <Buttonbtn lock>ABOUT ME +</Buttonbtn>
                            {/* {show && <Info className={cx('aboutme')} />} */}
                        </li>
                    </Link>
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
                </div>
            </div>
        </header>
    );
}

export default Header;
