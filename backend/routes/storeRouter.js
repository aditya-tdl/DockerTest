const Router = require("express");
const { create_store } = require("../controllers/StoreController");
const router = Router();

router.post("/", create_store);

module.exports = router;
