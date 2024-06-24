import Planet from "./Planet";
import { SunShaderMaterial } from "../SunShaderMaterial";
import * as THREE from "three";

const Sun = () => {
  const data = {
    name: "Sun",
    description:
      "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, radiating energy primarily as visible light and heat.",
    distanceFromSun: "0 km",
    temperature: "5,500°C (surface)",
    dayLength: "N/A",
  };

  const config = {
    data,
    texturePath: "/textures/sun.jpg",
    scale: [5, 5, 5],
    orbitalSpeed: 0,
    distanceFromSun: 0,
    rotationAxis: new THREE.Vector3(0, 1, 0),
    rotationSpeed: 0.001,
    ShaderMaterial: SunShaderMaterial,
  };

  return <Planet {...config} />;
};

export default Sun;
