// Esercizio 3.2
let userObj = { username: "cli_user", role: "editor" };

const { username: nick, role, active = false } = userObj;

console.log(nick, role, active);
