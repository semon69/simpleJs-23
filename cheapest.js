const phones = [
    {name: 'samsung', camera: 32, storage: 128, price: 35000, color: 'black'},
    {name: 'Iphone', camera: 12, storage: 128, price: 135000, color: 'black'},
    {name: 'Oppo', camera: 24, storage: 128, price: 30000, color: 'black'},
    {name: 'Xaomi', camera: 8, storage: 128, price: 31000, color: 'black'},
    {name: 'Redmi', camera: 64, storage: 128, price: 29000, color: 'black'},
    {name: 'Vivo', camera: 64, storage: 128, price: 18000, color: 'black'}
]

function cheapest(phones){

    let cheapestPhone = phones[0];
    for(let i = 0; i < phones.length; i++){

        let phone = phones[i];
        if(phone.camera < cheapestPhone.camera){
            cheapestPhone = phone;
        }
    }
    return cheapestPhone;

}

console.log(cheapest(phones));