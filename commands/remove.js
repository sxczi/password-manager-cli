const fs = require('fs');
const path = require('path');

module.exports.removeAccount = function removeAccount(userArgs) {
  const id = userArgs[1];
  const accounts = JSON.parse(
    fs.readFileSync(path.join(__dirname, "accounts.json"), "utf-8")
  );

  if (accounts.find((account) => account.id == id)) {
    fs.writeFileSync(
      path.join(__dirname, "accounts.json"),
      JSON.stringify(accounts.filter((account) => account.id != id))
    );
    console.log("Account removed.");
  } else {
    console.log("Account not found on Database.");
  }
}
