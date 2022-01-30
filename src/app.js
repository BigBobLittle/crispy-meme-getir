// require modules
const express = require("express");
const app = express();
const HelperFunctions = require("./Utils/helper");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// auto start db
(async function startDb() {
  await HelperFunctions.connectDb();
})();

// endpoint to fetch search records
app.post("/", async (req, res) => {
  try {
    const records = await HelperFunctions.groupData(req.body);

    return res.status(200).json({
      code: 0,
      msg: "success",
      records,
    });
  } catch (error) {
    return res.status(500).json({
      code: 1,
      msg: error.message,
    });
  }
});

module.exports = app;
