"use client"
import MyBox from '@/components/MyBox';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

 export default function Model() {
    return (
        <div>
            <Canvas>
                <MyBox/>            
            </Canvas>
        </div>
    )
}