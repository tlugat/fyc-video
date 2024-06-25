import Planet from "./Planet";
import * as THREE from "three";

const Uranus = () => {
	const config = {
		name: "uranus",
		texturePath: "/textures/uranus.jpg",
		scale: [1.8, 1.8, 1.8],
		orbitalSpeed: 0.0004,
		distanceFromSun: 80,
		rotationAxis: new THREE.Vector3(1, 0, 0),
		rotationSpeed: 0.012,
	};

	return <Planet {...config} />;
};

export default Uranus;
