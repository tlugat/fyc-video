import { usePlanet } from "../contexts/PlanetContext";
import {
	usePlanetPositions,
	useSelectedPlanetPosition,
} from "../contexts/PlanetPositionsContext";

const PlanetsPanel = () => {
	const [_, setPlanet] = usePlanet();
	const [planets] = usePlanetPositions();
	const [selectedPlanet, setSelectedPlanetPosition] =
		useSelectedPlanetPosition();

	const handleSelectPlanet = (planetName) => {
		if (selectedPlanet === planetName) {
			setPlanet(null);
			setSelectedPlanetPosition(null);
			return;
		}
		setPlanet(planetName);
		setSelectedPlanetPosition(planetName);
	};

	return (
		<div className="panel">
			<ul className="panel__list">
				{planets.map((planet) => (
					<li
						className={`${
							selectedPlanet === planet.name
								? "panel__item panel__item--active"
								: "panel__item"
						}`}
						key={planet.name}
						onClick={() => handleSelectPlanet(planet.name)}
					>
						{planet.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PlanetsPanel;
