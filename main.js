let bagItems;

onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement) {
        return;
    }
    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `
            <div class="item-container">
                <img class="item-image popup-trigger" src="${item.image}" alt="item image" data-text="${item.description}">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">₹ ${item.current_price}</span>
                    <span class="original-price">₹ ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>
        `;
    });
    innerHtml += `
        <div class="popup" id="popup">
            <div class="popup-content">
                <p class="popup-text"></p>
                <button class="close-btn" id="close-btn"></button>
            </div>
        </div>`;
    itemsContainerElement.innerHTML = innerHtml;
}

document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup');
  const popupText = document.querySelector('.popup-text');
  const closeBtn = document.getElementById('close-btn');
  const triggers = document.querySelectorAll('.popup-trigger');

  triggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
          const text = this.getAttribute('data-text');
          popupText.innerText = text;
          popup.style.display = 'block'; // Set display to block only when a trigger is clicked
      });
  });

  closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
  });
});
