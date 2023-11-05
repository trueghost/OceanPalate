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
    name: "Chicken Cutlet",
    description: "Minced potato mixed with minced chicken, green chilly and curry leaves coated with bread crumbs and deep fried",
    rate: "$5.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Tandoori Lamb Chop",
    description: "Description for Dish 2",
    rate: "$12.00",
    locations: ["Brampton", "Hamilton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Tandoori Chicken Wings",
    description: "Marinated chicken wings cooked in tandoor to perfection",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Tandoori Chicken Tikka",
    description: "Boneless pieces of chicken breast, marinated in yogurt and tandoori spices, served with fresh mint chutney",
    rate: "$15.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Tandoori Chicken",
    description: "Two whole chicken legs marinated overnight in yogurt, tandoori masala and Indian spices cooked in the tandoori oven",
    rate: "$14.99",
    locations: ["Cambridge"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Chicken Momo",
    description: "Traditional Indian dumplings filled with chicken and stemmed to perfection,served with chili sauce",
    rate: "$10.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Tempura Fried Shrimps",
    description: "Masala crumbed shrimps deep fried and served with hot sauce",
    rate: "$14.99",
    locations: ["Mississauga"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Vegetable Momo",
    description: "Traditional Indian dumplings filled with vegetables and stemmed to perfection served with chili sauce",
    rate: "$10.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-2.png",
    name: "Malabar Chili Prawns",
    description: "Pan seared shrimp tossed with spicy Malabar masala, fished with green chili and curry leaves",
    rate: "$17.99",
    locations: ["Brampton", "Hamilton"],
  },
  {
    image: "./assets/images/menu-3.png",
    name: "Calamari Fry",
    description: "Calamari cotted with kerala spices and deep fried",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Ceylone Fried Chicken",
    description: "Chicken marinated in house blend exotic south Indian spices and deep fried",
    rate: "$13.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Tandoori Paneer Tikka",
    description: "Indian cottage cheese marinated with spices and cooked in tandoor",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Vegetable Samosa",
    description: "Traditional pastry filled with mild spiced potatoes, onions, peas and deep fried",
    rate: "$4.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "South Indian Vegetable Cutlet",
    description: "Minced potato mixed with minced vegetables, green chilly, and curry leaves,coated with bread crumbs and deep fried",
    rate: "$4.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Tandoori Chicken Tikka",
    description: "Boneless pieces of chicken breast, marinated in yogurt and tandoori spices,served with fresh mint chutney",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Tandoori Malai Tikka",
    description: "Boneless Pieces of Chicken Breast, Marinated in Mild Cashew Paste Indian Spices",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Village Style Tandoori Kaada",
    description: "Two Whole Kaada Marinated In Tandoori Masala and Cooked in Tandoor",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Tandoori Paneer Tikka",
    description: "Indian cottage cheese marinated with spices and cooked in tandoor",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Amritsari Fish Pakora",
    description: "Street style batter fried Basa fish served with green chutney",
    rate: "$13.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Signature Seafood Meal",
    description: "Ask your server for details of this daily special combo of seafood curries, include dry and gravy",
    rate: "$24.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Beef Curry Meal",
    description: "Traditional Kerala meal served with house style beef curry",
    rate: "$17.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Chicken Curry Meal",
    description: "Traditional Kerala meal served with house style chicken curry",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kerala Meal with Omlet",
    description: "A traditional Kerala meal served with two egg omelet",
    rate: "$15.99",
    locations: ["Mississauga", "Hamilton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Vegetarian Sadhya",
    description: "A must try Kerala vegetarian tasting meal",
    rate: "$12.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Signature Non-vegetarian Meal",
    description: "Ask your server for details of this daily special combo of non-veg curries include dry and gravy",
    rate: "$24.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Fish Curry Meal",
    description: "Traditional Kerala meal served with chef's special fish curry of the day",
    rate: "$17.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kerala Meal with Omelet",
    description: "Traditional Kerala meal served with house style beef curry",
    rate: "$17.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Fish Pollichathu",
    description: "Grilled local fish cooked in chilly tamarind souse and wrapped in banana leaves",
    rate: "$12.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Golden Pompano Pollichathu",
    description: "Grilled Whole pompano cooked in chilly tamarind souse and wrapped in banana leaves",
    rate: "$19.99",
    locations: ["Brampton", "Cambridge", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Nadan Chicken Curry",
    description: "A south Indian style chicken curry with onion tomato sauce and coconut milk",
    rate: "$13.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Chef's Special Chicken",
    description: "A specialty chicken dish from the gods own country finished with green chilly and coriander",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Crab Masala",
    description: "Crab cooked with Kerala spices (seasonal)",
    rate: "$19.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Malabar Mussels Masala",
    description: "A spicy street food specialty from the Malabar coast (seasonal)",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Masala Fried Fish",
    description: "King fish steak shallow fried and served with house curry sauce and onion salad",
    rate: "$15.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kuttanadan Duck curry",
    description: "A favorite duck curryfrom the central Kerala",
    rate: "$16.99",
    locations: ["Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Konkan Shrimp Curry",
    description: "Shrimp cooked in a tangy onion tomato sauce and finished with coconut milk",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Travancore Mutton Stew",
    description: "A mild coconut stew, considered a local favorite",
    rate: "$15.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Coastal Fish Curry",
    description: "A spicy red fish curry from the Kerala coast",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kerala Beef Fry",
    description: "Pot roasted beef portions cooked in Kerala spices and pieces of fresh coconut, finished with curry leaves and green chilly",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Mutton Curry",
    description: "A popular classic south Indian delicacy of mutton, finished with roasted coconut sauce",
    rate: "$15.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Nadan Beef Curry",
    description: "Pot roasted beef portions cooked with chef's signature curry gravy",
    rate: "$15.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kuttanadan Duck Curry",
    description: "A favorite duck curry from the central Kerala",
    rate: "$15.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Daily Chicken Special",
    description: "Chef’s Kerala chicken special",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Chicken Kizhi Porotta",
    description: "Three pieces of house made Kerala porotta stuffed with spicy nadan chicken curry and wrapped in banana leaf, grilled in slow fire",
    rate: "$17.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Beef Kizhi Porotta",
    description: "Three pieces of house made Kerala porotta stuffed with spicy beef curry and wrapped in a banana leaf, grilled in slow fire",
    rate: "$18.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Mutton Kizhi Porotta",
    description: "Three pieces of house made Kerala porotta stuffed with spicy nadan mutton curry and wrapped in banana leaf, grilled in slow fire",
    rate: "$22.00",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Ocean Palate Signature Nidhi Kizhi",
    description: "Three pieces of house made Kerala porotta stuffed with spicy beef curry, chicken curry, and mutton curry wrapped in a banana leaf, grilled in slow fire",
    rate: "$19.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Chicken Kothu Porotta",
    description: "A local favorite delicacy",
    rate: "$15.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Beef Kothu Porotta",
    description: "A local favorite delicacy",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Butter Chicken",
    description: "A mildly spiced classic Indian dish, with pieces of marinated chicken cooked in a creamy cashew tomato sauce",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Chicken Tikka Masala",
    description: "Three pieces of house made Kerala porotta stuffed with spicy beef curry and wrapped in a banana leaf, grilled in slow fire",
    rate: "$15.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kadai Chicken",
    description: "A spicy dish cooked with bell peppers and a rich onion tomato gravy",
    rate: "$15.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kadai Mutton",
    description: "A spicy dish cooked with bell peppers and a rich onion tomato gravy",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Chilly Chicken",
    description: "A Hakka style chilly chicken cooked with bell peppers and diced onion",
    rate: "$15.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Mutton Sag",
    description: "Mutton cooked in a creamy spinach sauce",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Egg Curry",
    description: "Farm fresh eggs cooked in onion tomato sauce and finished with coconut milk",
    rate: "$12.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Channa Masala",
    description: "Chickpeas cooked in an onion tomato gravy",
    rate: "$10.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Vegetable Kurma",
    description: "Assorted vegetables cooked in a mild coconut stew",
    rate: "$10.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kadala Curry",
    description: "Black chickpeas tossed with onion, tomato finished with roasted coconut sauce",
    rate: "$10.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Yellow Lentil",
    description: "Yellow moong lentil cooked with onion, tomato, coriander leaves, green chilly finished with cumin",
    rate: "$10.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Butter Paneer",
    description: "Indian cottage cheese cooked in a creamy tomato sauce. *Contains cashew paste",
    rate: "$13.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kadai Paneer",
    description: "Indian cottage cheese cooked with onion and bell pepper finished with kadai masala",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Sag Paneer",
    description: "Indian cottage cheese cooked in a signature creamy spinach sauce",
    rate: "$13.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Aloo Gobi",
    description: "A traditional vegetarian specialty",
    rate: "$10.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Dal Makhani",
    description: "Chef's signature dal makhani",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Tandoori Plain Naan",
    description: "House made Indian flat bread",
    rate: "$2.25",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Tandoori Butter Naan",
    description: "House made Indian flat bread brushed with melted butter",
    rate: "$2.50",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Tandoori Garlic Naan",
    description: "A popular house made Indian flat bread topped with fresh chopped garlic, fresh coriander leaves and brushed with melted butter",
    rate: "$3.75",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Cheese Naan",
    description: "House made Indian flat bread topped with cheese brushed with melted butter",
    rate: "$4.25",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Ocean Palate Special Naan",
    description: "House made Indian flat bread topped with garlic, cheese, crushed red chilly, fresh coriander leaves and brushed with melted butter",
    rate: "$4.75",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kappa",
    description: "Casava root cooked Kerala style",
    rate: "$8.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Puttu",
    description: "Fresh made steamed puttu",
    rate: "$4.50",
    locations: ["Brampton", "Cambridge", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Tandoori Roti",
    description: "Whole wheat bread cooked in tandoor",
    rate: "$2.25",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kerala Paratha",
    description: "House made Kerala paratha",
    rate: "$2.49",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kallappam",
    description: "A popular traditional rice pancake",
    rate: "$1.50",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Pulao Rice",
    description: "Plain basmati rice",
    rate: "$5.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Kerala Matta Rice",
    rate: "$5.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Appam",
    description: "One piece of Kerala hopers, a must try specialty from “the Gods own country”",
    rate: "$1.75",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Vegetable Fried Rice",
    description: "A Kerala style vegetable fried rice",
    rate: "$12.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Chicken Fried Rice",
    description: "A Kerala style chicken fried rice",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Chicken Masala Noodles",
    description: "A hakka style noodle",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Ghee Roast",
    description: "Traditional plain Dosa topped with clarified butter and served with sambar and chutney",
    rate: "$10.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Onion Masala Dosa",
    description: "Classic masala dosa filled with mild potato topped with chopped onion served with sambar and coconut chutney",
    rate: "$13.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Plain Dosa",
    description: "Traditional plain dosa, served with sambar and coconut chutney (vegan)",
    rate: "$9.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Masala Dosa",
    description: "Classic masala dosa filled with mild potato, served with sambar and coconut chutney",
    rate: "$12.95",
    locations: ["Brampton", "Cambridge", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Plain Chocolate Dosa",
    description: "Traditional plain dosa topped chocolate chips and served with sambar and coconut chutney",
    rate: "$9.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Traditional Idli",
    description: "Three pcs of traditional steamed rice dumplings served with sambar and chutney",
    rate: "$8.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "M and M Dosa",
    description: "Kids favorite plain dosa topped chocolate chips and M and M served with sambar and coconut chutney",
    rate: "$10.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Strawberry or Mango Idli",
    description: "Three pcs of strawberry or mango flavored idli served with sambar and chutney",
    rate: "$8.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Egg Masala Dosa",
    description: "Traditional dosa brushed with fresh eggs and filled with mild potato, served with sambar and coconut chutney",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Spinach Idli",
    description: "3 pcs of spinach flavored idli served with sambar and chutney",
    rate: "$9.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Cheese Masala Dosa",
    description: "Cheese masala dosa filled with mild potato topped with cheese, served with sambar and coconut chutney",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Fantasy Land",
    description: "Four pcs of assorted flavored idli served with sambar and chutney",
    rate: "$10.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Plain Cheese Dosa",
    description: "Traditional plain dosa topped with cheese, served with sambar and coconut chutney",
    rate: "$11.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Plain Uthappam",
    description: "Two pcs of pancake style uthappam served with sambar and chutneys",
    rate: "$9.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Ghee Masala Dosa",
    description: "Classic masala dosa filled with mild potato topped with clarified butter and served with sambar and coconut chutney",
    rate: "$13.99",
    locations: ["Brampton", "Cambridge", "Mississauga"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Ghee Dosa",
    description: "Traditional plain Dosa topped with clarified butter and served with sambar and chutney",
    rate: "$10.99",
    locations: ["Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Onion Uthappam",
    description: "Two pcs of uthappam topped with chopped onions and served with sambar and chutney",
    rate: "$12.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Onion and Chilly Uthappam",
    description: "Two pcs of uthappam topped with chopped onion and green chilly and served with sambar and coconut chutney",
    rate: "$14.99",
    locations: ["Brampton", "Cambridge"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Beef Dum Biriyani",
    description: "Steamed basmati or jeera rice cooked with beef cubes and special Malabar spices, lemon juice and green chili, a must-try chef's signature dish",
    rate: "$15.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Malabar Chicken Dum Biryani",
    description: "Steamed basmati or jeera rice cooked with chicken and biryani spices",
    rate: "$12.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Special Dum Biriyani",
    description: "Steamed basmati or jeera rice cooked with a kingfish steak and special Malabar spices, lemon juice, and green chili, a must-try chef's signature dish",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Malabar Vegetable Dum Biryani",
    description: "Steamed basmati or jeera rice cooked with mixed vegetables and biryani spices",
    rate: "$10.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Malabar Lamb Dum Biryani",
    description: "Steamed basmati or jeera rice cooked with fresh lamb cubes and biryani spices",
    rate: "$16.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Raitha",
    description: "Homemade yogurt mixed with chopped tomato, onion and a hint of cumin",
    rate: "$3.99",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Pappad (three pieces)",
    description: "Papad is a thin, crispy, seasoned wafer made from lentil, chickpea, or rice flour, commonly served as a crunchy accompaniment to meals",
    rate: "$1.25",
    locations: ["Brampton", "Cambridge", "Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Vegans wonder",
    description: "Encrusted dosa crepe filled with kadala curry and masala mashed potato served with sambar and chutney",
    rate: "$16.99",
    locations: ["Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Viva Kerala",
    description: "Encrusted dosa crepe filled with fried beef and masala mashed potato, served with sambar and chutney",
    rate: "$18.99",
    locations: ["Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Lovely India",
    description: "Encrusted dosa crepe filled with fish curry and masala mashed potato, served with sambar and chutney",
    rate: "$17.99",
    locations: ["Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Golden Triangle",
    description: "Encrusted dosa crepe filled with fish curry and masala mashed potato, served with sambar and chutney",
    rate: "$17.99",
    locations: ["Mississauga", "Hamilton"],
  },
  {
    image: "./assets/images/menu-4.png",
    name: "Essence of Ayurveda",
    description: "Encrusted dosa crepe filled with beef curry and masala mashed potato, served with sambar and chutney",
    rate: "$17.99",
    locations: ["Mississauga", "Hamilton"],
  },
];

let desiredLocation = "Brampton"; // Set a default location
// Truncate Function
function truncateText() {
  const textContainer = document.getElementById("text-container");
  const maxLength = 20; // Set your desired maximum length
  const text = textContainer.textContent;

  if (text.length > maxLength) {
    textContainer.textContent = text.slice(0, maxLength) + "...";
  }
}
// Function to compare desiredLocation with menu items
function compareLocationWithMenu() {
  menu.forEach((menuItem, index) => {
    // console.log(`Menu Item ${index}:`, menuItem);
    // console.log(`Locations in Menu Item ${index}:`, menuItem.locations);

    if (menuItem.locations.includes(desiredLocation)) {
      console
        .log
        // `Desired Location ${desiredLocation} found in Menu Item ${index}`
        ();
      // Perform any action here for the matching menuItem
    } else {
      console
        .log
        // `Desired Location ${desiredLocation} not found in Menu Item ${index}`
        ();
    }
  });
}

// Log initial comparison
compareLocationWithMenu();
function changeLocationOnClick() {
  const locationDropdown = document.getElementById("locationDropdown");
  const selectedLocationElement = document.getElementById("selectedLocation");

  locationDropdown.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      desiredLocation = event.target.getAttribute("data-location");
      selectedLocationElement.textContent = desiredLocation;
      console.log(selectedLocationElement.textContent);

      // Compare whenever desiredLocation changes
      compareLocationWithMenu();
    }
  });
  return selectedLocationElement.textContent;
}
document.addEventListener("DOMContentLoaded", changeLocationOnClick);

// console.log("Desired Location:", desiredLocation);

// correct

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
  // console.log(`Menu items available in ${desiredLocation}:`);
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
    itemDesc.className = "itemDesc truncate";
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
  });
} else {
  // console.log(`No menu items available in ${desiredLocation}.`);
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
