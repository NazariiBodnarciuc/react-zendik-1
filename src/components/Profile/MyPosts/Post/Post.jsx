import React from 'react';
import s from './Post.module.css';

const Post = (props) => {


    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQihpPg13UyFBVFKfGbZZRuvrtGtiuCPKS9Gh84AxMmmsItool2"/>
            { props.message }
            <div><span>Like { props.like }</span></div>
        </div>
)
};
export default Post;
