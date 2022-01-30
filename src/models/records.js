const { model, Schema, SchemaTypes } = require("mongoose");

// create a db schema and export for use at other parts of the code
const recordsSchema = new Schema({
  createdAt: SchemaTypes.Date,
  key: SchemaTypes.String,
  value: SchemaTypes.String,
  counts: SchemaTypes.Array,
});

module.exports = model("Record", recordsSchema);
