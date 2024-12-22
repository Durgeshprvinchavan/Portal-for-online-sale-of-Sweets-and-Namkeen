let bagItemObjects;
onLoad();

function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary() {
    let bagSummaryElement = document.querySelector('.bag-summary');

    // Check if bagItemObjects is empty
    if (bagItemObjects.length === 0) {
        // If bag is empty, hide the bag summary
        bagSummaryElement.innerHTML = '<div class="empty-bag-message">Your bag is empty.</div>';
        return;
    }

    let totalItem = bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObjects.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount;


    bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
     <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
     <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
     </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;

    document.querySelector('.btn-place-order').addEventListener('click', placeOrder);
}

function placeOrder() {

    // Reload bag item objects and update displays
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();

    // Display pop-up modal
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Attach event listener to close icon
    document.getElementById('close').addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

function submitPayment() {
    var cardNumber = document.getElementById('card-number').value.trim();
    var expiryDate = document.getElementById('expiry-date').value.trim();
    var cvv = document.getElementById('cvv').value.trim();

    // Validating card number
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }

    // Validating expiry date
    if (!isValidExpiryDate(expiryDate)) {
        alert('Please enter a valid expiry date, ensure it is not a past date or the current date.');
        return;
    }

    // Validating CVV
    if (cvv.length !== 4 || !/^\d+$/.test(cvv)) {
        alert('Please enter a valid 4-digit CVV.');
        return;
    }

    // Dummy validation (just checking if the fields are not empty)
    alert('Payment successful!');

    // Clear bagItems
    bagItems = [];
    localStorage.setItem('bagItems', JSON.stringify(bagItems));

    // Reload bag item objects and update displays
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();

    // Display success alert
    alert('Your order has been successfully placed!');

    // Hide popup
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function isValidExpiryDate(expiryDate) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear() % 100; // Get last two digits of current year
    var currentMonth = currentDate.getMonth() + 1; // January is 0, so add 1 to get the current month

    // Extract month and year from expiry date string
    var parts = expiryDate.split('/');
    if (parts.length !== 2) {
        return false; // Not in MM/YY format
    }

    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[1], 10);

    // Check if expiry date is in the future and not the current month/year
    return year > currentYear || (year === currentYear && month > currentMonth);
}

function formatExpiryDate(input) {
    let value = input.value;

    // Check if the length is 2 and the last character is a number
    if (value.length === 2 && !isNaN(value.charAt(1))) {
        value += '/';
        input.value = value;
    }

    // Check if the length is 3 and the last character is not "/"
    if (value.length === 3 && value.charAt(2) !== '/') {
        value = value.slice(0, 2) + '/' + value.slice(2);
        input.value = value;
    }
}

function loadBagItemObjects() {
    console.log(bagItems);
    bagItemObjects = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}

function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
        innerHTML += generateItemHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();
}

function generateItemHTML(item) {
    return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${item.image}" alt="${item.alt}">
    </div>
    <div class="item-right-part">
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">₹ ${item.current_price}</span>
        <span class="original-price">₹ ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
    </div>
    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>`;
}
