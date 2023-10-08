import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

export default class SceneInit {
  scene: THREE.Scene | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  renderer: THREE.WebGLRenderer | undefined;
  fov: number;
  nearPlane: number;
  farPlane: number;
  canvasId: string;
  clock: THREE.Clock | undefined;
//   stats: any;
  ambientLight: THREE.AmbientLight | undefined;
  directionalLight: THREE.DirectionalLight | undefined;
  loader: THREE.TextureLoader | undefined;
    controls: OrbitControls | undefined;
  constructor(canvasId: string) {
    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // NOTE: Camera params;
    this.fov = 45;
    this.nearPlane = 1;
    this.farPlane = 100;
    this.canvasId = canvasId;

    // NOTE: Additional components.
    this.clock = undefined;
    // this.stats = undefined;
    this.controls = undefined
    // NOTE: Lighting is basically required.
    this.ambientLight = undefined;
    this.directionalLight = undefined;
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 40;

    // NOTE: Specify a canvas which is already created in the HTML.
    const canvas = document.getElementById(this.canvasId)!;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      // NOTE: Anti-aliasing smooths out the edges.
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.renderer.shadowMap.enabled = true;
    document.body.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.stats = new Stats();
    // document.body.appendChild(this.stats.dom);

    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    // directional light - parallel sun rays
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    // this.directionalLight.castShadow = true;
    this.directionalLight.position.set(0, 32, 64);
    this.scene.add(this.directionalLight);

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);

    // NOTE: Load space background.
    this.loader = new THREE.TextureLoader();
    this.scene.background = this.loader.load('space.jpg');
    this.scene.background.colorSpace =  THREE.DisplayP3ColorSpace;

  }

  animate() {
    // NOTE: Window is implied.
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    // this.stats.update();
    if(this.controls){
        this.controls.enableZoom = false;
        this.controls.update();
    }
  }

  render() {
    if(this.scene && this.camera && this.renderer)
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    if(this.camera && this.renderer){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

  }
}