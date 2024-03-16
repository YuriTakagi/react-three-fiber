import { OrbitControls, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { folder, useControls, button } from "leva";
import { useRef } from "react";
import { Mesh } from "three";

const GeoBox01 = () => {
  const [{ scale, positionX, positionY, positionZ, color, wireframe }, reset] =
    useControls("Box", () => ({
      geometry: folder({
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
      }),
      material: folder({
        color: "blue",
        wireframe: false,
      }),
      reset: button(() => {
        reset({
          scale: 1,
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          color: "blue",
          wireframe: false,
        });
      }),
    }));

  const boxRef = useRef<Mesh>(null);

  useFrame(() => {
    boxRef.current!.rotation.x += 0.01;
    boxRef.current!.rotation.y += 0.01;
  });
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <Box
        ref={boxRef}
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

export default GeoBox01;

// useFrame hooks: アニメーションやシーン内のオブジェクトをフレームごとに更新するために使用されるフック
// useFrame hooks: 第一引数にstateオブジェクト、第二引数にdelta(経過時間)
// rotation.x: x軸を中心として回転させる
// rotation.y: y軸を中心として回転させる
