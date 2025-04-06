function redirectToLink(url) 
    {
        if (url) 
            {
            window.open(url, '_blank'); 
            }
    }
function goToNextPage()
    {     
        window.location.href = "2ndinterface.html";
    }
    function validateForm() {
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value.trim();
        const loginBtn = document.getElementById("loginBtn");
  
        // Enable button only if both fields are not empty
        if (phone.length > 0 && password.length > 0) {
          loginBtn.disabled = false;
        } else {
          loginBtn.disabled = true;
        }
      }
  
      function login() {
        const phone = document.getElementById("phone").value.trim();

        // Check if phone is 10 digits and all numbers
        const phonePattern = /^\d{10}$/;
    
        if (!phonePattern.test(phone)) {
          alert("Phone number must be exactly 10 digits.");
          return;
        }
        // For demo purpose
        alert("Logging in...");
        // Replace with your login logic, or redirect
        window.location.href = "2ndinterface.html";
      }

      
