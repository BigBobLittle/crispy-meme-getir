const startApp = require("./app");

startApp.listen(process.env.port || 3000, () => {
  console.log("started");
});
