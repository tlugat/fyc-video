import Planet from "./Planet";
import * as THREE from "three";

const Neptune = () => {
	const config = {
		name: "neptune",
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
