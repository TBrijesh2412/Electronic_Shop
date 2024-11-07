// script.js
function validateForm() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Check if Name, User Name, Email, and Password are empty
    if (name.trim() === '' || username.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert("Name, User Name, Email, and Password are required fields.");
      return;
    }
  
    // Simple email validation
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Simple password length validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
  
    // If all validations pass, redirect to home.html
    window.location.href = "home.html";
  }

  // script.js

// Form validation for Login form
function validateLoginForm() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
  
    // Check if User Name and Password are empty
    if (username.trim() === '' || password.trim() === '') {
      alert("User Name and Password are required fields.");
      return;
    }
  
    // Check if password is at least 6 characters long
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
  
    // If all validations pass, redirect to home.html
    window.location.href = "home.html";
  }
  
  