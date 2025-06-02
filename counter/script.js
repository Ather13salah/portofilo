   const textElement = document.getElementById('text');
    let count = parseInt(textElement.innerText);

    const plusBtn = document.querySelector('.plus');
    const minBtn = document.querySelector('.minus');

    plusBtn.addEventListener('click', function (event) {
      event.preventDefault();
      count += 1;
      textElement.innerText = count;
    });

    minBtn.addEventListener('click', function (event) {
      event.preventDefault();
      if(count!=0){
            count -= 1;
      }
      
      textElement.innerText = count;
    });