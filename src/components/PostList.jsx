import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, deletePost }) => {
   if (!posts.length)
      return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>;

   return (
      <div>
         <h1 className="App__title">{title}</h1>
         <TransitionGroup>
            {posts.map((post) => (
               <CSSTransition key={post.id} timeout={500} classNames="post">
                  <PostItem deletePost={deletePost} post={post} />
               </CSSTransition>
            ))}
         </TransitionGroup>
      </div>
   );
};

export default PostList;
