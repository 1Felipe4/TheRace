var Lion = function(top, left, maxTop, maxLeft, timeBetweenSteps=.9, height=45, width = 80, color="#AD630E"){
  if(top){
    Lion.count++;
    }
  this.timeBetweenSteps = (Math.random() * (this.maxStepTime - this.minStepTime) + this.minStepTime);
  this.stepDistance = width * .30;
  this.color = color;
  this.speedlag = 1.2;
  this.$img = $("<img src='img/lion.png'>")
  Animal.call(this, top, left, maxTop, maxLeft, timeBetweenSteps, height, width, this.constructor.name + " " + Lion.count);
  

  this.$node.css("background-color", color )
  console.log(this.$node.html())
};

Lion.count = 0;
Lion.prototype = Object.create(Animal.prototype);

Lion.prototype.constructor = Lion;

Lion.prototype.step = function(){
  Animal.prototype.step.call(this);
};
