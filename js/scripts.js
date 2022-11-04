// Business logic for Pizza

function Pizza() {
  this.toppings = {};
  this.size = null;
}

Pizza.prototype.calculateCost = function(pizza) {
  let basePrice = 10;
  let perTopping = 4;
  let cost = basePrice + (Object.keys(this.toppings).length * perTopping) + this.size;
  if (this.size === "medium") {
    cost += 6;
  }
  else if (this.size === "large") {
    cost += 10;
  }
  console.log(cost);
  return cost;
}