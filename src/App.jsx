<<<<<<< HEAD
import "./styles/app.css";
import Heart from "./Heart";

function App() {

  return (
    <Heart/>
  );
}

export default App;
=======
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  GizmoHelper,
  GizmoViewport,
  SoftShadows,
} from "@react-three/drei";
import Model from "./components/Model";
import Floor from "./components/Floor";

function App() {
  const [color, setColor] = useState("white");
  const [hoverOrange, setHoverOrange] = useState(false);
  const [hoverYellow, setHoverYellow] = useState(false);
  const [hoverGreen, setHoverGreen] = useState(false);
  const [hoverPurple, setHoverPurple] = useState(false);

  const handleHover = () => {
    if (hoverOrange) {
      setColor("orange");
    } else if (hoverYellow) {
      setColor("yellow");
    } else if (hoverGreen) {
      setColor("green");
    } else if (hoverPurple) {
      setColor("purple");
    } else {
      setColor("red");
    }
  };
  useEffect(handleHover, [hoverOrange, hoverGreen, hoverPurple, hoverYellow]);
  return (
    <>
      <div className=" h-screen w-screen flex justify-center items-center">
        <Canvas shadows camera={{ position: [0, 4, 8] }}>
          {/* GENERA SOMBRAS EN MI SCENA */}
          <SoftShadows size={10} focus={10} samples={6} />
          {/* LE DOY COLOR DE FONDO A LA SCENA */}
          <color attach="background" args={["#BA823B"]} />
          {/* ESTOS COMPONENTES SON HELPERS SOLAMENTE */}
          <CameraControls />
          <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport
              axisColors={["red", "green", "blue"]}
              labelColor="black"
            />
          </GizmoHelper>
          {/* ----------------------- */}
          {/* DEFINE LA LUZ AMBIENTAL DE LA SCENA */}
          <ambientLight intensity={1.5} />
          {/* UNA LUZ DIRECCIONAL HACIA DONDE YO LE INDICO */}
          <directionalLight color="white" position={[1, 2, 1]} castShadow />
          <Suspense fallback={"Loading..."}>
            {/* RENDERIZO MI MODELO 3D QUE PUEDO PASARLE COMO PROPS TODA CONFIGURACION QUE YO DESEE */}
            <Model
              scale={2}
              rotation={[0, 0, 0]}
              position={[0, 0, 0]}
              color={color}
            />
          </Suspense>
          <Floor />
        </Canvas>
      </div>
      <ul className="absolute h-full w-1/5 top-0 grid gap-8 place-content-between p-36 right-20 uppercase font-extrabold list-none select-none">
        <li
          className=" bg-slate-200 w-36 text-center p-3 rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white transition-colors hover:bg-opacity-60 bg-opacity-45"
          onMouseEnter={() => setHoverOrange(true)}
          onMouseLeave={() => setHoverOrange(false)}
        >
          orange
        </li>
        <li
          className=" bg-slate-200 w-36 text-center p-3 rounded-lg cursor-pointer hover:bg-yellow-500 hover:text-white transition-colors hover:bg-opacity-60 bg-opacity-45"
          onMouseEnter={() => setHoverYellow(true)}
          onMouseLeave={() => setHoverYellow(false)}
        >
          yellow
        </li>
        <li
          className=" bg-slate-200 w-36 text-center p-3 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-colors hover:bg-opacity-60 bg-opacity-45"
          onMouseEnter={() => setHoverGreen(true)}
          onMouseLeave={() => setHoverGreen(false)}
        >
          green
        </li>
        <li
          className=" bg-slate-200 w-36 text-center p-3 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white transition-colors hover:bg-opacity-60 bg-opacity-45"
          onMouseEnter={() => setHoverPurple(true)}
          onMouseLeave={() => setHoverPurple(false)}
        >
          purple
        </li>
      </ul>
    </>
  );
}

export default App;
>>>>>>> master
