import * as THREE from "three";
import { extend } from "@react-three/fiber";
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

extend({ SunShaderMaterial });

export { SunShaderMaterial };
