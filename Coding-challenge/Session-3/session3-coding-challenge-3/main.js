const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi){
    console.log (`${mark.fullname}'s BMI ${mark.bmi} is heigher than ${john.fullname}'s BMI ${john.bmi}`);
}else if(john.bmi > mark.bmi){
    console.log (`${john.fullname}'s BMI ${john.bmi} is heigher than ${mark.fullname}'s BMI ${mark.bmi}`);
}