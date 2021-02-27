'use_strict';

var operationHour = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];
var branchesNames = ["Seattle", "Tokyo" , "Dubai" , "Paris" , "Lima" ]
function generateRandomCustomer(maxValue, minValue) {
    var generatedCustomer = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    return generatedCustomer;
}
function Branchs(branchLocation, minimumCustomerPerHour, maxiumumCustomerPerHour, averageCookiesPerCustomer) {
    this.branchLocation = branchLocation;
    this.minimumCustomerPerHour = minimumCustomerPerHour;
    this.maxiumumCustomerPerHour = maxiumumCustomerPerHour;
    this.averageCookiesPerCustomer = averageCookiesPerCustomer;
}
var header = function () {
    var artical = document.getElementById("table container");
    //craete the table and append it under the div
    table = document.createElement("table");
    artical.appendChild(table);
    table.setAttribute("border", "1px")

    //create header row 
    var tableRow1 = document.createElement("tr");
    table.appendChild(tableRow1);

    //create cells header for row 
    var tableHeader = document.createElement("th");
    tableRow1.appendChild(tableHeader);
    tableHeader.textContent = "Branch Name"

    for (var i = 0; i < operationHour.length; i++) {
        var tableHeader = document.createElement("th");
        tableRow1.appendChild(tableHeader);
        tableHeader.textContent = operationHour[i]
    }
    var tableHeader = document.createElement("th");
    tableRow1.appendChild(tableHeader);
    tableHeader.textContent = "Daily Location Total"
}

var footer = function () {
    //create footer row 
    var tableRow7 = document.createElement("tr");
    tableRow7.setAttribute("id","tableRow7")
    table.appendChild(tableRow7);

    //create cells for row 
    var tableFooter = document.createElement("td");
    tableRow7.appendChild(tableFooter);
    tableFooter.textContent = " Hourly sales at all branches "
    totalFourBranchInOneHour = [];
    var totalAll = 0 ;
    for (var i = 0; i < operationHour.length; i++) {
        var Total= 0;
        for (var z = 0 ; z < branchesNames.length ; z++ ){
            Total = Total +totalCookiesInThisHourArrayOfAll[z][i]
        }
        totalFourBranchInOneHour.push(Total)

        var footerCell = document.createElement('td');
        tableRow7.appendChild(footerCell);
        footerCell.textContent = Total
        footerCell.setAttribute("id","footerCell")
        var totalAll = totalAll + totalFourBranchInOneHour[i]
    }
    var tableFooter = document.createElement("td");
    tableRow7.appendChild(tableFooter);
    tableFooter.textContent = totalAll
}

var totalCookiesInThisHourArrayOfAll = [];
Branchs.prototype.render = function () {


    //create  row for the branch
    var tableRow2to6 = document.createElement("tr");
    table.appendChild(tableRow2to6);

    //create cells for branch's row 
    var branchOne = document.createElement('td');
    tableRow2to6.appendChild(branchOne);
    branchOne.textContent = this.branchLocation;

    var totalCookiesInThisDay = 0;
    var totalCookiesInThisHourArray = [];
    
    for (var i = 0; i < operationHour.length; i++) {
        const actuallyCustomer = generateRandomCustomer(this.maxiumumCustomerPerHour, this.minimumCustomerPerHour);
        let totalCookiesInThisHour = Math.floor(actuallyCustomer * this.averageCookiesPerCustomer);
        totalCookiesInThisHourArray.push(totalCookiesInThisHour);
        totalCookiesInThisDay = totalCookiesInThisDay + totalCookiesInThisHour;

        var cell = document.createElement("td");
        tableRow2to6.appendChild(cell);
        cell.textContent = totalCookiesInThisHour
    }
    var branchOne = document.createElement('td');
    tableRow2to6.appendChild(branchOne);
    branchOne.textContent = totalCookiesInThisDay;

    totalCookiesInThisHourArrayOfAll.push(totalCookiesInThisHourArray)
}





var Seattle = new Branchs("Seattle", 23, 65, 6.3);
var Tokyo = new Branchs("Tokyo", 3, 24, 1.2);
var Dubai = new Branchs("Dubai", 11, 38, 3.7);
var Paris = new Branchs("Paris", 20, 38, 2.3);
var Lima = new Branchs("Lima", 2, 16, 4.6);

header();
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
footer();



var addBranch = document.getElementById("addBranchForm");

addBranch.addEventListener("submit", function(){
event.preventDefault();

var branchLocation = event.target.branchLocation.value;
console.log(branchLocation)

var minimumCustomerPerHour =event.target.minimumCustomerPerHour.value;
console.log(typeof(minimumCustomerPerHour))

let maxiumumCustomerPerHour =event.target.maxiumumCustomerPerHour.value;
console.log(maxiumumCustomerPerHour)

const averageCookiesPerCustomer =event.target.averageCookiesPerCustomer.value;
console.log(averageCookiesPerCustomer)

branchesNames.push(branchLocation);
console.log(branchesNames)
newBranch = new Branchs(branchLocation,parseInt(minimumCustomerPerHour),parseInt(maxiumumCustomerPerHour),parseInt(averageCookiesPerCustomer))
console.log(newBranch)
newBranch.render();

deletFooter = document.getElementById("tableRow7");
deletFooter.remove();

footer();
