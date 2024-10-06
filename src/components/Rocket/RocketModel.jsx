import { Canvas } from '@react-three/fiber';
import RocketExperience from './RocketExperience';

export default function RocketModel() {
  return (
    <Canvas 
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [0, 0.1, 0.5] 
      }}
     
    >
      <RocketExperience />
    </Canvas>
  );
}
