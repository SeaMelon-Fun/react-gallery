function controls(camera){
    var theta_rad = 1.0353982000000002;

    var moveForward = false;
    var moveBackward = false;
    var moveLeft = false;
    var moveRight = false;

    document.addEventListener("keydown", onDocumentKeyDown, false);
    document.addEventListener("keyup", onDocumentKeyUp, false);

    var angle = 0.05;
    var step = 0.1;
    
    var isJumping = false;
    var jumpSpeed = 0.2;
    var velocityY = 0;
    var gravity = 0.01;

    function onDocumentKeyDown(event) {
        var keyCode = event.which;
        switch (keyCode) {
            case 87:
                moveForward = true;
                break;
            case 83:
                moveBackward = true;
                break;
            case 65:
                moveLeft = true;
                break;
            case 68:
                moveRight = true;
                break;
            case 81:
                camera.rotation.y += angle;
                theta_rad += angle;
                break;
            case 69:
                camera.rotation.y -= angle;
                theta_rad -= angle;
                break;
            case 17:
                camera.position.z = 3;
                camera.position.x = 9;
                camera.rotation.y = 1.0353982000000002;
                theta_rad = 1.0353982000000002;
                break;
        }
    };

    function onDocumentKeyUp(event) {
        var keyCode = event.which;
        switch (keyCode) {
            case 87:
                moveForward = false;
                break;
            case 83:
                moveBackward = false;
                break;
            case 65:
                moveLeft = false;
                break;
            case 68:
                moveRight = false;
                break;
            case 32:
                isJumping = true;
                velocityY = jumpSpeed;
                break;
        }
    };

    function animate() {
        if (moveForward) {
            camera.position.z -= step*Math.cos(theta_rad);
            camera.position.x -= step*Math.sin(theta_rad);
        }
        if (moveBackward) {
            camera.position.z += step*Math.cos(theta_rad);
            camera.position.x += step*Math.sin(theta_rad);
        }
        if (moveLeft) {
            camera.position.z -= step*Math.cos(theta_rad+1.570796);
            camera.position.x -= step*Math.sin(theta_rad+1.570796);
        }
        if (moveRight) {
            camera.position.z += step*Math.cos(theta_rad+1.570796);
            camera.position.x += step*Math.sin(theta_rad+1.570796);
        }
        if (isJumping) {
            camera.position.y += velocityY;
            velocityY -= gravity;
            if (camera.position.y <= 1) { // assuming ground level is at y=1
                camera.position.y = 1;
                isJumping = false;
                velocityY = 0;
            }
        }

        // walls
        if (Math.abs(camera.position.z) > 10){
            camera.position.z = 10*Math.sign(camera.position.z)
        }
        if (Math.abs(camera.position.x) > 10){
            camera.position.x = 10*Math.sign(camera.position.x)
        }

        requestAnimationFrame(animate);
    };
    animate();
}
export default controls;