const massMarks = 78;
const heighMark = 1.69;
const massJohn = 92;
const heighJohn = 1.95;

// const massMarks = 95;
// const heighMark = 1.88;
// const massJohn = 85;
// const heighJohn = 1.76;

const BMIMark = massMarks / heighMark ** 2;
const BMIJohn = massJohn / (heighJohn * heighJohn);
console.log(BMIMark, BMIJohn);

if( BMIMark > BMIJohn ){
    console.log(`BMI's Mark (${BMIMark}) is higher than BMI's John (${BMIJohn})`);
}else{
    console.log(`BMI's Mark (${BMIMark}) is lower than BMI's John (${BMIJohn})`)
}
