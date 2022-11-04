// Business logic for Pizza

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.totalCost = 0;
}

Pizza.prototype.calculateCost = function() {
  let basePrice = 10;
  let perTopping = 4;
  let cost = basePrice + (Object.keys(this.toppings).length * perTopping);
  if (this.size === "medium") {
    cost += 6;
  }
  else if (this.size === "large") {
    cost += 10;
  }
  this.totalCost = cost;
}

// UI Logic
function printOrder(pizza) {
  document.querySelector("div#order-details").removeAttribute("class");
  document.querySelector(".toppings").innerText = pizza.toppings;
  document.querySelector(".size").innerText = pizza.size;
  document.querySelector(".cost").innerText = pizza.totalCost;
}

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
  const sizeInput = document.getElementById("size-selection").value;

  let pizza = new Pizza(toppingsInput, sizeInput);
  pizza.calculateCost();
  console.log(pizza.totalCost);
  printOrder(pizza);
}

window.addEventListener("load", function() {
  document.querySelector("form#new-pizza").addEventListener("submit", handlePizzaOrder);
});