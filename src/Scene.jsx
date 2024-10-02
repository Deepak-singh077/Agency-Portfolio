import React, { useRef, useEffect } from 'react'
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Scene = () => {
    let tex = useTexture("/img.png");
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta ; // Rotate continuously
        }
    });

    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1, 1, 2, 60, 60, true]} />
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>  
    )
}

export default Scene