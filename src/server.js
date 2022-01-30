const startApp = require("./app");

startApp.listen(process.env.PORT || 3900, () => {
  console.log("started");
});
