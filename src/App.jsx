import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Sun from "./components/Sun";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Earth from "./components/Earth";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import Neptune from "./components/Neptune";
import Pluto from "./components/Pluto";
import { PlanetProvider } from "./contexts/PlanetContext";
import PlanetHeader from "./components/PlanetHeader";
import "./styles.css";

function App() {
  return (
    <PlanetProvider>
      <PlanetHeader />
      <Canvas camera={{ position: [100, 50, 120] }}>
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
      </Canvas>
    </PlanetProvider>
  );
}

export default App;
