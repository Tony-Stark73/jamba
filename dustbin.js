class dust{
constructor(x,y,width,height){

var rest={
    restitution:1
}

this.body=Bodies.rectangle(x,y,width,height)
this.width=width;
this.height=height;
World.add(world,this.body)
}

display(){
    var pos=this.body.position;
    fill("red"); 
rect(pos.x,pos.y,this.width,this.height)

}
}