//your JS code here. If required.
const form = document.querySelector('form');
const fontsizeInput = document.getElementById('fontsize');
const fontcolorInput = document.getElementById('fontcolor');

// Check for saved preferences in cookies
const savedFontSize = parseInt(getCookie('fontsize'));
const savedFontColor = getCookie('fontcolor');

if (savedFontSize) {
  fontsizeInput.value = savedFontSize;
  document.documentElement.style.setProperty('--fontsize', `${savedFontSize}px`);
}

if (savedFontColor) {
  fontcolorInput.value = savedFontColor;
  document.documentElement.style.setProperty('--fontcolor', savedFontColor);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newFontSize = parseInt(fontsizeInput.value);
  const newFontColor = fontcolorInput.value;

  // Update the CSS variables
  document.documentElement.style.setProperty('--fontsize', `${newFontSize}px`);
  document.documentElement.style.setProperty('--fontcolor', newFontColor);

  // Set cookies to store preferences
  setCookie('fontsize', newFontSize, 365); // Expire in 1 year
  setCookie('fontcolor', newFontColor, 365);
});

// Helper functions for cookie management
function
 
getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function
 
setCookie(name, value, days) {
  const expires = `; expires=${new Date(Date.now() + days * 864e5).toUTCString()}`;
  document.cookie = `${name}=${value}${expires}`;
}