import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
import { floating } from "./functions.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../styles/app.css";

const Escena = ({ objeto, background, color, isfloating, coor_camera }) => {
  let renderer, camera, orbitControls, scene;
  const mountRef = useRef(null);
  const [backColor, setBackColor] = useState(
    new THREE.Color(parseInt(background, 16))
  );
  const [c, setC] = useState(color);
  let x = coor_camera[0];
  let y = coor_camera[1];
  let z = coor_camera[2];

  function resize() {
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    camera.aspect =
      mountRef.current.clientWidth / mountRef.current.clientHeight;
    camera.updateProjectionMatrix();
  }

  function init() {
    const { clientWidth: width, clientHeight: height } = mountRef.current;

    // ESCENA, CAMARA Y RENDERER
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000);

    scene.add(camera);
    scene.add(objeto);

    renderer = new THREE.WebGLRenderer();

    // LIBRERIA PARA MOVER EL OBJETO 3D CON EL MOUSE

    orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.enableZoom = false;

    // LUZ AMBIENTAL

    const ambientalLight = new THREE.AmbientLight(0x404040, 80);
    scene.add(ambientalLight);

    // LUZ DIRECCIONAL

    const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
    directionalLight.position.set(0, 0.5, 2);
    scene.add(directionalLight);

    // ACTUALIZO EL TAMAÑO DEL RENDERIZADO

    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);
  }

  useEffect(() => {
    setC(color);
    setBackColor(new THREE.Color(parseInt(background, 16)));
  }, [color, background]);

  function animate() {
    requestAnimationFrame(animate);
    if (isfloating) {
      floating(objeto, scene, 10);
    }
    camera.position.set(x, y, z);
    orbitControls.update();
    renderer.render(scene, camera);
  }

  useEffect(() => {
    init();
    animate();
    if (objeto && scene) {
      const mesh = objeto.children[0];
      mesh.material.color.set(parseInt(c, 16));
      scene.background = backColor;
    }

    camera.updateProjectionMatrix();
    scene.add(camera);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [c, backColor, coor_camera]);

  /* useEffect(() => {
    if (scene) {
      if (objeto) {
        const mesh = objeto.children[0];
        mesh.material.color.set(parseInt(c, 16));
      }
      scene.background = backColor;
      animate();
    }
    window.addEventListener("resize", resize);
  }, [c, coor_camera]); */

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default Escena;
