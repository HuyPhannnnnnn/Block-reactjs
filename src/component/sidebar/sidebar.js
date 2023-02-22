import Image from '../Image/Image';
import Buttonbtn from '../Button/Button';
import Info from '../info/info';
import { Link } from 'react-router-dom';
import axios from 'axios';

import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';

import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
    const [forests, setForests] = useState([]);
    const [showgototop, setShowgototop] = useState(false);

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:3000/slide');
            setForests(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const hanleScroll = () => {
            if (window.scrollY >= 3277) {
                setShowgototop(true);
            } else {
                setShowgototop(false);
            }
        };
        window.addEventListener('scroll', hanleScroll);

        return () => {
            window.removeEventListener('scroll', hanleScroll);
        };
    }, []); //ad eventListener

    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={cx('wrapper')}>
            <Info />
            <div className={cx('info-one')}>
                <h3>NEWSLETTER</h3>
                <form>
                    <p>
                        <label>Subscribe to my Newsletter</label>
                        <input type="mail" name="email" placeholder="Your email address" required=""></input>
                    </p>
                    <Buttonbtn text big>
                        SUBSCRIBE
                    </Buttonbtn>
                </form>
                <div className={cx('banner')}>
                    <a href=" ">
                        <div>
                            <button>Banner spot (300x300)</button>
                        </div>{' '}
                    </a>
                </div>
                <h3>FIND US ON FACEBOOK</h3>
                <div className={cx('fb-image')}>
                    <div>
                        <Image
                            src="https://scontent.fdad3-5.fna.fbcdn.net/v/t1.6435-9/157687599_226341189187468_5482218074461786745_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3uUBN0gu4koAX8NFAAW&_nc_ht=scontent.fdad3-5.fna&oh=00_AfDc9RP5OZoS3PN1hLSaMSnnwZK7padyOgTPodoC7BLuVQ&oe=6408122F"
                            alt="image-avatar"
                            className={cx('image-avar')}
                        />
                    </div>
                    <div>
                        <h5>Huy Phan</h5>
                        <span>90 followers</span>
                    </div>
                </div>
            </div>
            <div>
                <h3>LATEST POSTS</h3>
                <ul className={cx('latest')}>
                    {forests.map((forest) => {
                        return (
                            <li key={forest.id}>
                                <div>
                                    <Image src={forest.image} alt="ava"></Image>
                                </div>
                                <div>
                                    <Link to={forest.to}>
                                        <h4>{forest.title}</h4>
                                    </Link>
                                    <span>{forest.date}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className={cx('postionn')}>
                    <h3>TAGS</h3>
                    <div className={cx('taggss')}>
                        <a href=" ">HOBBY</a>
                        <a href=" ">HOLIDAY</a>
                        <a href=" ">MOVIE</a>
                        <a href=" ">MUSIC</a>
                        <a href=" ">REST</a>
                        <a href=" ">SONG</a>
                        <a href=" ">SUMMER</a>
                        <a href=" ">TOURZIM</a>
                        <a href=" ">VIDEO</a>
                    </div>
                    <h3>CATEGORIES</h3>
                    <ul className={cx('travell')}>
                        <li>
                            <a href=" ">Lifestyle</a>
                        </li>
                        <li>
                            <a href=" ">Travel</a>
                        </li>
                    </ul>
                </div>
                {showgototop && (
                    <div className={cx('postion')}>
                        <h3>TAGS</h3>
                        <div className={cx('taggs')}>
                            <a href=" ">HOBBY</a>
                            <a href=" ">HOLIDAY</a>
                            <a href=" ">MOVIE</a>
                            <a href=" ">MUSIC</a>
                            <a href=" ">REST</a>
                            <a href=" ">SONG</a>
                            <a href=" ">SUMMER</a>
                            <a href=" ">TOURZIM</a>
                            <a href=" ">VIDEO</a>
                        </div>
                        <h3>CATEGORIES</h3>
                        <ul className={cx('travel')}>
                            <li>
                                <a href=" ">Lifestyle</a>
                            </li>
                            <li>
                                <a href=" ">Travel</a>
                            </li>
                        </ul>
                        <div className={cx('arrow')}>
                            <Buttonbtn primary less onClick={handleTop}>
                                <i class="fa-solid fa-arrow-up"></i>
                            </Buttonbtn>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sidebar;
