class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,

        }

        this.w = width;
        this.h = height;

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    
    display() {
        
        fill("green");
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
    }
}