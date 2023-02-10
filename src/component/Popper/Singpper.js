import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Singpper({ children, className }) {
    return <div className={cx('singpper', className)}>{children}</div>;
}

export default Singpper;