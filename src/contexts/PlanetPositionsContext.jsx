import { createContext, useContext, useState } from "react";

const PlanetPositionsContext = createContext();
const SelectedPlanetPosition = createContext();

const initialState = [
	{ name: "sun", position: null },
	{ name: "mercury", position: null },
	{ name: "venus", position: null },
	{ name: "earth", position: null },
	{ name: "mars", position: null },
	{ name: "jupiter", position: null },
	{ name: "saturn", position: null },
	{ name: "uranus", position: null },
	{ name: "neptune", position: null },
	{ name: "pluto", position: null },
];

export const PlanetPositionsProvider = ({ children }) => {
	const planetPositions = useState(initialState);
	const selectedPlanetPosition = useState(null);

	return (
		<PlanetPositionsContext.Provider value={planetPositions}>
			<SelectedPlanetPosition.Provider value={selectedPlanetPosition}>
				{children}
			</SelectedPlanetPosition.Provider>
		</PlanetPositionsContext.Provider>
	);
};

export const usePlanetPositions = () => useContext(PlanetPositionsContext);
export const useSelectedPlanetPosition = () =>
	useContext(SelectedPlanetPosition);
