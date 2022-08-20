// Code your solution in this file!

const scuber = 42;
function distanceFromHqInBlocks(pickup){
    if(pickup < scuber){
        return scuber - pickup;
    }else {
        return pickup - scuber;
    }
    //(pickup > scuber) ? (scuber - pickup) : (pickup - scuber)
}

function distanceFromHqInFeet(pickup){
    let distance = distanceFromHqInBlocks(pickup);
    //converts blocks to feet
    return (distance * 264);
}

function distanceTravelledInFeet(pickup, destination){
    if (pickup < destination){
        return (destination - pickup) * 264;
    }else{
        return (pickup - destination) * 264;
    }
}

function calculatesFarePrice(pickup, destination){
    let fare;
    let distance = distanceTravelledInFeet(pickup, destination);

    switch(true){
        case (distance <= 400):
            fare = 0;
            break;
        case (distance > 400 && distance <= 2000):
            fare = (distance - 400) * (2/100);
            break;
        case (distance > 2000 && distance <= 2500):
            fare = 25;
            break;
        case(distance > 2500):
            return "cannot travel that far";
            break;
    }
}