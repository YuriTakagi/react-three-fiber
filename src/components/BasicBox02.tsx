import { OrbitControls, Box } from "@react-three/drei";

const BasicBox02 = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <Box>
        <meshStandardMaterial color="yellow" />
      </Box>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default BasicBox02;

// OrbitControls: ユーザーがマウスやタッチ操作でシーンをパン（平行移動）、ズーム（拡大/縮小）、回転させることができる
// maxPolarAngle, minPolarAngle: 回転方向を指定するオプション
