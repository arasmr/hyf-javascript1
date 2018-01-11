"use strict"

//1.step
function sum(a, b, c) {
    console.log(a + b + c);
}

//2/step

console.log(sum(3, 4, 5));

function colorCar(color) {
    console.log("a " + color + " car");
}
colorCar("blue");

//3.step
function cv(name, surname, age) {
    var information = {
        name: name,
        surname: surname,
        age: age,
    }
    console.log(information);
}
(cv("emre", "aras", 28));

//4.step

function vehicleType(color, code) {
    if (code === 1) {
        code = " car";
    }
    if (code === 2) {
        code = " motorbike";
    }
    console.log("a " + color + code);
}
vehicleType("blue", 2);

//5.step

const myVariable = 3 === 3 ? console.log(true) : console.log(false);

//6.step

function vehicle(color, code, age) {
    if (age >= 1) {
        age = " used";
    } else if (age === 0) {
        age = " new";
    }
    if (code === 1) {
        code = " car";
    } else if (code === 2) {
        code = " motorbike";
    }
    console.log("a " + color + age + code);
}
vehicle("blue", 1, 0);

//7.step
    
let listVehicle = ["motorbike", "caravan", "bike", "ship"];

console.log("I get the third element of this array listVehicle[3]: " + listVehicle[3]);

//8.step

console.log(listVehicle);
function vehicle1(color, listOfVehicle, age) {
    if (age >= 1) {
        age = " used ";
    } else if (age === 0) {
        age = " new ";
    }
    console.log("a " + color + age + listVehicle[listOfVehicle]);
}

vehicle1("green", 0, 1);

//10.step

let advertisement = "Amazing Joe's Garage, we service ";
for (let i = 0; i < listVehicle.length; i++){
    advertisement = advertisement + listVehicle[i] + "s, "
}

advertisement = advertisement.slice(0, -1);
advertisement = advertisement.replace(/ bikes,/g, " bikes and");
advertisement = advertisement.replace(/,$/g, ".");

console.log(advertisement);

//11.step

console.log("If I add one more element to the list of vehicle, it will not go inside the loop.Because I need to make addition and changes before the loop.Otherwise I can not output it.")
listVehicle.push("helicopter");
console.log(advertisement);

//12.step

let emptyObject = {

}

//13.step
let myTeachers = {
    teacher1: {
        name: "Jim",
    },
    teacher2: {
        name: "Dina",
    },
    teacher3: {
        name: "unmesh",
    }
}

//14.step


myTeachers["teacher1"]["language"] = "Javascript";
myTeachers["teacher2"]["language"] = "Html and Css";
myTeachers["teacher3"]["language"] = "Git";

console.log(myTeachers);

//15.step

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
 
console.log("For being honest I was not expecting that some of these equality will be false.");

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

//16.step

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o1, o2, o3);

o2 = { foo: "index" };
o1 = { foo: "index1" };

console.log(o1, o2, o3);
console.log("as you see above changing o2 changes o3. Because o3 is assigned to variable o2.");
console.log("If we change o3, o2 does not change.");
o3 = { foo: "Yep" };
console.log(o1, o2, o3);

//17.step

let bar = 42;
typeof typeof bar;

console.log("I think it will return string");

console.log(typeof typeof bar);
