document.addEventListener('DOMContentLoaded', function() {
    // Product Image Gallery
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update main image
            const imageUrl = this.getAttribute('data-image');
            mainImage.src = imageUrl;
        });
    });
    
    // Product Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            const tabId = this.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Save for later button
    const saveBtn = document.querySelector('.save-btn');
    
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#ff5252';
                alert('Product saved to your wishlist!');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '#0d6efd';
                alert('Product removed from your wishlist!');
            }
        });
    }
    
    // Send inquiry button
    const inquiryBtn = document.querySelector('.inquiry-btn');
    
    if (inquiryBtn) {
        inquiryBtn.addEventListener('click', function() {
            alert('Your inquiry has been sent to the supplier. They will contact you soon!');
        });
    }
    
    // Shop now button in discount banner
    const shopNowBtn = document.querySelector('.shop-now-btn');
    
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', function() {
            alert('Redirecting to special offers page...');
        });
    }
    
    // Pricing options highlight
    const priceOptions = document.querySelectorAll('.price-option');
    
    priceOptions.forEach(option => {
        option.addEventListener('click', function() {
            priceOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            // Add selected style dynamically
            if (!document.getElementById('price-option-styles')) {
                const style = document.createElement('style');
                style.id = 'price-option-styles';
                style.textContent = `
                    .price-option.selected {
                        background-color: #f0f9ff;
                        border-radius: 6px;
                        padding: 10px;
                        border: 1px solid #0d6efd;
                    }
                `;
                document.head.appendChild(style);
            }
        });
    });
    
    // Related products hover effect
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.1)';
        });
    });
});