
const changerBtn = document.querySelector('.changer-btn');
const bodyColor = document.querySelector('.body');
const text = document.querySelector('.changer')
const colors = [
  'white',
  'black',
  'red',
  'yellow',
  'pink',
  'blue',
  'green',
  'orange',
  'purple',
  'brown',
  'gray',
  'cyan',
  'magenta',
  'lime',
  'gold'
];
;
//let counter = 0\

changerBtn.addEventListener('click',(event) =>{
    event.preventDefault();
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    if (randomColor === 'black'){
        bodyColor.style.backgroundColor = `${colors[counter]}`;
        text.style.color = 'white';
        changerBtn.style.backgroundColor = 'white';
        counter++

    }else{
        bodyColor.style.backgroundColor = `${randomColor}`;
        text.style.color = 'black';
        changerBtn.style.color = 'black';
        //counter++
    }

});


