import { OrbitControls, Text } from "@react-three/drei";

const GeoText01 = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <Text>
        <meshBasicMaterial color="blue" />
        Hello
      </Text>
      <OrbitControls />
    </>
  );
};

export default GeoText01;
