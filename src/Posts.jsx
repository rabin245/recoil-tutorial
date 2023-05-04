import { useRecoilState } from "recoil";
import { posts } from "./store";
import { Link } from "react-router-dom";

const Posts = () => {
  const [postsList, setPostsList] = useRecoilState(posts);

  const handleAdd = () => {
    setPostsList((prev) => [
      ...prev,
      { id: 100, title: "title", body: "body" },
    ]);
  };

  console.log(postsList);

  return (
    <div>
      <Link to="/">home</Link>
      posts
      <div>
        {postsList.map((p, index) => (
          <div key={index}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
      <button onClick={handleAdd}>addpost</button>
    </div>
  );
};

export default Posts;
