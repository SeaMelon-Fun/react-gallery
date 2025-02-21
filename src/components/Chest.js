import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function chest(scene) {
    const loader = new GLTFLoader();
    loader.load( 'http://localhost:3000/models/chest.glb', function ( gltf ) {
        gltf.scene.scale.multiplyScalar(4);
        gltf.scene.position.x = 6;
        gltf.scene.position.z = -9.5;
        gltf.scene.position.y = -2.5;
        scene.add( gltf.scene );
    }, undefined, function ( error ) {
        console.error( error );
    } );
    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 5 );
    scene.add( light );
    const helper = new THREE.HemisphereLightHelper( light, 2 );
}

export default chest

