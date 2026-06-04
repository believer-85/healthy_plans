const db = require("../config/db");

const getCategories = (req, res) => {
  const query =
    "SELECT * FROM categories";

  db.query(
    query,
    (err, results) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json(results);
    }
  );
};

module.exports = {
  getCategories,
};