class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,length:150
        }
        this.pointB=pointB
        this.rope=Matter.Body.Constraint.create(options)
        World.add(world,this.rope)
    }
 display(){
     var pointA=this.rope.bodyA.position
     var pointB=this.pointB
     stroke("red")
     strokeWeight(3)
     line(pointB.x,pointB.y,pointA.x,pointA.y)
 }

   
}