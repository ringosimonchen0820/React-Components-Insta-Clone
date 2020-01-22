import React from 'react';

const LikeSection = props => {
  console.log("like section", props);
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <button onClick = {props.incrementLikes}>
         <i className ="far fa-heart" />
        </button>
      </div>
      <div className="like-section-wrapper">
        <button>
          <i className="far fa-comment" />
        </button>
      </div>
    </div>
    <p className="like-number">
      {props.likes} likes
    </p>
</div>
  )
};

export default LikeSection;
