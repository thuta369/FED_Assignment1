//MAIN PAGE -INDEX.HTML//
//==============================================================================================================================================//
//==============================================================================================================================================//
//VIDEOS SECTION JS//
// Select the video container and the buttons
// List of YouTube video URLs 
const videoLinks = [
    "https://www.youtube.com/embed/eg2g6FPsdLI",
    "https://www.youtube.com/embed/oe70Uhjc_F4",
    "https://www.youtube.com/embed/VIDEO_ID_3" 
  ];
  
  let currentVideoIndex = 0;
  
  // Get the iframe element
  const videoElement = document.getElementById("carousel-video");
  
  function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoLinks.length) % videoLinks.length;
    updateVideo();
  }
  
  function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoLinks.length;
    updateVideo();
  }
  
  function updateVideo() {
    videoElement.src = videoLinks[currentVideoIndex];
  }
//==============================================================================================================================================//
//==============================================================================================================================================//
// ======================== Newsletter Form ========================
// Select form and elements for the newsletter subscription
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const formMessage = document.getElementById('form-message');

// Add event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get input values
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    // Validate inputs
    if (validateEmail(email) && validatePhone(phone)) {
        formMessage.textContent = 'Thank you for subscribing to the One Direction Newsletter!';
        formMessage.className = 'success';  // Success message style
        formMessage.classList.remove('hidden');  // Show message

        // Reset form fields after successful submission
        form.reset();
    } else {
        formMessage.textContent = 'Please enter valid email and phone number.';
        formMessage.className = 'error';  // Error message style
        formMessage.classList.remove('hidden');  // Show message
    }
});

// Validate email with regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone (basic validation for numeric input)
function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
}

// ======================== Tour Booking Form ========================

// Open the booking form with selected city and date
function openBookingForm(city, date) {
  // Show the booking form container
  const bookingFormContainer = document.getElementById('booking-form-container');
  const cityInput = document.getElementById('city');
  const dateInput = document.getElementById('date');

  // Make the booking form visible
  bookingFormContainer.style.display = 'block';
  
  // Set the values for city and date fields in the form
  cityInput.value = city;
  dateInput.value = date;
}

// Close the booking form
function closeBookingForm() {
  // Hide the booking form container
  document.getElementById('booking-form-container').style.display = 'none';
}

// Submit the booking form
function submitBooking(event) {
  event.preventDefault();
  
  // Hide the booking form and show the thank you message
  document.getElementById("booking-form-container").style.display = "none";
  document.getElementById("thank-you-section").style.display = "block";
}

// Shopping Cart Logic
let cart = [];
let total = 0;

// Add item to the cart
function addToCart(productName, productPrice) {
    // Add product to cart array
    cart.push({ name: productName, price: productPrice });

    // Update total
    total += productPrice;

    // Render cart
    renderCart();
}

// Render cart contents
function renderCart() {
    const cartList = document.getElementById("cart-list");
    const totalElement = document.getElementById("total");

    // Clear existing cart items
    cartList.innerHTML = "";

    // Add items to the cart
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        // Remove button for each item
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.onclick = () => removeFromCart(index);

        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });

    // Update total
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Remove item from the cart
function removeFromCart(index) {
    // Update total
    total -= cart[index].price;

    // Remove item from cart array
    cart.splice(index, 1);

    // Render cart again
    renderCart();
}

// Initialize event listeners for Add to Cart buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
        const productName = e.target.getAttribute("data-name");
        const productPrice = parseFloat(e.target.getAttribute("data-price"));
        addToCart(productName, productPrice);
    });
});

//album
// Function to display the album popup with dynamic content
function showAlbumDetails(title, year, imageSrc, tracklist) {
  // Get the popup elements
  const albumPopup = document.getElementById("albumPopup");
  const albumImage = document.getElementById("albumImage");
  const albumTitle = document.getElementById("albumTitle");
  const albumYear = document.getElementById("albumYear");
  const albumTracklist = document.getElementById("albumTracklist");

  // Update the popup content
  albumImage.src = imageSrc;
  albumTitle.textContent = title;
  albumYear.textContent = `Released: ${year}`;
  albumTracklist.innerHTML = ""; // Clear previous tracklist

  // Populate the tracklist dynamically
  tracklist.forEach((track) => {
      const trackItem = document.createElement("li");
      trackItem.textContent = track;
      albumTracklist.appendChild(trackItem);
  });

  // Show the popup
  albumPopup.style.display = "block";
}

// Function to close the popup
function closePopup() {
  const albumPopup = document.getElementById("albumPopup");
  albumPopup.style.display = "none";
}

// Event listener to close popup when clicking outside the popup content
window.addEventListener("click", (event) => {
  const albumPopup = document.getElementById("albumPopup");
  if (event.target === albumPopup) {
      closePopup();
  }
});


