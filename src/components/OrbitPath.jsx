import { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const OrbitPath = ({ distanceFromSun }) => {
  const points = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 360; i++) {
      const rad = (i * Math.PI) / 180;
      points.push(
        new THREE.Vector3(
          Math.cos(rad) * distanceFromSun,
          0,
          Math.sin(rad) * distanceFromSun
        )
      );
    }
    return points;
  }, [distanceFromSun]);

  return <Line points={points} color="white" position={[0, 0, 0]} />;
};

export default OrbitPath;
