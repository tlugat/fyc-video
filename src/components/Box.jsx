const Box = (props) => {
	return (
		<mesh {...props}>
			<boxGeometry />
			<meshStandardMaterial color="blue" />
		</mesh>
	);
};

export default Box;
