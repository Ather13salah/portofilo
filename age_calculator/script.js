let userDate = document.getElementById('date-form');
let result = document.getElementById('age')
userDate.max = new Date().toISOString().split("T")[0];

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}

function calculate(){
    event.preventDefault()
    let birthDay = new Date(userDate.value);

    let d1  = birthDay.getDay();
    let m1  = birthDay.getMonth() +1;
    let y1  = birthDay.getFullYear();

    let today = new Date();

    let d2  = today.getDay();
    let m2  = today.getMonth() +1;
    let y2  = today.getFullYear();

    let d3 , m3, y3;

    y3 = y2-y1;

    if(m2>=m1){
        m3 = m2-m1;
    }
    else{
        y3--;
        m3 = 12+m2-m1;
    }
    if(d2>=d1){
        d3 = d2-d1
    }else{
        m3--;
        d3  = getDaysInMonth(y1,m1) + d2-d1;
    }

    if(m3<0){
        m3 =11;
        y3--;
    }
    result.innerHTML = `You are ${y3} years ,${m3} months and ${d3} days`

}