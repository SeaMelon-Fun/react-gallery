import * as THREE from 'three';

function frame(scene) {
    const textureFrame = new THREE.TextureLoader().load('http://localhost:3000/textures/seele.jpg' ); 
    const geometryFrame = new THREE.BoxGeometry( 0.2, 7, 5 ); 
    const materialFrame = new THREE.MeshBasicMaterial( { map:textureFrame } );
    const boxFrame = new THREE.Mesh( geometryFrame, materialFrame ); 
    scene.add( boxFrame );
    boxFrame.position.y = 2.5;
    boxFrame.position.z = -3;
    boxFrame.position.x = -10.8;

    const textureFrameB = new THREE.TextureLoader().load('http://localhost:3000/textures/seele_splash.jpg' ); 
    const geometryFrameB = new THREE.BoxGeometry( 7, 5, 0.2 ); 
    const materialFrameB = new THREE.MeshBasicMaterial( { map:textureFrameB } );
    const boxFrameB = new THREE.Mesh( geometryFrameB, materialFrameB ); 
    scene.add( boxFrameB );
    boxFrameB.position.y = 2.5;
    boxFrameB.position.z = -10.8;
}

export default frame

