let named = prompt("İsminizi giriniz.")
named = named.charAt(0).toUpperCase()+named.slice(1);
let seçim = document.getElementById("myName").innerHTML = named

function showTime() {
    let zaman = new Date;
    let saat = zaman.getHours();
    let dakika = zaman.getMinutes();
    let saniye = zaman.getSeconds();
    let gun = zaman.getDay();
    switch (gun) {
        case 0:
            gun = "pazar"
            break;
        case 1:
            gun = "Pazartesi"
            break;
        case 2: 
            gun = "Sali"
            break;
        case 3:
            gun = "Çarşamba"
            break;
        case 4:
            gun = "Perşembe"
            break;
        case 5:
            gun = "Cuma"
            break;
        case 6:
            gun = "Cumartesi"
            break;
    }
    document.querySelectorAll(".clock")[0].innerHTML = kontrol(saat) + ":" + kontrol(dakika)+":"+kontrol(saniye)+" "+gun;
    function kontrol(doğruluk){
        if(doğruluk<10){doğruluk = "0"+doğruluk}
        return doğruluk;
    }
}
setInterval(showTime,100);
