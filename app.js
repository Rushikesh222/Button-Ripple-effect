const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX; //taking value from window of it x axis
    const y = e.clientY; //taking value from window of it y axis
    const buttonTop = e.target.offsetTop; //taking value from window of it top and event also
    const buttonLeft = e.target.offsetLeft; //taking value from window of it left and event also

    const xInside = x - buttonLeft; // x - left that mean x axis value subtract by top of botton
    const yInside = y - buttonTop; // x - top that mean y axis value subtract by top of botton
    //    console.log(xIndex, yIndex); get value from subracting those value

    const circle = document.createElement("span"); //create span in html
    circle.classList.add("circle"); // add circle effet
    circle.style.top = yInside + "px"; // add and convert those value in px
    circle.style.left = xInside + "px"; // add and convert those value in px
    this.appendChild(circle); // add the cirle class in html
    setTimeout(() => circle.remove(), 500); // for clear those stuff we are create by click on button span is create in multiple time thats why we remove by 500 millisecond
  });
});
