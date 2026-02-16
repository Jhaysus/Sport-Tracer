import { useState } from "react";

export default function Home() {
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
    <div style={{ width: "400px", marginLeft: "55vh auto", textAlign:"center", padding: "50px"}}>

      
      {/* Welcome Header */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <h1>Welcome to My Sports Blog</h1>
        <small>{new Date().toLocaleDateString()}</small>
        <p style={{ marginTop: "8px", color: "#555" }}>
          Latest updates, match highlights, and player analysis.
        </p>
      </div>

      {/* Post Form */}
      <form onSubmit={addPost} style={{ marginBottom: 30 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post..."
          style={{ width: "100%", padding: 10, height: 100 }}
        />
        <button style={{ padding: "10px 20px", marginTop: 10 }}>
          Publish
        </button>
      </form>

      {/* Blog Posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ddd",
            padding: 20,
            marginBottom: 20,
            borderRadius: 8,
          }}
        >
          <h2>{post.title}</h2>
          <small>{post.date}</small>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
