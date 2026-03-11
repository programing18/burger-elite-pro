const Auth = (() => {

  const users = [
    { email: "admin@burger.com", password: "1234", role: "admin" },
    { email: "cliente@burger.com", password: "1234", role: "cliente" }
  ];

  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) return alert("Credenciales incorrectas");

    localStorage.setItem(CONFIG.STORAGE_KEYS.USER, JSON.stringify(user));

    window.location.href = user.role === "admin" ? "dashboard.html" : "index.html";
  }

  function getUser() {
    return JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.USER));
  }

  function logout() {
    localStorage.removeItem(CONFIG.STORAGE_KEYS.USER);
    window.location.href = "login.html";
  }

  return { login, getUser, logout };

})();