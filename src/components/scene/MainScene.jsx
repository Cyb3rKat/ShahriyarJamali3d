'use client'

import React, { useRef } from 'react'
import ShahriyarModel from '@/components/models/shahriyar'
import { OrbitControls, useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Gltf, ScrollControls, useScroll } from "@react-three/drei";
import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { getProject, val } from "@theatre/core";
import { SpotLightHelper } from 'three'

const MainScene = () => {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const lightref = useRef()

    // our callback will run on every animation frame
    useFrame(() => {
        // the length of our sequence
        const sequenceLength = val(sheet.sequence.pointer.length);
        // update the "position" of the playhead in the sequence, as a fraction of its whole length
        sheet.sequence.position = scroll.offset * sequenceLength;
    });


    return (
        <>
            <ShahriyarModel />
            <ambientLight intensity={2} />
            <spotLight ref={lightref} intensity={10} color={'white'} position={[-11, 2, 10]} />
            <spotLight ref={lightref} intensity={100} color={'white'} position={[-6, 6, 1]} />
            <spotLight ref={lightref} intensity={100} color={'white'} position={[-17, 10, 20]} />
            <spotLight ref={lightref} intensity={200} color={'white'} position={[-17, 4, -12]} />
            <spotLight ref={lightref} intensity={200} color={'black'} position={[-17, 1, -12]} />


            <spotLight ref={lightref} intensity={100} color={'red'} position={[15, 10, 20]} />


            <PerspectiveCamera
                theatreKey="Camera"
                makeDefault
                position={[0, 0, 0]}
                fov={90}
                near={0.1}
                far={70}
            />
        </>
    )
}

export default MainScene