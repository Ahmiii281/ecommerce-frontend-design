document.addEventListener('DOMContentLoaded', function() {
    // Quantity Selector Functionality
    const quantitySelectors = document.querySelectorAll('.quantity-selector');
    
    quantitySelectors.forEach(selector => {
        const quantityText = selector.querySelector('span');
        const options = selector.querySelectorAll('.quantity-option');
        
        options.forEach(option => {
            option.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                quantityText.textContent = `Qty: ${value}`;
                updateCartTotals();
            });
        });
    });
    
    // Remove Item Functionality
    const removeButtons = document.querySelectorAll('.remove-btn');
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.style.opacity = '0.5';
            setTimeout(() => {
                cartItem.remove();
                updateCartCount();
                updateCartTotals();
            }, 300);
        });
    });
    
    // Remove All Functionality
    const removeAllButton = document.querySelector('.remove-all-btn');
    
    if (removeAllButton) {
        removeAllButton.addEventListener('click', function() {
            const cartItems = document.querySelectorAll('.cart-item');
            
            cartItems.forEach(item => {
                item.style.opacity = '0.5';
            });
            
            setTimeout(() => {
                cartItems.forEach(item => {
                    item.remove();
                });
                updateCartCount();
                updateCartTotals();
            }, 300);
        });
    }
    
    // Save for Later Functionality
    const saveButtons = document.querySelectorAll('.save-btn');
    
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            const itemTitle = cartItem.querySelector('.item-title').textContent;
            const itemPrice = cartItem.querySelector('.item-price').textContent;
            
            // Create a new saved item
            const savedItemsContainer = document.querySelector('.saved-items');
            
            if (savedItemsContainer) {
                const savedItem = document.createElement('div');
                savedItem.className = 'saved-item';
                savedItem.innerHTML = `
                    <div class="saved-image">
                        <img src="/placeholder.svg?height=150&width=150" alt="Saved Item">
                    </div>
                    <div class="saved-price">${itemPrice}</div>
                    <div class="saved-title">${itemTitle}</div>
                    <button class="move-to-cart-btn"><i class="fas fa-shopping-cart"></i> Move to cart</button>
                `;
                
                savedItemsContainer.appendChild(savedItem);
                
                // Add event listener to the new Move to Cart button
                const moveToCartBtn = savedItem.querySelector('.move-to-cart-btn');
                moveToCartBtn.addEventListener('click', moveToCart);
                
                // Remove the item from cart
                cartItem.remove();
                updateCartCount();
                updateCartTotals();
            }
        });
    });
    
    // Move to Cart Functionality
    const moveToCartButtons = document.querySelectorAll('.move-to-cart-btn');
    
    moveToCartButtons.forEach(button => {
        button.addEventListener('click', moveToCart);
    });
    
    function moveToCart() {
        const savedItem = this.closest('.saved-item');
        const itemTitle = savedItem.querySelector('.saved-title').textContent;
        const itemPrice = savedItem.querySelector('.saved-price').textContent;
        
        // Create a new cart item
        const cartItemsContainer = document.querySelector('.cart-items');
        
        if (cartItemsContainer) {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="item-image">
                    <img src="/placeholder.svg?height=100&width=100" alt="T-shirt">
                </div>
                <div class="item-details">
                    <h3 class="item-title">${itemTitle}</h3>
                    <div class="item-specs">
                        <span>Size: medium,</span>
                        <span>Color: blue,</span>
                        <span>Material: Plastic</span>
                    </div>
                    <div class="item-seller">Seller: Artel Market</div>
                    <div class="item-actions">
                        <button class="remove-btn">Remove</button>
                        <button class="save-btn">Save for later</button>
                    </div>
                </div>
                <div class="item-price">${itemPrice}</div>
                <div class="item-quantity">
                    <div class="quantity-selector">
                        <span>Qty: 1</span>
                        <i class="fas fa-chevron-down"></i>
                        <div class="quantity-dropdown">
                            <div class="quantity-option" data-value="1">1</div>
                            <div class="quantity-option" data-value="2">2</div>
                            <div class="quantity-option" data-value="3">3</div>
                            <div class="quantity-option" data-value="4">4</div>
                            <div class="quantity-option" data-value="5">5</div>
                        </div>
                    </div>
                </div>
            `;
            
            // Insert before the cart actions
            const cartActions = cartItemsContainer.querySelector('.cart-actions');
            cartItemsContainer.insertBefore(cartItem, cartActions);
            
            // Add event listeners to the new buttons
            const removeBtn = cartItem.querySelector('.remove-btn');
            const saveBtn = cartItem.querySelector('.save-btn');
            const quantitySelector = cartItem.querySelector('.quantity-selector');
            const quantityOptions = cartItem.querySelectorAll('.quantity-option');
            
            removeBtn.addEventListener('click', function() {
                cartItem.style.opacity = '0.5';
                setTimeout(() => {
                    cartItem.remove();
                    updateCartCount();
                    updateCartTotals();
                }, 300);
            });
            
            saveBtn.addEventListener('click', function() {
                // Reuse the save for later functionality
                const itemTitle = cartItem.querySelector('.item-title').textContent;
                const itemPrice = cartItem.querySelector('.item-price').textContent;
                
                const savedItemsContainer = document.querySelector('.saved-items');
                
                if (savedItemsContainer) {
                    const savedItem = document.createElement('div');
                    savedItem.className = 'saved-item';
                    savedItem.innerHTML = `
                        <div class="saved-image">
                            <img src="/placeholder.svg?height=150&width=150" alt="Saved Item">
                        </div>
                        <div class="saved-price">${itemPrice}</div>
                        <div class="saved-title">${itemTitle}</div>
                        <button class="move-to-cart-btn"><i class="fas fa-shopping-cart"></i> Move to cart</button>
                    `;
                    
                    savedItemsContainer.appendChild(savedItem);
                    
                    const moveToCartBtn = savedItem.querySelector('.move-to-cart-btn');
                    moveToCartBtn.addEventListener('click', moveToCart);
                    
                    cartItem.remove();
                    updateCartCount();
                    updateCartTotals();
                }
            });
            
            quantityOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const value = this.getAttribute('data-value');
                    quantitySelector.querySelector('span').textContent = `Qty: ${value}`;
                    updateCartTotals();
                });
            });
            
            // Remove the saved item
            savedItem.remove();
            updateCartCount();
            updateCartTotals();
        }
    }
    
    // Apply Coupon Functionality
    const applyButton = document.querySelector('.apply-btn');
    
    if (applyButton) {
        applyButton.addEventListener('click', function() {
            const couponInput = document.querySelector('.coupon-form input');
            const couponValue = couponInput.value.trim();
            
            if (couponValue) {
                alert(`Coupon "${couponValue}" applied successfully!`);
                couponInput.value = '';
                
                // Update discount in summary
                const discountElement = document.querySelector('.summary-row.discount span:last-child');
                if (discountElement) {
                    discountElement.textContent = '- $100.00';
                }
                
                updateCartTotals();
            } else {
                alert('Please enter a valid coupon code');
            }
        });
    }
    
    // Checkout Button
    const checkoutButton = document.querySelector('.checkout-btn');
    
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            alert('Proceeding to checkout...');
        });
    }
    
    // Shop Now Button
    const shopNowButton = document.querySelector('.shop-now-btn');
    
    if (shopNowButton) {
        shopNowButton.addEventListener('click', function() {
            alert('Redirecting to special offers...');
        });
    }
    
    // Helper Functions
    function updateCartCount() {
        const cartItems = document.querySelectorAll('.cart-item');
        const cartTitle = document.querySelector('.cart-title');
        
        if (cartTitle) {
            cartTitle.textContent = `My cart (${cartItems.length})`;
        }
    }
    
    function updateCartTotals() {
        // This is a simplified calculation
        const cartItems = document.querySelectorAll('.cart-item');
        let subtotal = 0;
        
        cartItems.forEach(item => {
            const priceText = item.querySelector('.item-price').textContent;
            const price = parseFloat(priceText.replace('$', ''));
            const quantityText = item.querySelector('.quantity-selector span').textContent;
            const quantity = parseInt(quantityText.replace('Qty: ', ''));
            
            subtotal += price * quantity;
        });
        
        // Update subtotal
        const subtotalElement = document.querySelector('.summary-row:first-child span:last-child');
        if (subtotalElement) {
            subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        }
        
        // Get discount
        const discountElement = document.querySelector('.summary-row.discount span:last-child');
        let discount = 0;
        if (discountElement) {
            discount = parseFloat(discountElement.textContent.replace('- $', ''));
        }
        
        // Get tax
        const taxElement = document.querySelector('.summary-row.tax span:last-child');
        let tax = 0;
        if (taxElement) {
            tax = parseFloat(taxElement.textContent.replace('+ $', ''));
        }
        
        // Update total
        const totalElement = document.querySelector('.summary-row.total span:last-child');
        if (totalElement) {
            const total = subtotal - discount + tax;
            totalElement.textContent = `$${total.toFixed(2)}`;
        }
    }
});