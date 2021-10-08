const fs = require('fs');
const path = require('path');

const encrypt = require('../encryption').encrypt;

module.exports.addAccount = function addAccount(userArgs) {
  const accounts = JSON.parse(
    fs.readFileSync(path.join(__dirname, "accounts.json"), "utf-8")
  );

  accounts.push({
    website: userArgs[1],
    email: encrypt(userArgs[2]),
    password: encrypt(userArgs[3]),
    id: Math.floor(Math.random() * 4000),
  });

  fs.writeFileSync(
    path.join(__dirname, "accounts.json"),
    JSON.stringify(accounts)
  );
  console.log("Account submitted.");
  return;
}
