// 현재 시간 출력하기
function time_name() {
    let time = document.getElementById("time");
    let greeting = document.getElementById("greeting");

    let inputName = document.getElementById("name");
    let name = inputName.value;

    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();

    if (String(min).length === 1) {
        min = '0' + min;
        time.textContent = hour + ' : ' + min;
    }
    else {
        time.textContent = hour + ' : ' + min;
    }

    if (event.keyCode === 13) {
        if (hour >= 6 && hour < 12) {
            greeting.innerHTML = "Good Moring, " + name;
        }
        else if (hour >= 12 && hour < 18) {
            greeting.textContent = "Good Afternoon, " + name;
        }
        else {
            greeting.textContent = "Good Evening, " + name;
        }    
    }
    
    setTimeout(function() {time_name()}, 1000); 
}

time_name();