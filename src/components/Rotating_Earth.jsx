import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const RotatingEarth = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Initial camera position and earth size
    const setCameraAndEarthSize = () => {
      if (window.innerWidth < 768) {
        camera.position.z = 3; // Smaller distance for smaller screens
        sphere.scale.set(0.7, 0.7, 0.7); // Smaller earth scale
      } else {
        camera.position.z = 5; // Default distance
        sphere.scale.set(1, 1, 1); // Default earth scale
      }
    };

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const texture = new THREE.TextureLoader().load(
      "src/assets/world.topo.bathy.200412.3x5400x2700.jpg"
    );
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Set initial size and camera distance based on screen width
    setCameraAndEarthSize();

    const animate = () => {
      sphere.rotation.y += 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Update renderer and camera on resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      setCameraAndEarthSize();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default RotatingEarth;
