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


