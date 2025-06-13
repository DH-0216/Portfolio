// components/Home3D.jsx

import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";

const Home3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 55 }}
      style={{ width: "100%", height: "100vh", background: "transparent" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 2]} intensity={1} />

      {/* Background stars */}
      <Stars radius={80} depth={40} count={1500} factor={3.5} fade />

      

      {/* Controls */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
    </Canvas>
  );
};

export default Home3D;
