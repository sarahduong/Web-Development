"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Sarah Duong
   Date: July 3rd, 2020  
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0; // initialize counter to 0

var cartHTML;
cartHTML ="<table border='1'> <tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";  // set header to table

for(int i; i<item.length; i++)
{ 

itemCost = itemPrice [i] * itemQty [i]; // calc cost of item from price/each and quantity

orderTotal += itemCost; // increase order total

cartHTML += " <tr><td><img src='tc_item.png' alt=" + item[i] + "></td><td>" + itemDescription[i] + "</td><td>" + "$"+itemPrice[i] + "</td><td>"+itemQty[i] + "</td><td>" + "$" + itemCost + "</td></tr>";
 
}

// add subtotal after calculation complete
cartHTML += "<tr><td colspan = '4' > Subtotal</td> <td>" + "$" + orderTotal + "</td></tr></table>"; // the order total 

// apply cartHTML

var elem = document.getElementById("cart");
elem.innerHTML = cartHTML; // set cartHTML to inner html div elem
