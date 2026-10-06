const envelope = document.getElementById("envelope");
const letterScreen = document.getElementById("letterScreen");
const main = document.getElementById("main");

const photoFrame = document.getElementById("photoFrame");
const photoArea = document.getElementById("photoArea");
const rotatePhotoButton = document.getElementById("rotatePhotoButton");
const photoBurst = document.getElementById("photoBurst");
const photoStatus = document.getElementById("photoStatus");

const message = document.getElementById("message");
const animationButtonBox = document.getElementById("animationButtonBox");

const kissButton = document.getElementById("kissButton");
const characters = document.getElementById("characters");
const statusText = document.getElementById("status");

let opened = false;
let photoRotating = false;
let animationRunning = false;


/* BUKA SURAT */

envelope.addEventListener("click", function () {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");

    setTimeout(function () {

        letterScreen.style.opacity = "0";
        letterScreen.style.visibility = "hidden";

        main.classList.add("show");

    }, 1000);

});


/* PUTAR FOTO */

rotatePhotoButton.addEventListener("click", function () {

    if (photoRotating) return;

    photoRotating = true;

    rotatePhotoButton.disabled = true;

    rotatePhotoButton.textContent = "❤️ Fotomu sedang berputar...";

    photoStatus.textContent = "Lihat baik-baik ya... 🥰";


    /* RESET ANIMASI */

    photoFrame.classList.remove("spin");
    photoBurst.classList.remove("active");

    void photoFrame.offsetWidth;


    /* FOTO BERPUTAR */

    photoFrame.classList.add("spin");


    /* LOVE KELUAR */

    setTimeout(function () {
        photoBurst.classList.add("active");
    }, 300);


    /* SETELAH SELESAI */

    setTimeout(function () {

        photoStatus.textContent = "Nah... sekarang lanjut baca ya ❤️";

        message.classList.add("show");

    }, 1700);


    /* TOMBOL ANIMASI MUNCUL */

    setTimeout(function () {

        animationButtonBox.classList.add("show");

        rotatePhotoButton.disabled = false;

        rotatePhotoButton.textContent = "🔄 Putar Lagi";

        photoRotating = false;

    }, 2500);

});


/* ANIMASI PANDA DAN BERUANG */

kissButton.addEventListener("click", function () {

    if (animationRunning) return;

    animationRunning = true;

    characters.classList.add("revealed");

    characters.classList.remove("kissing");

    void characters.offsetWidth;

    kissButton.disabled = true;

    kissButton.textContent = "🧸🐼 Tunggu sebentar...";

    statusText.textContent = "Mereka mulai mendekat... 🥰";


    /* MULAI MENDEKAT */

    setTimeout(function () {

        characters.classList.add("kissing");

        kissButton.textContent = "💋 Mereka berciuman...";

        statusText.textContent = "Pelan-pelan mendekat... ❤️";

    }, 500);


    /* CIUMAN */

    setTimeout(function () {

        statusText.textContent = "Muachhh! 💋❤️";

    }, 1500);


    /* LOVE BERTERBANGAN */

    setTimeout(function () {

        statusText.textContent = "❤️💕💗 Love berhamburan!";

    }, 1900);


    /* SELESAI */

    setTimeout(function () {

        characters.classList.remove("kissing");

        statusText.textContent = "Mereka saling suka ❤️";

        kissButton.disabled = false;

        kissButton.textContent = "🧸💗🐼 Klik lagi";

        animationRunning = false;

    }, 3300);

});
