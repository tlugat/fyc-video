import { TypeAnimation } from "react-type-animation";
import { usePlanet } from "../contexts/PlanetContext";

const PlanetHeader = () => {
	const [planet] = usePlanet();

	if (!planet) return null;

	return (
		<div className="header">
			<h1 className="header__title">{planet.name}</h1>
			<TypeAnimation
				sequence={[planet.description]}
				wrapper="span"
				cursor={true}
				className="header__description"
				speed={70}
			/>
			<p>
				<span className="header__label">Distance from Sun</span>:{" "}
				<span className=" typewriter">{planet.distanceFromSun}</span>
			</p>
			<p>
				<span className="header__label">Temperature:</span>{" "}
				<span className=" typewriter">{planet.temperature}</span>
			</p>
			<p>
				<span className="header__label">Day length:</span>{" "}
				<span className=" typewriter">{planet.dayLength}</span>
			</p>
		</div>
	);
};

export default PlanetHeader;
