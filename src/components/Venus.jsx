import Planet from "./Planet";
import * as THREE from "three";

const Venus = () => {
	const config = {
		name: "venus",
		texturePath: "/textures/venus.jpg",
		scale: [0.95, 0.95, 0.95],
		orbitalSpeed: 0.003,
		distanceFromSun: 14,
		rotationAxis: new THREE.Vector3(0, -1, 0),
		rotationSpeed: 0.0001,
	};

	return <Planet {...config} />;
};
export default Venus;
