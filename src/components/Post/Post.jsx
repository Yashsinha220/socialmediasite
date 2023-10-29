import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import like from "../../img/like.png";
import notlike from "../../img/notlike.png";
import share from "../../img/share.png";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />
      <div className="PostReact">
        <img src={data.liked ? like : notlike} alt="" />
        <img src={Comment} alt="" />
        <img src={share} alt="" />
      </div>

      <span>{data.likes} likes</span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
