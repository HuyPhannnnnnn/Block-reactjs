import Sidebar from '../../component/sidebar/sidebar';
import Header from '../../component/header/header';
import Slide from '../../component/slide/slide';
import SlideOne from '../../component/SlideOne/SlideOne';

import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function defaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Slide />
            <SlideOne />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default defaultLayout;
