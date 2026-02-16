export default function About() {
    return (
      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          padding: "40px",
          backgroundColor: "gray",
          borderRadius: "50px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          color:"white"
        }}
      >
        <h1>About Page</h1>
        <p>
          Sports Tracer about page. For the people by the people! Covering sport
          updates and analysis.
        </p>
  
        <h2 style={{ marginTop: "30px" }}>Team</h2>
  
        <ul>
          <li>
            <strong>John Pork</strong>
            <ul>
              <li>Joined the little leagues for the Oregon Colts</li>
              <li>MVP in the nation and awarded with the Hay Day Mud</li>
            </ul>
          </li>
  
          <li style={{ marginTop: "15px" }}>
            <strong>Tom Jones</strong>
            <ul>
              <li>Youtube influencer with 7 million followers</li>
              <li>Planned the Make Your Mark for the Water Foundation in Greece</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
  