import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { Html } from "@react-three/drei";
import OrbitPath from "./OrbitPath";
import { usePlanet } from "../contexts/PlanetContext";

const Planet = ({
  data,
  texturePath,
  scale,
  orbitalSpeed,
  ShaderMaterial, // Add ShaderMaterial as a prop
  distanceFromSun,
  rotationAxis = new THREE.Vector3(0, 1, 0),
  rotationSpeed = 0.01,
}) => {
  const planetRef = useRef();
  const orbitRef = useRef();
  const thetaRef = useRef(0);
  const [hovered, setHovered] = useState(false);
  const [_, setPlanet] = usePlanet();
  const texture = useLoader(TextureLoader, texturePath);

  useFrame(({ mouse }) => {
    if (orbitRef.current && !hovered) {
      thetaRef.current += orbitalSpeed;
      orbitRef.current.position.x =
        distanceFromSun * Math.cos(thetaRef.current);
      orbitRef.current.position.z =
        distanceFromSun * Math.sin(thetaRef.current);
    }

    if (planetRef.current) {
      planetRef.current.rotateOnAxis(rotationAxis, rotationSpeed);
    }

    if (hovered) {
      const x = (mouse.x * window.innerWidth) / 2 + window.innerWidth / 2;
      const y = -(mouse.y * window.innerHeight) / 2 + window.innerHeight / 2;
    }
  });

  const onPointerOver = () => {
    setHovered(true);
    setPlanet(data);
  };

  const onPointerOut = () => {
    setHovered(false);
    setPlanet(null);
  };

  return (
    <>
      <OrbitPath distanceFromSun={distanceFromSun} />
      <group ref={orbitRef}>
        <mesh
          ref={planetRef}
          scale={
            hovered ? [scale[0] * 1.2, scale[1] * 1.2, scale[2] * 1.2] : scale
          }
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial map={texture} />
          <pointLight intensity={0.5} distance={50} decay={2} />
        </mesh>
      </group>
    </>
  );
};

export default Planet;
