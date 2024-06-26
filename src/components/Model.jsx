import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Model(props) {
  const myMesh = useRef();
  /* CARGO MI MODELO 3D Y EXTRADO EL NODO DONDE SE ENCUENTRA LA INFORMACION DE MI OBJETO Y LA SCENA */
  const { nodes, scene } = useGLTF("/Models/corazon.gltf");
  const material = nodes.Cube001.material;

  /* SETEO EL COLOR DEL MATERIAL DE MI OBJETO SEGUN EL COLOR QUE VENGA POR PROPS */

  material.color.set(props.color);
  /* CADA FRAME VA A ROTAR EL OBJETO Y ANIMARLO DE ARRIBA Y ABAJO CON FORMA SINOSOIDAL, LE SUME 3 PARA QUE ESTÉ ARRIBA DEL SUELO */
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime();
    myMesh.current.position.y = Math.sin(clock.getElapsedTime() / 0.5) * 0.3;

    myMesh.current.position.y += 3;
  });

  return (
    <mesh
      {...props}
      ref={myMesh}
      object={scene}
      material={material}
      geometry={nodes.Cube001.geometry}
      material-color={"red"}
      castShadow={true}
    />
  );
}

export default Model;
