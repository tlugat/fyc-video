import Planet from "./Planet";
import * as THREE from "three";

const Jupiter = () => {
  const data = {
    name: "Jupiter",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun but two and a half times that of all the other planets in the Solar System combined.",
    distanceFromSun: "778.5 million km",
    temperature: "-110°C (average)",
    dayLength: "9.9 hours",
  };

  const config = {
    data,
    texturePath: "/textures/jupiter.jpg",
    scale: [2.5, 2.5, 2.5],
    orbitalSpeed: 0.001,
    distanceFromSun: 40,
    rotationAxis: new THREE.Vector3(0, 1, 0),
    rotationSpeed: 0.02,
  };

  return <Planet {...config} />;
};

export default Jupiter;
