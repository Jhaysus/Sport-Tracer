import { useState } from "react";


export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to My Sports Blog",
      content: "Latest updates, match highlights, and player analysis.",
      date: new Date().toLocaleDateString(),
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function addPost(e) {
    e.preventDefault();
    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  }

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", fontFamily: "Arial" }}>
      {/* hero header */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <h1>Welcome to My Sports Blog</h1>
        <small>{new Date().toLocaleDateString()}</small>
        <p style={{ marginTop: "8px", color: "#555" }}>
          Latest updates, match highlights, and player analysis.
        </p>
      </div>

      {isAdmin ? (
        <form onSubmit={addPost} style={{ marginBottom: 30 }}>
          {/* inputs */}
        </form>
      ) : (
        <p style={{ color: "#777", marginBottom: 30, justifyContent:"center", marginLeft:"10px"}}>
          Sign in as an Admin to publish posts.
        </p>
      )}

      {/* posts rendering */}
    </div>
  );
}
