// Side Navigation Side Bar

// console.log("JavaScript is here");

// const SideNav_open = document.getElementById("mySidenav");
// const SideNav_close = document.getElementById("mySidenav");

// console.log('listening');

// SideNav_open.addEventListener('click',openNav);
// SideNav_close.addEventListener('click',closeNav);

// console.log("Operating Navigation Bar")

// function openNav() {
//     SideNav_open.style.width = "250px";
//   }
  
// function closeNav() {
//     SideNav_close.style.width = "0";
//   }

  // lava mouse effect on home page

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


  // hamburger menu for mobile and smaller screens
            var menuList = document.getElementById("menuList");
    
            menuList.style.maxHeight = "0px";
    
            function togglemenu(){
    
            if (menuList.style.maxHeight == '0px')
            {
                console.log ("Menu Opened");
                menuList.style.maxHeight="400px"
            }
            else
            {
                console.log ("Menu Closed");
                menuList.style.maxHeight="0px"
            }
            }
    