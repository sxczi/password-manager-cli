const fs = require('fs');
const path = require('path');

const encrypt = require('../encryption').encrypt;

module.exports.updateAccount = function updateAccount(userArgs) {
  const accounts = JSON.parse(
    fs.readFileSync(path.join(__dirname, "accounts.json"), "utf8")
  );
  const found = accounts.some((account) => account.id == userArgs[1]);

  if (found) {
    const updatedAccount = {
      website: userArgs[2],
      email: userArgs[3],
      password: userArgs[4],
      id: userArgs[1],
    };

    accounts.forEach((account) => {
      if (account.id == userArgs[1]) {
        account.website = updatedAccount.website
          ? updatedAccount.website
          : account.website;
        account.email = updatedAccount.email
          ? encrypt(updatedAccount.email)
          : account.email;
        account.password = updatedAccount.password
          ? encrypt(updatedAccount.password)
          : account.password;
      }
    });

    fs.writeFileSync(
      path.join(__dirname, "accounts.json"),
      JSON.stringify(accounts)
    );
    console.log(`Account #${userArgs[1]} has been updated.`);
  } else {
    console.log("Account not found.");
  }
}
