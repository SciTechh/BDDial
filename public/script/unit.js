// Dark mode toggle with checkbox
const checkboxw = document.querySelector('#toggle');
const html = document.documentElement; // Cache the html element

const toggleDarkMode = () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.theme = 'light'; // Save user preference for light mode
    } else {
        html.classList.add('dark');
        localStorage.theme = 'dark';  // Save user preference for dark mode
    }
};

// Listen for checkbox click to toggle dark mode
checkboxw.addEventListener('click', toggleDarkMode);