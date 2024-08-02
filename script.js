const h2 = document.createElement("h2");
h2.textContent = "Personal Website";

document.querySelector("body").appendChild(h2);

document.addEventListener('DOMContentLoaded', () => {
    
// Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tabs_topbar button');
    const tabContents = document.querySelectorAll('.tabs_content');

// Function to show and hide the selected tab content
    function showTab(tabId) {
    tabContents.forEach(content => {
        content.style.display = content.getAttribute('data-tab') === tabId ? 'block' : 'none';
    });

// Remove active class from all buttons
    tabButtons.forEach(button => {
        button.classList.remove('home-active');
    });

// Add active class to the selected button
    document.querySelector(`button[data-for-tab="${tabId}"]`).classList.add('home-active');
}

// Add click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-for-tab');
            showTab(tabId);
        });
    });
});