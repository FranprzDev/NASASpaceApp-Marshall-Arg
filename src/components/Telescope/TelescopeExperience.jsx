import { Center, Environment, OrbitControls } from "@react-three/drei";
import Telescope from "./Telescope.jsx";

export default function TelescopeExperience() {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
      <Center>
        <group receiveShadow>
          <Telescope />
        </group>
      </Center>
    </>
  );
}
