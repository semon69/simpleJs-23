function ticketQuantity(quantity){

    const first100rate = 100;
    const second100rate = 90;
    const restOfRate = 70;

    if (quantity <= 100){
        let price = quantity * first100rate;
        return price;
    }
    else if(quantity <= 200){
        let first100Price = 100 * first100rate;
        let remaining = quantity - 100;
        let secondRemainingPrice = (remaining * second100rate) + first100Price;
        return secondRemainingPrice;
    }
    else{
        let first100Price = 100 * first100rate;
        let second100Price = 100 * second100rate;
        let remaining = quantity - 200;
        let totalTicketPrice = (remaining * restOfRate) + first100Price + second100Price;
        return  totalTicketPrice;
    }

}

console.log(ticketQuantity(220));