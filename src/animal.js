var Animal = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="animal"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(this.top, this.left);
};

Animal.prototype.step = function(){
    setTimeout(this.step.bind(this),this.timeBetweenSteps);
};

Animal.prototype.setPosition = function(top, left){
  this.position = {
    top: top,
    left: left
  };
  this.$node.css(this.position);
};
