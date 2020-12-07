var Cheetah = function(top, left, timeBetweenSteps){
  Animal.call(this,top, left, timeBetweenSteps);
};

Cheetah.prototype = Object.create(Animal.prototype);

Cheetah.prototype.constructor = Cheetah;

Cheetah.prototype.step = function(){
  Animal.prototype.step.call(this);
  this.$node.toggle();
};
