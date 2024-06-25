import Planet from "./Planet";
import * as THREE from "three";

const Jupiter = () => {
	const config = {
		name: "jupiter",
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
