// const handleOnClick = () => {
//   alert("Button clicked!");
// };

// const homebutton = document.getElementsByTagName("button")[0];
// homebutton.addEventListener("click", handleOnClick);

const popUpView = document.getElementById("pop-up-view");

const popupContent = document.getElementById("pop-up-content");

const handleCardClick = (obj) => {
  // alert("clicked");
  popUpView.style.display = "flex";

  popupContent.innerHTML = `
        <p>NITHIN-ROKKAM</p>
        <p>${obj.name}</p>
        <p>${obj.cuisine}</p>
        <p>${obj.rating}</p>
        <p>${obj.servings}</p>
    `;
};

const homeButton = document.getElementsByTagName("button")[0];

homeButton.addEventListener("click", () => {
  alert("Programmatically handled!");
});

const handleClosePopUp = () => {
  popUpView.style.display = "none";
};

const handleuseName = () => {
  console.log("Typed");
  console.log("------");
};
