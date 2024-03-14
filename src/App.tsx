import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import SelectBox from "./components/SelectBox";
import BasicBox01 from "./components/BasicBox01";
import BasicBox02 from "./components/BasicBox02";
import ControlBox01 from "./components/ControllBox";

function App() {
  const pullDownOptions = [1, 2, 3, 4, 5];
  const [selectedOption, setSelectedOption] = useState(pullDownOptions[0]);

  return (
    <div className="w-full h-screen">
      <div className="p-2">
        <SelectBox
          options={pullDownOptions}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      {/* Canvasでr3fの定義を始める */}
      <Canvas>
        {selectedOption === 1 && <BasicBox01 />}
        {selectedOption === 2 && <BasicBox02 />}
        {selectedOption === 3 && <ControlBox01 />}
      </Canvas>
    </div>
  );
}

export default App;
