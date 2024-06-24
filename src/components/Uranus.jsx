import Planet from "./Planet";
import * as THREE from "three";

const Uranus = () => {
  const data = {
    name: "Uranus",
    description:
      "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    distanceFromSun: "2.87 billion km",
    temperature: "-195°C (average)",
    dayLength: "17.2 hours",
  };

  const config = {
    data,
    texturePath: "/textures/uranus.jpg",
    scale: [1.8, 1.8, 1.8],
    orbitalSpeed: 0.0004,
    distanceFromSun: 80,
    rotationAxis: new THREE.Vector3(1, 0, 0),
    rotationSpeed: 0.012,
  };

  return <Planet {...config} />;
};

export default Uranus;
