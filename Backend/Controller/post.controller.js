import uploadOnCloudinary from "../Config/cloudinary.js";
import Post from "../Models/post.model.js";

export const createPost = async (req, res) => {
  try {
    let { description } = req.body;
    let newPost;
    if (req.file) {
      let image = await uploadOnCloudinary(req.file.path);
      newPost = await Post.create({
        author: req.userId,
        description,
        image,
      });
    } else {
      newPost = await Post.create({
        author: req.userId,
        description,
      });
    }

    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json({ message: "create post error" });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.find()
      .populate("author", "firstName lastName profileImage headline")
      .sort({ createdAt: -1 });

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: "get post error" });
  }
};

export const like = async (req, res) => {
  try {
    let postId = req.params.postId;
    let userId = req.userId;
    let post = await Post.findById(postId);

    if (!post) {
      return res.status(400).json({ message: "post not found" });
    }

    if (post.like.includes(userId)) {
      post.like.filter((id) => id !== userId);
    } else {
      post.like.push(userId);
    }
    await post.save();

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: `like error ${error}` });
  }
};

export const comment = async (req, res) => {
  try {
    let postId = req.params.id;
    let userId = req.userId;

    let { comment } = req.body;

    let post = await Post.findByIdAndUpdate(
      postId,
      {
        $push: { comment: { content, user: userId } },
      },
      { new: true }
    ).populate("comment.user", "firstName lastName profileImage headline");

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: `comment error ${error}` });
  }
};
