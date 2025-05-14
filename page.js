
window.onscroll = function() {myFunction()};

// Get the navbar
var header = document.getElementsByClassName("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }}
  const button = document.getElementById("submitForm");


  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form from submitting in the traditional way
  
    const name = document.getElementById('fname').value;

  
    console.log("Name:", name);
 
  });
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        document.getElementById('error-message').innerText = 'Please fill out both fields.';
        event.preventDefault();
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;

  if (username === '' || password === '') {
      document.getElementById('login-error-message').innerText = 'Please fill out both fields.';
      event.preventDefault();
  }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  var username = document.getElementById('register-username').value;
  var password = document.getElementById('register-password').value;
  var confirmPassword = document.getElementById('register-password-confirm').value;

  if (username === '' || password === '' || confirmPassword === '') {
      document.getElementById('register-error-message').innerText = 'Please fill out all fields.';
      event.preventDefault();
  } else if (password !== confirmPassword) {
      document.getElementById('register-error-message').innerText = 'Passwords do not match.';
      event.preventDefault();
  }
});
