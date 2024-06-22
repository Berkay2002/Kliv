document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

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

    // Close the sidebar with the close button
    function w3_close() {
        mySidebar.style.display = "none";
    }

    // Video Loop
    const desktopVideo = "assets/videos/video3.mp4";
    const mobileVideo = "assets/videos/video1.mp4";
    const header = document.querySelector('.photo-loop');

    function setVideoSource() {
        if (!header) return; // Ensure header exists

        // Determine the correct video source based on window width
        const videoSource = window.innerWidth < 768 ? mobileVideo : desktopVideo;

        // Check if the video element already exists
        let videoElement = header.querySelector('video');
        if (!videoElement) {
            // Create and append the video element if it doesn't exist
            videoElement = document.createElement('video');
            videoElement.setAttribute('autoplay', 'true');
            videoElement.setAttribute('muted', 'true');
            videoElement.setAttribute('loop', 'true');
            videoElement.classList.add('w-full', 'h-full', 'object-cover');
            const sourceElement = document.createElement('source');
            sourceElement.setAttribute('src', videoSource);
            sourceElement.setAttribute('type', 'video/mp4');
            videoElement.appendChild(sourceElement);
            header.appendChild(videoElement);
        } else {
            // Update the video source if it's different
            const sourceElement = videoElement.querySelector('source');
            if (sourceElement.getAttribute('src') !== videoSource) {
                sourceElement.setAttribute('src', videoSource);
                videoElement.load(); // Reload the video element to apply the new source
            }
        }

        // Add overlay text
        const overlayText = `
            <div class="overlay-text">
                <h1 class="styled-text headline animate__animated animate__fadeIn animate__delay-1s text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
                    KLIV IDROTTSFÖRENING
                </h1>
                <p class="text-lg sm:text-xl md:text-2xl">Delta i våra lov-aktiviteter och judo-träningar.</p>
                <a href="#medlemskap" class="bg-white text-black py-2 px-4 rounded hover:bg-gray-200">Bli Medlem</a>
            </div>
        `;
        header.innerHTML += overlayText;
    }

    setVideoSource(); // Initialize with the appropriate video
    window.addEventListener('resize', setVideoSource);

    // Sidebar toggle
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar.style.width === '70%') {
            sidebar.style.width = '0';
        } else {
            sidebar.style.width = '70%';
        }
    }

});
