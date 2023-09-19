import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    //console.log(props.message);

    return (
        <div className={s.item}>
            <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'></img>
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    );
}

export default Post;