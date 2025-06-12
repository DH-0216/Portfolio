// src/components/Home3D.jsx
import React from "react";
import Scene3D from "./Scene3D"; // or create a custom 3D scene just for Home

const Home3D = () => {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
      <Scene3D />
    </div>
  );
};

export default Home3D;
