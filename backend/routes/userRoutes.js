const Router = require("express");
const {
  createUser,
  merchant_login,
  getAllMerchants,
  createRoles,
  getRoles,
  getRoleById,
  updateRole,
  getAllUserRoles,
} = require("../controllers/UserController");
const router = Router();

router.post("/", createUser);
router.post("/login", merchant_login);
router.get("/allmerchants", getAllMerchants);
// User roles
router.post("/role", createRoles);
router.get("/allroles", getRoles);
router.get("/alluserroles", getAllUserRoles);
router.get("/role/:id", getRoleById);
router.put("/updateRole/:id", updateRole);

module.exports = router;
