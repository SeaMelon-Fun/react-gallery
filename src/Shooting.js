import * as THREE from 'three';

function shooting(scene, camera){
    document.addEventListener("keydown", function(event) {
        if(event.keyCode === 13){
            const textureBall = new THREE.TextureLoader().load('http://localhost:3000/textures/football.jpg' ); 
            var ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
            // var ballMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff, opacity: 0.5, transparent: true });
            var ballMaterial = new THREE.MeshBasicMaterial({map:textureBall});
            var ball = new THREE.Mesh(ballGeometry, ballMaterial);
            ball.position.set(camera.position.x + (Math.random() - 0.5) * 0.5, camera.position.y + (Math.random() - 0.5) * 0.5, camera.position.z + (Math.random() - 0.5) * 0.5);
            var direction = new THREE.Vector3();
            camera.getWorldDirection(direction);
            direction.normalize();
            ball.velocity = direction.multiplyScalar(0.2);
            scene.add(ball);

            function animate() {
                ball.position.add(ball.velocity);
                requestAnimationFrame(animate);
            }
            animate();

            setTimeout(() => {
                scene.remove(ball);
                ball.geometry.dispose();
                ball.material.dispose();
            }, 1000); 
        }
    });
}
export default shooting;
