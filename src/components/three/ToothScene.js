'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural anatomical human molar with crown cusps and double roots
export function AnatomicalTooth({ isHovered = false }) {
  const groupRef = useRef();

  // Create geometry for tooth crown and roots
  const { crownGeo, rootGeo1, rootGeo2, occlusalRingGeo } = useMemo(() => {
    // 1. Crown Geometry: Create a high-poly cylinder and sculpt it into a 4-cusped molar
    const crown = new THREE.CylinderGeometry(1.05, 0.88, 1.25, 48, 32, true);
    const pos = crown.attributes.position;
    const v = new THREE.Vector3();

    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const angle = Math.atan2(v.z, v.x);
      const radius = Math.sqrt(v.x * v.x + v.z * v.z);
      const yNorm = (v.y + 0.625) / 1.25; // 0 at bottom, 1 at top

      // 4 distinct cusps on the occlusal surface
      const cuspWave = Math.cos(angle * 4) * 0.12;
      const molarSquareness = Math.pow(Math.cos(angle * 2), 2) * 0.1;

      // Occlusal fissure depression at the very top
      if (yNorm > 0.7) {
        const topFactor = (yNorm - 0.7) / 0.3;
        v.y += cuspWave * topFactor * 1.2;
        // Central occlusal groove depression
        const centerDist = radius / 1.05;
        if (centerDist < 0.65) {
          v.y -= Math.cos(centerDist * Math.PI) * 0.14 * topFactor;
        }
      }

      // Bulbous enamel contour around equatorial crown
      if (yNorm > 0.3 && yNorm < 0.85) {
        const bulge = Math.sin((yNorm - 0.3) / 0.55 * Math.PI) * 0.14;
        v.x += (v.x / (radius || 1)) * (bulge + molarSquareness);
        v.z += (v.z / (radius || 1)) * (bulge + molarSquareness);
      }

      // Cervical line indentation (neck of tooth)
      if (yNorm < 0.25) {
        const neckTaper = (0.25 - yNorm) / 0.25 * 0.08;
        v.x -= (v.x / (radius || 1)) * neckTaper;
        v.z -= (v.z / (radius || 1)) * neckTaper;
      }

      pos.setXYZ(i, v.x, v.y, v.z);
    }
    crown.computeVertexNormals();

    // Crown Cap (Occlusal surface top cap)
    const cap = new THREE.CircleGeometry(1.05, 48);
    cap.rotateX(-Math.PI / 2);
    cap.translate(0, 0.625, 0);
    const capPos = cap.attributes.position;
    for (let i = 0; i < capPos.count; i++) {
      v.fromBufferAttribute(capPos, i);
      const angle = Math.atan2(v.z, v.x);
      const r = Math.sqrt(v.x * v.x + v.z * v.z);
      // 4 distinct cusps
      const cuspHeight = Math.cos(angle * 4) * 0.14 * (r / 1.05);
      // Central fossa depression
      const fossa = Math.max(0, 1 - r / 0.7) * 0.18;
      v.y += cuspHeight - fossa;
      capPos.setXYZ(i, v.x, v.y, v.z);
    }
    cap.computeVertexNormals();

    // 2. Left Root (curved tapering root)
    const curve1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.35, -0.6, 0),
      new THREE.Vector3(-0.48, -1.2, 0.08),
      new THREE.Vector3(-0.42, -1.75, -0.05),
      new THREE.Vector3(-0.32, -2.15, -0.12),
    ]);
    const root1 = new THREE.TubeGeometry(curve1, 32, 0.32, 16, false);
    // Taper root tip
    const rPos1 = root1.attributes.position;
    for (let i = 0; i < rPos1.count; i++) {
      v.fromBufferAttribute(rPos1, i);
      const t = Math.max(0, Math.min(1, (-v.y - 0.6) / 1.55));
      const taper = 1 - Math.pow(t, 1.2) * 0.72;
      // Get distance to curve centerline approx
      const cx = -0.35 - t * 0.05;
      const cz = 0;
      v.x = cx + (v.x - cx) * taper;
      v.z = cz + (v.z - cz) * taper;
      rPos1.setXYZ(i, v.x, v.y, v.z);
    }
    root1.computeVertexNormals();

    // 3. Right Root (curved tapering root)
    const curve2 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.35, -0.6, 0),
      new THREE.Vector3(0.52, -1.2, -0.06),
      new THREE.Vector3(0.48, -1.75, 0.06),
      new THREE.Vector3(0.36, -2.15, 0.14),
    ]);
    const root2 = new THREE.TubeGeometry(curve2, 32, 0.32, 16, false);
    const rPos2 = root2.attributes.position;
    for (let i = 0; i < rPos2.count; i++) {
      v.fromBufferAttribute(rPos2, i);
      const t = Math.max(0, Math.min(1, (-v.y - 0.6) / 1.55));
      const taper = 1 - Math.pow(t, 1.2) * 0.72;
      const cx = 0.35 + t * 0.05;
      const cz = 0;
      v.x = cx + (v.x - cx) * taper;
      v.z = cz + (v.z - cz) * taper;
      rPos2.setXYZ(i, v.x, v.y, v.z);
    }
    root2.computeVertexNormals();

    // 4. Occlusal protective aura ring
    const ring = new THREE.TorusGeometry(1.6, 0.015, 16, 64);
    ring.rotateX(Math.PI / 2);

    return {
      crownGeo: crown,
      capGeo: cap,
      rootGeo1: root1,
      rootGeo2: root2,
      occlusalRingGeo: ring,
    };
  }, []);

  // Premium Dental Enamel Ceramic Material
  const enamelMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#F7FBFE'),
      emissive: new THREE.Color('#0A1C2C'),
      emissiveIntensity: 0.05,
      roughness: 0.14,
      metalness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.96,
      transmission: 0.12, // subtle natural enamel translucency
      ior: 1.62, // genuine refractive index of natural enamel
      thickness: 1.2,
      specularColor: new THREE.Color('#FFFFFF'),
      specularIntensity: 1.0,
    });
  }, []);

  // Root Dentin Material
  const rootMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#EBF2F7'),
      roughness: 0.28,
      metalness: 0.02,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
      reflectivity: 0.7,
      ior: 1.54,
    });
  }, []);

  // Frame animation: floating, breathing, and mouse follow
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Elegant vertical float
    groupRef.current.position.y = Math.sin(t * 1.4) * 0.12 + 0.35;

    // Smooth continuous axial rotation
    const rotationSpeed = isHovered ? 0.8 : 0.4;
    groupRef.current.rotation.y += delta * rotationSpeed;

    // Subtle gentle tilt with time and cursor
    const mouseX = state.pointer.x * 0.3;
    const mouseY = state.pointer.y * 0.2;
    groupRef.current.rotation.x = Math.sin(t * 0.8) * 0.08 - mouseY;
    groupRef.current.rotation.z = Math.cos(t * 0.9) * 0.06 + mouseX;
  });

  return (
    <group ref={groupRef} scale={[1.25, 1.25, 1.25]}>
      {/* Crown */}
      <mesh geometry={crownGeo} material={enamelMaterial} castShadow receiveShadow />
      {/* Roots */}
      <mesh geometry={rootGeo1} material={rootMaterial} castShadow receiveShadow />
      <mesh geometry={rootGeo2} material={rootMaterial} castShadow receiveShadow />

      {/* Subtle glowing halo ring representing dental wellness */}
      <mesh geometry={occlusalRingGeo} position={[0, 0.6, 0]}>
        <meshBasicMaterial color="#2DD4BF" transparent opacity={0.4} />
      </mesh>

      {/* Little sparkle accent orb */}
      <mesh position={[1.1, 0.8, 0.5]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color="#38A0D9" />
      </mesh>
      <mesh position={[-1.0, 0.4, -0.6]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#2DD4BF" />
      </mesh>
    </group>
  );
}

export function FloatingDentalElements() {
  const pointsRef = useRef();

  // Create subtle floating wellness particles around the tooth
  const particles = useMemo(() => {
    const count = 35;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.8 + Math.random() * 2.2;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      positions[i * 3 + 2] = Math.sin(theta) * radius;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#2476A8"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

