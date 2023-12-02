import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Cylinder = (props) => {
	const colorMap = useLoader(TextureLoader, "textures/texture1.png");

	return (
		<mesh {...props}>
			<cylinderGeometry args={[1, 1, 1, 32]} />
			<meshBasicMaterial map={colorMap} />
		</mesh>
	);
};

export default Cylinder;
