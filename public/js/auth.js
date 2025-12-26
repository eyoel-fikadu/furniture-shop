const API_URL = window.location.hostname === "localhost"
  ? "http://localhost:3000"
  : "https://online-furniture-business.netlify.app"; // Replace with your production API URL

// Helper: Local Storage Auth (Standalone Mode)
const getLocalUsers = () => JSON.parse(localStorage.getItem('standaloneUsers') || '[]');
const saveLocalUser = (user) => {
  const users = getLocalUsers();
  users.push(user);
  localStorage.setItem('standaloneUsers', JSON.stringify(users));
};

// Register
function register() {
  let username = document.getElementById("regUsername").value;
  let password = document.getElementById("regPassword").value;

  if (!username || !password) {
    return alert("Please fill in all fields");
  }

  fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
    .then(async res => {
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");
      alert(data.message);
      window.location.href = "/login";
    })
    .catch(err => {
      console.warn("Backend unavailable or error occurred. Using Standalone Mode (localStorage).", err);
      const users = getLocalUsers();
      if (users.find(u => u.username === username)) {
        return alert("User already exists");
      }
      saveLocalUser({ username, password });
      alert("Registration successful (Standalone Mode)");
      window.location.href = "/login";
    });
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
      if (!res.ok) throw new Error("Invalid credentials");
      return res.json();
    })
    .then(() => {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "/dashboard";
    })
    .catch(err => {
      console.warn("Backend unavailable or error occurred. Checking Standalone Mode...", err);
      const users = getLocalUsers();
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "/dashboard";
      } else {
        alert("Invalid username or password");
      }
    });
}

// Auth check
function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "/login";
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "/";
}
