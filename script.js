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
//NEWSLETTER JS//
// Select form and elements
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const formMessage = document.getElementById('form-message');

// Add event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    // Validate inputs
    if (validateEmail(email) && validatePhone(phone)) {
        formMessage.textContent = 'Thank you for subscribing to the One Direction Newsletter!';
        formMessage.className = 'success';
        formMessage.classList.remove('hidden');

        // Reset form
        form.reset();
    } else {
        formMessage.textContent = 'Please enter valid email and phone number.';
        formMessage.className = 'error';
        formMessage.classList.remove('hidden');
    }
});

// Validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone (basic validation for numeric input)
function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
}
//==============================================================================================================================================//
//==============================================================================================================================================//
//TOURS JS//
// Show the booking form with city and date pre-filled
function showBookingForm(city, date) {
  document.getElementById("city").value = city;
  document.getElementById("date").value = date;
  document.getElementById("booking-form-container").style.display = "flex";
}

// Close the booking form
function closeBookingForm() {
  document.getElementById("booking-form-container").style.display = "none";
}

// Handle the form submission
function submitBooking(event) {
  event.preventDefault();
  
  // Hide the booking form and show the thank you message
  document.getElementById("booking-form-container").style.display = "none";
  document.getElementById("thank-you-section").style.display = "block";
}