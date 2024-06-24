import { useRef } from "react";
import Planet from "./Planet";
import Moon from "./Moon";
import * as THREE from "three";

const Earth = () => {
	const data = {
		name: "Earth",
		description:
			"Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is water-covered.",
		distanceFromSun: "149.6 million km",
		temperature: "15°C (average)",
		dayLength: "24 hours",
	};

	const config = {
		data,
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
