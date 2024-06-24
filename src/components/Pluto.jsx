import Planet from "./Planet";
import * as THREE from "three";

const Pluto = () => {
  const data = {
    name: "Pluto",
    description:
      "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first Kuiper belt object to be discovered.",
    distanceFromSun: "5.91 billion km",
    temperature: "-225°C (average)",
    dayLength: "153.3 hours",
  };

  const config = {
    data,
    texturePath: "/textures/pluto.jpg",
    scale: [0.18, 0.18, 0.18],
    orbitalSpeed: 0.0002,
    distanceFromSun: 110,
    rotationAxis: new THREE.Vector3(0, 1, 0),
    rotationSpeed: 0.004,
  };

  return <Planet {...config} />;
};

export default Pluto;
