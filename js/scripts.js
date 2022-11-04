// Business logic for Pizza

function Pizza() {
  this.toppings = {};
  this.size = null;
}

Pizza.prototype.calculateCost = function() {
  let basePrice = 10;
  let perTopping = 4;
  let cost = basePrice + (Object.keys(this.toppings).length * perTopping) + this.size;
  console.log(cost);
  if (this.size === "medium") {
    cost += 6;
  }
  else if (this.size === "large") {
    cost += 10;
  }
  return cost;
}

// UI Logic