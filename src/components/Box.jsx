const Box = (props) => {
	return (
		<mesh {...props}>
			<boxGeometry />
			<meshBasicMaterial color="yellow" />
		</mesh>
	);
};

export default Box;
