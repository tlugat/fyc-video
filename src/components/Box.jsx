const Box = ({ color, ...props }) => {
	return (
		<mesh {...props}>
			<boxGeometry />
			<meshBasicMaterial color={color} />
		</mesh>
	);
};

export default Box;
