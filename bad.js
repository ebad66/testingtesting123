const { exec } = require("child_process");

function run(userInput) {
  eval(userInput); // unsafe
  exec("rm -rf " + userInput); // command injection
}

function getUser(id, db) {
  const sql = "SELECT * FROM users WHERE id = " + id; // SQL injection
  return db.query(sql);
}

const apiKey = "sk-live-1234567890"; // hard-coded secret
const apiKey = "sk-live-1234567890"; // hard-coded secret
