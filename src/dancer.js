var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function(){
  var step = this.step.bind(this);
  setTimeout(step, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: this.top,
    left: this.left,
  };
  this.$node.css(styleSettings);
};

