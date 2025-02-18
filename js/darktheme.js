const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const body = document.body;

// themeToggle.addEventListener('click', function() {
//     // body.classList.toggle('light-theme');
//     // if (body.classList.contains('light-theme')) {
//     //     themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
//     // } else {
//     //     themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
//     // }
//     toggleTheme();
// });




// Function to set the theme
function setTheme(isDark) {
   
    if (isDark) {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');        
        themeIcon.src = 'Images/image/moon.png'; // Moon image for dark mode
        themeText.innerHTML='Light On';
    } else {       
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        themeIcon.src = 'Images/image/sun.png'; // Sun image for light mode 
        themeText.innerHTML='Light Off';     
        
    }
}

// Function to toggle the theme
function toggleTheme() {        
    const isDark = !body.classList.contains('light-theme');
    setTheme(isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark'); // Save theme preference
}

// Load saved theme preference on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true); // Set dark theme
    } else if (savedTheme === 'light') {
        setTheme(false); // Set light theme
    } else {
        // Default to dark theme if no preference is saved
        setTheme(true);
    }
}

// Add event listener to the theme toggle button
themeToggle.addEventListener('click', toggleTheme);

// Load the theme when the page loads
window.addEventListener('load', loadTheme);