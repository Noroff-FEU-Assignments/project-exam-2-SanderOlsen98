import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_BASE_URL}wp/v2/posts?_embed`;
    axios.get(url).then((res) => {
      setPosts(res.data);
    });
  }, []);
  console.log("posts", posts);

  return (
    <>
      <div className="w-4/5 py-10 m-auto flex justify-between align-middle flex-wrap gap-10">
        {posts &&
          posts.map((post) => {
            console.log("post", post);
            return (
              <div
                key={post.id}
                className="card p-3 w-[330px] shadow-lg rounded-lg flex gap-5 flex-col"
              >
                <img
                  // src={
                  //   // fetch featured image from wp featured media from json

                  // }
                  alt={post.title.rendered}
                />
                <h2 className="text-lg font-bold">{post.title.rendered}</h2>
                <p
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></p>
                <p>Last Modified: {post.modified}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Posts;
