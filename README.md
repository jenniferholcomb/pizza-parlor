# pizza-parlor

#### By Jennifer Holcomb

#### This project creates a pizza object constructor, getting user input on toppings and size, then outputting the cost of pizza to user.

## Technologies Used

* HTML
* CSS
* JAVASCRIPT
* Bootstrap

## Description

This program allows a user to order a pizza on a website, user can choose toppings, size, and crust.  Program then calculates cost of pizza based on pizza object properties and returns this value to user on website.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of your directory.
* Open index.html

##Tests

''' 

Describe: Pizza()
Test: "It should return a Pizza object with three properties of toppings, size, and total cost of pizza."
Code: const myPizza = new Pizza(["pineapple", "pepperoni"], "medium", 0);

Describe: Pizza.prototype.calculateCost 

Test: "Should add $4 for each topping added."
Code: const myPizza = new Pizza(["pineapple", "pepperoni"], "medium", 0);
myPizza.calculateCost()
Output: cost = 8

Test: "Should add the total cost of toppings to base price."
Code: const myPizza = new Pizza(["pineapple", "pepperoni"], "medium", 0);
mypizza.calculateCost()
Output: 18

Test: "Should calculate the total cost of pizza for size small."
Code: const myPizza = new Pizza(["pineapple", "pepperoni"], "medium", 0);
myPizza.calculateCost()
Output: 18;

Test: "Should calculate the total cost of pizza for size medium."
Code: const myPizza = new Pizza(["pineapple", "pepperoni"], "medium", 0);
myPizza.calculateCost()
Output: 24;

Test: "Should calculate the total cost of pizza for size large."
Code: const myPizza = new Pizza(["pineapple", "pepperoni"], "medium", 0);
myPizza.calculateCost()
Output: cost = 28;

Describe: Pizza.prototype.toppingsTicket 
Test: "Should return list of toppings to print on ticket."
Code: const myPizza = new Pizza(["pineapple", "pepperoni"], "medium", 0);
myPizza.toppingsTicket()
Output: "pineapple, pepperoni"

Test: "Should check if any toppings were added to order. If not, returns a statement stating no toppings ordered.
Code: const myPizza = new Pizza([], "medium", 0);
myPizza.toppingsTicket()
Output: "--NO TOPPINGS ADDED-"

Describe: CustomerOrders()
Test: "Should add all pizzas ordered to object Orders."
Code: const myOrders = new Orders([Pizza: {"Pineapple", medium, cost}, Pizza: {Extra Cheese, small, cost});

Describe: CustomerOrders.prototype.addPizza 
Test: "Should add Pizza orders to CustomerOrders object."
Code: const myOrders = new Orders([Pizza: {"Pineapple", medium, cost}, Pizza: {Extra Cheese, small, cost});
myOrders.addPizza()
Output: "pizza1: pineapple; medium, 22/npizza2: extra cheese, small, 14"

'''

## Known Bugs
* No known bugs.
* If any issues are discovered, please email jenniferlholcomb@gmail.com.

## License

MIT License

Copyright (c) 2022 Jennifer Holcomb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.