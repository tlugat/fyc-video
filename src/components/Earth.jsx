import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
const Earth = () => {
  const colorMap = useLoader(TextureLoader, "/textures/earth_night.jpg");
  const eartRef = useRef();

  useFrame(() => {
    eartRef.current.rotation.y += 0.001;
  });
  return (
    <mesh ref={eartRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};
export default Earth;
