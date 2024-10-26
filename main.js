const date = new Date();
const hours = date.getHours();
if (hours >= 3 && hours < 10) {
  document.getElementById("good").innerHTML = "Selamat Pagi";
}
if (hours >= 10  && hours < 14) {
  document.getElementById("good").innerHTML = "Selamat Siang";
}
if (hours >= 14  && hours < 17) {
  document.getElementById("good").innerHTML = "Selamat Sore";
}
if (hours >= 17 && hours < 24) {
  document.getElementById("good").innerHTML = "Selamat Malam";
}

const body = document.querySelector('body');
const menfess = document.getElementById('menfess');
const judul1 = document.getElementById('judul1');
const judul2 = document.getElementById('judul2');
const judul3 = document.getElementById('judul3');
const judul4 = document.getElementById('judul4');
const judul5 = document.getElementById('judul5');
const judul6 = document.getElementById('judul6');
const judul7 = document.getElementById('judul7');
const judul8 = document.getElementById('judul8');
const judul9 = document.getElementById('judul9');
const jadwal_piket1 = document.getElementById("senin");
const jadwal_piket2 = document.getElementById("selasa");
const jadwal_piket3 = document.getElementById("rabu");
const jadwal_piket4 = document.getElementById("kamis");
const jadwal_piket5 = document.getElementById("jumat");
const quote = document.getElementById('quote');
const quoteright = document.getElementById('quoteright');
const navbar_bottom = document.getElementById('navbar_bottom');
const bwh_wlc = document.getElementById('bwh_wlc');
const good = document.getElementById('good');

document.addEventListener("DOMContentLoaded", function() {
    function getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        return weekNo;
    }

    function getCurrentWeekBlock() {
        let currentWeek = getWeekNumber(new Date());
        return (currentWeek % 2 === 0) ? "Blok 2" : "Blok 1";
    }

    document.getElementById("block-display").textContent = getCurrentWeekBlock();
});