// Creating class for cars and passengers
class Car{
    constructor(brandName,regNumber,currentLocation){
        this.brandName = brandName;
        this.regNumber = regNumber;
        this.locationx = currentLocation.X;
        this.locationy = currentLocation.Y;
    }
}
class Passenger{
    constructor(name,currentLocation){
        this.name = name;
        this.locationx = currentLocation.X1;
        this.locationy = currentLocation.Y1;
    }
    getNearestCars(car){
        return car.brandname;
    }
}
const c1 = new Car('mercedes','1234',{X:2,Y:5});
const c2 = new Car('benz','5678',{X:3,Y:5});
const p1 = new Passenger('shawn',{X1:7,Y1:9});
const p2 = new Passenger('amy',{X1:8,Y1:5});



// console.log(c1);
// console.log(c2);
console.log(p1.getNearestCars(c1));