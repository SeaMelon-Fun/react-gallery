import * as THREE from 'three';
import Swal from 'sweetalert2'

function collisions(scene, camera, show){
    let display = 0.5;
    if (!show){
        display = 0;
    }

    // seele portrait
    const geometryPortrait = new THREE.BoxGeometry( 0.2, 7, 5 );
    const materialPortrait = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: display, transparent: true } );
    const portraitCollision = new THREE.Mesh( geometryPortrait, materialPortrait );
    portraitCollision.position.set(-10.5,2.5,-3);
    scene.add( portraitCollision );
    // seele splash art
    const geometrySplash = new THREE.BoxGeometry( 7, 5, 0.2 );
    const materialSplash = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: display, transparent: true } );
    const splashCollision = new THREE.Mesh( geometrySplash, materialSplash );
    splashCollision.position.set(0,2.5,-10.5);
    scene.add( splashCollision );
    // globe
    const geometryGlobe = new THREE.BoxGeometry( 3, 3, 3 );
    const materialGlobe = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: display, transparent: true } );
    const globeCollision = new THREE.Mesh( geometryGlobe, materialGlobe );
    globeCollision.position.set(2,-1,4);
    scene.add( globeCollision );
    // chest
    const geometryChest = new THREE.BoxGeometry( 3, 2, 2 );
    const materialChest = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: display, transparent: true } );
    const chestCollision = new THREE.Mesh( geometryChest, materialChest );
    chestCollision.position.set(6,-2,-9.5);
    scene.add( chestCollision );
    // camera
    const geometryCamera = new THREE.BoxGeometry( 2, 8, 2 );
    const materialCamera = new THREE.MeshBasicMaterial( { color: 0x00ff00, opacity: display, transparent: true } );
    const cameraCollision = new THREE.Mesh( geometryCamera, materialCamera );
    cameraCollision.position.set(0,-2,0);
    scene.add( cameraCollision );

    // check collisions
    let collisionStates = {
        "portrait":false,
        "splash":false,
        "chest":false,
        "globe":false
    }
    function checkCollision() {
        const chestBox3 = new THREE.Box3().setFromObject(chestCollision);
        const cameraBox3 = new THREE.Box3().setFromObject(cameraCollision);
        if (chestBox3.intersectsBox(cameraBox3) && collisionStates.chest === false) {
            Swal.fire({
                title: "Chest",
                text: "There is nothing inside",
                icon: "success"
            });
            collisionStates.chest = true;
        }else if (!chestBox3.intersectsBox(cameraBox3)){
            collisionStates.chest = false;
        }
    }
    function animate() {
        cameraCollision.position.x = camera.position.x;
        cameraCollision.position.z = camera.position.z;
        requestAnimationFrame(animate);
        checkCollision();
    }
    animate();
}

export default collisions;