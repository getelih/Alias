
window.onload = function() {
  // Teeme sõnaloendid globaalseks, et neid saaks pidevalt uuendada
  var words1 = [

    "suur kala", "siga",
    "toit", "vesi",
     "kuu", "poiss",
    "käsi", "kuld", "kits",
    "tütar", 
    ];
    
      var words2 = [
    "Saamuel",
    "Apostlite teod",
    "Noa laev",
    "kuningriik",
    ];
    
      var words3 = [
 "pidagu sügavalt lugu", "mis Jumal ühte pannud", "austa oma isa ja ema", "kee su kaela ümber", "ei saa ära osta", "siiralt appi hüüavad", "valige siis elu",
 "hea südametunnistus",];

// Globaalsed muutujad valitud sõna jaoks
var number;
var selectedWordsList;
var lastSelectedList; // See muutuja jälgib, millisest loendist viimane sõna valiti.
  
  document.getElementById("word").textContent = "Vali raskusaste!";
  const background = document.getElementById('background');
  
  // Kui background-element eksisteerib
  if (background) {
    background.classList.remove('kerged-bg', 'keskmised-bg', 'rasked-bg'); // Eemaldame olemasolevad klassid
      background.classList.add('algus-bg'); // Muudame taustavärvi valgeks
    }
   else {
    console.error("Element with ID 'background' not found.");
  }

// Funktsioon kergete sõnade jaoks
function kerged() {
  // Eemaldame kõik olemasolevad taustavärvi klassid body'lt või tausta elemendilt
  document.body.classList.remove('kerged-bg', 'keskmised-bg', 'rasked-bg');

  // Otsi taustaga element ID põhjal
  const background = document.getElementById('background');

  // Kui background-element eksisteerib
  if (background) {
    background.classList.remove('kerged-bg', 'keskmised-bg', 'rasked-bg'); // Eemaldame olemasolevad klassid
      background.classList.add('kerged-bg'); // Muudame taustavärvi kollaseks
    }
   else {
    console.error("Element with ID 'background' not found.");
  }
if (words1.length > 0) {
  number = Math.floor(Math.random() * words1.length);
  selectedWordsList = words1;
  lastSelectedList = 'kerged'; // Määrame viimaseks valikuks 'kerged'
  document.getElementById("word").textContent = words1[number];
} else {
  document.getElementById("word").textContent = "Kerged sõnad on otsas!";
}
}

// Funktsioon keskmiste sõnade jaoks
function keskmised() {
    // Eemaldame kõik olemasolevad taustavärvi klassid body'lt või tausta elemendilt
    document.body.classList.remove('kerged-bg', 'keskmised-bg', 'rasked-bg');

    // Otsi taustaga element ID põhjal
    const background = document.getElementById('background');
  
    // Kui background-element eksisteerib
    if (background) {
      background.classList.remove('kerged-bg', 'keskmised-bg', 'rasked-bg'); // Eemaldame olemasolevad klassid
        background.classList.add('keskmised-bg'); // Muudame taustavärvi siniseks
      }
     else {
      console.error("Element with ID 'background' not found.");
    }
if (words2.length > 0) {
  number = Math.floor(Math.random() * words2.length);
  selectedWordsList = words2;
  lastSelectedList = 'keskmised'; // Määrame viimaseks valikuks 'keskmised'
  document.getElementById("word").textContent = words2[number];
} else {
  document.getElementById("word").textContent = "Keskmised sõnad on otsas!";
}
}

// Funktsioon raskete sõnade jaoks
function rasked() {
   // Eemaldame kõik olemasolevad taustavärvi klassid body'lt või tausta elemendilt
   document.body.classList.remove('kerged-bg', 'keskmised-bg', 'rasked-bg');

   // Otsi taustaga element ID põhjal
   const background = document.getElementById('background');
 
   // Kui background-element eksisteerib
   if (background) {
     background.classList.remove('kerged-bg', 'keskmised-bg', 'rasked-bg'); // Eemaldame olemasolevad klassid
       background.classList.add('rasked-bg'); // Muudame taustavärvi roosaks
     }
    else {
     console.error("Element with ID 'background' not found.");
   }
if (words3.length > 0) {
  number = Math.floor(Math.random() * words3.length);
  selectedWordsList = words3;
  lastSelectedList = 'rasked'; // Määrame viimaseks valikuks 'rasked'
  document.getElementById("word").textContent = words3[number];
} else {
  document.getElementById("word").textContent = "Rasked sõnad on otsas!";
}
}

// Funktsioon sõna eemaldamiseks ja uue valimiseks
function tehtud() {
if (selectedWordsList && number !== undefined) {
  selectedWordsList.splice(number, 1); // Eemaldame valitud sõna loendist

  // Eemaldame kõik olemasolevad taustavärvi klassid body'lt või tausta elemendilt
  document.body.classList.remove('kerged-bg', 'keskmised-bg', 'rasked-bg');

  // Otsi taustaga element ID põhjal
  const background = document.getElementById('background');

  // Kui background-element eksisteerib
  if (background) {
    background.classList.remove('kerged-bg', 'keskmised-bg', 'rasked-bg'); // Eemaldame olemasolevad klassid

    // Kontrollime, millisest loendist viimane sõna oli ja muudame taustavärvi
    if (lastSelectedList === 'kerged') {
      kerged(); // Käivitame uuesti funktsiooni kerged
      background.classList.add('kerged-bg'); // Muudame taustavärvi kollaseks
    } else if (lastSelectedList === 'keskmised') {
      keskmised(); // Käivitame uuesti funktsiooni keskmised
      background.classList.add('keskmised-bg'); // Muudame taustavärvi siniseks
    } else if (lastSelectedList === 'rasked') {
      rasked(); // Käivitame uuesti funktsiooni rasked
      background.classList.add('rasked-bg'); // Muudame taustavärvi roosaks
    }
  } else {
    console.error("Element with ID 'background' not found.");
  }
} else {
  document.getElementById("word").textContent = "Palun vali raskusaste!";
}
}

// Funktsioon sõna valimiseks ja lingi avamiseks
function otsi() {
  let randomWord;
  
  if (selectedWordsList) {
    randomWord = selectedWordsList[number];
  } else {
    console.log("Pole sõna valitud!");
    return;
  }

  // Loome URL, asendades 'Taavet' valitud sõnaga
  let url = `https://www.jw.org/et/otsi/?q=Taavet`;
  url = url.replace("Taavet", randomWord); // Asendame "Taavet" juhuslikult valitud sõnaga

  // Avame lingi uues aknas
  window.open(url, "_blank");
}

const display = document.getElementById("display");
let timer = 0;
let startTime = 0;
let remainingTime = 90000; // 1 minut ja 30 sekundit millisekundites
let isRunning = false;

// Heli määramine
const beepSound = new Audio('bell.wav');

document.getElementById("startBtn").onclick = start;
document.getElementById("stopBtn").onclick = stop;
document.getElementById("resetBtn").onclick = reset;

function start() {
    if (!isRunning && remainingTime > 0) {
        startTime = Date.now();
        timer = setInterval(update, 10);  // Kontrollime iga 10ms järel, et uuendada kella
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        remainingTime -= Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    remainingTime = 90000; // 1 minut ja 30 sekundit
    isRunning = false;
    display.value = "01:30"; // Algväärtus kuvatakse
}

// Aja uuendamine
function update() {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;

    const timeLeft = remainingTime - elapsed; // Arvutame, kui palju aega on alles

    if (timeLeft <= 0) {
        clearInterval(timer);
        display.value = "00:00"; // Kui aeg saab otsa, näitame nulli
        isRunning = false;

        // Mängi heli, kui aeg on läbi
        beepSound.play();
        return;
    }

    let minutes = Math.floor(timeLeft / (1000 * 60) % 60);
    let seconds = Math.floor(timeLeft / 1000 % 60);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    display.value = `${minutes}:${seconds}`;
}

// Luba kasutajal muuta taimeri väärtust otse sisestades
display.addEventListener("blur", function() {
    const currentTime = display.value;
    const parts = currentTime.split(":");
    let minutes = parseInt(parts[0], 10);
    let seconds = parseInt(parts[1], 10);

    // Kontroll, kas sisend on kehtiv
    if (!isNaN(minutes) && !isNaN(seconds) && minutes >= 0 && seconds >= 0 && seconds < 60) {
        remainingTime = minutes * 60000 + seconds * 1000;
    } else {
        alert("Sisesta õige formaat, näiteks 01:30");
        display.value = "01:30"; // Tagasi algväärtusele
    }
});

// Kui kasutaja sisestab väärtuse, ei luba tühja väärtust
display.addEventListener("input", function() {
    let currentValue = display.value;
    currentValue = currentValue.replace(/[^0-9:]/g, "");  // Eemaldame kõik, mis pole numbrid ega koolon
    const parts = currentValue.split(":");

    if (parts.length > 2) {
        display.value = currentValue.slice(0, currentValue.length - 1);
    } else {
        display.value = currentValue;
    }
});


  // Nuppude sidumine
  document.getElementById("startBtn").onclick = start;
  document.getElementById("stopBtn").onclick = stop;
  document.getElementById("resetBtn").onclick = reset;
  document.getElementById("kergeBtn").onclick = kerged;
  document.getElementById("keskmineBtn").onclick = keskmised;
  document.getElementById("raskeBtn").onclick = rasked;
  document.getElementById("yes").onclick = tehtud;
  document.getElementById("otsiBtn").onclick = otsi; 

};