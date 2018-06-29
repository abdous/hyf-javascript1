// 1. Strings!
let myString = "hello this is a difficult to read sentence";
console.log(myString);
console.log(myString.length);

// 2 Array!
let favoriteAnimals=[ 'blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);
favoriteAnimals[3]="turtle";
console.log(favoriteAnimals);
favoriteAnimals[1]="meerkat";
console.log('the meerkat is going to be at the second place so i think it will be so');
console.log(favoriteAnimals);
console.log('the array has the lenght of' +  favoriteAnimals.length);
delete favoriteAnimals[2];
console.log(favoriteAnimals);
// favoriteAnimals.splice(2);
// console.log(favoriteAnimals);
var a=favoriteAnimals.indexOf('meerkat');
console.log(a);
console.log('the item we are looking for is at the index' + a);

// More JavaScript
// 1
function sum(a,b,c){
    return (a+b+c);
}
console.log(2+5+8);

// 2
function colorCar(color ){
    if (color = 'red'){
        console.log( "red car");
    }   

}
colorCar("red");



// 3
var person = { firstName: "Abdou" ,
     lastName: "Das", Age: 45, origin: "USA"};
console.log(person.firstName + " " +  person.lastName + " " + "is " + "today" + " " + person.Age);

// 4
function vehicletype(color, type){
    if (type === 1){
        console.log("car");
    }
        else {
            console.log("motorbike");

    }
}
vehicletype("blue", 2);
vehicletype("blue", 1);


// 5 this is going to return true of false depending on the recomparion.
// // but not like in the question where it car return yes or no if the condition 3 === 3 hold

console.log(3===3);

// 6
function vehicle(color, age, type){
    if (type === 1 && age === 1  && color === "blue"){
        console.log("blue" + " " + "used" + " " + "car"  );
    }
        else {
            console.log("motorbike");

    }
}
vehicle("blue", 1, 1);

// 7 and 8
let  list = ["motorbike", "caravan", "bike", "fiat", "opel"];

console.log(list[2]);

// 9
// let  list = ["motorbike", "caravan", "bike", "fiat", "opel"];

function vehicle(color, age, list){
    if (list[2] && age === 1  && color === "green"){
        console.log("green" + " " + "used" + " " + "bike"  );
    }
        else {
            console.log("green" + " " + "new" + " " + "bike");

    }
}
vehicle("green", 2, list[2]);

// // question 10


 var advertisement = ["Amazing"," Joe's"," Garage," ," we service cars," ," motorbikes," , " caravans and bikes."];
var text = "";
var i;
    for 
    (i = 0 ; i < advertisement.length; i++){
    text += advertisement[i];
}
console.log(text);

// question 11
function addMoreVehicle() {
    advertisement.splice(4, 0, 'opel,');
    return advertisement;
}
console.log( addMoreVehicle());

// question 12 creation of an empty object
var emptyobject={};
console.log(emptyobject);
// question 13 and 14 creation of object that contain the teachers and the languages they taught.
let teacher={ nick: 'Html and css', Tiago: 'Command line' , Rob: 'Java'};
console.log(teacher);

// 15 testing for equality === and ==;

let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log(x==z);
console.log(x===z);
console.log(x==y);
console.log(x===y);


// question 16 Take a look at the following code:

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o2==o3);
console.log(o3);


// question 17 What does the following code return? (And why?)

let bar = 42;
console.log("this is going to show the type of the variable bar 'number'");
typeof typeof bar;
console.log(typeof typeof bar);
console.log("i was wrong it return string, what is the reason behind");



