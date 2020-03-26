import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {
    let posts = [
        {id: 1, message: 'Hi, how are you', like: 12},
        {id: 2, message: 'Its my first post', like: 15},
        {id: 3, message: 'Its my first post', like: 15},
        {id: 4, message: 'Its  post', like: 15},
        {id: 5, message: 'Its my ', like: 15},
        {id: 6, message: 'Its my post', like: 15}
    ];

    let postsElements = posts.map(p => <Post message={p.message} like={p.like}/>
    );
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
    };
    export default MyPosts;