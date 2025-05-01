document.addEventListener('DOMContentLoaded', function() {
    // Toggle filter sections
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterContent = this.closest('.filter-section').querySelector('.filter-content');
            const icon = this.querySelector('i');
            
            if (filterContent.style.display === 'none') {
                filterContent.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                filterContent.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
    
    function showGridView() {
        document.getElementById('gridView').style.display = 'grid';
        document.getElementById('listView').style.display = 'none';
        document.querySelector('.grid-view').classList.add('active');
        document.querySelector('.list-view').classList.remove('active');
    }
    
    function showListView() {
        document.getElementById('gridView').style.display = 'none';
        document.getElementById('listView').style.display = 'flex';
        document.querySelector('.grid-view').classList.remove('active');
        document.querySelector('.list-view').classList.add('active');
    }
    
    // Initialize with grid view
    showGridView();

    // View options (grid/list)
    const gridViewBtn = document.querySelector('.grid-view');
    const listViewBtn = document.querySelector('.list-view');
    const productContainer = document.querySelector('.product-grid');
    
    if (gridViewBtn && listViewBtn && productContainer) {
        gridViewBtn.addEventListener('click', function() {
            productContainer.classList.remove('list-view');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        });
        
        listViewBtn.addEventListener('click', function() {
            productContainer.classList.add('list-view');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            
            // Add list view styles dynamically
            if (!document.getElementById('list-view-styles')) {
                const style = document.createElement('style');
                style.id = 'list-view-styles';
                style.textContent = `
                    .product-grid.list-view {
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                    }
                    .product-grid.list-view .product-card {
                        display: flex;
                        height: auto;
                    }
                    .product-grid.list-view .product-image {
                        width: 200px;
                        height: 200px;
                        flex-shrink: 0;
                    }
                    .product-grid.list-view .product-info {
                        flex: 1;
                        border-top: none;
                        border-left: 1px solid #f0f0f0;
                    }
                `;
                document.head.appendChild(style);
            }
        });
    }
    
    // Wishlist buttons
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ff5252';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '#8b96a5';
            }
        });
    });
    
    // Filter tags
    const filterTags = document.querySelectorAll('.filter-tag .remove-filter');
    const clearAllBtn = document.querySelector('.clear-filters');
    
    filterTags.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.filter-tag').remove();
        });
    });
    
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', function() {
            document.querySelectorAll('.filter-tag').forEach(tag => {
                tag.remove();
            });
        });
    }
    
    // Pagination
    const pageButtons = document.querySelectorAll('.page-number');
    
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            pageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
});