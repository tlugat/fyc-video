import { Stars, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Earth from "./components/Earth";
import Moon from "./components/Moon";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 10, 0]} intensity={3} />
      <pointLight
        position={[5, 5, 5]}
        intensity={1.5}
        distance={100}
        decay={2}
      />
      <Moon />
      <Earth />
      <Stars
        radius={100}
        depth={50}
        count={9000}
        factor={4}
        saturation={0}
        fade
      />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
