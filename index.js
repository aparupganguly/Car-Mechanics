const canvas = document.getElementById("canvas");

canvas. width = 300;


const ctx = canvas.getContext("2d");

const car = new Car(150,100,30,60);
car.draw(ctx);

animate();  


function animate() {

    car.update();

    canvas.height = window.innerHeight;
    
    car.draw(ctx);
    requestAnimationFrame(animate);
}
