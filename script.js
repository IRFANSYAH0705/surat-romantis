const envelope =
    document.getElementById("envelope");

const letterScreen =
    document.getElementById("letterScreen");

const main =
    document.getElementById("main");

const kissButton =
    document.getElementById("kissButton");

const characters =
    document.getElementById("characters");

const statusText =
    document.getElementById("status");


let sudahDibuka = false;
let sedangAnimasi = false;


/* =====================
   BUKA SURAT
===================== */

function openLetter() {

    if (sudahDibuka) {
        return;
    }

    sudahDibuka = true;

    envelope.classList.add("open");


    setTimeout(function () {

        letterScreen.style.opacity = "0";

        letterScreen.style.visibility =
            "hidden";

        main.classList.add("show");

    }, 1200);
}


envelope.addEventListener(
    "click",
    openLetter
);


/* =====================
   ANIMASI CIUMAN
===================== */

kissButton.addEventListener(
    "click",
    function () {

        if (sedangAnimasi) {
            return;
        }

        sedangAnimasi = true;


        /* Panda dan beruang muncul */
        characters.classList.add(
            "revealed"
        );


        /* Reset animasi */
        characters.classList.remove(
            "kissing"
        );

        void characters.offsetWidth;


        kissButton.disabled = true;

        kissButton.textContent =
            "🧸🐼 Bersiap... ❤️";

        statusText.textContent =
            "Mereka mulai mendekat... 🥰";


        /* Mulai mendekat */
        setTimeout(function () {

            characters.classList.add(
                "kissing"
            );

            kissButton.textContent =
                "💋 Mereka berciuman...";

            statusText.textContent =
                "Pelan-pelan mendekat... 💗";

        }, 650);


        /* Ciuman */
        setTimeout(function () {

            statusText.textContent =
                "Muachhh! 💋❤️";

        }, 1600);


        /* Love */
        setTimeout(function () {

            statusText.textContent =
                "❤️💕💗 Love berhamburan!";

        }, 2100);


        /* Selesai */
        setTimeout(function () {

            characters.classList.remove(
                "kissing"
            );

            statusText.textContent =
                "Selesai 🥰";

            kissButton.disabled = false;

            kissButton.textContent =
                "🧸💗🐼 Klik lagi";

            sedangAnimasi = false;

        }, 3600);

    }
);
