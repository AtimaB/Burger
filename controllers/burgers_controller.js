var express = require("express");
const burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name
    ], function (result) {
        res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log(req.params.id);

    let condition = "id =" + req.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: true
    }, condition, function (result) {
        if (result.changeRows == 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});
module.exports = router;