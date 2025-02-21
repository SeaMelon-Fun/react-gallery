import * as THREE from 'three';

function wall(scene, position) {
    // wall
    const geometryWall = new THREE.PlaneGeometry( 22, 10 );
    const materialWall = new THREE.MeshBasicMaterial( {color: 0xeeeeee, side: THREE.DoubleSide} );
    const planeWall = new THREE.Mesh( geometryWall, materialWall );
    scene.add( planeWall );

    // placement
    planeWall.rotation.x = position[0]
    planeWall.rotation.y = position[1]
    planeWall.position.x = position[2]
    planeWall.position.y = position[3]
    planeWall.position.z = position[4]
}

export default wall

