import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pointsByYearSchema = new Schema({
  year: Number,
  points: Number,
  team: String
}, { _id: false });


const DriverSchema = new Schema({
  name: String,
  nationality: String,
  team: String,
  officialNumber: Number,
  podiums: Number,
  wins: Number,
  pointsByYear: [pointsByYearSchema],
  image: String
});


export const Driver = mongoose.model("Driver", DriverSchema);
export default Driver;