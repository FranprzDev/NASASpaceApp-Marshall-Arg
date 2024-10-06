import { Center, Environment, OrbitControls } from "@react-three/drei";
import PawPatrolCharacterRocky from "./PawPatrolCharacterRocky.jsx";
import PawPatrolCharacterEverest from "./PawPatrolCharacterEverest.jsx";

export default function PawPatrolExperience({ name }) {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
      <directionalLight castShadow position={[1, 2, 3]} intensity={3.5} />
      <ambientLight intensity={0.5} />

      <Center>
        <group receiveShadow>
          {name == "everest" ? (
            <PawPatrolCharacterEverest />
          ) : (
            <PawPatrolCharacterRocky />
          )}
        </group>
      </Center>
    </>
  );
}
