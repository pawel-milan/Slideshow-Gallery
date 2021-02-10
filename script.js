// Creating array for the pictures - thanks to this, you can add photos to the website by adding them to the array, you need only the name of your photo.

// Dots, number of the image and caption text changes depending on the name of pictures and its position in the array.

// Function "change()" contains repeating elements. It helps to keep the code readable and as short as possible. Code do not repeat himself.

// Creating Event Listener depending on element's index [dots].

(function () {
  // Add pictures to the array
  const pictures = ["first", "second", "third", "fourth", "fifth"];

  // Choose which photo should be displayed first [from 0 to pictures.length]
  let counter = 0;

  const slides = document.querySelector(".slides");

  // Add image to the HTML
  const img = document.createElement("img");
  img.src = `images/${pictures[counter]}.jpg`;
  img.alt = `${pictures[counter]}`;
  img.className = "images";
  slides.appendChild(img);

  // Add number of the image to the HTML
  const textNumber = document.createElement("span");
  textNumber.className = "text-number";
  textNumber.innerHTML = `${pictures.indexOf(img.alt) + 1}/${pictures.length}`;
  slides.appendChild(textNumber);

  // Add caption text to the HTML
  const captionText = document.createElement("span");
  captionText.className = "caption-text";
  captionText.innerHTML = captionText.innerHTML = `${pictures[counter]}`;
  slides.appendChild(captionText);

  // Add dots to the HTML
  const dotContainer = document.querySelector(".img-dots");
  for (var i = 0; i < pictures.length; i++) {
    const dots = document.createElement("span");
    dots.className += "dot";
    dotContainer.appendChild(dots);
  }

  // Change dot to active dot
  const dots = document.querySelectorAll(".dot");
  dots[counter].classList.add("active");

  // Changing image, text and dots
  function change() {
    img.src = `images/${pictures[counter]}.jpg`;
    img.alt = `${pictures[counter]}`;
    textNumber.innerHTML = `${pictures.indexOf(img.alt) + 1}/${
      pictures.length
    }`;
    captionText.innerHTML = `${pictures[counter]}`;

    // Remove active class from every dot
    for (var i = 0; i < pictures.length; i++) {
      dots[i].classList.remove("active");
    }

    dots[counter].classList.add("active"); // Add active class to active dot
  }

  // Add event listener for prev and next button
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.classList.contains("prev")) {
        counter--;
        if (counter < 0) {
          counter = pictures.length - 1;
        }
        change();
      }

      if (button.classList.contains("next")) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }
        change();
      }
    });
  });

  dotsArray = Array.from(dots); // Create an array from node list

  // Add event listener to every dot depending on her index
  dotsArray.forEach(function (item, index) {
    dots[index].addEventListener("click", function () {
      counter = index;
      change();
    });
  });
})();
