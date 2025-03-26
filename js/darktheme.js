const themeToggle = document.getElementById('theme-toggle');
const LogoIcon = document.getElementById('logo');
const LinkInIcon = document.getElementById('LinkedID');
const gitHubIcon = document.getElementById('gitID');
const EmailIcon = document.getElementById('emailID');
const WhatsIcon = document.getElementById('WhatsID');

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
        LogoIcon.src='Images/image/white_logo.png';
        themeIcon.src = 'Images/image/moon.png'; // Moon image for dark mode
        // themeText.innerHTML='Light On';
        LinkInIcon.src='Images/image/linkedin (5).png';
        gitHubIcon.src='Images/image/github-sign (1).png';
        EmailIcon.src='Images/image/email.png';
        WhatsIcon.src='Images/image/whatsapp (3).png';
    } else {       
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');       
        LogoIcon.src='Images/image/Black_Logo.png';
        themeIcon.src = 'Images/image/sun.png'; // Sun image for light mode 
        // themeText.innerHTML='Light Off';  
        themeIcon.style='height: 24px;';
        LinkInIcon.src='Images/image/linkedin (6).png';
        gitHubIcon.src='Images/image/github (5).png';
        EmailIcon.src='Images/image/email (1).png';
        WhatsIcon.src='Images/image/whatsapp (4).png';
        
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