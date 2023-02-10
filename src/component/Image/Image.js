import images from "../../assets/photo";
import { useState } from "react";
import styles from "./image.module.scss"
import classNames from "classnames";

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }) {
    const [fallback, setFallback] = useState('');

    //khi ảnh lỗi thì lấy ảnh này
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        ></img> //prop onError dùng khi ảnh lỗi
    );
}

export default Image;

