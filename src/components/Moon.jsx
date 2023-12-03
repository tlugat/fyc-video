import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Moon = () => {
  const colorMap = useLoader(TextureLoader, "/textures/moon.jpg");
  const moonRef = useRef();
  let angle = 0;

  useFrame(() => {
    if (!moonRef.current) return;

    angle += 0.001;
    const distanceFromEarth = 5;

    moonRef.current.rotation.y += 0.005;
    moonRef.current.position.x = Math.cos(angle) * distanceFromEarth;
    moonRef.current.position.z = Math.sin(angle) * distanceFromEarth;
  });

  return (
    <mesh ref={moonRef} position={[5, 0, 0]}>
      <sphereGeometry args={[1 / 3, 32, 32]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

export default Moon;
