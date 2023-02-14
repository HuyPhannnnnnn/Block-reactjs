import Image from '../Image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import SlideOne from '../SlideOne/SlideOne';

import classNames from 'classnames/bind';
import styles from './writeposts.module.scss';

const cx = classNames.bind(styles);

function WritePosts({ data }) {
    return (
        <div key={data.id}>
            <div className={cx('wrapper')}>
                <div>
                    <Image src={data.image} alt="write-image" />
                </div>
                <div>
                    <h4>{data.topic}</h4>
                    <h1>{data.title}</h1>
                    <div className={cx('date-content')}>
                        <h4>THEMESEASON |</h4>
                        <span>{data.date}</span>
                    </div>
                </div>
                <div>
                    <p>{data.content}</p>
                    <blockquote>
                        <p>{data.write}</p>
                    </blockquote>
                    <p>{data.writeone}</p>
                </div>
                <div>
                    <h3>Quisque odio neque, accumsan sed elit in</h3>
                    <p>{data.writetwo}</p>
                    <p>{data.writetree}</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faKey} />
                    <a href=" ">REST</a>
                    <a href=" ">SUMMER</a>
                    <a href=" ">TOURIZM</a>
                </div>
            </div>

            <SlideOne className={cx('slideOne')} />

        </div>
    );
}

export default WritePosts;
