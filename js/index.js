//for (let i = 0; i < 100; i-=2) {
   // if (i % 2 !== 0) {
        //continue;
   // }
   // document.write(i);
   // document.write('<br>');
//}

//let i = 0;
//while(i < 100){
    //document.write(i);
   // document.write('<br>');
//}

//let i = 0;
//do{
   // document.write(i);
    //document.write('<br>');
//} while('i < 100')

function prn(val) {
    document.write(val + '<br>');
}
let products = [];
products.push('Audi TT');
products.push('Toyota avalon');
products.push('Ferrari LaFerrari');
prn(products.length);

Document.whrite('<br>');
Document.whrite('products.[3]');

products [3] = 'Volkswagen Polo';
prn(products.length);
products [10] = 'Porshe Panamera';
prn(products.length);

//For (let i =0; i , products.length; i++){
    //prn('<b>'+products[i]+'</b>');
    
//products.forEach(printBold);
//functin printBold(el) {
//prn('<b>'+el+'</b>');
    
//products.forEach(function(el){
 //prn('<b>'+el+'</b>');
  // });
    

//products.forEach( el => prn('<b>'+el+'</b>') );

products.sort();

products.forEach( el => prn('<b>'+el+'</b>') );

let nums = [1,23,45,2,87,33,2,4,7];
nums.sort( (a,b) => a - b );
prn(nums);

prn('HelloA'.split('').sort().join(''));

products.sort();

products.forEach( el => prn('<b>'+el+'</b>') );

let nums = [1,23,45,2,87,33,2,4,7];
nums.sort( (a,b) => a - b );
prn(nums);


let cars = {};

cars['fastest'] = 'Tesla Roadster';
cars['cheapest'] = 'Tata Nano';
cars['favourite'] = 'Ford Mustang';
prn(cars['fastest']);
prn(cars.length)

let counter = 0;
for (let key in cars) {
    counter++;
}
prn(counter);

let jeep = {};
jeep.model = 'Grand cherocci';
jeep.engine = 'diesel';
jeep.color ='red';

jeep.run = function() {
    prn('Jeep is running');
}
jeep.run();

function Car(model, engine, color) {
    
}
this.model = 'model';
this.engine ='engine';
this.color = 'color';
this.run = function() {
        prn(this.model + ' is running');
    }
}
return this;
}

// new: this = {}
let lambo = new Car('Lambordghini Aventador', 'V8', 'yellow');
lambo.run();

let luaz = {
    model: 'Luaz',
    engine: '1.2',
    color: 'green',
    run: function() {
        prn(this.model + ' is running');
    }
};
luaz.run();

class SuperCar {
    constructor(model,engine,color);{
this.model = model;
        this.engine = engine;
        this.color = color;
    }
    run() {
        prn(this.model + ' is running');
    }
}

let tesla = new SuperCar('Tesla Roadster', 'electric', 'red');
tesla.run();

let teslaX = Object.create(tesla);
teslaX.model = 'Tesla Model X';
teslaX.run();

function couter {
    function counter() {
    let count = 0;
    return function () {
        return ++count;
    }
}

let cntr = counter();
prn(cntr());
prn(cntr());
}







