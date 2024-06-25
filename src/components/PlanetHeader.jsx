import { TypeAnimation } from "react-type-animation";
import { usePlanet } from "../contexts/PlanetContext";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import SmallPlanet from "./SmallPlanet";
import { usePlanetData } from "../hooks/usePlanetData";

const PlanetHeader = () => {
	const [planet] = usePlanet();
	const data = usePlanetData(planet);

	if (!planet || !data) return null;

	return (
		<div className="header">
			<div className="header__info">
				<h1 className="header__title">{data.name}</h1>
				<TypeAnimation
					sequence={[data.description]}
					wrapper="span"
					cursor={true}
					className="header__description"
					speed={70}
				/>
				<p>
					<span className="header__label">Distance from Sun</span>:{" "}
					<span>{data.distanceFromSun}</span>
				</p>
				<p>
					<span className="header__label">Temperature:</span>{" "}
					<span>{data.temperature}</span>
				</p>
				<p>
					<span className="header__label">Day length:</span>{" "}
					<span>{data.dayLength}</span>
				</p>
			</div>
			<div className="planet-preview">
				<Canvas>
					<Suspense fallback={<Loader />}>
						<ambientLight intensity={1} />
						<pointLight position={[5, 5, 5]} intensity={2} />
						<SmallPlanet />
					</Suspense>
				</Canvas>
			</div>
		</div>
	);
};

export default PlanetHeader;
