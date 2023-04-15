

// protótipo  =  a classe mãe, a partir dela vão vir os objetos 

class Ground 
{
  constructor(x, y, w,h) 
  {

    // guardar dados 
    let options = {
     isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {

    let pos = this.body.position;

    // encapsular metodos de um determinado objeto
    
    push();

    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    rect(pos.x,pos.y, this.w, this.h);

    pop();

  }
}
