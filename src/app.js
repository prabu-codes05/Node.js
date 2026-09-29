//middleware bhaneko data sahi xa kinai check garni validate garni verify garni etc

import express from "express";
const PORT = 5004;
const app = express(); //express euta backend ko framework ho
app.use("/health", (req, res) => {
  // app.use is predefined syntax can't use any other instead of it
  res.status(200).json({
    status: "OK", //ok means chaliraxa hai
    uptime: process.uptime(), //uptime means hamro backend chaleko kati bhayo bhanni ho
  });
});

app.use((err, req, res, next) => {
  // next bhaneko yespaxi ni ajai middleware xa bhannu ho
  res.status(500).json({
    status: "error",
    message: err.messsage,
  });
  next();
});

export default app;
