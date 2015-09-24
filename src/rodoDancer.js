var rodoDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('mario-mushroom3');
  this.$node.css({
    border: '20px dotted cyan',
    position: 'absolute'
  });

};

rodoDancer.prototype = Object.create(makeDancer.prototype);
rodoDancer.prototype.constructor = rodoDancer;
