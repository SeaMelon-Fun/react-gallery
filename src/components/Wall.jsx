import * as THREE from 'three';

const canvas = document.querySelector('#c');

function wall(scene, position, text) {
    if (text !== ""){
        // wall text
        const ctx = document.createElement('canvas').getContext('2d');
        ctx.font = "10px Arial";
        ctx.fillStyle = "#eeeeee";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black'

        // writing the text
        let ty = 30
        for (let t of text.split("\n")){
            ctx.fillText(t,15,ty);
            ty+=20;
        }

        const texture = new THREE.Texture(ctx.canvas)
        texture.needsUpdate = true
        const materialWall = new THREE.MeshBasicMaterial( {map:texture, side: THREE.DoubleSide} );
        const geometryWall = new THREE.PlaneGeometry( 22, 10 );
        const planeWall = new THREE.Mesh( geometryWall, materialWall );
        scene.add( planeWall );
        // placement
        planeWall.rotation.x = position[0]
        planeWall.rotation.y = position[1]
        planeWall.position.x = position[2]
        planeWall.position.y = position[3]
        planeWall.position.z = position[4]
    }else{
        const materialWall = new THREE.MeshBasicMaterial( {color: 0xeeeeee, side: THREE.DoubleSide} );
        const geometryWall = new THREE.PlaneGeometry( 22, 10 );
        const planeWall = new THREE.Mesh( geometryWall, materialWall );
        scene.add( planeWall );
        // placement
        planeWall.rotation.x = position[0]
        planeWall.rotation.y = position[1]
        planeWall.position.x = position[2]
        planeWall.position.y = position[3]
        planeWall.position.z = position[4]
    }
}

export default wall

