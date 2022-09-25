//!TOGGLE NAVIGATION MENU AND ICONS
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () => {
  menuElement.classList.toggle('active');
  menuToggleButton.classList.toggle('active');
};

menuToggleButton.addEventListener('click', toggleMenu);
// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK

const removeActiveLinkClass = (e) => {
  if (e.target.classList.contains('list-link')) {
    menuElement.classList.remove('active');
    menuToggleButton.classList.remove('active');
  }
};

document.addEventListener('click', removeActiveLinkClass);

// !CANVAS FUNCTIONALITY
$(document).ready(function () {
  if(!$("#myCanvas").tagcanvas({
    textColour: "#525252",
    outlineColour: "transparent",
    reverse: true,
    depth: 0.8,
    maxSpeed: 0.05,
    weight: true,
  }, "tags")){
    // if something go wrong hide the canvas container,
    $("canvasContainer")
  }
})

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if (currentTheme) {
  bodyElement.classList.add('dark-theme');
}

const toggleTheme = () => {
  bodyElement.classList.toggle('dark-theme');

  if (bodyElement.classList.contains('dark-theme')) {
    localStorage.setItem('darkTheme', 'active');
  } else {
    localStorage.removeItem('darkTheme');
  }
};
themeToggleButton.addEventListener('click', toggleTheme);
// !INTERSECTION OBSERVER

// const elements = document.querySelectorAll(".hidden");
// const options = {}
// const observer = new IntersectionObserver(function(entries, observer) {
//   entries.forEach(entry => {
//     entry.target.classList.toggle("show")
//   });
// }, options);

// elements.forEach(element => {
//   observer.observe(element)
// })

// observer.observe(elements);