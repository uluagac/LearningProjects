// Clock and Date
function writeDate() {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    let day = date.getDate();
    let formattedDay = (day < 10) ? `0${day}` : `${day}`;
    let month = date.getMonth() + 1;
    let formattedMonth = (month < 10) ? `0${month}` : `${month}`;
    let year = date.getFullYear();
    
    document.querySelector("#hour").innerHTML = (hour < 10) ? `0${hour}` : `${hour}`;
    document.querySelector("#minute").innerHTML = (minute < 10) ? `0${minute}` : `${minute}`;
    document.querySelector("#second").innerHTML = (second < 10) ? `0${second}` : `${second}`;
    document.querySelector("#date").innerHTML = `${formattedDay}/${formattedMonth}/${year}`
}
writeDate();
setInterval(function() {
    writeDate();
}, 1000);


// Dark/Light Mode
const icon = document.querySelector("#dark-button > i");
const dark = document.querySelector("#dark-button");
const bg = document.querySelector("body");
dark.addEventListener("click", darkFunction);
function darkFunction() {
    if(icon.classList.contains("bi-moon-fill")) {
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-brightness-high-fill");
        dark.style.backgroundColor = "rgb(146, 144, 195)"
        bg.style.background = "linear-gradient(to top left, rgb(7, 15, 43), rgb(27, 26, 85))";
    } else {
        icon.classList.remove("bi-brightness-high-fill");
        icon.classList.add("bi-moon-fill");
        dark.style.backgroundColor = "rgb(27, 26, 85)";
        bg.style.background = "";
    }
  }