import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.username}</h3>
          <img src={post.imageUrl} alt="Post" />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;