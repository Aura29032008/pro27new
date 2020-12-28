class Chain {
constructor(BodyA,BodyB){
    var options={
        bodyA:BodyA,
        bodyB:BodyB,
        stiffness:0.6,
        length:10,
        isStatic:true
    }      
     this.chain=Constraint.create(options) ;
     World.add(world,this.chain);
     
    
}
display(){
    strokeWeight(4);
    fill("purple");
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
}
}