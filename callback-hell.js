//Asyn/Await, Promises, Callbacks
//Callback hell
let stocks = {
    Fruits : ['Strawberry', 'Grapes', 'Banana', 'Apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts']
};

let order = (fruit_name, call_production) => {
    setTimeout(() => {
        //Selecting fruits
        console.log(`${stocks.Fruits[fruit_name]} was selected.`)
        call_production();
    }, 2000);
};

let production = () => {
    setTimeout(() => {
        console.log(`Production has started!`);

        setTimeout(() => {
            console.log('Fruit has been chopped!');

            //Adding water and ice
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                //Start the machine
                setTimeout(() => {
                    console.log('The Machine was started')

                    //select the holder
                    setTimeout(()=>{
                        console.log(`Ice cream was placed on ${stocks.holder[0]} `);

                        //pick toppings
                        setTimeout(()=> {
                            console.log(`${stocks.toppings[1]} was added as Toppings`)

                            //serving time
                            setTimeout(() => {
                                console.log(`Serve ice cream!`)
                            }, 2000);
                        }, 2000);

                    }, 2000);

                }, 1000);

            }, 1000);

        }, 2000);
        
    }, 0);
};

order(1, production);