console.log("JavaScript is here");

const SideNav_open = document.getElementById("mySidenav");
const SideNav_close = document.getElementById("mySidenav");

console.log('listening');

SideNav_open.addEventListener('click',openNav);
SideNav_close.addEventListener('click',closeNav);

console.log("Operating Navigation Bar")

function openNav() {
    SideNav_open.style.width = "250px";
  }
  
function closeNav() {
    SideNav_close.style.width = "0";
  }

  document.addEventListener('mousemove', function(event) {
    var lavaEffect = document.getElementById('lava-effect');
    var x = event.clientX;
    var y = event.clientY;
    var lavaElement = document.createElement('div');
    
    lavaElement.classList.add('lava-drop');
    lavaElement.style.left = x + 'px';
    lavaElement.style.top = y + 'px';
    lavaEffect.appendChild(lavaElement);
  
    lavaElement.addEventListener('animationend', function() {
      lavaEffect.removeChild(lavaElement);
    });
  });
  
  var categories = document.querySelectorAll('.category');
  var projects = document.querySelectorAll('.project');
  
  categories.forEach(function(category) {
    category.addEventListener('click', function() {
      var filter = this.dataset.filter;
  
      categories.forEach(function(category) {
        category.classList.remove('active');
      });
      this.classList.add('active');
  
      projects.forEach(function(project) {
        var projectCategory = project.dataset.category;
  
        if (filter === 'all' || projectCategory === filter) {
          project.classList.add('show');
        } else {
          project.classList.remove('show');
        }
      });
    });
  });

  // splitting screen for the categories thanks to chatgpt

  // JavaScript code to handle category selection and split animation

// Get the category elements
const categoryElements = document.querySelectorAll('.category > div');

// Add click event listener to each category element
categoryElements.forEach((categoryElement) => {
  categoryElement.addEventListener('click', () => {
    // Remove active class from all category elements
    categoryElements.forEach((element) => {
      element.classList.remove('active');
    });

    // Add active class to the clicked category element
    categoryElement.classList.add('active');

    // Toggle the expanded class on the split-container
    const splitContainer = document.querySelector('.split-container');
    splitContainer.classList.toggle('expanded');
  });
});


// from w3school for the portfolio's work grid 
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_portfolio_gallery_filter

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}