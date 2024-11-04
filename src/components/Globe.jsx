// src/components/Globe.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Globe = () => {
  const mountRef = useRef(null);
  const mouse = new THREE.Vector2();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(1, 32, 32);

    // Fluid shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float uTime;

        void main() {
          vUv = uv;
          vec3 pos = position;
          
          // Create a wave effect based on time
          float wave = 0.1 * sin(10.0 * vUv.x + uTime) * cos(10.0 * vUv.y + uTime);
          pos += normal * wave; // Use normal for the wave direction

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;

        void main() {
          // Color based on the position to simulate fluid movement
          vec3 color = vec3(0.1 + 0.5 * sin(vUv.x * 10.0), 0.2 + 0.5 * sin(vUv.y * 10.0), 0.6);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    // Create mesh with geometry and material
    const earth = new THREE.Mesh(geometry, material);
    earth.scale.set(1.5, 1.5, 1.5); // Increase the size of the globe
    scene.add(earth);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      material.uniforms.uTime.value += 0.05; // Update time for fluid animation
      earth.rotation.y += 0.01; // Rotate the globe slowly
      renderer.render(scene, camera);
    };
    animate();

    // Handle mouse movement
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      material.uniforms.uMouse.value.copy(mouse); // Update mouse uniform
    };
    window.addEventListener("mousemove", onMouseMove);

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-screen fixed top-0 -z-10"></div>
  );
};

export default Globe;
