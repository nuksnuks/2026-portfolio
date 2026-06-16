import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Field({ darkMode }: { darkMode: boolean }) {

  
  const meshRef = useRef<THREE.Points>(null);

  const count = 6000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] = (Math.random() - 0.5) * 10;
      arr[i3 + 1] = (Math.random() - 0.5) * 10;
      arr[i3 + 2] = (Math.random() - 0.5) * 10;
    }

    return arr;
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (!meshRef.current) return;

    const pos = meshRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < pos.length; i += 3) {
      const x = pos[i];
      const y = pos[i + 1];

      const angle = Math.sin(x * 0.3 + t) + Math.cos(y * 0.3 + t);

      pos[i] += Math.cos(angle) * 0.001;
      pos[i + 1] += Math.sin(angle) * 0.001;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.02}
        color={darkMode ? "#3ba0ff" : "#0066cc"}
        transparent
        opacity={darkMode ? 0.6 : 0.4}
      />
    </points>
  );
}

export default function TopologyBackground() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <Canvas
      style={{
        position: "fixed",
        inset: 0,
        background: darkMode ? "#05010a" : "#f5f5f5",
        zIndex: 0,
      }}
      camera={{ position: [0, 0, 5] }}
    >
      <Field darkMode={darkMode} />
    </Canvas>
  );
}