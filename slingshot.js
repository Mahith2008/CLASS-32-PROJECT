class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    attach(body){

       // Matter.Body.setPosition(body, {x: 150 , y: 200});
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("black");
            push();
            if(pointA.x < 220) {
                strokeWeight(5);
              line(pointA.x, pointA.y, pointB.x, pointB.y);
             // line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            } else {
                strokeWeight(5);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
               // line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
            }
            pop();
        }
    }

   
    
}