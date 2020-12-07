var Animal = function(top, left, maxTop, maxLeft,timeBetweenSteps=1, height = 80, width = 80, name){
  this.$node = $('<p class="animal"></p>');
  this.startTop = top;
  this.startLeft = left;
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps*=1000;
  this.height = height;
  this.width = width;
  this.$node.width(width+"px");
  this.$node.height(height+"px");
  this.maxTop = maxTop - height;
  this.maxLeft = maxLeft - width;
  this.setPosition(this.top, this.left);
  this.timeouts = [];
  this.name = name;
  this.$node.html("<span>" + name + "</span>")
  this.$node.append(this.$img)



  let ani = this;
  $(this.$node).hover(function(){
    ani.timeBetweenSteps*= .8;
    $(this).css("outline", "solid red 1px");
    console.log("hover")
    }, function(){
    ani.timeBetweenSteps = timeBetweenSteps;
    $(this).css("outline", "solid transparent 1px");
  });

};

Animal.prototype.step = function(){
  let timeBetweenSteps = Math.random() * ((this.timeBetweenSteps*this.speedlag) - this.timeBetweenSteps) + this.timeBetweenSteps;
  console.log(timeBetweenSteps);
  
  if(this.left < this.maxLeft){
    this.timeouts.push(setTimeout(this.step.bind(this),timeBetweenSteps)); 
    this.left+= this.stepDistance 
    
    this.left = Math.min(this.maxLeft, this.left + this.stepDistance);
    this.setPosition(this.top, this.left);
}
    
      
    

};

Animal.prototype.changeSize = function(height, width){
  this.height = height;
  this.width = width;
  this.$node.width(this.height+"px");
  this.$node.height(this.width+"px");
};




Animal.prototype.setPosition = function(top, left){
  top = Math.min(this.maxTop, top);
  top = Math.max(top, 5);

  left = Math.min(this.maxLeft, left);
  left = Math.max(left, 5);

  this.position = {
    top: top,
    left: left
  };
  this.$node.css(this.position);
  if(this.maxLeft == this.left){
    this.stop();
    console.log("Stopped")
    this.finished();
  }
};

Animal.prototype.toggleMove = function(){
  this.canMove = !this.canMove;
};

Animal.prototype.getReady = function(start){
  this.start = true;
  this.left = this.startLeft;
  this.top = this.startTop;
  this.setPosition(this.top, this.left);
  if(this.timeouts.length> 0){
    this.stop();
  
}

  if(start){
  this.step();  
}

Animal.prototype.stop = function(){
  this.timeouts.forEach(to =>{
    console.log(to)
    clearTimeout(to);
    
  })
  this.timeouts = []
}

  
};