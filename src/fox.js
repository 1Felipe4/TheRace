

var Fox = function(top, left, maxTop, maxLeft, timeBetweenSteps=.5, height=30, width = 40, color="#F57C02"){
  if(top){
  Fox.count++;
  }
  this.timeBetweenSteps = (Math.random() * (this.maxStepTime - this.minStepTime) + this.minStepTime);
  this.stepDistance = width * .25;
  this.speedlag = .6
  this.color = color;
  Animal.call(this, top, left, maxTop, maxLeft, timeBetweenSteps, height, width, this.constructor.name + " " + Fox.count);
  this.$img = $("<img src='img/fox.png'>")
  this.$node.append(this.$img);
  this.$node.css("background-color", color )
};

Fox.count = 0;
Fox.prototype = Object.create(Animal.prototype);

Fox.prototype.constructor = Fox;

Fox.prototype.step = function(){
    Animal.prototype.step.call(this);
  
};


