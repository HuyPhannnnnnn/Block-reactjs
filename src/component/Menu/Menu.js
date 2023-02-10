import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrraper as PopperWrapper } from '../Popper/index';
import Buttonbtn from '../Button/Button';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
    return (
        <Tippy
            placement="bottom-end"
            delay={[0, 100]}
            interactive="true"
            render={(attrs) => (
                <div className={cx('menu-lists')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <ul>
                            {items.map((item, index) => {
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
            {children}
        </Tippy>
    );
}

export default Menu;
