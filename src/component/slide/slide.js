import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './slide.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Slide() {
    const [posts, setPosts] = useState([]);
    const [gets, setGets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, []); //call api đổ dữ liệu

    useEffect(() => {
        fetch('http://localhost:3000/info')
            .then((res) => res.json())
            .then((gets) => {
                setGets(gets);
            });
    }, []);

    return (
        <div>
            <Carousel className={cx('slide-post')}>
                {posts.map((post) => {
                    return (
                        <Carousel.Item key={post.id}>
                            <img className="d-block w-100" src={post.image} alt="First slide" />
                            <Carousel.Caption className={cx('slide-topic')}>
                                <h4>{post.topic}</h4>
                                <h1>{post.title}</h1>
                                <span>{post.date}</span>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <div className={cx('info-info')}>
                {gets.map((get) => {
                    return (
                        <div className={cx('info-image')} key={get.id} style={{ backgroundImage: `url(${get.image})` }}>
                            <div className={cx('info-border')}>
                                <span>{get.topic}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Slide;
