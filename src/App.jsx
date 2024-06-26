import { PlanetProvider } from "./contexts/PlanetContext";
import PlanetHeader from "./components/PlanetHeader";
import "./styles.css";
import { PlanetPositionsProvider } from "./contexts/PlanetPositionsContext";
import SolarSystemCanvas from "./components/SolarSystemCanvas";
import PlanetsPanel from "./components/PlanetsPanel";
import spaceAudio from "../public/audio/space.mp3";

function App() {
	return (
		<PlanetPositionsProvider>
			<PlanetProvider>
				<audio autoPlay loop hidden>
					<source src={spaceAudio} type="audio/mpeg" />
				</audio>
				<PlanetHeader />
				<SolarSystemCanvas />
				<PlanetsPanel />
			</PlanetProvider>
		</PlanetPositionsProvider>
	);
}

export default App;
