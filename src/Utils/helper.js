require("dotenv").config();
const mongoose = require("mongoose");
const Records = require("../models/records");

// connect to our db
exports.connectDb = async () => {
  await mongoose
    .connect(process.env.mongoUri)

    .catch((err) => console.log("error from db", err));
};

// aggregating data through series of pipelines
exports.groupData = async ({ startDate, endDate, minCount, maxCount }) => {
  if (!startDate || !endDate || !minCount || !maxCount) {
    throw new Error(
      "Please provide the `startDate`, `endDate`, `minCount`, and `maxCount` for this operation"
    );
  }

  const aggregate = await Records.aggregate([
    // 1. match all data between startDate and endDate
    {
      $match: {
        $and: [
          {
            createdAt: { $gte: new Date(startDate) },
          },
          {
            createdAt: { $lte: new Date(endDate) },
          },
        ],
      },
    },

    // 2. add the sum of the 'counts' array as 'totalCount'
    { $addFields: { totalCount: { $sum: "$counts" } } },

    // 3. filter the resulting data between the range[minCount - maxCount]
    {
      $match: {
        $and: [
          { totalCount: { $gte: minCount } },
          { totalCount: { $lte: maxCount } },
        ],
      },
    },

    // pick and return the fields [key, createdAt, totalCount] , forgo the _id field
    {
      $project: { key: 1, createdAt: 1, totalCount: 1, _id: 0 },
    },
  ]);

  return aggregate;
};
