import {Router} from 'express';
import {activeCheck, increment_likes, delete_comment_by_user, get_comments_by_posts, deletePost, getAllPosts, createPost} from "../controllers/post.controller.js";
import {commentPost} from "../controllers/user.controller.js"
import multer from 'multer';

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname);
  }
})

const upload = multer({storage : storage});

router.route('/').get(activeCheck);

router.route("/post").post(upload.single('media'), createPost);
router.route("/posts").get(getAllPosts);
router.route("/delete_post").delete(deletePost);
router.route("/comment").post(commentPost);
router.route("/get_comments").get(get_comments_by_posts);
router.route("/delete_comment").delete(delete_comment_by_user);
router.route("/increment_post_like").post(increment_likes);


export default router;