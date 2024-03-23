const floating = (objeto, scene) => {
  let step = parseFloat(localStorage.getItem("lastStep")) || 0;
  if (step > 360) {
    step = 0;
  }
  let velocity = step + 1.5 / 100;
  console.table(velocity);
  let mesh = objeto.children[0];
  if (mesh) {
    mesh.position.y = Math.sin(velocity) / 4;
    mesh.rotation.y = velocity + 1000;
  }
  scene.add(objeto);
  localStorage.setItem("lastStep", step);
  //console.log(mesh.position.y)
  //console.log(gltfObject.children[0])
};

export default floating;
