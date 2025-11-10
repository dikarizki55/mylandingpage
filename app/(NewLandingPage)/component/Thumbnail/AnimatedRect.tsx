"use client";
import { useFrame } from "@react-three/fiber";
import { Fragment, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import RoundedRect from "./RoundedRect";
import { easing } from "../helper/cubicBezier";

export default function AnimatedRect({
  select,
  setSelect,
  img,
}: {
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
  img: string[];
}) {
  const slideRef = useRef<
    ({
      group: THREE.Group | null;
      mesh: THREE.Mesh | null;
    } | null)[]
  >([]);

  const progRef = useRef(0);
  const progRotRef = useRef(0);
  // const [transition, setTransition] = useState(false);
  const [toDef, setToDef] = useState(false);
  const internalChange = useRef(false);
  const transition = useRef(false);

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const startQuats = useRef<THREE.Quaternion[]>([]);
  const targetQuats = useRef<THREE.Quaternion[]>([]);
  const startQuatsMesh = useRef<THREE.Quaternion[]>([]);
  const targetQuatsMesh = useRef<THREE.Quaternion[]>([]);

  const defRot = useRef<
    {
      endGroup: THREE.Quaternion;
      endMesh: THREE.Quaternion;
    }[]
  >([]);

  useEffect(() => {
    if (!internalChange.current) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      transition.current = true;
      progRef.current = 0;
      progRotRef.current = 0;

      startQuats.current = slideRef.current.map((item) => {
        const q = new THREE.Quaternion();
        item?.group?.getWorldQuaternion(q);
        return q;
      });

      targetQuats.current = slideRef.current.map((_, idx) => {
        const angle = 28;
        const from = idx * -angle;
        const target = from + select * angle;
        const q = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(0, 0, THREE.MathUtils.degToRad(target))
        );
        return q;
      });

      startQuatsMesh.current = slideRef.current.map((item) => {
        const rot = item?.mesh?.rotation || new THREE.Euler(0, 0, 0);
        return new THREE.Quaternion().setFromEuler(rot);
      });

      targetQuatsMesh.current = slideRef.current.map((_, idx) => {
        const angle = idx === select ? 0 : THREE.MathUtils.degToRad(-35);
        const targetEuler = new THREE.Euler(0, angle, 0);
        return new THREE.Quaternion().setFromEuler(targetEuler);
      });
    }
  }, [select]);

  const moveToDefault = () => {
    timeoutRef.current = setTimeout(() => {
      setToDef(true);
      progRef.current = 0;
      internalChange.current = true;
      setSelect(1);

      startQuats.current = slideRef.current.map((item) => {
        const q = new THREE.Quaternion();
        item?.group?.getWorldQuaternion(q);
        return q;
      });

      startQuatsMesh.current = slideRef.current.map((item) => {
        const rot = item?.mesh?.rotation || new THREE.Euler(0, 0, 0);
        return new THREE.Quaternion().setFromEuler(rot);
      });

      defRot.current = slideRef.current.map((_, idx) => {
        return {
          endGroup: new THREE.Quaternion().setFromEuler(
            new THREE.Euler(0, 0, THREE.MathUtils.degToRad(idx * -15 + 15))
          ),
          endMesh: new THREE.Quaternion().setFromEuler(
            new THREE.Euler(0, THREE.MathUtils.degToRad(-35), 0)
          ),
        };
      });
    }, 3000);
  };

  useFrame((_, delta) => {
    if (toDef) {
      const speed = 0.5;
      progRef.current += speed * delta;
      const t = Math.min(progRef.current, 1);

      slideRef.current.forEach((item, idx) => {
        item?.group?.quaternion.slerpQuaternions(
          startQuats.current[idx],
          defRot.current[idx].endGroup,
          easing.easeCustom(t)
        );

        item?.mesh?.quaternion.slerpQuaternions(
          startQuatsMesh.current[idx],
          defRot.current[idx].endMesh,
          easing.easeCustom(t)
        );
      });
      if (t >= 1) {
        setToDef(false);
        internalChange.current = false;
      }
    }

    if (transition.current) {
      const speed = 0.5;
      progRef.current += speed * delta;
      const t = Math.min(progRef.current, 1);

      slideRef.current.forEach((item, idx) => {
        const group = item?.group;
        if (!group) return;

        const fromQ = startQuats.current[idx];
        const toQ = targetQuats.current[idx];
        group.quaternion.slerpQuaternions(fromQ, toQ, easing.easeCustom(t));

        if (targetQuatsMesh.current[idx] !== startQuatsMesh.current[idx]) {
          item?.mesh?.quaternion.slerpQuaternions(
            startQuatsMesh.current[idx],
            targetQuatsMesh.current[idx],
            easing.easeCustom(t)
          );
        }
      });

      if (t >= 1) {
        transition.current = false;
        moveToDefault();
      }
    }
  });
  return (
    <>
      {img.map((item, idx) => (
        <Fragment key={item + idx}>
          <RoundedRect
            ref={(el) => {
              slideRef.current[idx] = el;
            }}
            rotation={[0, 0, idx * -15 - 50]}
            imageSrc={item}
          />
        </Fragment>
      ))}
    </>
  );
}
