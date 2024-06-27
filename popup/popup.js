document.addEventListener("DOMContentLoaded", function () {
  const homePage = document.getElementById("homePage");
  const startingPage = document.getElementById("startingPage");
  const petChoosingPage = document.getElementById("petChoosingPage");
  const petNamingPage = document.getElementById("petNamingPage");
  const bagPage = document.getElementById("bagPage");
  const randomStatsDisplay = document.getElementById("randomStatsDisplay");
  const nameInput = document.getElementById("nameInput");
  const continueButton = document.getElementById("openNewPage");
  const goToNamingPageButton = document.getElementById("goToNamingPage");
  const dogOption = document.getElementById("dogOption");
  const catOption = document.getElementById("catOption");
  const submitPetNameButton = document.getElementById("submitPetName");
  const welcomePage = document.getElementById("welcomePage");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const petNameSpan = document.getElementById("petNameSpan");
  const petImage = document.getElementById("petImage");
  const backToStartingPage1 = document.getElementById("backToStartingPage1");

  const backToStartingPage3 = document.getElementById("backToStartingPage3");
  const backToHomePage = document.getElementById("backToHomePage");

  const storePage = document.getElementById("storePage");

  let chosenStarterPet = "";
  let chosenStarterPetImage = "";

  const breeds = {
    dog: [
      {
        name: "Bulldog",
        img: "https://media.istockphoto.com/id/1394145547/vector/cartoon-bulldog-pup-vector-illustration.jpg?s=612x612&w=0&k=20&c=6V9Dq38z867UKObLl3k5ZR9Rpo1pOH0OiaGJHp-lMMQ=",
      },
      {
        name: "Golden Retriever",
        img: "https://t4.ftcdn.net/jpg/05/78/55/03/360_F_578550353_S0O0D0dBCTe9auKFhyBiPYFvN9xSQpTb.jpg",
      },
      {
        name: "German Shepherd",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGr_aZ2D8nziUujMy49u6MgODLbmH9rpHCkw&s",
      },
    ],
    cat: [
      {
        name: "Ragdoll",
        img: "https://img.freepik.com/premium-photo/adorable-ragdoll-kitten-clipart-white-background-ai-generated_804788-31173.jpg",
      },
      {
        name: "Persian",
        img: "https://img.freepik.com/premium-photo/adorable-persian-kitten-clipart-white-background-ai-generated_804788-30800.jpg",
      },
    ],
  };

  document
    .getElementById("moveToNamePage")
    .addEventListener("click", function () {
      homePage.style.display = "none";
      startingPage.style.display = "block";
    });

  document
    .getElementById("moveToBagPage")
    .addEventListener("click", function () {
      bagPage.style.display = "block";
      homePage.style.display = "none";
    });

  document
    .getElementById("moveToStorePage")
    .addEventListener("click", function () {
      storePage.style.display = "block";
      homePage.style.display = "none";
    });

  dogOption.addEventListener("click", function () {
    resetBackgroundColor();
    dogOption.style.backgroundColor = "#dedede";
    chosenStarterPet = "dog";
  });

  catOption.addEventListener("click", function () {
    resetBackgroundColor();
    catOption.style.backgroundColor = "#dedede";
    chosenStarterPet = "cat";
  });

  function resetBackgroundColor() {
    dogOption.style.backgroundColor = "";
    catOption.style.backgroundColor = "";
  }

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
    if (chosenStarterPet !== "") {
      petChoosingPage.style.display = "none";
      petNamingPage.style.display = "block";
    } else {
      alert("Please choose a starter pet.");
    }
  });

  submitPetNameButton.addEventListener("click", function () {
    const petName = document.getElementById("petNameInput").value.trim();
    if (petName !== "") {
      petNamingPage.style.display = "none";
      welcomePage.style.display = "block";
      petNameSpan.textContent = petName;
      petImage.src = chosenStarterPetImage;
    } else {
      alert("Please input your pet's name.");
    }
  });

  backToStartingPage1.addEventListener("click", function () {
    petChoosingPage.style.display = "none";
    startingPage.style.display = "block";
    resetBackgroundColor();
  });

  backToHomePage.addEventListener("click", function () {
    bagPage.style.display = "none";
    storePage.style.display = "none";
    homePage.style.display = "block";
    resetBackgroundColor();
  });

  backToStartingPage3.addEventListener("click", function () {
    welcomePage.style.display = "none";
    startingPage.style.display = "block";
    resetBackgroundColor();
  });

  function generateRandomStats() {
    const weights = ["2.5kg", "3kg", "3.5kg", "4kg"];
    const heights = ["25cm", "30cm", "35cm", "40cm"];
    const interests = ["Playing", "Sleeping", "Eating", "Running"];
    const genders = ["Male", "Female"];

    const randomWeight = weights[Math.floor(Math.random() * weights.length)];
    const randomHeight = heights[Math.floor(Math.random() * heights.length)];
    const randomInterest =
      interests[Math.floor(Math.random() * interests.length)];
    const randomGender = genders[Math.floor(Math.random() * genders.length)];

    let randomBreed = {};
    if (chosenStarterPet === "dog") {
      randomBreed = breeds.dog[Math.floor(Math.random() * breeds.dog.length)];
    } else if (chosenStarterPet === "cat") {
      randomBreed = breeds.cat[Math.floor(Math.random() * breeds.cat.length)];
    }

    chosenStarterPetImage = randomBreed.img;

    return `
            <img src="${randomBreed.img}" style="width: 200px; margin-bottom: 10px;">
            <p class="statP">
              Breed: ${randomBreed.name}<br>
              Weight: ${randomWeight}<br>
              Height: ${randomHeight}<br>
              Gender: ${randomGender}<br>
              Interest: ${randomInterest}
            </p>
          `;
  }
});
