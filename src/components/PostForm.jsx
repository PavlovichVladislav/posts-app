import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({addNewPost}) => {
   const [post, setPost] = useState({title: '', body: ''});

   const addPost = (e) => {
      e.preventDefault();
      addNewPost(post.title, post.body);

      setPost({title: '', body: ''})
   }

   return (
      <form>
         <MyInput
            type="text"
            placeholder="Название поста"
            value={post.title}
            onChange={(e) => setPost({title: e.target.value, body: post.body})}
         />
         <MyInput
            type="text"
            placeholder="Описание поста"
            value={post.body}
            onChange={(e) => setPost({title: post.title, body: e.target.value})}
         />
         <MyButton onClick={addPost}>Создать пост</MyButton>
      </form>
   );
};

export default PostForm;
