import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete onClick={() => deletePost(post.id)} />
            <span className="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary m-1">{tag}</span>
          ))}
          <div className="alert alert-success mt-2" role="alert">
            {/* rections not working than chenged into a views in data rection devides in two pars thats why... */}
            This post has reached by {post.views} people.
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
