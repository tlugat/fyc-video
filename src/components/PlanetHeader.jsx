import { usePlanet } from "../contexts/PlanetContext";

const PlanetHeader = () => {
  const [planet] = usePlanet();

  if (!planet) return null;

  return (
    <div className="header">
      <h1 className="title">{planet.name}</h1>
      <p>{planet.description}</p>
      <p>Distance from Sun: {planet.distanceFromSun}</p>
      <p>Temperature: {planet.temperature}</p>
      <p>Day length: {planet.dayLength}</p>
    </div>
  );
};

export default PlanetHeader;
