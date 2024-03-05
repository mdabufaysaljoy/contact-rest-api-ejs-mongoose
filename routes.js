const router = require("express").Router();
const {
  getAllContact,
  getSingleContact,
  createContact,
  deleteContact,
  updateContact,
} = require("./controllers");

router.get("/", getAllContact);
router.get("/:id", getSingleContact);
router.get("/delete/:id", deleteContact);
router.post("/", createContact);
router.put("/:id", updateContact);

module.exports = router;
