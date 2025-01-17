import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import githubLogo from "./assets/github-mark-white.svg";
import linkedinLogo from "./assets/linkedin.svg";

function Star(props) {
  const ref = useRef();
  useFrame((state, delta) => {
    // Rotate the star
    ref.current.rotation.y += delta * 0.1;

    // Move the star towards the camera
    ref.current.position.z += delta * 50;

    // Reset star position when it gets too close to the camera
    if (ref.current.position.z > 500) {
      ref.current.position.z = -500;
    }
  });
  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        emissive="yellow"
        emissiveIntensity={1}
        attach="material"
        color={0xffff00}
      />
    </mesh>
  );
}

function generateStarsThatMove(count, radius) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      position: [
        Math.random() * radius - radius / 2,
        Math.random() * radius - radius / 2,
        Math.random() * radius - radius / 2,
      ],
    });
  }
  return arr;
}

function Stars() {
  const [stars] = useState(() => generateStarsThatMove(2000, 1000));
  return (
    <>
      {stars.map((star, i) => (
        <Star key={i} position={star.position} />
      ))}
    </>
  );
}

export default function App() {
  return (
    <div className="night-sky">
      <div className="details">
        <h1 className="title">Ioannis Mertzanis</h1>
        <h2 className="subtitle">Attorney At Law</h2>
        <h3 className="subsubtitle">Athens, Greece</h3>
        <div className="social">
          <a href="https://github.com/imertz" target="_blank" rel="noreferrer">
            <img src={githubLogo} className="logo react" alt="Github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/ioannis-mertzanis-6ba211267/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinLogo}
              className="logo react"
              alt="LinkedIn logo"
            />
          </a>
        </div>
        <div className="social">
          <a href="mailto:ioannis@mertzanis.gr" className="mail">
            ioannis@mertzanis.gr
          </a>
        </div>
      </div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Stars />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
