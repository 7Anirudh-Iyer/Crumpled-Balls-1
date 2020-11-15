class Ground{
    constructor(x,y,angle){
        var json={
            isStatic: true
        }
        this.ground1=Bodies.rectangle(x,y,windowWidth,10,json)
        World.add(world,this.ground1)
    }
    display(){
        var a=this.ground1.position
        var ang=this.ground1.angle
        push()
        translate(a.x,a.y)
        rotate(ang)
        fill("black")
        rect(0,0,windowWidth,10)
        pop()
    }
}