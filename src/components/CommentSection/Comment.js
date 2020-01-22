import React from 'react';
import './Comment.css';

const Comment = props => {
  console.log("props in comment.js", props);
  return (
    <div className="comment-text">
      <span className="user">{props.commentData.username}</span>
      {' '}
      <span className="comment">{props.commentData.text}</span>
    </div>
  );
};


export default Comment;
