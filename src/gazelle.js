

var Gazelle = function(top, left, maxTop, maxLeft, timeBetweenSteps=.73, height=40, width = 75, color="#DC9D26"){
  if(top){
  Gazelle.count++;
  }
  this.timeBetweenSteps = (Math.random() * (this.maxStepTime - this.minStepTime) + this.minStepTime);
  this.stepDistance = width * .25;
  this.speedlag = .8
  this.color = color;
  Animal.call(this, top, left, maxTop, maxLeft, timeBetweenSteps, height, width, this.constructor.name + " " + Gazelle.count);
  this.$img = $("<img src='img/gazelle.png'>")
  this.$node.append(this.$img);
  this.$node.css("background-color", color )
};

Gazelle.count = 0;
Gazelle.prototype = Object.create(Animal.prototype);

Gazelle.prototype.constructor = Gazelle;

Gazelle.prototype.step = function(){
    Animal.prototype.step.call(this);
  
};


