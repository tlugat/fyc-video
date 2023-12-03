import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";

function App() {
	return (
		<Canvas shadowMap>
			<ambientLight intensity={1} />
			<directionalLight intensity={10} castShadow/>
			{/* <pointLight position={[0, 5, 0]} intensity={10} castShadow/> */}
			{/* <spotLight position={[0, 10, 0]} intensity={10} castShadow/> */}
			<Box position={[0, 0, 0]} />
			<Box position={[3, 0, 0]} />
			<Box position={[6, 0, 0]} />
			<OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
		</Canvas>
	);
}

export default App;
