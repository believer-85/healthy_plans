const db = require("../config/db");

// GET CURRENT USER PROFILE
const getProfile = (req, res) => {
  const userId = req.user.id;

  const query = `
    SELECT
      id,
      name,
      email,
      role
    FROM users
    WHERE id = ?
  `;

  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(results[0]);
  });
};

module.exports = {
  getProfile,
};