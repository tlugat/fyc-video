/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { Html } from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const OrbitPath = ({ distanceFromSun }) => {
  const points = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 360; i++) {
      const rad = (i * Math.PI) / 180;
      points.push(
        new THREE.Vector3(
          Math.cos(rad) * distanceFromSun,
          0,
          Math.sin(rad) * distanceFromSun
        )
      );
    }
    return points;
  }, [distanceFromSun]);

  return <Line points={points} color="white" position={[0, 0, 0]} />;
};

const Planet = ({
  name,
  texturePath,
  scale,
  orbitalSpeed,
  distanceFromSun,
}) => {
  const planetRef = useRef();
  const orbitRef = useRef();
  const thetaRef = useRef(0); // Utiliser useRef pour maintenir la valeur de theta
  const [hovered, setHovered] = useState(false);

  const texture = useLoader(TextureLoader, texturePath);

  useFrame(() => {
    if (orbitRef.current) {
      thetaRef.current += orbitalSpeed; // Mettre à jour thetaRef.current
      orbitRef.current.position.x =
        distanceFromSun * Math.cos(thetaRef.current);
      orbitRef.current.position.z =
        distanceFromSun * Math.sin(thetaRef.current);
    }
  });
  const onPointerOver = () => {
    setHovered(true);
    console.log("Hovered over:", name); // Afficher le nom lors du survol
  };

  const onPointerOut = () => {
    setHovered(false);
    console.log("No longer hovered over:", name); // Afficher le nom lorsqu'on arrête de survoler
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
        </mesh>
        {hovered && (
          <Html position={[0, scale[0] * 1.5, 0]} transform occlude>
            <div
              style={{ color: "white", textAlign: "center", fontSize: "250px" }}
            >
              {name}
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

export const Sun = () => (
  <Planet
    name="Sun"
    texturePath="/textures/sun.jpg"
    scale={[5, 5, 5]}
    orbitalSpeed={0}
    distanceFromSun={0}
  />
);
export const Mercury = () => (
  <Planet
    name="Mercury"
    texturePath="/textures/mercury.jpg"
    scale={[0.5, 0.5, 0.5]}
    orbitalSpeed={0.004}
    distanceFromSun={8}
  />
);
export const Venus = () => (
  <Planet
    name="Venus"
    texturePath="/textures/venus.jpg"
    scale={[0.95, 0.95, 0.95]}
    orbitalSpeed={0.003}
    distanceFromSun={14}
  />
);
export const Earth = () => (
  <Planet
    name="Earth"
    texturePath="/textures/earth.jpg"
    scale={[1, 1, 1]}
    orbitalSpeed={0.002}
    distanceFromSun={20}
  />
);
export const Mars = () => (
  <Planet
    name="Mars"
    texturePath="/textures/mars.jpg"
    scale={[0.53, 0.53, 0.53]}
    orbitalSpeed={0.0018}
    distanceFromSun={30}
  />
);
export const Jupiter = () => (
  <Planet
    name="Jupiter"
    texturePath="/textures/jupiter.jpg"
    scale={[2.5, 2.5, 2.5]}
    orbitalSpeed={0.001}
    distanceFromSun={40}
  />
);
export const Saturn = () => (
  <Planet
    name="Saturn"
    texturePath="/textures/saturn.jpg"
    scale={[2.1, 2.1, 2.1]}
    orbitalSpeed={0.0009}
    distanceFromSun={60}
  />
);
export const Uranus = () => (
  <Planet
    name="Uranus"
    texturePath="/textures/uranus.jpg"
    scale={[1.8, 1.8, 1.8]}
    orbitalSpeed={0.0004}
    distanceFromSun={80}
  />
);
export const Neptune = () => (
  <Planet
    name="Neptune"
    texturePath="/textures/neptune.jpg"
    scale={[1.6, 1.6, 1.6]}
    orbitalSpeed={0.0003}
    distanceFromSun={100}
  />
);
export const Pluto = () => (
  <Planet
    name="Pluto"
    texturePath="/textures/pluto.jpg"
    scale={[0.18, 0.18, 0.18]}
    orbitalSpeed={0.0002}
    distanceFromSun={110}
  />
);

const moonOrbitalSpeed = 0.01;
export const Moon = () => {
  const moonRef = useRef();
  let moonTheta = 0;

  // Chargez la texture de la Lune en utilisant useLoader
  const texture = useLoader(TextureLoader, "/textures/moon.jpg");

  useFrame(() => {
    if (moonRef.current) {
      moonTheta += moonOrbitalSpeed;
      moonRef.current.position.x = 2 * Math.cos(moonTheta);
      moonRef.current.position.z = 2 * Math.sin(moonTheta);
    }
  });

  return (
    <group ref={moonRef}>
      <mesh position={[0, 0, 0]} scale={[0.27, 0.27, 0.27]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
};

export default {
  Sun,
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
  Pluto,
  Moon,
};
