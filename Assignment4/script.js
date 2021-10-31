function getInputOfFirstPersonMass() {
    const personOneBMI = document.getElementById("personOneMass")
    return Number(personOneBMI.value)
}

function getInputOfFirstPersonHeight() {
    const personOneBMI = document.getElementById("personOneHeight")
    console.log(personOneBMI.value)
    return Number(personOneBMI.value)
}

function getInputOfSecondPersonMass() {
    const personTwoBMI = document.getElementById("personTwoMass")
    console.log(personTwoBMI.value)
    return Number(personTwoBMI.value)
}

function getInputOfSecondPersonHeight() {
    const personTwoBMI = document.getElementById("personTwoHeight")
    console.log(personTwoBMI.value)
    return Number(personTwoBMI.value)
}

function calculateBmi() {
    const person1BMI = getInputOfFirstPersonMass / (getInputOfFirstPersonHeight * getInputOfFirstPersonHeight)
    const person2BMI = getInputOfSecondPersonMass / (getInputOfSecondPersonHeight * getInputOfSecondPersonHeight)

    console.log(`person one BMI is ${person1BMI}`)
    console.log(`person two BMI is ${person2BMI}`)

    if (person1BMI > person2BMI) {
        console.log('Person One BMI is greater than person Two');
    } else {
        console.log('Person Two BMI is greater than person One');
    }
}

const submitButton = document.getElementById("submitButton")
submitButton.addEventListener('click', function() {
    calculateBmi();
});


const submitButtonC = document.getElementById("sF")
submitButtonC.addEventListener('click', function() {
    let temp = document.getElementById("F")
    let value = (Number(temp.value)) -32;
    const answer = value * 5 / 9;
    console.log(`${answer}`);
});

const submitButtonF = document.getElementById("sC")
submitButtonF.addEventListener('click', function() {
    let temp = document.getElementById("C")
    let value = Number(temp.value);
    console.log(`${value* 9 / 5 + 32}`);

});