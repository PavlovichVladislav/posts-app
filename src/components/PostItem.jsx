import React from "react";
import { useNavigate } from "react-router";
import MyButton from "./UI/button/MyButton";

const PostItem = ({post, deletePost}) => {
   const navigate = useNavigate();

   return (
      <div className="post">
         <div className="post__content">
            <strong>{post.id} {post.title} </strong>
            <div>{post.body}</div>
         </div>
         <div className="post__btns">
            <MyButton className='post__btn' onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
            <MyButton className='post__btn' onClick={() => deletePost(post.id)}>Удалить</MyButton>
         </div>
      </div>
   );
};

export default PostItem;
