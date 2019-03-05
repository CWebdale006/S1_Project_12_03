"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author: Connor J Webdale 
   Date: 2.28.19 
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/

// Creates the variable named "donationTotal" in which I will calculate the total amount of the donations, with an initial value of 0. 
var donationTotal = 0;

// Applies the forEach() method to the donors array, using the callback function calcSum(). 
donors.forEach(calcSum);

// Creates a variable named summaryTable with HTML code. Included in the HTML is the length of the donors array, and the value of the donationTotal variable displayed as a string. 
var summaryTable = "<table><tr><th>Donors</th><td>" + donors.length + "</td></tr><tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr></table>";

// Sets the innerHTML property of the div element with the ID "donationSummary" to the value of the "summaryTable" variable 
document.getElementById("donationSummary").innerHTML = summaryTable;

// Creates an array of the donors who contributed $1000 or more. 
var majorDonors = donors.filter(findMajorDonors);

// Applies the sort() method to the "majorDonors" variable using the callback function "donorSortDescending". 
majorDonors.sort(donorSortDescending);

// Creates a variable named donorTable that will store the HTML code for the table of major donors. 
var donorTable = "<table><caption>Major Donors</caption><tr><th>Donation</th><th>Donor ID</th><th>Date</th><th>Name</th><th>Address</th><th>Phone</th><th>E-mail</th><tr>";

// Creates the HTML code for each donor row by applying the forEach() method to the majorDonors variable, using the writeDonorRow() as the callback function. 
majorDonors.forEach(writeDonorRow);

// Adds the text string "</table>" to the value of the donorTable variable. 
donorTable += "</table>";

// Sets the innerHTML property of the div element with the ID "donorTable" to the value of the donorTable variable. 
document.getElementById("donorTable").innerHTML = donorTable;

function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}