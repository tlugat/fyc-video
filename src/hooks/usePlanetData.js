export const usePlanetData = (name) => {
	const dataLookup = {
		sun: {
			name: "Sun",
			description:
				"The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, radiating energy primarily as visible light and heat.",
			distanceFromSun: "0 km",
			temperature: "5,500°C (surface)",
			dayLength: "N/A",
			texturePath: "/textures/sun.jpg",
		},
		earth: {
			name: "Earth",
			description:
				"Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is water-covered.",
			distanceFromSun: "149.6 million km",
			temperature: "15°C (average)",
			dayLength: "24 hours",
			texturePath: "/textures/earth.jpg",
		},
		mars: {
			name: "Mars",
			description:
				"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. It is often referred to as the 'Red Planet' because of its reddish appearance.",
			distanceFromSun: "227.9 million km",
			temperature: "-65°C (average)",
			dayLength: "24.6 hours",
			texturePath: "/textures/mars.jpg",
		},
		pluto: {
			name: "Pluto",
			description:
				"Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first Kuiper belt object to be discovered.",
			distanceFromSun: "5.91 billion km",
			temperature: "-225°C (average)",
			dayLength: "153.3 hours",
			texturePath: "/textures/pluto.jpg",
		},
		saturn: {
			name: "Saturn",
			description:
				"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.",
			distanceFromSun: "1.4 billion km",
			temperature: "-178°C (average)",
			dayLength: "10.7 hours",
			texturePath: "/textures/saturn.jpg",
		},
		venus: {
			name: "Venus",
			description:
				"Venus is the second planet from the Sun. It has a similar size, mass, and composition to Earth, and is often described as Earth's 'sister planet'.",
			distanceFromSun: "108.2 million km",
			temperature: "465°C (average)",
			dayLength: "5,832 hours",
			texturePath: "/textures/venus.jpg",
		},
		neptune: {
			name: "Neptune",
			description:
				"Neptune is the eighth and farthest known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
			distanceFromSun: "4.5 billion km",
			temperature: "-201°C (average)",
			dayLength: "16 hours",
			texturePath: "/textures/neptune.jpg",
		},
		jupiter: {
			name: "Jupiter",
			description:
				"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
			distanceFromSun: "778.5 million km",
			temperature: "-145°C (average)",
			dayLength: "9.9 hours",
			texturePath: "/textures/jupiter.jpg",
		},
		mercury: {
			name: "Mercury",
			description:
				"Mercury is the smallest and innermost planet in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.",
			distanceFromSun: "57.9 million km",
			temperature: "430°C (average)",
			dayLength: "1,408 hours",
			texturePath: "/textures/mercury.jpg",
		},
		uranus: {
			name: "Uranus",
			description:
				"Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
			distanceFromSun: "2.9 billion km",
			temperature: "-197°C (average)",
			dayLength: "17 hours",
			texturePath: "/textures/uranus.jpg",
		},
	};

	if (!dataLookup?.[name]) return;

	return dataLookup[name];
};
