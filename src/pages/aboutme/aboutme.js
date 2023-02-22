import Image from '../../component/Image/Image';
import Buttonbtn from '../../component/Button/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './aboutme.module.scss';

const cx = classNames.bind(styles);

function Aboutme() {
    const [posts, Setposts] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:3000/aboutme');
            Setposts(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            {posts.map((cur) => {
                return (
                    <div className={cx('content')}>
                        <div>
                            <Image src={cur.image}></Image>
                        </div>
                        <div>
                            <h1>{cur.topic}</h1>
                        </div>
                        <div>
                            <p>{cur.introduce}</p>
                            <h3>{cur.content}</h3>
                            <p>{cur.write}</p>
                            <p>{cur.writeone}</p>
                            <blockquote>
                                <p>{cur.writetwo}</p>
                            </blockquote>
                            <p>{cur.writetree}</p>
                        </div>
                    </div>
                );
            })}
            <div className={cx('adress')}>
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
                            <i className="fa-solid fa-rss"></i>
                        </a>
                    </Buttonbtn>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;
