import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

// Basic setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Model loader
const stlLoader = new STLLoader();
const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
let modelMesh;

// Load the model
stlLoader.load(
    './models/your_model.stl', // Replace with the path to your model
    (geometry) => {
        modelMesh = new THREE.Mesh(geometry, material);
        modelMesh.geometry.center(); // Center the geometry
        scene.add(modelMesh);
    }
);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the model
    if (modelMesh) {
        modelMesh.rotation.y += 0.01; // Adjust speed and axis as needed
    }

    controls.update();
    renderer.render(scene, camera);
}

animate();

// Resize handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
