import Planet from "./Planet";
import * as THREE from "three";

const Mars = () => {
  const data = {
    name: "Mars",
    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. It is often referred to as the 'Red Planet' because of its reddish appearance.",
    distanceFromSun: "227.9 million km",
    temperature: "-65°C (average)",
    dayLength: "24.6 hours",
  };

  const config = {
    data,
    texturePath: "/textures/mars.jpg",
    scale: [0.53, 0.53, 0.53],
    orbitalSpeed: 0.0018,
    distanceFromSun: 30,
    rotationAxis: new THREE.Vector3(0, 1, 0),
    rotationSpeed: 0.008,
  };

  return <Planet {...config} />;
};

export default Mars;
