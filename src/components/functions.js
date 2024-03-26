export const floating = (objeto, scene, speed) => {
  const now = Date.now();
  const lastTime = parseFloat(localStorage.getItem("lastTime")) || now;
  const elapsedTime = now - lastTime;

  const velocity = 1.5 / 100;
  const angularVelocity = velocity * elapsedTime;

  let step = parseFloat(localStorage.getItem("lastStep")) || 0;
  let rotation = step + angularVelocity;
  let speedRot;
  if (rotation >= 3600) {
    rotation = 0;
  }

  let mesh = objeto.children[0];
  if (mesh) {
    speedRot = rotation / speed;
    mesh.position.y = Math.sin(rotation / speed) / 4;
    mesh.rotation.y = speedRot;
  }
  scene.add(objeto);

  localStorage.setItem("lastTime", now.toString());
  localStorage.setItem("lastStep", rotation);
};

export const movScroll = (coor_cam) => {
  let x = coor_cam[0];
  let y = coor_cam[1];
  let z = 0;

  if(y <= 10){
    y += window.scrollY * 0.0009;
    x -= window.scrollY * 0.0004;
  }
  /*  else {
    up = y <= 0 ? true : false;
    y -= window.scrollY * 0.0009;
  } */
  console.log([x, y, z]);

  return [x, y, z];
};
