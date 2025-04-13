let form = document.querySelector(`form`);

form.addEventListener(`submit`,(el)=>{
    el.preventDefault();

    let height = parseInt(document.querySelector(`#height`).value)
    let weight = parseInt(document.querySelector(`#weight`).value);
    let result = document.querySelector(`#result`);
    let resultTwo = document.querySelector(`#result2`);

    if(height === `` || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid Height!`;
    }else if(weight === `` || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight!`;
    }else{
        let bmiResult = Math.round(weight / (height * height / 10000))
        result.innerHTML = `Your BMI is ${bmiResult}`
        if(bmiResult < 18.5){
            resultTwo.append(`You are in Underweight.`);
        }else if(bmiResult > 18.5 && bmiResult < 24.9){
            resultTwo.append(`You are in Healthy Weight.`);
        }else if(bmiResult > 25 && bmiResult < 29.9){
            resultTwo.append(`You are in Overweight.`);
        }else if(bmiResult > 30){
            resultTwo.append(`You are in Obese.`);
        }
    }

})