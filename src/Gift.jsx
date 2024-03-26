import { useRef, useEffect, useState } from "react";
import "./styles/gift.css";
import Escena from "./components/Escena.jsx";
import { LoadMesh } from "./components/LoadMesh.jsx";
import { opciones } from "./data/opciones.js";

const Gift = () => {
  const [object, setObject] = useState(null);
  async function cargarModelo(url) {
    try {
      const modelo = await LoadMesh(url);
      setObject(modelo);
    } catch (error) {
      console.error("Error al cargar el modelo:", error);
    }
  }

  useEffect(() => {
    cargarModelo("./Models/corazon.gltf");
  }, []);
  return (
    <>
      <div className="containerEscena">
        <div className="container_1">
          {object ? (
            <Escena
              objeto={object}
              background={opciones[2].background}
              color={opciones[2].color}
              isfloating={false}
            />
          ) : (
            "cargando..."
          )}
        </div>
      </div>
    </>
  );
};

export default Gift;
