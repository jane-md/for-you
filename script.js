// Function to open the envelope with animation
function openEnvelope() {
    let topFlap = document.getElementById("topFlap");
    let letter = document.getElementById("letter");

    topFlap.style.transform = "rotateX(180deg)";
    letter.style.transform = "translateX(-50%) translateY(-10px)";
}

// Function to close the envelope with animation
function closeEnvelope() {
    let topFlap = document.getElementById("topFlap");
    let letter = document.getElementById("letter");

    topFlap.style.transform = "rotateX(0deg)";
    letter.style.transform = "translateX(-50%) translateY(0)";
}

// Function to show the gift image
function showGift() {
    document.getElementById("gift-container").classList.remove("hidden");
}

// Function to hide the gift image
function hideGift() {
    document.getElementById("gift-container").classList.add("hidden");
}

// Function to play the song and show the image
function playSong(index) {
    let song = document.getElementById(`song${index}`);
    let imageContainer = document.getElementById(`image${index}`);

    document.querySelectorAll("audio").forEach((s) => {
        if (s !== song) {
            s.pause();
            s.currentTime = 0;
        }
    });

    document.querySelectorAll(".image-container").forEach((img) => {
        img.classList.add("hidden");
    });

    song.play().then(() => {
        imageContainer.classList.remove("hidden");
    });

    song.onended = function () {
        imageContainer.classList.add("hidden");
    };
}

function openEnvelope() {
    let envelope = document.getElementById("envelope");
    envelope.classList.add("open");
}

function closeEnvelope() {
    let envelope = document.getElementById("envelope");
    envelope.classList.remove("open");
}
