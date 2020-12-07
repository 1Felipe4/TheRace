

var Albertosaurus = function(top, left, maxTop, maxLeft, timeBetweenSteps=1.5, height=60, width = 120, color="#55382A"){
  if(top){
  Albertosaurus.count++;
  }
  this.timeBetweenSteps = (Math.random() * (this.maxStepTime - this.minStepTime) + this.minStepTime);
  this.stepDistance = width * .40;
  this.speedlag = 1.9
  this.color = color;
  Animal.call(this, top, left, maxTop, maxLeft, timeBetweenSteps, height, width, this.constructor.name + " " + Albertosaurus.count);
  this.$img = $("<img src='img/albertosaurus.png'>")
  this.$node.append(this.$img);
  this.$node.css("background-color", color )
};

Albertosaurus.count = 0;
Albertosaurus.prototype = Object.create(Animal.prototype);

Albertosaurus.prototype.constructor = Albertosaurus;

Albertosaurus.prototype.step = function(){
    Animal.prototype.step.call(this);
  
};


