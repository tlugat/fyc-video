import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { usePlanet } from "../contexts/PlanetContext";
import { usePlanetData } from "../hooks/usePlanetData";

const SmallPlanet = () => {
	const [planet] = usePlanet();
	const planetData = usePlanetData(planet);
	const planetRef = useRef();

	if (!planet) return null;

	const texture = useLoader(TextureLoader, planetData.texturePath);

	useFrame(() => {
		if (planetRef.current) {
			planetRef.current.rotation.y += 0.002;
		}
	});

	return (
		<mesh ref={planetRef} scale={[2.5, 2.5, 2.5]}>
			<sphereGeometry args={[1, 32, 32]} />
			<meshStandardMaterial map={texture} />
		</mesh>
	);
};

export default SmallPlanet;
