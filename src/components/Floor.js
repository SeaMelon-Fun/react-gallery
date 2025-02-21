import * as THREE from 'three';

function floor(scene) {
  const textureWood = new THREE.TextureLoader().load('http://localhost:3000/textures/wood.jpg' ); 
  const geometry = new THREE.BoxGeometry( 22, 22, 0.5 );
  const material = new THREE.MeshBasicMaterial( {map:textureWood, side: THREE.DoubleSide} );
  const plane = new THREE.Mesh( geometry, material );
  scene.add( plane );
  plane.rotation.x = 1.570796
  plane.position.y = -3
}

export default floor

