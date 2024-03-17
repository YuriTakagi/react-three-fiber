import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import SelectBox from "./components/SelectBox";
import BasicBox01 from "./components/BasicBox01";
import BasicBox02 from "./components/BasicBox02";
import ControlBox01 from "./components/ControlBox01";
import ControlBox02 from "./components/ControlBox02";
import GeoBox01 from "./components/GeoBox01";
import GeoText01 from "./components/GeoText01";
import GeoText02 from "./components/GeoText02";
import GeoTexture01 from "./components/GeoTexture01";
import Plane01 from "./components/Plane01";
import GeoTexture02 from "./components/GeoTexture02";

function App() {
  const pullDownOptions = Array.from({ length: 20 }, (_, index) => 1 + index);
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
        {selectedOption === 4 && <ControlBox02 />}
        {selectedOption === 5 && <GeoBox01 />}
        {selectedOption === 6 && <GeoText01 />}
        {selectedOption === 7 && <GeoText02 />}
        {selectedOption === 8 && (
          <>
            <GeoTexture01 />
            <Plane01 />
          </>
        )}
        {selectedOption === 9 && (
          <>
            <GeoTexture02 />
            <Plane01 />
          </>
        )}
      </Canvas>
    </div>
  );
}

export default App;
