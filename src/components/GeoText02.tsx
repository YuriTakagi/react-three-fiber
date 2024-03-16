import { OrbitControls, Text3D } from "@react-three/drei";

const GeoText02 = () => {
  return (
    <>
      {/* <ambientLight intensity={0.1} /> */}
      {/* <directionalLight position={[0, 0, 5]} /> */}
      <Text3D
        font="/public/Roboto_Bold.json"
        height={0.5}
        position={[-4, 0, 0]}
        lineHeight={0.8}
        bevelEnabled
        bevelSize={0.05}
      >
        <meshNormalMaterial />
        {`Hello World  \nHello TypeScript`}
      </Text3D>
      <OrbitControls />
    </>
  );
};

export default GeoText02;
