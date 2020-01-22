import React from 'react';
import './Comment.css';

const Comment = props => {
  console.log("props in comment.js", props);
  return (
    <div className="comment-text">
      <span className="user">{props.comment.username}</span>
      {' '}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};


export default Comment;
