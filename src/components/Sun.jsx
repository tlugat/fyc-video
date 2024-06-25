import Planet from "./Planet";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";

const SunShaderMaterial = shaderMaterial(
	{
		uTime: 0,
		uTexture: new THREE.Texture(),
	},
	// Vertex Shader
	`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
	// Fragment Shader
	`
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      uv.y += uTime * 0.05; // Adjust speed of magma movement
      vec3 textureColor = texture2D(uTexture, uv).rgb;
      gl_FragColor = vec4(textureColor, 1.0);
    }
  `
);
const Sun = () => {
	const config = {
		name: "sun",
		texturePath: "/textures/sun.jpg",
		scale: [5, 5, 5],
		orbitalSpeed: 0,
		distanceFromSun: 0,
		rotationAxis: new THREE.Vector3(0, 1, 0),
		rotationSpeed: 0.001,
		ShaderMaterial: SunShaderMaterial,
	};

	return <Planet {...config} />;
};

export default Sun;
