import { useEffect, useState } from "react";
import Escena from "./components/Escena";
import { opciones } from "./data/opciones.js";
import { LoadMesh } from "./components/LoadMesh.jsx";

const Heart = () => {
  const [gltfObject, setGltfObject] = useState();
  const [back, setBack] = useState(opciones[0].background);
  const [color, setColor] = useState(opciones[0].color);

  async function cargarModelo(url) {
    try {
      const modelo = await LoadMesh(url);
      setGltfObject(modelo);
    } catch (error) {
      console.error("Error al cargar el modelo:", error);
    }
  }

  useEffect(() => {
    cargarModelo("./Models/corazon.gltf");
  }, []);

  const onHover = (e) => {
    for (let i = 0; i < opciones.length; i++) {
      if (e.target.classList[0] == opciones[i].name) {
        setBack(opciones[i].background);
        setColor(opciones[i].color);
      }
    }
  };
  const onHandleClick = () => {
    window.location.href = "/paola";
  };
  return (
    <div className="container">
      <div className="escena">
        {gltfObject ? (
          <Escena
            objeto={gltfObject}
            background={back}
            color={color}
            isfloating={true}
          />
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
          <li className="p" onMouseOver={onHover} onClick={onHandleClick}>
            PURPLE
          </li>
          <li className="g" onMouseOver={onHover}>
            GREEN
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heart;
