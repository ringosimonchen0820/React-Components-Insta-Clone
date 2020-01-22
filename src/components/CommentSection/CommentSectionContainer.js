// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [commentData] = useState(props.comment);
  console.log("this is commentData", commentData);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {/* {props.commentData.map(cData => (
        <Comment 
          key= {cData.username}
          postData = {pData}
        />
      ))} */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
