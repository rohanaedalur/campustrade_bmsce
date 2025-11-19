document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchBtn = document.querySelector('.btn-primary');
    
    function performSearch() {
        const searchTerm = searchBar.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-text').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.closest('.col-md-6').style.display = 'block';
            } else {
                card.closest('.col-md-6').style.display = 'none';
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    if (searchBar) {
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Filter functionality
    const applyFiltersBtn = document.querySelector('.filters-sidebar .btn-primary');
    const resetFiltersBtn = document.querySelector('.filters-sidebar .btn-outline-secondary');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            alert('Filters applied! This would filter the results based on selected criteria.');
        });
    }

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', function() {
            const checkboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]');
            const inputs = document.querySelectorAll('.filters-sidebar input[type="number"]');
            
            checkboxes.forEach(checkbox => checkbox.checked = false);
            inputs.forEach(input => input.value = '');
            
            alert('Filters reset!');
        });
    }

    // Sort functionality
    const sortSelect = document.querySelector('.form-select')