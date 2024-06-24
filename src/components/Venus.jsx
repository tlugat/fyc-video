import Planet from "./Planet";
import * as THREE from "three";

const Venus = () => {
  const data = {
    name: "Venus",
    description:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. Venus is the hottest planet in the Solar System.",
    distanceFromSun: "108.2 million km",
    temperature: "464°C (average)",
    dayLength: "243 Earth days",
  };

  const config = {
    data,
    texturePath: "/textures/venus.jpg",
    scale: [0.95, 0.95, 0.95],
    orbitalSpeed: 0.003,
    distanceFromSun: 14,
    rotationAxis: new THREE.Vector3(0, -1, 0),
    rotationSpeed: 0.0001,
  };

  return <Planet {...config} />;
};
export default Venus;
