const apiKey = 'c12af80abe4b44ad8972d985a235c51a';
const amount = document.getElementById('amount-input');
const amountCon = document.querySelector('.result');
const toCurrency = document.querySelector('#toCurrency');


fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`)
    .then(response =>
        response.json()
    )

    .then(data => {
        function convert(){

            if(!isNaN(amount.value) && amount.value>0 ){
                let amoutnToConvert = amount.value;
                let currencyToConvert = toCurrency.value;
                let rate = data.rates[currencyToConvert];
                if(rate){
                    amountCon.innerHTML = ""
                    let result = document.createElement('p');
                    result.innerHTML = `Converted amount:<span id="text">${Math.round(amoutnToConvert * rate)} ${currencyToConvert}</span>`;
                    amountCon.appendChild(result)
                }else{
                    result.innerHTML = `Currency Not Supported`
                }
            
            }  
        }
    toCurrency.addEventListener('change',convert)
    
    })


