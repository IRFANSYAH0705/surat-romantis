const envelope = document.getElementById("envelope");
const letterScreen = document.getElementById("letterScreen");
const main = document.getElementById("main");

const kissButton = document.getElementById("kissButton");
const characters = document.getElementById("characters");
const statusText = document.getElementById("status");


// =========================
// MEMBUKA SURAT
// =========================

function openLetter() {

    envelope.classList.add("open");

    setTimeout(function () {

        letterScreen.style.opacity = "0";
        letterScreen.style.visibility = "hidden";

        main.classList.add("show");

    }, 1200);
}


// Klik amplop
envelope.addEventListener("click", openLetter);


// Bisa dibuka menggunakan Enter atau Space
envelope.addEventListener("keydown", function(event) {

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        openLetter();
    }
});


// =========================
// ANIMASI PANDA + BERUANG
// =========================

let sedangBerjalan = false;

kissButton.addEventListener("click", function() {

    // Supaya tombol tidak bisa diklik berkali-kali
    if (sedangBerjalan) {
        return;
    }

    sedangBerjalan = true;


    // Panda dan beruang mulai muncul
    characters.classList.add("revealed");

    // Bersihkan animasi sebelumnya
    characters.classList.remove("kissing");

    // Memaksa browser membaca ulang animasi
    void characters.offsetWidth;


    kissButton.disabled = true;

    kissButton.textContent =
        "🧸🐼 Bersiap... ❤️";

    statusText.textContent =
        "Mereka mulai mendekat... 🥰";


    // =========================
    // MULAI MENDEKAT
    // =========================

    setTimeout(function() {

        characters.classList.add("kissing");

        kissButton.textContent =
            "💋 Mereka sedang berciuman...";

        statusText.textContent =
            "Pelan-pelan mendekat... 💗";

    }, 650);


    // =========================
    // SAAT CIUMAN
    // =========================

    setTimeout(function() {

        statusText.textContent =
            "Muachhh! 💋❤️";

    }, 1550);


    // =========================
    // LOVE MUNCUL
    // =========================

    setTimeout(function() {

        statusText.textContent =
            "❤️💕💗 Love berhamburan!";

    }, 2050);


    // =========================
    // SELESAI
    // =========================

    setTimeout(function() {

        characters.classList.remove("kissing");

        statusText.textContent =
            "Selesai 🥰 Klik lagi untuk mengulang.";

        kissButton.disabled = false;

        kissButton.textContent =
            "🧸💗🐼 Klik lagi untuk mengulang";

        sedangBerjalan = false;

    }, 3500);

});
