import { Center, Environment, OrbitControls } from "@react-three/drei";

import Rocket from "./Rocket.jsx";

export default function RocketExperience() {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
      <Center>
        <group receiveShadow>
          <Rocket />
        </group>
      </Center>
    </>
  );
}
