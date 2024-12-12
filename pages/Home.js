import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Home.css";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchPosts();
  }, []);

  return (
    <div className="home">
      <h2>Home</h2>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h4>{post.username}</h4>
          <img src={post.imageUrl} alt="Post" />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;