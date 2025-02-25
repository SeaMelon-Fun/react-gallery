import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function chest(scene, debug) {
    const geometry = new THREE.BoxGeometry( 3, 2, 2 );
    const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    const box = new THREE.Mesh( geometry, material );
    box.position.set(6,-2.5,-9.5);
    scene.add( box );

    const loader = new GLTFLoader();
    loader.load( 'http://localhost:3000/models/chest.glb', function ( gltf ) {
        gltf.scene.scale.multiplyScalar(4);
        gltf.scene.position.x = 6;
        gltf.scene.position.z = -9.5;
        gltf.scene.position.y = -2.5;
        scene.add( gltf.scene );
        scene.remove(box);
    }, undefined, function ( error ) {
        console.error( error );
    } );
    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 5 );
    scene.add( light );
    const helper = new THREE.HemisphereLightHelper( light, 2 );
    if (debug){
        scene.add(helper)
    }
}

export default chest

