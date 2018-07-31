function onClick() {
    rightSideElement.style.backgroundColor = "#d3c26f";
    leftShadow.style.textShadow = "-6px 5px 2px yellow";
    rightShadow.style.textShadow = "-6px 5px 2px yellow";

}
const rightSideElement = document.querySelector(".right_side");
const leftShadow = document.getElementsByClassName("name")[0];
const rightShadow = document.getElementsByClassName("name")[1];
document.addEventListener('click', onClick);