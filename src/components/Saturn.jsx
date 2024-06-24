import Planet from "./Planet";
import * as THREE from "three";

const Saturn = () => {
  const data = {
    name: "Saturn",
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System. It is a gas giant with an average radius about nine times that of Earth.",
    distanceFromSun: "1.43 billion km",
    temperature: "-140°C (average)",
    dayLength: "10.7 hours",
  };

  const config = {
    data,
    texturePath: "/textures/saturn.jpg",
    scale: [2.1, 2.1, 2.1],
    orbitalSpeed: 0.0009,
    distanceFromSun: 60,
    rotationAxis: new THREE.Vector3(0, 1, 0),
    rotationSpeed: 0.018,
  };

  return <Planet {...config} />;
};

export default Saturn;
