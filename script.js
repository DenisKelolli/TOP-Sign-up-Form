    

function validatePassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const passwordError = document.getElementById("passwordError");

    if (password !== confirmPassword) {
      passwordError.textContent = "Passwords do not match";
      passwordError.style.color = "red";
    } else {
      passwordError.textContent = "";
    }
  }
  
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
    
 
  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", validatePassword);
  