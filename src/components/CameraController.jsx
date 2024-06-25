import { useFrame, useThree } from "@react-three/fiber";
import {
	usePlanetPositions,
	useSelectedPlanetPosition,
} from "../contexts/PlanetPositionsContext";
import * as THREE from "three";

const CameraController = () => {
	const [selectedPlanet] = useSelectedPlanetPosition();
	const [planetPositions] = usePlanetPositions();
	const { camera } = useThree();

	useFrame(() => {
		if (selectedPlanet && camera) {
			const planet = planetPositions.find((p) => p.name === selectedPlanet);
			if (planet && planet.position) {
				camera.position.lerp(
					new THREE.Vector3(
						planet.position.x,
						planet.position.y,
						planet.position.z + 10
					),
					0.1
				);
				camera.lookAt(planet.position);
			}
		}
	});

	return null;
};

export default CameraController;
