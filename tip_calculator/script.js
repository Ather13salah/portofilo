const totalBill = document.getElementById('bill-amount');
const tipPrecentage = document.getElementById('tip-value');
const numberOfPeople = document.getElementById('num-people-value')
const result = document.getElementById('result');
const costOfMan = document.getElementById('cost-of-one')
const calcBtn  = document.querySelector('.calculate');

calcBtn.addEventListener('click',(event) =>{
    event.preventDefault();

    let numOfPeople = parseInt(numberOfPeople.value)
    let tip = parseFloat(tipPrecentage.value);
    let bill = parseFloat(totalBill.value);

    if (isNaN(bill) || isNaN(tip)) {
        alert("Please enter valid numbers.");
        return;
    }
;
    let ammountOfTip = bill * (tip/100);
    let totalPrice = bill + ammountOfTip;

    if(numOfPeople ===0){
        costOfMan.innerHTML = `One man must pay : ${totalPrice}`
    }else{
        costOfMan.innerHTML = `One man must pay : ${totalPrice /numOfPeople}`
    }

    result.innerHTML = `Total Price : ${totalPrice}`;

})