

var Kangaroo = function(top, left, maxTop, maxLeft, timeBetweenSteps=.79, height=50, width = 80, color="#C66F30"){
  if(top){
  Kangaroo.count++;
  }
  this.timeBetweenSteps = (Math.random() * (this.maxStepTime - this.minStepTime) + this.minStepTime);
  this.stepDistance = width * .48;
  this.speedlag = 3.3
  this.color = color;
  Animal.call(this, top, left, maxTop, maxLeft, timeBetweenSteps, height, width, this.constructor.name + " " + Kangaroo.count);
  this.$img = $("<img src='img/kangaroo.png'>")
  this.$node.append(this.$img);
  this.$node.css("background-color", color )
};

Kangaroo.count = 0;
Kangaroo.prototype = Object.create(Animal.prototype);

Kangaroo.prototype.constructor = Kangaroo;

Kangaroo.prototype.step = function(){
    Animal.prototype.step.call(this);
  
};


