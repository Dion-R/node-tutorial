const express = require("express");
const router = express.Router();
const {
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
  createPersonPostman,
} = require("../controllers/people");

router.get("/", getPerson);

router.post("/postman", createPersonPostman);

router.post("/", createPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

module.exports = router;
