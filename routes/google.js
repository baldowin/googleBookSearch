const axios = require("axios");
const router = require("express").Router();
const apiKey = require(".env");

router.get("/", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key="+apiKey, { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
