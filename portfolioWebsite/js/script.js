//===============================================Scroll Function=========================================================================================================
//========================================================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const scrollMew = document.querySelector(".simplebar-content-wrapper");

  scrollMew.addEventListener("scroll", () => {
    const headerToScroll = document.querySelector(".header__navigation");
    const scrollView = scrollMew.scrollTop;
    if (scrollView >= 100) {
      headerToScroll.classList.add("toScroll");
    } else {
      headerToScroll.classList.remove("toScroll");
    }
  });
});

//=============================================Burger menu===========================================================================================================
//========================================================================================================================================================
const headerBurger = document.querySelector(".navigation__burger");
const header = document.querySelector(".navigation__nav");

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("_active");
  header.classList.toggle("_active");
})

//========================Show more================================================================================================================================
//========================================================================================================================================================
const btnMore = document.querySelector(".skills__btn");
const imagesLength = document.querySelectorAll(".skills__img").length;
let items = 8;

btnMore.addEventListener("click", () => {
  if (items < imagesLength) {
    items += 4;
    const array = Array.from(document.querySelector(".skills__block").children);
    const visItem = array.slice(0, items);
    visItem.forEach(el => el.classList.add("is-visible"));
    btnMore.innerText = "Show Less";
  } else {
    const array = Array.from(document.querySelector(".skills__block").children);
    array.forEach(el => el.classList.remove("is-visible"));
    items = 8;
    btnMore.innerText = "Show More";

  }
})
//========================================================================================================================================================
//========================================================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelectorAll(".projects__item").length;
  const button = document.querySelector("#addRow");
  let rows = 6;
  button.addEventListener("click", () => {
    if (rows < grid) {
      rows += 3;
      const array = Array.from(document.querySelector(".projects__content").children);
      const visItem = array.slice(0, rows);
      visItem.forEach(el => el.classList.add("is-visible"));
    } else {
      const array = Array.from(document.querySelector(".projects__content").children);
      array.forEach(el => el.classList.remove("is-visible"));
      rows = 6;
      button.innerText = "Show More";
    }
    if (rows >= grid) {
      button.innerText = "Show Less";
    }
  })
});
//========================================================================================================================================================
//========================================================================================================================================================
const links = document.querySelectorAll(".navigation__link");

for (const link of links) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    headerBurger.classList.remove("_active");
    header.classList.remove("_active");
    const blockId = link.getAttribute("href");
    document.body.classList.remove("lock");
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  })
}
//========================================================================================================================================================
//==================================PRELOADER======================================================================================================================
//========================================================================================================================================================
let
  images = document.images,
  images_total_count = images.length,
  images_loaded_count = 0,
  perc_display = document.getElementById("persents");

for (var i = 0; i < images_total_count; i++) {
  image_clone = new Image();
  image_clone.onload = image_loaded;
  image_clone.onerror = image_loaded;
  image_clone.src = images[i].src;
}

function image_loaded() {
  images_loaded_count++;

  perc_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0).toFixed(1);
  if (images_loaded_count >= images_total_count) {
    document.body.onload = function () {
      setTimeout(function () {
        let preloader = document.getElementById("preloader");

        if (!preloader.classList.contains("done")) {
          preloader.classList.add("done");
        }
      }, 500)
    }
  }
}
//========================================================================================================================================================
//==================================MOUSE MOVE======================================================================================================================
//========================================================================================================================================================
let represent = document.querySelector(".represent__img img");
let about = document.querySelector(".about__img img");

document.onmousemove = (e) => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  represent.style.transform = "translate(-" + x * 8 + "px, -" + y * 8 + "px)";
  about.style.transform = "translate(-" + y * 8 + "px, -" + x * 8 + "px)";
};

function showText(event) {
  document.querySelector(".how__adaptive").classList.toggle("show");
}
//========================================================================================================================================================
//==================================TEXT EFFECT======================================================================================================================
//========================================================================================================================================================
const mainText = [
  `Hi Everyone, I am`,
  `Vladislav Bashak`
];

function typeText() {
  let line = 0;
  let count = 0;
  let output = "";
  let htmlOut = document.querySelector(".represent__who");
  let htmlOutSecond = document.querySelector(".represent__title");  
  htmlOutSecond.innerHTML = "|";
  function typeLine() {
    let interval = setTimeout(() => {
      output += mainText[line][count];
      htmlOut.innerHTML = output + "|";
      count++;
      if (count >= mainText[line].length)  {
        clearTimeout(interval);
        htmlOut.innerHTML = output;
        typeSecondLine();
        return true;
      }
      typeLine();
    }, 80);
  }

  function typeSecondLine() {
    let line = 1; 
    let count = 0;
    let output = "";
    
    function typeSecondLineCharacter() {
      let interval = setTimeout(() => {
        output += mainText[line][count];
        htmlOutSecond.innerHTML = output + "|";
        count++;
        if (count >= mainText[line].length) {
          clearTimeout(interval);
          htmlOutSecond.innerHTML = output;
        } else {
          typeSecondLineCharacter();
        }
      }, 100);
    }
    typeSecondLineCharacter();
  }

  typeLine();
}

typeText();