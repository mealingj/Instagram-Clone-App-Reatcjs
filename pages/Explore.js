import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Explore.css";

function Explore() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchPosts();
  }, []);

  return (
    <div className="explore">
      <h2>Explore</h2>
      <div className="explore-grid">
        {posts.map((post, index) => (
          <div key={index} className="explore-item">
            <img src={post.imageUrl} alt="Explore Post" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;