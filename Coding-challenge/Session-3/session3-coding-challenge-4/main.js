const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 85, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}
console.log(bills, tips, total);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log (calcAverage([4, 6, 8]));
console.log (calcAverage(total));
console.log (calcAverage(tips));