class Rope{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.02,
            length: 1
        }
        this.pointB= point2
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        if(this.rope.bodyA!==null){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    fly(){
        this.rope.bodyA=null;
    }
    attach(body){
        this.rope.bodyA=body;
        }
    
}


