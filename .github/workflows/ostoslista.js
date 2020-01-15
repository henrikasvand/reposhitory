let name = document.getElementById('nam');
let price = document.getElementById('pri');
const nappi =document.getElementById('nappi');
const shoppingList = document.getElementById('shoppingList');
let totalAmount;
let products= [];

//nappi.addEventListener("click", addProduct);
//products.push({itemName: "Remember to get mrs. Pumpkin's Sweet Pumpkin Slices // Super Sale!!! // ", itemPrice: 0});

function addProduct() {
    shoppingList.innerHTML= "";    
    products.push({itemName: name.value , 
        itemPrice: price.value});
    //console.log(products);
    totalAmount = 0;
    for (let product of products) {
        productName = product.itemName;
        productPrice = product.itemPrice;
        totalAmount += Number(product.itemPrice);

        if (productName !== null && productPrice !== null) {
            shoppingList.innerHTML += `<li id='products'>
            ${productName}, ${productPrice} € </li>`;
        }
        showTotalAmount.innerHTML = 'Total Estimated Cost: ' + totalAmount + '€';
    };
    let mostExpensiveItem = products.reduce(function (prev, current) {
        return (prev.itemPrice > current.itemPrice) ? prev : current;
    });
    mostExpensive.innerHTML = ' Most Expensive Item: ' + mostExpensiveItem.itemName + ' ' + mostExpensiveItem.itemPrice + '€';

    /*let leastExpensiveItem = products.reduce(function (prev, current) {
        return (prev.ItemPrice < current.itemPrice) ? prev : current;    
    }); Didn't work for some reason - I'll probably know why in a few weeks :))*/

    let leastExpensiveItem = products.reduce((acc, next) => acc.itemPrice < next.itemPrice ? acc : next);
    leastExpensive.innerHTML = 'Least Expensive Item is: ' + leastExpensiveItem.itemName + ' ' + leastExpensiveItem.itemPrice + '€';
}
