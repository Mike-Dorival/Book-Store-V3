const router = require("express").Router();

const authController = require("../controllers/controller");

router.post("/register", authController.registerController);

router.post("/login", authController.loginController);

module.exports = router;
