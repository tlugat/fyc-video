import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";

function App() {
	return (
		<Canvas>
			<Box position={[0, 0, 0]} color="green" />
			<Box position={[2, 0, -5]} color="blue" />
			<OrbitControls />
		</Canvas>
	);
}

export default App;
