"use client";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import SceneInit from "./lib/sceneInit";
import { useEffect } from "react";
export default function SpaceCanvas() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    let loadedModel: GLTF;
    const glftLoader = new GLTFLoader();
    glftLoader.load("/assets/japanese_box/scene.gltf", (gltfScene) => {
      loadedModel = gltfScene;

      gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.y = 3;
      gltfScene.scene.scale.set(10, 10, 10);
      if (test.scene) {
        test.scene.add(gltfScene.scene);
      }
    });

    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.x += 0.001;
        loadedModel.scene.rotation.y += 0.001;
        loadedModel.scene.rotation.z += 0.001;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return (
    <main overscroll-none>
      <canvas id="myThreeJsCanvas" />
    </main>
  );
}
