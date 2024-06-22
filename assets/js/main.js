// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Photo Loop
let currentIndex = 0;
const images = ["assets/images/judo1.png", "assets/images/judo2.png", "assets/images/lovaktiviteter1.png", "assets/images/lovaktiviteter2.png"];
const header = document.querySelector('.photo-loop');

function changeImage() {
    header.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 5000); // Change image every 5 seconds
changeImage(); // Initialize with the first image
