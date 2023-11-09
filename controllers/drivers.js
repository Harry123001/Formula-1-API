import Driver from "../models/Driver.js";

//get all drivers
export const getDrivers = async (req, res) => {
  try {
    const drivers =
      await Driver.find(); /* (including nested team object corresponding to current driver team) .populate({ path: 'team', select: '-__v', options: { strictPopulate: false } }).select({ __v: 0, team: { __v: 0 } }); */
    res.json(drivers);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

//get drivers without nested team object
/*
export const getDriversWithoutTeam = async (req, res) => {
  try {
    const drivers = await Driver.find({}, { team: 0 });
    res.json(drivers);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
*/

//getDriverById: Retrieves a driver by their official number.
export const getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findOne({
      driverId: req.params.officialNumber,
    });
    res.json(driver);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

//getDriverbyName
export const getDriverbyName = async (req, res) => {
  const { name } = req.params;
  const driver = await Driver.find({ name });
  res.json(driver);
};

// createDriver: Creates a new driver in the database.
export const createDriver = async (req, res) => {
  try {
    const driver = new Driver(req.body);
    await driver.save();
    res.status(201).json(driver);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

//updateDriver: Updates a driver in the database by their ID.
export const updateDriver = async (req, res) => {
  const { id } = req.params;
  const driver = await Driver.findByIdAndUpdate(id, req.body);
  res.status(200).json(team);
};

//deleteDriverById: Deletes a driver from the database by their ID.
export const deleteDriverById = async (req, res) => {
  try {
    const { driverId } = req.params;
    const deleted = await Driver.findByIdAndDelete(driverId);

    if (deleted) {
      return res.status(200).send("Driver Deleted!");
    }

    throw new Error("Driver not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// // Error handling middleware function
// export const errorHandler = (error, req, res) => {
//   console.error(error);
//   res.status(500).json({ error: error.message });
// };

// // getDriverByFirstName: Retrieves a driver by their name.
// export const getDriver = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const driver = await Driver.findById(id);

//     if (driver) {
//       return res.json(driver);
//     }

//     res.stats(404).json({ message: "Driver not found!" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };
