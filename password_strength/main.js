const resultCon = document.querySelector('.result')
const ShowBtn = document.querySelector('.show-passw');
const userInput = document.getElementById('password');
const progress = document.querySelector('.progress');
let strength = 0;
//this for show user password
ShowBtn.addEventListener('click',() =>{
    ShowBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    if(userInput.type === 'password'){
        userInput.type = 'text'
    }else{
        userInput.type = 'password';
        ShowBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    }
})

userInput.addEventListener('input',() =>{
    let passw = userInput.value;
    //console.log(passw)
    if(passw === ""){
        userInput.style.borderColor = 'black';
        progress.style.width = '0%';
        resultCon.innerHTML = ""
    }else{
        if(passw.length<=4){
            userInput.style.borderColor = 'red';
            progress.style.backgroundColor = 'red';
            progress.style.width = '25%'
        }
        if(/[A-Z]/.test(passw)){
            userInput.style.borderColor = 'orange';
            progress.style.backgroundColor = 'orange';
            progress.style.width = '50%';
            strength++;
        }
        if(passw.length>=6  && /[0-9]/.test(passw)){
            userInput.style.borderColor = 'yellow';
            progress.style.backgroundColor = 'yellow';
            progress.style.width = '75%';
            strength++;
        }
        if(passw.length===10 && /[@#$%^&*!_]/.test(passw)){
            userInput.style.borderColor = 'green';
            progress.style.backgroundColor = 'green';
            progress.style.width = '100%';
            strength++;
        }
    }
    let message = document.createElement('p');
    if(strength ===1){
        resultCon.innerHTML = ""
        message.textContent = 'The Password is Weak';
        message.style.color = 'red';
        resultCon.appendChild(message)
    }
    if(strength ===2){
        resultCon.innerHTML = ""
        message.textContent = 'The Password is Medium';
        message.style.color = 'orange';
        resultCon.appendChild(message)
    }
    if(strength ===3){
        resultCon.innerHTML = ""
        message.textContent = 'The Password is Strong';
        message.style.color = 'green';
        resultCon.appendChild(message)
    }

    
})
