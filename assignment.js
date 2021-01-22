//problem no: 01
function kilometerToMeter(kilometer) {
    if (0 < kilometer) {
        var meter = kilometer * 1000; // 1 kilometer = 1000 meter
        return meter;
    }
    //Error massage for when value is negative
    else {
        console.log("Please Enter Valid Input Which is not negative");
    }
}
var result = kilometerToMeter(50);
console.log(result);





//problem no :02
function budgetCalculator(watch, phone, laptop) {
    //using if condition to make sure number of items input number is valid 
    if (0 < watch && 0 < phone && 0 < laptop) {

        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var total = watchPrice + phonePrice + laptopPrice;
        return total;
    }
    //when input is  invalid show this error massage
    else {
        console.log("enter invalid input items input missing or");
    }
}

var result = budgetCalculator(5, 10, 7);
console.log(result);




//problem no:03 
function hotelCost(days) {
    cost = 0;
    if (days <= 10) {
        var totalCost = days * 100; // for 1st 10 days
        return totalCost;
    } else if (days <= 20) {
        var firstPeriod = 10 * 100; //first 10 days cost
        var remaining = days - 10; //first 10 days cost is 10000 so after 10 days
        var offer2 = remaining * 80; // calculate after 10 days 
        totalCost = firstPeriod + offer2;
        return totalCost;
    } else {
        firstPeriod = 10 * 100; //first 10 days cost
        offer2 = 10 * 80; //offer2 when stay more than 10 days to 20 days
        remaining = days - 20; //after 20 days
        var offer3 = remaining * 50;
        totalCost = firstPeriod + offer2 + offer3; //total cost
        return totalCost;
    }
}
var result = hotelCost(30);
console.log(result);




//problem no:04
function megaFriend(friendsName) {
    var size = 0;
    for (var i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > size) {
            size = friendsName[i].length;
            var longestName = friendsName[i];
        }
    }
    return longestName;
}
var friends = megaFriend(['dipta roy', 'rajesh mondal', 'ashfak akash', 'mrityunjoy bhaduree', 'pranta chakrabarty', 'piash']);
console.log(friends);