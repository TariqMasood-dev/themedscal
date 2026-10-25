"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

function createArchitecturalScene(scene) {
  scene.background = null;
  scene.fog = new THREE.FogExp2("#071310", 0.035);

  const sculpture = new THREE.Group();
  const sculptureGeometry = new THREE.DodecahedronGeometry(1.05, 1);
  const sculptureMaterial = new THREE.MeshPhysicalMaterial({
    color: "#b8fff4",
    emissive: "#0d5148",
    emissiveIntensity: 0.12,
    metalness: 0.04,
    roughness: 0.1,
    transmission: 0.9,
    thickness: 1.2,
    ior: 1.25,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    envMapIntensity: 1.1,
  });
  const sculptureMesh = new THREE.Mesh(sculptureGeometry, sculptureMaterial);
  sculptureMesh.castShadow = true;
  sculptureMesh.receiveShadow = true;
  sculpture.add(sculptureMesh);

  const wireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(sculptureGeometry, 1),
    new THREE.LineBasicMaterial({
      color: "#cbfff5",
      transparent: true,
      opacity: 0.62,
    }),
  );
  sculpture.add(wireframe);

  const ringMaterial = new THREE.MeshStandardMaterial({
    color: "#75ded0",
    metalness: 0.72,
    roughness: 0.24,
    emissive: "#13594f",
    emissiveIntensity: 0.22,
  });
  for (const [rotationX, rotationY, scale] of [
    [Math.PI / 2.6, 0, 1.5],
    [0.12, Math.PI / 2.8, 1.75],
  ]) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.009, 6, 128),
      ringMaterial,
    );
    ring.rotation.set(rotationX, rotationY, 0);
    ring.scale.setScalar(scale);
    sculpture.add(ring);
  }
  scene.add(sculpture);

  const architecture = new THREE.Group();
  const columnGeometry = new THREE.BoxGeometry(0.14, 4.2, 0.14);
  const columnMaterial = new THREE.MeshPhysicalMaterial({
    color: "#83bcb1",
    metalness: 0.45,
    roughness: 0.3,
    transparent: true,
    opacity: 0.32,
  });
  const columns = new THREE.InstancedMesh(columnGeometry, columnMaterial, 4);
  const transform = new THREE.Object3D();
  const columnPositions = [
    [-3.05, 0, -1.2],
    [3.05, 0, -1.2],
    [-3.05, 0, 1.2],
    [3.05, 0, 1.2],
  ];
  columnPositions.forEach(([x, y, z], index) => {
    transform.position.set(x, y, z);
    transform.updateMatrix();
    columns.setMatrixAt(index, transform.matrix);
  });
  columns.castShadow = true;
  columns.receiveShadow = true;
  architecture.add(columns);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(16, 12),
    new THREE.MeshPhysicalMaterial({
      color: "#527b72",
      metalness: 0.26,
      roughness: 0.27,
      transparent: true,
      opacity: 0.16,
    }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2.12;
  floor.receiveShadow = true;
  architecture.add(floor);

  const plinth = new THREE.Mesh(
    new THREE.CylinderGeometry(1.45, 1.6, 0.12, 64),
    new THREE.MeshStandardMaterial({
      color: "#27483f",
      metalness: 0.64,
      roughness: 0.26,
    }),
  );
  plinth.position.y = -1.63;
  plinth.receiveShadow = true;
  plinth.castShadow = true;
  architecture.add(plinth);
  scene.add(architecture);

  const particleGeometry = new THREE.IcosahedronGeometry(0.035, 0);
  const particleMaterial = new THREE.MeshStandardMaterial({
    color: "#8cebdd",
    emissive: "#318f7e",
    emissiveIntensity: 0.5,
    roughness: 0.34,
    metalness: 0.25,
  });
  const particles = new THREE.InstancedMesh(
    particleGeometry,
    particleMaterial,
    32,
  );
  for (let index = 0; index < particles.count; index += 1) {
    const angle = index * 2.399963;
    const radius = 2.2 + (index % 5) * 0.27;
    transform.position.set(
      Math.cos(angle) * radius,
      ((index * 7) % 13) * 0.32 - 1.9,
      Math.sin(angle) * 1.8,
    );
    transform.scale.setScalar(0.55 + (index % 3) * 0.25);
    transform.updateMatrix();
    particles.setMatrixAt(index, transform.matrix);
  }
  scene.add(particles);

  return { sculpture, sculptureGeometry, architecture };
}

