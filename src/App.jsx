import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Sphere from "./components/Sphere";
import Cylinder from "./components/Cylinder";

function App() {
	return (
		<Canvas>
			<Box position={[0, 0, 0]} />
			<Sphere position={[2, 0, 0]} />
			<Cylinder position={[-2, 0, 0]} />
		</Canvas>
	);
}

export default App;
