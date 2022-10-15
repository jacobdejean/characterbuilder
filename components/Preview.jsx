import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useState, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

import Trait from './Trait'

export default function Preview(props) {
    return (
      <Canvas camera={{ fov: 30, near: 0.1, far: 1000, position: [0, 0, 15] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Trait
          source={'/models/modern_bedroom/scene.gltf'}
          position={{ x: -3, y: -2, z: 4 }}
          rotation={{ x: 0, y: Math.PI / -3.5, z: 0 }}
          traits={[{
            name: 'juliet starling',
            source: '/models/juliet starling/scene.gltf',
            position: { x: 4, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 }
          }]} />
      </Canvas>
    )
  }