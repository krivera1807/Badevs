// Wait for the DOM content to load
window.addEventListener('load', function () {
    var logo = document.querySelector('.logo');
    var navLink = document.querySelector('.nav-link.click-scroll');

    // Add hover effect when logo is loaded (initially)
    logo.classList.add('hover');

    // Optionally remove after a delay
    setTimeout(function () {
        logo.classList.remove('hover');
    }, 2000);

    // Add event listener to the nav link (click event)
    navLink.addEventListener('click', function (event) {
        // Prevent default anchor behavior (if needed)
        event.preventDefault();

        // Simulate hover effect on the logo when the link is clicked
        logo.classList.add('hover');

        // Optionally remove after a delay
        setTimeout(function () {
            logo.classList.remove('hover');
        }, 2000);

        // Optional: Add code to scroll to the section
        var targetSection = document.querySelector(navLink.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    function fadeLogoOnScroll() {
        var scrollPosition = window.scrollY; // Get the vertical scroll position
        var maxFade = 500; // The point at which the logo should be fully faded (in pixels)
        
        // Calculate the opacity based on scroll position
        var opacity = 1 - (scrollPosition / (maxFade / 1.5));
        
        // Ensure opacity stays within bounds (0 to 1)
        if (opacity < 0) opacity = 0;
        if (opacity > 1) opacity = 1;
        
        // Apply the opacity to the logo2
        logo.style.opacity = opacity;
    }

    // Listen for the scroll event
    window.addEventListener('scroll', fadeLogoOnScroll);
});
