import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./Profile.css";

function Profile() {
  const [posts, setPosts] = useState([]);
  const username = "testUser"; // Replace with logged-in user's username.

  useEffect(() => {
    const fetchUserPosts = async () => {
      const userPostsQuery = query(
        collection(db, "posts"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(userPostsQuery);
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchUserPosts();
  }, [username]);

  return (
    <div className="profile">
      <h2>{username}'s Profile</h2>
      <div className="profile-posts">
        {posts.map((post, index) => (
          <div key={index} className="profile-post">
            <img src={post.imageUrl} alt="Profile Post" />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;