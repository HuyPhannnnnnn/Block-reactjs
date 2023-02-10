import Image from '../Image/Image';
import Buttonbtn from '../Button/Button';

import classNames from 'classnames/bind';
import styles from './info.module.scss';

const cx = classNames.bind(styles);

function Info({className}) {
    return (
        <div className={cx('wrapper',className)}>
            <div className={cx('info')}>
                <h3>ABOUT ME</h3>
                <div className={cx('info-sosial')}>
                    <Image src="https://themeseason.com/lale/wp-content/uploads/2016/06/bg-img33.jpg" alt="info" />
                    <div className={cx('info-image')}>
                        <Image
                            className={cx('image-name')}
                            src="https://themeseason.com/lale/wp-content/uploads/2016/06/person.jpg"
                            alt="info-name"
                        />
                        <span>PHOTOGRAPHER & BLOGGER</span>
                    </div>
                    <p>
                        Nam viverra tellus ex, sed pretium mi pulvinar eleifend. Nulla vulputate mi justo, at convallis
                        nisi egestas a. Sed non tortor et diam finibus convallis eget nec libero. Integer ullamcorper
                        sem quis purus facilisis, eget euismod.
                    </p>
                </div>
                <h3>SUBSCRIBE & FOLLOW</h3>
                <div className={cx('adress')}>
                    <Buttonbtn primary less>
                        <a href=" ">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </Buttonbtn>
                    <Buttonbtn primary less>
                        <a href=" ">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </Buttonbtn>
                    <Buttonbtn primary less>
                        <a href=" ">
                            <i className="fa-brands fa-pinterest"></i>
                        </a>
                    </Buttonbtn>
                    <Buttonbtn primary less>
                        <a href=" ">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </Buttonbtn>
                    <Buttonbtn primary less>
                        <a href=" ">
                            <i className="fa-solid fa-heart"></i>
                        </a>
                    </Buttonbtn>
                    <Buttonbtn primary less>
                        <a href=" ">
                            <i className="fa-solid fa-rss"></i>
                        </a>
                    </Buttonbtn>
                    <Buttonbtn primary less>
                        <a href=" ">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </a>
                    </Buttonbtn>
                    <Buttonbtn primary less>
                        <a href=" ">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </Buttonbtn>
                </div>
            </div>
            
        </div>
    );
}

export default Info;
