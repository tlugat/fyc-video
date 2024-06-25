import Planet from "./Planet";
import * as THREE from "three";

const Saturn = () => {
	const config = {
		name: "saturn",
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
