console.log(`connected`);



const convert = (kg) => kg * 2.2046
let weightConvert = prompt("Enter Weight in Kg")
console.log(convert(weightConvert) + " Pounds")


class person {
    
    constructor (fname, weightLb)
    {
        this.fisrt_name = fname;
        this.Lb = weightLb;

    }
}

const newPerson = new person();
console.log(newPerson);

newPerson.fisrt_name = "Jelly";
newPerson.Lb = (convert(weightConvert));


console.log(` ${newPerson.fisrt_name}'s weight in lbs is ${newPerson.Lb}`)