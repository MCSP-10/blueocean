import React from 'react';
import CommentItem from './CommentItem';
import styles from './Form.module.css';

export default function Comments({ comments }) {
    // console.log(comments)
    return (
        <div className={styles.comment_container}>
            {comments &&
                comments.map((e, i) => <CommentItem comment={e} key={i} />)}
            <div className={styles.post_comment}>
                <input type="text" />
                <button>Post Comment</button>
            </div>
        </div>
    );
}
