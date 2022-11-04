// Business logic for Pizza

function Pizza() {
  this.toppings = {};
  this.size = null;
}

Pizza.prototype.calculateCost = function() {
  let basePrice = 10;
  let perTopping = 4;
  let medium = 6;
  let large = 10;
  let cost = basePrice + (Object.keys(this.toppings).length * perTopping) + this.size;
  
  
}