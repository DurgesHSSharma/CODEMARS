const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Appointment = require("./routes/appointment");
const medicalRecords = require("./routes/medicalRecords");
const reminders = require("./routes/reminders");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Routes
app.use("/api/appointments", appointment);
app.use("/api/medical-records", medicalRecords);
app.use("/api/reminders", reminders);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
