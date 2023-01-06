const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log (calcAverage(4, 5, 6));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(44, 12, 1);
console.log (scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas){
        console.log (`Dolphins win the trophy (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log (`Koalas win the trophy (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log ('No team win:))))))');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(20, 40, 52);
scoreKoalas = calcAverage(100, 50, 200);
console.log (scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);