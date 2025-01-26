// Sample users for login validation
const users = [
    { username: "admin", password: "12345" },
    { username: "user1", password: "password" }
  ];
  
  // Handle form submission
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if username and password match
    const user = users.find(user => user.username === username && user.password === password);
  
    const message = document.getElementById("message");
  
    if (user) {
      message.style.color = "green";
      message.textContent = "Login successful!";
      // Redirect or perform other actions
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password.";
    }
  });
  