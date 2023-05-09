/* Script for the toggle button. */
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName("navbar")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active');
});

/* A slider class */

class simpleImageSlider {
    /* A simple slider with */
    constructor(slideLeftButton, slideRightButton, leftSideImage, centralImage, rightSideImage, imageUrlsArray){
        this.slideLeftButton = slideLeftButton;
        this.slideRightButton = slideRightButton;
        this.leftSideImage = leftSideImage;
        this.centralImage = centralImage;
        this.rightSideImage = rightSideImage;
        this.imageUrlsArray = imageUrlsArray;
        this.leftSideImageIndex = 0;
        this.centralImageIndex = 1;
        this.rightSideImageIndex = 2;
        this.slideLeftButton.addEventListener("click", () => {
            /* console.log(`leftSideImageIndex: ${this.leftSideImageIndex}  centralImageIndex: ${this.centralImageIndex}  rightSideImageIndex: ${this.rightSideImageIndex}`); */
            --this.leftSideImageIndex;
            --this.centralImageIndex;
            --this.rightSideImageIndex;
            if (this.leftSideImageIndex < 0) {
                this.leftSideImageIndex = this.imageUrlsArray.length - 1;
            };
            if (this.centralImageIndex < 0) {
                this.centralImageIndex = this.imageUrlsArray.length - 1;
            };
            if (this.rightSideImageIndex < 0) {
                this.rightSideImageIndex = this.imageUrlsArray.length -1;
            };
            /* console.log(`leftSideImageIndex: ${this.leftSideImageIndex}  centralImageIndex: ${this.centralImageIndex}  rightSideImageIndex: ${this.rightSideImageIndex}`); */
            this.leftSideImage.setAttribute("src", this.imageUrlsArray[this.leftSideImageIndex]);
            this.centralImage.setAttribute("src", this.imageUrlsArray[this.centralImageIndex]);
            this.rightSideImage.setAttribute("src", this.imageUrlsArray[this.rightSideImageIndex]);
        });
        this.slideRightButton.addEventListener("click", () => {
            /* console.log(`leftSideImageIndex: ${this.leftSideImageIndex}  centralImageIndex: ${this.centralImageIndex}  rightSideImageIndex: ${this.rightSideImageIndex}`);
            console.log(this.imageUrlsArray.length); */
            ++this.leftSideImageIndex;
            ++this.centralImageIndex;
            ++this.rightSideImageIndex;
            if (this.leftSideImageIndex == this.imageUrlsArray.length) {
                this.leftSideImageIndex = 0;
            };
            if (this.centralImageIndex == this.imageUrlsArray.length) {
                this.centralImageIndex = 0;
            };
            if (this.rightSideImageIndex == this.imageUrlsArray.length) {
                this.rightSideImageIndex = 0;
            };
            /* console.log(`leftSideImageIndex: ${this.leftSideImageIndex}  centralImageIndex: ${this.centralImageIndex}  rightSideImageIndex: ${this.rightSideImageIndex}`); */
            this.leftSideImage.setAttribute("src", this.imageUrlsArray[this.leftSideImageIndex]);
            this.centralImage.setAttribute("src", this.imageUrlsArray[this.centralImageIndex]);
            this.rightSideImage.setAttribute("src", this.imageUrlsArray[this.rightSideImageIndex]);
        });
    }
}

const leftPiercingButton = document.querySelector(".left_side_button");
const rightPiercingButton = document.querySelector(".right_side_button");
const piercingUrls = ["images/piercings/piercing_1.jpg" ,"images/piercings/piercing_2.jpg", "images/piercings/piercing_3.jpg", "images/piercings/piercing_4.jpg"];
const leftPiercingImage = document.querySelector(".immagine_piercing:first-child");
const centralPiercingImage = document.querySelector(".immagine_piercing:nth-child(2)");
const rightPiercingImage = document.querySelector(".immagine_piercing:last-child");

let piercingSlider = new simpleImageSlider(leftPiercingButton, rightPiercingButton, leftPiercingImage, centralPiercingImage, rightPiercingImage, piercingUrls);


