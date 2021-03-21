import React from 'react';
import Styles from './Review.module.css'


const CommentBox =  ({ data }) => {
    return (
        <div className={Styles.Comment}>
        <h5>{data.name}</h5>
        <p>{data.commentBody} </p>
        </div>
    )
}
export default CommentBox