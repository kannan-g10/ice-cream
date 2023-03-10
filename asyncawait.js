//Async Await
let stocks = {
    Fruits : ['Strawberry', 'Grapes', 'Banana', 'Apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts']
};

let isShopOpen = true;

let time = (ms) => {
    return new Promise((resolve, reject) => {
        if(isShopOpen) {
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log('shop is closed'))
        }
    });
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0000)
        console.log('Fruit was chopped')

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await time(1000)
        console.log(`start the machine`)

        await time(2000)
        console.log(`Ice cream placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time(2000)
        console.log(`serve th ice cream`)
    }
    catch(err) {
        console.log('customer Left', err);
    }
    finally {
        console.log('Day ended, shop is closed');
    }
}

kitchen();