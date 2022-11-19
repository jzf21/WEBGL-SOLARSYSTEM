import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import './assets'

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(120);
camera.position.setX(-40);
camera.position.setY(60);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.SphereGeometry(10, 16, 16);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xf11ff);
pointLight.position.set(100, 100, 500);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//  var light = new THREE.PointLight(0xff7f24, 6, 1000);
//  light.position.set(250, 0, 750);
//  light.castShadow = true; // default false
//  light.shadow.mapSize.width = 1024; // default 512
//  light.shadow.mapSize.height = 1024; // default 512
//  light.shadow.camera.near = 2; // default 0.5
//  light.shadow.camera.far = 1500;
//  scene.add(light);

var light2 = new THREE.PointLight(0x6495ed, 2, 1000);
light2.position.set(0, 0, 0);
light2.castShadow = true; // default false
light2.shadow.mapSize.width = 1024; // default 512
light2.shadow.mapSize.height = 1024; // default 512
light2.shadow.camera.near = 2; // default 0.5
light2.shadow.camera.far = 1500;
scene.add(light2);

//comets

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(500, 50);
// scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.5, 32, 16);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}
// Array(200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load("./assets/space.jpg");
scene.background = spaceTexture;

// Avatar

const jeffTexture = new THREE.TextureLoader().load("./assets/space.jpg");

const jeff = new THREE.Mesh(
  new THREE.BoxGeometry(3, 5, 3),
  new THREE.MeshBasicMaterial({ map: jeffTexture })
);

// scene.add(jeff);

// Moon

const moonTexture = new THREE.TextureLoader().load("./assets/sun.jpg");
const normalTexture = new THREE.TextureLoader().load("./assets/normal.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(20, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 0;
moon.position.setY(0);
moon.position.setX(0);

jeff.position.z = 10;
jeff.position.x = 2;

//earth
const earthTexture = new THREE.TextureLoader().load("./assets/earth.jpg");
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    normalMap: normalTexture,
  })
);
scene.add(earth);
earth.position.z = -70;
earth.position.setX(-10);

const mercuryTexture = new THREE.TextureLoader().load("./assets/mercury.jpg");
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture,
    normalMap: normalTexture,
  })
);
scene.add(mercury);
mercury.position.z = -20;
mercury.position.setX(-10);

//venus

const venusTexture = new THREE.TextureLoader().load("./assets/venus.jpg");
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venusTexture,
    normalMap: normalTexture,
  })
);
scene.add(venus);
venus.position.z = -40;
venus.position.setX(-10);

//mars

const marsTexture = new THREE.TextureLoader().load("./assets/mars.jpg");
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
    normalMap: normalTexture,
  })
);
scene.add(mars);
mars.position.z = -60;
mars.position.setX(-10);

//jupiter

const jupiterTexture = new THREE.TextureLoader().load("./assets/jupiter.jpg");
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(12, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture,
    normalMap: normalTexture,
  })
);
scene.add(jupiter);
jupiter.position.z = -100;
jupiter.position.setX(-10);

//saturn

const saturnTexture = new THREE.TextureLoader().load("./assets/saturn.jpg");
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(12, 32, 32),
  new THREE.MeshStandardMaterial({
    map: saturnTexture,
    normalMap: normalTexture,
  })
);
scene.add(saturn);
saturn.position.z = -150;
saturn.position.setX(-10);

const ringTexture = new THREE.TextureLoader().load("./assets/saturnring.png");
const ring = new THREE.Mesh(
  new THREE.RingGeometry(15, 18, 32),
  new THREE.MeshStandardMaterial({
    map: ringTexture,
    normalMap: normalTexture,
  })
);
scene.add(ring);
ring.position.z = -100;
ring.position.setX(-10);
ring.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 4);

//uranus

const uranusTexture = new THREE.TextureLoader().load("./assets/uranus.jpg");
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(7, 32, 32),
  new THREE.MeshStandardMaterial({
    map: uranusTexture,
    normalMap: normalTexture,
  })
);
scene.add(uranus);
uranus.position.z = -170;
uranus.position.setX(-10);

//neptune

const neptuneTexture = new THREE.TextureLoader().load("./assets/neptune.jpg");
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(8, 32, 32),
  new THREE.MeshStandardMaterial({
    map: neptuneTexture,
    normalMap: normalTexture,
  })
);
scene.add(neptune);
neptune.position.z = -190;
neptune.position.setX(-10);

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  jeff.rotation.y += 0.01;
  jeff.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop
var t = 0;
function animate() {
  requestAnimationFrame(animate);
  t+=0.001;
  
  
  earth.rotation.x += 0.001;
  earth.rotation.y += 0.005;
  earth.rotation.z += 0.0001;
  jupiter.rotation.x += 0.001;
  jupiter.rotation.y += 0.005;
  jupiter.rotation.z += 0.0001;
  mercury.rotation.x += 0.001;
  mercury.rotation.y += 0.005;
  mercury.rotation.z += 0.0001;
  venus.rotation.x += 0.001;
  venus.rotation.y += 0.005;
  venus.rotation.z += 0.0001;
  mars.rotation.x += 0.001;
  mars.rotation.y += 0.005;
  mars.rotation.z += 0.0001;
  saturn.rotation.x += 0.001;
  saturn.rotation.y += 0.005;
  saturn.rotation.z += 0.0001;
  uranus.rotation.x += 0.001;
  uranus.rotation.y += 0.005;



  uranus.rotation.z += 0.0001;
  neptune.rotation.x += 0.001;

  neptune.rotation.y += 0.005;
  neptune.rotation.z += 0.0001;
  mercury.position.x = 60*Math.cos(t*6);
  mercury.position.z = 60*Math.sin(t*6);
  venus.position.x = 80*Math.cos(t*4);
  venus.position.z = 80*Math.sin(t*4);
  earth.position.x = 100*Math.cos(t*2+2);
  earth.position.z = 100*Math.sin(t*2+2);
  mars.position.x = 120*Math.cos(t+7);
  mars.position.z = 120*Math.sin(t+7);
  jupiter.position.x = 140*Math.cos(t);
  jupiter.position.z = 140*Math.sin(t);
  saturn.position.x = 160*Math.cos(t*1.1-1);
  saturn.position.z = 160*Math.sin(t*1.1-1);
    ring.position.x = 160 * Math.cos(t*1.1 - 1);
    ring.position.z = 160 * Math.sin(t*1.1 - 1);
  uranus.position.x = 180*Math.cos(t*0.3);
  uranus.position.z = 180*Math.sin(t*0.3);
  neptune.position.x = 200*Math.cos(t*1.2);
  neptune.position.z = 200*Math.sin(t*1.2);


  
  
  // Update controls

  // controls.update();

  renderer.render(scene, camera);
}

animate();
