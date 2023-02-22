import Image from '../../component/Image/Image';
import SlideOne from '../../component/SlideOne/SlideOne';
import Buttonbtn from '../../component/Button/Button';
import axios from 'axios';

import styles from './home.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Homes() {
    const [posts, Setposts] = useState([]);
    
    async function fetchData() {
        try {
          const response = await axios.get('http://localhost:3000/slide');
          Setposts(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    
      useEffect(() => {
        fetchData();
      }, [])
    return (
        <div>
            {posts.map((cur) => {
                return (
                    <div className={cx('wrapperr')} key={cur.id}>
                        <div className={cx('avatar')}>
                            <Image className={cx('user-avatar')} src={cur.image} alt="No image" />
                        </div>
                        <div className={cx('content')}>
                            <h4>{cur.topic}</h4>
                            <h1>{cur.title}</h1>
                            <div className={cx('date-content')}>
                                <h4>THEMESEASON |</h4>
                                <span>{cur.date}</span>
                            </div>
                            <div className={cx('content-white')}>
                                <p>{cur.content}</p>
                                <div>
                                    <Buttonbtn to={cur.to} rounded little>
                                        Continue reading
                                    </Buttonbtn>
                                </div>
                            </div>
                        </div>
                        <div className={cx('comment')}>
                            <div>
                                <Buttonbtn primary big>
                                    {cur.comment} comment
                                </Buttonbtn>
                            </div>
                            <div>
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
                            </div>
                        </div>
                        <SlideOne className={cx('slide')} />
                    </div>
                );
            })}
        </div>
    );
}

export default Homes;
