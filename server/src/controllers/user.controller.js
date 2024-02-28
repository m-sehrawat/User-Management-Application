const express = require('express');
const router = express.Router();
const User = require("../models/user.model");

// GET
const getRequest = () => async (req, res) => {
    try {
        const item = await User.find().lean().exec();
        return res.status(201).send(item);
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

// POST 
const postRequest = () => async (req, res) => {
    try {
        const item = await User.create(req.body);
        return res.status(201).send(item);
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

// DELETE
const deleteRequest = () => async (req, res) => {
    try {
        const item = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).json(item);
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
};

router.post("/", postRequest());
router.get("/", getRequest());
router.delete("/:id", deleteRequest());

module.exports = router;