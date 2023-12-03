import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

const Moon = () => {
  const colorMap = useLoader(TextureLoader, "/textures/moon.jpg");
  const moonRef = useRef();
  let angle = 0;

  useFrame(() => {
    if (!moonRef.current) return;
    angle += 0.011;
    const distanceFromEarth = 5;
    moonRef.current.position.x = Math.cos(angle) * distanceFromEarth;
    moonRef.current.position.z = Math.sin(angle) * distanceFromEarth;
    moonRef.current.rotation.y += 0.013;
  });

  return (
    <mesh ref={moonRef} position={[0, 0, -10]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
export default Moon;
