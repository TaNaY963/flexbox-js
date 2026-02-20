// Select all elements that have the class 'panel'
// querySelectorAll returns a NodeList (like an array)
const panels = document.querySelectorAll('.panel');


// Function to toggle the 'open' class
// This runs when a panel is clicked
function toggleOpen() {
    // 'this' refers to the panel that was clicked
  // classList.toggle() adds the class if it's not there
  // and removes it if it already exists

  this.classList.toggle('open');
}


// Function to toggle the 'open-active' class
// This runs when a CSS transition ends
function toggleActive(e) {
   // e = event object
  // e.propertyName tells which CSS property finished transitioning
  // We only want to run this when 'flex' property changes
  // (because multiple properties might transition)
  if (e.propertyName.includes('flex')) {
        // Toggle the 'open-active' class
    // This usually triggers text animation or extra styling

    this.classList.toggle('open-active');
  }
}

// Loop through each panel
panels.forEach(panel => {
  // When panel is clicked → run toggleOpen function
  panel.addEventListener('click', toggleOpen);

  // When CSS transition ends → run toggleActive function
  panel.addEventListener('transitionend', toggleActive);
});
