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
Code: const myPizza = new Pizza(["pineapple", "pepperoni"], "medium", 24);
Expected Output: Pizza { toppings: ["pineapple", "pepperoni"], size: "medium", cost: 24}

Describe: Pizza.prototype.calculateCost = function()
Test: "It should take the user's topping and size selection, then determine cost of pizza."
Code: let cost = 10 + (this.toppings.length * 4) + 6
Expected Output: cost = 24

Test: "It should take the number of toppings in Pizza object and multiply by length of Pizza.toppings keys, and add to total cost."
Code: Object.keys(this.toppings).length * perTopping
Output: 2 * 4 = 8

Test: "If Pizza.size = small, no additional cost added to total cost."
Code: if (pizza.size === "small")
Output: return cost;

Test: "If Pizza.size = medium, add 6 to total cost."
Code: if (pizza.size = "medium")
Output: cost = cost + 6;

Test: "If Pizza.size = large, add 10 to total cost."
Code: if (pizza.size = "large")
Output: cost = cost + 10;

Describe: Pizza.prototype.toppingsTicket = function()
Test: "Loops through toppings keys in Pizza object, returns a string to print on ticket."
Input: Pizza {Toppings: ["pineapple", "pepperoni"]}
Code:  for (index = 1; index < (Object.keys(this.toppings).length); index++)
Output: "pineapple, pepperoni"

Test: "Check if any toppings were added to order. If not returns a statement stating no toppings ordered.
Code: if(this.toppings.length === 0)
Output: "--NO TOPPINGS ADDED-"

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