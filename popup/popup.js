document.addEventListener("DOMContentLoaded", function () {
  const startingPage = document.getElementById("startingPage");
  const petChoosingPage = document.getElementById("petChoosingPage");
  const nameInput = document.getElementById("nameInput");
  const continueButton = document.getElementById("openNewPage");
  const goToNamingPageButton = document.getElementById("goToNamingPage");
  const dogOption = document.getElementById("dogOption");
  const catOption = document.getElementById("catOption");

  let chosenStarterPet = "";

  dogOption.addEventListener("click", function () {
    resetBackgroundColor();

    dogOption.style.backgroundColor = "#dedede";
    chosenStarterPet = "puppy";
  });

  catOption.addEventListener("click", function () {
    resetBackgroundColor();

    catOption.style.backgroundColor = "#dedede";
    chosenStarterPet = "kitten";
  });

  function resetBackgroundColor() {
    dogOption.style.backgroundColor = "";
    catOption.style.backgroundColor = "";
    chosenStarterPet = "";
  }

  petChoosingPage.style.display = "none";

  continueButton.addEventListener("click", function () {
    const enteredName = nameInput.value.trim();

    if (enteredName !== "") {
      startingPage.style.display = "none";

      petChoosingPage.style.display = "block";
    } else {
      alert("Please input your name.");
    }
  });

  goToNamingPageButton.addEventListener("click", function () {
    const enteredName = nameInput.value.trim();

    if (enteredName !== "") {
      startingPage.style.display = "none";

      petChoosingPage.style.display = "block";
    } else {
      alert("Please input your name.");
    }
  });
});
