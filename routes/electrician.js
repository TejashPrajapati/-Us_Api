const router = require("express").Router();
const Electrician = require("../models/Electrician")

//CREATE electrician
router.post("/", async (req, res) => {
  const electrician = new Electrician(req.body);
  try {
    const electricianData = await electrician.save();
    res.status(200).json(electricianData);
  } catch (error) {
    res.status(500).json(error);
  }

});

// GET electrician
router.get("/", async (req, res) => {
  try {
    const electrician = await Electrician.find();
    res.status(200).json(electrician);
  } catch (error) {
    res.status(500).json(error);
  }
});

// //DELETE Spa
// router.delete("/:id", async (req, res) => {
//   try {
//     await Spa.findByIdAndDelete(req.params.id);
//     res.status(200).json(" Deleted");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // GET SINGLE Spa
// router.get("/:id", async (req, res) => {
//   try {
//     const slider = await Spa.findById(req.params.id);
//     res.status(200).json(slider);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// //GET ALL Spa
// router.get("/", async (req, res) => {
//   try {
//     const spa = await Spa.find();
//     res.status(200).json(spa);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

module.exports = router;
