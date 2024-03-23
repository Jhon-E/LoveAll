import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "../styles/app.css";

const Escena = ({ objeto, background, color }) => {
  let renderer, camera, orbitControls, scene;
  let step = 0;
  const bg = parseInt(background, 16);
  const mountRef = useRef(null);
  const backgroundColor = new THREE.Color(bg);

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

    camera.position.set(10, 0, 0);
    camera.lookAt(new THREE.Vector3());

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

  function floating() {
    if (objeto) {
      step += 1.5 / 100;
      let mesh = objeto.children[0];
      if (mesh) {
        mesh.position.y = (Math.sin(step) + 1) / 4;
        mesh.rotation.y = step;
      }
      scene.add(objeto);
      //console.log(mesh.position.y);
    }
    //console.log(gltfObject.children[0])
  }

  function animate() {
    requestAnimationFrame(animate);
    floating();
    orbitControls.update();
    renderer.render(scene, camera);
  }

  useEffect(() => {
    init();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [bg]);

  useEffect(() => {
    if (objeto) {
      const mesh = objeto.children[0];
      mesh.material.color.set(parseInt(color, 16));
    }
  }, [color]);

  useEffect(() => {
    // Actualizar el color de fondo de la escena cuando cambie la propiedad background
    if (scene) {
      scene.background = backgroundColor;
    }
  }, [background]);

  return (
    <div
      className="Contenedor3D"
      ref={mountRef}
      style={{ width: "100%", height: "100%" }} 
    ></div>
  );
};

export default Escena;
