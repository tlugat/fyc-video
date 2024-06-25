import { useRef } from "react";
import Planet from "./Planet";
import Moon from "./Moon";
import * as THREE from "three";

const Earth = () => {
	const config = {
		name: "earth",
		texturePath: "/textures/earth.jpg",
		scale: [1, 1, 1],
		orbitalSpeed: 0.002,
		distanceFromSun: 20,
		rotationAxis: new THREE.Vector3(0, 1, 0),
		rotationSpeed: 0.01,
	};

	const earthRef = useRef();

	return (
		<>
			<Planet {...config} />
			<Moon earthRef={earthRef} />
		</>
	);
};

export default Earth;
