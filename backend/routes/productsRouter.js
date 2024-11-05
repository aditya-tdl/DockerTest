const Router = require("express");
const { getAllProducts } = require("../controllers/ProductController");
const router = Router();

router.get("/", getAllProducts);

module.exports = router;
