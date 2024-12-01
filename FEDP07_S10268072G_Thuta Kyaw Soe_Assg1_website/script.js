//MAIN PAGE -INDEX.HTML//
//==============================================================================================================================================//
//==============================================================================================================================================//
//hamburger method//
// Function to toggle the menu on small screens
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('show'); // Show or hide the menu
  hamburger.classList.toggle('active'); // Change hamburger icon to cross
}
//VIDEOS SECTION JS//
// Select the video container and the buttons
// List of YouTube video URLs 
const videoLinks = [
    "https://www.youtube.com/embed/7bY256ed42k",  //firstvideo
    "https://www.youtube.com/embed/oe70Uhjc_F4",
    "https://www.youtube.com/embed/NmbeyEbP_fI" 
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
// Open the booking form and pre-fill the information
function openBookingForm(date, location) {
  const bookingFormContainer = document.getElementById("booking-form-container");
  const cityInput = document.getElementById("city");
  const dateInput = document.getElementById("date");

  // Set the city and date in the form
  cityInput.value = location;
  dateInput.value = date;

  // Show the booking form
  bookingFormContainer.style.display = "flex";
}

// Close the booking form
function closeBookingForm() {
  const bookingFormContainer = document.getElementById("booking-form-container");
  bookingFormContainer.style.display = "none";
}

// Handle form submission (optional example, you can add actual logic)
function submitBooking(event) {
  event.preventDefault();

  // Get form data (you can send it to the server or handle it as needed)
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const date = document.getElementById("date").value;
  const tickets = document.getElementById("tickets").value;

  console.log("Booking submitted:", { name, email, city, date, tickets });

  // Optionally, you can show a confirmation or reset the form
  alert("Your booking has been submitted!");
  closeBookingForm(); // Close the form after submission
}

// ======================== Album ========================
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

// ========================Store========================
// Function to open the checkout modal
function openCheckout(button) {
  const item = button.parentElement;
  const name = item.getAttribute("data-name");
  const price = item.getAttribute("data-price");

  // Update the modal with item details
  document.getElementById("checkout-item-name").textContent = `Item: ${name}`;
  document.getElementById("checkout-item-price").textContent = `Price: $${price}`;

  // Show the checkout modal
  document.getElementById("checkout-modal").style.display = "flex";
}

// Function to close the checkout modal
function closeCheckout() {
  document.getElementById("checkout-modal").style.display = "none";
}

// Function to confirm the checkout
function confirmCheckout() {
  const quantity = document.getElementById("quantity").value;
  const itemName = document.getElementById("checkout-item-name").textContent.split(": ")[1];
  const itemPrice = parseFloat(document.getElementById("checkout-item-price").textContent.split(": $")[1]);

  const totalPrice = itemPrice * quantity;

  alert(`You are purchasing ${quantity} x ${itemName} for a total of $${totalPrice.toFixed(2)}.`);

  // Optionally: You can add functionality to process the payment here.

  closeCheckout(); // Close the modal after confirming checkout
}



