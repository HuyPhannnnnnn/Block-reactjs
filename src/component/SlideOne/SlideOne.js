import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

import styles from './SlideOne.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SlideOne({className}) {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/slide')
            .then((res) => res.json())
            .then((suggestions) => {
                setSuggestions(suggestions);
            });
    }, []);

    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper',className)}>
            <div className={cx('content-title')}>
                <h4><span>MOST COMMENTED POSTS</span></h4>
            </div>
            <div className={cx('container')}>
                {suggestions.length === 0 ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <Slider {...settings}>
                        {suggestions.map((current) => (
                            <div className={cx('outt')} key={current.id}>
                                <div className={cx('card-body')} style={{ backgroundImage: `url(${current.image})` }}>
                                    <div className={cx('content')}>
                                        <h4>{current.topic}</h4>
                                        <h1>{current.title}</h1>
                                        <span>{current.date}</span>
                                    </div>
                                    <div className={cx('message')}>
                                        <span>{current.comment}</span>
                                        <FontAwesomeIcon icon={faMessage} style={{ fontSize: '15px' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
}

export default SlideOne;
