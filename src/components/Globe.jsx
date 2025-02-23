import * as THREE from 'three';

function globe(scene) {
    const geometryStand = new THREE.CylinderGeometry( 1, 1, 0.2, 32 ); 
    const materialStand = new THREE.MeshBasicMaterial( {color: 0x444444} ); 
    const cylinderStand = new THREE.Mesh( geometryStand, materialStand ); 
    scene.add( cylinderStand );
    cylinderStand.position.y = -2;
    cylinderStand.position.z = 4;
    cylinderStand.position.x = 2;

    const textureEarth = new THREE.TextureLoader().load('http://localhost:3000/textures/earth.jpg' ); 
    const geometryGem = new THREE.IcosahedronGeometry( 1, 1, 0.5, 32 ); 
    const materialGem = new THREE.MeshBasicMaterial( {map:textureEarth} ); 
    const cylinderGem = new THREE.Mesh( geometryGem, materialGem ); 
    scene.add( cylinderGem );
    cylinderGem.position.y = -0.5;
    cylinderGem.position.z = 4;
    cylinderGem.position.x = 2;

    function animate() {
        cylinderGem.rotation.x += 0.01;
        cylinderGem.rotation.y += 0.01;
        requestAnimationFrame(animate);
    }
    animate();
}

export default globe

