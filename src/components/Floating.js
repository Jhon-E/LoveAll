const floating = (objeto, scene, speed) => {
  const now = Date.now();
  const lastTime = parseFloat(localStorage.getItem("lastTime")) || now;
  const elapsedTime = now - lastTime;

  const velocity = 1.5 / 100;
  const angularVelocity = velocity * elapsedTime;

  let step = parseFloat(localStorage.getItem("lastStep")) || 0;
  console.log(step)
  let rotation = step + angularVelocity;
  let speedRot;
  if (rotation >= 3600) {
    rotation = 0;
  }

  let mesh = objeto.children[0];
  if (mesh) {
    speedRot = rotation / speed;
    mesh.position.y = Math.sin(rotation/speed) / 4;
    mesh.rotation.y = speedRot;
  }
  scene.add(objeto);

  localStorage.setItem("lastTime", now.toString());
  localStorage.setItem("lastStep", rotation);
};

export default floating;
