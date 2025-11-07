"use client";
import { useLoader } from "@react-three/fiber";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import * as THREE from "three";

const RoundedRect = forwardRef<
  {
    group: THREE.Group | null;
    mesh: THREE.Mesh | null;
  },
  { rotation?: [number, number, number]; imageSrc: string }
>(({ rotation = [0, 0, 0], imageSrc }, ref) => {
  const width = (16 / 9) * 2;
  const height = 2;
  const radius = 0.2;
  const depth = 0.02;

  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  // 🔹 Expose kedua ref ke parent
  useImperativeHandle(ref, () => ({
    group: groupRef.current,
    mesh: meshRef.current,
  }));

  const texture = useLoader(THREE.TextureLoader, imageSrc);
  texture.colorSpace = THREE.SRGBColorSpace;

  const textmat = new THREE.MeshStandardMaterial({
    map: texture,
    emissive: "#ffffff",
    emissiveIntensity: 0.2,
    emissiveMap: texture,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  const emptymat = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    side: THREE.DoubleSide,
  });

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const x = -width / 2;
    const y = -height / 2;

    s.moveTo(x + width - radius, y);
    s.lineTo(x + radius, y);
    s.quadraticCurveTo(x, y, x, y + radius);
    s.lineTo(x, y + height - radius);
    s.quadraticCurveTo(x, y + height, x + radius, y + height);
    s.lineTo(x + width - radius, y + height);
    s.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    s.lineTo(x + width, y + radius);
    s.quadraticCurveTo(x + width, y, x + width - radius, y);
    s.lineTo(x + width - radius, y);
    return s;
  }, [width, height, radius]);

  // 🧱 Side geometry (tanpa tutup)
  const geometry = useMemo(() => {
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: depth,
      bevelEnabled: false,
    });

    // Hitung ulang bounding box
    geo.computeBoundingBox();
    const bbox = geo.boundingBox!;
    const size = new THREE.Vector3();
    bbox.getSize(size);

    // Normalisasi UV berdasarkan posisi vertex terhadap bounding box
    const pos = geo.attributes.position;
    const uv = geo.attributes.uv;

    for (let i = 0; i < uv.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const u = (x - bbox.min.x) / size.x;
      const v = (y - bbox.min.y) / size.y;
      uv.setXY(i, u, v);
    }

    uv.needsUpdate = true;

    return geo;
  }, [shape, depth]);

  const rad = (radius: number) => {
    return THREE.MathUtils.degToRad(radius);
  };

  return (
    <group
      ref={groupRef}
      position={[0, -7, 0]}
      rotation={[rad(rotation[0]), rad(rotation[1]), rad(rotation[2])]}
      castShadow
      receiveShadow
    >
      <mesh
        ref={meshRef}
        geometry={geometry}
        material={[textmat, emptymat]}
        position={[0, 7, 0]}
        rotation={[rad(0), rad(-35), rad(0)]}
        castShadow
        receiveShadow
      />
    </group>
  );
});

RoundedRect.displayName = "RoundedRect";

export default RoundedRect;
