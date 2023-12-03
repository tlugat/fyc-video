import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import {
  Sun,
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
  Pluto,
} from "./components/planet";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 10, 0]} intensity={3} />
      <pointLight position={[5, 5, 5]} intensity={2} distance={100} decay={2} />
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
    </Canvas>
  );
}

export default App;
