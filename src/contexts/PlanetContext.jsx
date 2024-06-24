import { createContext, useState, useContext } from "react";

const PlanetContext = createContext(null);

const PlanetProvider = ({ children }) => {
	const planetState = useState(null);

	return (
		<PlanetContext.Provider value={planetState}>
			{children}
		</PlanetContext.Provider>
	);
};

export const usePlanet = () => {
	const context = useContext(PlanetContext);
	if (context === undefined) {
		throw new Error("usePlanet must be used within a PlanetProvider");
	}
	return context;
};

export { PlanetContext, PlanetProvider };
