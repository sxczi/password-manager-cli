const fs = require('fs');
const path = require('path');

const decrypt = require('../encryption').decrypt;

module.exports.getAccount = function getAccount(userArgs) {
  const accounts = JSON.parse(
    fs.readFileSync(path.join(__dirname, "accounts.json"), "utf-8")
  );
  const found = accounts.some((account) => account.id == userArgs[1]);

  if (found) {
    const account = accounts.find((account) => account.id == userArgs[1]);
    console.log(
      `Website: ${account.website}\nEmail: ${decrypt(
        account.email
      )}\nPassword: ${decrypt(account.password)}\nID: ${account.id}`
    );
  } else {
    console.log("Account not found.");
  }
}
