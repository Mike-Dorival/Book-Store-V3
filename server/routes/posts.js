const router = require("express").Router();
const { auth } = require("./verifyToken");

router.get("/", auth, (req, res) => {
  res.json({ post: { title: "tout fonctionne" } });
});

module.exports = router;
