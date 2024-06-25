import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Sun from "./Sun";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";
import Pluto from "./Pluto";
import Loader from "./Loader";
import CameraController from "./CameraController";

const SolarSystemCanvas = () => {
	return (
		<Canvas camera={{ position: [100, 50, 120] }}>
			<CameraController />
			<Suspense fallback={<Loader />}>
				<ambientLight intensity={1.5} />
				<directionalLight position={[1, 10, 0]} intensity={3} />
				<pointLight
					position={[5, 5, 5]}
					intensity={2}
					distance={100}
					decay={2}
				/>
				<Sun />
				<Mercury />
				<Venus />
				<Earth />
				<Mars />
				<Jupiter />
				<Saturn />
				<Uranus />
				<Neptune />
				<Pluto />
				<OrbitControls />
				<Stars
					radius={100}
					depth={50}
					count={9000}
					factor={4}
					saturation={0}
					fade
				/>
			</Suspense>
		</Canvas>
	);
};

export default SolarSystemCanvas;
