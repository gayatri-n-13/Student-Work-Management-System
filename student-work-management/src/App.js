import React, { useState } from "react";

const HomePage = ({ onSignInClick }) => {
  return (
    <div style={{ backgroundColor: "#d6d2c4", minHeight: "100vh", fontFamily: "'Times New Roman', serif", color: "#000" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px", backgroundColor: "#e9e4d9" }}>
        <div style={{ color: "#a97b5d", fontWeight: "bold", fontSize: "18px" }}>UNIWORK</div>
        <div style={{ margin: "auto" }}>Home</div>
        <button
          onClick={onSignInClick}
          style={{
            backgroundColor: "#a97b5d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "8px 16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Sign In
        </button>
      </nav>

      <main style={{ padding: "80px 40px", maxWidth: "800px" }}>
        <h1 style={{ fontSize: "72px", fontWeight: "900" }}>UNIWORK</h1>
        <p style={{ color: "#a97b5d", fontSize: "20px", marginTop: "10px" }}>
          Connect talent with opportunity.
        </p>

        <p style={{ maxWidth: "500px", marginTop: "40px", lineHeight: 1.6 }}>
          Welcome to your all-in-one Work-Study Portal — where opportunities meet efficiency. Students can discover
          exciting job listings, apply with ease, and track progress every step of the way. Admins can post jobs, review
          applications, approve hours, and share feedback — all from one seamless dashboard. Fast. Transparent. Hassle-free.
        </p>

        <button
          style={{
            marginTop: "40px",
            backgroundColor: "#a97b5d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          Get Started <span>→</span>
        </button>
      </main>
    </div>
  );
};

const SignInPage = ({ onBackClick }) => {
  return (
    <div style={{ padding: "40px", fontFamily: "'Times New Roman', serif" }}>
      <h2>Sign In Page</h2>
      <p>This is a placeholder for the Sign In page.</p>
      <button onClick={onBackClick} style={{ marginTop: "20px" }}>
        Back
      </button>
    </div>
  );
};

const App = () => {
  const [page, setPage] = useState("home");

  return page === "home" ? <HomePage onSignInClick={() => setPage("signin")} /> : <SignInPage onBackClick={() => setPage("home")} />;
};

export default App;
