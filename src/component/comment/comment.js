import Image from '../Image/Image';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import classNames from 'classnames/bind';
import styles from './comment.module.scss';

import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Comment() {
    const [data, setData] = useState({});
    const [comments, setComment] = useState([]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/commennnt', data);
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetch('http://localhost:3000/commennnt')
            .then((res) => res.json())
            .then((data) => {
                setComment(data);
            });
    }, []);



    return (
        <div className={cx('comment')}>
            <h3>COMMENT</h3>

            {comments.map((comment) => {
                return (
                    <div key={comment.id} className={cx('comment-img')}>
                        <div>
                            <Image src={comment.avatar} alt="avartar-user" />
                        </div>
                        <div>
                            <h4>{comment.name}</h4>
                            <span>{comment.day}</span>
                            <p>{comment.comment}</p>
                        </div>
                    </div>
                );
            })}

            <div className={cx('formSubmit')}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Điền tên của bạn" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Day</Form.Label>
                        <Form.Control type="text" name="day" placeholder="Điền ngày comment" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control type="text" name="comment" placeholder="Điền comment" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control
                            type="text"
                            name="avatar"
                            placeholder="Điền đường dẫn hình ảnh"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button type="submit">POST COMMENT</Button>
                </Form>
            </div>
        </div>
    );
}

export default Comment;
