import * as THREE from 'three';

import floor from './components/Floor'
import wall from './components/Wall'
import chest from './components/Chest'
import globe from './components/Globe'
import frame from './components/Frame'

import controls from './Controls'
import collisions from './Collisions'

import { useEffect, useRef } from "react";

function MyThree() {
  const refContainer = useRef(null);
  useEffect(() => {
    console.log("MyThree component rendered");

    // creating scene
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas,
        alpha: true,
      });
    // const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current && refContainer.current.appendChild( renderer.domElement );

    // importing components
    chest(scene, true)
    floor(scene)
    wall(scene, [0,1.570796,-11,2,0],"[Controls]\nWASD/QE - Move\nSPACE - Jump\nX - Shoot\n/ - Debug")
    wall(scene, [0,0,0,2,-11],"")
    globe(scene)
    frame(scene)
    
    // default position
    camera.position.z = 3;
    camera.position.x = 9;
    camera.position.y = 2;
    camera.rotation.y = 1.0353982000000002;

    // movements, collisions and physics
    controls(camera)
    collisions(scene,camera, true)

    var animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div ref={refContainer}></div>
  );
}

export default MyThree

