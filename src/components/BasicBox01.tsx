const BasicBox01  = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default BasicBox01;

// ambientLight: 3D空間全体に均等に光をあてる
// color: 光の色 intensity: 光の強さ

// directionalLight: 特定方向に光を当てる
// position: 光を当てる方向

// mesh: 3Dオブジェクトの形状（ジオメトリ）とその表面の見た目（マテリアル）を定義するためのもの
// boxGeometry: 立方体
// args: 配列で幅、高さ、奥行きを指定
// meshStandardMaterial: 光の反射や陰影、質感などをより現実に近い形でシミュレートする
