class ball1{
    constructor(x,y){
        var json={
            restitution: 0.7,
            friction: 1.0,
            density: 1.2
        }
        this.Paper1=Bodies.circle(x,y,10,json)
        World.add(world,this.Paper1)
    }
    display(){
        var a=this.Paper1.position
        var ang=this.Paper1.angle
        push()
        translate(a.x,a.y)
        rotate(ang)
        ellipseMode(RADIUS)
        fill("white")
        ellipse(0,0,10)
        pop()
    }
}



