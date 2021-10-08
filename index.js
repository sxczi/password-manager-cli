const addAccount = require("./commands/add").addAccount;
const getAccount = require("./commands/get").getAccount;
const accountsList = require("./commands/list").accountsList;
const removeAccount = require("./commands/remove").removeAccount;
const updateAccount = require("./commands/update").updateAccount;

function main(args) {
  const userArgs = args.slice(2);

  switch (userArgs[0]) {
    case "add":
      addAccount(userArgs);
      break;
    case "list":
      accountsList();
      break;
    case "remove":
      removeAccount(userArgs);
      break;
    case "update":
      updateAccount(userArgs);
      break;
    case "help":
      console.log("add\nlist\nremove\nupdate\nget");
      break;
    case "get":
      getAccount(userArgs);
      break;
    default:
      console.log("This is not a command smh");
  }
  return;
}

module.exports.main = main;
