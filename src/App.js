import { useEffect, useState } from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Lodaer from "./components/UI/loader/Lodaer";
import MyModal from "./components/UI/myModal/MyModal";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.css";

function App() {
   const [posts, setPosts] = useState([]);
   const [filter, setFilter] = useState({ sort: "", query: "" });
   const [modal, setModal] = useState(false);
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
   const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
   });

   const addNewPost = (title, body) => {
      setPosts([...posts, { id: posts.length + 1, title, body }]);
      setModal(false);
   };

   const deletePost = (id) => {
      setPosts(posts.filter((post) => post.id !== id));
   };

   useEffect(() => {
      fetchPosts();
   }, []);

   return (
      <div className="App">
         <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
            Создать пост
         </MyButton>
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm addNewPost={addNewPost} />
         </MyModal>
         <hr style={{ margin: "15px 0" }} />
         <PostFilter filter={filter} setFilter={setFilter} />
         {postError && <h1>Произошла ошибка: ${postError}</h1>}
         {isPostLoading ? (
            <div
               style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
               }}
            >
               <Lodaer />
            </div>
         ) : (
            <PostList
               deletePost={deletePost}
               posts={sortedAndSearchedPosts}
               title={"Список постов"}
            />
         )}
      </div>
   );
}

export default App;
