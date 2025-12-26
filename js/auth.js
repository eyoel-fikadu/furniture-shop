const API_URL = "http://localhost:3000";

// Register
function register() {
  let username = document.getElementById("regUsername").value;
  let password = document.getElementById("regPassword").value;

  fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Registration Response:", data);
      alert(data.message);
      window.location.href = "login.html";
    })
    .catch(() => alert("Registration failed"));
}

// Login
function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then(data => {
      console.log("Login Success:", data);
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    })
    .catch(() => alert("Invalid username or password"));
}

// Auth check
function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
