const shopping = [
    {name: 'shirt', price: 1200, quantity: 3},
    {name: 'pant', price: 2200, quantity: 4},
    {name: 'shoe', price: 2800, quantity: 2},
    {name: 'sunglass', price: 600, quantity: 3},
]

function  shoppingCart(products){

    let sum = 0;
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        sum = sum + (product.price * product.quantity);
        // console.log(sum);
    }
    return sum;
}
const myShopping = shoppingCart(shopping);
console.log("My total shopping:",myShopping);