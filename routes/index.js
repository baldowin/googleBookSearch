const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoute = require("./google");

// Book routes
router.use("/books", bookRoutes);

// Google Book Routes
router.use("/google",googleRoutes);

module.exports = router;
