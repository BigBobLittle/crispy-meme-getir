const startApp = require("./app");

startApp.listen(process.env.port || 3900, () => {
  console.log("started");
});
