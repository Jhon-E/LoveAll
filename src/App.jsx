import { useEffect, useState } from "react";
import * as THREE from "three";
import Escena from "./components/Escena";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { opciones } from "./data/opciones";
import "./styles/app.css";

function App() {
  const [gltfObject, setGltfObject] = useState();
  const [back, setBack] = useState(opciones[0].background);
  const [color, setColor] = useState(opciones[0].color);
  useEffect(() => {
    // CREO EL LOADER PARA CARGAR EL ARCHIVO GTLF Y LO AÑADO A LA ESCENA

    const loader = new GLTFLoader();

    loader.load(
      "./Models/corazon.gltf",
      (gltf) => {
        setGltfObject(gltf.scene);
        console.log("Loaded", gltf);
      },
      () => console.log("loading"),
      function (error) {
        console.error(error);
      }
    );
  }, []);

  const onHover = (e) => {
    for (let i = 0; i < opciones.length; i++) {
      if (e.target.classList[0] == opciones[i].name) {
        setBack(opciones[i].background);
        setColor(opciones[i].color);
      }
    }
  };

  return (
    <div className="container">
      <div className="escena">
        {gltfObject ? (
          <Escena objeto={gltfObject} background={back} color={color} />
        ) : (
          "cargando..."
        )}
      </div>
      <div className="opciones">
        <ul>
          <li className="r" onMouseOver={onHover}>
            RED
          </li>
          <li className="b" onMouseOver={onHover}>
            BLUE
          </li>
          <li className="o" onMouseOver={onHover}>
            ORANGE
          </li>
          <li className="p" onMouseOver={onHover}>
            PURPLE
          </li>
          <li className="g" onMouseOver={onHover}>
            GREEN
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
