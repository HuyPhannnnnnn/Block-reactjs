import WritePosts from '../../component/writeposts/writeposts';
import Comment from '../../component/comment/comment';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Aenean.module.scss';

const cx = classNames.bind(styles);

function Aenean() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(' http://localhost:3000/Aenean')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);

    return (
        <div className={cx('write-content')}>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <WritePosts data={post} />
                        <Comment />
                    </div>
                );
            })}
        </div>
    );
}

export default Aenean;
