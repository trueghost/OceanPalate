"use strict";

/**
 * PRELOAD
 *
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

document.addEventListener("DOMContentLoaded", function () {
  const locationDropdown = document.getElementById("locationDropdown");
  const selectedLocationElement = document.getElementById("selectedLocation");

  locationDropdown.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      const selectedLocation = event.target.getAttribute("data-location");
      selectedLocationElement.textContent = selectedLocation;
    }
  });
});

// Location name changer  According to the selection
document.addEventListener("DOMContentLoaded", function () {
  const locationDropdown = document.getElementById("locationDropdown");
  const headerAddressElement = document.getElementById("headerAddress");

  locationDropdown.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      const selectedLocation = event.target.getAttribute("data-location");
      updateHeaderAddress(selectedLocation);
    }
  });

  function updateHeaderAddress(location) {
    // Assuming you have a mapping of locations to addresses
    const addressMap = {
      Brampton: "10910 Goreway Dr, Brampton, ON L6P 4N4",
      Cambridge: "Hespeler, Cambridge, ON N3C 4N6, Canada",
      Hamilton: "2732 Barton St E Unit 7, Hamilton, ON L8E 4M6",
      Mississauga: "1151 Eglinton Ave E, Mississauga, ON L4W 1K6",
      // Add more locations as needed
    };

    // Update the header address
    headerAddressElement.textContent = addressMap[location];
  }
});

// Automatic Working hours Set up

document.addEventListener("DOMContentLoaded", function () {
  const locationDropdown = document.getElementById("locationDropdown");
  const headerAddressElement = document.getElementById("headerAddress");
  const operatingHoursElement = document.getElementById("operatingHours");

  locationDropdown.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      const selectedLocation = event.target.getAttribute("data-location");

      updateHeaderAddress(selectedLocation);
      updateOperatingHours(selectedLocation);
    }
  });

  function updateHeaderAddress(location) {
    const addressMap = {
      Brampton: "10910 Goreway Dr, Brampton, ON L6P 4N4",
      Cambridge: "Hespeler, Cambridge, ON N3C 4N6, Canada",
      Hamilton: "2732 Barton St E Unit 7, Hamilton, ON L8E 4M6",
      Mississauga: "1151 Eglinton Ave E, Mississauga, ON L4W 1K6",
    };

    headerAddressElement.textContent = addressMap[location];
  }

  function updateOperatingHours(location) {
    const operatingHoursMap = {
      Brampton: {
        Sunday: " Sun: Hours from 12.00 am to 12.00 pm",
        Monday: "Mon: Hours from 12.00 am to 12.00 pm",
        Tuesday: "Tue: Closed",
        Wednesday: "Wed: Hours from 12.00 am to 12.00 pm",
        Thursday: "Thu: Hours from 12.00 am to 12.00 pm",
        Friday: "Fri: Hours from 12.00 am to 12.00 pm",
        Saturday: "Sat: Hours from 12.00 am to 12.00 pm",
      },
      Cambridge: {
        Sunday: "Sun: Hours from 12.00 am to 12.00 pm",
        Monday: "Mon: Hours from 12.00 am to 12.00 pm",
        Tuesday: "Tue: Closed",
        Wednesday: "Wed: Hours from 12.00 am to 12.00 pm",
        Thursday: "Thu: Hours from 12.00 am to 12.00 pm",
        Friday: "Fri: Hours from 12.00 am to 12.00 pm",
        Saturday: "Sat: Hours from 12.00 am to 12.00 pm",
      },
      Hamilton: {
        Sunday: "Sun: Hours from 12.00 am to 12.00 pm",
        Monday: "Mon: Hours from 12.00 am to 12.00 pm",
        Tuesday: "Tue: Closed",
        Wednesday: "Wed: Hours from 12.00 am to 12.00 pm",
        Thursday: "Thu: Hours from 12.00 am to 12.00 pm",
        Friday: "Fri: Hours from 12.00 am to 12.00 pm",
        Saturday: "Sat: Hours from 12.00 am to 12.00 pm",
      },
      Mississauga: {
        Sunday: "Sun: Hours from 12.00 am to 12.00 pm",
        Monday: "Mon: Hours from 12.00 am to 12.00 pm",
        Tuesday: "Tue: Closed",
        Wednesday: "Wed: Hours from 12.00 am to 12.00 pm",
        Thursday: "Thu: Hours from 12.00 am to 12.00 pm",
        Friday: "Fri: Hours from 12.00 am to 12.00 pm",
        Saturday: "Sat: Hours from 12.00 am to 12.00 pm",
      },
    };

    const now = new Date();
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    const isHoliday =
      dayOfWeek === "Tuesday" &&
      (location === "Cambridge" || location === "Hamilton");

    if (isHoliday) {
      operatingHoursElement.querySelector(".span").textContent =
        "Closed on Tuesday";
    } else {
      operatingHoursElement.querySelector(".span").textContent =
        operatingHoursMap[location][dayOfWeek];
    }
  }
});

// Phone Number Change According to the location

document.addEventListener("DOMContentLoaded", function () {
  const locationDropdown = document.getElementById("locationDropdown");
  const headerAddressElement = document.getElementById("headerAddress");
  const operatingHoursElement = document.getElementById("operatingHours");
  const contactInfoElement = document.getElementById("contactInfo");

  locationDropdown.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      const selectedLocation = event.target.getAttribute("data-location");

      updateHeaderAddress(selectedLocation);
      updateOperatingHours(selectedLocation);
      updateContactInfo(selectedLocation);
    }
  });

  function updateHeaderAddress(location) {
    const addressMap = {
      Brampton: "10910 Goreway Dr, Brampton, ON L6P 4N4",
      Cambridge: "Hespeler, Cambridge, ON N3C 4N6, Canada",
      Hamilton: "2732 Barton St E Unit 7, Hamilton, ON L8E 4M6",
      Mississauga: "1151 Eglinton Ave E, Mississauga, ON L4W 1K6",
    };

    headerAddressElement.textContent = addressMap[location];
  }

  function updateOperatingHours(location) {
    // ... (previous code for operating hours)
  }

  function updateContactInfo(location) {
    const contactInfoMap = {
      Brampton: "(905) 913 4777",
      Cambridge: "+1(519)249-0000",
      Hamilton: "289 389 1122",
      Mississauga: "(647) 722-4681",
    };

    contactInfoElement.querySelector(".span").textContent =
      contactInfoMap[location];
  }
});

// Make phone call

document.addEventListener("DOMContentLoaded", function () {
  const locationDropdown = document.getElementById("locationDropdown");
  const teleBookingButton = document.getElementById("teleBookingButton");

  locationDropdown.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      const selectedLocation = event.target.getAttribute("data-location");

      updateTeleBookingNumber(selectedLocation);
    }
  });

  function updateTeleBookingNumber(location) {
    const phoneNumberMap = {
      Brampton: "(905) 913 4777",
      Cambridge: "+1(519)249-0000",
      Hamilton: "289 389 1122",
      Mississauga: "(647) 722-4681",
    };

    teleBookingButton.setAttribute("href", `tel:${phoneNumberMap[location]}`);
  }
});

/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
};

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
};

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
};

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
};

addEventOnElements(
  [heroSliderNextBtn, heroSliderPrevBtn],
  "mouseover",
  function () {
    clearInterval(autoSlideInterval);
  }
);

addEventOnElements(
  [heroSliderNextBtn, heroSliderPrevBtn],
  "mouseout",
  autoSlide
);

window.addEventListener("load", autoSlide);

/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {
  x = (event.clientX / window.innerWidth) * 10 - 5;
  y = (event.clientY / window.innerHeight) * 10 - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - x * 2;
  y = y - y * 2;

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }
});

function toggleContent(action) {
  var additionalContent = document.querySelector(".additional-content");
  var readMoreButton = document.querySelector(".read-more");
  var readLessButton = document.querySelector(".read-less");

  if (action === "read-more") {
    additionalContent.style.display = "block";
    readMoreButton.style.display = "none";
    readLessButton.style.display = "block";
  } else if (action === "read-less") {
    additionalContent.style.display = "none";
    readMoreButton.style.display = "block";
    readLessButton.style.display = "none";
  }
}

const images = [
  "./assets/images/brunch.png",
  "./assets/images/Fish_Pollichathu.jpg",
  "./assets/images/brunch2.jpg",
];
const contentData = [
  {
    title: "Brunch",
    description:
      "food brunch piece prepared by our skilled chefs. Featuring a diverse selection of premium seafood, it's a symphony of flavors in every bite. Availability is subject to the day's freshest catches, ensuring a truly exceptional dining experience.",
    price: "$40.00",
  },
  {
    title: "Signature Sea Food Meals",
    description:
      "Discover our Signature Seafood Meal, a culinary masterpiece prepared by our skilled chefs. Featuring a diverse selection of premium seafood, it's a symphony of flavors in every bite. Availability is subject to the day's freshest catches, ensuring a truly exceptional dining experience.",
    price: "$20.00",
  },
  {
    title: "Brunch2",
    description:
      "Discover our Signature Seafood Meal, a culinary masterpiece prepared by our skilled chefs. Featuring a diverse selection of premium seafood, it's a symphony of flavors in every bite. Availability is subject to the day's freshest catches, ensuring a truly exceptional dining experience.",
    price: "$60.00",
  },
];
const menu = [
  {
    image: "./assets/images/menu-1.png",
    name: "Dish 1",
    description: "Description for Dish 1",
    rate: "$10.00",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Dish 2",
    description: "Description for Dish 2",
    rate: "$12.00",
    locations: ["Brampton", "Hamilton"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Dish 2",
    description: "Description for Dish 2",
    rate: "$12.00",
    locations: ["Brampton", "Hamilton"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Dish 2",
    description: "Description for Dish 2",
    rate: "$12.00",
    locations: ["Brampton", "Hamilton"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Dish 2",
    description: "Description for Dish 2",
    rate: "$12.00",
    locations: ["Brampton", "Hamilton"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Dish 2",
    description: "Description for Dish 2",
    rate: "$12.00",
    locations: ["Brampton", "Hamilton"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Dish 2",
    description: "Description for Dish 2",
    rate: "$12.00",
    locations: ["Brampton", "Hamilton"],
  },
  {
    image: "./assets/images/menu-3.png",
    name: "Dish 3",
    description: "Description for Dish 3",
    rate: "$11.00",
    locations: ["Cambridge", "Mississauga"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Dish 4",
    description: "Description for Dish 4",
    rate: "$13.00",
    locations: ["Cambridge", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Dish 4",
    description: "Description for Dish 4",
    rate: "$13.00",
    locations: ["Cambridge", "Hamilton"],
  },
];
const desiredLocation = "Hamilton";

const menuItemsForLocation = menu.filter((menuItem) =>
  menuItem.locations.includes(desiredLocation)
);

// menu script
let menuElement = document.getElementById("menu-modal");
let viewMenu = document.getElementById("view-menu");
let menuClose = document.getElementById("menu-close");

viewMenu.addEventListener("click", () => {
  menuElement.classList.add("modal-active");
  document.body.style.overflow = "hidden";
});
menuClose.addEventListener("click", () => {
  menuElement.classList.remove("modal-active");
  document.body.style.overflow = "auto";
});
const menuContent = document.getElementById("menuContent");
if (menuItemsForLocation.length > 0) {
  console.log(`Menu items available in ${desiredLocation}:`);
  menuItemsForLocation.forEach((menuItem) => {
    const menuContainer = document.createElement("div");
    menuContainer.className = "itemContainer";

    const itemImage = document.createElement("img");
    itemImage.className = "itemImage";
    itemImage.src = menuItem.image;
    itemImage.alt = menuItem.name;
    itemImage.innerHTML = menuItem.image;
    const itemTextContainer = document.createElement("div");
    itemTextContainer.className = "itemTextContainer";
    const itemName = document.createElement("span");
    itemName.className = "itemName";
    itemName.innerHTML = menuItem.name;
    const itemDesc = document.createElement("span");
    itemDesc.className = "itemDesc";
    itemDesc.innerHTML = menuItem.description;
    const itemRate = document.createElement("span");
    itemRate.className = "itemRate";
    itemRate.innerHTML = menuItem.rate;
    itemTextContainer.appendChild(itemName);
    itemTextContainer.appendChild(itemDesc);
    // Append the new div to the existing div
    menuContainer.appendChild(itemImage);
    menuContainer.appendChild(itemTextContainer);
    menuContainer.appendChild(itemRate);
    menuContent.appendChild(menuContainer);
    menuElement.appendChild(menuContent);

    console.log("Image: " + menuItem.image);
    console.log("Dish Name: " + menuItem.name);
    console.log("Description: " + menuItem.description);
    console.log("Rate: " + menuItem.rate);
    console.log("---");
  });
} else {
  console.log(`No menu items available in ${desiredLocation}.`);
}

// menu script end

let currentContentIndex = 0;
function updateContent() {
  document.getElementById("dishImage").src = images[currentContentIndex];
  document.getElementById("title").textContent =
    contentData[currentContentIndex].title;
  document.getElementById("description").textContent =
    contentData[currentContentIndex].description;
  document.getElementById("price").textContent =
    contentData[currentContentIndex].price;
}
function showPreviousContent() {
  currentContentIndex--;
  if (currentContentIndex < 0) {
    currentContentIndex = images.length - 1;
  }
  updateContent();
}

function showNextContent() {
  currentContentIndex++;
  if (currentContentIndex >= images.length) {
    currentContentIndex = 0;
  }
  updateContent();
}
updateContent();
