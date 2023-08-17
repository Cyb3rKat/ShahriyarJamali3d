'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, } from 'react'

import { Gltf, ScrollControls, useProgress, useScroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";

import {
    SheetProvider,
    PerspectiveCamera,
    useCurrentSheet,
} from "@theatre/r3f";

import MainScene from '@/components/scene/MainScene';
import shahriyarState from '../../../public/shahriyar-theatre-2.json'
import SideMenu from '@/components/react/SideMenu';

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";
// studio.extend(extension);
// studio.initialize();

function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()





    return (<div className='h-screen w-screen bg-black flex flex-col justify-center items-center text-white'>
        <h1>Loading Experience</h1>
        <h1>This can take upto 2 to 3 minutes depending on your connection please be patient</h1>
        <h2>{progress.toFixed(1)} % loaded</h2>
    </div>)
}



const page = () => {

    const sheet = getProject("shahriyar", { state: shahriyarState }).sheet("Scene");


    return (
        <div className='min-h-screen scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 overflow-hidden flex'>
            <SideMenu />
            <Suspense fallback={<Loader />}>
                <Canvas gl={{ preserveDrawingBuffer: true }} shadows style={{ height: '100vh', overflow: 'hidden' }} >
                    <ScrollControls pages={30} damping={0.5}>
                        <SheetProvider sheet={sheet}>
                            <MainScene />
                        </SheetProvider>
                    </ScrollControls>
                </Canvas>
            </Suspense>
        </div >
    )
}

export default page