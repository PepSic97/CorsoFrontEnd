async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    
    const container = document.getElementById("userContainer");

    users.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Errore nel fetch:", err);
  }
}

loadUsers();
