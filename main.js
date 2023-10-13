import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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
camera.position.set(120, 60, -40);
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

// Background
const spaceTexture = new THREE.TextureLoader().load("./assets/space.jpg");
scene.background = spaceTexture;

// Create a function for planet rotation
function rotatePlanet(planet, speed) {
  planet.rotation.x += speed;
  planet.rotation.y += speed;
  planet.rotation.z += speed;
}

// Planets
const planets = [
  { object: earth, speed: 0.01 },
  { object: jupiter, speed: 0.005 },
  { object: mercury, speed: 0.005 },
  { object: venus, speed: 0.005 },
  { object: mars, speed: 0.005 },
  { object: saturn, speed: 0.005 },
  { object: uranus, speed: 0.005 },
  { object: neptune, speed: 0.005 },
];

// Scroll Animation
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  planets.forEach(({ object, speed }) => rotatePlanet(object, speed));
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  planets.forEach(({ object, speed }) => rotatePlanet(object, speed));
  mercury.position.x = 100 * Math.cos(t * 6);
  mercury.position.z = 100 * Math.sin(t * 6);
  // Update positions for other planets here
  renderer.render(scene, camera);
}

animate();
