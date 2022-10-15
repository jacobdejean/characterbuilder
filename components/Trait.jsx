import { useState, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

export default function Trait(props) {
    const ref = useRef()
    const [rotating, setRotating] = useState(true)
    const gltf = useLoader(GLTFLoader, props.source)
  
    function rotate(e) {
      if (!rotating)
        return;
  
      ref.current.rotation.x += e.movementX
      ref.current.rotation.y += e.movementY
    }
  
    let traits = []
  
    if (props.traits) {
      traits = props.traits.map(trait => {
        return <Trait key={trait.name} {...trait} />
      })
    }
  
    return (
      <primitive
        ref={ref}
        object={gltf.scene}
        position={new THREE.Vector3(props.position.x, props.position.y, props.position.z)}
        rotation={new THREE.Euler(props.rotation.x, props.rotation.y, props.rotation.z)}
      >
        <meshStandardMaterial color={'white'} />
        {traits}
      </primitive>
    )
  
  }