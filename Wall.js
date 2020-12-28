class Wall{
    constructor(x,y) {
      var options = {
          'friction':1,
          'density':1.5,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      
      World.add(world, this.body);
    }
    display(){
      var post = this.body.position;
        rectMode(CENTER);
        fill("Orange");
        rect(post.x,post.y,this.width,this.height);
    }
  }