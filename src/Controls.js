function controls(camera){
    var theta_rad = 1.0353982000000002;

    document.addEventListener("keydown", onDocumentKeyDown, false);
    var angle = 0.05;
    var step = 0.2;
    function onDocumentKeyDown(event) {
        var keyCode = event.which;
        if (keyCode == 87) {
            camera.position.z -= step*Math.cos(theta_rad);
            camera.position.x -= step*Math.sin(theta_rad);
        }
        if (keyCode == 83) {
            camera.position.z += step*Math.cos(theta_rad);
            camera.position.x += step*Math.sin(theta_rad);
        }
        if (keyCode == 65) {
            camera.position.z -= step*Math.cos(theta_rad+1.570796);
            camera.position.x -= step*Math.sin(theta_rad+1.570796);
        }
        if (keyCode == 68) {
            camera.position.z += step*Math.cos(theta_rad+1.570796);
            camera.position.x += step*Math.sin(theta_rad+1.570796);
        }
        if (keyCode == 81) {
            camera.rotation.y += angle;
            theta_rad += angle;
        }
        if (keyCode == 69) {
            camera.rotation.y -= angle;
            theta_rad -= angle;
        }
        if (keyCode == 17) {
            camera.position.z = 3;
            camera.position.x = 9;
            camera.rotation.y = 1.0353982000000002;
            theta_rad = 1.0353982000000002;
        }
    
        console.log(`x is ${camera.position.x}`)
        console.log(`z is ${camera.position.z}`)
        console.log(`theta is ${theta_rad}`)
    
        if (camera.position.z > 10){
            camera.position.z = 10;
        }
        if (camera.position.x > 10){
            camera.position.x = 10;
        }
        if (camera.position.z < -10){
            camera.position.z = -10;
        }
        if (camera.position.x < -10){
            camera.position.x = -10;
        }
    };
}
export default controls;