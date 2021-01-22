

// this function convert kilometer into meter.
function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return "Distance can't be negetive.";
    }
    else if (typeof kilo == "string") {
        return "Please input a number.";
    }
    else {
        var meter = kilo * 1000;
        return meter;
    }
}

// this function calculate total amount to buy watch,phone,laptop.
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Watch,Phone,Laptop can't be negetive number.";
    }
    else if (Number.isInteger(watch) == false || Number.isInteger(phone) == false || Number.isInteger(laptop) == false) {
        return "Please input numbers only.";
    }
    else {
        var combinedCost = watch * 50 + phone * 100 + laptop * 500;
        return combinedCost;
    }
}

// this function generates bill for staying in a hotel.
function hotelCost(day) {
    if (day < 0) {
        return "Day can't be negetive.";
    }
    else if (Number.isInteger(day) == false) {
        return "Please input only integer value.";
    }
    else {
        if (day <= 10) {
            var totalCost = day * 100;
        }
        else if (day <= 20) {
            var totalCost = 1000 + (day - 10) * 80;
        }
        else {
            var totalCost = 1800 + (day - 20) * 50;
        }
        return totalCost;
    }
}

// this function return friend name which is large in length.
function megaFriend(friend) {
    if (Array.isArray(friend) == false) {
        return "Please enter an array of friends."
    }
    else if (friend.length < 1) {
        return "Empty friend list. Please make some friends."
    }
    else {
        largeLength = friend[0];
        for (var i = 0; i < friend.length; i++) {
            if (friend[i].length > largeLength.length) {
                largeLength = friend[i];
            }
        }
        return largeLength;
    }
}


//  console.log(kilometerToMeter(5));
//  console.log(budgetCalculator(10,5,1));
//  console.log(hotelCost(5));
//  var bigFriend = ['kalam', 'palam', 'shukkor', 'cholimullah chowdhury'];
//  console.log(megaFriend(bigFriend));