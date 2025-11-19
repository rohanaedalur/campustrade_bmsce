// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.querySelector('.search-bar');
    const closeBtn = document.querySelector('.close-btn');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            searchBar.value = '';
            searchBar.focus();
        });
    }
    
    // Card click functionality
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Add navigation to item detail page
            console.log('Card clicked');
        });
    });
});