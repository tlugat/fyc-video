import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Earth = () => {
  const colorMap = useLoader(TextureLoader, "/textures/earth_night.jpg");
  const earthRef = useRef();

  useFrame(() => {
    earthRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={earthRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

export default Earth;