export function SceneBackground() {
  const canvasHostRef = useRef(null);
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setMotionEnabled(!preference.matches);
    };

    updateMotionPreference();
    preference.addEventListener("change", updateMotionPreference);
    return () =>
      preference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const host = canvasHostRef.current;
    if (!host || !motionEnabled) return;

    let disposed = false;
    let animationFrame = 0;
    let renderer;
    let scene;
    let roomEnvironment;
    let environmentTarget;
    let sculpture;
    let sculptureGeometry;
    let architecture;
    let resizeObserver;
    let scrollTimeline;
    const clock = new THREE.Clock();
    const pointer = new THREE.Vector2();
    const pointerLightTarget = new THREE.Vector3();
    const lookTarget = new THREE.Vector3();

    const stopAnimation = () => {
      window.cancelAnimationFrame(animationFrame);
    };

    const startAnimation = () => {
      if (!disposed && !document.hidden) {
        clock.start();
        animationFrame = window.requestAnimationFrame(renderFrame);
      }
    };

    const renderFrame = () => {
      if (disposed || !renderer || !scene) return;

      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.elapsedTime;
      pointerLightTarget.set(pointer.x * 4, -pointer.y * 3, 2.8);

      const pointLight = scene.getObjectByName("pointer-light");
      if (pointLight) {
        pointLight.position.lerp(pointerLightTarget, 1 - Math.exp(-delta * 4));
      }

      if (sculpture) {
        sculpture.position.y = Math.sin(elapsed * 0.65) * 0.075;
        sculpture.rotation.y += delta * 0.12;
      }

      if (renderer && scene && camera) {
        camera.lookAt(lookTarget);
        renderer.render(scene, camera);
      }
      animationFrame = window.requestAnimationFrame(renderFrame);
    };

    const onPointerMove = (event) => {
      pointer.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        (event.clientY / window.innerHeight) * 2 - 1,
      );
    };

    const onVisibilityChange = () => {
      if (document.hidden) stopAnimation();
      else startAnimation();
    };

    const onContextLost = (event) => {
      event.preventDefault();
      stopAnimation();
    };

    const onContextRestored = () => {
      startAnimation();
    };

    let camera;

    const resizeRenderer = () => {
      if (!renderer || !camera || !host) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.fov = width < 640 ? 50 : 42;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(width, height, false);
    };

    const disposeScene = () => {
      if (!scene) return;
      scene.traverse((object) => {
        if (object.geometry && object.geometry !== sculptureGeometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      sculptureGeometry?.dispose();
      environmentTarget?.dispose();
      roomEnvironment?.dispose();
      scene.clear();
    };

    const initializeScene = async () => {
      try {
        const [{ gsap }, { ScrollTrigger }, { RoomEnvironment }] =
          await Promise.all([
            import("gsap"),
            import("gsap/ScrollTrigger"),
            import("three/addons/environments/RoomEnvironment.js"),
          ]);
        if (disposed || !host) return;

        gsap.registerPlugin(ScrollTrigger);
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
        camera.position.set(0, 0.12, 7.4);

        try {
          renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: window.devicePixelRatio <= 1,
            powerPreference: "high-performance",
          });
        } catch (error) {
          console.error("Unable to create the Three.js renderer.", error);
          return;
        }

        renderer.domElement.className =
          "absolute inset-0 size-full pointer-events-none";
        renderer.domElement.setAttribute("aria-hidden", "true");
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.1;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        host.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight("#c8e5dc", 1.1);
        scene.add(ambientLight);

        const keyLight = new THREE.DirectionalLight("#fff4dc", 4);
        keyLight.position.set(-3.5, 6, 4);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.set(1024, 1024);
        keyLight.shadow.camera.left = -5;
        keyLight.shadow.camera.right = 5;
        keyLight.shadow.camera.top = 5;
        keyLight.shadow.camera.bottom = -5;
        keyLight.shadow.bias = -0.00015;
        scene.add(keyLight);
        scene.add(keyLight.target);

        const pointLight = new THREE.PointLight("#52dfc9", 34, 13, 2);
        pointLight.name = "pointer-light";
        pointLight.position.set(0, 0, 2.8);
        scene.add(pointLight);

        const environmentGenerator = new THREE.PMREMGenerator(renderer);
        roomEnvironment = new RoomEnvironment();
        environmentTarget = environmentGenerator.fromScene(
          roomEnvironment,
          0.04,
        );
        scene.environment = environmentTarget.texture;
        environmentGenerator.dispose();
        roomEnvironment.dispose();
        roomEnvironment = null;

        ({
          sculpture,
          sculptureGeometry,
          architecture,
        } = createArchitecturalScene(scene));
        resizeRenderer();

        const scrollAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "max",
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        });
        scrollAnimation
          .to(
            camera.position,
            { x: 0.75, y: 0.35, z: 6.15, ease: "none", duration: 1 },
            0,
          )
          .to(
            lookTarget,
            { x: 0.12, y: -0.1, ease: "none", duration: 1 },
            0,
          )
          .to(
            sculpture.rotation,
            { x: 0.55, y: Math.PI * 0.65, ease: "none", duration: 1 },
            0,
          )
          .to(
            architecture.rotation,
            { y: 0.12, ease: "none", duration: 1 },
            0,
          )
          .to(
            camera.position,
            { x: -0.65, y: -0.25, z: 7.2, ease: "none", duration: 1 },
            1,
          )
          .to(
            lookTarget,
            { x: -0.15, y: 0.12, ease: "none", duration: 1 },
            1,
          )
          .to(
            sculpture.rotation,
            { x: -0.38, y: Math.PI * 1.35, ease: "none", duration: 1 },
            1,
          )
          .to(
            camera.position,
            { x: 0, y: 0.38, z: 5.9, ease: "none", duration: 1 },
            2,
          )
          .to(
            lookTarget,
            { x: 0, y: 0, ease: "none", duration: 1 },
            2,
          )
          .to(
            sculpture.rotation,
            { x: 0.12, y: Math.PI * 2, ease: "none", duration: 1 },
            2,
          );
        scrollTimeline = scrollAnimation;

        resizeObserver = new ResizeObserver(resizeRenderer);
        resizeObserver.observe(host);
        window.addEventListener("resize", resizeRenderer);
        window.addEventListener("pointermove", onPointerMove, {
          passive: true,
        });
        document.addEventListener("visibilitychange", onVisibilityChange);
        renderer.domElement.addEventListener(
          "webglcontextlost",
          onContextLost,
        );
        renderer.domElement.addEventListener(
          "webglcontextrestored",
          onContextRestored,
        );
        startAnimation();
      } catch (error) {
        if (!disposed) {
          console.error("Unable to initialize the Three.js scene.", error);
        }
      }
    };

    void initializeScene();

    return () => {
      disposed = true;
      stopAnimation();
      resizeObserver?.disconnect();
      window.removeEventListener("resize", resizeRenderer);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      scrollTimeline?.scrollTrigger?.kill();
      scrollTimeline?.kill();
      if (renderer?.domElement) {
        renderer.domElement.removeEventListener(
          "webglcontextlost",
          onContextLost,
        );
        renderer.domElement.removeEventListener(
          "webglcontextrestored",
          onContextRestored,
        );
        renderer.domElement.remove();
      }
      disposeScene();
      renderer?.renderLists.dispose();
      renderer?.dispose();
      renderer?.forceContextLoss();
    };
  }, [motionEnabled]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="canvas-background-fallback absolute inset-0" />
      <div ref={canvasHostRef} className="absolute inset-0" />
    </div>
  );
}
