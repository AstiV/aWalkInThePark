const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const { userMiddleware, checkLoggedIn } = require("../../utils/middleware");

const dogRoutes = require("./dog");
const walkRoutes = require("./walk");

router.use(userMiddleware);

router.get("/", (req, res) => {
    res.send({ hello: true });
});

router.get("/protected", checkLoggedIn, (req, res) => {
    console.log("USER", req.user);
    res.send({ success: true });
});

router.use("/auth", authRoutes);
router.use("/dog", dogRoutes);
router.use("/walk", walkRoutes);

router.use((req, res) => {
    res.status(404).send({ error: "not-found" });
});

module.exports = router;
