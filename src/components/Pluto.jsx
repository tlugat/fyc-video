import Planet from "./Planet";
import * as THREE from "three";

const Pluto = () => {
	const config = {
		name: "pluto",
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
