import React from "react";
import { Link } from "react-router-dom";

function Comment({ comment }) {
  return (
    <div className="font-semibold flex" key={comment._id}>
      <Link to={`/profile/${comment.userId}`}>
        <img
          className="rounded-full h-5 w-5 mr-2 items-center"
          src={`/assets/${comment.userPicturePath}`}
        />
      </Link>
      <p>
        {comment.firstName}: <span className="font-normal">{comment.text}</span>
      </p>
    </div>
  );
}

export default Comment;
