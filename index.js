let images = document.querySelectorAll(".image");

// adding imgClicked class to first card so that
// first card would be in ecpamded mode when launched
images[0].className += " imgClicked";

function handleClick(e) {
    images.forEach((image) => {
        // removing class imgClicked for every card
        // check css for imgClicked class styles
        image.classList.remove("imgClicked");
    });
    // adding imgClicked class to clicked card
    e.className += " imgClicked";
}