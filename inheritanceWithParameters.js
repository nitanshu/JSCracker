function Brick(breadth) {
    this.width = 10;
    this.height = 20;
    this.breadth = breadth;
  }

  function BlueGlassBrick(breadth) {
    Brick.call(this, breadth);
  
    this.opacity = 0.5;
    this.color = 'blue';
  }

  a= new BlueGlassBrick(5)
  a.width
a.breadth

  