import { Canvas } from '@react-three/fiber';
import PawPatrolExperience from './PawPatrolExperience';

export default function PawPatrolModel({ name }) {
  return (
    <Canvas 
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [0, -1, 5] 
      }}
    >
      <PawPatrolExperience name={name} />
    </Canvas>
  );
}
