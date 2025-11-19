document.addEventListener('DOMContentLoaded', function() {
    // Profile tab functionality
    const profileTabs = document.querySelectorAll('#profileTabs .nav-link');
    
    profileTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            profileTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });

    // Edit profile button
    const editProfileBtn = document.querySelector('.btn-primary');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function() {
            alert('Edit profile functionality would open a modal or navigate to edit page');
        });
    }

    // Listing actions
    const deleteButtons = document.querySelectorAll('.btn-outline-danger');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this listing?')) {
                this.closest('.col-md-6').remove();
                alert('Listing deleted successfully');
            }
        });
    });
});