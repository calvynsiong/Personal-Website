import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const RotatingStars = ({ speed }) => {
  const stars = useRef();

  useFrame(() => {
    if (!stars) {
      return;
    }
    stars.current.rotation.x = stars.current.rotation.y += speed;
  });

  return (
    <Stars
      count={4500}
      fade={true}
      radius={1}
      depth={300}
      className='w-full h-full'
      ref={stars}
    />
  );
};

const StarsCanvas = ({ currentTheme, speed }) => {
  console.log(currentTheme);
  return (
    // I know, this is confusing
    <>
      {currentTheme !== 'dark' ? (
        <div className='fixed top-0 left-0 right-0 bottom-0'>
          <Canvas style={{ height: '100%', zIndex: -12 }}>
            <directionalLight intensity={1} castShadow position={[0, 0, 1]} />
            <RotatingStars speed={speed} />
          </Canvas>
        </div>
      ) : null}
    </>
  );
};

export default StarsCanvas;
