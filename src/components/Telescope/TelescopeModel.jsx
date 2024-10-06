import { Canvas } from '@react-three/fiber';
import TelescopeExperience from './TelescopeExperience';

export default function TelescopeModel() {
  return (
    <Canvas 
      camera={{
        fov: 75,
        near: 1,
        far: 100,
        position: [0, 0, 2000] 
      }}
     
    >
      <TelescopeExperience />
    </Canvas>
  );
}
