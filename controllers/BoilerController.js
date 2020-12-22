const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const boilers = require("../data/Boilers.json");

//getBoilerAll
app.get("/getAllBoilers", (req, res) => {
  res.status(200).json(boilers);
});

//getBoilerById
app.get("/getBoilerById/:id", (req, res) => {
  const found = boilers.some((boiler) => boiler.id === parseInt(req.params.id));
  if (found) {
    res
      .status(200)
      .json(boilers.filter((boiler) => boiler.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No boiler with the id ${req.params.id}` });
  }
});

//getBoilerByTypeId
app.get("/getBoilerByTypeId/:typeId", (req, res) => {
  const found = boilers.some(
    (boiler) => boiler.typeId === parseInt(req.params.typeId)
  );
  if (found) {
    res
      .status(200)
      .json(
        boilers.filter(
          (boiler) => boiler.typeId === parseInt(req.params.typeId)
        )
      );
  } else {
    res
      .status(400)
      .json({ msg: `No boiler with the TypeId ${req.params.typeId}` });
  }
});

//getBoilerByMaintainceRate
app.get("/getBoilerByMaintainceRate/:maintaince_rate", (req, res) => {
  const found = boilers.some(
    (boiler) => boiler.maintaince_rate === String(req.params.maintaince_rate)
  );
  if (found) {
    res
      .status(200)
      .json(
        boilers.filter(
          (boiler) =>
            boiler.maintaince_rate === String(req.params.maintaince_rate)
        )
      );
  } else {
    res.status(400).json({
      msg: `No boiler with the maintaince rate ${req.params.maintaince_rate}`,
    });
  }
});

//getBoilerByHourMaintainceCost
app.get("/getBoilerByHourMaintainceCost/:hour_maintaince_cost", (req, res) => {
  const found = boilers.some(
    (boiler) =>
      boiler.hour_maintaince_cost === String(req.params.hour_maintaince_cost)
  );
  if (found) {
    res
      .status(200)
      .json(
        boilers.filter(
          (boiler) =>
            boiler.hour_maintaince_cost ===
            String(req.params.hour_maintaince_cost)
        )
      );
  } else {
    res.status(400).json({
      msg: `No boiler with the maintaince cost ${req.params.hour_maintaince_cost}`,
    });
  }
});

//getBoilerByHourEventualCost
app.get("/getBoilerByHourEventualCost/:hourEventualCost", (req, res) => {
  const found = boilers.some(
    (boiler) =>
      boiler.hourEventualCost === String(req.params.hourEventualCost)
  );
  if (found) {
    res
      .status(200)
      .json(
        boilers.filter(
          (boiler) =>
            boiler.hourEventualCost === String(req.params.hourEventualCost)
        )
      );
  } else {
    res.status(400).json({
      msg: `No boiler with the eventual maintaince cost ${req.params.hourEventualCost}`,
    });
  }
});

//deleteBoilerById
app.get("/deleteBoilerById/:id", (req, res) => {
  const found = boilers.some((boiler) => boiler.id === parseInt(req.params.id));
  if (found) {
    res.status(200).json({
      msg: "Member deleted",
      boilers: boilers.filter(
        (boiler) => boiler.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `No boiler with the id ${req.params.id}` });
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
