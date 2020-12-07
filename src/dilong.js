

var Dilong = function(top, left, maxTop, maxLeft, timeBetweenSteps=.2, height=30, width = 40, color="#8D8961"){
  if(top){
  Dilong.count++;
  }
  this.timeBetweenSteps = (Math.random() * (this.maxStepTime - this.minStepTime) + this.minStepTime);
  this.stepDistance = width * .2
  this.speedlag = 1.65
  this.color = color;
  Animal.call(this, top, left, maxTop, maxLeft, timeBetweenSteps, height, width, this.constructor.name + " " + Dilong.count);
  this.$img = $("<img src='img/dilong.png'>")
  this.$node.append(this.$img);
  this.$node.css("background-color", color )
};

Dilong.count = 0;
Dilong.prototype = Object.create(Animal.prototype);

Dilong.prototype.constructor = Dilong;

Dilong.prototype.step = function(){
    Animal.prototype.step.call(this);
  
};


