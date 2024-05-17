let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);
   
 let area = length * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let item1, item2, item3;

function calculateAmount() {
    item1 = parseFloat(document.getElementById('item1').value);
    item2 = parseFloat(document.getElementById('item2').value);
    item3 = parseFloat(document.getElementById('item3').value);

    let amount = item1 + item2 + item3;
    document.getElementById('result2').innerText = `Total Grocery Amount: ${amount}`;
}