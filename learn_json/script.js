const userInput =  document.getElementById('username');
const result = document.querySelector("#result");
const get_btn = document.querySelector("#getBtn");
const clearBtn = document.querySelector('.clear');

get_btn.addEventListener('click',() =>{
    let input = userInput.value
    fetch(`https://api.github.com/users/${input}/repos`)
        .then((resultOfrequest) => {
            if(!resultOfrequest.ok){
               throw new Error("User not found or API error");
            }
        
            return resultOfrequest.json();
        })
        .then((repos) => {
            if(repos.length === 0){
                result.innerHTML =  "<p>No repositories found</p>";
                return
            }
            result.innerHTML = ""
            repos.forEach(repo=>{
                const li = document.createElement("li");
                const linkOfRepo = document.createElement("a");
                linkOfRepo.href = repo.html_url;
                linkOfRepo.target = "_blank";
                linkOfRepo.textContent = "Go";
                li.innerHTML = `Name of repo:${repo.name} `;
                li.append(linkOfRepo);
                result.appendChild(li)
            })
            get_btn.disabled = true;
        }).catch((err) => {
            result.innerHTML = `<p>Error: ${err.message}</p>`;
        });

    
    });


clearBtn.addEventListener('click',()=>{
    if(userInput.value === "" && result.innerHTML ===""){
        alert("No Content Found");
    }else{
        result.textContent = "";
        userInput.value = ""
        get_btn.disabled = false;
    }

});

