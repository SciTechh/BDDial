const connectButtons = document.querySelectorAll('.connect-btn');
    const popupOverlay = document.querySelector('.popup-overlay');
    const closePopupButton = document.querySelector('.close-popup');

    // Open popup when any "Connect Now" button is clicked
    connectButtons.forEach(button => {
        button.addEventListener('click', () => {
            popupOverlay.classList.remove('hidden');
        });
    });

    // Close popup when close button is clicked
    closePopupButton.addEventListener('click', () => {
        popupOverlay.classList.add('hidden');
    });

    // Optional: Close popup when clicking outside the popup content
    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.classList.add('hidden');
        }
    });