const Sphere = (props) => {
	return (
		<mesh {...props}>
			<sphereGeometry args={[1, 32, 32]} />
			<meshBasicMaterial color="red" />
		</mesh>
	);
};

export default Sphere;
