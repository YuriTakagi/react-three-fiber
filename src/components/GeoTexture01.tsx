import { OrbitControls, Sphere } from "@react-three/drei";

const GeoTexture01 = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Sphere position={[0, 0, 2]}>
        <meshStandardMaterial color="green" />
      </Sphere>
      <OrbitControls />
    </>
  );
};

export default GeoTexture01;
