var Init = function(country) {
  this.country = country;
}

Init.prototype.setCountry = function(country) {
  this.country = country;
};

Init.prototype.getCountry = function() {
  return this.country;
};

Init.prototype.init = function() {
  console.log("Initializing...");
};

Init.prototype.doSomeMore = function() {
  console.log("Doing some more actions"); 
}

Init.prototype.incrementing = function() {
  console.log("Now i'm incrementing");  
}

console.log("new line");

