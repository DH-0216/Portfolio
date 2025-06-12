import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  BufferGeometry,
  BufferAttribute,
  Float32BufferAttribute,
  AdditiveBlending,
} from "three";

const Particles = ({ count = 100 }) => {
  const mesh = useRef();
  const lines = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
        ],
        velocity: [
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01,
        ],
      });
    }
    return temp;
  }, [count]);

  const particleGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    const positions = new Float32Array(count * 3);

    particles.forEach((particle, i) => {
      positions[i * 3] = particle.position[0];
      positions[i * 3 + 1] = particle.position[1];
      positions[i * 3 + 2] = particle.position[2];
    });

    geometry.setAttribute("position", new BufferAttribute(positions, 3));
    return geometry;
  }, [particles, count]);

  useFrame(() => {
    if (!mesh.current || !lines.current) return;

    const positions = mesh.current.geometry.attributes.position.array;
    const linePositions = [];
    const lineColors = [];

    particles.forEach((particle, i) => {
      particle.position[0] += particle.velocity[0];
      particle.position[1] += particle.velocity[1];
      particle.position[2] += particle.velocity[2];

      if (particle.position[0] > 10 || particle.position[0] < -10) {
        particle.velocity[0] *= -1;
      }
      if (particle.position[1] > 10 || particle.position[1] < -10) {
        particle.velocity[1] *= -1;
      }
      if (particle.position[2] > 5 || particle.position[2] < -5) {
        particle.velocity[2] *= -1;
      }

      positions[i * 3] = particle.position[0];
      positions[i * 3 + 1] = particle.position[1];
      positions[i * 3 + 2] = particle.position[2];
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].position[0] - particles[j].position[0];
        const dy = particles[i].position[1] - particles[j].position[1];
        const dz = particles[i].position[2] - particles[j].position[2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 4) {
          linePositions.push(
            particles[i].position[0],
            particles[i].position[1],
            particles[i].position[2],
            particles[j].position[0],
            particles[j].position[1],
            particles[j].position[2]
          );

          const alpha = 1 - distance / 4;
          lineColors.push(0.5, 0.8, 1, alpha, 0.5, 0.8, 1, alpha);
        }
      }
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;

    if (linePositions.length > 0) {
      lines.current.geometry.setAttribute(
        "position",
        new Float32BufferAttribute(linePositions, 3)
      );
      lines.current.geometry.setAttribute(
        "color",
        new Float32BufferAttribute(lineColors, 4)
      );
    } else {
      lines.current.geometry.setAttribute(
        "position",
        new Float32BufferAttribute([], 3)
      );
      lines.current.geometry.setAttribute(
        "color",
        new Float32BufferAttribute([], 4)
      );
    }
  });

  return (
    <group>
      <points ref={mesh} geometry={particleGeometry}>
        <pointsMaterial
          color="#4fc3f7"
          size={0.1}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
        />
      </points>

      <lineSegments ref={lines}>
        <bufferGeometry />
        <lineBasicMaterial
          transparent={true}
          vertexColors={true}
          blending={AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

const ParticleBackground = ({ count = 100 }) => {
  return (
    <div className="w-full h-screen bg-transparent relative overflow-hidden">
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Particles count={count} />
      </Canvas>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 opacity-90">
            Particle Network
          </h1>
          <p className="text-xl opacity-70 max-w-2xl mx-auto px-4">
            Interactive particle system with connecting lines built using React
            Three Fiber
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParticleBackground;
