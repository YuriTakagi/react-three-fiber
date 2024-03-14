import { OrbitControls, Box } from "@react-three/drei";
import { useControls } from "leva";

const ControlBox01 = () => {
  const { scale, positionX, positionY, positionZ, color, wireframe } =
    useControls("Box", {
      scale: {
        value: 1,
        min: 1,
        max: 3,
        step: 0.1,
      },
      positionX: {
        value: 0,
        min: -3,
        max: 3,
        step: 0.1,
      },
      positionY: {
        value: 0,
        min: -3,
        max: 3,
        step: 0.1,
      },
      positionZ: {
        value: 0,
        min: -3,
        max: 3,
        step: 0.1,
      },
      color: "blue",
      wireframe: false,
    });
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <Box
        args={[2, 2, 2]}
        scale={scale}
        position={[positionX, positionY, positionZ]}
      >
        <meshStandardMaterial color={color} wireframe={wireframe} />
      </Box>
      <OrbitControls />
    </>
  );
};

export default ControlBox01;

// leva: GUIコントロールを作成するためのライブラリ
// useControls: 第一引数にパラメータを調整したい対象オブジェクト、第二引数にパラメータ
