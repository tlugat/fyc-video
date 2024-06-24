import Planet from "./Planet";
import * as THREE from "three";

const Neptune = () => {
  const data = {
    name: "Neptune",
    description:
      "Neptune is the eighth and farthest-known planet from the Sun in the Solar System. It is the fourth-largest planet by diameter and the third-largest by mass.",
    distanceFromSun: "4.50 billion km",
    temperature: "-200°C (average)",
    dayLength: "16.1 hours",
  };
  const config = {
    data,
    texturePath: "/textures/neptune.jpg",
    scale: [1.6, 1.6, 1.6],
    orbitalSpeed: 0.0003,
    distanceFromSun: 100,
    rotationAxis: new THREE.Vector3(0, 1, 0),
    rotationSpeed: 0.01,
  };

  return <Planet {...config} />;
};

export default Neptune;
