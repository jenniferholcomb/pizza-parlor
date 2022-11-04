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
function handlePizzaOrder(event) {
  event.preventDefault();
  //const toppingsInput = document.querySelector(input#)
  const newPizza = new Pizza();
}

function checkedToppings() {
  let toppings = document.form[0];
  console.log(form);
  let txt = "";
  let i;
  for (i=0; i < toppings.length; i++)
    if (toppings[i].checked) {
      txt = txt + toppings[i].value + "";
    }
      
   //   document.getElementById("topping1").checked === true)
    //toppings.push(document.getElementById("topping1"));
}

window.addEventListener("load", function() {
  document.querySelector("form#new-pizza").addEventListener("submit", handlePizzaOrder);
});