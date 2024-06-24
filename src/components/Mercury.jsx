import Planet from "./Planet";
import * as THREE from "three";

const Mercury = () => {
  const data = {
    name: "Mercury",
    description:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System.",
    distanceFromSun: "57.9 million km",
    temperature: "167°C (average)",
    dayLength: "58.6 Earth days",
  };

  const config = {
    data,
    texturePath: "/textures/mercury.jpg",
    scale: [0.5, 0.5, 0.5],
    orbitalSpeed: 0.004,
    distanceFromSun: 8,
    rotationAxis: new THREE.Vector3(0, 1, 0),
    rotationSpeed: 0.0001,
  };

  return <Planet {...config} />;
};

export default Mercury;
