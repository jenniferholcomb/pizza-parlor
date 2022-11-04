// Business logic for Pizza

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateCost = function() {
  let basePrice = 10;
  let perTopping = 4;
  let cost = basePrice + (Object.keys(this.toppings).length * perTopping);
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
function handlePizzaOrder(event) {
  event.preventDefault();

  const toppingsInput = [];
  if (document.getElementById("topping1").checked === true) {
    toppingsInput.push("Pepperoni");
  } 
  if (document.getElementById("topping2").checked === true) {
    toppingsInput.push("Pineapple");
  } 
  if (document.getElementById("topping3").checked === true) {
    toppingsInput.push("Extra Cheese");
  }
  console.log(toppingsInput);
  const sizeInput = document.getElementById("size-selection").value;
  console.log(sizeInput);

  let pizza = new Pizza(toppingsInput, sizeInput);
  console.log(pizza);
  let cost = pizza.calculateCost();
  console.log(cost);
}

window.addEventListener("load", function() {
  document.querySelector("form#new-pizza").addEventListener("submit", handlePizzaOrder);
});