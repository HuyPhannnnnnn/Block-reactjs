import Header from '../../component/header/header';
import Sidebar from '../../component/sidebar/sidebar';

import styles from './layoutOnly.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LayoutOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default LayoutOnly;
