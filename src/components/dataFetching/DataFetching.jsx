import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext, UsersContext } from "../../App";

export default function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const userContext = useContext(UserContext);
  const usersContext = useContext(UsersContext);
  useEffect(() => {
    if (id != "") {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPosts("");
    }
  }, [id]);
  return (
    <div className="mx-auto flex w-1/3 flex-col content-center justify-center ">
      <h3 className="mx-auto text-2xl">
        Data Fetching {userContext}-{usersContext}
      </h3>
      <input
        className="border-2 border-solid border-sky-500"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <div className="mx-auto">{posts.title}</div>
    </div>
  );
}
