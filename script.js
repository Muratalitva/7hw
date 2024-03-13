let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let seconds = document.getElementById('seconds');
let data1 = document.getElementById('data1')

const formatNum = (num) => {
    if (num < 10) return '0' + num;
    return num;
};

let timerRunning = true;

setInterval(() => {
    if (timerRunning) {
        let date = new Date();
        let adinaBirthday = new Date(2024, 2, 13, 0);
        let difference = adinaBirthday.getTime() - date.getTime();

        day.textContent = formatNum(Math.floor(difference / 1000 / 60 / 60 / 24));
        hour.textContent = formatNum(Math.floor((difference / 1000 / 60 / 60) % 24));
        minute.textContent = formatNum(Math.floor((difference / 1000 / 60) % 60));
        seconds.textContent = formatNum(Math.floor((difference / 1000) % 60));

        if (difference <= 0) {
            timerRunning = false;
            day.textContent = '00';
            hour.textContent = '00';
            minute.textContent = '00';
            seconds.textContent = '00';
            data1.textContent = 'С днём рождения!'

        }
    }
}, 1000);