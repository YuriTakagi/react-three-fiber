import { OrbitControls, Plane } from "@react-three/drei";
import { DoubleSide } from "three";

const Plane01 = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Plane args={[10, 10, 128, 128]}>
        <meshStandardMaterial side={DoubleSide}/>
      </Plane>
      <OrbitControls />
    </>
  );
};

export default Plane01;
