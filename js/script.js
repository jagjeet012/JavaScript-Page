/**
 *
 * @author Jagjeet Singh JavaScript
 *
 */

// Button to Add the new Customer
var customerButton = document.getElementById('customerButton');

// Function called on Button
customerButton.onclick = function () {

    // Opening Pop-up window
    document.getElementById('customerView').style.display = 'block';

}

// Function happening on the pop-up window
document.getElementById('addCustomer').onclick = function () {
    var customerName = document.getElementById('nameBlock').value;
    var customerEmail = document.getElementById('emailBlock').value;

    // Validation of Name and Email Fields

    if (customerName == '' || customerEmail == "") {
        alert('Please Enter both the fields !!');
        return;
    }

    // Adding Customer in the Customer Box List
    var div = document.getElementsByClassName('customerCard')[0],
        clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = 'customer_' + document.getElementsByClassName('customerCard').length;
    document.getElementById('customerBoxes').appendChild(clone);
    document.getElementById('customerView').style.display = 'none';
    (document.getElementById(clone.id).getElementsByClassName('customerName')[0]).innerText = customerName;
    (document.getElementById(clone.id).getElementsByClassName('customerEmail')[0]).innerText = customerEmail;
}

// Function Showing the clone object on the parallel grid by clicking one of them
function displayDetail(object) {
    var div = object;
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = 'customer_' + document.getElementsByClassName('customerCardDetail').length;
    document.getElementById('detailedCardList').appendChild(clone);
}

// Function called for closign the Pop-up Box
document.getElementById('close').onclick = function () {
    document.getElementById('customerView').style.display = 'none';

}