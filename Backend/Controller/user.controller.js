import User from "../Models/user.model.js";

export const getCurrentUser = async (req, res) => {
  try {
    let id = req.userId;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(400).json({ message: "User doesn't found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "get current user error" });
  }
};
