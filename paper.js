class Paper{      
    constructor(x,y,width,height){

var options={
restitution:0.3,
isStatic:false,
density:1.2,
friction:0.5
}
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)

    }


    
display(){
    var pos=this.body.position;

    rect(pos.x,pos.y,this.width,this.height)

}
    }


