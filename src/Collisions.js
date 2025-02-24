import * as THREE from 'three';
import Swal from 'sweetalert2'

function collisions(scene, camera, debug){
    let display = debug ? 0.5 : 0;

    // seele portrait
    const geometryPortrait = new THREE.BoxGeometry( 7, 7, 5 );
    const materialPortrait = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: display, transparent: true } );
    const portraitCollision = new THREE.Mesh( geometryPortrait, materialPortrait );
    portraitCollision.position.set(-10.5,2.5,-3);
    scene.add( portraitCollision );
    // seele splash art
    const geometrySplash = new THREE.BoxGeometry( 7, 5, 4 );
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
    const geometryChest = new THREE.BoxGeometry( 3, 2, 8 );
    const materialChest = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: display, transparent: true } );
    const chestCollision = new THREE.Mesh( geometryChest, materialChest );
    chestCollision.position.set(6,-2,-9.5);
    scene.add( chestCollision );
    // camera
    const geometryCamera = new THREE.BoxGeometry( 1, 10, 1 );
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
        const globeBox3 = new THREE.Box3().setFromObject(globeCollision);
        const portraitBox3 = new THREE.Box3().setFromObject(portraitCollision);
        const splashBox3 = new THREE.Box3().setFromObject(splashCollision);
        const cameraBox3 = new THREE.Box3().setFromObject(cameraCollision);

        // chest collision
        if (chestBox3.intersectsBox(cameraBox3) && collisionStates.chest === false) {
            Swal.fire({
                title: "Chest",
                text: "There is nothing inside",
                icon: "info"
            });
            collisionStates.chest = true;
        }else if (!chestBox3.intersectsBox(cameraBox3)){
            collisionStates.chest = false;
        }

        // globe collision
        if (globeBox3.intersectsBox(cameraBox3) && collisionStates.globe === false) {
            Swal.fire({
                title: "Globe",
                text: "The world is spinning",
                icon: "info"
            });
            collisionStates.globe = true;
        }else if (!globeBox3.intersectsBox(cameraBox3)){
            collisionStates.globe = false;
        }

        // portrait collision
        if (portraitBox3.intersectsBox(cameraBox3) && collisionStates.portrait === false) {
            Swal.fire({
                title: "Seele's Portrait",
                text: "A spirited and valiant key member of Wildfire who grew up in the perilous Underworld of Belobog",
                icon: "info"
            });
            collisionStates.portrait = true;
        }else if (!portraitBox3.intersectsBox(cameraBox3)){
            collisionStates.portrait = false;
        }

        // splash collision
        if (splashBox3.intersectsBox(cameraBox3) && collisionStates.splash === false) {
            Swal.fire({
                title: "Seele's Splash Art",
                text: "Disappear among the sea of butterflies... illusions of the past!",
                icon: "info"
            });
            collisionStates.splash = true;
        }else if (!splashBox3.intersectsBox(cameraBox3)){
            collisionStates.splash = false;
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