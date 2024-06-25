import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import OrbitPath from "./OrbitPath";
import { usePlanet } from "../contexts/PlanetContext";
import { usePlanetPositions } from "../contexts/PlanetPositionsContext";

const Planet = ({
	name,
	texturePath,
	scale,
	orbitalSpeed,
	distanceFromSun,
	rotationAxis = new THREE.Vector3(0, 1, 0),
	rotationSpeed = 0.01,
}) => {
	const planetRef = useRef();
	const orbitRef = useRef();
	const thetaRef = useRef(0);
	const [hovered, setHovered] = useState(false);
	const [_, setPlanet] = usePlanet();
	const [__, setPlanetPosition] = usePlanetPositions();
	const texture = useLoader(TextureLoader, texturePath);

	useFrame(() => {
		if (orbitRef.current && !hovered) {
			thetaRef.current += orbitalSpeed;
			orbitRef.current.position.x =
				distanceFromSun * Math.cos(thetaRef.current);
			orbitRef.current.position.z =
				distanceFromSun * Math.sin(thetaRef.current);
		}

		if (planetRef.current) {
			planetRef.current.rotateOnAxis(rotationAxis, rotationSpeed);
			handleSetPosition(orbitRef.current.position);
		}
	});

	const handleSetPosition = (position) => {
		setPlanetPosition((positions) =>
			positions.map((planet) => {
				if (planet.name === name) {
					return { ...planet, position };
				}
				return planet;
			})
		);
	};

	const onPointerOver = () => {
		setHovered(true);
		setPlanet(name);
	};

	const onPointerOut = () => {
		setHovered(false);
		setPlanet(null);
	};

	return (
		<>
			<OrbitPath distanceFromSun={distanceFromSun} />
			<group ref={orbitRef}>
				<mesh
					ref={planetRef}
					scale={
						hovered ? [scale[0] * 1.2, scale[1] * 1.2, scale[2] * 1.2] : scale
					}
					onPointerOver={onPointerOver}
					onPointerOut={onPointerOut}
				>
					<sphereGeometry args={[1, 32, 32]} />
					<meshStandardMaterial map={texture} />
					<pointLight intensity={0.5} distance={50} decay={2} />
				</mesh>
			</group>
		</>
	);
};

export default Planet;
