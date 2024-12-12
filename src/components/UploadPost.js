import React, { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function UploadPost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleUpload = async () => {
    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "posts"), {
        caption,
        imageUrl,
        username: "testUser", // Replace with logged-in username
      });
      alert("Post uploaded!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadPost;