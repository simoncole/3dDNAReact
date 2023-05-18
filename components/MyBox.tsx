import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
 
export default function MyBox(){
    const boxRef = useRef<Mesh>(null);
    useFrame(() => {
        if(!boxRef.current){
            return
        }

        boxRef.current.rotation.x += 0.01;
        boxRef.current.rotation.y += 0.01;
    });
    
    return(
        <mesh ref={boxRef}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial />
        </mesh>
    )
}