import Planet from "./Planet";
import * as THREE from "three";

const Mercury = () => {
	const config = {
		name: "mercury",
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
