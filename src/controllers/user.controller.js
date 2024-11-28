import { client } from "../config/db.js";

const getAllUsers = async (req, res) => {
  try {
    const result = await client.query("SELECT id, email, username, role FROM users");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

const getUserById = async (req, res) => {
  try {
    const result = await client.query("SELECT id, email, username, role FROM users WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

const updateUserRole = async (req, res) => {
  // console.log("hitttt")
  const { userId, role } = req.body;
  console.log(userId,role)
  try {
    const result = await client.query(
      "UPDATE users SET role = $1 WHERE id = $2 RETURNING id, email, username, role",
      [role, userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User role updated successfully', user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user role' });
  }
};

export {
  getAllUsers,
  getUserById,
  updateUserRole
};