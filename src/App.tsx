import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="red"/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
