const decrypt = require('../encryption').decrypt;
const fs = require('fs');
const path = require('path');

module.exports.accountsList = function accountsList() {
  const accounts = JSON.parse(
    fs.readFileSync(path.join(__dirname, "accounts.json"), "utf-8")
  );
  let list = "";

  accounts.forEach((account) => {
    list += `\nWebsite: ${account.website}\nEmail: ${decrypt(
      account.email
    )}\nPassword: ${decrypt(account.password)}\nID: ${account.id}\n`;
  });

  console.log(list);
  return;
}
