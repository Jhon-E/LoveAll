function Floor() {
  return (
    /* PARA QUE SE VEAN LAS SOMBRAS DEBO DEJARLE LA PROPIEDAD RECEIVESHADOW Y LA ROTACION DEBE SER EN RADIANES */
    <mesh receiveShadow rotation={[(-90 * Math.PI) / 180, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshLambertMaterial color={"#B96700"} />
    </mesh>
  );
}

export default Floor;
