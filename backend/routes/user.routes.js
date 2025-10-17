import {Router} from 'express';
import { register, downloadProfile, getUserProfileAndUserBasedOnUsername, acceptConnectionRequest, whatAreMyConnections, getMyConnectionsRequests, sendConnectionRequest, updateProfileData, login, uploadProfilePicture, updateUserProfile, getUserAndProfile, getAllUserProfile} from '../controllers/user.controller.js';
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

const upload = multer({ storage: storage })

router.route("/update_profile_picture")
    .post(upload.single('profile_picture'), uploadProfilePicture);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/user_update").post(updateUserProfile);
router.route("/get_user_and_profile").get(getUserAndProfile);
router.route("/update_profile_data").post(updateProfileData);
router.route("/user/get_all_users").get(getAllUserProfile);
router.route("/user/download_resume").get(downloadProfile);
router.route("/user/send_connection_request").post(sendConnectionRequest);
router.route("/user/getConnectionRequests").get(getMyConnectionsRequests);
router.route("/user/user_connection_request").get(whatAreMyConnections); 
router.route("/user/accept_connection_request").post(acceptConnectionRequest);
router.route("/user/get_profile_based_on_username").get(getUserProfileAndUserBasedOnUsername);




export default router;

