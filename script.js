const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName("navbar")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active');
});

const leftPiercingButton = document.querySelector(".left_side_button");
const rightPiercingButton = document.querySelector(".right_side_button");

