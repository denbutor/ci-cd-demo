fetch("http://localhost:8000/api")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("message").textContent = data.message;
  })
  .catch(() => {
    document.getElementById("message").textContent = "Failed to connect to backend";
  });
