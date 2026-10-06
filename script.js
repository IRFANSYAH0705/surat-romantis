const envelope = document.getElementById("envelope");
const letterScreen = document.getElementById("letterScreen");
const main = document.getElementById("main");

const photoFrame = document.getElementById("photoFrame");
const photoBurst = document.getElementById("photoBurst");
const rotatePhotoButton = document.getElementById("rotatePhotoButton");
const photoStatus = document.getElementById("photoStatus");

const message = document.getElementById("message");

const animationButtonBox =
    document.getElementById("animationButtonBox");

const kissButton =
    document.getElementById("kissButton");

const characters =
    document.getElementById("characters");

const statusText =
    document.getElementById("status");


let envelopeOpened = false;
let photoRunning = false;
let animationRunning = false;


/* =====================================
   BUKA SURAT
===================================== */

envelope.addEventListener("click", function () {

    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;

    envelope.classList.add("open");

    setTimeout(function () {

        letterScreen.style.opacity = "0";
        letterScreen.style.visibility = "hidden";

        main.classList.add("show");

    }, 1000);

});


/* =====================================
   PUTAR FOTO
===================================== */

rotatePhotoButton.addEventListener("click", function () {

    if (photoRunning) {
        return;
    }

    photoRunning = true;

    rotatePhotoButton.disabled = true;

    rotatePhotoButton.textContent =
        "❤️ Sedang berputar...";

    photoStatus.textContent =
        "Lihat fotonya baik-baik ya 🥰";


    /* RESET ANIMASI FOTO */

    photoFrame.classList.remove("spin");
    photoBurst.classList.remove("active");

    void photoFrame.offsetWidth;


    /* FOTO BERPUTAR */

    photoFrame.classList.add("spin");


    /* LOVE KELUAR */

    setTimeout(function () {

        photoBurst.classList.add("active");

    }, 250);


    /* KATA-KATA MUNCUL */

    setTimeout(function () {

        message.classList.add("show");

        photoStatus.textContent =
            "Nah... sekarang lanjut baca ya ❤️";

    }, 1600);


    /* TOMBOL ANIMASI MUNCUL */

    setTimeout(function () {

        animationButtonBox.classList.add("show");

        rotatePhotoButton.disabled = false;

        rotatePhotoButton.textContent =
            "🔄 Putar Lagi";

        photoRunning = false;

    }, 2300);

});


/* =====================================
   PANDA & BERUANG
===================================== */

kissButton.addEventListener("click", function () {

    if (animationRunning) {
        return;
    }

    animationRunning = true;

    kissButton.disabled = true;


    /* RESET POSISI */

    characters.classList.remove("kissing");

    void characters.offsetWidth;


    /* MUNCUL */

    characters.classList.add("revealed");

    kissButton.textContent =
        "🧸🐼 Mereka datang...";

    statusText.textContent =
        "Mereka mulai mendekat... 🥰";


    /* MEREKA MULAI MENDEKAT */

    setTimeout(function () {

        characters.classList.add("kissing");

        kissButton.textContent =
            "💗 Mereka semakin dekat...";

        statusText.textContent =
            "Sebentar lagi... ❤️";

    }, 600);


    /* CIUMAN */

    setTimeout(function () {

        kissButton.textContent =
            "💋 Muachhh!";

        statusText.textContent =
            "Muachhh! 💋❤️";

    }, 2200);


    /* LOVE BERTERBANGAN */

    setTimeout(function () {

        statusText.textContent =
            "❤️💕💗 Love berhamburan!";

    }, 2800);


    /* SELESAI DAN KEMBALI */

    setTimeout(function () {

        characters.classList.remove("kissing");

        kissButton.disabled = false;

        kissButton.textContent =
            "🧸💗🐼 Lihat lagi";

        statusText.textContent =
            "Mereka kembali ke tempatnya ❤️";

        animationRunning = false;

    }, 4300);

});
