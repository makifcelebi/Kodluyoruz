let username = prompt("Adiniz Nedir?")

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    var days = ['Pazartesi','Sali','Carsamba','Persembe','Cuma','Cumartesi','Pazar'];
    var day = days[date.getDay()];
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("myClock").innerText = time + day;
    document.getElementById("myClock").textContent = time + day;
    
    setTimeout(showTime, 1000); 
}

showTime();

username = username.charAt(0).toUpperCase() + username.slice(1);

let myName = document.querySelector("#myName");

if (username) {
    myName.innerHTML = username
} else if (!username) {
    window.location.reload(true)
}