

var Cheetah = function(top, left, maxTop, maxLeft, timeBetweenSteps=.4, height=45, width = 80, color="#E1AB62"){
  if(top){
  Cheetah.count++;
  }
  this.timeBetweenSteps = (Math.random() * (this.maxStepTime - this.minStepTime) + this.minStepTime);
  this.stepDistance = width * .2;
  this.speedlag = 1.8
  this.color = color;
  Animal.call(this, top, left, maxTop, maxLeft, timeBetweenSteps, height, width, this.constructor.name + " " + Cheetah.count);
  this.$img = $("<img src='img/cheetah.png'>")
  this.$node.append(this.$img);
  this.$node.css("background-color", color )
};

Cheetah.count = 0;
Cheetah.prototype = Object.create(Animal.prototype);

Cheetah.prototype.constructor = Cheetah;

Cheetah.prototype.step = function(){
    Animal.prototype.step.call(this);
  
};


