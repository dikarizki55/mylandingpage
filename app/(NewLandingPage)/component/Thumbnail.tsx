"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { IconRightArrow } from "./ui/Icon";
import * as THREE from "three";
import AnimatedRect from "./Thumbnail/AnimatedRect";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/app/(Portfolio)/fashion/products/[id]/hooks/useMediaQuery";

export default function Thumbnail({
  data,
}: {
  data: { name: string; img: string }[];
}) {
  const [select, setSelect] = useState(1);

  return (
    <div className=" w-full">
      <div className=" w-full h-[260px] lg:h-[700px] lg:-mt-10 ">
        <Canvas
          shadows
          camera={{ position: [0, 0, 9], fov: 20 }}
          gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <EditCamPosition />
          <ambientLight intensity={2} />
          <pointLight
            position={[-1, 0, 5]}
            intensity={25}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={20}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            shadow-bias={-0.1}
            shadow-radius={1000}
          />
          <AnimatedRect
            select={select}
            setSelect={setSelect}
            img={data.map((item) => item.img)}
          />
        </Canvas>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.7, delay: 0.7 }}
        key={select}
        className=" w-full font-light text-center absolute -mt-7 text-[18px] text-[#6E6E73] left-1/2 -translate-x-1/2 lg:top-[650px] lg:text-[28px]"
      >
        {data[select].name}
      </motion.div>
      <div className=" absolute right-8 lg:top-[700px] lg:right-80 flex gap-4 mt-3">
        <button
          className={`w-9 aspect-square rounded-full bg-[#d2d2d7]/60 flex items-center justify-center  ${
            select === 0 ? "opacity-45" : "opacity-100 cursor-pointer"
          } transition-all duration-300`}
          onClick={() => setSelect(Math.max(select - 1, 0))}
        >
          <IconRightArrow className=" text-black/60 rotate-180 -ml-0.5" />
        </button>
        <button
          className={`w-9 aspect-square rounded-full bg-[#d2d2d7]/60 flex items-center justify-center ${
            select === data.length - 1
              ? "opacity-45"
              : "opacity-100 cursor-pointer"
          }  transition-all duration-300`}
          onClick={() => {
            setSelect(Math.min(select + 1, data.length - 1));
          }}
        >
          <IconRightArrow className=" text-black/60 ml-0.5" />
        </button>
      </div>
    </div>
  );
}

function EditCamPosition() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { camera } = useThree();

  useEffect(() => {
    if (isMobile) {
      camera.position.set(0, 0, 9);
    } else {
      camera.position.set(0, -0.5, 12);
    }
  }, [camera.position, isMobile]);

  return null;
}
