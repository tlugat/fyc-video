import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

const Moon = ({ earthRef }) => {
	const data = {
		name: "Moon",
		description:
			"The Moon is Earth's only natural satellite and the fifth largest moon in the Solar System.",
		distanceFromEarth: "384,400 km",
		temperature: "-20°C (average)",
		dayLength: "27.3 days",
	};

	const config = {
		data,
		texturePath: "/textures/moon.jpg",
		scale: [0.27, 0.27, 0.27],
		orbitalSpeed: 0.01,
		distanceFromEarth: 5,
		rotationAxis: new THREE.Vector3(0, 1, 0),
		rotationSpeed: 0.01,
	};

	const moonRef = useRef();
	const thetaRef = useRef(0);
	const texture = useLoader(TextureLoader, config.texturePath);

	useFrame(() => {
		if (moonRef.current && earthRef.current) {
			thetaRef.current += config.orbitalSpeed;
			moonRef.current.position.x =
				earthRef.current.position.x +
				config.distanceFromEarth * Math.cos(thetaRef.current);
			moonRef.current.position.z =
				earthRef.current.position.z +
				config.distanceFromEarth * Math.sin(thetaRef.current);
		}
	});

	return (
		<mesh ref={moonRef} scale={config.scale}>
			<sphereGeometry args={[1, 32, 32]} />
			<meshStandardMaterial map={texture} />
		</mesh>
	);
};

export default Moon;
