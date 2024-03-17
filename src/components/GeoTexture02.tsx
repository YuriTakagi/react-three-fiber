import { OrbitControls, Sphere, useTexture } from "@react-three/drei";

const GeoTexture02 = () => {
  const moonTexture = useTexture({
    map: "/public/cracked_concrete_wall_diff_2k.jpg",
    displacementMap: "/public/cracked_concrete_wall_disp_2k.png"
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Sphere position={[0, 0, 2]}>
        <meshStandardMaterial map={moonTexture.map} />
      </Sphere>
      <OrbitControls />
    </>
  );
};

export default GeoTexture02;
