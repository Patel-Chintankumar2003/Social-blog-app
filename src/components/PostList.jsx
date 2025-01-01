import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcomemassage from "./Welcomemassage";
 


const PostList = () => {
  const { postList , addInitialPosts} = useContext(PostListData);
// api feached 
  const handleGetPostsClick = () => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });

  }
  return (
    <>
    {postList.length === 0 && <Welcomemassage onGetPostsClick={handleGetPostsClick}/>

    }
      {postList.map((post) =>( 
        <Post key={post.id} post={post} />))}
    </>
  );
};

export default PostList;
