import Planet from "./Planet";
import * as THREE from "three";

const Mars = () => {
	const config = {
		name: "mars",
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
