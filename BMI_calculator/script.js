//Create Bmi project
document.addEventListener('DOMContentLoaded',() =>{
    const userWeight  = document.getElementById('weight');
    const userHight  = document.getElementById('height');
    const calcBtn = document.querySelector('#calculate-btn');
    const result = document.getElementById('result');
    const haalthCondition =  document.getElementById('health-condition');
    calcBtn.addEventListener('click',(event)=>{
        event.preventDefault()
        let weight = parseFloat(userWeight.value);
        let heightWithCm = parseFloat(userHight.value)/100;
        let height = Math.pow(heightWithCm,2);
        if(isNaN(weight) || isNaN(height)){
            alert("Please enter the valid number");
            return;
        }
        let bmiResult = weight/height;
        if(bmiResult<18.5){
            haalthCondition.innerHTML = `your weight is very thin`;
        } 
        if(18.5<=bmiResult<=24.9){
            haalthCondition.innerHTML = `your weight is Normal`;
        }
        if(25<bmiResult<29.9){
            haalthCondition.innerHTML = `your weight is abnormal`;
        }
        else{
            haalthCondition.innerHTML = `your weight is very big`;
        }
        result.innerHTML = `BMI: ${bmiResult}`
    })
})
