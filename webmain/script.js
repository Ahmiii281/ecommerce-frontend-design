// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded'), function() {
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
        });
    });
}
    // Timer countdown
    const timerBoxes = document.querySelectorAll('.timer-box .time');
    if (timerBoxes.length) {
        // Set the countdown date (24 hours from now)
        const countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 1);
        
        // Update the countdown every 1 second
        const countdown = setInterval(function() {
            // Get current date and time
            const now = new Date().getTime();
            
            // Find the distance between now and the countdown date
            const distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result
            timerBoxes[0].textContent = days < 10 ? '0' + days : days;
            timerBoxes[1].textContent = hours < 10 ? '0' + hours : hours;
            timerBoxes[2].textContent = minutes < 10 ? '0' + minutes : minutes;
            timerBoxes[3].textContent = seconds < 10 ? '0' + seconds : seconds;
            
            // If the countdown is finished, clear the interval
            if (distance < 0) {
                clearInterval(countdown);
            }
        }, 1000);
    }
    
    // Form validation for supplier request
    const requestForm = document.querySelector('.request-form form');
    if (requestForm) {
        requestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const itemInput = this.querySelector('input[placeholder="Type more details"]');
            const quantityInput = this.querySelector('input[placeholder="0"]');
            
            if (!itemInput.value.trim()) {
                alert('Please specify what item you need');
                return;
            }
            
            if (!quantityInput.value.trim() || isNaN(quantityInput.value) || quantityInput.value <= 0) {
                alert('Please enter a valid quantity');
                return;
            }
            
            alert('Your inquiry has been sent successfully!');
            this.reset();
        });
    }
    
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
    
    // Product hover effect
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Responsive navigation
    const categoryBtn = document.querySelector('.category-btn');
    const categorySidebar = document.querySelector('.categories-sidebar');
    
    if (categoryBtn && categorySidebar) {
        categoryBtn.addEventListener('click', function() {
            categorySidebar.classList.toggle('show');
        });
    }
    
 // Language and currency selector
const languageSelects = document.querySelectorAll('.language-select select');

languageSelects.forEach(select => {
    select.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        console.log(`Selected language/currency: ${selectedOption.text}`);
        // Here you would typically:
        // 1. Update the UI to show selected language
        // 2. Make an API call to change the site language
        // 3. Possibly reload currency prices
    });
});

// Ship to selector
const shipToSelect = document.querySelector('.ship-to select');

if (shipToSelect) {
    shipToSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const countryCode = selectedOption.value;
        const flagImage = selectedOption.dataset.flag;
        
        console.log(`Shipping country changed to: ${selectedOption.text}`);
        
        // Update the flag display (if you're showing it outside the select)
        const flagDisplay = document.querySelector('.ship-to img');
        if (flagDisplay) {
            flagDisplay.src = `../Assets/flags/${flagImage}`;
            flagDisplay.alt = `${selectedOption.text} Flag`;
        }
        
        // Here you would typically:
        // 1. Update shipping calculations
        // 2. Filter available products based on shipping country
        // 3. Update any location-specific content
    });
}

// Category dropdown toggle
const categoryBtn = document.querySelector('.category-btn');
const categoryDropdown = document.querySelector('.category-dropdown');

if (categoryBtn && categoryDropdown) {
    categoryBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        categoryDropdown.classList.toggle('show');
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Help dropdown toggle
    const helpDropdown = document.querySelector('.dropdown-container');
    const helpDropdownBtn = document.querySelector('.dropdown-container .dropdown');
    const helpDropdownContent = document.querySelector('.dropdown-container .dropdown-content');

    if (helpDropdown && helpDropdownBtn && helpDropdownContent) {
        helpDropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            helpDropdownContent.classList.toggle('show');
            const icon = this.querySelector('.dropdown-icon');
            icon.classList.toggle('rotate');
        });

        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!helpDropdown.contains(e.target)) {
                helpDropdownContent.classList.remove('show');
                const icon = helpDropdown.querySelector('.dropdown-icon');
                icon.classList.remove('rotate');
            }
        });
    }

});